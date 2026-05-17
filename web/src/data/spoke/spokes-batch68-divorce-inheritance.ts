import { SpokePage } from '../spoke-pages';

// batch68 divorce(4) + inheritance(3) — 7개 (2026-05-18)
//
// 고유 존재 이유:
// 1. divorce-cooling-period-new-partner-fault-shift-track — 협의이혼 숙려기간 중 다른 이성과의 교제가 유책으로 평가되는 입증 트랙.
// 2. divorce-visitation-refused-court-enforcement-fine-track — 면접교섭 거부 시 가정법원 이행명령·과태료 신청 단계 트랙(감치 이전).
// 3. divorce-affair-spouse-settled-third-party-additional-claim-track — 배우자와 위자료 합의했어도 상간자에게 별도 위자료 청구 가능 트랙.
// 4. divorce-national-pension-split-ratio-separate-decision-track — 국민연금 분할 비율을 협의·재판으로 별도 결정하는 트랙(50% 기본 예외).
// 5. inheritance-handwritten-will-defect-sain-jeungyeo-conversion-track — 자필유언이 요건 미비로 무효일 때 사인증여로 효력 전환되는 입증 트랙.
// 6. inheritance-substitute-heir-life-insurance-special-acquisition-track — 대습상속인이 받은 생명보험금의 특별수익 평가 시점 트랙.
// 7. inheritance-minor-special-limited-acceptance-after-majority-track — 미성년 상속인이 성년 도달 후 새로 특별한정승인 신청 트랙.

export const spokesBatch68DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce-cooling-period-new-partner-fault-shift-track ───
  {
    domain: 'divorce',
    slug: 'divorce-cooling-period-new-partner-fault-shift-track',
    keyword: '협의이혼 숙려기간 교제 유책',
    questionKeyword: '협의이혼 숙려기간 중에 남편이 다른 여성과 교제했어요. 유책 사유로 인정될까요?',
    ctaKeyword: '숙려기간 교제 유책 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '협의이혼 숙려기간 교제 유책 — 5단계 부정행위 입증 3트랙 | 로앤가이드',
      description:
        '협의이혼 숙려기간 중 다른 이성과의 교제가 유책 사유가 되는지 막막하다면 5가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"협의이혼을 신청해 1개월 숙려기간이 진행 중이었는데, 그 사이 남편이 새 여성과 교제를 시작한 사실을 알게 됐어요. 카톡·만남 사진이 남아 있고, 본인은 \"이미 이혼 절차 중이라 상관없다\"는 입장입니다. 협의이혼 의사는 변함없지만 위자료·재산분할에서 유책 평가가 가능한지 헷갈립니다.\" 민법 제836조의2는 협의이혼 의사확인 신청 후 1~3개월 \"숙려기간\"을 두고 그 안에서 혼인 회복 가능성을 고민하도록 정한 영역. 숙려기간이라도 혼인은 법적으로 존속하므로 ① 부정행위(840조 1호) 평가 가능 ② 위자료 가산 ③ 재산분할 가산 ④ 유책배우자의 이혼 청구 제한 ⑤ 자녀 양육·친권 평가 5가지 트랙에서 영향을 줄 수 있는 영역. 단순 \"이혼 합의했으니 끝\"이 아니라 \"확정될 때까지는 부부\"라는 점이 핵심. 대응은 ① 자료 ② 의사 철회 검토 ③ 위자료·재산분할 청구 ④ 상간자 청구 ⑤ 친권 평가 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 숙려기간 교제 유책 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·철회·청구·상간자·친권 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 교제 자료 수집</strong> — 카톡·통화·만남 사진 등.</li>\n<li><strong>② 협의이혼 의사 철회 검토</strong> — 가정법원 의사확인 전.</li>\n<li><strong>③ 재판이혼·위자료 청구 (840조 1호 부정행위)</strong></li>\n<li><strong>④ 상간자 별도 위자료 청구 검토</strong></li>\n<li><strong>⑤ 친권·양육권 평가에 반영</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 숙려기간은 \"혼인 회복을 위한 진지한 시간\"이라 그 안에서의 부정행위는 일반 부정행위와 동일하게 평가되는 흐름. 협의이혼 확정 전이라면 의사 철회 + 재판이혼 전환도 검토 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·철회·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 교제 증거 확보 (즉시)</strong> — 카톡·SNS·통화·사진.</li>\n<li><strong>2단계 — 협의이혼 의사 철회 의사 결정 (가정법원 확인 전)</strong></li>\n<li><strong>3단계 — 재판이혼·위자료 청구 (가정법원, 840조 1호)</strong></li>\n<li><strong>4단계 — 상간자에게 별도 위자료 청구 (제3자 손해배상)</strong></li>\n<li><strong>5단계 — 재산분할 청구 (이혼 후 2년 내)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">숙려기간 교제 유책 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 교제·소통·신분 갈래입니다.</strong></p>\n<ul>\n<li><strong>카카오톡·SNS DM 캡처 (날짜 보존)</strong></li>\n<li><strong>통화 내역·문자 메시지 기록</strong></li>\n<li><strong>만남 사진·동행 사진·CCTV (가능 시)</strong></li>\n<li><strong>협의이혼 의사확인 신청서 사본</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>위자료·재산분할 청구를 위한 재산 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 숙려기간 중 교제 사실 자료는 시점 입증이 핵심. 날짜·시간이 보이는 카톡·SNS 캡처가 가장 강한 자료. 위법 수집 자료(몰래 폰 들여다보기 등)는 증거능력이 제한될 수 있어 본인이 정상적으로 본 자료 위주로 모으는 흐름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>혼인 파탄 시점</strong> — 숙려기간 이전 이미 파탄되었는지.</li>\n<li><strong>부정행위 입증</strong> — 단순 만남 vs 부정한 관계.</li>\n<li><strong>협의이혼 의사 철회</strong> — 의사확인 전 철회 가능.</li>\n<li><strong>상간자 위자료</strong> — 배우자와 별개로 청구 가능.</li>\n<li><strong>친권·양육권</strong> — 평가에 반영될 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 협의이혼 숙려기간 중 부정행위와 유책 평가',
        summary:
          '부산가법 2018드단205427(부산가법, 2020.02.14 선고) 영역에서 법원은 협의이혼 의사확인 신청일 이후 숙려기간에 다른 이성과 교제한 점, 일반적으로 별거기간 또는 협의이혼 숙려기간은 혼인관계 유지에 관한 진지한 고민의 시간이자 혼인관계 회복을 위한 노력의 시간이기도 하므로 특별한 사정이 없는 한 숙려기간 중 다른 이성과 교제하는 것 역시 혼인관계의 유지를 방해하고 상대방의 신뢰를 훼손하는 부정행위에 해당한다고 평가한 사례 흐름이 있습니다.',
        takeaway: '숙려기간은 \"이미 끝난 관계\"가 아닌 회복 가능한 시간. 그 안에서의 교제도 부정행위로 평가되는 흐름.',
      },
    ],
    faq: [
      {
        question: '협의이혼 합의했으니 이혼한 거 아닌가요?',
        answer:
          '<strong>가정법원 확인·이혼 신고 전까지는 법적으로 부부인 영역입니다.</strong> 숙려기간 중 행위도 부부관계에서의 행위로 평가.',
      },
      {
        question: '협의이혼 의사를 철회할 수 있나요?',
        answer:
          '<strong>가정법원 의사확인 전 또는 확인 후라도 신고 전이면 철회 가능한 사례 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '카톡·SNS만 있고 만남 증거가 없어도 되나요?',
        answer:
          '<strong>대화 내용·빈도·친밀도로 부정행위 평가 가능한 사례 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '상간자에게 위자료를 별도로 청구 가능한가요?',
        answer:
          '<strong>배우자와 별개의 제3자 손해배상 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '위자료는 얼마 정도로 검토되나요?',
        answer:
          '<strong>사례에 따라 다르지만 1,500만~3,000만원 수준이 자주 보이는 사례 흐름이 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 2. divorce-visitation-refused-court-enforcement-fine-track ───
  {
    domain: 'divorce',
    slug: 'divorce-visitation-refused-court-enforcement-fine-track',
    keyword: '면접교섭 거부 이행명령 과태료',
    questionKeyword: '이혼 후 전 배우자가 매번 핑계를 대며 아이와 만나지 못하게 합니다. 어떻게 강제할 수 있나요?',
    ctaKeyword: '면접교섭 거부 이행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '면접교섭 거부 이행명령 — 5단계 가정법원 과태료 3트랙 | 로앤가이드',
      description:
        '이혼 후 면접교섭이 반복적으로 거부될 때 이행명령·과태료까지 가는 단계가 막막하다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 면접교섭은 \"격주 토요일 오전 10시~오후 6시\"로 정해졌어요. 그런데 전 배우자가 매번 \"아이가 학원 가야 한다\", \"감기 걸렸다\" 같은 이유로 반복 거부합니다. 4개월 동안 1번밖에 못 만났어요. 아이는 보고 싶고 본인은 무력해지는 상황입니다.\" 민법 제837조의2는 부모 일방과 자녀의 면접교섭권을 정한 영역이며, 가사소송법 제64조는 \"가정법원은 의무 이행을 명할 수 있다\"는 이행명령을, 제67조는 \"이행하지 아니한 자에게 1천만원 이하의 과태료를 부과할 수 있다\"고 정한 영역. ① 합의·심판 내용 확인 ② 거부 사실 기록 ③ 이행명령 신청 ④ 과태료 부과 ⑤ 양육자 변경 청구 5가지 트랙이 핵심. 감치(가사소송법 제68조)는 양육비에만 적용되고 면접교섭에는 부적용되지만 \"양육자 변경 사유\"로 이어질 수 있는 영역입니다. 대응은 ① 기록 ② 협의 ③ 이행명령 ④ 과태료 ⑤ 변경 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 면접교섭 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·협의·이행명령·과태료·변경 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 면접교섭 합의·심판서 확인</strong></li>\n<li><strong>② 거부 사실 시간·이유 기록</strong></li>\n<li><strong>③ 가정법원에 이행명령 신청 (가사소송법 64조)</strong></li>\n<li><strong>④ 과태료 부과 신청 (67조, 1천만원 이하)</strong></li>\n<li><strong>⑤ 양육자 변경 청구 검토 (837조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 감치는 면접교섭에 적용되지 않고 양육비에만 적용되는 영역. 면접교섭은 이행명령 → 과태료 → 양육자 변경 검토 순서가 일반적인 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·신청·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거부 사실 시점·이유·증거 기록 (즉시)</strong></li>\n<li><strong>2단계 — 가사조정·협의 시도 (1~2개월)</strong></li>\n<li><strong>3단계 — 가정법원 이행명령 신청 (가사소송법 64조)</strong></li>\n<li><strong>4단계 — 미이행 시 과태료 부과 신청 (67조, 1천만원 이하)</strong></li>\n<li><strong>5단계 — 반복 거부 시 양육자 변경 청구 (837조)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">면접교섭 거부 이행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의·거부·아이 갈래입니다.</strong></p>\n<ul>\n<li><strong>면접교섭 합의서 또는 심판서·조정조서</strong></li>\n<li><strong>거부 사실 기록 (날짜·이유·당시 메시지)</strong></li>\n<li><strong>카카오톡·문자 캡처 (거부 통보)</strong></li>\n<li><strong>아이 등하원·학원·진료 기록 (거부 사유 확인용)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>본인·자녀 신분증·기본증명서</strong></li>\n<li><strong>이행명령 신청서·과태료 부과 신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거부 1~2회로 바로 이행명령 가는 사례는 드문 영역. \"4개월 8회 중 1회만 성사\" 같이 패턴화된 자료가 강력. 가사조정 권유를 받아도 거부가 반복되는 사실관계가 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거부 정당성</strong> — 아이 건강·학업 vs 단순 거부.</li>\n<li><strong>이행명령 요건</strong> — 합의·심판서 존재 + 반복 거부.</li>\n<li><strong>과태료 부과</strong> — 1천만원 이하, 반복 시 누적 부과 가능.</li>\n<li><strong>아이 의사 반영</strong> — 13세 이상 의사 참작.</li>\n<li><strong>양육자 변경</strong> — 거부 패턴이 자녀 복리 침해 시 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 미지급과 이행명령·과태료',
        summary:
          '대법원 2023스637(대법원, 2024.10.08 선고) 영역에서 법원은 협의이혼 후 16년이 지난 시점에 청구된 과거 양육비 등에 관하여 자녀의 복리와 부모의 양육 분담의 형평을 종합 평가하며, 양육비 이행 의무 위반에 대해서는 이행명령과 과태료·감치 등 단계적 강제수단이 마련되어 있다고 본 사례 흐름이 있습니다.',
        takeaway: '면접교섭도 양육비처럼 이행명령·과태료 강제 수단이 있는 영역. 다만 감치는 양육비에만 한정.',
      },
    ],
    faq: [
      {
        question: '면접교섭을 거부하면 감치되나요?',
        answer:
          '<strong>감치는 양육비에만 적용되고 면접교섭은 이행명령·과태료까지 가는 영역입니다.</strong>',
      },
      {
        question: '거부 이유가 \"아이가 싫다고 한다\"면요?',
        answer:
          '<strong>일정 연령 이상 자녀 의사는 참작되지만 양육자가 의사를 만든 정황이 보이면 평가가 달라지는 영역입니다.</strong>',
      },
      {
        question: '과태료는 얼마인가요?',
        answer:
          '<strong>가사소송법 67조에 따라 1천만원 이하 부과 가능한 영역입니다.</strong> 반복 시 누적 가능.',
      },
      {
        question: '양육자를 바꿀 수 있나요?',
        answer:
          '<strong>면접교섭 반복 거부가 자녀 복리에 침해된다고 평가되면 변경 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '이행명령 신청은 어디에 하나요?',
        answer:
          '<strong>가정법원에 가사소송법 64조에 따라 신청 가능한 영역입니다.</strong> 변호사 없이도 신청 가능.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '면접교섭권', href: '/guide/divorce/divorce-visitation-denied-response' },
      { label: '양육자 변경', href: '/guide/divorce/divorce-custody-modification-after-divorce' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
      { label: '양육비 청구', href: '/guide/divorce/divorce-child-support-enforcement-guide' },
    ],
  },

  // ─── 3. divorce-affair-spouse-settled-third-party-additional-claim-track ───
  {
    domain: 'divorce',
    slug: 'divorce-affair-spouse-settled-third-party-additional-claim-track',
    keyword: '배우자 합의 후 상간자 별도 위자료',
    questionKeyword: '남편이 외도로 위자료 합의금을 줬는데, 상간녀에게도 따로 위자료를 청구할 수 있나요?',
    ctaKeyword: '상간자 별도 위자료 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상간자 별도 위자료 — 5단계 배우자 합의 후 청구 3트랙 | 로앤가이드',
      description:
        '배우자와 위자료 합의를 했어도 상간자에게 별도 청구가 가능한지 막막하다면 5가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"남편 외도를 알게 된 후 이혼 협의 과정에서 남편으로부터 위자료 합의금 3,000만원을 받기로 했어요. 그런데 상간녀가 사과 한마디도 없이 SNS에 행복한 사진을 올리고 있어 분합니다. \"남편에게 합의금 받았으니 상간녀에겐 청구 못 한다\"고들 하는데 정말 그런 건지 헷갈립니다.\" 민법 제750조는 \"고의·과실로 위법행위를 한 자의 손해배상\"을 정하며, 배우자의 외도에 가담한 제3자(상간자)도 별도의 위법행위 주체로 위자료 책임을 질 수 있는 영역. ① 배우자 위자료와 상간자 위자료는 별개 청구 ② 다만 동일 손해에 대한 \"중복 회복\" 금지 ③ 상간자가 부담할 범위 평가 ④ 청구권 시효 (안 날 3년·행위 10년) ⑤ 입증 자료 5가지 트랙이 핵심. 배우자 합의 후에도 \"상간자가 분담할 책임이 남아 있다\"는 흐름. 대응은 ① 합의 ② 자료 ③ 청구 ④ 입증 ⑤ 정산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 상간자 별도 위자료 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의·자료·청구·입증·정산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 배우자와 위자료 합의 내용 확인</strong></li>\n<li><strong>② 상간자 부정행위 자료 (별도)</strong></li>\n<li><strong>③ 상간자 상대 위자료 청구 (민법 750조)</strong></li>\n<li><strong>④ 시효 관리 (안 날 3년, 행위 10년)</strong></li>\n<li><strong>⑤ 중복 회복 한도·정산 평가</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배우자와 상간자는 \"공동 위법행위자\"로 평가되지만 각자의 책임 범위가 다른 영역. 배우자에게 받은 합의금이 있다고 해서 상간자 청구가 막히는 것이 아니라 \"중복 회복\" 한도 안에서 분담 평가되는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·청구·정산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배우자 위자료 합의 내용 정리 (즉시)</strong></li>\n<li><strong>2단계 — 상간자 부정행위 자료 수집 (카톡·만남·통화)</strong></li>\n<li><strong>3단계 — 상간자 상대 위자료 소장 제출 (지방법원)</strong></li>\n<li><strong>4단계 — 입증·답변 과정 (3~6개월)</strong></li>\n<li><strong>5단계 — 판결·이행 (중복 회복 한도 정산)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상간자 별도 위자료 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의·증거·신분 갈래입니다.</strong></p>\n<ul>\n<li><strong>배우자와의 위자료 합의서·이체 내역</strong></li>\n<li><strong>상간자와 배우자의 카톡·SNS 대화 자료</strong></li>\n<li><strong>만남 사진·통화·CCTV (가능 시)</strong></li>\n<li><strong>혼인관계증명서·이혼 진행 자료</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>본인이 입은 정신적 손해 입증 (진단서·치료기록)</strong></li>\n<li><strong>소장 작성 자료 (청구원인·상간자 인적사항)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상간자의 \"혼인 사실 인식\" 입증이 핵심. SNS·카톡에서 \"유부남인 거 안다\" 같은 표현이 나오면 강한 자료. 위법수집 자료보다 본인이 본 카톡 화면 캡처·녹취 등 정상 자료가 우선.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>혼인 인식</strong> — 상간자가 유부 사실을 알았는지.</li>\n<li><strong>중복 회복 한도</strong> — 배우자 합의금과의 관계.</li>\n<li><strong>책임 분담</strong> — 배우자와 상간자 간 분담 비율.</li>\n<li><strong>시효 관리</strong> — 안 날 3년, 행위 10년.</li>\n<li><strong>증거 적법성</strong> — 본인이 정상적으로 본 자료 우선.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 배우자 위자료 합의 후 상간자 별도 청구',
        summary:
          '대법원 2024므14938(대법원, 2025.09.11 선고) 영역에서 법원은 부정행위의 피해자가 배우자로부터 위자료 합의금을 지급받은 상태에서도 상간자에게 별도의 위자료 지급을 청구할 수 있다는 전제 아래, 법원이 \"청구의 기초가 되는 손해액\"을 원고의 청구금액보다 많은 금액으로 인정하더라도 청구금액을 초과하여 지급을 명하지 않는 한 처분권주의에 위배되지 않는다고 본 사례 흐름이 있습니다.',
        takeaway: '배우자 합의 후에도 상간자 별도 청구 가능. 다만 손해액·청구금액·중복 회복 한도가 정산 기준.',
      },
    ],
    faq: [
      {
        question: '남편에게 위자료 받았는데 상간녀에게도 청구 가능한가요?',
        answer:
          '<strong>각자의 위법행위 책임이 별개이므로 별도 청구 가능한 영역입니다.</strong> 다만 중복 회복은 제한.',
      },
      {
        question: '상간녀가 \"몰랐다\"고 하면요?',
        answer:
          '<strong>혼인 인식이 부정되면 책임이 제한될 수 있어 \"안 정황\" 자료가 핵심인 영역입니다.</strong>',
      },
      {
        question: '청구 가능 기한은 얼마인가요?',
        answer:
          '<strong>안 날부터 3년, 행위일부터 10년 시효가 적용되는 영역입니다.</strong>',
      },
      {
        question: '상간자에게 받을 수 있는 위자료 수준은요?',
        answer:
          '<strong>사례에 따라 다르지만 1,000만~3,000만원 수준이 자주 보이는 사례 흐름이 있는 영역입니다.</strong>',
      },
      {
        question: '이혼하지 않아도 상간자 청구가 가능한가요?',
        answer:
          '<strong>이혼 여부와 무관하게 부정행위 피해자로서 청구 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '상간자 위자료', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
      { label: '부정행위 증거', href: '/guide/divorce/divorce-affair-evidence-admissibility' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
    ],
  },

  // ─── 4. divorce-national-pension-split-ratio-separate-decision-track ───
  {
    domain: 'divorce',
    slug: 'divorce-national-pension-split-ratio-separate-decision-track',
    keyword: '국민연금 분할 비율 별도 결정',
    questionKeyword: '이혼하면 국민연금이 자동으로 반반 나뉘나요? 비율을 다르게 정할 수 있나요?',
    ctaKeyword: '국민연금 분할 비율 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '국민연금 분할 비율 — 5단계 협의·재판 별도 결정 3트랙 | 로앤가이드',
      description:
        '이혼 시 국민연금 분할 비율을 50% 기본 외 별도로 정하는 방법이 막막하다면 5가지 결정 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 25년차 황혼이혼을 진행 중입니다. 본인은 전업주부였고 남편은 대기업에서 근속해 국민연금을 매월 250만원 정도 받을 예정이에요. \"분할연금은 절반\"이라고 들었는데, 본인이 가사·육아 기여가 컸던 점을 반영해 비율을 달리할 수 있는지 막막합니다.\" 국민연금법 제64조는 이혼한 배우자에게 \"혼인 기간\"에 해당하는 분할연금 수급권을 인정하고 원칙적으로 50% 분할로 정한 영역. 다만 제64조의2는 \"협의 또는 재판으로 별도 비율을 정한 경우 그에 따른다\"고 규정한 영역입니다. ① 혼인 기간 산정 ② 50% 기본 분할 ③ 협의·재판 별도 결정 ④ 국민연금공단 신청 ⑤ 수급 시기 (양 당사자 65세 후) 5가지 트랙이 핵심. \"기본 50% + 협의·판결 시 변경 가능\"이 핵심이며 별도 결정을 미리 해두지 않으면 자동 50%로 굳어지는 흐름. 대응은 ① 가입 확인 ② 협의 ③ 재판 ④ 통보 ⑤ 신청 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 국민연금 분할 비율 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·협의·재판·통보·신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입 이력·혼인 기간 확인 (국민연금공단)</strong></li>\n<li><strong>② 기본 50% vs 별도 비율 협의</strong></li>\n<li><strong>③ 협의 불가 시 재판 결정 청구</strong></li>\n<li><strong>④ 분할 비율 통보 (이혼 효력 발생 후 3년 내)</strong></li>\n<li><strong>⑤ 수급 개시 (양 당사자 노령연금 수급 연령 도달)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 국민연금 분할은 \"기본 50% + 협의·재판으로 변경 가능\". 별도 결정이 없으면 자동 50%로 굳어지는 영역. 황혼이혼·전업주부 기여 등은 비율 협상 카드.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·협의·신청 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 국민연금공단 가입 이력·예상 분할연금 조회 (즉시)</strong></li>\n<li><strong>2단계 — 이혼 협의 시 분할 비율 조항 합의</strong></li>\n<li><strong>3단계 — 가정법원 재산분할 청구 시 연금 분할 별도 결정 청구</strong></li>\n<li><strong>4단계 — 이혼 효력 발생 후 국민연금공단 신고 (3년 내)</strong></li>\n<li><strong>5단계 — 수급 개시 (양 당사자 노령연금 수급 연령 도달 시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">국민연금 분할 비율 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·혼인·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>국민연금 가입증명서·납부이력서 (양 당사자)</strong></li>\n<li><strong>혼인관계증명서 (혼인 기간 산정용)</strong></li>\n<li><strong>이혼 협의서·판결문 (분할 비율 조항 포함)</strong></li>\n<li><strong>주민등록등본·기본증명서</strong></li>\n<li><strong>예상 분할연금 조회 결과</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n<li><strong>국민연금공단 분할연금 신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 비율 변경은 \"이혼 시점에 미리 정해야\" 효력. 이혼 후 뒤늦게 변경 청구는 어려운 영역. 협의이혼이라도 분할 비율 조항을 합의서에 명시 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>혼인 기간 산정</strong> — 별거 기간 포함 여부.</li>\n<li><strong>비율 협상</strong> — 50% 외 합의·재판 결정.</li>\n<li><strong>신고 기한</strong> — 이혼 효력 발생 후 3년 내.</li>\n<li><strong>수급 개시</strong> — 양 당사자 노령연금 수급 연령 도달.</li>\n<li><strong>공무원·사학연금</strong> — 별도 법령 적용 (국민연금과 절차 차이).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민연금공단 1355</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 국민연금 분할 비율 별도 결정 절차',
        summary:
          '대법원 2018두65088(대법원, 2019.06.13 선고) 영역에서 법원은 이혼 및 재산분할절차에서 국민연금법상 분할연금의 비율에 관하여 별도로 결정되었는지 여부를 판단할 때, 협의 또는 재판으로 분할 비율이 별도로 정해진 경우에는 그에 따른 분할연금 비율이 적용되어야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '국민연금 분할은 \"기본 50% + 협의·재판으로 별도 결정 가능\". 결정 시점에 미리 합의·청구 필요.',
      },
    ],
    faq: [
      {
        question: '이혼하면 국민연금이 자동으로 반반 나뉘나요?',
        answer:
          '<strong>원칙적으로 50% 분할이지만 협의·재판으로 변경 가능한 영역입니다.</strong>',
      },
      {
        question: '전업주부였는데 비율을 더 받을 수 있나요?',
        answer:
          '<strong>혼인 기여를 근거로 협의·재판에서 별도 비율 결정 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '언제부터 받을 수 있나요?',
        answer:
          '<strong>양 당사자가 모두 노령연금 수급 연령에 도달한 후 청구 시작인 영역입니다.</strong>',
      },
      {
        question: '신고 기한이 있나요?',
        answer:
          '<strong>이혼 효력 발생 후 3년 내 국민연금공단에 신고 필요한 영역입니다.</strong>',
      },
      {
        question: '공무원연금은 다른가요?',
        answer:
          '<strong>네. 공무원연금법·사학연금법 등이 별도 적용되어 절차·요건이 다른 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '연금 분할 방법', href: '/guide/divorce/divorce-pension-division-method' },
      { label: '연금 분할 시점', href: '/guide/divorce/divorce-pension-division-timeline' },
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
    ],
  },

  // ─── 5. inheritance-handwritten-will-defect-sain-jeungyeo-conversion-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-handwritten-will-defect-sain-jeungyeo-conversion-track',
    keyword: '자필유언 무효 사인증여 전환',
    questionKeyword: '아버지의 자필유언이 도장·날짜 누락으로 무효라고 합니다. 사인증여로 효력을 살릴 수 있나요?',
    ctaKeyword: '자필유언 사인증여 전환 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '자필유언 무효 사인증여 전환 — 5단계 의사합치 입증 3트랙 | 로앤가이드',
      description:
        '자필유언의 요건 미비로 무효 판정이 났을 때 사인증여로 효력을 살리는 절차가 막막하다면 5가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가시기 전 본인에게 \"이 집은 너에게 준다\"는 자필유언을 남기셨어요. 다른 형제들은 \"날짜와 도장이 빠져 자필증서 유언 요건이 안 된다\"며 무효라고 주장합니다. 본인은 \"부모님과 자식 사이의 약속이고 본인이 받기로 했으니 사인증여로 인정해 달라\"고 하고 싶지만 절차가 막막합니다.\" 민법 제1066조는 자필증서 유언의 요건으로 \"전문·연월일·주소·성명 자서 + 날인\"을 정한 영역이고, 하나라도 빠지면 유언으로서는 무효. 다만 민법 제562조의 \"사인증여\"는 증여자와 수증자 사이의 의사합치(청약·승낙)가 있으면 유효한 영역. ① 자필유언 요건 누락 확인 ② 사인증여 의사합치 입증 ③ 다른 상속인 인정·반대 평가 ④ 등기·이전 청구 ⑤ 유류분 충돌 검토 5가지 트랙이 핵심. \"유언으로는 무효지만 사인증여로 일부 효력\"이 평가되는 흐름이 있는 영역. 대응은 ① 형식 ② 의사합치 ③ 협의 ④ 청구 ⑤ 유류분 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자필유언 사인증여 전환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 형식·의사합치·협의·청구·유류분 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자필유언 요건 누락 확인</strong></li>\n<li><strong>② 사인증여 의사합치 입증 (청약·승낙)</strong></li>\n<li><strong>③ 다른 상속인 협의 또는 반대 평가</strong></li>\n<li><strong>④ 등기·이전 청구 (소유권이전등기 소송)</strong></li>\n<li><strong>⑤ 유류분 충돌 검토 (다른 상속인 청구 가능성)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유언으로는 무효라도 \"증여자와 수증자 사이 의사합치\"가 입증되면 사인증여로 효력 인정 가능한 영역. 다만 \"단독행위인 유언\"과 \"쌍방계약인 사인증여\"는 성격이 달라 일부 효력만 인정되는 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검토·협의·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자필유언 원본·형식 요건 검토 (즉시)</strong></li>\n<li><strong>2단계 — 사인증여 의사합치 자료 정리 (대화·녹취·증인)</strong></li>\n<li><strong>3단계 — 다른 상속인과 협의 시도 (1~2개월)</strong></li>\n<li><strong>4단계 — 협의 불가 시 소유권이전등기 소송 (지방법원)</strong></li>\n<li><strong>5단계 — 유류분 반환 청구 가능성 별도 검토 (1년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자필유언 사인증여 전환 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 유언·의사합치·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>자필유언 원본·검인 조서 (가정법원 검인)</strong></li>\n<li><strong>증여 의사합치 입증 자료 (대화·녹취·증인 진술)</strong></li>\n<li><strong>가족과의 카톡·메시지 (생전 약속 언급)</strong></li>\n<li><strong>대상 재산 등기부등본·평가서</strong></li>\n<li><strong>피상속인 사망 사실증명서·가족관계증명서</strong></li>\n<li><strong>다른 상속인 인적사항·연락 이력</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"내가 받기로 했다\"는 진술만으로는 부족하고 \"피상속인이 줬다는 의사 + 본인이 받기로 했다는 의사\"가 모두 보여야 평가되는 영역. 생전 녹취·카톡·증인이 결정적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유언 vs 사인증여 구별</strong> — 단독행위 vs 쌍방계약.</li>\n<li><strong>의사합치 입증</strong> — 청약·승낙의 존재.</li>\n<li><strong>요건 누락 항목</strong> — 날짜·도장·주소 등.</li>\n<li><strong>유류분 충돌</strong> — 다른 상속인의 반환 청구.</li>\n<li><strong>등기 이전 절차</strong> — 협의서 vs 판결문.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유언 요건 미비 시 사인증여 전환',
        summary:
          '대법원 2022다302237(대법원, 2023.09.27 선고) 영역에서 법원은 망인이 단독행위로서 유증을 하였으나 유언의 요건을 갖추지 못하여 효력이 없는 경우 이를 사인증여로서 효력을 인정하려면 증여자와 수증자 사이에 청약과 승낙에 의한 의사합치가 이루어져야 하고, 유언자인 망인이 자신의 상속인인 일부 자녀에게 한 의사표시 부분은 그 자녀와의 관계에서만 사인증여로서 효력을 인정할 수 있다고 평가한 사례 흐름이 있습니다.',
        takeaway: '유언 요건 미비 시 자동 사인증여 전환이 아닌 \"증여자·수증자 의사합치\" 입증 필수. 일부 상속인과의 관계에서만 인정 가능.',
      },
    ],
    faq: [
      {
        question: '자필유언에서 날짜만 빠져도 무효인가요?',
        answer:
          '<strong>민법 1066조 요건이 하나라도 빠지면 유언으로는 무효 평가가 일반적인 영역입니다.</strong>',
      },
      {
        question: '무효 유언도 사인증여로 살릴 수 있나요?',
        answer:
          '<strong>증여자·수증자 사이 의사합치가 입증되면 사인증여로 효력 인정될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '다른 상속인이 반대하면 어떻게 되나요?',
        answer:
          '<strong>의사합치는 본인과 망인 사이 관계에서 평가되므로 다른 상속인 반대는 별개 검토 영역입니다.</strong>',
      },
      {
        question: '유류분 청구가 같이 들어올 수 있나요?',
        answer:
          '<strong>네. 사인증여로 인정되어도 유류분 반환 청구 대상이 될 수 있는 영역입니다.</strong>',
      },
      {
        question: '구두 약속만 있으면 부족한가요?',
        answer:
          '<strong>구두만으로는 어려운 사례가 많아 녹취·증인·문서가 보강되어야 평가되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '자필유언 효력', href: '/guide/inheritance/inheritance-handwritten-will-witness-defect-invalidation' },
      { label: '공정증서 vs 자필유언', href: '/guide/inheritance/inheritance-notarized-vs-handwritten-will-validity' },
      { label: '유언 효력 분쟁', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '유류분 반환', href: '/guide/inheritance/inheritance-yuryubun-procedure' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
    ],
  },

  // ─── 6. inheritance-substitute-heir-life-insurance-special-acquisition-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-substitute-heir-life-insurance-special-acquisition-track',
    keyword: '대습상속 생명보험금 특별수익',
    questionKeyword: '아버지가 먼저 돌아가신 후 할아버지가 손주를 보험수익자로 한 생명보험금이 특별수익에 포함되나요?',
    ctaKeyword: '대습상속 보험금 특별수익 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '대습상속 생명보험금 — 5단계 특별수익 평가 시점 3트랙 | 로앤가이드',
      description:
        '대습상속인이 받은 생명보험금이 특별수익에 포함되는지·평가 시점이 막막하다면 5가지 분할 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 아버지가 할아버지보다 먼저 돌아가셨어요. 할아버지가 본인(손주)을 생명보험금 수익자로 지정해두셨고, 아버지 사망 후 본인이 보험금 2억원을 받았어요. 이후 할아버지가 돌아가시면서 상속재산 분할에서 \"손주가 보험금을 받았으니 특별수익으로 빼야 한다\"고 다른 상속인들이 주장합니다. 평가 시점이 보험계약 체결일인지 보험금 수령일인지 헷갈립니다.\" 민법 제1008조는 \"공동상속인 중 피상속인으로부터 재산의 증여 또는 유증을 받은 자가 있는 경우 상속분에서 공제\"하는 특별수익을 정한 영역. 대습상속인이 대습원인 발생 \"이전\"에 받은 증여는 특별수익에 해당하지 않는 영역이지만, 보험금처럼 \"증여 시점 평가\"가 문제되는 사례가 있습니다. ① 대습상속 구조 확인 ② 보험계약 체결·보험료 납부 시점 ③ 보험금 수령 시점 ④ 증여 시점 평가 ⑤ 분할 시 공제 5가지 트랙이 핵심. 판례는 \"피상속인이 피대습인을 피보험자, 대습상속인을 수익자로 지정한 경우 피대습인 사망 시점에 증여가 있었던 것으로 평가\"하는 흐름. 대응은 ① 계약 ② 시점 ③ 평가 ④ 협의 ⑤ 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 대습상속 보험금 특별수익 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·시점·평가·협의·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대습상속 구조 확인 (대습원인·대습인)</strong></li>\n<li><strong>② 보험계약 체결자·보험료 납부자 확인</strong></li>\n<li><strong>③ 보험금 수령 시점·금액 확인</strong></li>\n<li><strong>④ 증여 시점 평가 (피대습인 사망 시점 기준)</strong></li>\n<li><strong>⑤ 분할 협의·청구 시 공제 평가</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대습원인 발생 이전에 받은 증여는 특별수익이 아니지만, 보험은 \"피상속인이 보험료를 납부하다 피대습인 사망 시 대습인이 보험금을 수령\"하는 구조에서 증여 시점을 \"피대습인 사망 시점\"으로 보는 사례 흐름이 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·평가·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보험증권·보험료 납부 자료 확보 (즉시)</strong></li>\n<li><strong>2단계 — 피대습인·피상속인 사망 시점 정리</strong></li>\n<li><strong>3단계 — 증여 시점 평가 (피대습인 사망 시점 기준)</strong></li>\n<li><strong>4단계 — 상속재산 분할 협의 (특별수익 반영)</strong></li>\n<li><strong>5단계 — 협의 불가 시 가정법원 분할 심판 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대습상속 보험금 평가 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험·사망·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>생명보험 증권·약관 (계약자·피보험자·수익자 확인)</strong></li>\n<li><strong>보험료 납부 이력 (피상속인 명의 카드·계좌)</strong></li>\n<li><strong>피대습인(아버지) 사망 사실증명서</strong></li>\n<li><strong>피상속인(할아버지) 사망 사실증명서·가족관계증명서</strong></li>\n<li><strong>보험금 수령 내역 (입금 통장)</strong></li>\n<li><strong>상속재산 목록·평가서 (분할 협의용)</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험계약 체결일·피대습인 사망일·피상속인 사망일 세 시점 표시가 핵심. 보험료를 피상속인이 끝까지 납부했는지가 평가 결정 요인. 일부 기간만 납부한 경우 분담 평가 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대습원인 시점</strong> — 피대습인 사망 vs 이후 시점.</li>\n<li><strong>보험료 납부자</strong> — 피상속인 전액 vs 분담.</li>\n<li><strong>증여 시점 평가</strong> — 계약일·납부일·수령일 중.</li>\n<li><strong>특별수익 포함 여부</strong> — 대습 전 vs 후.</li>\n<li><strong>분할 협의 vs 심판</strong> — 협의 불가 시 가정법원.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대습상속인 생명보험금과 특별수익 평가 시점',
        summary:
          '대법원 2024스525(대법원, 2024.06.13 선고) 영역에서 법원은 피상속인이 피대습인을 피보험자로 하되 대습상속인을 보험수익자로 지정한 생명보험계약을 체결하고 보험계약자로서 보험료를 납부하다가 피대습인이 사망하여 대습상속인이 생명보험금을 수령한 경우, 피상속인의 증여가 있었던 시점을 대습상속인을 보험수익자로 지정하고 보험료를 납부한 무렵으로 평가할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '대습 전 받은 증여는 원칙적으로 특별수익 아니지만 보험금은 \"피상속인 보험료 납부 + 수익자 지정\" 시점이 평가 기준.',
      },
    ],
    faq: [
      {
        question: '대습상속인은 모든 사전 증여가 특별수익에서 빠지나요?',
        answer:
          '<strong>대습원인 발생 이전 증여는 원칙적으로 특별수익이 아닌 영역입니다.</strong> 다만 보험은 별도 평가.',
      },
      {
        question: '보험료를 피상속인이 모두 냈는지가 왜 중요한가요?',
        answer:
          '<strong>피상속인이 보험료를 납부한 부분이 \"증여\"로 평가되어 특별수익 산정의 기준이 되는 영역입니다.</strong>',
      },
      {
        question: '보험금 전액이 특별수익인가요?',
        answer:
          '<strong>전액이 아닌 \"피상속인 부담 보험료 상당\" 또는 사례에 따라 다른 기준이 적용되는 영역입니다.</strong>',
      },
      {
        question: '다른 상속인과 협의가 안 되면요?',
        answer:
          '<strong>가정법원에 상속재산 분할 심판 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '유류분 청구가 함께 들어올 수 있나요?',
        answer:
          '<strong>네. 특별수익 분쟁과 별도로 유류분 반환 청구가 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '특별수익 분쟁', href: '/guide/inheritance/inheritance-special-gift-contribution-claim' },
      { label: '생전증여 합산', href: '/guide/inheritance/inheritance-pre-death-gift-yuryubun-calculation' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '유류분 반환', href: '/guide/inheritance/inheritance-yuryubun-procedure' },
      { label: '대습상속 시나리오', href: '/guide/inheritance/inheritance-nephew-succession-scenario' },
    ],
  },

  // ─── 7. inheritance-minor-special-limited-acceptance-after-majority-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-minor-special-limited-acceptance-after-majority-track',
    keyword: '미성년 상속인 성년 후 특별한정승인',
    questionKeyword: '미성년일 때 아버지 빚을 모르고 상속받았는데, 성년이 된 후 특별한정승인이 가능할까요?',
    ctaKeyword: '미성년 특별한정승인 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '미성년 특별한정승인 — 5단계 성년 후 3개월 신청 3트랙 | 로앤가이드',
      description:
        '미성년 상속인이 성년에 도달한 후 새로 특별한정승인이 가능한지 막막하다면 5가지 신청 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 12살 때 아버지가 갑자기 돌아가셨어요. 어머니가 \"아버지 명의 재산이 좀 있다\"고 해 자녀 본인 명의로 단순승인이 됐는데, 본인이 19살이 된 지금 빚이 5억 더 있다는 사실이 드러났어요. 어머니가 그때 알았는지는 모르겠지만 본인은 \"미성년이었으니 몰랐던 게 당연하다\"는 입장입니다. 특별한정승인이 가능한지 헷갈립니다.\" 민법 제1019조 제3항은 \"상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 알지 못한 경우 그 사실을 안 날부터 3개월 내에 한정승인 가능\"한 특별한정승인을 정한 영역. 미성년 상속인의 경우 ① 법정대리인의 인식 vs 본인의 인식 ② 성년 도달 후 새로 신청 가능 여부 ③ 안 날 기산점 ④ 3개월 기한 ⑤ 청산 절차 5가지 트랙이 핵심. 2022년 민법 개정으로 \"미성년이 성년이 된 후 본인이 알게 된 시점부터 다시 3개월 기산\"하는 제도가 명시된 영역. 대응은 ① 확인 ② 기산 ③ 신고 ④ 청산 ⑤ 채권자 통지 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 미성년 특별한정승인 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·기산·신고·청산·통지 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단순승인 경위·법정대리인 인식 확인</strong></li>\n<li><strong>② 성년 도달일·초과사실 안 날 정리</strong></li>\n<li><strong>③ 안 날부터 3개월 내 특별한정승인 신고</strong></li>\n<li><strong>④ 청산 절차 (상속재산 한도 변제)</strong></li>\n<li><strong>⑤ 채권자 통지·공고 (2개월)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미성년 시절 법정대리인이 알았어도 본인이 성년이 된 후 새로 알게 됐다면 \"성년 후 안 날\"부터 3개월 다시 기산되는 흐름. 단 \"중대한 과실\"이 없어야 평가되는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·신고·청산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속재산·채무 전수 조회 (안심상속 원스톱)</strong></li>\n<li><strong>2단계 — 성년 도달일·초과사실 안 날 정리 (즉시)</strong></li>\n<li><strong>3단계 — 가정법원 특별한정승인 신고 (안 날부터 3개월 내)</strong></li>\n<li><strong>4단계 — 채권자 공고·통지 (2개월 이상)</strong></li>\n<li><strong>5단계 — 청산·변제 (상속재산 한도)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">미성년 특별한정승인 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망·재산·인식 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망 사실증명서·가족관계증명서</strong></li>\n<li><strong>본인 기본증명서 (성년 도달 확인)</strong></li>\n<li><strong>안심상속 원스톱 조회 결과 (정부24)</strong></li>\n<li><strong>채권 채무 자료 (대출 내역·납세증명서)</strong></li>\n<li><strong>본인이 \"안 날\" 입증 자료 (채권자 통지서 등)</strong></li>\n<li><strong>법정대리인(부모) 진술서 (당시 인식 여부)</strong></li>\n<li><strong>본인 신분증·인감증명서·재산 목록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"안 날\"은 단순한 추측이 아닌 \"채권자 통지서 도달일\" 같은 객관적 시점이 평가되는 영역. 통지서 봉투 우체국 소인·등기 추적 결과가 강력한 자료. 자료가 흩어지지 않게 한 폴더에 모으는 것 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법정대리인 인식</strong> — 미성년 당시 부모가 알았는지.</li>\n<li><strong>본인 인식 시점</strong> — 성년 후 안 날 기준.</li>\n<li><strong>중대한 과실</strong> — 조금만 알아봤어도 알 수 있던 경우 제외.</li>\n<li><strong>3개월 기산</strong> — 안 날 = 채권자 통지·소장 등 객관 시점.</li>\n<li><strong>이미 변제한 채무</strong> — 청산 절차에서 정산 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>정부24 안심상속 원스톱 (1588-2188)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 미성년 상속인의 성년 후 특별한정승인',
        summary:
          '대법원 2019다232918(대법원, 2020.11.19 선고) 영역에서 법원은 상속인이 미성년인 경우 민법 제1019조 제3항이나 그 소급 적용에 관한 규정에서 정한 \"상속채무 초과사실을 중대한 과실 없이 제1019조 제1항의 기간 내에 알지 못하였는지\"와 \"상속채무 초과사실을 안 날\"은 법정대리인의 인식을 기준으로 판단하여야 한다고 본 사례 흐름이 있습니다(이후 입법 보완으로 미성년이 성년 도달 후 본인이 안 날을 기준으로 다시 기산하는 제도가 명시되어 운영되는 영역).',
        takeaway: '미성년 상속인은 법정대리인 인식 + 성년 후 본인 인식 두 시점이 모두 평가되는 영역. 자료로 안 날 입증 필수.',
      },
    ],
    faq: [
      {
        question: '어렸을 때 단순승인됐는데 지금 한정승인 가능한가요?',
        answer:
          '<strong>성년 후 새로 안 날부터 3개월 내라면 특별한정승인 가능한 영역입니다.</strong>',
      },
      {
        question: '\"안 날\"은 어떻게 정해지나요?',
        answer:
          '<strong>채권자 통지서 도달일·소장 송달일 등 객관적 시점이 평가되는 영역입니다.</strong>',
      },
      {
        question: '부모가 알았으면 본인도 안 걸로 보나요?',
        answer:
          '<strong>구민법 시기에는 그렇게 평가되었으나 입법 보완 후 미성년·성년 인식 시점 별개 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '이미 변제한 채무는 돌려받나요?',
        answer:
          '<strong>청산 절차에서 정산 평가되는 영역으로 사례에 따라 달라지는 흐름입니다.</strong>',
      },
      {
        question: '신고는 어디에서 하나요?',
        answer:
          '<strong>피상속인 주소지 가정법원에 안 날부터 3개월 내 신고하는 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '특별한정승인 3개월', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '미성년 상속포기', href: '/guide/inheritance/inheritance-minor-child-renounce-procedure' },
      { label: '상속포기 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
      { label: '상속세 신고 기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
    ],
  },
];
