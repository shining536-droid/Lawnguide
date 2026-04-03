import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 22. 이 페이지는 [소액소송을 처음 시작하는 원고]의 [소장 제출부터 판결 후 집행까지 전체 흐름을 한눈에 파악해야 하는 상황]에서 [단계별 체크리스트로 빠짐없이 준비]를 돕는 페이지다.
// 23. 이 페이지는 [실업급여 수급 중 생활비가 부족한 구직자]의 [알바를 하면 실업급여가 끊길까 걱정되는 상황]에서 [알바 가능 조건과 신고 방법 확인]을 돕는 페이지다.
// 24. 이 페이지는 [퇴사 후 실업급여 신청을 미루고 있는 구직자]의 [신청 기간을 놓치면 수급 자격 자체가 사라지는 상황]에서 [기한 함정과 즉시 행동 요령 확인]을 돕는 페이지다.
// 25. 이 페이지는 [막 퇴사한 직장인]의 [실업급여를 처음 신청하는데 어디서 뭘 해야 할지 모르는 상황]에서 [첫 단계부터 수급까지 순서 안내]를 돕는 페이지다.
// 26. 이 페이지는 [실업급여 신청을 앞둔 구직자]의 [필요한 서류와 조건을 빠짐없이 확인해야 하는 상황]에서 [신청 전 체크리스트 점검]을 돕는 페이지다.
// 27. 이 페이지는 [실업급여 수급 기간과 금액이 궁금한 구직자]의 [내가 얼마를 얼마나 받을 수 있는지 정확히 알고 싶은 상황]에서 [수급 기간 표와 일일 지급액 계산 기준 확인]을 돕는 페이지다.

export const spokesBatch20_22to27: SpokePage[] = [
  {
    domain: 'small-claims',
    slug: 'full-process-checklist',
    keyword: '소액소송 전체 진행 체크리스트',
    questionKeyword: '소액소송은 어떤 순서로 진행되나요?',
    ctaKeyword: '소액소송 절차 점검',
    type: '체크리스트형',
    perspective: 'plaintiff',
    meta: {
      title: '소액소송 전체 진행 7단계 체크리스트 | 로앤가이드',
      description: '소액소송을 시작하려는데 순서가 헷갈린다면, 소장 작성부터 강제집행까지 7단계를 지금 확인하세요.',
    },
    intro:
      '지인에게 빌려준 300만 원을 돌려받지 못해 소액소송을 결심했습니다. 그런데 소장은 어떻게 쓰는지, 법원에 가면 뭘 하는지, 판결이 나온 뒤에는 어떻게 해야 하는지 막막합니다. 소액소송은 변호사 없이 직접 진행할 수 있는 절차이지만, 단계를 하나라도 빠뜨리면 시간과 비용을 허비하게 됩니다. 아래 7단계 체크리스트를 순서대로 따라가 보세요.',
    sections: [
      {
        title: '1단계 — 소송 전 증거 수집과 내용증명 발송',
        content:
          '<p><strong style="color:#1e3a5f">소장을 쓰기 전에 증거를 모으고, 상대방에게 내용증명을 보내는 것이 첫 번째 단계입니다</strong></p>\n<p>차용증, 계좌이체 내역, 카카오톡 대화 캡처 등 <strong>돈을 빌려줬다는 사실과 변제 약속</strong>을 증명할 자료를 빠짐없이 정리하세요. 증거가 부족하면 승소하더라도 집행이 어려워질 수 있습니다.</p>\n<p>증거 정리가 끝나면 내용증명을 발송합니다. 내용증명은 "언제까지 갚아라"는 <strong>최고(催告) 의사</strong>를 공식적으로 남기는 절차입니다. 우체국이나 전자내용증명(e-내용증명)으로 발송할 수 있으며, 수취 확인이 가능하므로 재판에서 "갚으라고 요구한 적 없다"는 상대 주장을 차단할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 증거 목록 작성 + 내용증명 발송 + 수취 확인서 보관</blockquote>',
      },
      {
        title: '2단계 — 소장 작성과 관할 법원 확인',
        content:
          '<p><strong style="color:#1e3a5f">소액사건심판법에 따라 소송 목적물 가액이 3,000만 원 이하인 사건은 소액사건으로 처리됩니다</strong></p>\n<p>소장에는 <strong>원고·피고 인적사항, 청구 취지, 청구 원인</strong>을 명확히 기재해야 합니다. 대한법률구조공단 홈페이지에서 양식을 다운받을 수 있고, 전자소송(ecfs.scourt.go.kr)을 이용하면 우편 없이 온라인으로 접수할 수 있습니다.</p>\n<p>관할 법원은 원칙적으로 <strong>피고 주소지 관할 지방법원</strong>입니다. 단, 계약서에 관할합의가 있다면 그 법원에 제출합니다. 인지액은 소송 목적물 가액에 따라 다르며, 300만 원 청구 시 약 15,000원 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 소장 양식 다운 + 관할법원 확인 + 인지·송달료 납부</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=small-claims" style="color:#1565c0;font-weight:600">내 소액소송 준비 상황 AI로 점검받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 변론 기일 출석과 진술 준비',
        content:
          '<p><strong style="color:#1e3a5f">소액사건은 보통 1회 변론으로 종결되므로, 첫 기일 준비가 결과를 좌우합니다</strong></p>\n<p>법원에서 기일 통지서가 오면 반드시 출석하세요. 원고가 불출석하면 <strong>소 취하 간주</strong>될 수 있습니다. 변론 기일에는 증거 원본(차용증, 통장 사본 등)을 지참하고, 판사의 질문에 핵심만 간결하게 답변합니다.</p>\n<p>상대방이 답변서를 제출했다면 미리 읽고 <strong>반박 포인트를 메모</strong>해 두세요. "돈을 빌린 적 없다", "이미 갚았다" 등 예상 반론에 대한 재반박 증거를 한 세트로 준비하면 변론이 유리해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 기일 출석 + 증거 원본 지참 + 상대 답변서 반박 준비</blockquote>',
      },
      {
        title: '4단계 — 판결 선고 후 확정과 강제집행 신청',
        content:
          '<p><strong style="color:#1e3a5f">판결문을 받은 뒤 상대가 2주 이내 항소하지 않으면 판결이 확정됩니다</strong></p>\n<p>판결이 확정되면 법원에서 <strong>확정증명원</strong>을 발급받으세요. 상대가 자발적으로 갚지 않으면 강제집행 신청이 가능합니다. 강제집행은 상대의 <strong>예금, 급여, 부동산</strong> 등을 대상으로 할 수 있으며, 채권압류 및 추심명령이 가장 많이 활용됩니다.</p>\n<p>강제집행 신청 시에는 판결문 정본, 확정증명원, 송달증명원이 필요합니다. 상대의 재산을 모른다면 법원을 통해 <strong>재산명시신청</strong>이나 <strong>재산조회신청</strong>을 할 수 있습니다. 재산은닉 시 감치(구금) 제재도 가능하므로, 포기하지 말고 끝까지 절차를 밟으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 확정증명원 발급 + 집행문 부여 + 채권압류 및 추심명령 신청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">강제집행까지 한눈에</strong><br/>\n<a href="/diagnosis/small-claims" style="color:#1565c0;font-weight:600">내 상황에 맞는 다음 단계 AI로 확인하기 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '지급명령 송달 전 이의신청의 효력이 문제된 사례',
        summary:
          '대법원 2024마5496 사건(2024.06.07 선고)에서 법원은 지급명령이 채무자에게 송달되기 전에 한 이의신청은 부적법하지만, 이후 적법하게 송달되면 그 하자가 치유된다고 판시했습니다.',
        takeaway:
          '소액소송·지급명령 절차에서는 송달이 핵심입니다. 상대 주소가 정확한지 반드시 확인하고, 이사불명인 경우 주민등록초본으로 최신 주소를 조회한 뒤 소장을 접수하세요.',
      },
    ],
    faq: [
      {
        question: '소액소송에 걸리는 기간은 보통 얼마나 되나요?',
        answer:
          '소액사건은 <strong>평균 2~3개월</strong> 안에 판결이 나옵니다. 소장 접수 후 약 3~4주 뒤 첫 변론기일이 잡히고, 1회 변론으로 바로 선고되는 경우가 많습니다. 다만 상대가 답변서를 내거나 증인 신청을 하면 기일이 1~2회 추가될 수 있습니다.',
      },
      {
        question: '소액소송 비용은 총 얼마나 드나요?',
        answer:
          '인지액과 송달료를 합쳐 <strong>약 3만~7만 원</strong> 수준입니다. 300만 원 청구 시 인지액 약 15,000원, 송달료 약 10,000원 정도이며, 전자소송을 이용하면 인지액 10% 할인 혜택을 받을 수 있습니다.',
      },
      {
        question: '상대가 주소를 바꿔서 송달이 안 되면 어떻게 하나요?',
        answer:
          '주민등록초본을 열람해 최신 주소를 확인하고 보정서를 제출하세요. 그래도 송달이 안 되면 <strong>공시송달</strong>을 신청할 수 있습니다. 공시송달은 법원 게시판에 2주간 게시한 뒤 송달된 것으로 간주하는 방법입니다.',
      },
      {
        question: '승소했는데 상대가 돈이 없다고 하면 어떡하나요?',
        answer:
          '법원을 통해 <strong>재산명시신청</strong>을 하면 상대가 직접 재산 목록을 제출해야 합니다. 거짓 기재나 불출석 시 20일 이내 감치(구금) 처분이 가능하며, 재산조회신청을 통해 금융기관·국세청·건보공단을 통한 재산 파악도 할 수 있습니다.',
      },
      {
        question: '소액소송 도중에 합의하면 어떻게 되나요?',
        answer:
          '재판 진행 중 합의가 이루어지면 <strong>소 취하서</strong>를 제출하거나, 법원에서 <strong>화해권고결정</strong>을 받을 수 있습니다. 화해권고결정은 확정판결과 동일한 효력이 있어, 상대가 약속을 어기면 바로 강제집행이 가능합니다.',
      },
    ],
    cta: {
      text: '💬 소액소송 전체 절차, AI가 내 상황에 맞게 안내해드립니다',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '소액소송 가이드 허브', href: '/guide/small-claims' },
      { label: '소장 양식과 작성 예시', href: '/guide/small-claims/small-claims-complaint-template' },
      { label: '변호사 없이 혼자 할 수 있나요', href: '/guide/small-claims/can-i-do-it-without-lawyer' },
      { label: '소액소송 온라인 접수 방법', href: '/guide/small-claims/small-claims-online-filing-guide' },
      { label: '빌려준 돈 못 받았을 때 소액소송', href: '/guide/small-claims/lending-money-not-returned-lawsuit' },
    ],
  },
  {
    domain: 'unemployment',
    slug: 'part-time-work-while-receiving-benefit',
    keyword: '실업급여 받으면서 알바 가능 여부',
    questionKeyword: '실업급여 받으면서 알바해도 되나요?',
    ctaKeyword: '실업급여 알바 가능 여부',
    type: 'Q&A형',
    perspective: 'worker',
    meta: {
      title: '실업급여 받으면서 알바 3가지 조건 정리 | 로앤가이드',
      description: '실업급여 수급 중 알바를 하면 급여가 끊길까 걱정된다면, 가능한 조건 3가지를 지금 확인하세요.',
    },
    intro:
      '퇴사 후 실업급여를 받고 있는데 생활비가 빠듯합니다. 편의점이나 배달 알바를 하고 싶지만, 알바를 하면 실업급여가 끊기는 건 아닌지 불안합니다. 결론부터 말하면, 일정 조건을 지키면 알바를 하면서도 실업급여를 받을 수 있습니다. 단, 신고를 빠뜨리면 부정수급으로 적발되어 최대 5배 추가징수까지 당할 수 있으니 반드시 아래 기준을 확인하세요.',
    sections: [
      {
        title: '조건 1 — 월 60시간 미만, 주 15시간 미만의 단기 근로만 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제58조에 따라 월 60시간(주 15시간) 이상 근로하면 취업으로 간주되어 실업급여가 중단됩니다</strong></p>\n<p>알바를 하더라도 <strong>월 60시간 미만</strong>으로 유지해야 합니다. 주 15시간을 넘기는 순간 "취업 상태"로 전환되어 구직급여 수급 자격이 정지됩니다. 하루 3시간씩 주 4일(주 12시간) 정도가 안전선입니다.</p>\n<p>주의할 점은 <strong>여러 곳에서 알바를 병행하는 경우에도 합산</strong>된다는 것입니다. A 편의점에서 주 8시간, B 카페에서 주 8시간 근무하면 합계 주 16시간이 되어 기준을 초과합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 주 15시간 미만 + 월 60시간 미만 = 실업급여 유지 가능</blockquote>',
      },
      {
        title: '조건 2 — 실업인정일에 반드시 근로 사실을 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">알바를 한 날은 실업인정 신청서의 근로 일수에 정확히 기재해야 합니다</strong></p>\n<p>실업인정일(보통 2주마다)에 고용센터에 출석하거나 온라인으로 실업인정을 신청할 때, 알바를 한 날짜와 시간, 수입 금액을 <strong>빠짐없이 기재</strong>해야 합니다. 근로한 날은 실업급여가 지급되지 않고, 그만큼 수급 기간이 뒤로 연장됩니다.</p>\n<p>신고하지 않고 알바 소득을 숨기면 <strong>부정수급</strong>에 해당합니다. 고용보험법 제62조에 따라 이미 받은 급여의 반환은 물론, 부정수급액의 최대 5배까지 추가 징수될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 근로일 기재 → 해당 일수 급여 미지급 → 수급 기간 연장</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/chat?domain=unemployment" style="color:#1565c0;font-weight:600">내 알바 조건이 실업급여에 영향을 주는지 AI로 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '조건 3 — 3개월 이상 계속 근로하면 취업으로 전환됩니다',
        content:
          '<p><strong style="color:#1e3a5f">같은 사업장에서 3개월 이상 계속 근로하면 주 15시간 미만이라도 취업으로 간주될 수 있습니다</strong></p>\n<p>고용보험법 시행령에 따르면, 주 15시간 미만 근로라도 <strong>3개월 이상 계속 근무</strong>하면 고용보험 적용 대상이 됩니다. 이 경우 새로운 피보험 자격이 취득되어 기존 실업급여 수급이 중단될 수 있습니다.</p>\n<p>따라서 단기 알바를 할 때는 <strong>동일 사업장 3개월 미만</strong>으로 관리하는 것이 안전합니다. 3개월이 넘어가면 사업주가 고용보험 취득 신고를 해야 하고, 자동으로 실업급여가 정지됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 동일 사업장 3개월 미만 + 주 15시간 미만 = 안전</blockquote>',
      },
      {
        title: '알바 소득이 실업급여 금액에 미치는 영향',
        content:
          '<p><strong style="color:#1e3a5f">알바 소득에 따라 해당 일의 구직급여가 감액되거나 전액 지급 정지될 수 있습니다</strong></p>\n<p>알바를 한 날의 소득이 <strong>구직급여 일액</strong> 이상이면 해당 일의 급여는 지급되지 않습니다. 소득이 구직급여 일액 미만이면 차액만큼 감액 지급되는 구조입니다. 예를 들어, 구직급여 일액이 66,000원인데 알바로 4만 원을 벌었다면 26,000원만 지급됩니다.</p>\n<p>다만 알바를 하지 않은 날에는 구직급여가 <strong>정상적으로 전액 지급</strong>됩니다. 알바 소득이 적더라도 반드시 정직하게 신고하세요. 고용센터는 국세청·건보공단 자료를 통해 미신고 소득을 추적합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 근로일 소득 ≥ 구직급여 일액 → 해당일 미지급 / 소득 < 일액 → 차액 지급</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">부정수급 위험 없이 알바하려면</strong><br/>\n<a href="/diagnosis/unemployment" style="color:#1565c0;font-weight:600">내 상황에서 알바 가능 여부 AI로 진단받기 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '해외 체류 중 대리 신고로 구직급여를 받은 부정수급 사례',
        summary:
          '대구지법 2018구합23680 사건(2019.04.17 선고)에서 법원은 수급자가 일본에 체류하면서 형이 대리로 재취업 노력신고를 한 행위가 고용보험법 제61조의 "거짓이나 그 밖의 부정한 방법"에 해당한다고 판시했습니다.',
        takeaway:
          '실업급여 수급 중에는 모든 신고를 반드시 본인이 직접 해야 합니다. 알바 사실을 숨기거나 대리 신고를 하면 부정수급으로 적발되어 급여 반환 및 추가 징수 처분을 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '배달 앱 알바도 실업급여에 영향을 주나요?',
        answer:
          '배달 앱은 프리랜서(특수형태근로)로 분류되지만, <strong>소득이 발생하면 실업인정 시 반드시 신고</strong>해야 합니다. 배달 건수가 많아 주 15시간 이상 활동하면 취업으로 간주될 수 있으므로, 활동 시간을 기록해 두세요.',
      },
      {
        question: '알바를 하면 실업급여 수급 기간이 줄어드나요?',
        answer:
          '줄어들지 않습니다. 알바를 한 날은 실업급여가 지급되지 않는 대신, <strong>수급 기간이 그만큼 뒤로 연장</strong>됩니다. 총 수급 일수는 변하지 않으므로 손해는 아닙니다.',
      },
      {
        question: '일용직 알바도 신고해야 하나요?',
        answer:
          '<strong>네, 반드시 신고해야 합니다.</strong> 일용직이든 단기 아르바이트든 소득이 발생하면 실업인정 시 근로 사실을 기재해야 합니다. 일용직의 경우 사업주가 근로내용확인신고를 하므로 고용센터에서 교차검증이 이루어집니다.',
      },
      {
        question: '알바를 하다 그만두면 실업급여가 다시 나오나요?',
        answer:
          '주 15시간 미만 알바를 그만둔 경우, 기존 수급 자격이 유지되어 <strong>다음 실업인정일부터 다시 지급</strong>됩니다. 다만 주 15시간 이상 근무하여 취업으로 전환된 경우에는 남은 수급 일수 범위 내에서 재수급 절차가 필요할 수 있습니다.',
      },
      {
        question: '가족 가게를 도와주는 것도 신고 대상인가요?',
        answer:
          '무급이라면 신고 의무는 없지만, <strong>급여를 받는다면 신고 대상</strong>입니다. 가족 사업장이라도 고용보험 적용 사업장이면 근로 사실이 자동으로 확인되므로, 숨기면 부정수급으로 적발될 위험이 있습니다.',
      },
    ],
    cta: {
      text: '💬 실업급여와 알바 병행 조건, AI가 빠르게 정리해드립니다',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '실업급여 가이드 허브', href: '/guide/unemployment' },
      { label: '실업급여 부정수급 적발 시 대처법', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '실업급여 신청에서 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '실업급여 구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '자발적 퇴사도 실업급여 받는 5가지 사유', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
    ],
  },
  {
    domain: 'unemployment',
    slug: 'missing-application-deadline-trap',
    keyword: '실업급여 신청 기간 놓치면 못 받는 함정',
    questionKeyword: '실업급여 신청 기간을 놓치면 어떻게 되나요?',
    ctaKeyword: '실업급여 신청 기한 확인',
    type: '실수함정형',
    perspective: 'worker',
    meta: {
      title: '실업급여 신청 기간 놓치는 3가지 함정 | 로앤가이드',
      description: '퇴사 후 실업급여 신청을 미루고 있다면, 기간을 놓치면 수급 자격이 사라지는 함정을 지금 확인하세요.',
    },
    intro:
      '회사를 그만둔 지 한 달이 넘었는데 아직 실업급여를 신청하지 않았습니다. "나중에 해도 되겠지" 하다가 정작 신청하려니 기한이 얼마 안 남았다는 사실에 놀랍니다. 실업급여는 퇴사일로부터 12개월 이내에 수급을 마쳐야 하며, 신청이 늦어질수록 받을 수 있는 총액이 줄어듭니다. 많은 사람이 놓치는 3가지 기한 함정을 확인하세요.',
    sections: [
      {
        title: '함정 1 — 퇴직일 다음 날부터 12개월이 수급 기간의 절대 마감입니다',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제48조에 따르면 구직급여의 수급 기간은 이직일(퇴직일)의 다음 날부터 12개월입니다</strong></p>\n<p>실업급여 수급 일수가 아무리 많이 남아 있어도, <strong>퇴직일로부터 12개월</strong>이 지나면 남은 일수는 소멸됩니다. 예를 들어 수급 일수가 210일(약 7개월)인데 퇴직 후 6개월째에 신청하면, 실제로 받을 수 있는 기간은 6개월뿐입니다.</p>\n<p>신청 자체를 미루면 수급 개시가 늦어지고, 12개월 마감선에 걸려 <strong>수십만 원에서 수백만 원을 날릴 수 있습니다</strong>. 퇴사 후 가능한 빨리, 늦어도 2주 이내에 고용센터에 방문하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 퇴직일 + 12개월 = 절대 마감 → 신청이 늦을수록 받는 금액 줄어듦</blockquote>',
      },
      {
        title: '함정 2 — 워크넷 구직등록을 안 하면 수급자격 인정이 안 됩니다',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 방문 전에 워크넷(www.work.go.kr)에서 구직등록을 먼저 해야 합니다</strong></p>\n<p>많은 분들이 고용센터에 바로 가면 되는 줄 알지만, <strong>워크넷 구직등록이 선행 조건</strong>입니다. 구직등록을 하지 않으면 수급자격 인정 신청 자체가 접수되지 않습니다. 워크넷에서 이력서를 작성하고 구직등록 완료 후 고용센터에 방문하세요.</p>\n<p>구직등록은 온라인으로 10분이면 완료됩니다. 등록 후 <strong>1~2일 내에</strong> 관할 고용센터를 방문해 수급자격 인정 신청을 하면, 약 2주 뒤부터 첫 실업인정이 시작됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 워크넷 구직등록 → 고용센터 방문 → 수급자격 인정 신청 (순서 중요)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">신청 기한 놓치기 전에</strong><br/>\n<a href="/chat?domain=unemployment" style="color:#1565c0;font-weight:600">내 실업급여 신청 기한 AI로 계산받기 &rarr;</a>\n</div>',
      },
      {
        title: '함정 3 — 수급자격 인정 교육을 빠뜨리면 일정이 1~2주 더 밀립니다',
        content:
          '<p><strong style="color:#1e3a5f">고용센터에서 수급자격 인정을 받으려면 의무교육(온라인 또는 집합)을 반드시 이수해야 합니다</strong></p>\n<p>고용센터 방문 시 <strong>수급자격 인정 교육</strong> 일정을 안내받습니다. 이 교육을 이수하지 않으면 수급자격 인정이 완료되지 않아, 실업급여 지급이 추가로 1~2주 지연됩니다. 교육은 온라인으로도 수강 가능하니 안내받은 즉시 이수하세요.</p>\n<p>교육 미이수로 인한 지연은 12개월 마감선에 그대로 반영됩니다. 퇴직 후 10~11개월째에 신청하는 분들은 <strong>교육 일정 하나 때문에 남은 수급 일수를 통째로 잃을 수 있습니다</strong>.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 수급자격 인정 교육 미이수 = 지급 지연 → 12개월 마감에 직격탄</blockquote>',
      },
      {
        title: '기한 임박 시 긴급 대처법',
        content:
          '<p><strong style="color:#1e3a5f">퇴직 후 10개월이 넘었다면 지금 당장 아래 순서로 움직이세요</strong></p>\n<ul>\n<li><strong>오늘 중</strong> 워크넷 구직등록 완료</li>\n<li><strong>내일</strong> 관할 고용센터 방문하여 수급자격 인정 신청</li>\n<li><strong>당일 또는 다음 날</strong> 수급자격 인정 교육 온라인 이수</li>\n<li>첫 실업인정일에 반드시 출석하여 구직활동 보고</li>\n</ul>\n<p>이직확인서가 아직 처리되지 않았다면 <strong>고용센터에 사업주 촉구를 요청</strong>하세요. 고용보험법 제42조에 따라 사업주는 이직확인서를 지체 없이 제출할 의무가 있으며, 미제출 시 과태료 부과 대상입니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">기한 임박 긴급 확인</strong><br/>\n<a href="/diagnosis/unemployment" style="color:#1565c0;font-weight:600">남은 수급 기간과 금액 AI로 빠르게 계산하기 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '퇴직 후 12개월 경과로 수급자격을 잃은 해외 전출 근로자 사례',
        summary:
          '울산지법 2013구합2840 사건(2014.04.24 선고)에서 법원은 국내 회사에서 해외 법인으로 전출된 근로자가 퇴직일로부터 12개월이 지난 뒤 수급자격 인정을 신청한 것에 대해, 구직급여 수급 기간이 이미 만료되었으므로 불인정 처분이 적법하다고 판시했습니다.',
        takeaway:
          '실업급여 수급 기간(퇴직일 + 12개월)은 어떤 사유로도 연장되지 않습니다. 해외 체류, 질병, 사업주의 이직확인서 지연 등 개인 사정과 무관하게 12개월이 절대 마감선이므로, 퇴사 즉시 신청 절차를 시작하세요.',
      },
    ],
    faq: [
      {
        question: '퇴사 후 12개월이 거의 다 된 상태인데 지금 신청해도 받을 수 있나요?',
        answer:
          '12개월이 남아 있는 한 신청 자체는 가능합니다. 다만 수급 일수가 남은 기간보다 많으면 <strong>남은 기간만큼만 지급</strong>되고 나머지는 소멸됩니다. 당장 오늘 워크넷 구직등록부터 시작하세요.',
      },
      {
        question: '사업주가 이직확인서를 안 내주면 신청이 불가능한가요?',
        answer:
          '고용센터에 <strong>이직확인서 제출 촉구</strong>를 요청하면 됩니다. 사업주가 10일 이내에 제출하지 않으면 과태료가 부과되며, 고용센터가 직권으로 이직 사유를 조사하여 수급자격을 인정할 수도 있습니다.',
      },
      {
        question: '실업급여 신청 후 첫 지급까지 얼마나 걸리나요?',
        answer:
          '수급자격 인정 신청 후 약 <strong>2~4주</strong> 뒤 첫 실업인정을 받고, 그로부터 1주일 이내에 첫 급여가 입금됩니다. 교육 이수와 실업인정일 출석을 빠뜨리지 않으면 최대한 빠르게 받을 수 있습니다.',
      },
      {
        question: '대기기간 7일은 수급 기간에서 빠지나요?',
        answer:
          '수급자격 인정 후 첫 <strong>7일은 대기기간</strong>으로 급여가 지급되지 않습니다. 이 7일은 12개월 수급 기간에 포함되므로, 신청이 늦어질수록 대기기간마저 부담이 됩니다.',
      },
      {
        question: '질병이나 부상으로 신청이 늦어진 경우 기한이 연장되나요?',
        answer:
          '질병·부상으로 취업이 불가능한 기간에는 <strong>상병급여</strong>를 신청할 수 있지만, 12개월 수급 기간 자체가 연장되지는 않습니다. 병원 진단서와 함께 최대한 빨리 고용센터에 상담하세요.',
      },
    ],
    cta: {
      text: '💬 실업급여 신청 기한과 남은 금액, AI가 빠르게 계산해드립니다',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '실업급여 가이드 허브', href: '/guide/unemployment' },
      { label: '실업급여 신청에서 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자발적 퇴사도 실업급여 받을 수 있나요', href: '/guide/unemployment/voluntary-resignation-benefit-possible' },
      { label: '계약만료 후 실업급여 수급 가능 여부', href: '/guide/unemployment/contract-expiry-benefit-eligibility' },
      { label: '실업급여 수급 조건과 금액 기준', href: '/guide/unemployment/unemployment-benefit-requirements' },
    ],
  },
  {
    domain: 'unemployment',
    slug: 'resigned-where-to-start-application',
    keyword: '퇴사 후 실업급여 어디부터 신청하나',
    questionKeyword: '퇴사했는데 실업급여 어디서부터 신청해야 하나요?',
    ctaKeyword: '실업급여 신청 시작 방법',
    type: '어디부터형',
    perspective: 'worker',
    meta: {
      title: '퇴사 후 실업급여 신청 5단계 시작 가이드 | 로앤가이드',
      description: '퇴사했는데 실업급여를 어디서부터 신청해야 할지 모르겠다면, 첫 단계부터 순서대로 지금 확인하세요.',
    },
    intro:
      '오늘 퇴사했습니다. 실업급여를 받을 수 있다고 들었는데, 어디에 가서 뭘 해야 하는지 하나도 모릅니다. 검색하면 워크넷, 고용센터, 이직확인서, 수급자격 인정 같은 단어가 쏟아지는데 순서가 뒤죽박죽입니다. 퇴사 당일부터 첫 급여를 받기까지, 딱 5단계만 따라가면 됩니다.',
    sections: [
      {
        title: '1단계 — 이직확인서 발급을 사업주에게 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제42조에 따라 사업주는 근로자가 퇴직하면 지체 없이 이직확인서를 제출해야 합니다</strong></p>\n<p>퇴사 당일 또는 다음 날, 인사담당자에게 <strong>"이직확인서를 고용센터에 제출해 달라"</strong>고 요청하세요. 이직확인서에는 퇴직 사유(권고사직, 계약만료, 자발적 퇴사 등)가 기재되며, 이 사유가 실업급여 수급 자격의 핵심 판단 기준입니다.</p>\n<p>사업주가 10일 이내에 제출하지 않으면 <strong>300만 원 이하 과태료</strong> 부과 대상입니다. 제출을 거부하면 고용센터에 직접 사업주 촉구를 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">할 일: 퇴사 당일 인사팀에 이직확인서 제출 요청 + 제출 여부 추적</blockquote>',
      },
      {
        title: '2단계 — 워크넷에서 구직등록을 완료하세요',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 신청의 전제조건은 워크넷(www.work.go.kr) 구직등록입니다</strong></p>\n<p>워크넷에 접속해 회원가입 → 이력서 작성 → <strong>구직등록 완료</strong>까지 진행하세요. 소요 시간은 약 10~15분입니다. 구직등록이 되어야 고용센터에서 수급자격 인정 신청을 접수받습니다.</p>\n<p>이력서는 간단하게 작성해도 됩니다. 희망 직종, 희망 근무지, 희망 급여 정도만 입력하면 충분합니다. 나중에 수정도 가능하니 <strong>빠르게 등록하는 것이 핵심</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">할 일: 워크넷 회원가입 + 이력서 작성 + 구직등록 완료</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 시작하세요</strong><br/>\n<a href="/chat?domain=unemployment" style="color:#1565c0;font-weight:600">내 실업급여 수급 가능 여부 AI로 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계 — 관할 고용센터에 방문하여 수급자격 인정 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">주소지 관할 고용센터에 직접 방문하여 수급자격 인정 신청서를 제출합니다</strong></p>\n<p>지참물은 <strong>신분증</strong>만 있으면 됩니다. 통장 사본, 증명사진 등은 필요하지 않습니다. 고용센터에서 워크넷 구직등록 여부와 이직확인서 접수 여부를 확인한 뒤, 수급자격 인정 교육 일정을 안내합니다.</p>\n<p>관할 고용센터는 <strong>고용보험 홈페이지(www.ei.go.kr)</strong>에서 검색할 수 있습니다. 방문 전에 전화(☎ 1350)로 예약하면 대기 시간을 줄일 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">할 일: 관할 고용센터 확인 + 신분증 지참 방문 + 수급자격 인정 신청</blockquote>',
      },
      {
        title: '4단계 — 수급자격 인정 교육 이수와 첫 실업인정',
        content:
          '<p><strong style="color:#1e3a5f">교육을 이수해야 수급자격이 확정되고, 7일 대기기간 후 첫 실업인정이 시작됩니다</strong></p>\n<p>고용센터에서 안내받은 <strong>수급자격 인정 교육</strong>을 온라인 또는 오프라인으로 이수하세요. 교육은 약 1~2시간이며, 실업급여 제도 안내와 구직활동 방법에 대한 내용입니다.</p>\n<p>교육 이수 후 수급자격이 인정되면, 첫 7일은 <strong>대기기간</strong>으로 급여가 지급되지 않습니다. 8일째부터 2주 단위로 실업인정일이 지정되며, 해당 일에 구직활동을 보고하면 급여가 입금됩니다. 첫 급여는 신청 후 약 <strong>3~4주 뒤</strong> 받게 됩니다.</p>\n<ul>\n<li><strong>온라인 실업인정</strong>: 고용보험 홈페이지(www.ei.go.kr)에서 신청</li>\n<li><strong>구직활동 인정 방법</strong>: 입사지원, 면접, 직업훈련, 취업특강 등</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">첫 급여까지 놓치지 마세요</strong><br/>\n<a href="/diagnosis/unemployment" style="color:#1565c0;font-weight:600">내 실업급여 예상 금액과 수급 일수 AI로 확인하기 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '근로조건 저하로 퇴사한 근로자의 수급자격 인정 사례',
        summary:
          '서울행정법원 2014구합2270 사건(2014.07.03 선고)에서 법원은 부서 이동으로 임금이 46% 이상 하락하게 된 근로자가 퇴직한 것은 고용보험법 시행규칙상 정당한 이직 사유에 해당하므로 수급자격 불인정 처분이 위법하다고 판시했습니다.',
        takeaway:
          '자발적 퇴사라도 근로조건이 크게 악화된 경우에는 실업급여를 받을 수 있습니다. 이직확인서에 기재된 퇴직 사유가 부당하다면 고용센터에 이의를 제기하고, 근로조건 변경 증거(급여명세서, 인사발령서 등)를 함께 제출하세요.',
      },
    ],
    faq: [
      {
        question: '퇴사 후 며칠 안에 신청해야 하나요?',
        answer:
          '법적으로 며칠 이내 신청 의무는 없지만, <strong>퇴직일 다음 날부터 12개월</strong> 안에 수급을 마쳐야 합니다. 신청이 늦어질수록 받을 수 있는 총액이 줄어드니, 퇴사 후 1~2주 이내 시작하는 것이 최선입니다.',
      },
      {
        question: '고용센터에 갈 때 뭘 가져가야 하나요?',
        answer:
          '<strong>신분증(주민등록증 또는 운전면허증)</strong>만 있으면 됩니다. 통장 사본이나 사진은 불필요합니다. 이직확인서는 사업주가 고용센터에 직접 제출하므로, 본인이 가져갈 필요가 없습니다.',
      },
      {
        question: '이직확인서가 아직 안 나왔는데 고용센터에 가도 되나요?',
        answer:
          '네, <strong>먼저 방문해서 상담</strong>을 받을 수 있습니다. 이직확인서가 없어도 수급자격 인정 절차를 사전 안내받을 수 있고, 사업주에게 제출 촉구 요청도 가능합니다. 이직확인서 도착 후 바로 신청이 진행됩니다.',
      },
      {
        question: '자발적 퇴사인데 실업급여를 받을 수 있나요?',
        answer:
          '자발적 퇴사도 <strong>정당한 이직 사유</strong>(임금체불, 근로조건 저하, 장거리 통근, 직장 내 괴롭힘 등)에 해당하면 수급 가능합니다. 고용센터에서 이직 사유를 심사하며, 증거 자료를 함께 제출하면 인정 가능성이 높아집니다.',
      },
      {
        question: '실업급여를 받으면 건강보험료는 어떻게 되나요?',
        answer:
          '퇴직 후 지역가입자로 전환되어 건강보험료를 납부해야 합니다. 다만 <strong>임의계속가입</strong>을 신청하면 퇴직 전 직장가입자 보험료 수준을 최대 36개월 유지할 수 있으니, 퇴사 후 14일 이내에 건보공단에 신청하세요.',
      },
    ],
    cta: {
      text: '💬 퇴사 후 실업급여 신청 절차, AI가 순서대로 안내해드립니다',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '실업급여 가이드 허브', href: '/guide/unemployment' },
      { label: '권고사직 당했을 때 실업급여 받는 법', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '자발적 퇴사도 실업급여 받는 5가지 사유', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '실업급여 신청에서 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
    ],
  },
  {
    domain: 'unemployment',
    slug: 'pre-application-checklist',
    keyword: '실업급여 신청 전 체크리스트',
    questionKeyword: '실업급여 신청 전에 무엇을 준비해야 하나요?',
    ctaKeyword: '실업급여 신청 준비물 확인',
    type: '체크리스트형',
    perspective: 'worker',
    meta: {
      title: '실업급여 신청 전 필수 체크리스트 6가지 | 로앤가이드',
      description: '실업급여를 신청하기 전에 빠뜨리면 안 되는 준비 사항이 궁금하다면, 필수 체크 6가지를 지금 확인하세요.',
    },
    intro:
      '퇴사를 앞두고 있거나 막 퇴사한 상황입니다. 실업급여를 받으려면 무엇부터 준비해야 하는지 정리가 안 됩니다. 이직확인서는 누가 내는 건지, 고용보험 가입 기간은 어떻게 확인하는지, 자발적 퇴사인데 받을 수 있는 건지. 신청하기 전에 아래 6가지를 점검하면, 고용센터에서 헛걸음하는 일을 막을 수 있습니다.',
    sections: [
      {
        title: '체크 1 — 고용보험 가입 기간 180일 이상 확인',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제40조에 따라 이직일 이전 18개월 동안 피보험 단위기간이 합산 180일 이상이어야 합니다</strong></p>\n<p>고용보험 홈페이지(www.ei.go.kr)에 로그인하면 <strong>피보험 이력</strong>을 확인할 수 있습니다. 여러 직장을 다녔다면 합산됩니다. 단, 이전 직장에서 실업급여를 받았다면 그 이후 기간만 계산됩니다.</p>\n<p>주의할 점은 <strong>"피보험 단위기간"은 실제 근무일 기준</strong>이라는 것입니다. 유급휴일(주휴일 등)은 포함되지만, 무급휴직 기간은 제외될 수 있습니다. 정확한 일수는 고용보험 홈페이지에서 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 고용보험 홈페이지 → 피보험 이력 조회 → 180일 이상 확인</blockquote>',
      },
      {
        title: '체크 2 — 퇴직 사유(비자발적 이직) 확인',
        content:
          '<p><strong style="color:#1e3a5f">실업급여는 원칙적으로 비자발적 퇴직(권고사직, 계약만료, 정리해고 등)에 해당해야 수급 가능합니다</strong></p>\n<p>사업주가 제출하는 이직확인서에 기재된 <strong>이직 사유</strong>가 핵심입니다. "자발적 퇴사"로 기재되면 원칙적으로 수급이 제한되지만, 아래 사유에 해당하면 예외적으로 수급 가능합니다.</p>\n<ul>\n<li><strong>임금 체불</strong>이 2개월 이상 지속된 경우</li>\n<li><strong>근로조건</strong>이 채용 시보다 현저히 낮아진 경우</li>\n<li><strong>직장 내 괴롭힘</strong>이나 성희롱으로 퇴직한 경우</li>\n<li>통근 시간이 편도 <strong>1시간 30분</strong> 이상인 사업장 이전</li>\n<li>본인의 중대한 귀책사유 없는 <strong>해고</strong></li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 이직확인서 퇴직 사유 확인 + 자발적 퇴사라면 예외 사유 해당 여부 점검</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 퇴직 사유가 수급 가능한지</strong><br/>\n<a href="/chat?domain=unemployment" style="color:#1565c0;font-weight:600">AI로 수급 자격 빠르게 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '체크 3 — 워크넷 구직등록과 이직확인서 접수 확인',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 방문 전에 워크넷 구직등록 완료와 사업주의 이직확인서 제출 여부를 확인하세요</strong></p>\n<p>워크넷(www.work.go.kr)에서 구직등록을 해야 고용센터에서 <strong>수급자격 인정 신청을 접수</strong>받습니다. 이력서 작성 → 구직등록 완료까지 온라인으로 10분이면 됩니다.</p>\n<p>이직확인서는 사업주가 고용보험 홈페이지를 통해 직접 제출합니다. 본인은 <strong>고용보험 홈페이지에서 접수 여부</strong>를 확인할 수 있습니다. "이직확인서 처리내역 조회" 메뉴에서 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 워크넷 구직등록 완료 + 이직확인서 접수 확인</blockquote>',
      },
      {
        title: '체크 4~6 — 관할 고용센터, 계좌 정보, 퇴직 증빙 서류',
        content:
          '<p><strong style="color:#1e3a5f">마지막으로 관할 고용센터 위치, 급여 수령 계좌, 퇴직 관련 증빙 서류를 준비하세요</strong></p>\n<ul>\n<li><strong>체크 4 — 관할 고용센터 확인</strong>: 주소지 기준 관할 고용센터를 고용보험 홈페이지나 ☎ 1350에서 확인하세요. 방문 전 전화 예약을 하면 대기 시간을 줄일 수 있습니다.</li>\n<li><strong>체크 5 — 급여 수령 계좌 준비</strong>: 본인 명의 통장 계좌번호를 확인해 두세요. 타인 명의 계좌로는 입금이 되지 않습니다.</li>\n<li><strong>체크 6 — 퇴직 관련 증빙 서류</strong>: 자발적 퇴사인데 정당한 이직 사유를 주장하려면 증거 자료가 필요합니다. 임금체불 → 급여명세서·계좌이체 내역, 직장 내 괴롭힘 → 녹음 파일·카톡 캡처, 근로조건 저하 → 인사발령서·급여 비교표 등을 준비하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 관할센터 확인 + 본인 계좌 준비 + 자발적 퇴사 시 증빙 서류 수집</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">체크리스트 완료했다면</strong><br/>\n<a href="/diagnosis/unemployment" style="color:#1565c0;font-weight:600">실업급여 예상 금액과 수급 기간 AI로 확인하기 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '고용보험 가입 신청 기간 해석에 관한 대법원 판례',
        summary:
          '대법원 2018두63235 사건(2022.10.27 선고)에서 법원은 소속기관의 장이 고용보험 가입의사 확인의무를 게을리하여 3개월 신청기간이 도과한 경우, 가입대상 공무원이 그 사유를 안 날부터 다시 3개월 내에 가입신청을 할 수 있다고 판시했습니다.',
        takeaway:
          '고용보험 가입 기간이 부족하다면, 이전 직장에서 사업주가 가입 신고를 누락한 것은 아닌지 확인하세요. 사업주의 귀책사유로 가입이 누락되었다면 소급 적용을 요청할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '고용보험 가입 기간이 179일인데 1일이 부족하면 어떻게 되나요?',
        answer:
          '<strong>180일 미만이면 수급 자격이 없습니다.</strong> 이전 직장 경력이 있다면 합산 가능한지 확인하세요. 또한 사업주가 가입 신고를 누락했다면 고용센터에 소급 적용을 요청할 수 있습니다.',
      },
      {
        question: '계약직인데 계약만료로 퇴사하면 자동으로 수급 가능한가요?',
        answer:
          '네, <strong>계약 기간 만료로 인한 퇴직</strong>은 비자발적 이직으로 분류되어 수급 자격이 인정됩니다. 다만 사업주가 재계약을 제안했는데 본인이 거절한 경우에는 자발적 퇴사로 처리될 수 있으니 이직확인서 내용을 꼭 확인하세요.',
      },
      {
        question: '여러 직장의 고용보험 가입 기간을 합산할 수 있나요?',
        answer:
          '이전 직장에서 <strong>실업급여를 받지 않았다면</strong> 합산 가능합니다. 다만 이전 직장과 현재 직장 사이에 고용보험 미가입 기간이 3년을 초과하면 합산되지 않을 수 있습니다.',
      },
      {
        question: '퇴사 전에 미리 실업급여를 신청할 수 있나요?',
        answer:
          '<strong>퇴사 전에는 신청할 수 없습니다.</strong> 실업급여는 실업 상태에서만 신청 가능합니다. 다만 퇴사 전에 워크넷 구직등록과 고용보험 가입 이력 확인은 미리 해둘 수 있습니다.',
      },
      {
        question: '65세 이후에도 실업급여를 받을 수 있나요?',
        answer:
          '65세 이후에 새로 고용된 경우에는 고용보험 가입 대상에서 제외되어 <strong>실업급여를 받을 수 없습니다</strong>. 다만 65세 전에 고용되어 65세 이후 퇴직한 경우에는 수급 가능합니다.',
      },
    ],
    cta: {
      text: '💬 실업급여 신청 전 준비 상태, AI가 빠르게 점검해드립니다',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '실업급여 가이드 허브', href: '/guide/unemployment' },
      { label: '퇴사 후 실업급여 어디부터 신청하나', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '실업급여 신청에서 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자발적 퇴사도 실업급여 받을 수 있나요', href: '/guide/unemployment/voluntary-resignation-benefit-possible' },
      { label: '실업급여 수급 조건과 금액 기준', href: '/guide/unemployment/unemployment-benefit-requirements' },
    ],
  },
  {
    domain: 'unemployment',
    slug: 'benefit-duration-and-daily-amount',
    keyword: '실업급여 수급 기간과 일일 지급액 기준',
    questionKeyword: '실업급여는 얼마를 얼마 동안 받을 수 있나요?',
    ctaKeyword: '실업급여 금액 기간 계산',
    type: '수치기한형',
    perspective: 'worker',
    meta: {
      title: '실업급여 수급 기간표와 일일 지급액 계산법 | 로앤가이드',
      description: '실업급여를 얼마나 오래, 하루에 얼마나 받을 수 있는지 궁금하다면, 수급 기간표와 계산법을 지금 확인하세요.',
    },
    intro:
      '퇴사 후 실업급여를 신청하려는데 가장 궁금한 것은 "얼마를 얼마나 받을 수 있는가"입니다. 실업급여 금액은 퇴직 전 평균임금의 60%이지만, 상한액과 하한액이 있어 실제 수령액은 다릅니다. 수급 기간도 나이와 고용보험 가입 기간에 따라 120일에서 최대 270일까지 차이가 납니다. 내 조건에서 얼마를 받게 되는지 아래에서 확인하세요.',
    sections: [
      {
        title: '구직급여 일액 계산 공식 — 퇴직 전 평균임금의 60%',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제46조에 따라 구직급여 일액은 이직 전 평균임금의 60%입니다</strong></p>\n<p>계산 공식은 간단합니다.</p>\n<p><strong>구직급여 일액 = 이직 전 평균임금 × 60%</strong></p>\n<p>여기서 "이직 전 평균임금"은 퇴직 직전 <strong>3개월 간 총 급여(세전) ÷ 해당 일수</strong>로 계산됩니다. 예를 들어, 3개월 간 총 급여가 900만 원이고 해당 일수가 91일이면, 평균임금은 약 98,901원이고 구직급여 일액은 약 59,340원입니다.</p>\n<p>단, 상한액과 하한액이 있습니다.</p>\n<ul>\n<li><strong>상한액</strong>: 1일 66,000원 (2024년 기준)</li>\n<li><strong>하한액</strong>: 최저임금의 80% × 1일 소정근로시간 (2024년 기준 약 63,104원)</li>\n</ul>\n<p>하한액이 상한액에 가까운 수준이므로, 최저임금 수준의 급여를 받던 분도 <strong>하루 약 63,000원 이상</strong>을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 일액 = 평균임금 × 60% (상한 66,000원 / 하한 약 63,104원)</blockquote>',
      },
      {
        title: '수급 기간표 — 나이와 가입 기간으로 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제50조에 따라 수급 기간은 나이와 고용보험 피보험 기간에 따라 120일~270일입니다</strong></p>\n<p>아래 표에서 내 조건을 찾아보세요.</p>\n<p><strong>50세 미만 기준:</strong></p>\n<ul>\n<li>1년 미만: <strong>120일</strong></li>\n<li>1년 이상 ~ 3년 미만: <strong>150일</strong></li>\n<li>3년 이상 ~ 5년 미만: <strong>180일</strong></li>\n<li>5년 이상 ~ 10년 미만: <strong>210일</strong></li>\n<li>10년 이상: <strong>240일</strong></li>\n</ul>\n<p><strong>50세 이상 또는 장애인 기준:</strong></p>\n<ul>\n<li>1년 미만: <strong>120일</strong></li>\n<li>1년 이상 ~ 3년 미만: <strong>180일</strong></li>\n<li>3년 이상 ~ 5년 미만: <strong>210일</strong></li>\n<li>5년 이상 ~ 10년 미만: <strong>240일</strong></li>\n<li>10년 이상: <strong>270일</strong></li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 나이 50세 기준 + 가입 기간으로 수급 일수 결정</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 수급 일수와 총 금액 계산</strong><br/>\n<a href="/chat?domain=unemployment" style="color:#1565c0;font-weight:600">AI로 내 실업급여 예상 총액 계산받기 &rarr;</a>\n</div>',
      },
      {
        title: '월 수령액 예시 — 실제로 통장에 얼마가 들어오나',
        content:
          '<p><strong style="color:#1e3a5f">구직급여는 2주 단위로 지급되며, 월 수령액은 일액 × 해당 월 인정 일수로 계산됩니다</strong></p>\n<p>실업인정일마다 2주(14일)분이 지급됩니다. 상한액 기준으로 계산하면:</p>\n<ul>\n<li>2주분: 66,000원 × 14일 = <strong>924,000원</strong></li>\n<li>4주분(약 1개월): 66,000원 × 28일 = <strong>1,848,000원</strong></li>\n</ul>\n<p>하한액 기준(약 63,104원)이라도:</p>\n<ul>\n<li>4주분(약 1개월): 63,104원 × 28일 = <strong>약 1,766,912원</strong></li>\n</ul>\n<p>단, 알바를 한 날이나 구직활동을 인정받지 못한 날은 <strong>해당 일의 급여가 차감</strong>됩니다. 실업인정일에 빠짐없이 구직활동을 보고해야 전액을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 상한액 기준 월 약 185만 원 / 하한액 기준 월 약 177만 원</blockquote>',
      },
      {
        title: '총 수령액 시뮬레이션 — 수급 일수별 최대 금액',
        content:
          '<p><strong style="color:#1e3a5f">수급 일수에 상한액을 곱하면 받을 수 있는 최대 총액을 알 수 있습니다</strong></p>\n<ul>\n<li>120일 × 66,000원 = <strong>최대 7,920,000원</strong></li>\n<li>150일 × 66,000원 = <strong>최대 9,900,000원</strong></li>\n<li>180일 × 66,000원 = <strong>최대 11,880,000원</strong></li>\n<li>210일 × 66,000원 = <strong>최대 13,860,000원</strong></li>\n<li>240일 × 66,000원 = <strong>최대 15,840,000원</strong></li>\n<li>270일 × 66,000원 = <strong>최대 17,820,000원</strong></li>\n</ul>\n<p>최대 270일 수급 시 <strong>약 1,782만 원</strong>까지 받을 수 있습니다. 신청이 늦어져 12개월 마감선에 걸리면 이 금액의 상당 부분을 잃게 되므로, 반드시 퇴사 직후 신청을 시작하세요.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 조건에 맞는 정확한 금액은</strong><br/>\n<a href="/diagnosis/unemployment" style="color:#1565c0;font-weight:600">AI가 퇴직 전 급여 기준으로 정확히 계산해드립니다 &rarr;</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '육아휴직급여 신청 기간이 제척기간(강행규정)임을 확인한 대법원 판례',
        summary:
          '대법원 2018두47264 사건(2021.03.18 선고)에서 법원은 구 고용보험법 제70조 제2항의 육아휴직급여 신청기간(휴직 종료 후 12개월)이 강행규정인 제척기간에 해당하며, 기간 경과 후에는 청구권이 소멸한다고 판시했습니다.',
        takeaway:
          '실업급여뿐 아니라 육아휴직급여 등 고용보험 급여에는 엄격한 신청 기한이 있습니다. "나중에 신청해도 되겠지"라는 생각은 위험합니다. 퇴직 또는 휴직 종료 즉시 해당 급여를 신청하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직 전 3개월에 야근수당, 상여금이 포함되면 평균임금이 올라가나요?',
        answer:
          '네, <strong>3개월 간 받은 모든 임금</strong>(기본급, 야근수당, 상여금, 직책수당 등)이 평균임금 산정에 포함됩니다. 다만 퇴직금, 해고예고수당 등 비정기적 수당은 제외됩니다.',
      },
      {
        question: '파트타임으로 일했는데 실업급여 금액이 다른가요?',
        answer:
          '파트타임도 같은 공식(평균임금 × 60%)으로 계산되지만, 근로시간이 짧아 평균임금이 낮을 수 있습니다. 다만 <strong>하한액(최저임금의 80%)</strong>이 적용되므로, 일정 수준 이하로는 내려가지 않습니다.',
      },
      {
        question: '실업급여는 세금을 떼고 지급되나요?',
        answer:
          '구직급여는 <strong>비과세 소득</strong>으로 소득세와 주민세가 부과되지 않습니다. 지급받은 금액 그대로 통장에 입금되며, 연말정산 시에도 소득에 포함되지 않습니다.',
      },
      {
        question: '수급 기간 중 취업하면 남은 실업급여는 어떻게 되나요?',
        answer:
          '수급 기간이 절반 이상 남은 상태에서 안정적으로 재취업하면 <strong>조기재취업수당</strong>을 받을 수 있습니다. 남은 수급 일수의 50%에 해당하는 금액이 일시금으로 지급됩니다.',
      },
      {
        question: '2024년 기준 상한액이 왜 하한액과 비슷한가요?',
        answer:
          '최저임금이 계속 인상되면서 <strong>하한액(최저임금의 80%)이 상한액(66,000원)에 근접</strong>하게 되었습니다. 이로 인해 고임금 근로자와 저임금 근로자의 실업급여 차이가 줄어든 구조입니다. 정부에서 상한액 인상을 검토 중이나 아직 확정되지 않았습니다.',
      },
      {
        question: '수급 기간을 연장할 수 있는 방법이 있나요?',
        answer:
          '수급 기간(퇴직일+12개월) 자체는 연장되지 않지만, 직업능력개발훈련을 수강하면 <strong>훈련연장급여</strong>로 최대 2년까지 추가 수급이 가능합니다. 다만 고용센터장의 승인이 필요하며, 훈련 출석률 80% 이상을 유지해야 합니다.',
      },
    ],
    cta: {
      text: '💬 내 실업급여 예상 금액과 수급 기간, AI가 정확하게 계산해드립니다',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '실업급여 가이드 허브', href: '/guide/unemployment' },
      { label: '실업급여 신청에서 수급까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '실업급여 신청 기간 놓치는 3가지 함정', href: '/guide/unemployment/missing-application-deadline-trap' },
      { label: '퇴사 후 실업급여 어디부터 신청하나', href: '/guide/unemployment/resigned-where-to-start-application' },
      { label: '실업급여 구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
    ],
  },
];
