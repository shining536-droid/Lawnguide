import { SpokePage } from '../spoke-pages';

// Batch 14 - 31 to 35: fraud(3), jeonse-fraud(1), child-sex-crime(1)
export const spokesBatch14Pages31to35: SpokePage[] = [
  {
    domain: 'fraud',
    slug: 'fraud-complaint-required-documents',
    keyword: '사기 고소 시 필요한 서류 정리',
    questionKeyword: '사기 고소장을 접수하려면 어떤 서류를 준비해야 하나요?',
    ctaKeyword: '사기 고소 서류 체크리스트 확인',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '사기 고소 시 필요한 서류 5가지 총정리 | 로앤가이드',
      description: '사기 피해로 고소장을 접수하려는데 어떤 서류가 필요한지 모르겠나요? 고소장 양식부터 증거 목록까지 필수 서류 5가지를 지금 확인하세요.'
    },
    intro: '돈을 빌려줬는데 연락이 끊겼습니다. 중고거래 대금을 보냈는데 물건이 오지 않습니다. 사기라는 확신이 들어 경찰에 고소하려는데, 막상 어떤 서류를 준비해야 하는지 막막합니다. 고소장은 어디서 구하는지, 증거는 어떻게 정리해야 하는지 아무것도 모르는 상태에서 시작해야 합니다. 형사소송법 제223조에 따르면 범죄의 피해자는 고소할 수 있으며, 고소장 접수 시 제대로 된 서류를 갖추면 수사 착수가 훨씬 빨라집니다.',
    sections: [
      {
        title: '1. 고소장 — 사건의 핵심을 담는 문서',
        content: '<p><strong style="color:#1e3a5f">고소장은 수사기관에 범죄 사실을 알리고 처벌을 요구하는 공식 문서입니다. 형사소송법 제237조에 따라 서면 또는 구술로 할 수 있지만, 서면 고소가 훨씬 효과적입니다.</strong></p>\n<p>고소장에는 고소인(피해자) 인적사항, 피고소인(가해자) 인적사항, 범죄 사실(일시·장소·방법·피해 내용), 적용 법조(형법 제347조 사기죄), 고소 취지를 빠짐없이 기재해야 합니다. 특히 <strong>기망 행위(속인 내용)와 처분 행위(돈을 보낸 경위), 편취 금액을 구체적으로 적는 것</strong>이 핵심입니다.</p>\n<p>고소장 양식은 대한법률구조공단 홈페이지나 경찰서 민원실에서 구할 수 있습니다. 작성이 어려우면 법률구조공단의 무료 법률 상담을 먼저 받아보는 것도 방법입니다. A4 기준 2~3장 분량이면 충분하며, 핵심 사실만 간결하게 정리하는 것이 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 고소장에는 기망 행위·처분 행위·편취 금액을 구체적으로 적어야 수사가 빨리 진행됩니다.</blockquote>'
      },
      {
        title: '2. 증거 자료 — 사기 입증의 핵심',
        content: '<p><strong style="color:#1e3a5f">형법 제347조 사기죄는 기망 행위로 상대방을 착오에 빠뜨려 재물을 교부받는 범죄입니다. 따라서 "속였다"는 사실과 "돈을 보냈다"는 사실을 모두 증명할 수 있는 자료가 필요합니다.</strong></p>\n<p><strong>금전 거래 증거</strong>: 계좌이체 내역서, 무통장입금 확인증, 현금영수증 등 돈이 오간 기록이 가장 중요합니다. 인터넷뱅킹에서 거래내역 조회 후 PDF로 저장하거나, 은행 창구에서 거래확인서를 발급받으세요.</p>\n<p><strong>대화 기록 증거</strong>: 카카오톡, 문자, 이메일, 전화 녹음 등 상대방이 거짓말한 내용이 담긴 대화 기록입니다. 카카오톡은 대화 내보내기 기능으로 텍스트 파일을 추출하고, 스크린샷도 함께 저장합니다. 날짜와 발신자가 확인되어야 증거력이 높아집니다.</p>\n<p><strong>계약서·약정서</strong>: 차용증, 투자 계약서, 매매 계약서 등 거래 조건이 적힌 문서입니다. 원본이 없으면 사본이라도 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계좌이체 내역 + 대화 기록 + 계약서, 이 3가지가 사기 고소의 핵심 증거입니다.</blockquote>'
      },
      {
        title: '3. 신분증 사본과 위임장',
        content: '<p><strong style="color:#1e3a5f">고소장 접수 시 고소인 본인 확인을 위해 신분증 사본이 필요합니다. 대리인이 접수하는 경우에는 위임장과 인감증명서도 함께 준비해야 합니다.</strong></p>\n<p>고소인 본인이 직접 경찰서에 방문할 경우 주민등록증, 운전면허증, 여권 중 하나의 사본을 준비하면 됩니다. 변호사를 선임하여 대리 고소하는 경우에는 위임장(고소인 서명 또는 날인), 인감증명서, 변호사 신분증 사본이 추가로 필요합니다.</p>\n<p>피고소인의 신분증은 없어도 됩니다. 다만 피고소인의 이름, 주소, 연락처, 계좌번호 등 <strong>특정할 수 있는 정보가 많을수록 수사가 빨라집니다</strong>. 온라인 사기의 경우 상대방의 닉네임, 게시글 URL, 입금 계좌번호만으로도 고소 접수가 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 본인 신분증 사본은 필수, 피고소인 정보는 특정 가능한 범위까지만 준비하면 됩니다.</blockquote>'
      },
      {
        title: '4. 피해 금액 산정 자료와 추가 서류',
        content: '<p><strong style="color:#1e3a5f">사기 피해 금액이 명확해야 수사기관이 사건의 경중을 판단할 수 있습니다. 특히 피해액이 5억 원 이상이면 특정경제범죄 가중처벌 등에 관한 법률이 적용되어 처벌이 크게 강화됩니다.</strong></p>\n<p><strong>피해 금액 정리표</strong>를 별도로 작성하면 효과적입니다. 날짜별 입금 내역, 합계 금액, 약속했던 반환일 등을 표로 정리합니다. 여러 차례에 걸쳐 송금한 경우 각 건별로 구분하여 작성하세요.</p>\n<p><strong>추가로 도움이 되는 서류</strong>로는 내용증명 발송 내역(반환 요구 사실 증명), 상대방의 사업자등록증이나 명함(사업 관련 사기인 경우), 부동산등기사항전부증명서(부동산 관련 사기인 경우), 동일 피해자 진술서(다수 피해자가 있는 경우) 등이 있습니다.</p>\n<p>서류는 원본과 사본 각 1부씩 준비하는 것이 좋습니다. 원본은 보관하고 사본을 제출하되, 수사관이 원본 확인을 요청하면 보여줄 수 있도록 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 피해 금액 정리표를 따로 만들고, 내용증명 발송 내역도 함께 제출하면 수사에 큰 도움이 됩니다.</blockquote>\n\n<div style="margin-top:20px;padding:16px 20px;background:linear-gradient(135deg,#1e3a5f 0%,#2d5a8e 100%);border-radius:12px;text-align:center">\n<p style="margin:0;color:#ffd700;font-weight:bold;font-size:1.05em">사기 고소 서류 준비가 막막하다면</p>\n<p style="margin:6px 0 0;color:#fff;font-size:0.95em"><a href="/diagnosis/fraud" style="color:#ffd700;text-decoration:underline">로앤가이드에서 내 상황에 맞는 서류를 정리해보세요 &rarr;</a></p>\n</div>'
      }
    ],
    cases: [
      {
        title: '대법원 2024도18174 사건 (2025.09.25 선고)',
        summary: '이 사건에서 대법원은 사기죄의 성립에 일반적·전형적으로 위계에 의한 업무방해행위가 수반되는 것은 아니라고 판시했습니다. 피해자를 기망하여 대출금을 교부받은 사기죄와 위계로써 업무를 방해한 업무방해죄는 보호법익이 다르므로 별개로 성립한다고 보았습니다.',
        takeaway: '사기 고소장 작성 시 기망 행위(속인 내용)를 구체적으로 기재하는 것이 중요합니다. 법원은 기망과 업무방해를 별도 범죄로 판단하므로, 피해 사실을 빠짐없이 정리하면 가해자의 추가 처벌 가능성도 높아집니다.'
      }
    ],
    faq: [
      {
        question: '고소장은 어디에 접수하나요?',
        answer: '<strong>피해자 주소지 또는 범죄 발생지 관할 경찰서</strong>에 접수합니다. 사이버사기의 경우 경찰청 사이버수사국(ecrm.police.go.kr)에서 온라인 접수도 가능합니다. 검찰청에 직접 고소장을 제출할 수도 있지만, 실무상 경찰서 접수가 일반적입니다.'
      },
      {
        question: '증거가 부족해도 고소할 수 있나요?',
        answer: '네, 고소 접수 자체는 가능합니다. 다만 증거가 부족하면 "혐의 없음"으로 불기소 처분될 수 있습니다. <strong>최소한 금전 거래 내역과 상대방 특정 정보</strong>는 확보한 상태에서 고소하는 것이 효과적입니다.'
      },
      {
        question: '고소 비용은 얼마나 드나요?',
        answer: '형사 고소 자체에는 비용이 들지 않습니다. 무료입니다. 다만 변호사를 선임하여 고소장 작성을 의뢰하면 <strong>통상 50만~200만 원의 수임료</strong>가 발생합니다. 대한법률구조공단에서 무료 법률 상담과 소송 대리를 받을 수도 있습니다.'
      },
      {
        question: '고소 후 수사는 얼마나 걸리나요?',
        answer: '경찰 수사 기간은 사건 복잡도에 따라 다르지만, 통상 <strong>2~6개월</strong> 소요됩니다. 고소장 접수 후 약 2~4주 내에 첫 조사가 진행되며, 이후 피고소인 소환 조사, 증거 분석 등을 거쳐 검찰에 송치됩니다.'
      },
      {
        question: '사기 고소와 민사소송을 동시에 할 수 있나요?',
        answer: '네, 형사 고소와 민사소송은 별개의 절차이므로 <strong>동시에 진행할 수 있습니다</strong>. 형사 고소로 가해자 처벌을 추구하면서, 민사소송으로 피해 금액 회수를 병행하는 것이 가장 효과적인 전략입니다.'
      }
    ],
    cta: {
      text: '사기 피해 고소 서류 준비가 막막하다면, 지금 바로 내 상황을 정리해보세요',
      link: '/diagnosis/fraud'
    },
    internalLinks: [
      { label: '사기 피해 어디부터 시작해야 하나', href: '/spoke/fraud/fraud-victim-where-to-start' },
      { label: '사기죄 고소 절차 총정리', href: '/spoke/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기 피해 민사소송 진행 절차', href: '/spoke/fraud/fraud-civil-lawsuit-procedure' },
      { label: '사기 고소 vs 고발 차이점', href: '/spoke/fraud/fraud-accusation-vs-report-difference' },
      { label: '사기 피해금 강제집행 절차', href: '/spoke/fraud/fraud-damage-enforcement-procedure' }
    ]
  },
  {
    domain: 'fraud',
    slug: 'fraud-victim-where-to-start',
    keyword: '사기 피해 어디부터 시작해야 하나',
    questionKeyword: '사기를 당한 것 같은데 어디부터 시작해야 하나요?',
    ctaKeyword: '사기 피해 대응 순서 확인',
    type: '어디부터형',
    perspective: 'victim',
    meta: {
      title: '사기 피해 당했을 때 3단계 대응법 총정리 | 로앤가이드',
      description: '사기 피해를 당한 것 같은데 뭘 먼저 해야 할지 모르겠나요? 증거 확보부터 고소·민사소송까지 3단계 대응 순서를 지금 확인하세요.'
    },
    intro: '분명히 약속한 날짜에 돈을 돌려준다고 했는데, 갑자기 전화를 받지 않습니다. 카카오톡 프로필도 사라졌습니다. "혹시 사기 당한 건 아닐까" 하는 생각이 들면서도, 당장 뭘 해야 할지 머릿속이 하얘집니다. 사기 피해는 초기 대응이 가장 중요합니다. 시간이 지날수록 증거는 사라지고, 가해자의 재산은 빠져나갑니다.',
    sections: [
      {
        title: '1단계 — 지금 당장 증거부터 확보하세요',
        content: '<p><strong style="color:#1e3a5f">사기 피해를 인지한 순간부터 증거 확보가 시작되어야 합니다. 가해자가 증거를 인멸하기 전에 빠르게 움직이는 것이 핵심입니다.</strong></p>\n<p><strong>카카오톡·문자·이메일 대화 내용</strong>을 즉시 캡처하거나 내보내기 기능으로 저장하세요. 상대방이 대화방을 나가거나 메시지를 삭제하면 복구가 매우 어렵습니다. 특히 돈을 빌려달라고 한 메시지, 변제 약속 메시지, 투자 수익을 보장한 메시지 등이 핵심 증거가 됩니다.</p>\n<p><strong>계좌이체 내역</strong>을 인터넷뱅킹에서 조회하여 PDF로 저장합니다. 여러 건이면 날짜·금액·상대 계좌를 표로 정리해두세요. <strong>상대방의 계좌번호, 이름, 연락처, 주소</strong> 등 알고 있는 모든 정보를 메모해둡니다.</p>\n<p>보이스피싱이나 온라인 사기라면 즉시 은행 고객센터(☎ 각 은행 대표번호)에 전화하여 <strong>지급정지 신청</strong>을 하세요. 전기통신금융사기 피해 방지 및 피해금 환급에 관한 특별법 제3조에 따라 피해금 환급을 받을 수 있는 길이 열립니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대화 캡처 + 계좌이체 내역 + 상대 정보 메모, 이 세 가지를 오늘 안에 끝내세요.</blockquote>'
      },
      {
        title: '2단계 — 형사 고소로 가해자를 압박하세요',
        content: '<p><strong style="color:#1e3a5f">형법 제347조에 따르면 사기죄는 10년 이하의 징역 또는 2천만 원 이하의 벌금에 처합니다. 피해 금액이 5억 원 이상이면 특정경제범죄 가중처벌법이 적용되어 3년 이상의 징역에 해당합니다.</strong></p>\n<p>관할 경찰서(피해자 주소지 또는 범죄 발생지)에 고소장을 접수합니다. 사이버사기는 경찰청 사이버수사국(ecrm.police.go.kr)에서 온라인 접수도 가능합니다. 고소장에는 기망 행위(어떻게 속였는지), 처분 행위(어떻게 돈을 보냈는지), 편취 금액을 구체적으로 기재합니다.</p>\n<p>고소장 접수 후 통상 2~4주 내에 경찰로부터 첫 연락이 옵니다. 조사 시 1단계에서 확보한 증거를 함께 제출하세요. <strong>고소장을 넣으면 가해자에게 출석 요구가 나가므로</strong>, 합의 협상에서 유리한 위치를 점할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형사 고소는 가해자를 처벌하는 것뿐 아니라, 합의와 피해 회수를 위한 가장 강력한 압박 수단입니다.</blockquote>'
      },
      {
        title: '3단계 — 민사소송으로 돈을 돌려받으세요',
        content: '<p><strong style="color:#1e3a5f">형사 고소와 별개로, 민사소송을 통해 피해 금액을 법적으로 회수할 수 있습니다. 민법 제750조(불법행위 손해배상)에 따라 사기로 인한 손해배상을 청구합니다.</strong></p>\n<p>피해 금액이 3,000만 원 이하이면 <strong>소액사건 심판</strong>으로 빠르게 진행할 수 있습니다. 3,000만 원 초과 시 일반 민사소송을 제기합니다. 소장에는 청구원인(사기 경위), 청구금액, 증거 목록을 기재합니다.</p>\n<p>가해자가 재산을 빼돌릴 우려가 있다면 <strong>가압류 신청</strong>을 먼저 하세요. 민사집행법 제276조에 따라 소송 전에도 가압류가 가능합니다. 가해자의 부동산, 예금, 차량 등을 압류하면 재산 도피를 막을 수 있습니다. 가압류 보증금은 청구금액의 10~30% 수준입니다.</p>\n<p>판결을 받은 후에도 가해자가 자발적으로 변제하지 않으면 강제집행(부동산 경매, 채권 압류 등)으로 회수합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 민사소송 전에 가압류부터 신청하세요. 재산 도피를 막아야 실제로 돈을 돌려받을 수 있습니다.</blockquote>\n\n<div style="margin-top:20px;padding:16px 20px;background:linear-gradient(135deg,#1e3a5f 0%,#2d5a8e 100%);border-radius:12px;text-align:center">\n<p style="margin:0;color:#ffd700;font-weight:bold;font-size:1.05em">사기 피해 대응이 막막하다면</p>\n<p style="margin:6px 0 0;color:#fff;font-size:0.95em"><a href="/diagnosis/fraud" style="color:#ffd700;text-decoration:underline">로앤가이드에서 내 상황에 맞는 대응 순서를 확인해보세요 &rarr;</a></p>\n</div>'
      }
    ],
    cases: [
      {
        title: '서울북부지법 2024고단3486 사건 (2025.11.06 선고)',
        summary: '이 사건에서 법원은 고시텔 양도 시 빈대 발생 사실을 알고 있으면서도 매수인에게 전혀 알리지 않은 피고인에게 사기죄를 인정했습니다. 거래에서 반드시 고지해야 할 중요한 사항을 숨긴 것 자체가 기망 행위에 해당한다고 판시했습니다.',
        takeaway: '사기죄는 적극적으로 거짓말한 경우뿐 아니라, 중요한 사실을 숨긴 경우에도 성립합니다. 상대방이 "거짓말은 안 했다"고 주장해도, 고지 의무 있는 사실을 숨겼다면 충분히 사기 고소가 가능합니다.'
      }
    ],
    faq: [
      {
        question: '상대방이 "갚겠다"고 하면 사기가 아닌 건가요?',
        answer: '단순히 변제 의사를 밝힌다고 사기가 아닌 것은 아닙니다. <strong>처음부터 갚을 의사나 능력이 없었는데 돈을 빌린 것</strong>이 입증되면 사기죄가 성립합니다. 차용 당시의 경제 상황, 다른 채무 여부, 변제 계획의 구체성 등이 판단 기준이 됩니다.'
      },
      {
        question: '피해 금액이 적어도 고소할 수 있나요?',
        answer: '네, <strong>금액에 관계없이 고소할 수 있습니다</strong>. 다만 실무상 10만 원 이하의 소액 사기는 경찰이 적극적으로 수사하지 않는 경우가 있습니다. 이 경우 동일한 가해자에게 피해를 입은 다른 피해자들과 함께 고소하면 수사 착수 가능성이 높아집니다.'
      },
      {
        question: '가해자 연락처밖에 모르는데 고소 가능한가요?',
        answer: '가능합니다. 전화번호, 카카오톡 ID, 은행 계좌번호 중 하나만 있어도 수사기관이 인적사항을 조회할 수 있습니다. 고소장에 <strong>"피고소인 성명 불상"</strong>으로 기재하고, 알고 있는 정보를 최대한 적으면 됩니다.'
      },
      {
        question: '고소 기한이 있나요?',
        answer: '사기죄의 <strong>공소시효는 10년</strong>입니다(형사소송법 제249조). 다만 시간이 지날수록 증거 확보가 어려워지고 가해자 재산이 빠져나갈 수 있으므로, 피해를 인지한 즉시 대응하는 것이 최선입니다.'
      },
      {
        question: '경찰이 사건을 안 받아주면 어떻게 하나요?',
        answer: '경찰은 정당한 사유 없이 고소 접수를 거부할 수 없습니다. 접수를 거부당하면 <strong>고소장을 우편으로 발송(내용증명)</strong>하거나, 검찰청에 직접 고소장을 제출하세요. 경찰서 민원실 접수대장에 기록을 남기는 것도 방법입니다.'
      }
    ],
    cta: {
      text: '사기 피해를 당했다면, 지금 바로 내 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/fraud'
    },
    internalLinks: [
      { label: '사기 고소 시 필요한 서류 정리', href: '/spoke/fraud/fraud-complaint-required-documents' },
      { label: '사기죄 고소 절차 총정리', href: '/spoke/fraud/fraud-prosecution-procedure-overview' },
      { label: '온라인 쇼핑몰 사기 당했을 때 대응법', href: '/spoke/fraud/online-shopping-fraud-response' },
      { label: '보이스피싱 피해 발생 시 즉시 대응법', href: '/spoke/fraud/voice-phishing-immediate-response' },
      { label: '사기 피해 민사소송 진행 절차', href: '/spoke/fraud/fraud-civil-lawsuit-procedure' }
    ]
  },
  {
    domain: 'fraud',
    slug: 'fraud-accused-response',
    keyword: '사기 혐의 받았을 때 초기 대응법',
    questionKeyword: '사기 혐의를 받고 있다면 처음에 어떻게 대응해야 하나요?',
    ctaKeyword: '사기 혐의 초기 대응법 확인',
    type: '상황형',
    perspective: 'offender',
    meta: {
      title: '사기 혐의 받았을 때 초기 대응 4가지 | 로앤가이드',
      description: '사기 혐의를 받고 경찰 출석 요구를 받으셨나요? 진술 전 반드시 알아야 할 초기 대응법 4가지와 변호사 선임 시기를 지금 확인하세요.'
    },
    intro: '갑자기 경찰서에서 전화가 왔습니다. "사기 혐의로 고소가 접수되었으니 출석해달라"는 내용입니다. 억울하기도 하고, 당장 체포되는 건 아닌지 불안하기도 합니다. 단순한 민사 분쟁이라고 생각했는데 형사 사건이 되어버렸습니다. 사기 혐의를 받고 있다면, 첫 경찰 조사 전의 대응이 사건의 결과를 좌우합니다.',
    sections: [
      {
        title: '1. 당황하지 마세요 — 출석 요구는 체포가 아닙니다',
        content: '<p><strong style="color:#1e3a5f">경찰의 출석 요구는 피의자 신분으로 조사하겠다는 의미이지, 곧바로 구속되거나 체포되는 것이 아닙니다. 형사소송법 제200조에 따라 피의자에 대한 출석 요구는 임의 수사의 일환입니다.</strong></p>\n<p>출석 요구를 받으면 먼저 사건번호, 담당 수사관 이름, 출석 일시를 확인하세요. 일정 조율이 필요하면 담당 수사관에게 연락하여 날짜를 변경할 수 있습니다. 출석을 거부하면 체포영장이 발부될 수 있으므로, 반드시 출석하되 <strong>충분한 준비를 한 후에 출석하는 것</strong>이 핵심입니다.</p>\n<p>고소장 사본을 열람하고 싶다면, 담당 수사관에게 요청하거나 변호사를 통해 수사 기록 열람·등사 신청(형사소송법 제266조의3)을 할 수 있습니다. 상대방이 어떤 내용으로 고소했는지 파악해야 효과적인 방어가 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 출석 요구는 임의 수사입니다. 출석 전에 고소 내용을 확인하고 충분히 준비하세요.</blockquote>'
      },
      {
        title: '2. 변호사 선임 — 첫 조사 전이 골든타임입니다',
        content: '<p><strong style="color:#1e3a5f">사기 혐의는 형법 제347조에 따라 10년 이하의 징역 또는 2천만 원 이하의 벌금에 해당하는 중범죄입니다. 첫 경찰 조사에서의 진술이 이후 재판까지 결정적 영향을 미치므로, 반드시 변호사 조력을 받아야 합니다.</strong></p>\n<p>형사소송법 제243조의2에 따라 피의자는 신문 시 변호인의 참여를 요구할 수 있습니다. 변호사가 조사실에 동석하여 부적절한 질문에 이의를 제기하고, 불리한 진술을 방지해줍니다. 변호사 선임 비용이 부담된다면 대한법률구조공단이나 대한변호사협회 법률구조재단에서 도움을 받을 수 있습니다.</p>\n<p>특히 사기 사건은 "기망의 고의"가 있었는지가 핵심 쟁점입니다. 처음부터 속일 의도가 없었고 단순히 갚지 못한 것이라면 민사 문제이지 사기가 아닙니다. 이 구분을 법적으로 명확히 주장하려면 <strong>전문가의 도움이 필수적</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 첫 조사 전에 변호사를 선임하세요. 조사 시 변호인 참여권을 반드시 행사하세요.</blockquote>'
      },
      {
        title: '3. 진술 전략 — 사실만 말하되, 불리한 진술은 피하세요',
        content: '<p><strong style="color:#1e3a5f">헌법 제12조 제2항에 따라 모든 국민은 자기에게 불리한 진술을 강요당하지 않습니다. 진술거부권은 피의자의 가장 중요한 권리 중 하나입니다.</strong></p>\n<p><strong>"기망의 고의"</strong>가 사기죄 성립의 핵심입니다. 차용 당시 변제할 의사와 능력이 있었는지, 투자 권유 당시 사업이 실재했는지, 물건을 보낼 의사가 있었는지 등이 핵심 쟁점입니다. 수사관의 질문에 즉흥적으로 답하지 말고, 사전에 정리한 내용을 바탕으로 <strong>일관되게 진술</strong>하세요.</p>\n<p>특히 주의할 점은 다음과 같습니다. 첫째, "미안하다" "잘못했다"는 표현은 범의 인정으로 해석될 수 있으므로 피하세요. 둘째, 기억나지 않는 부분은 추측하지 말고 "기억나지 않습니다"라고 답하세요. 셋째, 조서 내용을 반드시 꼼꼼히 읽고 사실과 다른 부분은 수정을 요구하세요.</p>\n<p>변호사와 사전에 예상 질문과 답변을 준비하면, 조사 현장에서 당황하지 않고 효과적으로 방어할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "속일 의도가 없었다"는 점을 일관되게 주장하고, 조서 내용을 반드시 확인하세요.</blockquote>\n\n<div style="margin-top:20px;padding:16px 20px;background:linear-gradient(135deg,#1e3a5f 0%,#2d5a8e 100%);border-radius:12px;text-align:center">\n<p style="margin:0;color:#ffd700;font-weight:bold;font-size:1.05em">사기 혐의를 받고 있다면</p>\n<p style="margin:6px 0 0;color:#fff;font-size:0.95em"><a href="/diagnosis/fraud" style="color:#ffd700;text-decoration:underline">로앤가이드에서 내 상황에 맞는 대응 전략을 확인해보세요 &rarr;</a></p>\n</div>'
      },
      {
        title: '4. 합의와 피해 변제 — 처벌 감경의 핵심 요소',
        content: '<p><strong style="color:#1e3a5f">사기 사건에서 피해자와의 합의 및 피해 금액 변제는 양형에 가장 큰 영향을 미치는 요소입니다. 양형기준에 따르면, 피해 회복이 이루어진 경우 감경 사유로 작용합니다.</strong></p>\n<p>합의 시 반드시 <strong>합의서에 "처벌을 원하지 않는다"는 문구</strong>를 포함시켜야 합니다. 단순히 돈만 갚는 것과 피해자가 처벌 불원 의사를 밝히는 것은 법적 효과가 크게 다릅니다. 합의서는 공증을 받아두는 것이 안전합니다.</p>\n<p>전액 변제가 어렵다면 분할 변제 계획서를 작성하여 성의를 보이세요. 최소한 일부라도 변제한 사실은 수사기관과 법원에 긍정적으로 평가됩니다. 합의금 지급은 반드시 계좌이체로 하여 기록을 남기세요.</p>\n<p>초범이고 피해 금액이 크지 않으며 피해자와 합의가 된 경우, <strong>기소유예(불기소 처분)</strong>가 나올 가능성도 있습니다. 반면 피해 회복 노력이 전혀 없으면 실형을 선고받을 수 있으므로, 합의 노력은 빠를수록 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 합의서에 "처벌불원" 문구를 반드시 포함하고, 변제 기록을 계좌이체로 남기세요.</blockquote>'
      }
    ],
    cases: [
      {
        title: '대법원 2024도1932 사건 (2025.09.11 선고)',
        summary: '이 사건에서 대법원은 임상시험 대행기관 운영자가 위탁기관으로부터 의뢰받은 임상시험을 진행하지 않았음에도 관련 비용을 청구·수령한 행위에 대해, 특정경제범죄법 위반(사기)죄와 업무방해죄가 별개로 성립하며 실체적 경합관계에 있다고 판시했습니다.',
        takeaway: '사기 혐의를 받는 경우, 단순히 돈을 갚지 못한 것인지 처음부터 기망의 고의가 있었는지가 핵심입니다. 법원은 기망 행위의 존재를 엄격하게 판단하므로, 계약 당시의 이행 의사와 능력을 입증할 수 있는 자료를 확보해두세요.'
      }
    ],
    faq: [
      {
        question: '출석 요구를 무시하면 어떻게 되나요?',
        answer: '정당한 사유 없이 출석 요구에 응하지 않으면 <strong>체포영장이 발부</strong>될 수 있습니다(형사소송법 제200조의2). 체포되면 48시간 이내에 구속 여부가 결정되므로, 출석 일정을 조율하더라도 반드시 출석하세요.'
      },
      {
        question: '사기 혐의로 구속될 수도 있나요?',
        answer: '피해 금액이 크거나, 도주·증거인멸 우려가 있으면 구속될 수 있습니다. 특히 <strong>피해 금액이 5억 원 이상인 특정경제범죄 사기</strong>는 구속 가능성이 높습니다. 주거가 일정하고 출석에 성실히 응하면 불구속 수사가 원칙입니다.'
      },
      {
        question: '민사 분쟁인데 사기로 고소당할 수 있나요?',
        answer: '네, 채무 불이행도 <strong>처음부터 갚을 의사가 없었다면 사기죄</strong>가 성립할 수 있습니다. 반대로 차용 당시 변제 의사와 능력이 있었다면 단순 민사 문제이므로 "혐의 없음" 처분을 받을 수 있습니다. 차용 당시의 경제 상황을 입증하는 것이 중요합니다.'
      },
      {
        question: '합의하면 처벌을 피할 수 있나요?',
        answer: '피해자와 합의하고 처벌불원서를 받으면 <strong>기소유예나 선고유예</strong> 가능성이 높아집니다. 다만 사기죄는 반의사불벌죄가 아니므로, 합의했더라도 검사가 기소할 수 있습니다. 그래도 합의는 양형에서 가장 중요한 감경 사유입니다.'
      },
      {
        question: '사기 전과가 생기면 어떤 불이익이 있나요?',
        answer: '사기 전과가 생기면 <strong>취업 제한(금융·공공기관 등), 여권 발급 제한, 해외 비자 거부</strong> 등의 불이익이 발생할 수 있습니다. 벌금형의 경우 5년, 징역형의 경우 10년 경과 후 실효됩니다. 전과 기록의 장기적 영향을 고려하여 초기 대응에 최선을 다하세요.'
      },
      {
        question: '변호사 비용은 얼마나 드나요?',
        answer: '사기 형사 사건 변호사 선임 비용은 사건 규모에 따라 다르지만, <strong>통상 300만~1,000만 원</strong> 수준입니다. 경제적으로 어려운 경우 대한법률구조공단의 무료 변호 서비스를 이용할 수 있습니다.'
      }
    ],
    cta: {
      text: '사기 혐의를 받고 있다면, 지금 바로 내 상황에 맞는 대응 전략을 확인해보세요',
      link: '/diagnosis/fraud'
    },
    internalLinks: [
      { label: '사기죄 고소 절차 총정리', href: '/spoke/fraud/fraud-prosecution-procedure-overview' },
      { label: '사기 고소 vs 고발 차이점', href: '/spoke/fraud/fraud-accusation-vs-report-difference' },
      { label: '사기죄 vs 횡령죄 vs 배임죄 차이', href: '/spoke/fraud/fraud-vs-embezzlement-vs-breach-of-trust' },
      { label: '사기 피해 민사소송 진행 절차', href: '/spoke/fraud/fraud-civil-lawsuit-procedure' },
      { label: '사기 피해 어디부터 시작해야 하나', href: '/spoke/fraud/fraud-victim-where-to-start' }
    ]
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-where-to-start',
    keyword: '전세사기 당했을 때 어디부터 해야 하나',
    questionKeyword: '전세사기를 당한 것 같은데 어디부터 시작해야 하나요?',
    ctaKeyword: '전세사기 피해 대응 순서 확인',
    type: '어디부터형',
    perspective: 'victim',
    meta: {
      title: '전세사기 당했을 때 5단계 대응법 총정리 | 로앤가이드',
      description: '전세보증금을 돌려받지 못할 것 같아 불안한가요? 임차권등기명령부터 전세사기피해자법 신청까지 5단계 대응법을 지금 확인하세요.'
    },
    intro: '계약 만료일이 다가오는데, 집주인이 전화를 받지 않습니다. 등기부등본을 떼어보니 근저당 금액이 전세금보다 많습니다. "혹시 전세사기 아닌가" 하는 불안감이 밀려옵니다. 전세보증금은 대부분 전 재산인데, 이대로 날리게 되는 건 아닌지 밤잠을 이룰 수 없습니다. 하지만 지금 바로 움직이면 보증금을 지킬 수 있는 길이 있습니다.',
    sections: [
      {
        title: '1단계 — 등기부등본과 권리관계부터 확인하세요',
        content: '<p><strong style="color:#1e3a5f">전세사기 피해가 의심되면, 가장 먼저 부동산 등기부등본(등기사항전부증명서)을 확인해야 합니다. 인터넷등기소(iros.go.kr)에서 700원에 즉시 발급받을 수 있습니다.</strong></p>\n<p>확인할 핵심 항목은 다음과 같습니다. <strong>갑구(소유권)</strong>: 현재 소유자가 계약 당시의 집주인과 동일한지 확인합니다. 소유권이 바뀌었다면 새 소유자에게 대항할 수 있는지 따져야 합니다. <strong>을구(근저당·전세권)</strong>: 근저당 설정 금액과 전세보증금을 합산하여 시세 대비 80%를 초과하면 깡통전세 위험이 높습니다.</p>\n<p>추가로 국세·지방세 체납 여부를 확인하세요. 집주인의 세금 체납이 있으면 경매 시 세금이 먼저 변제되어 보증금 회수가 더 어려워집니다. 세무서에 임대인 미납 국세 열람을 신청할 수 있습니다(국세징수법 제109조).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 등기부등본의 근저당 금액 + 전세금 합계가 시세 80%를 넘으면 즉시 다음 단계로 이동하세요.</blockquote>'
      },
      {
        title: '2단계 — 대항력과 우선변제권을 확보하세요',
        content: '<p><strong style="color:#1e3a5f">주택임대차보호법 제3조에 따르면, 주택의 인도(이사)와 주민등록(전입신고)을 마친 임차인은 다음 날부터 대항력을 갖습니다. 확정일자까지 받아야 우선변제권이 생깁니다.</strong></p>\n<p>아직 전입신고를 하지 않았다면 <strong>즉시 전입신고를 완료</strong>하세요. 확정일자는 동사무소(주민센터)에서 임대차계약서에 날인받으면 됩니다. 이미 전입신고와 확정일자가 되어 있다면 대항력과 우선변제권을 갖추고 있으므로, 경매 시 보증금을 우선적으로 돌려받을 수 있습니다.</p>\n<p>소액임차인에 해당하는지도 확인하세요. 서울 기준 보증금 1억 6,500만 원 이하인 경우 최우선변제를 받을 수 있으며, 경매 배당 시 다른 채권자보다 먼저 5,500만 원까지 변제받을 수 있습니다(주택임대차보호법 제8조, 시행령 제10조).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 전입신고 + 확정일자 + 점유(거주)가 대항력의 3요소입니다. 이사 나가기 전까지 유지하세요.</blockquote>'
      },
      {
        title: '3단계 — 임차권등기명령을 신청하세요',
        content: '<p><strong style="color:#1e3a5f">주택임대차보호법 제3조의3에 따르면, 임대차 기간이 끝난 후 보증금을 반환받지 못한 임차인은 관할 법원에 임차권등기명령을 신청할 수 있습니다.</strong></p>\n<p>임차권등기명령의 최대 장점은 <strong>이사를 나가도 대항력과 우선변제권이 유지</strong>된다는 것입니다. 등기 없이 이사를 나가면 대항력을 잃게 되므로, 새 집으로 옮겨야 하는 상황이라면 반드시 임차권등기명령부터 신청하세요.</p>\n<p>신청에 필요한 서류는 임대차계약서 사본, 주민등록등본, 건물등기사항전부증명서, 내용증명(보증금 반환 최고) 등입니다. 신청 후 통상 1~2주 내에 결정이 나옵니다. 비용은 등록면허세와 법원 수수료를 합해 약 3만~5만 원 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이사 나가기 전에 반드시 임차권등기명령을 신청하세요. 대항력을 잃으면 보증금 회수가 극히 어려워집니다.</blockquote>\n\n<div style="margin-top:20px;padding:16px 20px;background:linear-gradient(135deg,#1e3a5f 0%,#2d5a8e 100%);border-radius:12px;text-align:center">\n<p style="margin:0;color:#ffd700;font-weight:bold;font-size:1.05em">전세사기 피해 대응이 막막하다면</p>\n<p style="margin:6px 0 0;color:#fff;font-size:0.95em"><a href="/diagnosis/jeonse-fraud" style="color:#ffd700;text-decoration:underline">로앤가이드에서 내 상황에 맞는 대응 순서를 확인해보세요 &rarr;</a></p>\n</div>'
      },
      {
        title: '4단계 — 전세사기피해자법 피해자 인정 신청',
        content: '<p><strong style="color:#1e3a5f">전세사기피해자 지원 및 주거안정에 관한 특별법(전세사기피해자법) 제2조에 따라, 일정 요건을 충족하면 전세사기 피해자로 인정받아 다양한 지원을 받을 수 있습니다.</strong></p>\n<p>피해자 인정 요건은 크게 세 가지입니다. 첫째, 임대인에 대한 사기 혐의가 인정될 것(수사기관의 수사 중이거나 기소된 경우). 둘째, 보증금을 반환받지 못한 상태일 것. 셋째, 긴급한 주거 안정이 필요할 것.</p>\n<p>피해자로 인정되면 <strong>경매 유예, 우선 매수권, 긴급 주거 지원, 법률 상담 지원</strong> 등의 혜택을 받을 수 있습니다. 신청은 시·군·구청 전세사기 피해지원센터에서 합니다. 한국토지주택공사(LH)와 주택도시보증공사(HUG)에서도 상담을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 전세사기피해자법 피해자 인정을 받으면 경매 유예, 우선 매수권 등 실질적인 지원을 받을 수 있습니다.</blockquote>'
      },
      {
        title: '5단계 — 형사 고소와 민사소송을 병행하세요',
        content: '<p><strong style="color:#1e3a5f">형법 제347조에 따라 전세사기는 사기죄에 해당하며, 10년 이하의 징역 또는 2천만 원 이하의 벌금에 처합니다. 형사 고소와 민사소송을 동시에 진행하는 것이 가장 효과적인 전략입니다.</strong></p>\n<p><strong>형사 고소</strong>: 관할 경찰서에 임대인을 사기죄로 고소합니다. 이중 근저당 설정, 허위 권리관계 고지, 전세금 반환 능력 없이 계약 체결 등의 기망 행위를 구체적으로 기재합니다. 동일 건물의 다른 피해자들과 함께 고소하면 수사가 신속하게 진행됩니다.</p>\n<p><strong>민사소송</strong>: 전세보증금 반환 청구소송을 제기합니다. 판결을 받은 후 임대인의 재산에 강제집행을 할 수 있습니다. 소송 전에 임대인의 다른 부동산이나 예금에 대해 가압류를 해두면 재산 도피를 방지할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형사 고소로 임대인을 압박하면서, 민사소송과 가압류로 보증금 회수 경로를 동시에 확보하세요.</blockquote>'
      }
    ],
    cases: [
      {
        title: '대법원 2022도1862 사건 (2026.01.29 선고)',
        summary: '이 사건에서 대법원은 컴퓨터 등 정보처리장치에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 착오에 빠뜨린 경우, 사람에 대한 기망행위에 해당한다고 판시했습니다. 사기죄의 기망행위는 직접적인 대면뿐 아니라 간접적 방법에 의해서도 성립할 수 있습니다.',
        takeaway: '전세사기에서 임대인이 서류상으로 권리관계를 숨기거나 허위 정보를 제공한 경우, 직접 대면하지 않았더라도 기망행위로 인정될 수 있습니다. 계약 과정의 모든 서류와 대화를 증거로 보존하세요.'
      }
    ],
    faq: [
      {
        question: '전세보증보험에 가입되어 있으면 괜찮은 건가요?',
        answer: '전세보증보험(HUG 또는 SGI서울보증)에 가입되어 있다면 보증 한도 내에서 보증금을 돌려받을 수 있습니다. <strong>보증서에 기재된 보증 금액과 만기일</strong>을 확인하고, 사고 발생 즉시 보증기관에 보증금 반환 청구를 하세요.'
      },
      {
        question: '이미 이사를 나왔는데 어떻게 해야 하나요?',
        answer: '이사를 나오면 대항력을 잃을 수 있습니다. 다만 <strong>임차권등기명령이 완료된 상태에서 이사한 경우에는 대항력이 유지</strong>됩니다. 이미 이사를 나온 상태라면 즉시 법원에 임차권등기명령 신청이 가능한지 변호사와 상담하세요.'
      },
      {
        question: '같은 건물 다른 세입자도 피해를 입었다면?',
        answer: '<strong>공동 대응</strong>이 효과적입니다. 동일 건물 피해자들이 함께 고소하면 수사가 빨라지고, 전세사기피해자법 적용 가능성도 높아집니다. 건물 내 다른 세입자에게 연락하여 피해 상황을 공유하세요.'
      },
      {
        question: '집주인이 잠적했으면 어떻게 하나요?',
        answer: '임대인이 잠적한 경우에도 고소 및 소송이 가능합니다. 고소장에 마지막으로 확인된 주소를 기재하면 경찰이 소재 파악을 합니다. 민사소송은 <strong>공시송달(민사소송법 제194조)</strong> 방식으로 진행할 수 있습니다.'
      },
      {
        question: '전세사기 피해자 긴급 주거 지원은 어떻게 받나요?',
        answer: '전세사기피해자법에 따라 피해자로 인정되면 <strong>LH 공공임대주택 우선 입주, 전세자금 저금리 대출, 이사비 지원</strong> 등을 받을 수 있습니다. 관할 시·군·구청 전세사기 피해지원센터(☎ 1533-8119)에 문의하세요.'
      }
    ],
    cta: {
      text: '전세사기 피해가 의심된다면, 지금 바로 내 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/jeonse-fraud'
    },
    internalLinks: [
      { label: '전세사기 오늘 바로 확인하는 방법', href: '/spoke/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 피해자 인정 신청 서류', href: '/spoke/jeonse-fraud/jeonse-fraud-victim-application-docs' },
      { label: '깡통전세 확인하는 방법', href: '/spoke/jeonse-fraud/empty-jeonse-verification-method' },
      { label: '전세보증금 못 돌려받을 때 대처법', href: '/spoke/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 vs 전세보증금 미반환 차이', href: '/spoke/jeonse-fraud/jeonse-fraud-vs-deposit-default' }
    ]
  },
  {
    domain: 'child-sex-crime',
    slug: 'parent-response-checklist',
    keyword: '아동 성범죄 피해 보호자 대응 체크리스트',
    questionKeyword: '아이가 성범죄 피해를 입었을 때 보호자가 해야 할 일은 무엇인가요?',
    ctaKeyword: '아동 성범죄 보호자 대응법 확인',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '아동 성범죄 피해 보호자 체크리스트 7가지 | 로앤가이드',
      description: '아이가 성범죄 피해를 당한 것 같은데 어떻게 해야 할지 모르겠나요? 신고부터 치료 지원까지 보호자 필수 체크리스트 7가지를 지금 확인하세요.'
    },
    intro: '아이가 평소와 다르게 행동합니다. 어딘가 위축되어 있고, 특정 장소나 사람을 피하려 합니다. 아이의 입에서 나온 이야기를 듣는 순간, 머릿속이 하얘집니다. 분노와 죄책감이 동시에 밀려오지만, 지금 보호자가 어떻게 대응하느냐에 따라 아이의 회복과 법적 보호가 크게 달라집니다.',
    sections: [
      {
        title: '체크 1. 아이의 말을 있는 그대로 들어주세요',
        content: '<p><strong style="color:#1e3a5f">아이가 피해 사실을 이야기할 때, 보호자의 첫 반응이 가장 중요합니다. 놀라거나 화를 내면 아이는 "내가 잘못한 건가"라고 느끼고 입을 다물 수 있습니다.</strong></p>\n<p>"잘 말해줘서 고마워", "네 잘못이 아니야"라고 먼저 말해주세요. 아이의 이야기를 끊지 말고 끝까지 들어주되, <strong>유도 질문("그 사람이 너를 만졌어?")은 절대 하지 마세요</strong>. 아이 스스로 말한 내용만이 법적 증거로서 가치가 있습니다.</p>\n<p>아이가 말한 내용을 가능한 한 정확하게 메모해두세요. 날짜, 장소, 가해자 정보, 아이가 사용한 표현 그대로를 기록합니다. 이 기록은 이후 수사기관 진술에서 중요한 참고 자료가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 아이의 말을 유도하지 말고, 있는 그대로 듣고, 말한 내용을 정확히 기록하세요.</blockquote>'
      },
      {
        title: '체크 2. 즉시 신고하세요 — 신고 의무가 있습니다',
        content: '<p><strong style="color:#1e3a5f">아동·청소년의 성보호에 관한 법률(아청법) 제34조에 따르면, 아동·청소년 대상 성범죄를 알게 된 사람은 수사기관에 신고할 수 있으며, 교육기관·의료기관·복지시설 종사자 등은 신고 의무가 있습니다. 신고 의무자가 신고하지 않으면 300만 원 이하의 과태료가 부과됩니다.</strong></p>\n<p><strong>신고처</strong>: 경찰(☎ 112), 아동보호전문기관(☎ 1577-0024), 여성긴급전화(☎ 1366) 중 어디든 신고할 수 있습니다. 경찰에 직접 신고하는 것이 가장 빠릅니다.</p>\n<p>신고 시 아이의 이름과 나이, 피해 일시와 장소, 가해자 정보(알고 있는 범위)를 알려주세요. 구체적인 피해 내용은 이후 전문 조사관이 아이에게 직접 확인합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 112에 즉시 신고하세요. 교사·의료인 등 신고 의무자는 미신고 시 과태료 300만 원이 부과됩니다.</blockquote>'
      },
      {
        title: '체크 3. 증거를 훼손하지 마세요',
        content: '<p><strong style="color:#1e3a5f">아이의 옷을 빨거나 목욕을 시키면 신체적 증거가 사라질 수 있습니다. 수사기관의 지시가 있을 때까지 아이의 상태를 최대한 보존하세요.</strong></p>\n<p>피해 직후라면 아이의 옷을 갈아입히지 말고 종이봉투에 넣어 보관하세요(비닐봉투는 DNA 검출을 방해합니다). 경찰 신고 시 "증거 보존이 필요한 상황"이라고 알리면 신속하게 안내를 받을 수 있습니다.</p>\n<p>온라인 그루밍이나 디지털 성범죄인 경우, 관련 메시지·사진·영상을 <strong>삭제하지 말고 스크린샷으로 저장</strong>하세요. 상대방의 프로필, 대화방 이름, 날짜와 시간이 포함된 전체 화면을 캡처합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 옷 세탁 금지, 목욕 금지, 디지털 증거 삭제 금지. 수사기관 지시 전까지 현 상태를 유지하세요.</blockquote>'
      },
      {
        title: '체크 4. 전문 기관의 도움을 받으세요',
        content: '<p><strong style="color:#1e3a5f">아동 성범죄 피해자는 해바라기센터, 아동보호전문기관, 스마일센터 등에서 의료·심리·법률 지원을 한 번에 받을 수 있습니다. 성폭력방지 및 피해자보호 등에 관한 법률 제18조에 따라 모든 지원은 무료입니다.</strong></p>\n<p><strong>해바라기센터(☎ 1899-3075)</strong>: 전국 40여 개소에서 의료 검진, 심리 상담, 법률 지원, 수사 지원을 원스톱으로 제공합니다. 아동 전담 해바라기센터에서는 아동 전문 면담 조사관이 수사기관과 연계하여 아이의 진술을 도와줍니다.</p>\n<p><strong>국선변호사 제도</strong>: 성폭력처벌법 제27조에 따라 아동·청소년 성범죄 피해자는 무료로 국선변호사를 선임할 수 있습니다. 수사 단계부터 재판까지 피해자의 권리를 대리해줍니다. 경찰서나 해바라기센터에서 신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 해바라기센터(☎ 1899-3075)에 연락하면 의료·심리·법률 지원을 한 번에 받을 수 있습니다.</blockquote>\n\n<div style="margin-top:20px;padding:16px 20px;background:linear-gradient(135deg,#1e3a5f 0%,#2d5a8e 100%);border-radius:12px;text-align:center">\n<p style="margin:0;color:#ffd700;font-weight:bold;font-size:1.05em">아이의 피해 대응이 막막하다면</p>\n<p style="margin:6px 0 0;color:#fff;font-size:0.95em"><a href="/diagnosis/child-sex-crime" style="color:#ffd700;text-decoration:underline">로앤가이드에서 보호자가 해야 할 일을 순서대로 확인해보세요 &rarr;</a></p>\n</div>'
      },
      {
        title: '체크 5. 아이의 2차 피해를 막으세요',
        content: '<p><strong style="color:#1e3a5f">아청법 제31조에 따르면, 아동·청소년 대상 성범죄의 피해자 신원 정보나 사진 등을 공개하거나 유포하는 것은 금지되어 있습니다. 2차 피해 방지는 보호자의 가장 중요한 역할입니다.</strong></p>\n<p><strong>주변에 피해 사실을 알리지 마세요</strong>. 친척, 이웃, 학교 학부모 등에게 사건을 알리면 아이가 낙인찍히거나 소문이 퍼질 수 있습니다. 학교에는 담임교사에게만 최소한의 정보를 전달하되, 구체적인 피해 내용은 공유하지 마세요.</p>\n<p>아이에게 반복적으로 피해 경험을 질문하는 것도 2차 피해입니다. 수사기관의 공식 조사 외에 보호자가 아이에게 반복 질문하면 아이의 심리적 회복이 지연되고, 진술의 일관성도 떨어질 수 있습니다.</p>\n<p>SNS에 관련 내용을 게시하거나, 가해자를 공개적으로 비난하는 행위도 삼가세요. 오히려 명예훼손으로 역고소당하거나 재판에 불리한 영향을 줄 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 피해 사실 비공개, 아이에게 반복 질문 금지, SNS 게시 금지. 2차 피해 방지가 회복의 시작입니다.</blockquote>'
      },
      {
        title: '체크 6~7. 진술녹화 조사 준비와 손해배상 청구',
        content: '<p><strong style="color:#1e3a5f">성폭력처벌법 제30조에 따라, 19세 미만 피해자의 진술은 영상물 녹화 방식으로 이루어집니다. 이 녹화 진술은 재판에서 증거로 사용되므로, 한 번의 조사로 최대한 완전한 진술을 확보하는 것이 목표입니다.</strong></p>\n<p><strong>체크 6: 진술녹화 조사 준비</strong>. 조사 전에 아이에게 "경찰 아저씨/이모에게 있었던 일을 이야기하면 돼"라고 안내하되, 구체적인 답변을 연습시키지 마세요. 조사는 아동 전문 면담관이 진행하며, 보호자는 별도 공간에서 모니터로 관찰할 수 있습니다. 국선변호사가 조사에 동석하므로 사전에 변호사와 상의하세요.</p>\n<p><strong>체크 7: 손해배상 청구</strong>. 민법 제750조에 따라 가해자에게 치료비, 정신적 손해배상(위자료) 등을 청구할 수 있습니다. 형사 재판과 별도로 민사소송을 제기하거나, 형사재판 진행 중 배상명령 신청(소송촉진 등에 관한 특례법 제25조)을 할 수 있습니다. 배상명령은 별도의 민사소송 없이 형사 재판에서 함께 처리되므로 절차가 간편합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 진술녹화는 한 번의 기회입니다. 국선변호사와 사전 상의 후 조사에 임하세요.</blockquote>'
      }
    ],
    cases: [
      {
        title: '대법원 2025도3890 사건 (2025.07.18 선고)',
        summary: '이 사건에서 대법원은 아동에게 성적 수치심을 주는 메시지를 휴대전화로 전송한 행위에 대해, 아동이 실제로 메시지를 확인하지 않았더라도 객관적으로 접할 수 있는 상태에 이르렀다면 아동복지법 위반죄의 기수가 성립한다고 판시했습니다.',
        takeaway: '아동 성범죄는 직접 접촉이 없는 온라인 행위에도 엄격하게 적용됩니다. 아이가 받은 메시지나 온라인 대화를 삭제하지 말고 그대로 보존하면, 가해자가 "아이가 안 봤다"고 주장하더라도 처벌이 가능합니다.'
      }
    ],
    faq: [
      {
        question: '아이의 말만으로 신고할 수 있나요?',
        answer: '네, <strong>아이의 진술만으로도 신고와 수사 착수가 가능</strong>합니다. 물적 증거가 없더라도 아이의 일관된 진술은 유력한 증거가 됩니다. 신고 후 수사기관이 전문 면담을 통해 사실관계를 확인합니다.'
      },
      {
        question: '가해자가 같은 학교 학생이면 어떻게 하나요?',
        answer: '미성년자 간 성범죄도 <strong>아청법이 동일하게 적용</strong>됩니다. 다만 14세 미만인 촉법소년은 형사처벌 대신 소년보호 처분을 받습니다. 학교에 가해 학생 분리 조치를 요청하고, 교육청 학교폭력 신고센터(☎ 117)에도 신고하세요.'
      },
      {
        question: '신고하면 아이 이름이 알려지나요?',
        answer: '아닙니다. <strong>아청법 제31조에 따라 피해 아동의 신원 정보는 철저히 비공개</strong>됩니다. 수사기관, 법원, 언론 모두 피해 아동의 신원을 공개할 수 없으며, 위반 시 처벌을 받습니다.'
      },
      {
        question: '보호자도 심리 상담을 받을 수 있나요?',
        answer: '네, 해바라기센터와 스마일센터에서 <strong>보호자 대상 심리 상담을 무료로 제공</strong>합니다. 아이의 피해를 알게 된 보호자의 심리적 충격도 매우 크므로, 보호자 스스로의 정신건강 관리도 중요합니다.'
      },
      {
        question: '치료비와 상담비를 지원받을 수 있나요?',
        answer: '<strong>범죄피해자 구조금 제도</strong>를 통해 치료비, 상담비, 간병비 등을 지원받을 수 있습니다. 해바라기센터에서의 의료 검진과 심리 상담은 무료이며, 추가 치료가 필요한 경우 범죄피해자 지원센터(☎ 1577-1295)에서 지원금을 신청하세요.'
      },
      {
        question: '아이가 피해 사실을 말하지 않으려 하면?',
        answer: '아이에게 강요하지 마세요. <strong>"언제든 이야기하고 싶을 때 말해줘"</strong>라고 안내하고 기다리세요. 아동 전문 상담사(해바라기센터)가 놀이치료 등을 통해 아이가 편안한 환경에서 이야기할 수 있도록 도와줍니다.'
      }
    ],
    cta: {
      text: '아이의 성범죄 피해가 의심된다면, 지금 바로 보호자가 해야 할 일을 확인해보세요',
      link: '/diagnosis/child-sex-crime'
    },
    internalLinks: [
      { label: '아이가 성범죄 피해를 말했을 때 어디부터', href: '/spoke/child-sex-crime/child-disclosed-abuse-where-to-start' },
      { label: '아동성범죄 신고 의무와 절차', href: '/spoke/child-sex-crime/mandatory-reporting-and-procedure' },
      { label: '아동 피해자 2차 피해 방지 주의사항', href: '/spoke/child-sex-crime/preventing-secondary-harm-to-child' },
      { label: '아동성범죄 피해 신고 시 준비 서류', href: '/spoke/child-sex-crime/victim-report-required-documents' },
      { label: '온라인 그루밍 피해 의심 징후와 대응법', href: '/spoke/child-sex-crime/online-grooming-warning-signs' }
    ]
  }
];
