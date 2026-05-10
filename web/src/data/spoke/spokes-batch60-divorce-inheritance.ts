import { SpokePage } from '../spoke-pages';

// batch60 divorce 4 + inheritance 3 — 7개:
// 1. divorce / 일방이 자녀 데리고 나간 경우 임시 양육자 사전처분 (가사소송법 제62조)
// 2. divorce / 외도 상대방(제3자) 위자료 별도 청구 트랙 (배우자 합의 후 잔여 청구)
// 3. divorce / 이혼 후 양육비·면접교섭권 변경 신청 (사정변경)
// 4. divorce / 외국 거주 부부 한국 가정법원 관할 다툼 (국제사법 제2조)
// 5. inheritance / 미성년 상속인 후견인 선임 + 한정승인 신청 트랙
// 6. inheritance / 사망보험금 vs 상속재산 구분 (보험수익자 미지정·상속인 지정 분기)
// 7. inheritance / 상속세 6개월 + 상속포기 3개월 시효 분기 트래커
//
// 고유 존재 이유:
// 1. 이 페이지는 별거 또는 이혼소송 중 배우자 동의 없이 한쪽이 자녀를 데리고 나간 상황에서 가사소송법 제62조 사전처분(임시 양육자 지정·면접교섭)으로 본안 전 양육 상태를 안정화시키려는 청구인이 신청 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 이미 배우자와 위자료·재산분할 합의를 했지만 외도 상대방(상간자)에게 별도 위자료를 청구할 수 있는지 다투는 청구인이 2024므14938·2023므16678 판결 기준 잔여 청구 가능 영역을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 이혼 확정 후 재취업·재혼·자녀 진학 등 사정변경으로 양육비 증감 또는 면접교섭권 내용 변경을 신청하려는 부모가 가정법원 변경심판 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 부부 일방 또는 쌍방이 외국에 거주 중인 상황에서 한국 가정법원에 이혼 청구를 하려는 청구인이 국제사법 제2조 \'실질적 관련성\' 입증 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 미성년 자녀가 채무 초과 상속인이 된 상황에서 법정대리인(생존 부모)이 후견인 자격으로 한정승인 또는 상속포기를 신청해야 하는 보호자가 신고 기간 산정 트랙을 정리하도록 돕는 페이지다.
// 6. 이 페이지는 사망 시 받은 생명보험금이 상속재산에 포함되는지 다툼이 있는 상속인이 보험수익자 \'상속인\' 지정 vs 특정인 지정 vs 미지정 3가지 케이스별 분기 트랙을 정리하도록 돕는 페이지다.
// 7. 이 페이지는 사망 직후 상속세 6개월(상증세법 제67조)과 한정승인·상속포기 3개월(민법 제1019조) 두 시효를 동시에 관리해야 하는 상속인이 단계별 우선순위 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch60DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce / divorce-temporary-custody-pre-trial-order ───
  {
    domain: 'divorce',
    slug: 'divorce-temporary-custody-pre-trial-order',
    keyword: '임시 양육자 사전처분',
    questionKeyword: '배우자가 동의 없이 아이를 데리고 나갔어요. 본안 판결 전에 양육자를 정해 받을 수 있나요?',
    ctaKeyword: '임시 양육자 사전처분 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임시 양육자 사전처분 — 4단계 신청 트랙 가사소송 | 로앤가이드',
      description:
        '별거·이혼소송 중 배우자가 자녀를 일방적으로 데리고 나간 상황에서 가사소송법 제62조 사전처분(임시 양육자·면접교섭) 4단계 신청 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부부싸움 후 남편이 어느 날 갑자기 친정에 인사도 없이 아이를 데리고 자기 본가로 가버렸어요. 학교도 바뀌었고, 저는 아이를 못 본 지 한 달이 넘었습니다. 본안 이혼소송은 시간이 오래 걸린다는데, 그동안 아이는 어떻게 되나요?" 가사소송법 제62조는 가사사건의 본안 판결이 나기 전에도 가정법원이 직권 또는 당사자 신청에 따라 ① 임시 양육자 지정 ② 임시 면접교섭 ③ 자녀 인도 명령 ④ 양육비 임시 부담 등 사전처분을 할 수 있도록 정하고 있는 영역입니다. 핵심은 \'현재의 양육 상태\'를 보호 평가 — 2021므12320 판결은 별거 이후 재판상 이혼에 이르기까지 상당 기간 부모의 일방이 미성년 자녀를 평온하게 양육해 온 경우 현재 양육 상태 변경이 정당화되기 위한 요건과 고려사항을 명시했어요. 또한 외국인 배우자라도 한국어 소통능력 부족만으로 양육자 부적합 평가는 어렵다고 보았어요(2021므12320). 사전처분은 본안 결정과 별개의 신속 절차라 일방적 자녀 데려감 정황 포착 즉시 신청 트랙이 핵심이에요.</p>',
    sections: [
      {
        title: 'Q. 임시 양육자 사전처분 4단계 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황 포착·관할 확정·신청 사유·면접교섭 결합 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정황 포착 (시점·이동·돌봄 환경)</strong> — 자녀가 언제 누구와 어디로 갔는지, 학교·어린이집 변경 여부, 현재 돌봄 환경(친정·시댁·새 거주지). 시간선 정리.</li>\n<li><strong>② 관할 가정법원 확정</strong> — 본안(이혼·양육자 지정) 진행 중이면 본안 법원, 본안 미진행 시 상대방 주소지 가정법원. 사전처분은 본안 부수처분이라 본안과 동일 관할.</li>\n<li><strong>③ 신청 사유 — \'평온한 양육\' 변경 정당성</strong> — 일방적 데려감으로 자녀 학교·돌봄 환경 변경 + 종전 주된 양육자 단절 시 변경 정당성 검토 영역(2021므12320).</li>\n<li><strong>④ 면접교섭·양육비 임시 부담 결합</strong> — 임시 양육자 지정과 별도로 면접교섭 + 양육비 임시 부담 결합 신청 가능. 자녀 복리 우선 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사전처분은 \'본안 전 임시 처분\' 영역. 신속 결정 + 본안에서 재검토. 정황 포착 즉시 신청 + 면접교섭 결합 트랙이 자녀 단절 방지에 효과적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사전처분 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 수집 → 본안 확인 → 신청서 접수 → 심문 → 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 수집 (즉시)</strong> — 자녀 출생증명서·가족관계증명서·학교/어린이집 등록부·종전 양육 정황 자료(병원·학원·일상 사진).</li>\n<li><strong>2단계 — 본안 청구 또는 결합 (1~2주)</strong> — 본안(이혼·양육자 지정) 미진행 시 본안 + 사전처분 동시 접수 권장. 본안 진행 중이면 사전처분만 별도 신청.</li>\n<li><strong>3단계 — 사전처분 신청서 접수 (가사소송법 제62조)</strong> — 임시 양육자 지정·면접교섭·양육비 임시 부담·자녀 인도 결합 청구 가능 영역. 신속 절차.</li>\n<li><strong>4단계 — 심문·가사조사 (3~6주)</strong> — 가정법원 가사조사관 조사 + 자녀 의사 청취(13세 이상). 양 당사자 심문.</li>\n<li><strong>5단계 — 결정·집행 (전체 1~3개월)</strong> — 사전처분 결정 후 자녀 인도 가능 영역. 미이행 시 이행명령·과태료(가사소송법 제67조) 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임시 양육자 사전처분 4단계 신청 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀 자료 + 양육 정황 자료 + 신청 서류 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·자녀 기본증명서</strong> — 친권·양육 관계 입증.</li>\n<li><strong>주민등록등본 (자녀 포함)</strong> — 종전 동거·세대 구성 입증.</li>\n<li><strong>학교·어린이집·병원 자료</strong> — 종전 주된 양육자 정황(등하원·진료 동행).</li>\n<li><strong>일상 양육 자료</strong> — 가족 사진·메시지·식사·놀이 정황.</li>\n<li><strong>본인 소득·주거 자료</strong> — 양육 능력 입증.</li>\n<li><strong>상대방 일방 데려감 정황</strong> — 카톡·문자·증인 진술·CCTV.</li>\n<li><strong>사전처분 신청서</strong> — 가정법원 양식.</li>\n<li><strong>본안(이혼·양육자 지정) 청구서</strong> — 본안 미진행 시 동시 접수 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'주된 양육자\'가 본인이었다는 정황(등하원·병원·학원·식사 자료)이 핵심 영역. 일상 사진·일정표·메시지가 시간선상 결합 시 평가 효과적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"이미 평온하게 양육 중" 항변 반박</strong> — 일방적 데려감 후 단기간이면 \'평온한 양육 상태\' 인정 어려움 영역. 시점·기간·환경 변경 정도 평가(2021므12320).</li>\n<li><strong>"자녀가 따라오고 싶어 했다" 항변 반박</strong> — 13세 이상 자녀 의사 청취 영역이지만 일방 영향력·환경 변화 종합 평가. 단순 자녀 진술만으론 부족.</li>\n<li><strong>"외국인이라 한국어 부족" 항변 반박</strong> — 한국어 소통능력 부족만으로 양육자 부적합 평가 어려움(2021므12320).</li>\n<li><strong>"본인 소득 적다" 항변 반박</strong> — 양육비·복지지원·친정 도움 결합 시 양육 능력 인정 영역. 소득만으로 결정 안 됨.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 사전처분·양육자 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>여성긴급전화 1366</strong> — 자녀 동반 위기 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 미성년 자녀 양육자 결정 기준 + 평온 양육 변경 요건',
        summary:
          '대법원 2021므12320 사건(대법원, 2021.09.30 선고)에서 법원은 민법 제837조 제4항에 따라 미성년 자녀의 양육자를 정할 때 자녀의 성별·연령, 부모의 애정·양육 의사, 양육에 필요한 경제적 능력, 부모가 제공하려는 양육방식의 내용·합리성·적합성·조화 가능성, 부모와 자녀 사이의 친밀도, 자녀의 의사 등 모든 요소를 종합 고려해 자녀의 성장과 복지에 가장 도움이 되고 적합한 방향으로 판단해야 한다고 판시했습니다. 또한 별거 이후 재판상 이혼에 이르기까지 상당 기간 부모의 일방이 미성년 자녀를 평온하게 양육해 온 경우 현재의 양육 상태를 변경하여 상대방을 친권자·양육자로 지정하려면 그러한 변경이 자녀의 복지를 위해 필요하다는 점이 명확히 인정되어야 하고, 외국인이 한국어 소통능력 부족하다는 이유만으로 양육자로 부적합하다고 평가할 수 없다고 보았습니다.',
        takeaway: '임시 양육자 사전처분은 \'평온한 양육 상태\' + 자녀 복리 종합 평가 영역으로, 일방적 데려감 정황 포착 즉시 사전처분 신청하면 본안 전 양육 상태 안정화 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '사전처분 결정은 얼마나 걸리나요?',
        answer:
          '<strong>통상 1~3개월 수준이 자주 보이는 영역입니다.</strong> 본안과 별개 신속 절차. 가사조사관 조사 + 심문 결합.',
      },
      {
        question: '자녀가 13세 이상이면 본인 의사가 결정하나요?',
        answer:
          '<strong>의사 청취는 의무이지만 단독 결정은 아닙니다.</strong> 일방 영향력·환경 변화 종합 평가 영역(2021므12320). 자녀 복리 종합 판단.',
      },
      {
        question: '사전처분 결정 어겼을 때는 어떻게 되나요?',
        answer:
          '<strong>이행명령 + 과태료 결합 영역입니다(가사소송법 제67조).</strong> 미이행 반복 시 감치명령 결합 가능. 자녀 인도 강제집행 가능.',
      },
      {
        question: '본안 없이 사전처분만 신청 가능한가요?',
        answer:
          '<strong>본안 부수 처분이라 본안 결합 권장 영역입니다.</strong> 본안 미진행 시 본안(이혼·양육자 지정) + 사전처분 동시 접수 일반적.',
      },
      {
        question: '사전처분 결정 후 본안에서 다르게 결정될 수 있나요?',
        answer:
          '<strong>가능 영역입니다.</strong> 사전처분은 임시 처분이라 본안에서 재검토. 다만 평온 양육 상태 형성 시 본안에 영향 영역.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '13세 자녀 양육자 의사', href: '/guide/divorce/divorce-child-custody-teen-preference' },
      { label: '아빠 양육자 전략', href: '/guide/divorce/divorce-child-custody-father-strategy' },
      { label: '국제 양육권 분쟁', href: '/guide/divorce/divorce-international-child-custody-abduction' },
      { label: '면접교섭 거부 대응', href: '/guide/divorce/divorce-visitation-denied-response' },
      { label: '면접교섭 강제집행', href: '/guide/divorce/divorce-visitation-denied-enforcement-apply' },
    ],
  },

  // ─── 2. divorce / divorce-third-party-affair-residual-claim-track ───
  {
    domain: 'divorce',
    slug: 'divorce-third-party-affair-residual-claim-track',
    keyword: '배우자 합의 후 상간자 잔여 위자료',
    questionKeyword: '남편이랑은 위자료 합의해서 받았는데 상간녀에게도 따로 청구할 수 있나요?',
    ctaKeyword: '상간자 잔여 위자료 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '배우자 합의 후 상간자 잔여 위자료 — 4가지 분별 축 | 로앤가이드',
      description:
        '배우자와 위자료 합의를 했더라도 상간자에게 별도 위자료를 청구할 수 있는지 2024므14938·2023므16678 기준 4가지 분별 축을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼하면서 남편한테 위자료 3,000만원 받기로 합의했어요. 그런데 같이 일하던 상간녀는 따로 책임 안 져도 되나요? 상간녀 위자료를 또 청구하면 \'이중 청구\'라고 할까봐 걱정됩니다." 외도로 인한 위자료는 ① 배우자 책임 + ② 상간자 책임 두 갈래의 \'공동불법행위 부진정연대채무\' 영역입니다(2025므10716). 한쪽이 변제하면 다른 쪽 채무도 그 범위 내에서 소멸하는 구조라 \'배우자에게 받은 금액\' = \'상간자 책임에서도 변제된 금액\' 영역. 다만 ① 배우자 합의금에 위자료 외 재산분할·양육비가 섞여 있는지 ② 상간자 책임만의 추가 손해(예: 상간자 직접 행위로 받은 추가 정신적 고통) ③ 합의 시 \'상간자 청구는 별도 유보\' 명시 등에 따라 잔여 청구 가능 영역. 또한 2024므14938 판결은 부정행위 피해자가 배우자로부터 위자료 합의금을 받은 상태에서 상간자에게 별도 위자료 청구하는 구조에서 처분권주의 한계를 다뤘고, 2023므16678 판결은 부부 쌍방 책임이 대등해 위자료 청구가 기각된 경우 상간자에 대한 청구도 인정되기 어려운 영역임을 보여줘요.</p>',
    sections: [
      {
        title: 'Q. 상간자 잔여 위자료 4가지 분별 축',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 성격·합의금 구성·잔여 손해·쌍방 책임 4축으로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 합의 성격 — 위자료 vs 재산분할 vs 양육비</strong> — 배우자 합의금에 위자료만 포함됐는지, 재산분할·양육비 섞였는지 분별. 위자료 명목 일부만 변제 효과(2025므10716).</li>\n<li><strong>② 합의금 구성 명세</strong> — \'위자료 X만원, 재산분할 Y만원\' 분리 명시 시 위자료 부분만 부진정연대채무 변제 효과. 통합 명목이면 안분 다툼 영역.</li>\n<li><strong>③ 상간자 잔여 손해</strong> — 합의금이 전체 위자료 인정액에 미달 시 잔여 청구 가능 영역. 사례별 산정.</li>\n<li><strong>④ 쌍방 책임 대등 여부</strong> — 부부 쌍방 책임이 대등해 본안에서 위자료 기각된 경우 상간자 청구도 인정 어려움(2023므16678).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상간자 위자료는 부진정연대채무 영역. 배우자 합의금이 위자료 전부면 잔여 청구 어렵지만, 합의금 구성·잔여 손해·쌍방 책임 분별 시 잔여 청구 가능 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 잔여 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 분석 → 잔여 산정 → 청구 → 변론 → 판결 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배우자 합의서·이행 확인 (즉시)</strong> — 합의 명목·금액·이행 여부 확인. 위자료 명시 분리 여부 점검.</li>\n<li><strong>2단계 — 잔여 산정 (1~2주)</strong> — 통상 외도 위자료 평가액 - 합의금 = 잔여 손해. 위자료 안분 다툼 영역.</li>\n<li><strong>3단계 — 상간자 위자료 청구 (지방법원·민사)</strong> — 상간자 주소지 지방법원에 위자료 청구. 가정법원 아닌 일반 민사법원 영역.</li>\n<li><strong>4단계 — 변론·증거조사 (6~12개월)</strong> — 외도 정황 + 합의 분석 + 잔여 산정 변론. 상간자 항변(처분권주의·변제 효과) 검토.</li>\n<li><strong>5단계 — 판결·집행</strong> — 잔여 위자료 판결 시 강제집행. 사례별 산정 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상간자 잔여 위자료 4가지 분별 축을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 자료 + 외도 자료 + 잔여 산정 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>배우자 합의서·이행 자료</strong> — 합의 명목 분리 여부 + 입금 내역.</li>\n<li><strong>외도 정황 자료</strong> — 카톡·이체·동선·통신 + 시간선 자료.</li>\n<li><strong>상간자 신원 자료</strong> — 직장·주소·연락처(소장 송달용).</li>\n<li><strong>혼인기간·자녀 자료</strong> — 위자료 산정 참고.</li>\n<li><strong>본인 정신적 고통 자료</strong> — 진단서·상담기록·복용약.</li>\n<li><strong>상간자 위자료 청구서</strong> — 지방법원 양식.</li>\n<li><strong>잔여 산정 자료</strong> — 합의금 - 외도 위자료 평가 자료.</li>\n<li><strong>증인 진술서</strong> — 외도 목격·정황 증언.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배우자 합의 시 \'위자료 X, 재산분할 Y\'로 분리 명시 + \'상간자 청구는 별도 유보\' 문구 권장 영역. 명시 없으면 안분·변제 효과 다툼 어려움.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상간자 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"배우자한테 받은 금액으로 변제됐다" 항변 반박</strong> — 합의금이 위자료 외 재산분할·양육비 포함 시 안분 영역. 위자료 부분만 변제 효과.</li>\n<li><strong>"부진정연대채무라 이중 청구" 항변 반박</strong> — 위자료 평가액 - 변제액 = 잔여 손해 청구 가능 영역. 안분 다툼.</li>\n<li><strong>"쌍방 책임 대등" 항변 검토</strong> — 본안에서 부부 쌍방 책임 대등 판단 시 상간자 청구도 인정 어려움(2023므16678).</li>\n<li><strong>"부부공동생활 침해 고의 없음" 항변 반박</strong> — 혼인 사실 인지 + 부정행위 결합 시 고의·과실 인정 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 위자료·상간자 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>여성긴급전화 1366</strong> — 외도·정신적 고통 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부진정연대채무 + 합의금 안분 + 쌍방 책임 한계',
        summary:
          '대법원 2024므14938 사건(대법원, 2024.09.27 선고)에서 법원은 부정행위 피해자가 배우자로부터 위자료 합의금을 지급받은 상태에서 상간자에게 별도 위자료 지급을 청구하는 사건에서, 손해배상청구소송에서 법원이 청구의 기초가 되는 손해액을 원고 청구금액보다 많은 금액으로 인정했으나 청구금액을 초과하여 지급을 명하지 않은 경우 처분권주의에 위배되지 아니한다고 판시했습니다. 또한 대법원 2025므10716 판결은 부부 일방과 제3자가 부담하는 불법행위책임이 공동불법행위책임으로서 부진정연대채무 관계에 있고, 변제 등 채권 목적 달성 사유는 채무자 전원에 대해 절대적 효력을 발생한다고 보았습니다. 대법원 2023므16678 판결은 부부 쌍방의 책임 정도가 대등해 위자료 청구가 기각되는 경우 상대방 배우자에게 손해배상의무가 처음부터 성립하지 않으며, 부정행위에 가공한 제3자에게도 이혼을 원인으로 하는 손해배상책임이 인정되지 않는다고 보았습니다.',
        takeaway: '상간자 잔여 위자료는 합의금 명목 분리 + 외도 위자료 평가액 - 변제액 = 잔여 손해 분별 영역으로, 합의 시 위자료 명목 분리 명시 + \'상간자 청구 유보\' 문구가 핵심. 쌍방 책임 대등 시 청구 자체가 어려운 영역입니다.',
      },
    ],
    faq: [
      {
        question: '배우자한테 받은 위자료가 외도 위자료 평가액 전부면 청구 못 하나요?',
        answer:
          '<strong>부진정연대채무 변제 효과로 청구 어려운 영역입니다(2025므10716).</strong> 합의금이 위자료 평가액에 미달 시 잔여 청구 가능.',
      },
      {
        question: '합의서에 "위자료 외 일체 청구 포기" 적혀 있어요',
        answer:
          '<strong>배우자 청구 포기 영역이지만 상간자 청구는 별개 영역입니다.</strong> 다만 \'상간자 포함 일체 포기\' 명시 시 효력 다툼.',
      },
      {
        question: '상간자 위자료는 어디에 청구하나요?',
        answer:
          '<strong>지방법원 민사부 영역입니다.</strong> 가사사건 아닌 일반 손해배상청구. 상간자 주소지 관할.',
      },
      {
        question: '상간자 위자료 얼마 받을 수 있나요?',
        answer:
          '<strong>사례별 다르지만 1,000~3,000만원 수준이 검토되는 사례가 자주 보이는 영역입니다.</strong> 외도 정도·기간·혼인기간·정신적 고통 종합.',
      },
      {
        question: '쌍방 책임 대등이면 청구 못 하나요?',
        answer:
          '<strong>본안에서 쌍방 책임 대등 판단 시 상간자 청구도 인정 어려움 영역입니다(2023므16678).</strong> 본안 결과에 영향받는 구조.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '제3자 외도 청구', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: '쌍방 외도 제3자 청구', href: '/guide/divorce/divorce-both-fault-affair-third-party-claim' },
      { label: '외도 위자료 증거 5종', href: '/guide/divorce/divorce-affair-alimony-evidence-5items' },
      { label: '위자료 산정 표준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '외도 무고 항변', href: '/guide/divorce/divorce-alimony-false-claim-defense' },
    ],
  },

  // ─── 3. divorce / divorce-post-judgment-child-support-visitation-modify ───
  {
    domain: 'divorce',
    slug: 'divorce-post-judgment-child-support-visitation-modify',
    keyword: '이혼 후 양육비 면접교섭 변경',
    questionKeyword: '이혼한 지 5년 됐는데 아이 학년이 올라가면서 학원비·재혼·소득 변동이 있어요. 양육비랑 면접교섭 다시 정할 수 있나요?',
    ctaKeyword: '양육비·면접교섭 변경 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '이혼 후 양육비·면접교섭 변경 — 5단계 변경심판 트랙 | 로앤가이드',
      description:
        '이혼 확정 후 사정변경(자녀 진학·재혼·소득 변동·재취업)으로 양육비 증감 또는 면접교섭 내용 변경이 필요한 부모를 위한 변경심판 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼할 때 양육비 월 50만원으로 정했어요. 그런데 아이가 중학생이 되면서 학원비·교복비가 늘었고, 전 배우자도 이직해서 소득이 두 배로 올랐다고 들었습니다. 양육비를 올려 받을 수 있을까요? 면접교섭도 \'평일 1박\'으로 바뀌었으면 합니다." 양육비·면접교섭은 이혼 확정 시 정한 내용이 \'영구 고정\'이 아니라 \'사정변경\' 시 변경 가능 영역입니다(민법 제837조 제5항·제837조의2 제3항). 사정변경의 대표 사유는 ① 자녀 진학·연령 증가 ② 양육 부모 재혼·재취업 ③ 비양육 부모 소득·재산 변동 ④ 자녀 의사 변동 ⑤ 거주지 이전. 2023스637 판결은 양육비 분담 범위를 정할 때 이혼 시 재산분할·재산상 합의의 유무·내용·재산분할 상황과 양육비 부담의 관계 등을 고려해야 한다고 판시했어요. 또한 면접교섭은 자녀 복리 우선이라 자녀 학년·일정·관계 변동 시 변경 정당화 영역. 변경심판은 가정법원 마류 가사비송 사건이라 협의 결렬 시 별도 청구 트랙이 필요해요.</p>',
    sections: [
      {
        title: 'Q. 양육비·면접교섭 변경 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정변경·기준표·합의 시도·변경심판 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사정변경 인정 사유</strong> — 자녀 진학·연령·재혼·재취업·소득 변동·거주 이전 등 객관적 변동. 단순 \'더 받고 싶다\'는 부족 영역.</li>\n<li><strong>② 양육비 산정기준표 적용</strong> — 서울가정법원 양육비 산정기준표 활용. 부모 합산 소득 + 자녀 연령·인원 + 도시지역 가산.</li>\n<li><strong>③ 협의 시도 (먼저)</strong> — 가정법원 청구 전 상대방 협의 시도 권장. 합의 시 양육비변경 합의서·면접교섭 변경 합의 + 등록.</li>\n<li><strong>④ 변경심판 청구 (협의 결렬 시)</strong> — 가정법원 마류 가사비송. 양육비 변경 + 면접교섭 변경 결합 청구 가능 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육비·면접교섭은 \'사정변경\' 시 변경 가능 영역. 객관적 변동 자료 + 산정기준표 적용 + 협의 시도 → 결렬 시 가정법원 변경심판. 자녀 복리 우선.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 변경심판 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정변경 자료 → 협의 시도 → 청구 → 가사조사 → 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정변경 자료 정리 (즉시)</strong> — 자녀 학교·학원·진학 자료 + 부모 소득·재산 자료 + 거주 이전 자료. 변동 시점 명확화.</li>\n<li><strong>2단계 — 협의 시도 (1~2개월)</strong> — 상대방에게 변경 제안 + 산정기준표 근거 제시. 합의 시 변경 합의서·면접교섭 합의 등록.</li>\n<li><strong>3단계 — 변경심판 청구 (협의 결렬 시)</strong> — 가정법원에 양육비 변경 + 면접교섭 변경 심판 청구. 마류 가사비송 사건. 통상 6~12개월.</li>\n<li><strong>4단계 — 가사조사·심문</strong> — 가사조사관 면담 + 자녀 의사 청취(13세 이상) + 양 당사자 심문. 본인·상대방 소득 자료 사실조회.</li>\n<li><strong>5단계 — 결정·집행</strong> — 변경 결정 시 신규 양육비 적용. 미이행 시 이행명령·감치 결합 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비·면접교섭 변경 5단계 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정변경 자료 + 산정 자료 + 신청 서류 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>이혼 확정 판결문·합의서</strong> — 종전 양육비·면접교섭 내용.</li>\n<li><strong>자녀 학교·학원 자료</strong> — 진학·교육비 변동 입증.</li>\n<li><strong>본인 소득·재산 자료</strong> — 근로소득원천징수영수증·통장.</li>\n<li><strong>상대방 소득 자료 (사실조회 필요)</strong> — 직장·소득 변동 추적.</li>\n<li><strong>가족관계증명서·자녀 기본증명서</strong> — 양육 관계 입증.</li>\n<li><strong>재혼·재취업 자료 (해당 시)</strong> — 본인·상대방 변동 자료.</li>\n<li><strong>양육비 변경 심판청구서</strong> — 가정법원 양식.</li>\n<li><strong>면접교섭 변경 심판청구서</strong> — 결합 청구 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육비 변경은 \'서울가정법원 양육비 산정기준표\'가 사실상 정본 영역. 본인·상대방 합산 소득 입력 + 자녀 연령·인원 적용 후 변경 정도 산정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"이혼 시 합의했으니 그대로" 항변 반박</strong> — 양육비·면접교섭은 사정변경 시 변경 가능 영역(민법 제837조 제5항). 자녀 복리 우선.</li>\n<li><strong>"내 소득 안 늘었다" 항변 반박</strong> — 사실조회로 소득 객관 확인 영역. 카드 사용·부동산 취득 정황 결합.</li>\n<li><strong>"재산분할 시 양육비 미리 반영" 항변 검토</strong> — 재산분할·양육비 관계 고려 영역(2023스637). 합의 시 명시 여부 다툼.</li>\n<li><strong>"면접교섭 늘리면 본인 부담 늘어난다" 항변 반박</strong> — 면접교섭은 자녀 복리 우선 영역. 부모 부담은 부차적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 양육비·면접교섭 무료 법률 상담.</li>\n<li><strong>양육비이행관리원 1644-6621</strong> — 양육비 이행 상담·집행 지원.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 분담 범위 결정 시 재산분할·재산상 합의 고려',
        summary:
          '대법원 2023스637 사건(대법원, 2024.07.18 선고)에서 법원은 부모 중 어느 한쪽만이 자녀를 양육하게 된 경우 양육하는 사람이 상대방에게 현재와 장래의 양육비 중 적정 금액의 분담을 청구할 수 있고, 특별한 사정이 있는 경우를 제외하고는 과거의 양육비에 대해 상대방이 분담하는 것이 상당한 비용의 상환을 청구할 수 있다고 판시했습니다. 또한 양육비의 분담 범위를 정할 때에는 당사자들의 이혼 시 이루어진 재산분할 또는 재산상 합의의 유무와 내용, 그러한 재산분할 상황 등과 양육비 부담과의 관계 등을 고려할 필요가 있고, 이혼한 부부 사이에 성년이 된 자녀에 대한 과거 양육비의 분담을 결정하는 법원이 고려해야 할 사항을 명시했습니다.',
        takeaway: '양육비 변경은 사정변경 + 재산분할·합의 관계 + 자녀 연령·진학 종합 평가 영역으로, 산정기준표 + 사실조회로 본인·상대방 소득 객관화하면 변경심판 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '양육비 변경은 얼마나 자주 가능한가요?',
        answer:
          '<strong>사정변경 발생 시마다 가능 영역입니다.</strong> 자녀 진학·소득 변동·재혼 등 객관 변동. 잦은 변경은 본안 부담 영역.',
      },
      {
        question: '합의서로 변경 가능한가요?',
        answer:
          '<strong>가능 영역이지만 등록·집행권원화 권장입니다.</strong> 단순 합의서는 미이행 시 강제집행 어려움. 가정법원 조정·심판 활용.',
      },
      {
        question: '양육비 산정기준표는 어디서 보나요?',
        answer:
          '<strong>서울가정법원 홈페이지에 \'양육비 산정기준표\' 게재 영역입니다.</strong> 부모 합산 소득 + 자녀 연령·인원 입력 후 산정.',
      },
      {
        question: '면접교섭 시간 늘리고 싶은데 자녀가 거부해요',
        answer:
          '<strong>자녀 의사는 중요 고려요소이지만 단독 결정 아님 영역입니다.</strong> 자녀 복리·관계·부모 갈등 영향 종합 평가.',
      },
      {
        question: '재혼하면 양육비 줄어드나요?',
        answer:
          '<strong>본인 재혼은 양육비 영향 적은 영역이지만 비양육 부모 재혼 + 새 자녀 출생은 변경 사유 영역입니다.</strong> 사례별 다툼.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 변경 (이혼 후)', href: '/guide/divorce/divorce-custody-modification-after-divorce' },
      { label: '양육비 증액 청구', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '양육비 강제집행', href: '/guide/divorce/divorce-child-support-enforcement-guide' },
      { label: '면접교섭 거부 대응', href: '/guide/divorce/divorce-visitation-denied-response' },
      { label: '13세 자녀 의사 변경', href: '/guide/divorce/divorce-teenager-custody-own-choice' },
    ],
  },

  // ─── 4. divorce / divorce-foreign-residence-jurisdiction-substantive-relevance ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-residence-jurisdiction-substantive-relevance',
    keyword: '외국 거주 한국 가정법원 관할',
    questionKeyword: '부부 둘 다 외국에 살고 있는데 한국 가정법원에 이혼 청구할 수 있나요?',
    ctaKeyword: '외국 거주 관할 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '외국 거주 부부 한국 이혼 — 4가지 관할 입증 축 | 로앤가이드',
      description:
        '부부 일방·쌍방이 외국에 거주 중일 때 한국 가정법원 국제재판관할권 인정을 위한 국제사법 제2조 \'실질적 관련성\' 4가지 입증 축을 지금 확인하세요.',
    },
    intro:
      '<p>"남편과 저 모두 미국 영주권자고 LA에 거주합니다. 결혼 생활은 한국에서 시작했고 한국에 부동산도 있어요. 이혼하려는데 한국 가정법원에 청구 가능한가요? 미국 법원이 더 빠를까요?" 부부가 외국에 거주 중이거나 외국인 배우자가 결합된 가사사건은 \'국제재판관할권\' 다툼이 자주 발생하는 영역입니다. 국제사법 제2조 제1항은 \'당사자 또는 분쟁이 된 사안이 대한민국과 실질적 관련이 있는 경우 국제재판관할권을 가진다\'고 정해, 가사사건에도 적용 영역(2017므12552·2019므15425). \'실질적 관련\'은 ① 당사자의 국적·주소·거소 ② 이혼청구의 주요 원인이 된 사실관계 형성 장소 ③ 재산분할 대상 재산 소재지 ④ 피고 응소 정황 등 종합 평가 영역. 2017므12552 판결은 대한민국에 당사자들의 국적·주소가 없더라도 이혼청구의 주요 원인이 된 사실관계가 한국에서 형성됐고 재산분할 대상 한국 재산이 있는 경우 실질적 관련성을 인정할 수 있다고 봤어요. 또한 피고가 소장 부본을 송달받고 적극 응소한 사정도 긍정적 고려요소.</p>',
    sections: [
      {
        title: 'Q. 외국 거주 한국 관할 4가지 입증 축',
        content:
          '<p><strong style="color:#1e3a5f">A. 국적·주소, 사실관계 형성지, 재산 소재지, 응소 정황 4축으로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 당사자 국적·주소·거소</strong> — 한국 국적·주소·거소가 있으면 가장 강한 관할 인정 영역. 한국인 + 외국 영주권 결합도 고려.</li>\n<li><strong>② 이혼청구 주요 원인 사실관계 형성지</strong> — 외도·폭력·재산처분 등 주요 사유가 한국에서 발생했는지. 결혼 시작·자녀 출생·갈등 형성 장소 종합(2017므12552).</li>\n<li><strong>③ 재산분할 대상 재산 소재지</strong> — 분할 대상 부동산·예금·주식이 한국에 있는지. 한국 재산 있으면 \'분할의 실효성\' 측면 관할 강화.</li>\n<li><strong>④ 피고 응소 정황</strong> — 피고가 소장 부본 송달받고 적극 응소 시 관할 긍정적 고려(2019므15425). 반대로 피고가 외국 거주 + 송달 곤란 시 관할 부정적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 국제재판관할은 \'실질적 관련\' 종합 평가 영역. 한국 재산·사실관계·응소 결합 시 관할 인정 가능 영역. 외국 법원 경합 시 어느 쪽이 더 적정한지 비교 판단.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 외국 거주 이혼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 수집 → 관할 평가 → 청구 → 송달 → 변론 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 수집 (즉시)</strong> — 혼인관계증명서·가족관계증명서·국적·주소·거소 자료 + 한국 재산 자료 + 사실관계 발생 정황.</li>\n<li><strong>2단계 — 관할 평가 (변호사 자문)</strong> — 한국 vs 외국(거주국) 관할 비교. 본인 거주국 법원 vs 한국 가정법원 우선 비교.</li>\n<li><strong>3단계 — 한국 가정법원 청구 (본안 + 관할 다툼 가능 영역)</strong> — 서울가정법원 등 본안 접수. 관할 인정 시 본안 진행, 부정 시 각하 위험.</li>\n<li><strong>4단계 — 외국 송달 (3~6개월)</strong> — 헤이그송달협약 또는 외교 송달. 시간 길고 비용 발생 영역. 응소 시 관할 강화.</li>\n<li><strong>5단계 — 변론·재판 (전체 1~2년)</strong> — 본안 변론. 외국 거주라 화상 심문·서면 진행 가능 영역. 재산분할 시 한국 재산 위주 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국 거주 한국 가정법원 4가지 입증 축을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분 자료 + 거주 자료 + 재산 자료 + 사실관계 자료 네 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong> — 한국에서 결혼 등록 입증.</li>\n<li><strong>여권·체류 자료</strong> — 국적·영주권·비자 자료.</li>\n<li><strong>본인·상대방 외국 주소 자료</strong> — 거주 입증·송달 정보.</li>\n<li><strong>한국 재산 자료</strong> — 부동산 등기부·예금·주식·연금.</li>\n<li><strong>사실관계 정황 자료</strong> — 외도·폭력·재산처분 등 발생 장소·시점.</li>\n<li><strong>자녀 거주 자료 (해당 시)</strong> — 자녀 학교·국적·주소.</li>\n<li><strong>이혼·재산분할·위자료 청구서</strong> — 가정법원 양식.</li>\n<li><strong>외국 송달 신청서·번역본</strong> — 헤이그송달협약 또는 외교 송달.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한국 재산이 있으면 관할 인정 영역 크게 유리. 외국 재산만 있으면 외국 법원 관할 우세 영역. 변호사 자문으로 어느 법원이 본인에게 유리한지 사전 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"외국 거주라 한국 관할 없음" 항변 반박</strong> — 국적·주소 없어도 사실관계·재산·응소 결합 시 실질적 관련성 인정 영역(2017므12552).</li>\n<li><strong>"외국 법원이 적정" 항변 검토</strong> — 외국 법원 경합 시 어느 쪽이 더 적정한지 비교 영역. 한국 재산·증인·자녀 거주 결합 시 한국 우세.</li>\n<li><strong>"외국인이라 한국어 부족 양육자 부적합" 항변 반박</strong> — 한국어 소통능력 부족만으로 부적합 평가 어려움 영역(2021므12320).</li>\n<li><strong>"외국 송달 곤란" 위험</strong> — 송달 6개월 이상 소요 가능 영역. 헤이그송달협약 가입국이면 비교적 빠름. 비가입국은 외교 송달 + 더 긴 시간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 국제재판관할 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>재외동포청 02-748-7000</strong> — 재외국민 가족·이혼 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가사사건 국제재판관할 \'실질적 관련성\' 판단 기준',
        summary:
          '대법원 2017므12552 사건(대법원, 2021.02.04 선고)에서 법원은 국제사법 제2조 제1항의 \'실질적 관련\'은 대한민국 법원이 재판관할권을 행사하는 것을 정당화할 정도로 당사자 또는 분쟁이 된 사안과 관련성이 있는 것을 뜻하며, 그 판단은 당사자의 공평·재판의 적정·신속과 경제 등 국제재판관할 배분의 이념에 부합하는 합리적 원칙에 따라야 한다고 판시했습니다. 또한 재판상 이혼과 같은 혼인관계를 다투는 사건에서 대한민국에 당사자들의 국적·주소가 없더라도 이혼청구의 주요 원인이 된 사실관계가 대한민국에서 형성되었고 이혼과 함께 청구된 재산분할 사건에서 대한민국에 있는 재산이 재산분할 대상인지 첨예하게 다투어지는 경우 대한민국과 사안 간 실질적 관련성을 인정할 수 있고, 피고가 소장 부본을 적법하게 송달받고 적극 응소한 사정을 긍정적으로 고려할 수 있다고 보았습니다.',
        takeaway: '외국 거주 부부 한국 이혼은 국적·사실관계·재산·응소 4축 결합 평가 영역으로, 한국 재산 또는 한국 사실관계 정황이 있으면 실질적 관련성 인정 가능 영역. 외국 송달 시간 부담 + 변호사 자문 권장.',
      },
    ],
    faq: [
      {
        question: '둘 다 미국 영주권자인데 한국 관할 가능한가요?',
        answer:
          '<strong>한국 재산·사실관계·응소 결합 시 가능 영역입니다(2017므12552).</strong> 국적·주소 없어도 실질적 관련성 인정 가능.',
      },
      {
        question: '외국 송달은 얼마나 걸리나요?',
        answer:
          '<strong>3~6개월 수준이 자주 보이는 영역입니다.</strong> 헤이그송달협약 가입국은 비교적 빠름. 비가입국은 더 긴 시간.',
      },
      {
        question: '외국 법원 판결 한국에서 효력 있나요?',
        answer:
          '<strong>외국판결 승인·집행 절차 영역입니다(민사소송법 제217조).</strong> 송달 적법·공서양속 위반 부재 등 요건 충족 시 효력.',
      },
      {
        question: '한국 부동산만 분할받을 수 있나요?',
        answer:
          '<strong>한국 부동산 분할은 한국 법원이 적정 영역입니다.</strong> 외국 재산은 외국 법원 또는 별도 청구. 사례별 변호사 자문.',
      },
      {
        question: '외국인 배우자 한국에서 양육자 부적합인가요?',
        answer:
          '<strong>한국어 부족만으로 부적합 평가 어려움 영역입니다(2021므12320).</strong> 자녀 복리 종합 평가.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '국제재판관할 배우자', href: '/guide/divorce/divorce-international-jurisdiction-spouse' },
      { label: '외국 거주 배우자 절차', href: '/guide/divorce/divorce-overseas-spouse-process' },
      { label: '외국 배우자 관할', href: '/guide/divorce/divorce-foreign-spouse-international-jurisdiction' },
      { label: '국제 양육권 분쟁', href: '/guide/divorce/divorce-international-child-custody-abduction' },
      { label: '국제결혼 절차', href: '/guide/divorce/divorce-international-marriage-procedure' },
    ],
  },

  // ─── 5. inheritance / inheritance-minor-heir-guardian-limited-acceptance-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-minor-heir-guardian-limited-acceptance-track',
    keyword: '미성년 상속인 후견인 한정승인',
    questionKeyword: '아이 아빠가 빚을 남기고 돌아가셨어요. 미성년인 우리 아이도 빚 떠안나요? 한정승인은 어떻게 하나요?',
    ctaKeyword: '미성년 후견인 한정승인 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '미성년 상속인 후견인 한정승인 — 5단계 신고 트랙 | 로앤가이드',
      description:
        '미성년 자녀가 채무 초과 상속인이 된 상황에서 법정대리인(생존 부모)이 후견인 자격으로 한정승인·상속포기 신고를 진행하는 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 사고로 갑자기 돌아가셨어요. 알고 보니 사업 빚이 1억 넘게 있더라고요. 저는 상속포기를 하면 되는데, 우리 아이는 아직 7살이에요. 아이 이름으로도 한정승인이나 상속포기를 해야 하나요? 어떻게 하는지 모르겠습니다." 미성년 상속인은 의사능력이 불완전해 본인이 직접 상속 결정할 수 없는 영역이라 \'법정대리인\'(생존 부모 또는 후견인)이 대신 한정승인 또는 상속포기를 신고해야 하는 영역입니다(민법 제5조·제1019조). 핵심은 ① 신고 기간 산정 — 법정대리인이 \'상속개시 있음을 안 날\'부터 3개월(미성년자 본인 인식이 아니라 법정대리인 기준, 2019다232918) ② 생존 부모도 상속포기 시 미성년 자녀가 후순위 상속인이 되어 추가 신고 필요 영역(2003브11) ③ 부모가 모두 상속포기·결격이면 미성년후견인 선임 후 신고 ④ 특별한정승인 — 채무초과 사실을 중과실 없이 3개월 내 알지 못한 경우 안 날부터 3개월(민법 제1019조 제3항). 신고 누락 시 단순승인 의제 위험이라 시점 산정이 핵심.</p>',
    sections: [
      {
        title: 'Q. 미성년 후견인 한정승인 4단계 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 법정대리인 확정·기간 산정·신고 형태·후견인 선임 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 법정대리인 확정</strong> — 미성년자 친권자(통상 생존 부모) 확인. 이혼·사망·결격 등으로 친권자 부재 시 미성년후견인 선임 필요 영역.</li>\n<li><strong>② 기간 산정 (3개월 기준)</strong> — \'상속개시 있음을 안 날\'부터 3개월. 미성년자 본인 인식이 아니라 법정대리인 인식 기준(2019다232918). 시점 객관 자료 핵심.</li>\n<li><strong>③ 신고 형태 선택</strong> — 한정승인(채무 〈 재산 가능성) vs 상속포기(채무 분명 초과). 법정대리인이 미성년자 대리 신고. 가정법원 \'상속한정승인심판청구\' 또는 \'상속포기심판청구\'.</li>\n<li><strong>④ 후견인 선임 (필요 시)</strong> — 친권자 부재·결격·이해상반(생존 부모도 포기 시) 시 가정법원 미성년후견인 선임 + 후견인 신고(2003브11).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미성년 상속인은 법정대리인 인식 기준 3개월. 생존 부모 포기 시 자녀 후순위 상속인 → 추가 신고 필요. 신고 누락 시 단순승인 의제 위험 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 후견인 한정승인 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산조사 → 신고 형태 결정 → 후견인 선임 → 신고 접수 → 청산 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·채무 조사 (즉시)</strong> — 정부24 안심상속 원스톱서비스(부동산·금융·세금·연금 한꺼번에 조회) + 한국신용정보원 채무 조회. 미성년자 명의로도 신청.</li>\n<li><strong>2단계 — 신고 형태 결정 (1~2주)</strong> — 채무 〈 재산 가능성이면 한정승인, 채무 분명 초과면 상속포기. 법정대리인 자문.</li>\n<li><strong>3단계 — 후견인 선임 (필요 시, 1~2개월)</strong> — 친권자 부재·결격·이해상반 시 미성년후견인 선임 청구(가정법원). 친족 또는 변호사·법무사 후견인.</li>\n<li><strong>4단계 — 한정승인·상속포기 신고 접수 (3개월 내)</strong> — 가정법원에 미성년자 명의 신고서 + 법정대리인·후견인 서명. 인용 결정 후 효력.</li>\n<li><strong>5단계 — 청산 또는 종료 (한정승인 시)</strong> — 한정승인 후 신문공고·채권자 신고·환가·비율 변제 5단계 청산. 상속포기 시 후순위 상속인 다시 신고 필요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">미성년 후견인 한정승인 5단계 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망 자료 + 미성년자 자료 + 재산·채무 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·기본증명서·가족관계증명서</strong> — 사망 시점·상속인 확정.</li>\n<li><strong>미성년자 기본증명서·가족관계증명서</strong> — 친권자·친자관계 입증.</li>\n<li><strong>법정대리인(생존 부모) 신분증·가족관계증명서</strong> — 대리권 입증.</li>\n<li><strong>안심상속 원스톱서비스 결과지</strong> — 부동산·금융·세금·연금 일괄 조회.</li>\n<li><strong>채무 자료</strong> — 한국신용정보원·카드사·통신사·보증채무.</li>\n<li><strong>한정승인·상속포기 심판청구서 (미성년자 명의)</strong> — 가정법원 양식.</li>\n<li><strong>재산목록</strong> — 정확히 작성 (한정승인 시 단순승인 의제 회피).</li>\n<li><strong>미성년후견인 선임청구서 (필요 시)</strong> — 친권자 부재·결격 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 생존 부모도 본인 + 자녀 모두 신고 권장 영역. 부모만 포기하고 자녀 신고 누락 시 자녀가 후순위 상속인으로 빚 부담 위험. 같은 시점 동시 신고가 안전.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생 위기와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"미성년자 본인 인식 기준 아님" — 법정대리인 기준</strong> — 신고 기간은 법정대리인이 안 날부터 3개월(2019다232918). 미성년자 본인 인식 무관.</li>\n<li><strong>"부모만 포기 + 자녀 미신고" 위험</strong> — 생존 부모 포기 시 자녀가 후순위 상속인 → 추가 신고 필요(2003브11). 누락 시 단순승인 의제.</li>\n<li><strong>"이해상반" 다툼 (법정대리인 vs 미성년자)</strong> — 법정대리인 본인이 상속받고 미성년자만 포기 등 이해상반 시 미성년후견인 선임 권장 영역.</li>\n<li><strong>"특별한정승인 시점" 다툼</strong> — 채무초과 사실을 중과실 없이 3개월 내 못 안 경우 안 날부터 3개월(민법 제1019조 제3항). 시점 입증 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 한정승인·상속포기 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>정부24 안심상속 원스톱서비스</strong> — 재산·채무 일괄 조회.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 미성년 상속인 신고 기간 + 후견인 신고 기산점',
        summary:
          '대법원 2019다232918 사건(대법원, 2020.11.19 선고)에서 법원은 상속인이 미성년인 경우 민법 제1019조 제3항(특별한정승인)에서 정한 \'상속채무 초과사실을 중대한 과실 없이 제1019조 제1항의 기간 내에 알지 못하였는지\'와 \'상속채무 초과사실을 안 날\'은 미성년자 본인이 아니라 법정대리인의 인식을 기준으로 판단해야 한다고 판시했습니다. 또한 대구지방법원 2003브11 결정은 상속 제1순위자가 상속을 포기하여 그의 미성년 직계비속이 상속 제2순위자로서 상속인이 될 경우, 상속 제1순위자가 그의 직계비속의 법정대리인으로서 그의 직계비속의 상속을 포기하거나 한정승인할 수 있는 신고기간은 특별한 사정이 없는 한 자기의 직계비속이 상속 제2순위자로서 상속인이 되었음을 안 날부터 기산된다고 보았습니다.',
        takeaway: '미성년 상속인 한정승인은 법정대리인 인식 기준 3개월 + 후순위 상속인 추가 신고 영역으로, 생존 부모와 자녀 동시 신고 + 안심상속 원스톱 + 정확한 재산목록이 단순승인 의제 회피 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '아이가 아직 어린데 본인이 직접 신고해야 하나요?',
        answer:
          '<strong>법정대리인이 대신 신고 영역입니다(민법 제5조).</strong> 미성년자 명의 + 법정대리인 서명. 친권자(생존 부모)가 통상 법정대리인.',
      },
      {
        question: '부모만 상속포기하면 아이는 안전한가요?',
        answer:
          '<strong>아닙니다 — 자녀가 후순위 상속인으로 빚 부담 위험 영역입니다(2003브11).</strong> 부모 + 자녀 동시 신고 권장.',
      },
      {
        question: '아이 이름으로 빚 추심이 들어왔어요',
        answer:
          '<strong>특별한정승인 검토 영역입니다(민법 제1019조 제3항).</strong> 법정대리인이 채무초과 사실을 중과실 없이 모른 경우 안 날부터 3개월. 사실 입증.',
      },
      {
        question: '생존 부모가 후견인 자격 자동 인정되나요?',
        answer:
          '<strong>친권자 자동 인정 영역입니다.</strong> 다만 친권자 부재·결격·이해상반 시 미성년후견인 별도 선임. 가정법원 청구.',
      },
      {
        question: '미성년자도 안심상속 신청 가능한가요?',
        answer:
          '<strong>법정대리인이 대신 신청 가능 영역입니다.</strong> 정부24 사이트 + 동주민센터 방문. 부동산·금융·세금·연금 일괄 조회.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '미성년 상속포기 절차', href: '/guide/inheritance/inheritance-minor-child-renounce-procedure' },
      { label: '특별한정승인 시점', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
      { label: '한정승인 vs 상속포기', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
      { label: '후순위 상속 빚 이전', href: '/guide/inheritance/inheritance-renunciation-junior-heirs-debt-transfer' },
      { label: '한정승인 청산 5단계', href: '/guide/inheritance/inheritance-limited-acceptance-liquidation-5steps' },
    ],
  },

  // ─── 6. inheritance / inheritance-life-insurance-vs-estate-distinction ───
  {
    domain: 'inheritance',
    slug: 'inheritance-life-insurance-vs-estate-distinction',
    keyword: '사망보험금 상속재산 구분 수익자',
    questionKeyword: '돌아가신 아버지 생명보험금이 나왔는데 이게 상속재산인지 제 거인지 모르겠어요. 동생들이 절반 달라고 합니다',
    ctaKeyword: '사망보험금 분기 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '사망보험금 vs 상속재산 — 4가지 케이스 분기 가이드 | 로앤가이드',
      description:
        '사망 시 받은 생명보험금이 상속재산에 포함되는지 보험수익자 특정인 지정·상속인 지정·미지정 3가지 케이스별 분기 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 생명보험금 1억이 제 통장으로 들어왔어요. 보험증권에 \'수익자: 큰아들\'로 적혀 있어서 그런 줄 알았습니다. 그런데 동생들이 \'그것도 상속재산이니 똑같이 나눠야 한다\'고 합니다. 정말 그래야 하나요?" 사망 시 받은 생명보험금이 상속재산에 포함되는지는 ① 보험수익자 특정인 지정 ② 보험수익자 \'상속인\' 지정 ③ 보험수익자 미지정·피상속인 지정 3가지 케이스로 분기되는 영역입니다. 핵심 원칙 — 보험금청구권은 보험계약의 효력으로 발생하는 \'수익자 고유 권리\'라 원칙적으로 상속재산이 아님 영역. 그러나 ① 수익자 \'상속인\' 지정 시 상속인이 \'상속분 비율\'로 보험금을 \'고유 권리\'로 받음 ② 미지정·피상속인 지정 시 보험금이 상속재산이 되어 분할 대상 ③ 유류분 산정 시에는 \'증여\' 평가 가능 영역(2020다247428). 또한 2024스525 판결은 피상속인이 피대습인 피보험자 + 대습상속인 수익자 지정 시 증여 시점을 \'수익자 지정 시점\'으로 보는 등 시점 판단 기준을 명확히 했어요. 케이스별 분기가 핵심.</p>',
    sections: [
      {
        title: 'Q. 사망보험금 4가지 케이스 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 수익자 지정 형태에 따라 4가지 케이스로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 특정인 지정 (예: 큰아들)</strong> — 보험금은 수익자 고유 권리 영역. 상속재산 아님 → 분할 대상 아님. 다만 유류분·특별수익 평가 가능 영역.</li>\n<li><strong>② \'상속인\' 지정 (포괄)</strong> — 상속인이 상속분 비율로 보험금 받음 + 고유 권리 영역. 상속재산 아니지만 상속인 간 분배.</li>\n<li><strong>③ 미지정·피상속인 지정</strong> — 보험금이 \'피상속인 재산\'으로 평가 → 상속재산 포함 → 분할 대상 영역. 통상 사례.</li>\n<li><strong>④ 유류분·특별수익 평가</strong> — 특정 상속인을 수익자로 지정한 경우 다른 상속인의 유류분 침해 시 \'증여\' 평가 영역(2020다247428). 사례별 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보험금은 \'수익자 지정 형태\'가 분기 핵심 영역. 보험증권 + 보험계약자·피보험자·수익자 확인 첫 단계. 유류분 침해 시 별도 다툼 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 분기 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험증권 확인 → 케이스 분기 → 협의 또는 다툼 → 청구 → 종료 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보험증권 확인 (즉시)</strong> — 보험계약자·피보험자·수익자 명시 확인. 보험사에 사본 신청. 변경 이력도 확인.</li>\n<li><strong>2단계 — 케이스 분기 (1~2주)</strong> — 특정인 지정·상속인 지정·미지정 3분기 → 상속재산 여부 확정 → 분할·유류분 평가.</li>\n<li><strong>3단계 — 협의 또는 다툼</strong> — 상속인 간 합의 시 합의서. 결렬 시 가정법원(상속재산분할심판) 또는 지방법원(유류분반환).</li>\n<li><strong>4단계 — 청구 (필요 시)</strong> — 유류분반환청구는 안 날 1년·증여 10년 시효(민법 제1117조). 상속재산분할은 가정법원.</li>\n<li><strong>5단계 — 결정·종료</strong> — 사례별 결정. 수익자 지정 시 통상 수익자 고유 권리 + 유류분 침해 부분만 반환.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사망보험금 4가지 케이스 분기 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험 자료 + 상속 자료 + 다툼 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>보험증권 (사본)</strong> — 보험계약자·피보험자·수익자 명시.</li>\n<li><strong>보험금 지급명세서</strong> — 지급 시점·금액·세금 처리.</li>\n<li><strong>피상속인 사망진단서·기본증명서</strong> — 사망 시점·보험금 발생 시점.</li>\n<li><strong>가족관계증명서·상속인 확정 자료</strong> — 상속분 비율 산정.</li>\n<li><strong>피상속인 재산·증여 자료</strong> — 유류분 산정 참고.</li>\n<li><strong>보험료 납부 내역</strong> — 보험계약자가 누구였는지(2024스525 시점 판단).</li>\n<li><strong>유류분반환청구서·상속재산분할심판청구서 (필요 시)</strong> — 다툼 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험증권에 \'수익자\' 명시 형태가 분기 핵심. 변경 이력도 확인 영역(피상속인이 사망 직전 변경 시 유류분 침해 다툼 강화). 보험사에 변경 이력 발급 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 다른 상속인 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"보험금도 상속재산이니 똑같이" 항변 반박</strong> — 수익자 특정인 지정 시 고유 권리 영역. 상속재산 아님(원칙). 다만 유류분·특별수익 평가 가능.</li>\n<li><strong>"수익자 변경 시점이 의심" 다툼</strong> — 피상속인이 사망 직전 변경 시 유류분 침해 의도 평가 영역(2020다247428).</li>\n<li><strong>"보험계약자 본인 vs 피상속인" 다툼</strong> — 보험료 납부자가 누구인지에 따라 증여 평가 영역(2024스525). 보험료 납부 내역 핵심.</li>\n<li><strong>"유류분 침해 입증" 다툼</strong> — 유류분권리자가 보험금 + 다른 상속재산 종합 평가 후 부족분 청구 영역(민법 제1112조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 보험금·상속 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁·수익자 변경 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험금 유류분 평가 + 수익자 지정 시점 증여 평가',
        summary:
          '대법원 2020다247428 사건(대법원, 2022.08.11 선고)에서 법원은 피상속인이 공동상속인이 아닌 제3자를 보험수익자로 지정한 생명보험계약을 체결하거나 중간에 제3자로 보험수익자를 변경하여 제3자가 생명보험금을 수령하는 경우, 이를 피상속인의 재산처분행위로 평가해 유류분 산정 시 증여로 평가할 수 있다고 판시했습니다. 또한 대법원 2024스525 판결은 피상속인이 피대습인을 피보험자로 하되 대습상속인을 보험수익자로 지정한 생명보험계약을 체결하고 보험계약자로서 보험료를 납부하다가 피대습인이 사망하여 대습상속인이 생명보험금을 수령한 경우 피상속인의 증여가 있었던 시점을 \'대습상속인을 보험수익자로 지정한 시점\'으로 판단하는 등 시점 판단 기준을 명확히 했습니다. 즉 보험금은 원칙적으로 수익자 고유 권리이지만 유류분·특별수익 평가 시에는 \'증여\'로 평가 가능한 영역입니다.',
        takeaway: '사망보험금은 수익자 지정 형태(특정인·상속인·미지정) 분기 + 유류분·특별수익 평가 시 \'증여\' 평가 영역으로, 보험증권 + 변경 이력 + 보험료 납부 내역이 핵심. 시점 판단이 다툼의 핵심 영역입니다.',
      },
    ],
    faq: [
      {
        question: '수익자가 저로 지정돼 있으면 동생들에게 안 줘도 되나요?',
        answer:
          '<strong>원칙적으로 수익자 고유 권리 영역입니다.</strong> 다만 유류분 침해 시 부족분만 반환 영역(2020다247428).',
      },
      {
        question: '수익자가 "상속인"으로만 적혀 있으면 어떻게 분배하나요?',
        answer:
          '<strong>상속분 비율로 상속인이 고유 권리로 받는 영역입니다.</strong> 상속재산 아니지만 상속인 간 분배 + 유류분 평가는 별도.',
      },
      {
        question: '수익자가 미지정이면요?',
        answer:
          '<strong>보험금이 \'피상속인 재산\'으로 평가 → 상속재산 포함 영역입니다.</strong> 분할 대상. 통상 사례.',
      },
      {
        question: '아버지가 돌아가시기 직전에 수익자를 저로 변경했어요',
        answer:
          '<strong>수익자 변경 시점이 유류분·특별수익 평가 시점 영역입니다(2024스525).</strong> 변경 시점 + 이유에 따라 다툼 가능.',
      },
      {
        question: '유류분반환청구는 언제까지 가능한가요?',
        answer:
          '<strong>안 날 1년·증여 10년 시효 영역입니다(민법 제1117조).</strong> 유류분권리자가 침해 사실 안 날부터 1년.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '생명보험 상속재산 미포함', href: '/guide/inheritance/inheritance-life-insurance-not-included' },
      { label: '보험금 수익자 분리', href: '/guide/inheritance/inheritance-life-insurance-beneficiary-separate' },
      { label: '수익자 변경 분쟁', href: '/guide/inheritance/inheritance-life-insurance-beneficiary-change-dispute' },
      { label: '유류분 청구 안내', href: '/guide/inheritance/inheritance-yuryubun-claim-calculation' },
      { label: '생전 증여 유류분 산정', href: '/guide/inheritance/inheritance-pre-death-gift-yuryubun-calculation' },
    ],
  },

  // ─── 7. inheritance / inheritance-tax-vs-renunciation-deadline-tracker ───
  {
    domain: 'inheritance',
    slug: 'inheritance-tax-vs-renunciation-deadline-tracker',
    keyword: '상속세 6개월 상속포기 3개월 시효',
    questionKeyword: '아버지 돌아가시고 상속세 6개월·상속포기 3개월 두 시효가 동시에 돌아가요. 어떤 순서로 챙겨야 하나요?',
    ctaKeyword: '상속 시효 분기 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '상속세 6개월 + 상속포기 3개월 — 시효 분기 5단계 트래커 | 로앤가이드',
      description:
        '사망 직후 상속세 6개월(상증세법 제67조) + 상속포기·한정승인 3개월(민법 제1019조) 두 시효를 동시 관리하기 위한 5단계 트래커를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 돌아가신 지 한 달 됐어요. 한정승인이나 상속포기는 3개월 안에 해야 한다는데, 상속세는 6개월 안에 신고하라고 들었습니다. 어떤 걸 먼저 해야 하고, 두 시효가 어떻게 맞물리나요? 머리가 복잡합니다." 사망 직후 상속인은 두 가지 별개 시효를 동시 관리해야 하는 영역입니다 — ① 한정승인·상속포기 시효 3개월(민법 제1019조 제1항 — \'상속개시 있음을 안 날\'부터 3개월) ② 상속세 신고·납부 시효 6개월(상증세법 제67조 — \'상속개시일이 속하는 달의 말일\'부터 6개월). 두 시효는 별개 절차(가정법원 vs 세무서)이지만 ① 한정승인·포기 결정이 상속세 납세의무자 범위에 영향 ② 단순승인 후 채무 확인 시 특별한정승인 별도 트랙(민법 제1019조 제3항) ③ 상속세 미신고 시 가산세 부담 ④ 안심상속 원스톱서비스로 재산·채무 일괄 조회 후 분기 결정 등 결합 영역. 2022스597 판결은 구체적 상속분 산정 기준이 \'상속개시 시\'임을 확인했고, 2001스38 판결은 상속포기 신고 기간 경과 시 부적법함을 보여줘요. 시효 분기 트래커가 핵심.</p>',
    sections: [
      {
        title: 'Q. 상속 시효 분기 4단계 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 두 시효 식별·재산 조사·신고 형태 결정·세무 신고 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 두 시효 식별</strong> — 한정승인·포기 3개월(민법 제1019조 제1항) vs 상속세 6개월(상증세법 제67조). 시작점·종료점 다름. 시점 객관 자료 핵심.</li>\n<li><strong>② 재산·채무 조사 (1개월 내)</strong> — 정부24 안심상속 원스톱서비스로 부동산·금융·세금·연금 일괄 조회. 한국신용정보원 채무 조회 결합. 신고 형태 결정 자료.</li>\n<li><strong>③ 신고 형태 결정 (3개월 내)</strong> — 채무 〈 재산이면 단순승인(아무것도 안 함), 채무 〉 재산이면 상속포기, 불확실하면 한정승인. 3개월 내 결정 영역.</li>\n<li><strong>④ 상속세 신고 (6개월 내)</strong> — 상증세법 제67조 — 상속개시일 속하는 달 말일부터 6개월. 단순승인·한정승인 시 신고 의무 영역. 상속포기 시 후순위 상속인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시효는 별개 절차지만 결합 영역. 1~2개월 내 재산 조사 → 3개월 내 한정승인·포기 결정 → 6개월 내 상속세 신고 순서 권장. 동시 관리 트래커 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 시효 분기 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망 직후 → 재산 조사 → 신고 형태 결정 → 한정승인·포기 → 상속세 신고 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망 직후 신고·자료 (즉시~1주)</strong> — 사망신고·기본증명서 발급. 안심상속 원스톱서비스 신청.</li>\n<li><strong>2단계 — 재산·채무 조사 (1개월 내)</strong> — 부동산 등기부·예금·주식·연금·세금·채무 일괄 조회. 한국신용정보원 채무 조회.</li>\n<li><strong>3단계 — 신고 형태 결정·신고 (3개월 내)</strong> — 단순승인(부작위)·한정승인·상속포기 중 결정. 가정법원 심판청구 접수.</li>\n<li><strong>4단계 — 상속세 신고 (6개월 내)</strong> — 단순승인·한정승인 시 세무서 상속세 신고. 상속포기 시 후순위 상속인 신고. 가산세 회피.</li>\n<li><strong>5단계 — 청산·등기 (한정승인 시 추가 6~12개월)</strong> — 한정승인 시 신문공고·채권자 신고·환가·비율 변제. 단순승인 시 등기·예금 분배.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속 시효 분기 5단계 트래커를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망 자료 + 재산 자료 + 신고 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·기본증명서·가족관계증명서</strong> — 시효 시작점 입증.</li>\n<li><strong>안심상속 원스톱서비스 결과지</strong> — 부동산·금융·세금·연금 일괄.</li>\n<li><strong>한국신용정보원 신용정보조회 결과</strong> — 채무·보증채무.</li>\n<li><strong>상속인 가족관계증명서·신분증</strong> — 상속인 확정.</li>\n<li><strong>한정승인·상속포기 심판청구서 (3개월 내)</strong> — 가정법원 양식.</li>\n<li><strong>상속세 신고서 (6개월 내)</strong> — 세무서 양식. 변호사·세무사 자문 권장.</li>\n<li><strong>재산목록 (정확히)</strong> — 한정승인 시 단순승인 의제 회피.</li>\n<li><strong>상속세 분납·물납 신청서 (필요 시)</strong> — 일시 납부 어려운 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'안심상속 원스톱서비스\'가 시간 절약 핵심 영역. 사망 직후 신청하면 1개월 내 부동산·금융·세금·연금 결과 받음. 채무는 별도 한국신용정보원 조회.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생 위기와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"3개월 시효 도과 위험" — 신중하게 결정</strong> — 미신고 시 단순승인 의제(민법 제1026조 제2호). 채무 발견 후 특별한정승인 트랙 검토.</li>\n<li><strong>"상속세 미신고 가산세" 위험</strong> — 무신고 가산세(20%) + 납부불성실 가산세 영역. 6개월 내 신고 권장.</li>\n<li><strong>"단순승인 후 숨은 채무" 위험</strong> — 단순승인 후 채무초과 사실 안 경우 특별한정승인(민법 제1019조 제3항) 안 날부터 3개월.</li>\n<li><strong>"분납·물납" 검토</strong> — 상속세 일시 납부 어려울 시 분납(2회 분할) 또는 물납(부동산 등) 신청 영역. 사례별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 한정승인·상속세 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>국세청 126</strong> — 상속세 신고·분납 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속포기 시효 도과 부적법 + 구체적 상속분 산정 기준',
        summary:
          '대법원 2001스38 사건(대법원, 2003.08.11 선고)에서 법원은 1998. 5. 27. 이후 개정 민법 시행 전까지 상속개시가 있음을 안 상속인이 상속개시 있음을 안 날로부터 3개월이 지나서 한 상속포기 신고는 부적법하다고 보아, 한정승인·상속포기 3개월 시효의 엄격성을 확인했습니다. 또한 대법원 2022스597 판결은 구체적 상속분의 의미와 그 산정의 기준 시기가 \'상속개시 시\'이며, 법원이 상속재산 분할방법을 후견적 재량으로 결정할 수 있되 그 한계가 있다고 판시했습니다. 상속개시 당시 상속재산을 구성하던 재산이 그 후 처분되어 상속재산을 구성하지 않게 된 경우 분할의 대상이 될 수 있는지 여부에 대해 원칙적 소극으로 판단해, 시점·재산 범위 산정의 기준을 명확히 했습니다.',
        takeaway: '상속 시효 분기는 한정승인·포기 3개월 + 상속세 6개월 별개 절차이지만 결합 관리 영역으로, 안심상속 원스톱 + 신고 형태 결정 + 세무 신고 5단계 트래커가 가산세·시효 도과 회피 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '한정승인 3개월 시효 도과하면 어떻게 되나요?',
        answer:
          '<strong>단순승인 의제 영역입니다(민법 제1026조 제2호).</strong> 모든 빚 무한 부담. 다만 채무초과 사실을 중과실 없이 못 안 경우 특별한정승인(제1019조 제3항).',
      },
      {
        question: '상속세 신고 안 하면 어떻게 되나요?',
        answer:
          '<strong>무신고 가산세(20%) + 납부불성실 가산세 영역입니다.</strong> 단순승인·한정승인 시 신고 의무. 6개월 내 신고 권장.',
      },
      {
        question: '두 시효 중 어떤 걸 먼저 챙겨야 하나요?',
        answer:
          '<strong>3개월 시효(한정승인·포기) 먼저 영역입니다.</strong> 신고 형태 결정 후 6개월 내 상속세 신고. 안심상속 원스톱 우선.',
      },
      {
        question: '상속포기하면 상속세 신고 안 해도 되나요?',
        answer:
          '<strong>본인은 안 해도 되지만 후순위 상속인이 신고 영역입니다.</strong> 후순위 상속인도 3개월·6개월 시효 적용 영역.',
      },
      {
        question: '상속세 일시 납부 어려우면 어떻게 하나요?',
        answer:
          '<strong>분납(2회 분할) 또는 물납(부동산 등) 신청 영역입니다(상증세법 제71조·제73조).</strong> 신고와 함께 신청.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 vs 상속포기', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
      { label: '상속포기 시효 안내', href: '/guide/inheritance/inheritance-renunciation-deadline' },
      { label: '상속세 6개월 신고 절차', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속세 신고 기한 가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '특별한정승인 시점', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
    ],
  },
];
