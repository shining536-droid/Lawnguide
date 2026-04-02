import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 21. 이 페이지는 [퇴직한 근로자]의 [14일 지급 기한이 지났는데 퇴직금을 못 받은 상황]에서 [법정 기한·지연이자·체불 신고 절차 파악]을 돕는 페이지다.
// 22. 이 페이지는 [상가 임차인]의 [내 상가가 상가임대차보호법 적용 대상인지 불확실한 상황]에서 [보호법 적용·비적용 차이와 확인 방법 파악]을 돕는 페이지다.
// 23. 이 페이지는 [학교폭력 가해학생 보호자]의 [합의 후 생활기록부 기록 여부가 걱정되는 상황]에서 [합의·기록 삭제·집행정지 절차 확인]을 돕는 페이지다.
// 24. 이 페이지는 [성폭력 피해자]의 [고소를 결심했지만 어떤 서류를 준비해야 할지 모르는 상황]에서 [고소장 작성·증거 서류·지원 기관 파악]을 돕는 페이지다.
// 25. 이 페이지는 [직장에서 성희롱을 당한 근로자]의 [신고하면 불이익 받을까 두려운 상황]에서 [불이익 조치 금지 규정과 보호 장치 확인]을 돕는 페이지다.

export const spokesBatch18_21to25: SpokePage[] = [
  {
    domain: 'retirement',
    slug: 'retirement-pay-14day-rule-detail',
    keyword: '퇴직금 지급 기한 14일 규정 상세',
    questionKeyword: '퇴직금은 퇴직 후 언제까지 받아야 하나요?',
    ctaKeyword: '퇴직금 14일 지급 기한',
    type: '수치기한형',
    meta: {
      title: '퇴직금 14일 지급 기한 — 3가지 핵심 규정 총정리 | 로앤가이드',
      description: '퇴직한 지 14일이 넘었는데 아직 퇴직금을 못 받았다면, 법정 기한과 지연이자·신고 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '퇴직한 지 벌써 3주가 지났습니다. 회사에서는 "자금 사정이 어렵다"는 말만 반복합니다. 통장을 매일 확인하지만 퇴직금은 들어오지 않습니다. 퇴직금 지급 기한은 법으로 정해져 있고, 늦어지면 지연이자까지 받을 수 있습니다.',
    sections: [
      {
        title: '첫째, 퇴직금은 퇴직일로부터 14일 이내에 지급해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여보장법 제9조에 따라 사용자는 퇴직일로부터 14일 이내에 퇴직금을 지급해야 합니다</strong></p>\n<p>퇴직금 지급 기한은 법으로 명확하게 정해져 있습니다. <strong>근로자가 퇴직한 날부터 14일</strong> 이내에 퇴직금을 지급하는 것이 사용자의 의무입니다. 여기서 "퇴직한 날"이란 근로관계가 종료된 날을 의미합니다.</p>\n<p>다만 특별한 사정이 있는 경우에는 <strong>당사자 간 합의</strong>에 의해 기한을 연장할 수 있습니다. 그러나 근로자의 자유로운 의사에 기한 합의여야 하며, 사용자가 일방적으로 연장할 수는 없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 퇴직일로부터 14일 이내 지급 의무 → 합의 시에만 연장 가능</blockquote>',
      },
      {
        title: '둘째, 14일이 지나면 연 20%의 지연이자가 발생합니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제37조에 따라 퇴직일 이후 14일이 지나면 미지급 금액에 연 20%의 지연이자가 가산됩니다</strong></p>\n<p>사용자가 정당한 사유 없이 퇴직금을 14일 이내에 지급하지 않으면, <strong>14일이 경과한 다음 날부터 지급하는 날까지</strong> 미지급 금액에 대해 연 20%의 지연이자를 추가로 지급해야 합니다.</p>\n<p>예를 들어 퇴직금이 1,000만원이고 30일이 지연되었다면, 지연이자는 약 <strong>16만 4천원</strong>(1,000만원 x 20% x 30/365)입니다. 기간이 길어질수록 금액이 커지므로 빨리 청구하는 것이 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지연이자: 14일 경과 후부터 연 20% 가산 → 미지급 기간 x 퇴직금 x 20%/365</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/retirement" style="color:#1565c0;font-weight:600">내 퇴직금 지연이자 계산해보기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 14일 규정 위반 시 사용자에게 형사 처벌이 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제109조에 따라 퇴직금 미지급 시 3년 이하 징역 또는 3천만원 이하 벌금에 처해질 수 있습니다</strong></p>\n<p>퇴직금을 기한 내에 지급하지 않는 것은 <strong>형사범죄</strong>에 해당합니다. 고용노동부에 진정을 제기하면 근로감독관이 사업장을 조사하고, 시정명령에도 불구하고 미지급이 계속되면 <strong>검찰 송치(사법처리)</strong>로 진행됩니다.</p>\n<p>진정 접수 방법은 3가지입니다. <strong>①고용노동부 민원마당 홈페이지(온라인) ②관할 고용노동지청 방문 ③우편 접수</strong>. 접수 후 통상 25일 이내에 처리되며, 사업주가 즉시 지급하면 종결됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사처벌: 3년 이하 징역 또는 3천만원 이하 벌금 → 고용노동부 진정으로 시작</blockquote>',
      },
      {
        title: '넷째, 평균임금 산정 시 포함되는 항목을 반드시 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 1일 평균임금 x 30일 x (재직일수/365)로 계산됩니다</strong></p>\n<p>퇴직금 산정의 기초가 되는 <strong>평균임금</strong>에는 기본급뿐 아니라 정기상여금, 연차수당, 식대, 교통비 등 <strong>근로의 대가로 지급된 모든 금품</strong>이 포함됩니다. 회사가 기본급만으로 계산했다면 차액을 청구할 수 있습니다.</p>\n<p>평균임금은 <strong>퇴직일 이전 3개월간 지급된 임금 총액</strong>을 그 기간의 총 일수로 나누어 산정합니다. 상여금은 지급 주기에 따라 3개월분으로 안분하여 포함합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">평균임금 = 퇴직 전 3개월 임금 총액 / 일수 → 상여금·수당 누락 여부 반드시 확인</blockquote>',
      },
      {
        title: '다섯째, 퇴직금 지급 기한 관련 주의사항을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 청구권 소멸시효는 퇴직일로부터 3년입니다</strong></p>\n<p>퇴직금을 받을 수 있는 기한은 <strong>퇴직일로부터 3년</strong>입니다. 3년이 지나면 법적 청구권이 소멸하므로, 미지급 상태라면 최대한 빨리 진정 또는 소송을 진행하세요.</p>\n<p>회사가 폐업했더라도 <strong>고용노동부 체당금 제도</strong>를 통해 최종 3년분 퇴직금을 대신 받을 수 있습니다. 도산 사실이 확인되면 근로복지공단에 체당금을 신청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소멸시효 3년 → 폐업 시 체당금 제도 활용 → 근로복지공단 신청</blockquote>',
      },
    ],
    cases: [
      {
        title: '평균임금 산정 기초인 임금의 범위에 관한 대법원 판결',
        summary:
          '대법원 2022다255454 사건(2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금은 근로의 대가로 지급된 금품이어야 하며, 당기순이익 실현을 전제로 한 특별성과급은 경영성과 분배 성격이므로 평균임금 산정의 기초인 임금에 해당하지 않는다고 판시했습니다.',
        takeaway:
          '퇴직금 계산 시 회사가 일부 항목을 임금이 아니라고 주장할 수 있습니다. 정기적·일률적으로 지급된 금품은 임금에 해당하지만, 경영성과에 좌우되는 성과급은 제외될 수 있으니 급여명세서를 꼼꼼히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '14일 기한을 회사와 합의해서 늘릴 수 있나요?',
        answer: '네, <strong>당사자 간 합의</strong>가 있으면 지급 기한을 연장할 수 있습니다. 다만 사용자가 일방적으로 연장하는 것은 불가능하며, 근로자의 자유로운 의사에 기한 합의여야 합니다.',
      },
      {
        question: '지연이자는 퇴직금과 별도로 청구해야 하나요?',
        answer: '지연이자는 <strong>별도로 청구하지 않아도 법적으로 자동 발생</strong>합니다. 고용노동부 진정이나 소송 시 지연이자를 함께 청구하면 됩니다.',
      },
      {
        question: '퇴직연금(DC형)도 14일 규정이 적용되나요?',
        answer: 'DC형 퇴직연금도 <strong>퇴직일로부터 14일 이내에 IRP 계좌로 이전</strong>해야 합니다. 사용자가 14일 이내에 부담금을 납부하지 않으면 동일하게 지연이자가 발생합니다.',
      },
      {
        question: '14일에 주말·공휴일도 포함되나요?',
        answer: '네, 14일은 <strong>역일 기준(달력 기준)</strong>이므로 주말과 공휴일이 모두 포함됩니다. 퇴직일 다음 날부터 14일째 되는 날까지가 지급 기한입니다.',
      },
      {
        question: '퇴직금을 일부만 받았는데 14일 규정 위반인가요?',
        answer: '<strong>미지급 잔액</strong>이 있다면 그 부분에 대해 14일 규정 위반이 성립합니다. 차액과 지연이자를 함께 청구할 수 있으니 급여명세서와 입금 내역을 비교해두세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
      { label: '퇴직금 체불 진정서 작성법', href: '/guide/retirement/retirement-pay-complaint-writing' },
      { label: '퇴직금 중간정산 요건과 절차', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 계산 방법 총정리', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },
  {
    domain: 'sangga',
    slug: 'commercial-lease-law-applicable-comparison',
    keyword: '상가임대차보호법 적용 vs 비적용 비교',
    questionKeyword: '내 상가가 상가임대차보호법 보호 대상인지 어떻게 알 수 있나요?',
    ctaKeyword: '상가임대차보호법 적용 여부',
    type: '비교형',
    meta: {
      title: '상가임대차보호법 적용 vs 비적용 — 5가지 핵심 차이 비교 | 로앤가이드',
      description: '내 상가에 상가임대차보호법이 적용되는지 헷갈린다면, 적용·비적용 5가지 차이와 확인 방법을 정리하세요. 지금 확인하세요.',
    },
    intro: '보증금 2억에 월세 300만원짜리 상가를 운영하고 있습니다. 임대인이 갱신을 거절하겠다고 하는데, 변호사에게 물었더니 "환산보증금을 먼저 계산해야 한다"고 합니다. 내 상가가 보호법 적용 대상인지 아닌지에 따라 권리가 완전히 달라집니다.',
    comparison: {
      title: '상가임대차보호법 적용 vs 비적용 핵심 비교',
      headers: ['구분', '보호법 적용', '보호법 비적용(민법)'],
      rows: [
        { label: '환산보증금', values: ['지역별 기준 이하', '지역별 기준 초과'] },
        { label: '차임 인상 제한', values: ['연 5% 이내 제한', '제한 없음(합의)'] },
        { label: '계약갱신요구권', values: ['최초 10년간 보장', '보장 없음'] },
        { label: '대항력(사업자등록)', values: ['법률로 보장', '등기 없으면 대항력 없음'] },
        { label: '권리금 보호', values: ['회수기회 보호', '보호 규정 없음'] },
      ],
    },
    sections: [
      {
        title: '첫째, 환산보증금이 지역별 기준 이하인지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">상가건물임대차보호법 제2조 제1항에 따라 환산보증금이 기준 이하인 상가만 보호 대상입니다</strong></p>\n<p>환산보증금은 <strong>보증금 + (월차임 x 100)</strong>으로 계산합니다. 예를 들어 보증금 2억, 월세 300만원이면 환산보증금은 5억원입니다. 서울 기준 9억원 이하이므로 보호 대상에 해당합니다.</p>\n<p>지역별 기준은 <strong>서울 9억, 수도권 과밀억제권역(과천·성남·안양 등) 6억 9천만원, 광역시(인천·부산 제외 군지역) 5억 4천만원, 기타 3억 7천만원</strong>입니다. 기준 초과 시 민법이 적용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">환산보증금 = 보증금 + (월차임 x 100) → 지역별 기준 이하 = 보호법 적용</blockquote>',
      },
      {
        title: '둘째, 차임 인상 제한은 적용 대상에서만 보호됩니다',
        content:
          '<p><strong style="color:#1e3a5f">보호법 적용 시 차임 증액은 연 5%를 초과할 수 없습니다(상가건물임대차보호법 제11조)</strong></p>\n<p>보호법이 적용되는 상가는 임대인이 <strong>연 5%를 초과하여 차임을 올릴 수 없습니다</strong>. 반면 비적용 상가는 이 제한이 없으므로 임대인이 시장 상황에 따라 자유롭게 인상을 요구할 수 있습니다.</p>\n<p>비적용이라도 <strong>민법상 신의성실 원칙</strong>에 의해 지나치게 과도한 인상은 다툴 여지가 있지만, 입증 부담이 임차인에게 있어 보호 수준이 크게 떨어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">적용: 5% 초과 인상 무효 | 비적용: 제한 없음(신의칙으로만 다툼 가능)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sangga" style="color:#1565c0;font-weight:600">내 상가 보호법 적용 여부 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 계약갱신요구권은 보호법 적용 상가만 보장됩니다',
        content:
          '<p><strong style="color:#1e3a5f">보호법 적용 시 최초 임대차 포함 10년간 갱신을 요구할 수 있습니다(제10조)</strong></p>\n<p>보호법이 적용되면 임차인은 <strong>최초 계약일부터 10년</strong>까지 계약갱신을 요구할 수 있고, 임대인은 정당한 사유 없이 거절할 수 없습니다. 비적용 상가는 갱신요구권 자체가 없으므로 계약 만료 시 퇴거 요구에 대항하기 어렵습니다.</p>\n<p>갱신요구 시기는 <strong>계약 만료 6개월~1개월 전</strong>까지입니다. 이 기간을 놓치면 갱신요구권을 행사할 수 없으니 달력에 반드시 표시해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">적용: 10년간 갱신요구권 | 비적용: 갱신요구권 없음 → 만료 시 퇴거 위험</blockquote>',
      },
      {
        title: '넷째, 권리금 보호는 환산보증금 기준과 관계없이 적용됩니다',
        content:
          '<p><strong style="color:#1e3a5f">상가건물임대차보호법 제10조의3~4의 권리금 보호 규정은 환산보증금 기준을 초과해도 적용됩니다</strong></p>\n<p>차임 인상 제한과 계약갱신요구권은 환산보증금 기준 이하인 상가에만 적용되지만, <strong>권리금 회수기회 보호</strong>는 기준 초과 상가에도 적용됩니다. 이는 많은 임차인이 놓치는 중요한 포인트입니다.</p>\n<p>다만 <strong>국유재산·공유재산</strong>에 해당하는 상가, 임대차 목적물을 <strong>1년 6개월 이상 영리 목적으로 사용하지 않은 경우</strong> 등은 권리금 보호가 제외됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">권리금 보호: 환산보증금 초과 상가에도 적용 → 국유재산·1년 6개월 미사용 등 예외</blockquote>',
      },
      {
        title: '다섯째, 대항력과 우선변제권은 사업자등록과 확정일자로 결정됩니다',
        content:
          '<p><strong style="color:#1e3a5f">보호법 적용 시 사업자등록 + 확정일자로 우선변제권을 확보할 수 있습니다</strong></p>\n<p>보호법이 적용되는 상가는 <strong>건물 인도 + 사업자등록</strong>만으로도 제3자에 대한 대항력이 생깁니다. 여기에 <strong>확정일자</strong>를 받으면 보증금에 대한 우선변제권까지 확보됩니다.</p>\n<p>비적용 상가는 민법상 전세권등기를 해야만 대항력이 생기고, 등기 없이는 건물이 경매에 넘어갈 때 <strong>보증금을 돌려받기 매우 어렵습니다</strong>. 환산보증금 기준 확인이 중요한 이유입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">적용: 사업자등록+확정일자 = 우선변제 | 비적용: 전세권등기 필수</blockquote>',
      },
    ],
    cases: [
      {
        title: '임대인의 철거·재건축 고지와 권리금 회수방해에 관한 대법원 판결',
        summary:
          '대법원 2022다202498 사건(2022.08.11 선고)에서 법원은 임대인이 신규 임차인과 임대차계약 체결을 위한 협의 과정에서 철거·재건축 계획을 고지한 것만으로는 권리금 회수방해에 해당하지 않지만, 정당한 사유 없이 임차인이 주선할 신규 임차인과 계약을 체결하지 않겠다는 의사를 확정적으로 표시하면 손해배상 책임이 인정된다고 판시했습니다.',
        takeaway:
          '임대인이 철거를 이유로 신규 임차인을 거부하더라도 무조건 정당한 사유가 되는 것은 아닙니다. 내용증명으로 신규 임차인 주선 사실을 통보하고, 거절 경위를 문서로 남기세요.',
      },
    ],
    faq: [
      {
        question: '환산보증금이 기준을 아슬아슬하게 넘으면 어떻게 되나요?',
        answer: '환산보증금이 <strong>1원이라도 기준을 초과</strong>하면 차임 인상 제한과 갱신요구권은 적용되지 않습니다. 다만 권리금 보호는 여전히 적용되므로 어떤 규정이 적용되는지 구분해서 확인하세요.',
      },
      {
        question: '부가세(VAT)가 포함된 월세로 환산보증금을 계산하나요?',
        answer: '환산보증금 계산 시 월차임은 <strong>부가가치세를 제외한 금액</strong>을 기준으로 합니다. 임대차계약서에 부가세 포함 여부를 반드시 확인하세요.',
      },
      {
        question: '보증금 없이 월세만 내는 상가도 보호법 적용 대상인가요?',
        answer: '네, 보증금이 0원이어도 <strong>월차임 x 100</strong>이 지역별 기준 이하이면 보호법이 적용됩니다. 예를 들어 서울에서 월세 800만원이면 환산보증금은 8억원이므로 적용 대상입니다.',
      },
      {
        question: '주택 1층에 있는 상가도 보호법이 적용되나요?',
        answer: '<strong>사업자등록 대상이 되는 건물</strong>이면 주택 겸용이어도 상가 부분에 대해 보호법이 적용될 수 있습니다. 다만 비영리 목적 사용(동창회 사무실 등)은 적용 대상이 아닙니다.',
      },
      {
        question: '비적용 상가인데 임대인이 과도하게 임대료를 올리면 방법이 없나요?',
        answer: '보호법이 적용되지 않더라도 <strong>민법상 신의성실 원칙</strong>에 따라 과도한 인상에 대해 소송으로 다툴 수 있습니다. 다만 5% 제한처럼 명확한 기준이 없어 입증이 어렵고 결과가 불확실합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/sangga',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상가임대차 진단', href: '/diagnosis/sangga' },
      { label: '상가 권리금 회수 절차와 타임라인', href: '/guide/sangga/key-money-recovery-timeline' },
      { label: '상가 임대료 인상 통보 대응법', href: '/guide/sangga/commercial-rent-increase-notification' },
      { label: '상가 보증금 반환 절차', href: '/guide/sangga/commercial-deposit-return-process' },
    ],
  },
  {
    domain: 'school-violence',
    slug: 'settlement-prevents-school-record',
    keyword: '학교폭력 합의하면 생기부 기록 안 남나요',
    questionKeyword: '학교폭력 합의하면 생활기록부에 기록이 안 남는 건가요?',
    ctaKeyword: '학교폭력 합의 생기부',
    type: 'Q&A형',
    perspective: '가해자',
    meta: {
      title: '학교폭력 합의 후 생기부 기록 — 4가지 핵심 규정 정리 | 로앤가이드',
      description: '학교폭력 합의했는데 생기부에 기록이 남을까 걱정이시라면, 합의·조치·기록 삭제 규정을 확인하세요. 지금 확인하세요.',
    },
    intro: '자녀가 학교폭력 심의위원회에서 조치를 받게 되었습니다. 피해 학생 측과 합의를 했는데, 합의만 하면 생활기록부에 기록이 안 남는 건지 확신이 없습니다. 합의와 생기부 기록의 관계, 삭제 가능 시기를 정확하게 확인해보세요.',
    sections: [
      {
        title: '첫째, 합의와 생기부 기록은 별개 문제입니다',
        content:
          '<p><strong style="color:#1e3a5f">합의를 했더라도 심의위원회가 조치를 결정하면 생활기록부에 기재됩니다</strong></p>\n<p>피해 학생 측과 원만하게 합의했더라도 <strong>학교폭력 심의위원회</strong>는 별도로 가해학생에 대한 조치를 결정합니다. 합의 사실은 심의 시 참고사항일 뿐, <strong>합의 자체가 조치를 면제하거나 기록을 방지하지는 않습니다</strong>.</p>\n<p>다만 합의가 이루어지면 심의위원회에서 <strong>가벼운 조치(1~3호)</strong>가 내려질 가능성이 높아지고, 이는 기록 삭제에 유리하게 작용합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 합의 ≠ 기록 면제 → 합의는 가벼운 조치 가능성을 높이는 참고사항</blockquote>',
      },
      {
        title: '둘째, 조치 유형에 따라 생기부 기록 삭제 시기가 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력예방법 제17조 제9항에 따라 조치 유형별 삭제 시기가 다릅니다</strong></p>\n<p>가해학생 조치는 1호(서면사과)~8호(전학)까지 있으며, 삭제 시기가 다릅니다. <strong>1~3호(서면사과, 접촉금지, 사회봉사)</strong>는 졸업 시 자동 삭제됩니다. <strong>4~7호(특별교육, 출석정지 등)</strong>는 졸업 후 2년 뒤 삭제됩니다.</p>\n<p><strong>8호(전학)</strong>와 <strong>9호(퇴학)</strong>는 졸업 후 4년 뒤에야 삭제됩니다. 따라서 합의를 통해 가능한 한 낮은 호수의 조치를 받는 것이 생기부 관리에 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">삭제 시기: 1~3호 졸업 시 / 4~7호 졸업+2년 / 8~9호 졸업+4년</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/school-violence" style="color:#1565c0;font-weight:600">내 자녀 상황에 맞는 대응 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 행정심판·행정소송으로 조치 자체를 취소할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">조치가 위법하다면 행정심판 또는 행정소송을 통해 처분을 취소할 수 있습니다</strong></p>\n<p>심의위원회의 조치 결정에 이의가 있다면 <strong>행정심판(시·도학생징계조정위원회)</strong>을 청구하거나 <strong>행정소송</strong>을 제기할 수 있습니다. 조치가 취소되면 생기부 기재 자체가 삭제됩니다.</p>\n<p>행정심판 청구 기한은 <strong>처분을 안 날로부터 90일, 처분이 있은 날로부터 180일</strong>입니다. 소송보다 빠르고 비용이 적으므로 먼저 행정심판을 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">행정심판: 처분일로부터 90일 이내 청구 → 조치 취소 시 기록 삭제</blockquote>',
      },
      {
        title: '넷째, 집행정지 결정을 받으면 즉시 기록이 삭제됩니다',
        content:
          '<p><strong style="color:#1e3a5f">행정소송법 제23조에 따른 집행정지결정이 있으면 즉시 생기부 기재를 삭제해야 합니다</strong></p>\n<p>행정소송을 제기하면서 <strong>집행정지 신청</strong>을 할 수 있습니다. 법원이 집행정지를 결정하면 처분이 없었던 것과 같은 상태가 되므로, 학교는 <strong>즉시 생기부 기재를 삭제</strong>해야 합니다.</p>\n<p>학교가 삭제 대신 "집행정지 중"이라는 문구만 부기하는 것은 <strong>적법하지 않습니다</strong>. 대법원은 이런 방식이 학생에게 실질적 불이익을 주며 재판청구권을 유명무실하게 한다고 판단했습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">집행정지 결정 → 즉시 삭제 의무 → "집행정지 중" 부기로 대체 불가</blockquote>',
      },
      {
        title: '다섯째, 대학 입시에서 기록 영향을 최소화하는 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">조치 유형과 삭제 시기를 고려한 입시 전략이 필요합니다</strong></p>\n<p>1~3호 조치는 <strong>졸업과 동시에 삭제</strong>되므로 수시 전형에서도 해당 사항이 사라집니다. 4호 이상은 졸업 후에도 기록이 남아 재수생·반수생에게 불리할 수 있으므로 <strong>조치 경감</strong>에 집중하세요.</p>\n<p>합의 외에도 <strong>가해학생의 반성문, 특별교육 이수, 봉사활동 실적</strong> 등을 준비하면 심의위원회에서 가벼운 조치가 내려질 가능성이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 합의 + 반성문 + 특별교육 → 1~3호 조치 목표 → 졸업 시 자동 삭제</blockquote>',
      },
    ],
    cases: [
      {
        title: '학교폭력 집행정지 시 생기부 즉시 삭제 의무를 판시한 대법원 판결',
        summary:
          '대법원 2025무565 사건(2025.09.09 선고)에서 법원은 학교폭력 관련 처분에 대한 집행정지결정이 있으면 처분이 없었던 것과 같은 상태가 되므로, 행정청은 즉시 학교생활기록부의 조치사항을 삭제해야 하며, "집행정지 중" 문구만 부기하는 것은 삭제에 준하는 조치로 볼 수 없다고 판시했습니다.',
        takeaway:
          '집행정지 결정을 받았는데 학교가 기록을 삭제하지 않고 "정지 중"만 표시한다면 법원 결정에 위반하는 것입니다. 학교에 즉시 삭제를 요구하고 불이행 시 간접강제를 신청하세요.',
      },
    ],
    faq: [
      {
        question: '합의만 하면 심의위원회 열리지 않나요?',
        answer: '피해 학생 측이 <strong>심의를 원하지 않으면 학교에서 자체적으로 종결</strong>할 수 있습니다. 이 경우 조치가 내려지지 않으므로 생기부에 기록되지 않습니다. 다만 학교장이 직권으로 심의를 요청할 수도 있습니다.',
      },
      {
        question: '조치를 받았다가 행동 개선이 인정되면 기록이 빨리 삭제되나요?',
        answer: '학교폭력예방법에 따라 <strong>가해학생이 긍정적 행동 변화를 보이면 심의위원회가 조치 변경</strong>을 할 수 있습니다. 조치가 경감되면 그에 맞는 삭제 시기가 적용되므로, 특별교육 성실 이수 등을 증명하세요.',
      },
      {
        question: '생기부 기록이 남아 있으면 대학 입시에 반드시 불이익이 있나요?',
        answer: '대학마다 심사 기준이 다릅니다. <strong>학생부종합전형</strong>에서는 불이익이 있을 수 있지만, 수능 위주 전형은 영향이 적습니다. 구체적 영향은 지원 대학의 입학처에 확인하세요.',
      },
      {
        question: '재심에서 조치가 취소되면 기록도 삭제되나요?',
        answer: '네, <strong>행정심판이나 행정소송에서 조치가 취소</strong>되면 처분 자체가 없던 것이 되므로 생기부 기재도 삭제됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/school-violence',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '학교폭력 진단', href: '/diagnosis/school-violence' },
      { label: '학교폭력 피해 신고 절차', href: '/guide/school-violence' },
      { label: '학교폭력 가해학생 조치 불복 절차', href: '/guide/school-violence' },
      { label: '학교폭력 피해 손해배상 안내', href: '/guide/school-violence' },
    ],
  },
  {
    domain: 'sex-crime',
    slug: 'victim-complaint-required-docs',
    keyword: '성폭력 피해 고소 시 필요한 서류',
    questionKeyword: '성폭력 피해로 고소하려면 어떤 서류를 준비해야 하나요?',
    ctaKeyword: '성폭력 고소 서류',
    type: '준비서류형',
    perspective: '피해자',
    meta: {
      title: '성폭력 피해 고소 준비 서류 5가지 — 고소장 양식 포함 | 로앤가이드',
      description: '성폭력 피해를 당해 고소를 결심했는데 어떤 서류를 준비해야 할지 모르겠다면, 고소 필수 서류 5가지를 확인하세요. 지금 확인하세요.',
    },
    intro: '용기를 내어 고소를 결심했습니다. 그런데 경찰서에 가서 뭘 가져가야 하는지, 고소장은 어떻게 쓰는 건지 전혀 모르겠습니다. 증거가 충분한지도 불안합니다. 성폭력 피해 고소에 필요한 서류를 하나씩 정리해보세요.',
    sections: [
      {
        title: '첫째, 고소장을 작성하세요 — 필수 기재 항목 5가지',
        content:
          '<p><strong style="color:#1e3a5f">고소장에는 고소인·피고소인 정보, 범죄 사실, 처벌 의사를 명시해야 합니다</strong></p>\n<p>고소장에 반드시 기재해야 할 항목은 <strong>①고소인(피해자) 인적사항 ②피고소인(가해자) 인적사항 ③범죄 사실(일시, 장소, 행위 내용) ④적용 법조 ⑤처벌을 원하는 의사표시</strong>입니다.</p>\n<p>범죄 사실은 <strong>6하 원칙(누가, 언제, 어디서, 무엇을, 어떻게, 왜)</strong>에 따라 구체적으로 작성하세요. 감정적 표현보다 객관적 사실을 중심으로 기술하는 것이 수사에 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">고소장 5가지: 고소인 정보 / 피고소인 정보 / 범죄 사실 / 적용 법조 / 처벌 의사</blockquote>',
      },
      {
        title: '둘째, 범행 관련 증거자료를 체계적으로 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">디지털 증거(문자·카톡·녹취)와 물적 증거를 함께 확보하세요</strong></p>\n<p>가해자와 주고받은 <strong>문자 메시지, 카카오톡 대화</strong>는 가장 중요한 증거입니다. 스크린샷뿐 아니라 <strong>원본 데이터</strong>(대화 내보내기)를 함께 보관하세요. 메시지를 삭제했더라도 복구가 가능할 수 있습니다.</p>\n<p><strong>CCTV 영상, 위치 기록(구글 타임라인), 통화 내역</strong>도 범행 전후 정황을 입증하는 데 활용됩니다. 시간이 지나면 CCTV가 삭제되므로 가능한 빨리 보존 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: 문자·카톡 원본 / CCTV 보존 요청 / 위치 기록 / 통화 내역</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sex-crime" style="color:#1565c0;font-weight:600">내 상황에 맞는 고소 준비 체크리스트 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 진단서와 소견서를 발급받으세요',
        content:
          '<p><strong style="color:#1e3a5f">신체적·정신적 피해를 입증하는 의료 기록이 중요합니다</strong></p>\n<p>피해 직후 또는 가능한 빠른 시일 내에 병원을 방문하여 <strong>진단서</strong>를 발급받으세요. 외상이 있다면 <strong>외과 진단서</strong>, 정신적 고통이 있다면 <strong>정신건강의학과 소견서</strong>를 함께 준비합니다.</p>\n<p>성폭력 피해의 경우 <strong>원스톱지원센터(해바라기센터)</strong>에서 무료로 증거채취(응급키트)와 진료를 받을 수 있습니다. 전국 39개소에서 24시간 운영하며, 전화번호는 <strong>1899-3075</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">의료 서류: 외과 진단서 + 정신과 소견서 → 해바라기센터 무료 증거채취</blockquote>',
      },
      {
        title: '넷째, 피해자 진술서를 미리 작성해두세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사 전에 진술 내용을 정리하면 일관된 진술에 도움이 됩니다</strong></p>\n<p>경찰 조사 시 긴장으로 인해 기억이 혼동될 수 있습니다. 미리 <strong>피해 경위를 시간순으로 정리한 진술서</strong>를 작성해두세요. 날짜, 시간, 장소, 가해자의 구체적 행위, 피해 후 상태를 빠짐없이 적습니다.</p>\n<p>진술서는 고소장과 별도로 준비하는 것이 좋습니다. 고소장이 법적 형식이라면, 진술서는 <strong>피해 사실을 상세하게 기술</strong>하는 문서입니다. 목격자가 있다면 목격자 진술서도 별도로 확보하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술서: 시간순 경위 정리 / 구체적 행위 기술 / 목격자 진술서 별도 확보</blockquote>',
      },
      {
        title: '다섯째, 국선변호사와 피해자 지원 제도를 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">성폭력 피해자는 국선변호사를 무료로 선임할 수 있습니다</strong></p>\n<p>성폭력범죄의처벌등에관한특례법 제27조에 따라 성폭력 피해자는 수사 단계부터 <strong>국선변호사</strong>를 무료로 지원받을 수 있습니다. 경찰서나 해바라기센터에서 신청하면 됩니다.</p>\n<p>추가로 활용할 수 있는 지원 제도는 다음과 같습니다. <strong>①한국성폭력상담소(02-338-5801) ②여성긴급전화 1366 ③대한법률구조공단(132) 무료 법률 상담</strong>. 혼자 준비하기 어렵다면 반드시 전문가의 도움을 받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원 제도: 국선변호사 무료 / 해바라기센터 1899-3075 / 여성긴급전화 1366</blockquote>',
      },
    ],
    cases: [
      {
        title: '촬영물 이용 협박죄의 성립 범위에 관한 대법원 판결',
        summary:
          '대법원 2024도14039 사건(2025.06.12 선고)에서 법원은 성폭력처벌법상 촬영물 등을 이용한 협박죄는 실제 촬영물을 방편으로 삼아 유포 가능성 등 해악을 고지한 경우 성립하지만, 해당 촬영물이 피해자를 대상으로 한 것이 아닌 경우에는 성립하지 않는다고 판시했습니다.',
        takeaway:
          '가해자가 "사진을 유포하겠다"고 협박한 경우, 그 촬영물이 피해자 본인을 촬영한 것인지가 핵심입니다. 협박 메시지, 촬영물 존재 여부를 증거로 확보하세요.',
      },
    ],
    faq: [
      {
        question: '고소는 경찰서에서만 할 수 있나요?',
        answer: '경찰서 외에 <strong>검찰청</strong>에도 직접 고소장을 제출할 수 있습니다. 또한 <strong>우편이나 온라인(경찰민원포털)</strong>으로도 접수 가능합니다. 다만 대면 접수 시 즉시 상담을 받을 수 있어 유리합니다.',
      },
      {
        question: '증거가 없으면 고소해도 소용없나요?',
        answer: '증거가 부족하더라도 <strong>고소 자체는 가능</strong>합니다. 피해자 진술의 일관성과 신빙성도 중요한 증거로 인정됩니다. 다만 보강 증거가 있을수록 수사와 기소에 유리하므로 가능한 증거를 최대한 확보하세요.',
      },
      {
        question: '고소 후 합의하면 처벌이 안 되나요?',
        answer: '성폭력범죄는 대부분 <strong>반의사불벌죄가 아니므로</strong> 합의해도 검찰이 기소할 수 있습니다. 다만 합의 여부는 양형(형량 결정) 시 참고됩니다. 강제추행 등 일부 유형은 피해자 의사에 따라 처벌 여부가 달라질 수 있습니다.',
      },
      {
        question: '고소장 접수 후 절차는 어떻게 진행되나요?',
        answer: '고소 접수 → <strong>담당 수사관 배정 → 피해자 조사 → 가해자 소환 조사 → 검찰 송치 → 기소 여부 결정</strong> 순서로 진행됩니다. 통상 수사에 2~6개월이 소요되며, 사건 복잡도에 따라 달라집니다.',
      },
      {
        question: '고소 사실이 주변에 알려질 수 있나요?',
        answer: '성폭력 피해자의 신원은 <strong>성폭력범죄의처벌등에관한특례법 제24조</strong>에 의해 보호됩니다. 수사기관과 언론은 피해자의 신원을 공개할 수 없으며, 위반 시 처벌됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '성범죄 진단', href: '/diagnosis/sex-crime' },
      { label: '성범죄 가이드', href: '/guide/sex-crime' },
      { label: '성범죄 피해자 국선변호사 신청', href: '/guide/sex-crime' },
      { label: '디지털 성범죄 대응법', href: '/guide/digital-sex-crime' },
    ],
  },
  {
    domain: 'sexual-harassment',
    slug: 'will-reporting-cause-workplace-disadvantage',
    keyword: '성희롱 신고하면 회사에서 불이익 받나요',
    questionKeyword: '성희롱을 신고하면 회사에서 해고당하거나 불이익 받을 수 있나요?',
    ctaKeyword: '성희롱 신고 불이익',
    type: 'Q&A형',
    perspective: '피해자',
    meta: {
      title: '성희롱 신고 불이익 금지 — 3가지 법적 보호 장치 | 로앤가이드',
      description: '성희롱 신고하면 해고당할까 걱정이시라면, 불이익 조치 금지 규정과 3가지 법적 보호 장치를 확인하세요. 지금 확인하세요.',
    },
    intro: '직장 상사에게 성희롱을 당했습니다. 신고하고 싶지만, 회사에서 불이익을 당할까봐 두렵습니다. "신고하면 오히려 잘리는 거 아닌가?" 걱정이 앞섭니다. 법은 성희롱 피해자를 어떻게 보호하는지 확인해보세요.',
    sections: [
      {
        title: '첫째, 성희롱 피해 신고를 이유로 불이익 조치를 하면 형사처벌됩니다',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제14조 제6항에 따라 피해 신고를 이유로 한 불이익 조치는 3년 이하 징역 또는 3천만원 이하 벌금에 해당합니다</strong></p>\n<p>법률은 성희롱 피해를 주장하거나 신고한 근로자에 대해 <strong>해고, 전보, 징계, 그 밖의 불이익 조치</strong>를 금지하고 있습니다. 여기서 "불이익 조치"에는 직접적인 해고뿐 아니라 <strong>부서 이동, 업무 배제, 성과 평가 불이익</strong> 등도 포함됩니다.</p>\n<p>사업주가 이를 위반하면 <strong>3년 이하 징역 또는 3천만원 이하 벌금</strong>이라는 형사 처벌을 받게 됩니다. 단순 징계가 아닌 형사범죄에 해당하므로 보호 효과가 강력합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불이익 금지: 해고·전보·징계·성과 불이익 모두 포함 → 위반 시 3년 이하 징역</blockquote>',
      },
      {
        title: '둘째, 사업주는 신고 즉시 조사하고 피해자 보호 조치를 해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제14조 제2항에 따라 사업주는 지체 없이 조사를 실시해야 합니다</strong></p>\n<p>성희롱 피해 사실이 신고되면 사업주는 <strong>지체 없이 당사자 등을 대상으로 조사</strong>를 실시해야 합니다. 조사 기간 동안 피해자에게 <strong>근무 장소 변경, 유급 휴가</strong> 등의 보호 조치를 해야 합니다.</p>\n<p>사업주가 조사를 하지 않거나 피해자 보호 조치를 취하지 않으면 <strong>500만원 이하의 과태료</strong>가 부과됩니다. 조사 미실시 자체가 위법이므로, 회사에 서면으로 신고 기록을 남기세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사업주 의무: 즉시 조사 + 피해자 보호 조치(근무 장소 변경·유급 휴가)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sexual-harassment" style="color:#1565c0;font-weight:600">내 상황에 맞는 신고 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 불이익 조치를 받았다면 고용노동부에 즉시 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부(1350)에 신고하면 근로감독관이 사업장 조사를 실시합니다</strong></p>\n<p>신고 후 실제로 불이익 조치가 발생했다면 <strong>고용노동부(전화 1350)</strong>에 신고하세요. 근로감독관이 사업장을 조사하고, 불이익 조치가 확인되면 <strong>시정 명령과 형사 고발</strong>이 진행됩니다.</p>\n<p><strong>국가인권위원회(전화 1331)</strong>에도 병행하여 진정할 수 있습니다. 인권위의 조사 결과와 시정 권고는 나중에 손해배상 소송에서 유력한 증거로 활용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 채널: 고용노동부 1350 + 국가인권위원회 1331 → 병행 진정 가능</blockquote>',
      },
      {
        title: '넷째, 2차 피해(소문·따돌림)도 법적으로 금지됩니다',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제14조 제7항에 따라 성희롱 피해 사실 유포 등 2차 피해도 금지됩니다</strong></p>\n<p>동료나 상사가 <strong>"누가 신고했다더라" "과민반응 아닌가"</strong> 등으로 피해 사실을 소문내거나, 피해자를 따돌리는 행위도 법으로 금지됩니다. 이른바 <strong>2차 피해</strong>에 해당합니다.</p>\n<p>2차 피해가 발생하면 <strong>사업주가 즉시 조치</strong>를 취해야 하며, 방치하면 과태료가 부과됩니다. 2차 피해 사실도 날짜·내용·목격자를 기록하고, 필요하면 추가 진정을 제기하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">2차 피해: 사실 유포·따돌림 금지 → 사업주 방치 시 과태료 → 추가 진정 가능</blockquote>',
      },
      {
        title: '다섯째, 신고 전에 증거를 확보하고 전문 상담을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">신고 전 준비가 충분할수록 보호받을 가능성이 높아집니다</strong></p>\n<p>신고 전에 반드시 <strong>피해 일지(날짜, 시간, 장소, 발언 내용, 목격자)</strong>를 작성하고, 가능하면 녹취나 문자 기록을 확보하세요. 대화 참여자 본인의 녹음은 적법합니다.</p>\n<p>무료 상담 기관을 먼저 활용하세요. <strong>①여성긴급전화 1366 ②한국성폭력상담소(02-338-5801) ③대한법률구조공단(132)</strong>에서 신고 전략과 증거 확보 방법에 대한 조언을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 피해일지 작성 + 녹취·문자 확보 + 전문 상담(1366 / 132) → 서면 신고</blockquote>',
      },
    ],
    cases: [
      {
        title: '성적 학대행위의 성립 요건에 관한 대법원 판결',
        summary:
          '대법원 2025도3890 사건(2025.07.18 선고)에서 법원은 성적 수치심을 주는 성희롱 등의 성적 학대행위는 신체 접촉 없이 언어적·정서적 방법으로도 성립할 수 있으며, 피해자가 해당 내용을 인식할 수 있는 상태에 이르렀다면 기수가 성립한다고 판시했습니다.',
        takeaway:
          '직접적인 신체 접촉이 없었더라도 언어적 성희롱이 반복되면 법적 책임이 인정됩니다. 피해 사실을 구체적으로 기록하고 신고 전 전문 상담을 받으세요.',
      },
    ],
    faq: [
      {
        question: '회사 내부 신고와 고용노동부 신고, 어디에 먼저 해야 하나요?',
        answer: '일반적으로 <strong>회사 내부 고충처리 절차를 먼저</strong> 이용하되, 회사가 조사를 미루거나 피해자에게 불이익을 주면 즉시 고용노동부에 신고하세요. 두 곳에 동시에 신고하는 것도 가능합니다.',
      },
      {
        question: '계약직인데도 불이익 금지 규정이 적용되나요?',
        answer: '네, <strong>고용 형태(정규직·계약직·파견직)에 관계없이</strong> 남녀고용평등법의 불이익 금지 규정이 적용됩니다. 계약 만료를 빌미로 재계약을 거부하는 것도 불이익 조치에 해당할 수 있습니다.',
      },
      {
        question: '익명으로 신고할 수 있나요?',
        answer: '회사 내부 신고 시 익명이 가능한 경우가 있지만, <strong>고용노동부 진정은 실명</strong>이 원칙입니다. 다만 피해자 신원은 보호되며, 가해자에게 신고자 정보가 직접 전달되지 않습니다.',
      },
      {
        question: '불이익 조치를 당하면 손해배상도 받을 수 있나요?',
        answer: '네, 불이익 조치로 인한 <strong>임금 손실, 정신적 고통에 대해 민사 손해배상</strong>을 청구할 수 있습니다. 부당해고에 해당하면 노동위원회에 원직 복직과 해고 기간 임금 지급을 신청할 수도 있습니다.',
      },
      {
        question: '신고했는데 오히려 가해자가 무고죄로 고소하면 어떡하나요?',
        answer: '피해 사실을 진실하게 신고한 것이라면 <strong>무고죄가 성립하지 않습니다</strong>. 무고죄는 "허위 사실"을 고의로 신고한 경우에만 해당합니다. 다만 증거를 확보해두면 무고 주장에 대해 더 효과적으로 대응할 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '직장 내 성희롱 진단', href: '/diagnosis/sexual-harassment' },
      { label: '직장 내 성희롱 신고 절차', href: '/guide/sexual-harassment/workplace-harassment-report-procedure' },
      { label: '상사 외모 언급 성희롱 기준', href: '/guide/sexual-harassment/repeated-appearance-comments-by-boss' },
      { label: '성희롱 피해 증거 수집 방법', href: '/guide/sexual-harassment' },
    ],
  },
];
