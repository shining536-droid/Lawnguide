import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [상가 임차인]의 [계약 종료 후 권리금을 회수해야 하는 상황]에서 [권리금 회수 절차와 일정 파악]을 돕는 페이지다.
// 2. 이 페이지는 [상가 임차인]의 [임대인이 일방적으로 임대료 인상을 통보한 상황]에서 [인상 제한 법률 확인과 대응 준비]를 돕는 페이지다.
// 3. 이 페이지는 [재직 중인 근로자]의 [퇴직금 중간정산이 필요한 상황]에서 [중간정산 요건 충족 여부와 절차 확인]을 돕는 페이지다.
// 4. 이 페이지는 [퇴직금을 받지 못한 퇴직 근로자]의 [체불 진정서를 직접 작성해야 하는 상황]에서 [진정서 작성 요령과 제출 절차 파악]을 돕는 페이지다.
// 5. 이 페이지는 [직장에서 상사의 반복적 외모 언급을 겪는 근로자]의 [성희롱 성립 여부가 불확실한 상황]에서 [법적 판단 기준과 대응 방법 확인]을 돕는 페이지다.

export const spokesBatch17Part1Pages: SpokePage[] = [
  {
    domain: 'sangga',
    slug: 'key-money-recovery-timeline',
    keyword: '상가 권리금 회수 절차 타임라인',
    questionKeyword: '상가 계약이 끝나는데 권리금은 어떻게 회수하나요?',
    ctaKeyword: '상가 권리금 회수',
    type: '절차타임라인형',
    meta: {
      title: '상가 권리금 회수 5단계 절차 — 시기별 체크리스트 | 로앤가이드',
      description: '상가 계약 만료가 다가오는데 권리금을 못 받을까 걱정이시라면, 임대인 통보부터 손해배상 청구까지 5단계 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '상가 임대차 계약 만료가 3개월 앞으로 다가왔습니다. 그동안 쌓아온 단골과 인테리어 가치를 권리금으로 회수하고 싶은데, 임대인이 새 임차인을 거부하면 어떻게 해야 할지 막막합니다. 권리금 회수 절차를 단계별로 정리해보세요.',
    timelineSteps: ['신규 임차인 물색 (만료 6개월 전)', '임대인에게 주선 통보', '임대인 정당 사유 여부 확인', '권리금 계약 체결', '방해 시 손해배상 청구 (3년 이내)'],
    sections: [
      {
        title: '첫째, 계약 만료 6개월 전부터 신규 임차인을 물색하세요',
        content:
          '<p><strong style="color:#1e3a5f">상가임대차보호법 제10조의4에 따라 임차인은 신규 임차인을 주선할 권리가 있습니다</strong></p>\n<p>권리금 회수의 출발점은 <strong>새로운 임차인을 직접 찾는 것</strong>입니다. 계약 만료 최소 6개월 전부터 주변 부동산 중개업소에 의뢰하고, 동종 업종 종사자에게도 알려두세요.</p>\n<p>신규 임차인 후보가 정해지면 <strong>권리금 계약서 초안</strong>을 미리 준비하세요. 시설권리금, 영업권리금, 바닥권리금을 구분해서 산정하면 나중에 분쟁을 줄일 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 신규 임차인 물색 → 권리금 항목별 산정 → 계약서 초안 준비</blockquote>',
      },
      {
        title: '둘째, 임대인에게 신규 임차인 주선 사실을 서면으로 통보하세요',
        content:
          '<p><strong style="color:#1e3a5f">주선 통보는 내용증명으로 보내야 나중에 증거로 활용할 수 있습니다</strong></p>\n<p>신규 임차인 후보가 정해지면 <strong>내용증명 우편</strong>으로 임대인에게 통보하세요. 통보 내용에는 신규 임차인의 인적사항, 예정 보증금·차임, 영업 계획 등을 포함해야 합니다.</p>\n<p>임대인은 통보를 받은 후 <strong>정당한 사유</strong> 없이 신규 임차인과의 임대차 계약 체결을 거절할 수 없습니다. 거절하려면 법에서 정한 사유에 해당해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 내용증명으로 통보 → 신규 임차인 정보 포함 → 임대인 거절 사유 제한</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sangga" style="color:#1565c0;font-weight:600">내 상가 권리금 회수 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 임대인의 거절이 정당한 사유에 해당하는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">상가임대차보호법 제10조의4 제2항에서 정한 정당 사유는 4가지입니다</strong></p>\n<p>임대인이 신규 임차인과의 계약을 거절할 수 있는 <strong>정당한 사유</strong>는 다음과 같습니다. ①신규 임차인이 보증금·차임을 지급할 자력이 없는 경우 ②신규 임차인이 임차인의 의무를 위반할 우려가 있는 경우 ③임대차 목적물을 1년 6개월 이상 영리 목적으로 사용하지 않은 경우 ④임대인이 신규 임차인에게 권리금을 요구하거나 수수한 경우.</p>\n<p>이 4가지 사유에 해당하지 않으면 임대인의 거절은 <strong>권리금 회수기회 방해</strong>에 해당합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정당 사유 4가지: 자력 부족, 의무 위반 우려, 1년 6개월 미사용, 권리금 별도 요구</blockquote>',
      },
      {
        title: '넷째, 권리금 계약을 체결하고 인수인계를 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">권리금 계약서에 시설·영업·바닥 권리금을 구분해서 기재하세요</strong></p>\n<p>신규 임차인과 권리금 계약을 체결할 때는 <strong>시설권리금</strong>(인테리어, 설비), <strong>영업권리금</strong>(단골, 매출), <strong>바닥권리금</strong>(입지가치)을 항목별로 구분해서 기재하세요. 분쟁 시 손해배상액 산정의 근거가 됩니다.</p>\n<p>계약 체결 후에는 <strong>거래처 목록, 매출 자료, 단골 고객 정보</strong> 등 영업 관련 인수인계를 체계적으로 진행하세요. 인수인계 확인서를 별도로 작성하면 더 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">권리금 3분류: 시설(인테리어) + 영업(단골·매출) + 바닥(입지) → 항목별 기재 필수</blockquote>',
      },
      {
        title: '다섯째, 임대인이 방해하면 3년 이내에 손해배상을 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">권리금 회수기회 방해로 인한 손해배상청구권은 3년간 행사할 수 있습니다</strong></p>\n<p>임대인이 정당한 사유 없이 신규 임차인과의 계약 체결을 거부하거나, 현저히 높은 차임을 요구하거나, 그 밖의 방법으로 <strong>권리금 회수를 방해</strong>하면 손해배상을 청구할 수 있습니다.</p>\n<p>손해배상액은 <strong>신규 임차인이 지급하기로 한 권리금과 임대차 종료 시점의 권리금 중 낮은 금액</strong>을 기준으로 합니다. 청구 기한은 임대차가 종료한 날로부터 <strong>3년</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">손해배상: 방해행위 입증 → 권리금 감정평가 → 3년 이내 청구</blockquote>',
      },
    ],
    cases: [
      {
        title: '임대인의 권리금 회수기회 방해로 손해배상을 인정한 사례',
        summary:
          '대법원 2022다260586 사건(2023.02.02 선고)에서 법원은 상가임대차보호법에 따라 임대인이 정당한 사유 없이 신규 임차인과의 계약 체결을 거절한 것은 권리금 회수기회 방해에 해당하며, 이로 인한 손해배상책임을 인정했습니다.',
        takeaway:
          '임대인이 합리적 이유 없이 신규 임차인을 거부한다면 손해배상을 청구할 수 있습니다. 내용증명 통보 기록과 신규 임차인의 자력 증빙을 미리 확보해두세요.',
      },
    ],
    faq: [
      {
        question: '권리금을 받을 수 없는 상가도 있나요?',
        answer: '<strong>대규모 점포(전통시장 내 점포 포함)</strong>나 임대차 기간이 5년을 넘지 않은 경우에도 권리금 보호가 적용됩니다. 다만 <strong>국유재산·공유재산</strong>에 해당하는 상가는 권리금 보호 대상에서 제외됩니다.',
      },
      {
        question: '임대인이 직접 사용하겠다고 하면 권리금을 못 받나요?',
        answer: '임대인의 직접 사용은 <strong>갱신 거절의 정당한 사유</strong>가 될 수 있지만, 그것이 곧 권리금 회수기회 방해의 정당한 사유는 아닙니다. 대법원 판례에 따르면 임대인이 직접 사용하더라도 <strong>권리금 상당 손해배상 책임</strong>이 인정될 수 있습니다.',
      },
      {
        question: '권리금 감정평가는 어디서 받나요?',
        answer: '<strong>한국감정원</strong>이나 <strong>감정평가법인</strong>에 의뢰할 수 있습니다. 감정평가 비용은 보통 50~100만원 수준이며, 소송에서 법원이 별도로 감정을 명하는 경우도 있습니다.',
      },
      {
        question: '권리금 회수 절차에 소요되는 기간은 얼마나 되나요?',
        answer: '신규 임차인 물색부터 계약 체결까지 통상 <strong>2~4개월</strong>이 소요됩니다. 임대인이 방해하여 소송으로 가는 경우 <strong>6개월~1년</strong> 이상 걸릴 수 있으므로 일찍 준비하는 것이 중요합니다.',
      },
      {
        question: '임차인끼리 권리금 계약만 하고 임대인에게 통보 안 하면 어떻게 되나요?',
        answer: '임대인에게 통보하지 않으면 <strong>상가임대차보호법상 권리금 보호 규정을 적용받기 어렵습니다</strong>. 반드시 임대인에게 서면(내용증명)으로 신규 임차인 주선 사실을 통보해야 법적 보호를 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/sangga',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상가임대차 진단', href: '/diagnosis/sangga' },
      { label: '상가 임대료 인상 통보 대응법', href: '/guide/sangga/commercial-rent-increase-notification' },
      { label: '상가 보증금 반환 절차', href: '/guide/sangga/commercial-deposit-return-process' },
      { label: '상가 계약갱신 거절 대응법', href: '/guide/sangga' },
    ],
  },
  {
    domain: 'sangga',
    slug: 'commercial-rent-increase-notification',
    keyword: '상가 임대료 인상 통보 대응법',
    questionKeyword: '임대인이 갑자기 임대료를 올리겠다고 하는데 어떻게 해야 하나요?',
    ctaKeyword: '상가 임대료 인상',
    type: '상황형',
    meta: {
      title: '상가 임대료 인상 5% 제한 — 3가지 대응법 총정리 | 로앤가이드',
      description: '임대인이 갑자기 임대료를 올리겠다고 통보했다면, 상가임대차보호법상 인상 제한 규정과 대응 방법을 꼭 확인하세요. 지금 확인하세요.',
    },
    intro: '어제 임대인에게서 전화가 왔습니다. 다음 달부터 월세를 30% 올리겠다는 겁니다. 장사가 어려운데 그만큼 올리면 가게를 접어야 할 판입니다. 상가임대차보호법이 보호해주는 범위가 어디까지인지 확인해보세요.',
    sections: [
      {
        title: '첫째, 상가임대차보호법상 임대료 인상률은 5% 이내로 제한됩니다',
        content:
          '<p><strong style="color:#1e3a5f">상가임대차보호법 제11조에 따라 차임 증액 청구는 연 5%를 초과할 수 없습니다</strong></p>\n<p>임대인이 아무리 높은 금액을 요구하더라도 <strong>기존 차임의 5%를 초과하는 인상</strong>은 법적으로 효력이 없습니다. 이 제한은 보증금과 월세 모두에 적용됩니다.</p>\n<p>다만 이 보호를 받으려면 <strong>환산보증금이 해당 지역 기준 이하</strong>여야 합니다. 서울 기준 환산보증금 9억원 이하, 수도권 과밀억제권역 6억 9천만원 이하인 상가가 보호 대상입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 차임 증액 연 5% 초과 불가 → 환산보증금 기준 이하 상가에 적용</blockquote>',
      },
      {
        title: '둘째, 임대료 인상 통보에 대해 서면으로 이의를 제기하세요',
        content:
          '<p><strong style="color:#1e3a5f">구두 통보에 응하지 말고, 내용증명으로 법적 입장을 밝히세요</strong></p>\n<p>임대인이 구두나 문자로 인상을 통보했다면 <strong>내용증명 우편</strong>으로 이의를 제기하세요. 내용에는 현재 차임, 요구 인상률, 상가임대차보호법 제11조에 따른 5% 제한 근거를 명시합니다.</p>\n<p>서면으로 이의를 남기면 나중에 분쟁이 발생했을 때 <strong>"임차인이 동의하지 않았다"는 증거</strong>로 활용할 수 있습니다. 대화 녹취, 문자 메시지도 함께 보관하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 내용증명으로 이의 → 5% 초과 거부 의사 명시 → 대화 기록 보관</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sangga" style="color:#1565c0;font-weight:600">내 상가 임대료 인상 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 5%를 초과하는 인상을 이미 납부했다면 초과분 반환을 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">법정 한도를 초과한 차임은 부당이득으로 반환 청구할 수 있습니다</strong></p>\n<p>임대인의 압박에 못 이겨 이미 인상된 금액을 납부했더라도 <strong>5%를 초과하는 부분은 무효</strong>입니다. 초과 납부한 금액은 부당이득 반환 청구를 통해 돌려받을 수 있습니다.</p>\n<p>반환 청구의 소멸시효는 <strong>10년</strong>입니다. 그동안 납부한 임대료 내역(계좌이체 기록, 영수증)을 정리하고, 법정 한도 초과분을 계산해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">초과분 반환: 5% 초과 납부액 계산 → 부당이득 반환 청구 → 소멸시효 10년</blockquote>',
      },
      {
        title: '넷째, 계약갱신요구권을 활용해 안정적으로 영업을 계속하세요',
        content:
          '<p><strong style="color:#1e3a5f">상가임대차보호법 제10조에 따라 최초 계약일부터 10년간 갱신을 요구할 수 있습니다</strong></p>\n<p>2018년 개정법에 따라 상가 임차인은 <strong>최초 임대차 기간을 포함하여 전체 10년</strong>까지 계약갱신을 요구할 수 있습니다. 임대인은 정당한 사유가 없으면 거절할 수 없습니다.</p>\n<p>갱신 시에도 차임 증액은 <strong>5% 이내로 제한</strong>됩니다. 임대인이 인상을 이유로 갱신을 거절하는 것은 정당한 사유에 해당하지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">갱신요구권: 최초 계약 포함 10년간 보장 → 갱신 시에도 5% 제한 적용</blockquote>',
      },
      {
        title: '다섯째, 분쟁이 해결되지 않으면 상가건물임대차분쟁조정위원회를 이용하세요',
        content:
          '<p><strong style="color:#1e3a5f">소송 전에 무료로 이용할 수 있는 분쟁조정 절차가 있습니다</strong></p>\n<p>임대인과 합의가 안 되면 <strong>대한법률구조공단 산하 상가건물임대차분쟁조정위원회</strong>에 조정을 신청할 수 있습니다. 조정 비용은 무료이며, 보통 <strong>60일 이내</strong>에 결과가 나옵니다.</p>\n<p>조정이 성립되면 <strong>재판상 화해와 동일한 효력</strong>이 있어 강제집행도 가능합니다. 조정이 불성립되면 그때 민사소송을 진행하면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조정위원회: 무료 이용 → 60일 이내 결과 → 성립 시 재판상 화해 효력</blockquote>',
      },
    ],
    cases: [
      {
        title: '상가 임차인 갱신거절 통지에 관한 대법원 판결',
        summary:
          '대법원 2023다307024 사건(2024.06.27 선고)에서 법원은 임대인의 갱신거절 통지가 상가임대차보호법에서 정한 정당한 사유에 해당하는지 엄격하게 판단해야 한다고 판시하며, 임차인의 계약갱신요구권을 넓게 보호했습니다.',
        takeaway:
          '임대인이 인상을 이유로 갱신을 거절하더라도 법원은 정당한 사유를 엄격하게 판단합니다. 갱신요구권 행사 기한(만료 6개월~1개월 전)을 놓치지 마세요.',
      },
    ],
    faq: [
      {
        question: '환산보증금이 기준을 초과하면 5% 제한이 적용되지 않나요?',
        answer: '환산보증금이 해당 지역 기준을 초과하는 상가는 <strong>차임 증액 제한 규정(5%)이 적용되지 않습니다</strong>. 다만 민법상 신의성실 원칙에 의해 과도한 인상은 다툴 여지가 있습니다.',
      },
      {
        question: '환산보증금은 어떻게 계산하나요?',
        answer: '환산보증금 = <strong>보증금 + (월차임 x 100)</strong>입니다. 예를 들어 보증금 3천만원, 월세 200만원이면 환산보증금은 2억 3천만원입니다.',
      },
      {
        question: '임대인이 리모델링을 이유로 나가라고 하면 어떻게 하나요?',
        answer: '임대인이 <strong>건물 철거·재건축</strong>을 위해 필요한 경우에는 갱신거절의 정당한 사유가 될 수 있습니다. 다만 단순 리모델링은 정당한 사유에 해당하지 않을 수 있으므로 구체적 상황을 확인하세요.',
      },
      {
        question: '임대인이 보증금은 그대로 두고 월세만 올리겠다고 하면요?',
        answer: '보증금과 월세를 합산한 <strong>환산보증금 기준으로 전체 인상률이 5% 이내</strong>여야 합니다. 월세만 올려도 전체 환산보증금 기준 5%를 초과하면 위법입니다.',
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
      { label: '상가 계약갱신 거절 시 대응법', href: '/guide/sangga' },
      { label: '상가 보증금 반환 청구 절차', href: '/guide/sangga/commercial-deposit-return-process' },
    ],
  },
  {
    domain: 'retirement',
    slug: 'interim-retirement-pay-requirements',
    keyword: '퇴직금 중간정산 요건과 절차',
    questionKeyword: '재직 중에 퇴직금을 중간정산 받을 수 있나요?',
    ctaKeyword: '퇴직금 중간정산',
    type: '절차타임라인형',
    meta: {
      title: '퇴직금 중간정산 6가지 사유 — 요건부터 신청까지 | 로앤가이드',
      description: '재직 중 퇴직금이 급하게 필요한데 중간정산이 가능할지 고민이시라면, 법정 6가지 사유와 신청 절차를 확인하세요. 지금 확인하세요.',
    },
    intro: '갑자기 전세자금이 필요해졌습니다. 회사에 퇴직금 중간정산을 요청하려는데, 아무나 받을 수 있는 건지, 어떤 서류가 필요한지 모르겠습니다. 퇴직금 중간정산이 가능한 6가지 법정 사유와 절차를 정리해보세요.',
    timelineSteps: ['중간정산 사유 해당 여부 확인', '증빙서류 준비', '회사에 서면 신청', '사용자 승인·정산', '퇴직금 재산정 기산일 변경'],
    sections: [
      {
        title: '첫째, 퇴직금 중간정산이 가능한 6가지 법정 사유를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여보장법 시행령 제3조에서 중간정산 사유를 한정적으로 열거하고 있습니다</strong></p>\n<p>퇴직금 중간정산은 근로자가 원한다고 무조건 되는 것이 아닙니다. <strong>법에서 정한 6가지 사유</strong> 중 하나에 해당해야 합니다.</p>\n<p>①무주택자인 근로자의 <strong>주거 목적 주택 구입</strong> ②무주택자의 전세보증금 부담 ③근로자 또는 부양가족의 <strong>6개월 이상 요양</strong> ④최근 5년 이내 파산선고 ⑤최근 5년 이내 개인회생절차 인가 결정 ⑥<strong>임금피크제</strong> 적용으로 임금이 줄어드는 경우</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">6가지 사유: 주택 구입·전세 / 6개월 이상 요양 / 파산·개인회생 / 임금피크제</blockquote>',
      },
      {
        title: '둘째, 해당 사유를 증명할 서류를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">사유별로 필요한 증빙서류가 다릅니다</strong></p>\n<p>주택 구입의 경우 <strong>매매계약서, 무주택 확인서(주민센터 발급), 등기부등본</strong>이 필요합니다. 전세보증금의 경우 <strong>임대차계약서와 무주택 확인서</strong>를 준비하세요.</p>\n<p>6개월 이상 요양의 경우 <strong>의사 진단서와 치료 계획서</strong>가 필요하고, 파산·개인회생의 경우 <strong>법원 결정문 사본</strong>을 제출해야 합니다. 서류가 미비하면 사용자가 정산을 거부할 수 있으니 빠짐없이 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주택: 매매계약서+무주택 확인서 | 요양: 진단서+치료계획서 | 파산: 법원 결정문</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/retirement" style="color:#1565c0;font-weight:600">내 퇴직금 중간정산 가능 여부 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 회사에 서면으로 중간정산을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">구두가 아닌 서면으로 신청해야 분쟁을 예방할 수 있습니다</strong></p>\n<p>퇴직금 중간정산 신청은 <strong>서면(이메일 포함)</strong>으로 하는 것이 원칙입니다. 신청서에는 근로자 인적사항, 중간정산 사유, 정산 희망 금액, 증빙서류 목록을 기재하세요.</p>\n<p>사용자(회사)는 법정 사유에 해당하면 <strong>정당한 이유 없이 거부할 수 없습니다</strong>. 다만 중간정산은 근로자의 청구와 사용자의 승인이 모두 필요한 합의 사항이므로, 사유에 해당하더라도 사용자가 확인 절차를 거칩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신청: 서면 제출 → 증빙서류 첨부 → 사용자 확인·승인 절차</blockquote>',
      },
      {
        title: '넷째, 중간정산 후 퇴직금 재산정 기산일이 바뀌는 점에 주의하세요',
        content:
          '<p><strong style="color:#1e3a5f">중간정산 시점 이후부터 퇴직금이 새로 쌓이기 시작합니다</strong></p>\n<p>퇴직금을 중간정산하면 그동안의 근속기간이 <strong>리셋</strong>됩니다. 예를 들어 10년 근무 후 중간정산을 하면, 이후 퇴직할 때는 <strong>중간정산일 다음 날부터 퇴직일까지</strong>의 기간만으로 퇴직금이 계산됩니다.</p>\n<p>따라서 중간정산 금액이 크지 않은 경우에는 <strong>오히려 불리할 수 있습니다</strong>. 특히 앞으로 급여가 오를 가능성이 있다면 중간정산보다 퇴직 시 일시금 수령이 유리할 수 있으니 신중하게 결정하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 근속기간 리셋 → 향후 퇴직금 = 정산일 다음 날~퇴직일 기준 재계산</blockquote>',
      },
      {
        title: '다섯째, 중간정산 시 평균임금 계산 방법을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 = 1일 평균임금 x 30일 x (재직일수 / 365)로 계산합니다</strong></p>\n<p>평균임금은 <strong>중간정산 사유 발생일 이전 3개월간 지급된 임금 총액</strong>을 그 기간의 총 일수로 나눈 금액입니다. 기본급뿐 아니라 정기상여금, 연차수당, 식대 등 <strong>근로의 대가로 지급된 모든 금품</strong>이 포함됩니다.</p>\n<p>상여금이 연 400%이고 분기별 지급이라면 3개월치(100%)가 포함됩니다. 연차수당은 <strong>퇴직 전전년도 발생분</strong>이 포함될 수 있으니 급여명세서를 꼼꼼히 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">평균임금: 정산일 전 3개월 임금 총액 / 일수 → 상여금·수당 포함 여부 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '평균임금 산정에서 임금의 범위를 넓게 인정한 사례',
        summary:
          '대법원 2021다248299 사건(2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금에는 근로의 대가로 지급되는 일체의 금품이 포함되며, 지급 명목이나 지급 주기에 관계없이 근로의 대상으로 지급된 것이면 임금에 해당한다고 판시했습니다.',
        takeaway:
          '퇴직금 중간정산 시 회사가 기본급만으로 평균임금을 계산했다면 이의를 제기하세요. 정기상여금, 식대, 교통비 등 정기적·일률적으로 지급된 금품도 평균임금에 포함될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '무주택자인데 전세에서 전세로 이사해도 중간정산이 되나요?',
        answer: '네, <strong>무주택자가 주거를 목적으로 전세보증금을 부담하는 경우</strong>라면 이사(전세 갱신 포함)도 중간정산 사유에 해당합니다. 새 임대차계약서와 무주택 확인서를 제출하세요.',
      },
      {
        question: '중간정산을 여러 번 받을 수 있나요?',
        answer: '법정 사유에 해당할 때마다 <strong>횟수 제한 없이</strong> 중간정산을 받을 수 있습니다. 다만 매번 증빙서류가 필요하고, 근속기간이 리셋되므로 신중하게 결정하세요.',
      },
      {
        question: '회사가 중간정산을 거부하면 어떻게 하나요?',
        answer: '법정 사유에 해당하는데도 회사가 부당하게 거부하면 <strong>고용노동부(전화 1350)</strong>에 진정을 제기할 수 있습니다. 다만 중간정산은 합의 사항이므로, 사유 해당 여부에 대한 다툼은 노동위원회를 통해 해결할 수 있습니다.',
      },
      {
        question: '퇴직연금(DC형)에 가입한 경우에도 중간정산이 가능한가요?',
        answer: 'DC형(확정기여형) 퇴직연금은 매년 부담금이 적립되므로 <strong>별도 중간정산 개념이 없습니다</strong>. 다만 적립금을 중도인출할 수 있는 사유는 퇴직금 중간정산 사유와 동일합니다.',
      },
      {
        question: '중간정산 받은 금액에 세금이 붙나요?',
        answer: '퇴직금 중간정산 시 <strong>퇴직소득세</strong>가 부과됩니다. 근속연수에 따른 공제가 적용되며, 중간정산 후 근속기간이 리셋되므로 최종 퇴직 시 세금 계산도 달라질 수 있습니다.',
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
      { label: '퇴직금 계산 방법 총정리', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '체불임금 신고 절차', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },
  {
    domain: 'retirement',
    slug: 'retirement-pay-complaint-writing',
    keyword: '퇴직금 체불 진정서 작성법',
    questionKeyword: '퇴직금을 안 주는데 진정서를 어떻게 쓰나요?',
    ctaKeyword: '퇴직금 체불 진정',
    type: '템플릿형',
    meta: {
      title: '퇴직금 체불 진정서 작성 5가지 핵심항목 — 양식 포함 | 로앤가이드',
      description: '퇴직한 지 14일이 지났는데 퇴직금을 안 주고 있다면, 고용노동부 진정서 작성법과 필수 기재항목을 확인하세요. 지금 확인하세요.',
    },
    intro: '회사를 퇴직한 지 한 달이 넘었는데 퇴직금이 들어오지 않습니다. 회사에 연락하면 "조금만 기다리라"는 말만 반복합니다. 고용노동부에 진정서를 쓰려고 하는데, 뭘 어떻게 써야 하는지 막막합니다. 진정서 핵심 항목 5가지를 정리해보세요.',
    sections: [
      {
        title: '첫째, 진정인(본인) 정보를 정확하게 기재하세요',
        content:
          '<p><strong style="color:#1e3a5f">진정인의 성명, 주민등록번호, 연락처, 주소를 빠짐없이 적으세요</strong></p>\n<p>고용노동부 진정서의 가장 앞부분에는 <strong>진정인(근로자) 정보</strong>를 기재합니다. 성명, 주민등록번호(뒷자리 포함), 연락처(핸드폰), 주소를 정확하게 적어야 합니다.</p>\n<p>연락처는 <strong>실제로 통화 가능한 번호</strong>를 적으세요. 고용노동부 근로감독관이 사실관계 확인을 위해 연락할 수 있으며, 연락이 안 되면 처리가 지연됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기재항목: 성명 / 주민등록번호 / 핸드폰 번호 / 현 거주지 주소</blockquote>',
      },
      {
        title: '둘째, 피진정인(회사) 정보와 사업장 소재지를 기재하세요',
        content:
          '<p><strong style="color:#1e3a5f">사업장 관할 고용노동지청에 접수해야 처리가 빠릅니다</strong></p>\n<p>피진정인 정보에는 <strong>회사명(상호), 대표자 성명, 사업자등록번호, 사업장 주소, 전화번호</strong>를 기재합니다. 사업자등록번호는 급여명세서, 근로계약서, 원천징수영수증 등에서 확인할 수 있습니다.</p>\n<p>진정서는 <strong>사업장 소재지 관할 고용노동지청</strong>에 접수합니다. 관할이 다르면 이송되어 처리가 늦어질 수 있습니다. 고용노동부 홈페이지에서 관할 지청을 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 회사명·대표자·사업자등록번호·주소 기재 → 관할 지청 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/retirement" style="color:#1565c0;font-weight:600">내 퇴직금 체불 상황에 맞는 대응법 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 근무기간과 퇴직일, 미지급 퇴직금 금액을 명시하세요',
        content:
          '<p><strong style="color:#1e3a5f">구체적인 날짜와 금액을 적어야 근로감독관이 바로 조사에 착수할 수 있습니다</strong></p>\n<p>진정 내용에는 <strong>입사일, 퇴직일, 총 근무기간</strong>을 명확히 기재하세요. 그리고 퇴직금 예상 금액(또는 회사가 산정한 금액)과 <strong>실제 지급된 금액, 미지급 금액</strong>을 각각 적습니다.</p>\n<p>퇴직금은 퇴직일로부터 <strong>14일 이내</strong>에 지급해야 합니다(근로자퇴직급여보장법 제9조). 14일이 경과했음에도 지급하지 않은 사실을 날짜와 함께 구체적으로 적으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 기재: 입사일 / 퇴직일 / 근무기간 / 미지급 퇴직금 금액 / 14일 경과 사실</blockquote>',
      },
      {
        title: '넷째, 증빙서류를 최대한 첨부하세요',
        content:
          '<p><strong style="color:#1e3a5f">증거가 많을수록 처리가 빠르고 유리합니다</strong></p>\n<p>진정서에 첨부하면 좋은 서류는 다음과 같습니다. <strong>①근로계약서 사본 ②급여명세서(최근 3개월분) ③퇴직금 산정 내역서 ④4대보험 가입증명원 ⑤계좌이체 내역 ⑥퇴직 관련 문자·이메일</strong></p>\n<p>근로계약서가 없어도 진정은 가능합니다. <strong>4대보험 가입증명원</strong>(국민건강보험공단에서 발급)으로 근무 사실을 증명할 수 있고, <strong>통장거래 내역</strong>으로 급여 수령 사실을 입증할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">우선 첨부: 근로계약서 + 급여명세서 + 4대보험 가입증명원 + 퇴직 통보 문자</blockquote>',
      },
      {
        title: '다섯째, 접수 방법과 처리 절차를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">온라인·방문·우편 3가지 방법으로 접수할 수 있습니다</strong></p>\n<p>진정서는 <strong>①고용노동부 민원마당 홈페이지(온라인) ②관할 고용노동지청 방문 ③우편 접수</strong> 3가지 방법으로 제출할 수 있습니다. 온라인 접수가 가장 편리하며, 진행 상황도 실시간 확인 가능합니다.</p>\n<p>접수 후 근로감독관이 배정되어 <strong>사업주에게 출석 요구서</strong>를 발송합니다. 통상 <strong>25일 이내</strong>에 처리되며, 사업주가 퇴직금을 지급하면 종결됩니다. 미지급 시 <strong>사법처리(검찰 송치)</strong>로 진행될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 온라인/방문/우편 → 25일 이내 처리 → 미지급 시 사법처리 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '퇴직금 지급 지연에 대한 지연이자 인정 사례',
        summary:
          '대법원 2021다248299 사건(2026.01.29 선고)에서 법원은 평균임금 산정 시 근로의 대가로 지급되는 일체의 금품이 포함된다고 판시하며, 사용자가 자의적으로 임금 항목을 제외하고 퇴직금을 산정한 것은 위법하다고 판단했습니다.',
        takeaway:
          '회사가 기본급만으로 퇴직금을 계산했다면 진정서에 정기상여금, 식대, 교통비 등 누락된 항목을 명시하세요. 체불 퇴직금에는 퇴직일 이후 연 20%의 지연이자가 가산됩니다.',
      },
    ],
    faq: [
      {
        question: '퇴직금 체불 진정서를 내면 회사에 불이익이 가나요?',
        answer: '진정이 접수되면 근로감독관이 <strong>사업장 조사</strong>를 실시합니다. 퇴직금 미지급이 확인되면 시정명령이 내려지고, 불이행 시 <strong>3년 이하 징역 또는 3천만원 이하 벌금</strong>에 처해질 수 있습니다.',
      },
      {
        question: '진정서를 낸 후 회사가 보복하면 어떻게 하나요?',
        answer: '근로기준법 제104조 제2항에 따라 진정을 이유로 <strong>불이익 처분(해고, 전보 등)을 하면 2년 이하 징역 또는 2천만원 이하 벌금</strong>에 해당합니다. 보복이 있으면 즉시 추가 진정을 제기하세요.',
      },
      {
        question: '퇴직금 체불에 시효가 있나요?',
        answer: '퇴직금 청구권의 소멸시효는 <strong>퇴직일로부터 3년</strong>입니다. 3년이 지나면 법적으로 청구할 수 없으므로 가능한 빨리 진정서를 접수하세요.',
      },
      {
        question: '회사가 폐업했으면 퇴직금을 받을 수 없나요?',
        answer: '회사가 폐업하거나 파산했더라도 <strong>고용노동부 체당금 제도</strong>를 통해 퇴직금을 대신 받을 수 있습니다. 최종 3개월분 임금과 최종 3년분 퇴직금, 최종 3개월분 휴업수당이 대상입니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
      { label: '퇴직금 중간정산 요건과 절차', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 계산 방법 총정리', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '체불임금 진정 절차 안내', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },
  {
    domain: 'sexual-harassment',
    slug: 'repeated-appearance-comments-by-boss',
    keyword: '상사 반복 외모 언급 성희롱 기준',
    questionKeyword: '상사가 계속 외모를 언급하는데 성희롱인가요?',
    ctaKeyword: '직장 성희롱 외모 언급',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '상사 외모 언급 성희롱 3가지 판단 기준 — 반복성이 핵심 | 로앤가이드',
      description: '상사가 회의 때마다 외모를 언급하는데 참아야 하는 건지 고민이시라면, 직장 내 성희롱 성립 3가지 기준을 확인하세요. 지금 확인하세요.',
    },
    intro: '팀장이 회의 때마다 "오늘도 예쁘네", "살 빠진 거 아니야?"라고 말합니다. 처음에는 칭찬인가 싶었지만 점점 불쾌해지고, 다른 동료들 앞에서 반복되니 출근이 두렵습니다. 이것이 법적으로 성희롱에 해당하는지 확인해보세요.',
    sections: [
      {
        title: '첫째, 직장 내 성희롱의 법적 정의를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제2조 제2호에 따라 성적 언동으로 성적 굴욕감을 느끼게 하면 성희롱입니다</strong></p>\n<p>직장 내 성희롱이란 사업주·상급자·근로자가 <strong>직장 내 지위를 이용하거나 업무와 관련하여</strong> 다른 근로자에게 성적 언동 등으로 성적 굴욕감 또는 혐오감을 느끼게 하는 것을 말합니다.</p>\n<p>"성적 언동"에는 육체적·언어적·시각적 행위가 모두 포함됩니다. 외모에 대한 반복적 언급은 <strong>언어적 성희롱</strong>에 해당할 수 있으며, 행위자의 의도가 아닌 <strong>피해자의 관점</strong>에서 판단합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 지위 이용 + 성적 언동 + 성적 굴욕감·혐오감 → 피해자 관점에서 판단</blockquote>',
      },
      {
        title: '둘째, 반복성이 성희롱 성립의 핵심 요소입니다',
        content:
          '<p><strong style="color:#1e3a5f">1회성 발언보다 반복적 언급이 성희롱으로 인정될 가능성이 높습니다</strong></p>\n<p>외모에 대한 언급이 <strong>1회성</strong>이라면 성희롱으로 인정되기 어려울 수 있습니다. 그러나 같은 사람이 <strong>반복적·지속적으로 외모를 언급</strong>하고, 거부 의사를 표시했는데도 계속된다면 성희롱 성립 가능성이 크게 높아집니다.</p>\n<p>특히 <strong>"그만해 달라"고 말했는데도 멈추지 않은 경우</strong>, 행위자가 피해자의 불쾌감을 인지하고도 계속한 것이므로 고의성이 인정됩니다. 거부 의사 표시 시점과 이후 반복 행위를 기록해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">포인트: 반복성 + 거부 후 지속 → 성희롱 인정 가능성 상승</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sexual-harassment" style="color:#1565c0;font-weight:600">내 상황이 성희롱에 해당하는지 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 증거를 체계적으로 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">날짜, 시간, 장소, 발언 내용, 목격자를 기록하세요</strong></p>\n<p>성희롱 피해 사실을 입증하기 위해 <strong>피해 일지</strong>를 작성하세요. 매번 발생할 때마다 날짜, 시간, 장소, 구체적 발언 내용, 동석자(목격자)를 빠짐없이 적어두세요.</p>\n<p>가능하다면 <strong>녹취</strong>도 유효한 증거가 됩니다. 대화 참여자 본인이 녹음하는 것은 불법이 아닙니다. 문자·카카오톡으로 해당 발언에 대해 이야기한 기록도 간접 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 피해일지(날짜·시간·내용·목격자) + 녹취 + 문자·메신저 기록</blockquote>',
      },
      {
        title: '넷째, 회사 내 성희롱 신고 절차를 이용하세요',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제14조에 따라 사업주는 신고 즉시 조사해야 합니다</strong></p>\n<p>먼저 회사 내 <strong>성희롱 고충처리 담당자</strong>(인사팀, 고충처리위원회)에게 서면으로 신고하세요. 사업주는 지체 없이 조사를 실시하고, <strong>피해자 보호 조치</strong>(근무장소 변경, 유급휴가 등)를 해야 합니다.</p>\n<p>만약 회사가 조사를 하지 않거나 피해자에게 불이익을 주면 <strong>500만원 이하의 과태료</strong> 또는 <strong>3년 이하 징역·3천만원 이하 벌금</strong>이 부과될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 서면 신고 → 회사 즉시 조사 의무 → 피해자 보호 조치 → 미이행 시 과태료</blockquote>',
      },
      {
        title: '다섯째, 회사가 조치하지 않으면 외부 기관에 도움을 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부, 국가인권위원회에 진정할 수 있습니다</strong></p>\n<p>회사가 적절한 조치를 취하지 않으면 <strong>고용노동부(전화 1350)</strong>에 직장 내 성희롱 신고를 하세요. 근로감독관이 사업장을 조사하고 시정 명령을 내릴 수 있습니다.</p>\n<p><strong>국가인권위원회(전화 1331)</strong>에도 진정할 수 있습니다. 인권위 조사 결과 성희롱이 인정되면 시정 권고가 나오며, 손해배상 소송에서 유력한 증거로 활용됩니다. 또한 <strong>여성긴급전화 1366</strong>에서 상담과 법률 지원을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">외부 기관: 고용노동부 1350 / 국가인권위원회 1331 / 여성긴급전화 1366</blockquote>',
      },
    ],
    cases: [
      {
        title: '성적 학대행위의 의미를 판시한 대법원 판결',
        summary:
          '대법원 2025도3890 사건(2025.07.18 선고)에서 법원은 성적 학대행위란 성적 수치심이나 혐오감을 일으키는 일체의 행위로서, 신체 접촉이 없더라도 언어적·정서적으로 성적 굴욕감을 반복적으로 느끼게 하는 행위가 포함된다고 판시했습니다.',
        takeaway:
          '신체 접촉이 없었더라도 반복적인 외모 언급으로 성적 굴욕감을 느꼈다면 법적으로 성희롱에 해당할 수 있습니다. 피해 일지와 거부 의사 표시 기록을 확보하세요.',
      },
    ],
    faq: [
      {
        question: '칭찬이라고 말하면 성희롱이 아닌 건가요?',
        answer: '행위자가 칭찬이라고 주장하더라도 <strong>피해자가 성적 굴욕감이나 혐오감을 느꼈다면 성희롱에 해당</strong>할 수 있습니다. 법원은 "합리적인 피해자의 관점"에서 판단합니다.',
      },
      {
        question: '동료 앞에서 한 말만 성희롱인가요? 둘만 있을 때도 해당되나요?',
        answer: '다른 사람이 있든 없든 <strong>업무 관련성과 성적 언동 여부가 핵심</strong>입니다. 둘만 있을 때 한 발언도 성희롱에 해당할 수 있습니다. 다만 증거 확보 측면에서 목격자가 있으면 유리합니다.',
      },
      {
        question: '신고하면 제가 불이익을 받을 수 있나요?',
        answer: '남녀고용평등법 제14조 제6항에 따라 <strong>성희롱 피해를 신고한 근로자에게 불이익 조치를 하면 3년 이하 징역 또는 3천만원 이하 벌금</strong>에 해당합니다. 불이익이 발생하면 즉시 고용노동부에 신고하세요.',
      },
      {
        question: '녹취가 불법은 아닌가요?',
        answer: '대화 당사자가 직접 녹음하는 것은 <strong>통신비밀보호법 위반이 아닙니다</strong>. 본인이 참여한 대화를 녹음하는 것은 적법하며, 법원에서도 증거로 인정됩니다.',
      },
      {
        question: '성희롱으로 인정되면 어떤 배상을 받을 수 있나요?',
        answer: '성희롱이 인정되면 <strong>위자료(정신적 손해배상)</strong>를 청구할 수 있습니다. 법원 판례상 직장 내 성희롱 위자료는 <strong>300만~2,000만원</strong> 수준이며, 반복성, 지위 이용 정도, 피해 정도에 따라 달라집니다.',
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
      { label: '성희롱 피해 증거 수집 방법', href: '/guide/sexual-harassment' },
      { label: '성희롱 손해배상 청구 안내', href: '/guide/sexual-harassment' },
    ],
  },
];
