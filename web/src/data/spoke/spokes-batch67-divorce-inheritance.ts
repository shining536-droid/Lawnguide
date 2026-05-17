import { SpokePage } from '../spoke-pages';

// batch67 divorce(4) + inheritance(3) — 7개 (2026-05-17)
//
// 고유 존재 이유:
// 1. divorce-spouse-economic-abuse-financial-control-track — 경제적 학대(생활비 미지급·통장 통제) 이혼사유 트랙.
// 2. divorce-spouse-game-screen-addiction-divorce-track — 디지털 중독(게임·SNS) + 가족 의무 불이행 이혼 트랙.
// 3. divorce-spouse-cult-religion-excessive-donation-track — 특정 종교 과도한 헌금 + 가정 방치 이혼.
// 4. divorce-spouse-employee-stock-option-vesting-asset-division-track — 미베스팅 스톡옵션·RSU 재산분할 기준일 평가.
// 5. inheritance-renunciation-tax-debt-priority-track — 한정승인 청산에서 국세 체납 우선 처리 트랙.
// 6. inheritance-bequest-care-promise-broken-track — 부담부 유증(부양 의무) 불이행 시 해제·취소 평가.
// 7. inheritance-deceased-rental-deposit-tenant-return-track — 피상속인 임대 보증금 반환 채무의 상속 처리.

export const spokesBatch67DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce-spouse-economic-abuse-financial-control-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-economic-abuse-financial-control-track',
    keyword: '배우자 경제적 통제 이혼',
    questionKeyword: '결혼 10년간 남편이 생활비를 매월 30만원만 주고 통장·신용카드를 모두 본인이 관리해 왔어요.',
    ctaKeyword: '경제적 통제 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 경제적 통제 이혼 — 5단계 생활비 미지급 유책 3트랙 | 로앤가이드',
      description:
        '배우자의 생활비 미지급·통장 통제로 이혼을 검토 중이라면 5가지 입증·청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 10년차. 남편이 월급은 본인 통장으로만 입금받고 매월 생활비 30만원만 건네 왔어요. 아이 어린이집비·식비·공과금까지 본인이 모자란 부분을 따로 빌려 메워 왔습니다. 통장·신용카드는 모두 본인이 관리해 본인 명의 자산 형성 기회도 사실상 차단된 상태였어요." 민법 제826조 제1항은 \"부부는 동거하며 서로 부양하고 협조할 의무가 있다\"고 정한 영역. 생활비를 정당한 이유 없이 장기간 지급하지 않는 \"경제적 학대\"는 ① 부양의무 위반 ② 악의의 유기 (840조 2호) ③ 심히 부당한 대우 (3호) ④ 혼인 계속 어려운 중대 사유 (6호) ⑤ 위자료·재산분할 가산 5가지 트랙에서 유책 사유로 평가될 수 있는 영역. 신체적 폭력만이 학대가 아니라 \"경제적 통제\"도 유책 사유로 자리잡는 흐름이 있는 영역입니다. 대응은 ① 자료 수집 ② 부양료 청구 ③ 이혼 청구 ④ 재산분할 ⑤ 위자료 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경제적 통제 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·부양료·이혼·분할·위자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 생활비 미지급·통장 통제 자료 수집</strong> — 가계부·이체 내역.</li>\n<li><strong>② 부양료 청구</strong> — 별거 중에도 가능한 영역.</li>\n<li><strong>③ 이혼 청구 (840조 2호·3호·6호)</strong></li>\n<li><strong>④ 재산분할에서 가산 사유 주장</strong></li>\n<li><strong>⑤ 위자료 청구 (정신적 손해)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신체 폭력이 없어도 \"장기간 생활비 미지급·통장 통제\"는 유책 사유로 평가될 여지가 있는 영역. 가계부·이체 내역·메시지 등 \"실제로 어떻게 살았는지\"가 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·분할 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 생활비 흐름 정리 (즉시)</strong> — 본인 카드·이체·가계부.</li>\n<li><strong>2단계 — 부양료 사전 청구 (별거 중이라도, 가정법원)</strong></li>\n<li><strong>3단계 — 이혼·위자료 청구 (840조 2·3·6호)</strong></li>\n<li><strong>4단계 — 재산분할 청구 (이혼 후 2년 내)</strong></li>\n<li><strong>5단계 — 부양·자녀 양육비 사후 조정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경제적 통제 이혼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 생활비·자산·소통 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 명의 카드·계좌 내역 (생활비 자부담 입증)</strong></li>\n<li><strong>배우자 명의 급여·자산 추정 자료 (등기부·예금)</strong></li>\n<li><strong>생활비 관련 메시지·메모 (정기 송금 거부·간헐 입금)</strong></li>\n<li><strong>공과금·교육비·식비 영수증 보관</strong></li>\n<li><strong>본인 가계부·일기·녹취 (가능 시)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 카드·계좌에서 \"생활비를 본인이 메웠다\"는 흐름이 1년 이상 이어진 자료가 핵심. 메시지·녹취로 배우자가 통장·카드 사용을 제한한 사실이 보이면 가중 평가될 여지가 있는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경제적 학대 입증</strong> — 장기·반복성·고의성 종합.</li>\n<li><strong>부양료 청구 시기</strong> — 청구 후 분만 인정 가능한 사례.</li>\n<li><strong>유책 사유 분류</strong> — 2호 유기 vs 3호 부당대우 vs 6호 중대 사유.</li>\n<li><strong>재산 은닉 가능성</strong> — 사전 보전 처분 검토.</li>\n<li><strong>위자료·재산분할 가산</strong> — 사례별 차등 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 생활비 미지급·유기와 유책배우자',
        summary:
          '대법원 2009므844(대법원, 2010.12.09 선고) 영역에서 법원은 다른 여자와 부정한 관계를 맺고 일방적으로 집을 나가 생활비를 지급하지 않은 채 처와 자녀를 유기한 배우자에게 혼인관계 파탄의 주된 책임이 있다고 평가하여 유책배우자로 본 사례 흐름이 있습니다.',
        takeaway: '장기 생활비 미지급·유기는 유책 사유로 평가. 가계 흐름 자료가 결정적.',
      },
    ],
    faq: [
      {
        question: '신체 폭력이 없는데도 학대로 인정되나요?',
        answer:
          '<strong>장기·반복 경제적 통제는 \"심히 부당한 대우\" 또는 \"중대 사유\"로 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '별거 중에도 생활비 청구 가능한가요?',
        answer:
          '<strong>가정법원에 부양료 심판 청구 가능한 영역입니다.</strong> 통상 청구 후 분부터 인정되는 사례 흐름.',
      },
      {
        question: '본인 명의 자산이 적으면 재산분할에서 불리한가요?',
        answer:
          '<strong>명의보다 기여가 기준이므로 가사·자산 유지 기여 항목화가 핵심인 영역입니다.</strong>',
      },
      {
        question: '위자료는 얼마 정도로 검토되나요?',
        answer:
          '<strong>사례에 따라 다르지만 1,000만~3,000만원 수준이 자주 보이는 사례 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '재산 은닉이 걱정되면요?',
        answer:
          '<strong>가압류·가처분 등 사전 보전 처분을 검토할 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
    ],
  },

  // ─── 2. divorce-spouse-game-screen-addiction-divorce-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-game-screen-addiction-divorce-track',
    keyword: '배우자 게임 SNS 중독 이혼',
    questionKeyword: '남편이 매일 새벽까지 온라인 게임에 빠져 아이 양육·가사를 전혀 안 해요. 이혼 사유 되나요?',
    ctaKeyword: '디지털 중독 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 게임·SNS 중독 이혼 — 5단계 디지털 중독 유책 3트랙 | 로앤가이드',
      description:
        '배우자의 게임·SNS 중독으로 가사·양육 의무 불이행이 이어진다면 5가지 이혼 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 결혼 4년차부터 온라인 게임에 빠져 매일 새벽까지 모니터 앞. 아이가 둘인데 본인이 가사·육아·외벌이까지 떠안고 있어요. 대화는 \"한판만 더\"가 끝. 게임 캐시·아이템에 매월 50만원 이상 쓰고 통장도 비어갑니다. 이혼해도 인정될까 막막합니다.\" 민법 제840조 제6호는 \"혼인을 계속하기 어려운 중대한 사유\"를 이혼 사유로 정한 영역. 게임·SNS·스마트폰 등 디지털 중독은 ① 부부공동생활 의무 위반 (826조) ② 양육 의무 불이행 (913조) ③ 금전 낭비 (재산분할 가산) ④ 정신적 학대 (위자료) ⑤ 중대 사유 (840조 6호) 5가지 트랙에서 평가될 수 있는 영역. 단순 취미를 넘어 \"가족 의무 회피 + 경제 손실 + 정서 단절\"이 함께 입증되어야 가중 평가되는 흐름. 대응은 ① 자료 ② 경고 ③ 별거 ④ 청구 ⑤ 분할 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 게임·SNS 중독 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·경고·별거·이혼·분할 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 중독 행태 자료 수집</strong> — 시간·금액·횟수.</li>\n<li><strong>② 가족 의무 불이행 입증</strong> — 양육·가사 부재.</li>\n<li><strong>③ 별거·경고 시도</strong> — 회복 가능성 검토.</li>\n<li><strong>④ 이혼·위자료 청구 (840조 6호)</strong></li>\n<li><strong>⑤ 재산분할 가산 사유 주장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 취미가 아닌 \"가족 의무 회피 + 경제 손실 + 정서 단절\"이 함께 입증되어야 평가되는 흐름. 게임 시간·결제 내역·양육 부재 등 객관 자료가 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·분할 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게임 시간·결제·SNS 사용 기록 (즉시)</strong></li>\n<li><strong>2단계 — 양육·가사 부재 자료 (어린이집·학교 알림장)</strong></li>\n<li><strong>3단계 — 경고·치료 권유 (서면·녹취)</strong></li>\n<li><strong>4단계 — 이혼·위자료 청구 (가정법원, 840조 6호)</strong></li>\n<li><strong>5단계 — 재산분할 청구 (낭비 가산 주장)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">디지털 중독 이혼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 중독·양육·소통 갈래입니다.</strong></p>\n<ul>\n<li><strong>게임·SNS 결제 카드 내역 (월별 합계)</strong></li>\n<li><strong>스마트폰·PC 사용 시간 로그</strong></li>\n<li><strong>어린이집·학교 알림장·하원 기록 (양육 부재)</strong></li>\n<li><strong>본인 양육 일지·가사 기록</strong></li>\n<li><strong>대화·메시지·녹취 (경고·요구 이력)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"매일 새벽 4시까지 게임\" 같은 추상 표현보다 \"월 평균 캐시 결제 50만원·하원 0회·주말 외출 동행 0회\" 같은 숫자 자료가 결정적인 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>중독성 입증</strong> — 시간·금액·횟수 종합.</li>\n<li><strong>회복 가능성</strong> — 치료 권유·거부 이력.</li>\n<li><strong>경제 손실 규모</strong> — 결제·낭비 정도.</li>\n<li><strong>양육 영향</strong> — 자녀 정서·발달 자료.</li>\n<li><strong>위자료·재산분할 가산</strong> — 사례별 차등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부공동생활 의무 위반과 중대 사유',
        summary:
          '대법원 2021므15480(대법원, 2022.05.26 선고) 영역에서 법원은 배우자가 장기간 부부공동생활을 방치하고 생활비 등 부양·협조 의무를 이행하지 않은 사정 등을 종합하여 민법 제840조 제6호의 \"혼인을 계속하기 어려운 중대한 사유\"에 해당한다고 평가한 사례 흐름이 있습니다.',
        takeaway: '게임·SNS·해외 체류 등 형태와 무관하게 \"공동생활 의무 회피\"가 입증되면 중대 사유 인정 흐름.',
      },
    ],
    faq: [
      {
        question: '취미와 중독은 어떻게 구분되나요?',
        answer:
          '<strong>가족 의무 회피·경제 손실·정서 단절이 함께 있어야 중독으로 평가되는 영역입니다.</strong>',
      },
      {
        question: '치료를 권했는데 거부했어요. 가중 평가되나요?',
        answer:
          '<strong>회복 의지 부재·반복성으로 가중 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '게임 캐시 결제도 재산분할에서 고려되나요?',
        answer:
          '<strong>일방의 정당한 이유 없는 낭비로 재산분할 가산 사유로 평가되는 사례 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '아이 양육권은 누가 가져가나요?',
        answer:
          '<strong>실질 양육 기여·자녀 정서 안정을 기준으로 평가되는 영역입니다.</strong>',
      },
      {
        question: '위자료는 어느 정도 검토되나요?',
        answer:
          '<strong>사례에 따라 다르지만 1,000만~2,000만원 수준이 자주 보이는 사례 흐름이 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 3. divorce-spouse-cult-religion-excessive-donation-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-cult-religion-excessive-donation-track',
    keyword: '배우자 컬트 종교 헌금 이혼',
    questionKeyword: '아내가 특정 종교에 빠져 매월 월급 절반 이상을 헌금으로 보내고 가정에 무관심해졌어요.',
    ctaKeyword: '컬트 종교 헌금 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '컬트 종교 헌금 이혼 — 5단계 가정 방치 유책 3트랙 | 로앤가이드',
      description:
        '배우자의 컬트 종교 과도한 헌금·가정 방치로 이혼을 검토 중이라면 5가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아내가 1년 전 특정 종교 모임에 빠진 후 매월 월급의 절반 이상을 헌금으로 보냅니다. 주말은 거의 종교 활동에 보내고 아이와 본인은 뒷전. 통장 잔고가 매월 비어가고 대화도 줄었어요. 종교 자유는 존중하지만 가정·재산이 무너지는 상황을 어떻게 정리해야 할지 막막합니다.\" 헌법은 종교의 자유를 보장하지만 민법 제826조 \"부부의 동거·부양·협조 의무\"와 충돌할 때는 한쪽 의무만 일방적으로 우선되지 않는 영역. ① 헌금 규모·빈도 입증 ② 가정 방치 자료 ③ 재산 처분·은닉 ④ 정신적 영향 ⑤ 840조 6호 청구 5가지 트랙이 핵심. 단순한 신앙 활동은 사유가 되기 어렵지만 \"가족 재산을 일방적으로 처분 + 가정 방치\"가 함께 있으면 평가되는 흐름. 대응은 ① 자료 ② 협의 ③ 보전 ④ 이혼 ⑤ 분할 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 컬트 종교 헌금 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 헌금·방치·보전·이혼·분할 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 헌금 규모·빈도 자료 (이체·카드 결제)</strong></li>\n<li><strong>② 가정 방치 입증 (양육·가사 부재)</strong></li>\n<li><strong>③ 사전 재산 보전 처분 검토 (가압류)</strong></li>\n<li><strong>④ 이혼 청구 (840조 6호 중대 사유)</strong></li>\n<li><strong>⑤ 재산분할에서 일방 처분 가산 주장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 종교 자유는 보호되지만 \"가족 공동재산의 일방적 처분 + 부양·협조 의무 위반\"이 함께 입증되면 중대 사유로 평가될 여지가 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·보전·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 헌금·기부 자료 수집 (즉시)</strong> — 이체·카드·계좌.</li>\n<li><strong>2단계 — 가정 방치·재산 처분 입증 자료</strong></li>\n<li><strong>3단계 — 가압류 등 사전 보전 처분 검토</strong></li>\n<li><strong>4단계 — 이혼·위자료 청구 (가정법원)</strong></li>\n<li><strong>5단계 — 재산분할 (이혼 후 2년 내)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">컬트 종교 헌금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 헌금·방치·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>배우자 명의 계좌 이체 내역 (헌금·기부)</strong></li>\n<li><strong>카드 결제 내역 (종교 활동 관련)</strong></li>\n<li><strong>가정 방치 입증 (어린이집·학교 알림장)</strong></li>\n<li><strong>주말·휴일 부재 자료 (가족 행사 등)</strong></li>\n<li><strong>대화·메시지·녹취 (경고·요구 이력)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"신앙심이 깊어졌다\"는 추상 표현보다 \"월 평균 헌금 200만원·주말 외출 4회 모두 종교 활동\" 같은 숫자가 결정적. 일방 처분 시 가압류 검토 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>종교 자유 vs 가족 의무</strong> — 균형 평가.</li>\n<li><strong>헌금 규모·빈도</strong> — 가계 대비 비율.</li>\n<li><strong>일방 재산 처분</strong> — 공동재산 무단 사용.</li>\n<li><strong>가정 방치 정도</strong> — 양육·동거·소통.</li>\n<li><strong>회복 시도 이력</strong> — 경고·치료·중재 권유.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동재산 일방적 처분과 중대 사유',
        summary:
          '대법원 2025므10730(대법원, 2025.09.04 선고) 영역에서 법원은 부부가 협력으로 이룩한 공동재산의 주요 부분을 정당한 이유 없이 상대 배우자의 동의 없이 일방적으로 처분하여 가정공동체의 경제적 기반을 형해화한 행위는 민법 제840조 제6호의 \"혼인을 계속하기 어려운 중대한 사유\"에 해당할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '헌금 형태든 무엇이든 \"공동재산 일방 처분 + 가정 기반 훼손\"이 함께 인정되면 중대 사유 평가 흐름.',
      },
    ],
    faq: [
      {
        question: '종교 자유와 충돌하지 않나요?',
        answer:
          '<strong>종교 자유는 보호되지만 \"공동재산 무단 처분·가족 의무 위반\"은 별개 평가 영역입니다.</strong>',
      },
      {
        question: '헌금이 얼마부터 과도한가요?',
        answer:
          '<strong>가계 소득 대비 비율·기간·일방 결정 여부를 종합 평가하는 영역입니다.</strong>',
      },
      {
        question: '재산을 더 빼가기 전에 막을 수 있나요?',
        answer:
          '<strong>가압류·가처분 등 사전 보전 처분을 검토할 수 있는 영역입니다.</strong>',
      },
      {
        question: '아이가 종교에 같이 끌려가요. 어떻게 하나요?',
        answer:
          '<strong>친권·양육권 분쟁에서 자녀 정서·안전을 기준으로 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '위자료는 어느 정도인가요?',
        answer:
          '<strong>사례에 따라 다르지만 1,500만~3,000만원 수준이 자주 보이는 사례 흐름이 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 4. divorce-spouse-employee-stock-option-vesting-asset-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-employee-stock-option-vesting-asset-division-track',
    keyword: '배우자 스톡옵션 RSU 재산분할',
    questionKeyword: '남편이 IT 대기업에서 받은 미베스팅 스톡옵션과 RSU도 재산분할 대상인가요?',
    ctaKeyword: '스톡옵션 RSU 분할 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '스톡옵션 RSU 재산분할 — 5단계 미베스팅 기준일 평가 3트랙 | 로앤가이드',
      description:
        '미베스팅 스톡옵션·RSU의 재산분할 평가 기준이 헷갈린다면 5가지 입증·산정 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 IT 대기업에서 5년 근속 조건으로 RSU 1억 상당, 스톡옵션 5,000주를 부여받았어요. 결혼 8년차에 이혼을 진행하는데, 일부는 이미 베스팅됐고 일부는 2년 후에야 베스팅돼요. 변호사는 \"베스팅 자산도 재산분할 대상이 될 수 있다\"고 안내했지만 평가 시점·비율이 막연합니다.\" 재산분할 대상 자산은 명의가 아니라 \"혼인 중 형성한 가치\"가 기준인 영역. ① 자산 종류 구분 (스톡옵션·RSU·ESPP) ② 베스팅 완료분 vs 미베스팅분 ③ 분할 기준일 (사실심 변론종결일) ④ 평가 방법 (시가·할인율) ⑤ 분할 방식 (현물·정산) 5가지 트랙이 핵심. 장래 퇴직급여처럼 \"불확실하지만 혼인 중 노무 기여로 형성된 자산\"은 분할 대상에 포함될 여지가 있는 영역. 대응은 ① 자료 ② 평가 ③ 시기 ④ 청구 ⑤ 정산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 스톡옵션·RSU 분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·구분·평가·청구·정산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부여 계약서·베스팅 일정 확보</strong></li>\n<li><strong>② 베스팅 완료 vs 미베스팅 자산 구분</strong></li>\n<li><strong>③ 평가 기준일 (사실심 변론종결일)</strong></li>\n<li><strong>④ 시가·할인율 등 평가 방법 결정</strong></li>\n<li><strong>⑤ 현물 분할 vs 가액 정산 선택</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 베스팅 완료분은 평가가 비교적 쉽지만 미베스팅분은 \"혼인 중 노무 기여 비율·이혼 시점 가치·향후 베스팅 불확실성\"을 종합 평가하는 흐름이 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·평가·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부여 계약서·베스팅 스케줄 확보 (즉시)</strong></li>\n<li><strong>2단계 — 회사·증권사 보유 현황 자료 요청 (1~2개월)</strong></li>\n<li><strong>3단계 — 평가 방법 합의 또는 감정 (시가·할인율)</strong></li>\n<li><strong>4단계 — 재산분할 청구 (이혼 후 2년 내, 가정법원)</strong></li>\n<li><strong>5단계 — 현물 이전 또는 가액 정산 (사후 합의)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">스톡옵션 RSU 분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 부여·베스팅·평가 갈래입니다.</strong></p>\n<ul>\n<li><strong>스톡옵션·RSU 부여 계약서 (Grant Agreement)</strong></li>\n<li><strong>베스팅 스케줄·이미 베스팅된 주식 명세</strong></li>\n<li><strong>회사 정관·임직원 보상 규정</strong></li>\n<li><strong>주식 시가 자료 (상장가 또는 비상장 평가서)</strong></li>\n<li><strong>임금명세서·재직증명서 (혼인 중 근속 기간)</strong></li>\n<li><strong>혼인관계증명서·이혼 진행 자료</strong></li>\n<li><strong>증권사 잔고증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 베스팅 스케줄과 혼인 기간이 겹치는 비율이 분할 가능 범위 판단의 출발점인 영역. 비상장이라면 별도 가치 평가가 필요해 \"평가 기준일\"이 더욱 중요한 흐름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할 대상 여부</strong> — 베스팅 완료 vs 미베스팅.</li>\n<li><strong>평가 기준일</strong> — 사실심 변론종결일 원칙.</li>\n<li><strong>시가 산정</strong> — 상장 vs 비상장 차이.</li>\n<li><strong>장래 불확실성</strong> — 베스팅 조건 미달 위험 반영.</li>\n<li><strong>분할 방식</strong> — 현물 이전 vs 가액 정산.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 장래 퇴직급여와 재산분할 대상성',
        summary:
          '대법원 2013므2250(대법원, 2014.07.16 선고) 영역에서 법원은 이혼 당시 아직 퇴직하지 않은 배우자의 퇴직급여채권도 그 형성에 상대방 배우자의 협력이 기여한 부분이 있다면 재산분할 대상에 포함될 수 있다고 평가하며, 불확실성·변동 가능성은 평가 방법으로 반영하면 된다고 본 사례 흐름이 있습니다.',
        takeaway: '스톡옵션·RSU 등 미실현 자산도 혼인 중 노무 기여가 인정되면 분할 대상 평가 가능한 흐름.',
      },
    ],
    faq: [
      {
        question: '아직 베스팅되지 않은 RSU도 대상인가요?',
        answer:
          '<strong>혼인 중 노무 기여 비율이 인정되면 분할 대상에 포함될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '비상장 회사 스톡옵션은 어떻게 평가하나요?',
        answer:
          '<strong>회계 평가·합의된 가치 산정 방법을 사용하는 사례 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '현물로 이전받을 수 있나요?',
        answer:
          '<strong>회사 정관·양도 제한 규정에 따라 가액 정산이 일반적인 영역입니다.</strong>',
      },
      {
        question: '분할 기준일은 언제인가요?',
        answer:
          '<strong>이혼소송의 사실심 변론종결일이 원칙인 영역입니다.</strong>',
      },
      {
        question: 'ESPP·우리사주는요?',
        answer:
          '<strong>유사한 임직원 보상 자산은 평가 기준·기여 비율을 동일하게 검토하는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
    ],
  },

  // ─── 5. inheritance-renunciation-tax-debt-priority-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-tax-debt-priority-track',
    keyword: '한정승인 세금 체납 우선순위',
    questionKeyword: '아버지가 부동산 5억과 종합소득세 체납 1억을 남기고 돌아가셨어요. 한정승인 시 세금이 먼저인가요?',
    ctaKeyword: '한정승인 국세 우선 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '한정승인 국세 우선순위 — 5단계 청산 세금 처리 3트랙 | 로앤가이드',
      description:
        '한정승인 청산에서 국세 체납과 일반 채무 우선순위가 헷갈린다면 5가지 정리 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 부동산 5억과 종합소득세 체납 1억을 남기고 돌아가셨어요. 일반 채권자도 있어 한정승인을 했는데, \"국세는 일반 채권에 우선한다\"는 안내를 받았습니다. 한정승인 청산 절차에서 세금이 먼저 빠져나가면 본인이 받을 잔여 재산은 거의 없을 수 있어 걱정입니다.\" 국세기본법 제35조는 \"국세는 다른 공과금 기타 채권에 우선하여 징수한다\"는 \"국세 우선 원칙\"을 정한 영역. 다만 ① 한정승인 절차는 책임 한도 한정 (민법 1028조) ② 청산 시 우선순위 (국세 → 담보채권 → 일반채권) ③ 취득세는 한정승인이라도 부과 ④ 신고 기한 3개월 ⑤ 잔여 재산 분배 5가지 트랙이 핵심. 한정승인을 한다고 세금이 면제되지 않고 청산 순서에서 우선될 뿐인 영역입니다. 대응은 ① 조회 ② 결정 ③ 신고 ④ 청산 ⑤ 정산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 한정승인 국세 우선 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 조회·결정·신고·청산·정산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 체납 국세·지방세 조회 (홈택스·위택스)</strong></li>\n<li><strong>② 일반 채무 vs 국세 비교 후 결정</strong></li>\n<li><strong>③ 한정승인 신고 (3개월 내)</strong></li>\n<li><strong>④ 청산 시 우선순위 (국세 → 담보 → 일반)</strong></li>\n<li><strong>⑤ 잔여 재산 분배·취득세 별도 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한정승인은 \"책임 한도\"를 한정할 뿐 채무·세금이 사라지지 않는 영역. 청산 절차에서 국세가 일반 채권보다 우선 변제되므로 \"국세 규모\"가 잔여 재산에 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 조회·신고·청산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 홈택스·위택스 체납 조회 (즉시)</strong> — 국세·지방세 전수.</li>\n<li><strong>2단계 — 안심상속·신용정보원으로 일반 채무 조회 (1~2주)</strong></li>\n<li><strong>3단계 — 한정승인 결정 + 가정법원 신고 (3개월 내)</strong></li>\n<li><strong>4단계 — 청산 (국세 우선 → 담보 → 일반 채권 순)</strong></li>\n<li><strong>5단계 — 잔여 재산 분배 + 한정승인 취득세 신고</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">국세 우선 청산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 세무·재산·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>국세 체납·납세 증명서 (홈택스 발급)</strong></li>\n<li><strong>지방세 체납 증명서 (위택스 발급)</strong></li>\n<li><strong>안심상속 원스톱 조회 결과 (정부24)</strong></li>\n<li><strong>부동산 등기부등본·근저당 설정 자료</strong></li>\n<li><strong>일반 채권자 통지·공고용 명부 자료</strong></li>\n<li><strong>피상속인 사망 사실증명서</strong></li>\n<li><strong>상속인 가족관계증명서·신분증·인감</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 국세 체납은 홈택스, 지방세는 위택스에서 별도 조회 가능. 두 조회 결과를 다 합쳐야 \"세금 부담\"이 보이는 영역. 담보채권(근저당)은 청산 시 국세보다 후순위될 수 있어 등기부 확인 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>국세 우선 원칙</strong> — 국세기본법 35조.</li>\n<li><strong>한정승인 청산 순서</strong> — 국세 → 담보 → 일반.</li>\n<li><strong>법정기일 우선 담보</strong> — 일부 담보채권이 국세보다 앞설 여지.</li>\n<li><strong>한정승인 취득세</strong> — 부과되는 영역.</li>\n<li><strong>잔여 재산 분배 시점</strong> — 청산 종료 후.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국세청 상담 126</strong></li>\n<li><strong>정부24 안심상속 (1588-2188)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인의 책임 한도 효과',
        summary:
          '대법원 2003다309(대법원, 2003.11.14 선고) 영역에서 법원은 한정승인은 채무의 존재를 한정하는 것이 아니라 단순히 그 책임의 범위를 한정하는 것에 불과하므로, 상속재산이 부족하더라도 상속채무 전부에 대한 이행판결을 선고하되 주문에 상속재산 한도 집행이라는 취지를 명시하여야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '한정승인은 \"채무 면제\"가 아닌 \"책임 한정\". 청산 절차·우선순위 준수가 핵심.',
      },
    ],
    faq: [
      {
        question: '한정승인하면 세금도 면제되나요?',
        answer:
          '<strong>아니요. 책임이 상속재산 한도로 한정될 뿐 세금 자체는 사라지지 않는 영역입니다.</strong>',
      },
      {
        question: '국세가 일반 채권보다 항상 먼저인가요?',
        answer:
          '<strong>원칙적으로 국세 우선이지만 법정기일 이전 설정된 담보채권은 예외가 있는 영역입니다.</strong>',
      },
      {
        question: '한정승인해도 부동산 취득세는 부담하나요?',
        answer:
          '<strong>한정승인이라도 상속에 따른 취득세 납세의무가 있는 영역입니다.</strong>',
      },
      {
        question: '체납 세금이 너무 많으면 포기가 나을까요?',
        answer:
          '<strong>채무·세금이 재산보다 명백히 클 때는 포기가 안전한 사례 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '청산 순서를 어기면 어떻게 되나요?',
        answer:
          '<strong>한정승인 보호가 제한되어 상속인 고유재산까지 책임지게 될 위험이 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '한정승인 준비', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속포기 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
      { label: '특별한정승인', href: '/guide/inheritance/inheritance-special-limited-acceptance' },
      { label: '상속세 신고 기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
    ],
  },

  // ─── 6. inheritance-bequest-care-promise-broken-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-bequest-care-promise-broken-track',
    keyword: '부담부 유증 부양 의무 불이행',
    questionKeyword: '아버지께서 "장남이 부양하면 집을 준다"는 유언을 남겼는데, 받은 후 부양을 거부했어요. 다시 빼앗을 수 있나요?',
    ctaKeyword: '부담부 유증 해제 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '부담부 유증 부양 불이행 — 5단계 의무 위반 해제 3트랙 | 로앤가이드',
      description:
        '부담부 유증을 받고 부양 의무를 이행하지 않은 경우 해제·취소 절차가 막막하다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지께서 돌아가시기 전 \"장남이 어머니를 끝까지 부양하면 집을 준다\"는 유언을 남기셨어요. 장남은 유증을 받아 등기까지 마쳤는데 1년 만에 어머니를 요양원에 보내고 부양을 사실상 거부했습니다. 다른 형제들은 \"받은 집을 도로 가져와야 하는 것 아니냐\"고 묻고 있어요.\" 민법 제1088조 제1항은 \"부담 있는 유증을 받은 자가 그 부담의무를 이행하지 아니한 때에는 상속인 또는 유언집행자는 상당한 기간을 정하여 이행할 것을 최고하고 그 기간 내에 이행하지 아니한 때에는 법원에 유증의 취소를 청구할 수 있다\"고 정한 영역. ① 부담 내용 확정 ② 이행 최고 ③ 상당 기간 부여 ④ 가정법원 취소 청구 ⑤ 등기·재산 회복 5가지 트랙이 핵심. 단순한 도의적 약속이 아니라 \"유언으로 명시된 부담\"이어야 평가되는 흐름. 대응은 ① 자료 ② 최고 ③ 청구 ④ 판결 ⑤ 회복 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 부담부 유증 해제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 부담·최고·청구·판결·회복 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유언서·부담 내용 확정 (부양 의무 명시 여부)</strong></li>\n<li><strong>② 이행 최고 (서면·내용증명, 상당 기간)</strong></li>\n<li><strong>③ 기간 내 미이행 확인</strong></li>\n<li><strong>④ 가정법원에 유증 취소 청구 (민법 1088조)</strong></li>\n<li><strong>⑤ 등기 회복·상속재산 재분배</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유언에 명시된 부담이 있고 의무 불이행이 입증되어야 평가되는 영역. 도의적 약속·구두 약속은 별도 평가가 필요한 흐름. 최고 절차 누락 시 청구가 어려운 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 최고·청구·회복 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언서·부담 내용 정리 (즉시)</strong></li>\n<li><strong>2단계 — 이행 최고 (내용증명, 상당 기간 1~3개월)</strong></li>\n<li><strong>3단계 — 기간 내 미이행 시 자료 정리 (요양·부양 부재)</strong></li>\n<li><strong>4단계 — 가정법원 유증 취소 청구 (민법 1088조)</strong></li>\n<li><strong>5단계 — 등기 말소·상속재산 재분배</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">부담부 유증 해제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 유언·최고·불이행 갈래입니다.</strong></p>\n<ul>\n<li><strong>유언서 원본·검인 조서 (공정증서·자필증서 등)</strong></li>\n<li><strong>등기부등본 (유증 부동산)</strong></li>\n<li><strong>내용증명 발송 자료 (이행 최고)</strong></li>\n<li><strong>부양 의무 불이행 입증 자료 (요양원 입소·면회 기록)</strong></li>\n<li><strong>피부양자 진술서·녹취 (가능 시)</strong></li>\n<li><strong>피상속인 사망 사실증명서·가족관계증명서</strong></li>\n<li><strong>상속인·청구인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유언서에 \"부양을 조건으로 한다\"는 부담 문구가 명시되어 있어야 해제 청구가 평가되는 영역. 구두 약속·도의적 기대로는 어려운 흐름. 이행 최고 시 \"상당한 기간\"을 명시 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부담 명시 여부</strong> — 유언서 문구 해석.</li>\n<li><strong>이행 최고 적법성</strong> — 상당 기간·구체적 요구.</li>\n<li><strong>부양 의무 범위</strong> — 동거·요양·금전 분담 등.</li>\n<li><strong>일부 이행 vs 전부 불이행</strong> — 평가 차이.</li>\n<li><strong>제3자 권리</strong> — 유증 부동산 처분 시 회복 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부담부 유증의 법리와 부담 인수',
        summary:
          '대법원 2017다265884(대법원, 2022.01.27 선고) 영역에서 법원은 유언자가 일정한 부담을 정하여 유증한 경우 수증자는 그 부담을 인수하는 구조라고 평가하며, 부담의 내용과 범위는 유언서의 문언과 의사 해석을 통해 확정해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '부담부 유증은 유언서에 명시된 의무가 핵심. 의무 불이행 시 민법 1088조 해제 청구 검토 가능.',
      },
    ],
    faq: [
      {
        question: '구두로 \"부양해라\"고 하셨는데 부담이 되나요?',
        answer:
          '<strong>유언서에 부담이 명시되어야 평가되는 사례 흐름이 있는 영역입니다.</strong> 구두 약속은 별도 평가.',
      },
      {
        question: '이행 최고 없이 바로 청구할 수 있나요?',
        answer:
          '<strong>민법 1088조는 \"상당 기간 최고\"를 요건으로 정하고 있어 절차 누락 시 청구가 어려운 영역입니다.</strong>',
      },
      {
        question: '이미 등기가 넘어간 부동산도 회복되나요?',
        answer:
          '<strong>취소 판결 후 등기 회복 가능하지만 선의의 제3자에게 처분된 경우 제한될 수 있는 영역입니다.</strong>',
      },
      {
        question: '부양을 \"일부만\" 했다면 어떻게 되나요?',
        answer:
          '<strong>이행 정도·기간·생활 수준 등을 종합 평가하는 사례 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '청구 기한이 있나요?',
        answer:
          '<strong>최고 후 상당 기간 미이행이 확인되면 가정법원에 청구할 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '유류분 반환', href: '/guide/inheritance/inheritance-yuryubun-procedure' },
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '상속세 신고 기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속포기 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
    ],
  },

  // ─── 7. inheritance-deceased-rental-deposit-tenant-return-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-deceased-rental-deposit-tenant-return-track',
    keyword: '피상속인 임대 보증금 반환 책임',
    questionKeyword: '돌아가신 아버지가 임대 중이던 원룸 보증금 3,000만원을 임차인이 우리에게 돌려달라고 합니다.',
    ctaKeyword: '피상속인 임대 보증금 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '피상속인 임대 보증금 — 5단계 임대인 지위 승계 3트랙 | 로앤가이드',
      description:
        '돌아가신 분이 임대 중이던 보증금 반환 책임이 어디까지인지 막막하다면 5가지 승계·청산 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 아버지가 작은 원룸 한 채를 임대 중이셨어요. 갑작스러운 사망 후 임차인이 \"계약 만료라 보증금 3,000만원을 돌려받아야 한다\"며 본인을 포함한 자녀 3명에게 요구합니다. 부동산이 상속재산에 포함된다고 들었는데 그렇다면 보증금 채무도 함께 따라오는 건지, 한정승인 시엔 어떻게 처리되는지 정리가 안 됩니다.\" 주택임대차보호법·상가건물임대차보호법 제3조는 \"임차건물의 양수인은 임대인의 지위를 승계한 것으로 본다\"고 정한 영역이며, 상속도 양수에 포함된다는 판례 흐름. ① 임대인 지위 자동 승계 ② 보증금 반환 채무 (불가분채무) ③ 공동상속인 책임 범위 ④ 한정승인 시 청산 처리 ⑤ 자력 부족 시 부동산 매각 5가지 트랙이 핵심. 보증금 채무는 상속재산과 함께 따라가는 구조라 명의 이전과 분리되지 않는 영역입니다. 대응은 ① 계약 확인 ② 등기 ③ 협의 ④ 한정승인 ⑤ 정산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 피상속인 임대 보증금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·승계·책임·청산·정산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임대차계약서·잔여 기간 확인</strong></li>\n<li><strong>② 임대인 지위 승계 (주임법·상임법 3조 2항)</strong></li>\n<li><strong>③ 공동상속인 불가분채무 책임</strong></li>\n<li><strong>④ 한정승인 시 청산 절차에서 처리</strong></li>\n<li><strong>⑤ 자력 부족 시 부동산 매각·정산</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대차 보증금 반환 채무는 부동산과 함께 자동 승계되는 영역. 공동상속인은 \"불가분채무\"로 임차인에게 전액 책임이 평가되며 내부에서 법정상속분으로 구상하는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·승계·청산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임대차계약서·잔여 기간·보증금 확인 (즉시)</strong></li>\n<li><strong>2단계 — 부동산 등기 변경 (상속등기, 6개월 내 권장)</strong></li>\n<li><strong>3단계 — 공동상속인 협의 (책임 분담·반환 시기)</strong></li>\n<li><strong>4단계 — 한정승인 시 청산 절차에 보증금 채무 포함</strong></li>\n<li><strong>5단계 — 자력 부족 시 부동산 매각으로 보증금 지급</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대 보증금 승계 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·등기·정산 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·중개대상물 확인서</strong></li>\n<li><strong>임차인 대항요건 자료 (전입신고·확정일자)</strong></li>\n<li><strong>부동산 등기부등본 (상속등기 후)</strong></li>\n<li><strong>피상속인 사망 사실증명서</strong></li>\n<li><strong>공동상속인 협의서 (책임 분담·구상)</strong></li>\n<li><strong>한정승인 결정문 (해당 시)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보증금 반환 채무는 \"불가분채무\"라 임차인은 상속인 중 누구에게나 전액 청구 가능한 영역. 1인이 변제 시 다른 상속인에게 법정상속분으로 구상하는 흐름. 내부 정산을 사전에 합의해두는 것이 안전.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대인 지위 승계</strong> — 상속도 양수에 포함.</li>\n<li><strong>불가분채무 책임</strong> — 임차인은 누구에게나 전액 청구.</li>\n<li><strong>내부 구상권</strong> — 법정상속분 기준.</li>\n<li><strong>한정승인 청산</strong> — 보증금 채무도 청산 대상.</li>\n<li><strong>대상분할</strong> — 단독 상속받은 자가 책임 인수 가능한 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (1670-5599)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속으로 임대인 지위 승계와 불가분채무',
        summary:
          '대법원 2015다59801(대법원, 2021.01.28 선고) 영역에서 법원은 상속에 따라 임차건물의 소유권을 취득한 자도 상가건물 임대차보호법상 \"임차건물의 양수인\"에 해당하여 임대인 지위를 승계하고, 임대인 지위를 공동으로 승계한 공동임대인들의 임차보증금 반환채무는 성질상 불가분채무에 해당한다고 본 사례 흐름이 있습니다.',
        takeaway: '상속도 양수로 평가. 공동상속인은 불가분채무로 임차인에게 전액 책임, 내부에서 법정상속분으로 구상.',
      },
    ],
    faq: [
      {
        question: '한정승인하면 보증금 채무도 한정되나요?',
        answer:
          '<strong>한정승인 시 보증금 채무도 청산 절차에서 다른 채무와 함께 처리되는 영역입니다.</strong>',
      },
      {
        question: '임차인이 한 명에게만 전액 청구할 수 있나요?',
        answer:
          '<strong>불가분채무라 임차인은 상속인 중 누구에게나 전액 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '1명이 다 갚으면 다른 형제에게 받아낼 수 있나요?',
        answer:
          '<strong>법정상속분 기준으로 구상 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '집을 팔아야 보증금이 마련될 때는요?',
        answer:
          '<strong>매각 대금에서 보증금 우선 변제 후 잔여를 분할하는 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '임대차 계약을 새로 맺어야 하나요?',
        answer:
          '<strong>법상 자동 승계되므로 새 계약은 불필요하지만 임차인에게 승계 통지가 권장되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '상속재산 채무 정리', href: '/guide/inheritance/inheritance-debt-priority-payment' },
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '상속세 신고 기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속포기 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
    ],
  },
];
