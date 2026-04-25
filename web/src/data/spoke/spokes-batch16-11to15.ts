import { SpokePage } from '../spoke-pages';

export const spokesBatch16_11to15: SpokePage[] = [
  // ── 1. small-claims: 소액소송 직접 하는 법 ──
  {
    domain: 'small-claims',
    slug: 'small-claims-self-filing-guide',
    keyword: '소액소송 직접 하는 법 — 소장 작성부터 판결까지',
    questionKeyword: '변호사 없이 소액소송을 직접 하려면 어떻게 하나요?',
    ctaKeyword: '소액소송 절차 확인',
    type: '절차타임라인형',
    meta: {
      title: '소액소송 직접 하는 법 5단계 — 소장 작성부터 판결까지 | 로앤가이드',
      description: '변호사 없이 소액소송을 직접 하고 싶은데 어디서부터 시작해야 할지 모르겠다면, 소장 작성부터 판결 확정까지 5단계 절차를 지금 확인하세요.',
    },
    intro: '50만원을 빌려줬는데 6개월째 돌려받지 못하고 있습니다. 변호사를 선임하자니 비용이 부담되고, 직접 소송하려니 절차를 모릅니다. 3,000만원 이하의 분쟁이라면 소액소송으로 빠르게 해결할 수 있습니다. 소장 작성부터 판결까지 5단계를 정리했습니다.',
    timelineSteps: ['관할법원 확인', '소장 작성·접수', '답변서 대응', '변론기일 출석', '판결·집행'],
    sections: [
      {
        title: '1단계: 관할법원과 소송 유형을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">소송금액 3,000만원 이하는 소액사건심판법이 적용됩니다</strong></p>\n<p><strong>소액사건심판법</strong>에 따라 소송 목적 금액이 <strong>3,000만원 이하</strong>이면 소액사건으로 처리됩니다. 일반 민사소송보다 절차가 간소하고, 1회 변론으로 판결이 나오는 경우가 많습니다.</p>\n<p>관할법원은 상대방(피고) 주소지의 <strong>지방법원 또는 시·군법원</strong>입니다. 대한민국 법원 홈페이지(ecourt.go.kr)에서 관할을 검색할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 소송금액 3,000만원 이하 → 소액사건 | 관할: 피고 주소지 법원</blockquote>',
      },
      {
        title: '2단계: 소장을 작성하고 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">소장은 법원 양식을 활용하면 변호사 없이도 작성할 수 있습니다</strong></p>\n<p>대한민국 법원 전자소송 사이트(ecfs.scourt.go.kr)에서 <strong>소장 양식</strong>을 다운로드하세요. 소장에는 ①원고·피고 인적사항, ②청구 취지("피고는 원고에게 금 ○○원을 지급하라"), ③청구 원인(돈을 빌려준 경위·날짜·금액)을 기재합니다.</p>\n<p>첨부 서류로 <strong>차용증, 이체 내역, 카카오톡 대화</strong> 등 증거를 함께 제출하세요. 인지대는 소송금액에 따라 다르며, 2,000만원 청구 시 약 <strong>10만원 내외</strong>입니다. 송달료는 별도입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비물: 소장(법원양식) + 증거서류 + 인지대·송달료 | 전자소송 가능</blockquote>',
      },
      {
        title: '3단계: 상대방 답변서에 대응하세요',
        content:
          '<p><strong style="color:#1e3a5f">피고가 답변서를 내면 반박 준비서면을 제출하세요</strong></p>\n<p>소장이 접수되면 법원이 피고에게 <strong>소장 부본</strong>을 송달합니다. 피고는 30일 이내에 답변서를 제출할 수 있습니다. 피고가 "돈을 갚았다" 또는 "빌린 적 없다"고 다투면 이를 반박할 <strong>준비서면</strong>을 작성하세요.</p>\n<p>피고가 답변서를 제출하지 않으면 법원이 <strong>무변론 판결(이행권고결정)</strong>을 내릴 수 있어 재판 없이 승소할 수도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">포인트: 답변서 미제출 → 이행권고결정 가능 | 다투면 → 반박 준비서면 제출</blockquote>',
      },
      {
        title: '4단계: 변론기일에 출석하세요',
        content:
          '<p><strong style="color:#1e3a5f">소액사건은 보통 1회 변론으로 종결됩니다</strong></p>\n<p>법원에서 정한 <strong>변론기일</strong>에 출석합니다. 소액사건은 <strong>1회 변론주의</strong>가 적용되어, 첫 기일에 모든 주장과 증거를 제출해야 합니다. 증인이 있다면 미리 신청하세요.</p>\n<p>재판에서는 판사가 양측의 주장을 듣고 증거를 확인합니다. 조정(합의)을 권유받을 수도 있으며, 조정이 성립하면 <strong>판결과 같은 효력</strong>이 생깁니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 1회 변론 원칙 → 모든 증거 첫 기일에 제출 | 조정 가능</blockquote>',
      },
      {
        title: '5단계: 판결 후 강제집행을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">승소해도 상대가 안 갚으면 강제집행이 필요합니다</strong></p>\n<p>판결이 확정되면 <strong>판결 정본</strong>에 집행문을 부여받아 강제집행을 신청할 수 있습니다. 상대방의 예금, 급여, 부동산 등을 <strong>압류</strong>할 수 있습니다.</p>\n<p>은행 예금 압류가 가장 빠릅니다. 상대방 거래 은행을 모르면 <strong>재산조회 신청</strong>(법원)을 먼저 하세요. 재산 은닉이 의심되면 <strong>재산명시·감치</strong> 절차도 활용할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">집행: 판결 확정 → 집행문 부여 → 예금·급여 압류 | 재산 불명 → 재산조회 신청</blockquote>',
      },
    ],
    cases: [
      {
        title: '지급명령 송달 전 이의신청의 효력이 문제된 사례',
        summary:
          '대법원 2024마5496 사건(대법원, 2024.06.07)에서 법원은 "지급명령이 채무자에게 송달되기 전에 한 이의신청은 부적법하지만, 그 후 적법하게 송달되면 하자가 치유된다"고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 지급명령이든 소액소송이든 송달 절차가 적법하게 이루어졌는지 확인하세요. 절차상 하자가 있으면 결과에 영향을 미칩니다.',
      },
    ],
    faq: [
      {
        question: '소액소송 비용은 얼마인가요?',
        answer: '인지대는 소송금액의 <strong>0.5%</strong>이고, 송달료는 약 5~6만원입니다. 500만원 소송이면 인지대 약 <strong>2만5천원</strong> + 송달료 합계 8만원 내외입니다.',
      },
      {
        question: '소액소송 기간은 얼마나 걸리나요?',
        answer: '접수 후 보통 <strong>1~2개월</strong> 내에 첫 변론기일이 잡히고, 1회 변론으로 끝나면 총 <strong>2~3개월</strong>이면 판결을 받을 수 있습니다.',
      },
      {
        question: '증거가 카카오톡 대화뿐이어도 소송할 수 있나요?',
        answer: '네. 카카오톡 대화, 문자메시지, 이체 내역 모두 <strong>증거로 인정</strong>됩니다. 캡처 후 출력하여 제출하세요.',
      },
      {
        question: '소액소송에서 지면 어떻게 되나요?',
        answer: '소액사건은 <strong>항소</strong>할 수 있지만, 항소 이유가 법률 위반 등으로 제한됩니다. 패소하면 소송비용을 부담할 수 있습니다.',
      },
      {
        question: '전자소송으로 접수할 수 있나요?',
        answer: '네. <strong>전자소송(ecfs.scourt.go.kr)</strong>으로 소장 접수, 서면 제출, 기일 확인이 모두 가능합니다. 공인인증서가 필요합니다.',
      },
      {
        question: '상대방 주소를 모르면 소송할 수 없나요?',
        answer: '주민등록 열람을 통해 주소를 확인할 수 있고, 그래도 불명이면 <strong>공시송달</strong>로 진행할 수 있습니다.',
      },
    ],
    cta: {
      text: '내 상황에 맞는 소액소송 절차를 확인해보세요',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '소액소송 FAQ 가이드', href: '/guide/small-claims/small-claims-faq-guide' },
      { label: '지급명령 신청 방법과 이의 시 대처법', href: '/guide/small-claims/payment-order-application-guide' },
      { label: '임금체불 신고 전에 준비할 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },

  // ── 2. small-claims: 지급명령 신청 방법과 이의 시 대처법 ──
  {
    domain: 'small-claims',
    slug: 'payment-order-application-guide',
    keyword: '지급명령 신청 방법과 이의 시 대처법',
    questionKeyword: '돈을 빌려줬는데 안 갚으면 지급명령을 어떻게 신청하나요?',
    ctaKeyword: '지급명령 신청 확인',
    type: '절차타임라인형',
    meta: {
      title: '지급명령 신청 방법 4단계 — 인지대 10분의 1로 채권 회수 | 로앤가이드',
      description: '빌려준 돈을 돌려받지 못하고 있다면 소송보다 빠르고 저렴한 지급명령을 활용하세요. 신청서 작성부터 이의 시 소송 전환까지 지금 확인하세요.',
    },
    intro: '200만원을 빌려준 친구가 3개월째 연락을 피하고 있습니다. 소송을 하자니 시간이 걸리고, 내용증명도 무시당했습니다. 이럴 때 소송보다 빠르고 비용이 10분의 1에 불과한 "지급명령"을 신청할 수 있습니다.',
    timelineSteps: ['지급명령 신청', '법원 심사·발령', '상대방 송달', '이의 시 소송 전환'],
    sections: [
      {
        title: '지급명령이란? 소송 없이 판결과 같은 효력을 얻는 절차입니다',
        content:
          '<p><strong style="color:#1e3a5f">재판 없이 채무자에게 돈을 갚으라는 법원 명령을 받을 수 있습니다</strong></p>\n<p><strong>민사소송법 제462조</strong>에 따라 금전 등 대체물의 지급을 구하는 청구는 <strong>지급명령</strong>을 신청할 수 있습니다. 법원이 서면 심사만으로 명령을 내리므로 재판 출석이 필요 없습니다.</p>\n<p>인지대가 소송의 <strong>10분의 1</strong>이고, 처리 기간도 보통 <strong>1~2주</strong>로 빠릅니다. 채무자가 이의를 제기하지 않으면 확정되어 <strong>강제집행</strong>이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">장점: 인지대 1/10 | 재판 출석 불필요 | 1~2주 처리 | 미이의 시 확정</blockquote>',
      },
      {
        title: '지급명령 신청서를 작성하고 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">신청서에 채권 금액과 원인을 명시하세요</strong></p>\n<p>대한민국 법원 전자소송 사이트에서 <strong>지급명령 신청서 양식</strong>을 받을 수 있습니다. 기재 사항은 ①채권자·채무자 인적사항, ②청구 금액, ③청구 원인(빌려준 날짜·금액·약정)입니다.</p>\n<p>증거 서류로 <strong>차용증, 계좌이체 내역, 문자·카톡 대화</strong>를 첨부하세요. 인지대는 500만원 청구 시 약 <strong>2,500원</strong>(소송의 1/10), 송달료는 약 <strong>5만원</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">비용: 500만원 청구 기준 인지대 약 2,500원 + 송달료 약 5만원</blockquote>',
      },
      {
        title: '법원이 지급명령을 발령하면 채무자에게 송달됩니다',
        content:
          '<p><strong style="color:#1e3a5f">채무자가 2주 이내에 이의하지 않으면 확정됩니다</strong></p>\n<p>법원이 신청서를 심사하여 문제가 없으면 <strong>지급명령</strong>을 발령합니다. 이 명령이 채무자에게 <strong>송달</strong>된 날부터 2주 이내에 이의신청을 하지 않으면 확정됩니다.</p>\n<p>확정된 지급명령은 <strong>확정 판결과 같은 효력</strong>이 있으므로 바로 강제집행(예금 압류, 급여 압류 등)을 신청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 송달 후 2주 미이의 → 확정 → 강제집행 가능</blockquote>',
      },
      {
        title: '채무자가 이의를 제기하면 소송으로 전환됩니다',
        content:
          '<p><strong style="color:#1e3a5f">이의신청이 들어오면 자동으로 소액소송(또는 민사소송)으로 넘어갑니다</strong></p>\n<p>채무자가 2주 이내에 <strong>이의신청</strong>을 하면 지급명령은 효력을 잃고, 사건이 <strong>소송절차</strong>로 자동 전환됩니다. 이때 추가 인지대(소송 인지대와 지급명령 인지대의 차액)를 보정해야 합니다.</p>\n<p>소송으로 전환되더라도 이미 제출한 증거가 그대로 사용되므로 <strong>처음부터 증거를 꼼꼼히 준비</strong>하는 것이 중요합니다. 보정 기간 내에 인지를 납부하지 않으면 신청서가 각하될 수 있으니 주의하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이의 시: 소송 자동 전환 → 추가 인지대 보정 필요 | 증거는 그대로 유지</blockquote>',
      },
      {
        title: '송달이 안 되면? 주소 보정과 공시송달을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방 주소가 불명이면 공시송달로 진행할 수 있습니다</strong></p>\n<p>지급명령은 <strong>상대방에게 직접 송달</strong>되어야 효력이 생깁니다. 송달이 안 되면 법원에서 주소 보정을 요청합니다. 주민등록 열람으로 새 주소를 확인하세요.</p>\n<p>주소 보정 후에도 송달이 안 되면 <strong>공시송달</strong>은 지급명령에서는 허용되지 않으므로, 이 경우 <strong>소액소송으로 전환</strong>하여 진행해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 지급명령은 공시송달 불가 → 송달 불능 시 소액소송으로 전환</blockquote>',
      },
    ],
    cases: [
      {
        title: '지급명령 정본 송달 후 이의신청 시 변호사 비용이 인정된 사례',
        summary:
          '대법원 2024마5324 사건(대법원, 2024.05.30)에서 법원은 "채무자가 지급명령 정본을 송달받은 후 변호사를 선임하여 이의신청을 하였으나 채권자가 인지를 보정하지 않아 신청서가 각하된 경우에도, 변호사 보수는 소송비용에 포함될 수 있다"고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 지급명령 이의 후 소송 전환 시 인지 보정을 가능한 한 기한 내에 하세요. 보정하지 않으면 각하되고 상대방 비용까지 부담할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '지급명령과 소액소송의 차이는?',
        answer: '지급명령은 <strong>서면 심사만으로</strong> 명령이 나오고 인지대가 1/10입니다. 소액소송은 <strong>재판을 통해</strong> 판결을 받습니다. 상대가 다투지 않을 것 같으면 지급명령이 유리합니다.',
      },
      {
        question: '지급명령 신청 후 얼마나 걸리나요?',
        answer: '접수 후 보통 <strong>1~2주</strong> 내에 발령되고, 송달 후 2주 동안 이의가 없으면 확정됩니다. 총 <strong>4~6주</strong>면 집행 가능합니다.',
      },
      {
        question: '차용증이 없어도 지급명령 신청이 가능한가요?',
        answer: '네. <strong>계좌이체 내역, 카톡 대화</strong> 등으로 금전 거래를 증명할 수 있으면 신청 가능합니다.',
      },
      {
        question: '이의신청 비율이 높은가요?',
        answer: '실무적으로 지급명령의 약 <strong>30~40%</strong>에서 이의가 제기됩니다. 이의 가능성을 고려해 증거를 미리 충분히 준비하세요.',
      },
      {
        question: '지급명령이 확정되면 바로 압류할 수 있나요?',
        answer: '네. 확정증명원을 발급받아 <strong>집행문을 부여</strong>받으면 즉시 예금·급여 압류가 가능합니다.',
      },
    ],
    cta: {
      text: '내 채권 상황에 맞는 회수 방법을 확인해보세요',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '소액소송 직접 하는 법', href: '/guide/small-claims/small-claims-self-filing-guide' },
      { label: '소액소송 FAQ 가이드', href: '/guide/small-claims/small-claims-faq-guide' },
      { label: '사기 피해 신고 전에 준비할 것', href: '/guide/fraud/fraud-complaint-preparation' },
    ],
  },

  // ── 3. unemployment: 실업급여 부정수급 적발 시 대처 방법 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-fraud-penalty-response',
    keyword: '실업급여 부정수급 적발 시 대처 방법',
    questionKeyword: '실업급여 부정수급 통보를 받았는데 어떻게 해야 하나요?',
    ctaKeyword: '부정수급 대처 확인',
    type: '상황형',
    meta: {
      title: '실업급여 부정수급 적발 시 대처법 3가지 — 반환금·추가징수 줄이는 방법 | 로앤가이드',
      description: '실업급여 부정수급 통보를 받고 당황하셨다면 반환 범위 확인, 이의신청, 분할납부 방법까지 단계별로 지금 확인하세요.',
    },
    intro: '고용센터에서 "부정수급에 해당하여 반환명령과 추가징수 처분을 한다"는 통보를 받았습니다. 아르바이트를 하면서 신고를 빠뜨린 것뿐인데, 받은 금액의 2배를 내야 한다고 합니다. 지금부터 무엇을 해야 하는지 정리했습니다.',
    timelineSteps: ['처분 내용 확인', '반환 범위 검토', '이의신청·행정소송'],
    sections: [
      {
        title: '부정수급 처분의 내용을 정확히 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">반환명령과 추가징수는 별개의 처분입니다</strong></p>\n<p><strong>고용보험법 제62조</strong>에 따라 거짓이나 부정한 방법으로 구직급여를 받으면 ①<strong>지급제한</strong>(남은 급여 중단), ②<strong>반환명령</strong>(이미 받은 금액 반환), ③<strong>추가징수</strong>(부정수급액의 최대 5배)가 부과될 수 있습니다.</p>\n<p>처분 통지서에서 <strong>어느 기간</strong>의 급여가 부정수급으로 인정되었는지, 추가징수 배율이 몇 배인지 가능한 한 확인하세요. 부정수급 기간 이외에 정상 수급한 부분까지 반환 대상에 포함되었다면 이의를 제기할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: ①지급제한 범위 ②반환 대상 기간 ③추가징수 배율(최대 5배)</blockquote>',
      },
      {
        title: '부정수급에 해당하는지 법적 요건을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">"거짓이나 부정한 방법"이 아니라면 반환 의무가 없을 수 있습니다</strong></p>\n<p>부정수급이 인정되려면 <strong>고의적인 허위 신고</strong>가 있어야 합니다. 단순 착오나 제도를 몰라서 빠뜨린 경우와 고의적 은폐는 다릅니다.</p>\n<p>예를 들어 ①하루 이틀 단기 아르바이트를 신고 누락한 경우, ②무급 자원봉사를 취업으로 오인한 경우 등은 "부정한 방법"에 해당하지 않을 수 있습니다. 자신의 상황이 <strong>고의적 허위 신고</strong>에 해당하는지 꼼꼼히 따져보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 쟁점: 고의적 허위 신고인지 vs 단순 착오·제도 미숙지인지</blockquote>',
      },
      {
        title: '이의신청과 행정소송으로 다툴 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">처분에 불복하면 90일 이내에 행정심판 또는 행정소송을 제기하세요</strong></p>\n<p>처분이 부당하다고 판단되면 <strong>행정심판</strong>(처분 통지를 받은 날부터 90일 이내) 또는 <strong>행정소송</strong>(처분을 안 날부터 90일 이내)을 제기할 수 있습니다.</p>\n<p>특히 추가징수 금액이 과도하다면 <strong>재량권 일탈·남용</strong>을 주장할 수 있습니다. 법원은 제재적 행정처분의 비례원칙 위반 여부를 엄격하게 심사합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 행정심판·행정소송 모두 90일 이내 | 추가징수 과다 시 재량권 남용 주장 가능</blockquote>',
      },
      {
        title: '반환금 분할납부와 형사처벌 가능성을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">일시 납부가 어려우면 분할납부를 신청하세요</strong></p>\n<p>반환금 + 추가징수금을 일시에 납부하기 어려우면 <strong>고용센터에 분할납부를 신청</strong>할 수 있습니다. 경제적 사정을 소명하면 최대 <strong>3년 이내</strong> 분할이 가능합니다.</p>\n<p>부정수급 금액이 크거나 악의적인 경우 <strong>고용보험법 제116조</strong>에 따라 형사처벌(1년 이하 징역 또는 300만원 이하 벌금)을 받을 수 있습니다. 다만, 자진 반환하고 경위를 소명하면 형사처벌을 피할 가능성이 높습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">분할납부: 최대 3년 | 형사처벌: 1년 이하 징역 또는 300만원 이하 벌금</blockquote>',
      },
    ],
    cases: [
      {
        title: '해외 체류 중 대리 신고로 부정수급이 인정된 사례',
        summary:
          '대구지법 2018구합23680 사건(대구지법, 2019.04.17)에서 법원은 "수급자격자가 해외에 체류하면서 제3자의 대리 신청을 통하여 구직급여를 지급받은 것은 거짓이나 부정한 방법에 해당한다"고 판시하여 반환명령 처분이 적법하다고 판단했습니다.',
        takeaway:
          '비슷한 상황이라면 재취업 노력신고는 가능한 한 본인이 직접 해야 합니다. 대리 신고는 그 자체로 부정수급에 해당할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '아르바이트 신고를 잊어버린 것도 부정수급인가요?',
        answer: '수입이 발생했는데 <strong>신고하지 않으면</strong> 부정수급에 해당할 수 있습니다. 다만 단순 착오와 고의적 은폐는 처분 수위가 다릅니다.',
      },
      {
        question: '추가징수 금액을 줄일 수 있나요?',
        answer: '자진 반환, 초범, 고의성 부재 등을 소명하면 추가징수 <strong>배율이 낮아질</strong> 수 있습니다. 행정소송에서 감액이 인정된 사례도 있습니다.',
      },
      {
        question: '부정수급으로 형사처벌을 받으면 전과가 남나요?',
        answer: '벌금형 이상을 선고받으면 <strong>전과기록</strong>이 남습니다. 가급적 자진 반환으로 형사 절차 전에 해결하는 것이 유리합니다.',
      },
      {
        question: '부정수급 환수금을 안 내면 어떻게 되나요?',
        answer: '<strong>국세 체납처분</strong>의 예에 따라 재산을 압류당할 수 있습니다. 납부가 어려우면 가능한 한 분할납부를 신청하세요.',
      },
      {
        question: '고용센터 조사에 가능한 한 출석해야 하나요?',
        answer: '출석 요구를 받으면 <strong>가능한 한 출석</strong>해야 합니다. 불출석 시 불리한 처분을 받을 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)이나 고용노동부 상담센터(1350)를 이용해보세요.',
      },
    ],
    cta: {
      text: '내 부정수급 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 진단', href: '/diagnosis/unemployment' },
      { label: '자발적 퇴사도 실업급여 받는 5가지 사유', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 수급 요건 가이드', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '권고사직 강요받을 때 거부하는 법', href: '/guide/dismissal/forced-resignation-defense' },
    ],
  },

  // ── 4. unemployment: 자발적 퇴사도 실업급여 받는 5가지 사유 ──
  {
    domain: 'unemployment',
    slug: 'voluntary-quit-unemployment-eligibility',
    keyword: '자발적 퇴사도 실업급여 받는 5가지 사유',
    questionKeyword: '스스로 퇴사했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '실업급여 수급 확인',
    type: '수치기한형',
    meta: {
      title: '자발적 퇴사 실업급여 5가지 사유 — 정당한 이직으로 인정받는 조건 | 로앤가이드',
      description: '스스로 퇴사했지만 실업급여를 받고 싶다면, 정당한 이직 사유 5가지와 증빙 방법을 지금 확인하세요.',
    },
    intro: '더 이상 참을 수 없어서 회사를 나왔습니다. 직접 사표를 냈으니 실업급여는 포기해야 한다고 생각했습니다. 하지만 퇴사 사유가 "정당한 이직"에 해당하면 자발적 퇴사라도 실업급여를 받을 수 있습니다.',
    timelineSteps: ['퇴사 사유 확인', '증빙 자료 준비', '수급자격 신청', '실업 인정'],
    sections: [
      {
        title: '정당한 이직 사유 1: 임금 체불·삭감',
        content:
          '<p><strong style="color:#1e3a5f">임금이 체불되거나 30% 이상 삭감되면 정당한 이직입니다</strong></p>\n<p><strong>고용보험법 시행규칙 별표 2</strong>에 따라 이직일 전 1년 이내에 <strong>2개월 이상 임금이 체불</strong>되었거나, 임금이 채용 시보다 <strong>15% 이상 감소</strong>한 경우 정당한 이직 사유로 인정될 수 있습니다.</p>\n<p>급여명세서, 근로계약서, 계좌이체 내역을 비교하여 <strong>실제 임금 감소 사실</strong>을 증명하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 2개월 이상 임금 체불 또는 15% 이상 임금 감소 → 정당한 이직</blockquote>',
      },
      {
        title: '정당한 이직 사유 2: 근로조건 위반',
        content:
          '<p><strong style="color:#1e3a5f">채용 시 약속한 근로조건과 실제가 다르면 인정될 수 있습니다</strong></p>\n<p>채용 공고나 근로계약서에 명시된 <strong>업무 내용, 근무 장소, 근로시간</strong>이 실제와 현저히 달라진 경우 정당한 이직 사유에 해당할 소지가 있습니다.</p>\n<p>예를 들어 서울 근무로 채용되었는데 지방 사업장으로 <strong>일방적으로 전보</strong>된 경우, 사무직으로 채용되었는데 현장 노동으로 <strong>업무가 변경</strong>된 경우 등이 해당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증빙: 근로계약서 vs 실제 근원칙적으로 비교 | 전보 명령서, 업무 변경 통지</blockquote>',
      },
      {
        title: '정당한 이직 사유 3: 직장 내 괴롭힘·성희롱',
        content:
          '<p><strong style="color:#1e3a5f">괴롭힘이나 성희롱 피해로 퇴사한 경우 인정될 수 있습니다</strong></p>\n<p>직장 내 <strong>괴롭힘(근로기준법 제76조의2)</strong>이나 <strong>성희롱</strong>을 당해 사업주에게 신고했으나 적절한 조치가 이루어지지 않아 퇴사한 경우 정당한 이직입니다.</p>\n<p>괴롭힘 증거로 <strong>녹음, 메신저 캡처, 진단서, 동료 진술서</strong> 등을 준비하세요. 사업주에게 개선을 요청한 기록이 있으면 더 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조건: 괴롭힘·성희롱 사실 + 사업주 미조치 → 정당한 이직</blockquote>',
      },
      {
        title: '정당한 이직 사유 4: 건강 악화·통근 곤란',
        content:
          '<p><strong style="color:#1e3a5f">질병으로 업무 수행이 불가능하거나 왕복 3시간 이상 통근이면 인정될 수 있습니다</strong></p>\n<p><strong>의사의 소견서</strong>에 "현 업무 수행이 곤란하다"는 내용이 있으면 건강 사유로 인정될 수 있습니다. 사업주에게 <strong>직종 전환이나 휴직</strong>을 요청했으나 거부된 경우에도 해당합니다.</p>\n<p>또한 사업장 이전 등으로 <strong>왕복 통근시간이 3시간 이상</strong>이 된 경우에도 정당한 이직 사유입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">건강: 의사 소견서 필수 | 통근: 왕복 3시간 이상 기준</blockquote>',
      },
      {
        title: '정당한 이직 사유 5: 사업주의 위법행위',
        content:
          '<p><strong style="color:#1e3a5f">4대 보험 미가입, 안전조치 위반 등도 정당한 이직 사유입니다</strong></p>\n<p>사업주가 <strong>산업안전보건법상 안전조치를 하지 않아</strong> 근로자의 건강이 위험해진 경우, <strong>4대 보험 가입 의무를 이행하지 않은</strong> 경우 등도 정당한 이직 사유에 포함됩니다.</p>\n<p>사업주의 위법행위를 증명할 <strong>사진, 신고 내역, 고용보험 미가입 사실 확인서</strong> 등을 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">예시: 4대 보험 미가입, 산재 미보고, 안전설비 미비 → 정당한 이직</blockquote>',
      },
      {
        title: '고용센터에 수급자격을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직 후 12개월 이내에 수급자격을 신청해야 합니다</strong></p>\n<p>이직확인서와 정당한 이직 사유를 증명할 서류를 들고 <strong>관할 고용센터</strong>를 방문하세요. 수급자격 인정 여부는 보통 <strong>14일 이내</strong>에 결정됩니다.</p>\n<p>만약 사업주가 "자발적 퇴사"로 이직확인서를 작성했더라도, 정당한 이직 사유에 해당하는 증빙을 제출하면 <strong>고용센터가 직권으로 수급자격을 인정</strong>할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 퇴직 후 12개월 이내 | 사업주 이직확인서와 달라도 증빙으로 번복 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '근로조건 저하로 퇴사한 경우 수급자격이 인정된 사례',
        summary:
          '서울행정법원 2014구합2270 사건(서울행법, 2014.07.03)에서 법원은 "멀티부서 이동으로 월 평균 임금이 46% 이상 하락하게 된 경우, 근로조건 저하에 따른 정당한 이직 사유에 해당하므로 수급자격 불인정 처분은 위법하다"고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 채용 시 근로조건과 퇴사 시점의 근로조건을 비교한 증빙 자료를 가능한 한 준비하세요.',
      },
    ],
    faq: [
      {
        question: '자발적 퇴사 시 실업급여 금액은 달라지나요?',
        answer: '정당한 이직으로 인정되면 비자발적 퇴사와 <strong>동일한 금액</strong>을 받습니다. 퇴직 전 3개월 평균임금의 60%, 1일 상한 66,000원입니다.',
      },
      {
        question: '회사가 이직확인서를 안 내주면?',
        answer: '고용센터에 <strong>이직확인서 미발급 신고</strong>를 하면 직권으로 처리됩니다. 사업주는 10일 이내에 발급할 의무가 있습니다.',
      },
      {
        question: '수급자격 불인정 시 다시 신청할 수 있나요?',
        answer: '새로운 증빙 자료를 추가하여 <strong>재심사를 요청</strong>하거나, 90일 이내에 행정심판을 제기할 수 있습니다.',
      },
      {
        question: '피보험기간 180일 미만이면 받을 수 없나요?',
        answer: '네. 실업급여는 퇴직 전 18개월 동안 <strong>피보험기간 180일 이상</strong>이어야 수급 가능합니다.',
      },
      {
        question: '권고사직도 정당한 이직인가요?',
        answer: '권고사직은 <strong>비자발적 퇴사</strong>로 분류되어 별도의 사유 증명 없이 실업급여 수급이 가능합니다.',
      },
    ],
    cta: {
      text: '내 퇴사 사유가 실업급여 대상인지 확인해보세요',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 진단', href: '/diagnosis/unemployment' },
      { label: '실업급여 수급 요건 가이드', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 부정수급 적발 시 대처 방법', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '권고사직 강요받을 때 거부하는 법', href: '/guide/dismissal/forced-resignation-defense' },
    ],
  },

  // ── 5. dismissal: 권고사직 강요받을 때 거부하는 법 ──
  {
    domain: 'dismissal',
    slug: 'forced-resignation-defense',
    keyword: '권고사직 강요받을 때 거부하는 법',
    questionKeyword: '회사에서 권고사직을 강요하는데 어떻게 거부하나요?',
    ctaKeyword: '권고사직 대응 확인',
    type: '상황형',
    meta: {
      title: '권고사직 강요 거부하는 법 3가지 — 사직서 쓰기 전 필수 확인 | 로앤가이드',
      description: '회사에서 사직서를 쓰라고 압박하고 있다면, 서명하기 전에 반드시 알아야 할 권리와 대응 방법 3가지를 지금 확인하세요.',
    },
    intro: '팀장이 회의실로 불러서 "이번 달까지 사직서를 내라"고 합니다. 사유도 설명하지 않고 거부하면 "불이익이 있을 것"이라고 합니다. 사직서에 서명하는 순간 자발적 퇴사가 됩니다. 서명하기 전에 알아야 할 것들을 정리했습니다.',
    timelineSteps: ['사직서 서명 보류', '증거 확보', '노동위원회 구제신청'],
    sections: [
      {
        title: '첫째, 절대로 사직서에 서명하지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">사직서에 서명하면 "자발적 퇴사"가 되어 구제가 어려워집니다</strong></p>\n<p>권고사직은 법적으로 <strong>합의 해지</strong>입니다. 회사가 "퇴사하라"고 권유하는 것이지 강제할 수 없습니다. 근로자가 거부하면 회사는 <strong>정당한 해고 사유와 절차</strong>를 갖추어야만 퇴직시킬 수 있습니다.</p>\n<p>사직서에 서명하면 자발적 퇴사로 처리되어 <strong>부당해고 구제신청이 불가능</strong>해지고, 실업급여 수급도 제한될 수 있습니다. 어떤 압박을 받더라도 즉석에서 서명하지 마세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사직서 서명 = 자발적 퇴사 | 거부 가능 | 서명 전 가능한 한 상담</blockquote>',
      },
      {
        title: '둘째, 권고사직 압박의 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">강요의 증거가 있으면 나중에 "사실상 해고"로 다툴 수 있습니다</strong></p>\n<p>상사와의 면담 내용을 <strong>녹음</strong>하세요(본인이 대화 당사자인 녹음은 합법입니다). "사직서를 쓰지 않으면 불이익을 주겠다", "징계 처리하겠다" 등의 발언은 <strong>사직 강요의 결정적 증거</strong>가 됩니다.</p>\n<p>이메일, 카톡, 사내 메신저로 퇴사를 압박받은 내용도 <strong>스크린샷</strong>으로 보관하세요. 면담 일시·장소·참석자·내용을 <strong>메모</strong>로 기록해두면 나중에 큰 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: ①면담 녹음 ②메신저·이메일 캡처 ③면담 일시·내용 메모</blockquote>',
      },
      {
        title: '셋째, 거부 의사를 서면으로 명확히 전달하세요',
        content:
          '<p><strong style="color:#1e3a5f">"퇴사할 의사가 없다"는 점을 기록으로 남기세요</strong></p>\n<p>상사에게 구두로 거부하는 것만으로는 부족합니다. <strong>이메일이나 내용증명</strong>으로 "귀사의 권고사직 요청에 대해 퇴사할 의사가 없음을 알립니다"라고 명확히 전달하세요.</p>\n<p>서면 기록이 있으면 나중에 해고를 당하더라도 <strong>"사직 의사가 없었다"는 증거</strong>가 되어 부당해고 구제신청에 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방법: 이메일 또는 내용증명으로 퇴사 의사 없음을 서면 통보</blockquote>',
      },
      {
        title: '사실상 해고가 이루어지면 노동위원회에 구제신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">강제된 권고사직은 부당해고로 인정될 수 있습니다</strong></p>\n<p>사직서를 쓰지 않았는데 회사가 일방적으로 <strong>퇴직 처리</strong>하거나, 사실상 근무를 못 하게 한다면 이는 <strong>해고</strong>에 해당할 소지가 있습니다. 해고일로부터 <strong>3개월 이내</strong>에 노동위원회에 부당해고 구제신청을 하세요.</p>\n<p>사직의 의사 없이 강압에 의해 사직서를 제출한 경우에도, 법원은 이를 <strong>비진의 의사표시(민법 제107조)</strong>로 보아 무효로 판단한 사례가 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구제: 해고일부터 3개월 이내 노동위원회 신청 | 강제 사직서 → 무효 가능</blockquote>',
      },
      {
        title: '퇴직 조건을 협상할 수도 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">퇴사를 수용할 경우 가능한 한 조건을 문서화하세요</strong></p>\n<p>만약 퇴사를 받아들이기로 결정했다면, <strong>퇴직금 추가 지급, 위로금, 권고사직 확인서</strong>(실업급여 수급용) 등의 조건을 협상하세요.</p>\n<p>합의서에 ①권고사직 사실 확인, ②퇴직금·위로금 금액, ③이직확인서 발급 약속, ④잔여 연차수당 정산을 가능한 한 <strong>서면으로 명시</strong>하세요. 구두 약속은 나중에 번복될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">협상: 퇴직금 추가·위로금·권고사직 확인서·연차수당 → 가능한 한 합의서 작성</blockquote>',
      },
    ],
    cases: [
      {
        title: '사직 의사 없는 사직서 제출이 해고로 인정된 사례',
        summary:
          '대구고법 2013나6064 사건(대구고법, 2015.01.21)에서 법원은 "회생절차 중 회사가 인력 구조조정의 방안으로 근로자에게서 사직서를 제출받아 의원면직 형식을 취한 것은 비진의 의사표시에 해당하여 무효이고, 실질적으로 해고에 해당한다"고 판시하여 해고가 무효라고 판단했습니다.',
        takeaway:
          '비슷한 상황이라면 사직서를 쓰더라도 그것이 자유로운 의사에 의한 것이 아님을 증명할 수 있으면 해고로 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '권고사직을 거부하면 불이익을 받나요?',
        answer: '거부했다는 이유만으로 <strong>인사상 불이익을 주는 것은 위법</strong>합니다. 불이익이 있다면 부당노동행위로 신고할 수 있습니다.',
      },
      {
        question: '권고사직에 동의하면 실업급여를 받을 수 있나요?',
        answer: '네. 권고사직은 <strong>비자발적 퇴사</strong>로 분류되어 실업급여 수급이 가능합니다. 다만 이직확인서에 "권고사직"으로 기재되어야 합니다.',
      },
      {
        question: '이미 사직서를 썼는데 번복할 수 있나요?',
        answer: '회사가 사직서를 <strong>수리하기 전</strong>이라면 철회할 수 있습니다. 수리 후라도 강압에 의한 것이면 무효를 주장할 수 있습니다.',
      },
      {
        question: '5인 미만 사업장도 부당해고 구제가 되나요?',
        answer: '근로기준법상 해고 제한은 <strong>5인 이상 사업장</strong>에 적용됩니다. 5인 미만은 민사소송으로 다투어야 합니다.',
      },
      {
        question: '노동청에 도움을 요청할 수 있나요?',
        answer: '<strong>고용노동부(1350)</strong>에 상담하거나, 관할 지방고용노동청에 진정을 접수할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 노동권익센터를 이용해보세요.',
      },
    ],
    cta: {
      text: '내 퇴사 압박 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부당해고 진단', href: '/diagnosis/dismissal' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고예고수당 못 받았을 때 대처법', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '자발적 퇴사도 실업급여 받는 5가지 사유', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
    ],
  },
];
