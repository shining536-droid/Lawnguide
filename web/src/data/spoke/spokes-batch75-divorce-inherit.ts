import { SpokePage } from '../spoke-pages';

// batch75 divorce + inheritance — 6개 (2026-05-23)
//
// 고유 존재 이유:
// 1. divorce-prenup-postnup-modified-track — 혼전약정을 혼인 후 일방 압박으로 변경. 합의 자유 침해 + 사후 변경의 효력 다툼 트랙.
// 2. divorce-bilingual-bicultural-conflict-track — 한국인-외국인 다문화 부부의 종교·교육·언어 가치관 갈등. 다문화가족지원법 + 협의·재판 결합 트랙.
// 3. divorce-spouse-incarcerated-divorce-track — 배우자 수감 중 일방 이혼. 수형자 면접·재판 진행 + 재산분할·양육 트랙.
// 4. divorce-property-trust-foreign-asset-track — 배우자의 해외 부동산·신탁 은닉. 해외 자산 추적·재산분할 확보 트랙.
// 5. divorce-mental-illness-spouse-care-track — 정신질환 배우자 부양 한계와 이혼사유 평가. 부부협력의무 + 보호 균형 트랙.
// 6. inheritance-overseas-marriage-spousal-share-track — 해외 혼인 한국인 사망 시 배우자 지분. 국제사법 + 한국 민법 결합 트랙.

export const spokesBatch75DivorceInherit: SpokePage[] = [
  // ─── 1 divorce-prenup-postnup-modified-track ───
  {
    domain: 'divorce',
    slug: 'divorce-prenup-postnup-modified-track',
    keyword: '혼전약정 사후 변경',
    questionKeyword: '결혼 전 합의한 혼전약정(재산 별산제·위자료 상한)을 결혼 2년 후 배우자가 압박해 \'위자료 포기\' 사후 변경 각서로 다시 작성하게 했어요.',
    ctaKeyword: '혼전약정 변경 다툼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '혼전약정 사후 변경 — 5단계 효력·취소 다툼 | 로앤가이드',
      description:
        '혼인 후 일방 압박으로 혼전약정이 불리하게 수정됐다면 의사결정 자유·취소·재산분할 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 전 양가 합의로 \'각자 재산 별산제 + 이혼 시 위자료 5천만원 상한\' 내용의 혼전약정서를 공증까지 받아 보관했습니다. 그런데 결혼 2년 차에 배우자가 \'네가 나를 못 믿는 거 아니냐\'며 반복 압박했고, \'위자료 청구권 포기 + 재산분할 시 본인 명의 부동산 제외\' 내용의 사후 각서를 다시 쓰게 됐어요. 사후 변경 시점엔 배우자의 외도 정황·일방적 가출 위협이 누적된 상태였고, 협의 없는 일방 작성이었습니다." 혼전약정은 부부재산계약(민법 제829조)으로 혼인 신고 전에 등기해야 제3자에게 대항력이 생기는 영역이며, 혼인 후 변경은 \'정당한 사유\'와 자유로운 합의가 전제됩니다. 민법 제110조 강박 의사표시 취소·제103조 반사회질서 무효 + 가사소송 재산분할 평가가 결합되는 트랙입니다. 사후 변경 압박 + 외도·가출 위협 + 일방 작성 결합은 강박 취소 + 재산분할 평가 결합 트랙. 피해자라면 ① 변경 정황 ② 압박 입증 ③ 강박 취소 ④ 협의/재판 이혼 ⑤ 재산분할 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 혼전약정 사후 변경 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황·압박·취소·이혼·분할 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 변경 정황</strong> — 사후 각서 작성 일시·장소·배경 자료.</li>\n<li><strong>② 압박 입증</strong> — 외도 정황·가출 위협·반복 압박 메시지.</li>\n<li><strong>③ 강박 의사표시 취소</strong> — 민법 제110조 취소권(3년 내).</li>\n<li><strong>④ 협의/재판 이혼</strong> — 가정법원 조정·재판이혼.</li>\n<li><strong>⑤ 재산분할 + 위자료</strong> — 원혼전약정 기준 + 사후변경 효력 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부부재산계약 변경은 자유로운 합의 전제. 압박·반복 종용 + 일방 작성 정황이 누적되면 사후 변경 효력 부정 평가 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호인·가정법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·각서 원본 보존 (즉시)</strong> — 혼전약정 공증본·사후 각서.</li>\n<li><strong>2단계 — 압박 자료 정리 (1~2주)</strong> — 메시지·녹음·증인 진술.</li>\n<li><strong>3단계 — 변호인 상담·취소 의사 통지 (1개월)</strong>.</li>\n<li><strong>4단계 — 협의이혼 무산 시 재판이혼 (가정법원)</strong>.</li>\n<li><strong>5단계 — 재산분할·위자료 청구 (이혼 확정 2년 내)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">혼전약정 사후 변경 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·압박·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼전약정서 원본·공증본·등기 자료</strong></li>\n<li><strong>사후 각서·서명 일자·장소 자료</strong></li>\n<li><strong>배우자 외도 정황·가출 위협·압박 메시지</strong></li>\n<li><strong>녹음·문자·이메일·SNS 캡처</strong></li>\n<li><strong>증인 진술서 (가족·친구)</strong></li>\n<li><strong>본인·배우자 재산 자료 (부동산·금융·사업)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사후 각서가 일방 작성·압박 시 강박 취소권 행사가 결정 자료. 외도 정황도 위자료 청구의 결정 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>약정 효력</strong> — 부부재산계약 변경의 자유 합의 여부.</li>\n<li><strong>강박 정도</strong> — 명시적 협박 없이도 외도 위협·반복 압박 평가.</li>\n<li><strong>재산분할 기준</strong> — 원혼전약정 vs 사후 변경 어느 쪽 효력.</li>\n<li><strong>위자료 청구권</strong> — 포기 각서의 강박 취소 후 회복.</li>\n<li><strong>이혼 사유</strong> — 외도·악의의 유기·기타 중대 사유.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 부정행위 위자료 평가',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 영역에서 법원은 제3자가 부부의 일방과 부정행위를 함으로써 혼인의 본질을 침해한 경우 손해배상 책임 평가를 다루면서, 부부의 일방이 부정행위로 입은 정신적 고통에 대한 위자료 산정이 결정 사정이라고 본 사례 흐름이 있고, 외도 정황 결합 + 혼전약정 사후 변경 사안에는 위자료·강박 평가가 결합되는 영역입니다.',
        takeaway: '사후 각서 + 외도·가출 위협 결합 시 강박 취소·위자료 평가 영역 — 변호인 상담·재판이혼 검토 권장.',
      },
    ],
    faq: [
      {
        question: '공증된 혼전약정도 사후 변경되면 효력이 사라지나요?',
        answer:
          '<strong>자유로운 합의가 전제입니다.</strong> 압박 입증 시 사후 변경 효력 다툼.',
      },
      {
        question: '\'위자료 포기\' 각서를 썼는데 청구할 수 있나요?',
        answer:
          '<strong>강박 취소권 행사 시 청구권 회복 영역입니다.</strong> 3년 내 행사.',
      },
      {
        question: '배우자가 외도를 했어요',
        answer:
          '<strong>위자료·재판이혼의 결정 사유입니다.</strong> 외도 정황 자료 보존.',
      },
      {
        question: '협의이혼 vs 재판이혼 어느 쪽이 유리한가요?',
        answer:
          '<strong>재산·위자료 다툼이 크면 재판이혼 검토 영역입니다.</strong> 변호인 상담 후 결정.',
      },
      {
        question: '재산분할 시 \'본인 명의 부동산 제외\' 각서는 유효한가요?',
        answer:
          '<strong>강박 취소 후 일반 재산분할 평가 영역입니다.</strong> 혼인 중 형성 재산 모두 분할 대상.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation' },
      { label: '재판이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '혼전계약 작성', href: '/guide/divorce/divorce-prenup-drafting' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 2 divorce-bilingual-bicultural-conflict-track ───
  {
    domain: 'divorce',
    slug: 'divorce-bilingual-bicultural-conflict-track',
    keyword: '다문화 부부 가치관 갈등',
    questionKeyword: '한국인 남편과 베트남 출신 아내, 7살 자녀의 종교·언어·교육 가치관 충돌이 5년간 누적돼 이혼 검토 중입니다.',
    ctaKeyword: '다문화 부부 이혼 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '다문화 부부 이혼 — 5단계 협의·양육·재산 다툼 | 로앤가이드',
      description:
        '한국인-외국인 부부의 종교·교육·언어 가치관 충돌로 이혼을 검토한다면 다문화가족지원법·재판이혼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한국인 남편(40)과 베트남 출신 아내(35) 부부, 7세 자녀를 두고 결혼 8년 차입니다. 자녀의 종교(불교 vs 가톨릭)·교육(국제학교 vs 일반 공립)·언어(한국어 vs 베트남어 병행) 방향성 충돌이 5년간 누적됐고, 처가·시가 양가 개입까지 더해져 부부 갈등이 임계점에 달했어요. 아내는 베트남 귀국 가능성·자녀 동반 의사도 표명한 상황입니다." 다문화가족지원법은 다문화가족지원센터(1577-1366)를 통해 부부·자녀 상담·법률 지원을 제공하고, 민법 제840조 재판이혼 사유 \'기타 혼인을 계속하기 어려운 중대한 사유\'에 가치관 차이 누적 평가가 가능한 영역이며, 자녀 동반 출국은 출입국관리법·가사소송법상 출국금지 가처분으로 통제되는 트랙입니다. 가치관 충돌 + 양가 개입 + 자녀 출국 위험 결합은 협의이혼 + 양육권·재산분할 + 출국금지 결합 트랙. 부부라면 ① 가족지원센터 상담 ② 자녀 양육권 ③ 출국금지 ④ 협의/재판 이혼 ⑤ 재산분할 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다문화 부부 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상담·양육·출국·이혼·분할 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 다문화가족지원센터 상담 (1577-1366)</strong> — 통역·법률·부부 상담.</li>\n<li><strong>② 자녀 양육권 평가</strong> — 양육 환경·연속성·자녀 의사.</li>\n<li><strong>③ 출국금지 가처분</strong> — 자녀 무단 출국 위험 통제.</li>\n<li><strong>④ 협의/재판 이혼</strong> — 가정법원 조정·재판.</li>\n<li><strong>⑤ 재산분할 + 양육비</strong> — 양국 자산 평가·국제사법 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다문화 부부 이혼은 단순 가치관 차이로는 재판이혼 사유 인정이 약하지만, 누적된 갈등 + 양가 개입 + 자녀 양육 충돌 결합은 \'중대 사유\' 평가 가능 영역. 자녀 동반 무단 출국 위험은 신속한 출국금지 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 협의·재판 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원·다문화센터·출입국 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 다문화가족지원센터 상담 (1577-1366, 즉시)</strong> — 통역·부부·법률.</li>\n<li><strong>2단계 — 양육 환경·자녀 의사 자료 정리 (1~2주)</strong>.</li>\n<li><strong>3단계 — 출국금지 가처분 검토 (필요 시)</strong>.</li>\n<li><strong>4단계 — 협의이혼 무산 시 재판이혼 (가정법원)</strong>.</li>\n<li><strong>5단계 — 재산분할·양육비·면접교섭 확정</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다문화 부부 이혼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가족·양육·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계·가족관계·기본 증명서</strong></li>\n<li><strong>자녀 출생증명·재학·의료 자료</strong></li>\n<li><strong>외국인 등록증·체류 자격 자료</strong></li>\n<li><strong>가치관 충돌 정황 (메시지·녹음·증인 진술)</strong></li>\n<li><strong>양가 개입 정황 자료</strong></li>\n<li><strong>본인·배우자 재산 자료 (양국 부동산·금융 포함)</strong></li>\n<li><strong>자녀 무단 출국 위험 정황 (항공권 검색·짐 정리 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자녀 동반 출국 위험이 있을 때는 출국금지 가처분이 우선. 양국 재산은 국제사법 적용 평가 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>재판이혼 사유</strong> — 가치관 차이 단독은 약함, 누적 갈등 결합 평가.</li>\n<li><strong>양육권</strong> — 양육 환경 연속성·자녀 의사·통역 가능성.</li>\n<li><strong>출국금지</strong> — 신속 가처분 + 출입국관리법 협조.</li>\n<li><strong>재산분할 국제사법</strong> — 양국 자산 평가의 적용 법규.</li>\n<li><strong>면접교섭</strong> — 외국 거주 부모의 화상·정기 방문.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>다문화가족지원센터 1577-1366</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자 부정행위 위자료 평가',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 영역에서 법원은 제3자가 부부의 일방과 부정행위를 함으로써 혼인의 본질을 침해한 경우 손해배상 책임 평가를 다루면서, 부정행위로 입은 정신적 고통에 대한 위자료 산정이 결정 사정이라고 본 사례 흐름이 있고, 다문화 부부의 가치관 충돌·양가 개입 누적 사안에도 \'기타 중대 사유\' 평가가 검토되는 영역입니다.',
        takeaway: '가치관 충돌 + 양가 개입 + 자녀 양육 충돌 결합 시 재판이혼·양육권 평가 영역 — 다문화센터·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '가치관 차이만으로 재판이혼이 인정될까요?',
        answer:
          '<strong>단독으로는 약하지만 누적 갈등·양가 개입 결합 시 \'중대 사유\' 평가 영역입니다.</strong>',
      },
      {
        question: '아내가 자녀를 데리고 베트남에 갈 수 있나요?',
        answer:
          '<strong>출국금지 가처분으로 통제 가능 영역입니다.</strong> 무단 출국 위험 시 신속 검토.',
      },
      {
        question: '베트남에 있는 재산도 분할 대상인가요?',
        answer:
          '<strong>국제사법 적용·양국 자산 평가 영역입니다.</strong> 변호인 상담 후 결정.',
      },
      {
        question: '체류 자격이 결혼이민이면 이혼 후 어떻게 되나요?',
        answer:
          '<strong>이혼 사유·자녀 양육 여부에 따라 체류 자격 변경 영역입니다.</strong> 출입국 상담 권장.',
      },
      {
        question: '자녀 양육권은 어떻게 결정되나요?',
        answer:
          '<strong>양육 환경·연속성·자녀 의사가 결정 사정입니다.</strong> 통역 가능성·교육 환경 평가.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '양육권 결정 기준', href: '/guide/divorce/divorce-custody-criteria' },
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '면접교섭 기준', href: '/guide/divorce/divorce-visitation-rights' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 3 divorce-spouse-incarcerated-divorce-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-incarcerated-divorce-track',
    keyword: '배우자 수감 중 이혼',
    questionKeyword: '남편이 사기죄로 3년 실형 복역 중인데 옥바라지 + 자녀 단독 양육 한계로 이혼을 검토 중입니다. 절차가 어떻게 되나요?',
    ctaKeyword: '수감 배우자 이혼 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '배우자 수감 중 이혼 — 5단계 면접·재판·양육 | 로앤가이드',
      description:
        '배우자가 수감 중일 때 이혼을 검토한다면 교정시설 송달·재판진행·재산분할 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 사기죄로 징역 3년을 선고받고 6개월 전부터 수감 중입니다. 옥바라지·면회 부담과 7세 자녀 단독 양육 한계, 남편 출소 후의 재범 우려까지 누적돼 이혼을 결심했습니다. 수감 중 협의이혼이 가능한지, 재판이혼 사유가 되는지, 재산분할·양육비는 어떻게 청구하는지 막막한 상황입니다." 협의이혼은 가정법원 양 당사자 출석이 원칙이지만 수감자는 교정시설 측 협조로 화상·서면 절차 검토 가능 영역이며, 재판이혼은 송달이 교정시설로 갈음되고 본인이 출석 곤란하면 변호인 위임으로 진행되는 영역입니다. 민법 제840조는 \'배우자의 1년 이상 행방불명·악의의 유기·범죄로 인한 3년 이상 자유형 선고\' 등을 재판이혼 사유로 규정합니다. 수감 + 자녀 양육 + 출소 후 재범 위험 결합은 재판이혼 + 양육권·면접교섭 + 재산분할 결합 트랙. 부부라면 ① 재판이혼 사유 ② 송달·송치 ③ 변호인 위임 ④ 양육권·면접 ⑤ 재산분할 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수감 중 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·송달·위임·양육·분할 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재판이혼 사유</strong> — 3년 이상 자유형 선고·악의의 유기.</li>\n<li><strong>② 송달</strong> — 교정시설로 송달·교도소장 협조.</li>\n<li><strong>③ 본인·변호인 위임</strong> — 수감자 출석 갈음.</li>\n<li><strong>④ 양육권·면접교섭</strong> — 자녀 양육·면접 방법 결정.</li>\n<li><strong>⑤ 재산분할·양육비</strong> — 출소 후 회복 가능성 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 3년 이상 실형은 \'기타 혼인을 계속하기 어려운 중대 사유\' 평가 가능 영역. 변호인 위임으로 본인 출석 없이 절차 진행이 일반적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원·교정시설 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재판이혼 청구서 작성·접수 (즉시)</strong>.</li>\n<li><strong>2단계 — 교정시설로 송달 (2주~1개월)</strong>.</li>\n<li><strong>3단계 — 배우자 변호인 위임·답변서 제출</strong>.</li>\n<li><strong>4단계 — 가정법원 조정·재판 (3~6개월)</strong>.</li>\n<li><strong>5단계 — 재산분할·양육비·면접교섭 확정</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수감 배우자 이혼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·재산·양육 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계·가족관계·자녀 기본증명서</strong></li>\n<li><strong>판결문·수감 사실 증명 (교정시설 발급)</strong></li>\n<li><strong>피해자 진술서·사기 피해 정황 자료(있다면)</strong></li>\n<li><strong>자녀 양육 환경·학교·의료 자료</strong></li>\n<li><strong>본인·배우자 재산 자료</strong></li>\n<li><strong>면접교섭 거리·방법 자료 (교정시설 면회 규칙)</strong></li>\n<li><strong>옥바라지·생계 부담 자료(필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수감자도 변호인 위임으로 협의이혼·재판이혼 모두 진행 가능. 재산분할은 출소 후 회복 가능성도 평가 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>재판이혼 사유</strong> — 3년 이상 실형 + 자녀 양육 부담 결합.</li>\n<li><strong>송달·출석</strong> — 교정시설 송달·변호인 위임.</li>\n<li><strong>양육권</strong> — 수감 부모는 양육 곤란 + 면접교섭 별도.</li>\n<li><strong>재산분할</strong> — 출소 후 회복 가능성 평가.</li>\n<li><strong>면접교섭 방법</strong> — 교정시설 면회·서신·화상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 손해배상청구권 행사 가능 평가',
        summary:
          '대법원 2023다285162(대법원, 2026.01.22 선고) 영역에서 법원은 불법행위로 인한 손해배상청구권 행사의 객관적·합리적 기대가능성 부정 사유 평가를 다루면서, 청구권 행사가 곤란한 사정이 있는 영역에서 권리 행사 기간의 평가가 결정 사정이라고 본 사례 흐름이 있고, 배우자 수감 중 이혼·재산분할 청구의 행사 기간·기대가능성에도 동일 평가 기준이 적용되는 영역입니다.',
        takeaway: '3년 이상 실형 + 자녀 양육 부담 결합 시 재판이혼·재산분할 평가 영역 — 변호인 상담·재판이혼 검토 권장.',
      },
    ],
    faq: [
      {
        question: '수감 중인 배우자와 협의이혼이 가능한가요?',
        answer:
          '<strong>변호인 위임·교정시설 협조로 가능한 영역입니다.</strong> 다만 재판이혼이 일반적.',
      },
      {
        question: '재산분할 대상이 거의 없는데 청구할 이익이 있나요?',
        answer:
          '<strong>출소 후 회복 가능성·미래 수입도 평가 영역입니다.</strong> 변호인 상담 후 결정.',
      },
      {
        question: '자녀 면접교섭은 어떻게 진행되나요?',
        answer:
          '<strong>교정시설 면회·서신·화상 방법 결정 영역입니다.</strong> 자녀 의사·연령 평가.',
      },
      {
        question: '출소 후 재범 우려가 큰데 양육비 받을 수 있나요?',
        answer:
          '<strong>양육비 청구권은 출소 후에도 유효합니다.</strong> 양육비이행관리원 추심 검토.',
      },
      {
        question: '본인이 옥바라지를 그만두고 싶어요',
        answer:
          '<strong>옥바라지·면회는 법적 의무 아닙니다.</strong> 이혼과 별개 의사 결정.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '양육권 결정 기준', href: '/guide/divorce/divorce-custody-criteria' },
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '면접교섭 기준', href: '/guide/divorce/divorce-visitation-rights' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 4 divorce-property-trust-foreign-asset-track ───
  {
    domain: 'divorce',
    slug: 'divorce-property-trust-foreign-asset-track',
    keyword: '배우자 해외 자산 은닉',
    questionKeyword: '이혼 과정에서 배우자가 미국 신탁·홍콩 법인·괌 부동산에 자산을 은닉한 정황을 발견했어요. 재산분할에 포함 가능한가요?',
    ctaKeyword: '해외 자산 은닉 분할 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 자산 은닉 이혼 — 5단계 추적·분할 다툼 | 로앤가이드',
      description:
        '배우자가 해외 신탁·법인·부동산에 자산을 은닉했다면 추적·국제사법·재산분할 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 협의 중 배우자가 미국 캘리포니아 신탁(LLC) + 홍콩 법인 명의 + 괌 콘도미니엄에 자산을 분산 은닉한 정황을 발견했습니다. 한국 내 금융자산만 신고하고 해외 자산은 \'본인 명의 아님\'을 주장 중입니다. 외환 송금 기록·해외 카드 사용 내역으로 일부 추적되지만 정확한 평가가 곤란한 상황이에요." 가사소송법은 재산분할 대상 평가를 위해 \'재산명시·재산조회\' 제도를 운영하고, 해외 자산은 국제사법 + FATCA(미국) + CRS(공통보고기준) + 영사·외교 협조로 추적 가능 영역이지만 실효성은 국가별 격차가 큰 영역입니다. 민법 제839조의2는 재산분할 대상을 \'혼인 중 형성된 재산\'으로 규정하며 명의·소재지 불문 평가가 원칙입니다. 해외 자산 + 신탁·법인 우회 + 송금 기록 결합은 재산조회 + 국제 추적 + 재산분할 결합 트랙. 피해자라면 ① 송금 기록 ② 재산조회 신청 ③ 해외 자산 추적 ④ 재산분할 청구 ⑤ 사해행위 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 자산 은닉 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 송금·조회·추적·분할·사해 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 송금·환전 기록</strong> — 외환은행·카드 사용·해외 송금 자료.</li>\n<li><strong>② 가사소송 재산조회 신청</strong> — 법원 명령으로 금융·국세청·등기 조회.</li>\n<li><strong>③ 해외 자산 추적</strong> — 영사 협조·국제사법·현지 변호인.</li>\n<li><strong>④ 재산분할 청구</strong> — 명의·소재지 불문 혼인 중 형성 자산.</li>\n<li><strong>⑤ 사해행위 취소</strong> — 이혼 인지 후 은닉 처분 취소.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한국 내 송금·환전 기록이 해외 자산 추적의 출발점. 외환거래법상 외환 신고 의무 위반 + 사해행위 결합 시 형사·민사 가중 평가 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추적 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원·국세청·영사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 송금·환전 기록 수집 (즉시)</strong> — 본인 협조 가능 범위.</li>\n<li><strong>2단계 — 가사소송 재산조회 신청 (가정법원)</strong>.</li>\n<li><strong>3단계 — 해외 자산 추적 (현지 변호인·영사 협조, 3~6개월)</strong>.</li>\n<li><strong>4단계 — 재산분할 청구 (이혼 확정 2년 내)</strong>.</li>\n<li><strong>5단계 — 사해행위 취소 (취소권 1년·5년)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 자산 은닉 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 송금·재산·은닉 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계·가족관계 증명서</strong></li>\n<li><strong>외환 송금 영수증·환전 기록</strong></li>\n<li><strong>해외 카드 사용 내역·체류 기록</strong></li>\n<li><strong>해외 부동산·법인 등기 자료(가능 범위)</strong></li>\n<li><strong>배우자 신탁·LLC·법인 등기 정황 자료</strong></li>\n<li><strong>이혼 인지 후 처분 정황 자료(사해행위)</strong></li>\n<li><strong>본인·배우자 한국 내 자산 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해외 자산 추적은 시간·비용이 큰 영역. 송금 기록 + 한국 내 정황 자료로 우선 가정법원 재산조회 신청이 효율적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>재산분할 대상</strong> — 명의·소재지 불문 혼인 중 형성 자산.</li>\n<li><strong>해외 자산 평가</strong> — 현지 감정·환율 시점.</li>\n<li><strong>사해행위 취소</strong> — 이혼 인지 후 은닉 처분.</li>\n<li><strong>국제사법 적용</strong> — 부동산 소재지 법·신탁 설정지 법.</li>\n<li><strong>외환 신고 위반</strong> — 외환거래법 형사·과태료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>외교부 영사콜센터 +82-2-3210-0404</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 손해배상청구권 행사 평가 영역',
        summary:
          '대법원 2023다285162(대법원, 2026.01.22 선고) 영역에서 법원은 불법행위 손해배상청구권 행사의 객관적·합리적 기대가능성 부정 사유와 권리 행사 기간 평가가 결정 사정이라고 본 사례 흐름이 있고, 해외 은닉 자산의 재산분할 청구도 동일하게 사정 평가 + 시효 관리가 결정 영역입니다.',
        takeaway: '송금·환전 + 신탁·법인 우회 + 사해행위 결합 시 재산조회·국제 추적 평가 영역 — 변호인 상담·신속 청구 권장.',
      },
    ],
    faq: [
      {
        question: '해외 자산도 재산분할 대상인가요?',
        answer:
          '<strong>명의·소재지 불문 혼인 중 형성 자산이면 대상입니다.</strong> 평가·추적이 핵심.',
      },
      {
        question: '배우자가 본인 명의가 아니라고 주장합니다',
        answer:
          '<strong>실질 지배·송금 자금 출처가 결정 입증입니다.</strong> 송금 기록·법인 지분 추적.',
      },
      {
        question: '이혼 중 자산을 처분하면 어떻게 되나요?',
        answer:
          '<strong>사해행위 취소권으로 회수 가능 영역입니다.</strong> 1년·5년 행사 기간.',
      },
      {
        question: '해외 추적 비용이 너무 클까요?',
        answer:
          '<strong>자산 규모·추적 가능성 평가 후 결정 영역입니다.</strong> 송금 기록 우선 활용.',
      },
      {
        question: '외환 신고 위반은 별도로 처벌받나요?',
        answer:
          '<strong>외환거래법상 과태료·형사 처벌 별도 영역입니다.</strong> 국세청·관세청 신고 검토.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '재판이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
      { label: '재산분할 신청 시기', href: '/guide/divorce/divorce-property-claim-timing' },
    ],
  },

  // ─── 5 divorce-mental-illness-spouse-care-track ───
  {
    domain: 'divorce',
    slug: 'divorce-mental-illness-spouse-care-track',
    keyword: '정신질환 배우자 부양 한계',
    questionKeyword: '배우자가 양극성 장애·조현병 진단 후 5년간 통원·입원 반복, 본인의 부양·간병 한계로 이혼을 검토 중입니다.',
    ctaKeyword: '정신질환 배우자 이혼 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '정신질환 배우자 이혼 — 5단계 사유·보호 균형 | 로앤가이드',
      description:
        '배우자가 정신질환으로 장기 치료 중인 한계에서 이혼을 검토한다면 부부협력 의무·재판이혼·보호 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 5년 전 양극성 장애·조현병 진단을 받은 후 통원·입원을 반복해왔습니다. 본인은 직장·자녀 양육·간병을 병행해왔지만 신체·정신적 한계에 도달했고, 배우자의 약물 거부·증상 악화로 가정 내 위기가 누적된 상태예요. 이혼을 검토하면서도 \'아픈 사람을 버린다\'는 도의적 부담과 배우자 보호 책임 사이에서 고민 중입니다." 민법 제826조 부부의 동거·부양·협조 의무는 정신질환 영역에도 원칙적으로 적용되지만, 민법 제840조 제6호 \'기타 혼인을 계속하기 어려운 중대한 사유\' 평가에서 장기 치료·회복 곤란·일방 부양 한계는 사정으로 평가되는 영역입니다. 동시에 정신건강복지법은 환자 보호·치료 지속 의무를 사회 안전망으로 두며, 가정법원은 이혼 시 환자의 보호·생계도 평가하는 트랙입니다. 장기 치료 + 일방 부양 한계 + 자녀 보호 결합은 재판이혼 + 보호 안전망 + 재산분할 결합 트랙. 부부라면 ① 진단·치료 자료 ② 부양 한계 ③ 보호 안전망 ④ 재판이혼 ⑤ 재산분할 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 정신질환 배우자 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·부양·보호·이혼·분할 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단·치료 자료</strong> — 진단명·기간·치료 경과·약물 순응도.</li>\n<li><strong>② 부양 한계 입증</strong> — 본인 건강·자녀 양육·간병 부담 자료.</li>\n<li><strong>③ 보호 안전망</strong> — 정신건강복지센터·가족·기초생활 검토.</li>\n<li><strong>④ 재판이혼</strong> — 민법 제840조 제6호 평가.</li>\n<li><strong>⑤ 재산분할·양육비</strong> — 환자 생계도 평가 사정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정신질환 자체는 재판이혼 사유가 아니지만, 장기 치료 + 회복 곤란 + 일방 부양 한계 + 자녀 보호 결합은 \'중대 사유\' 평가 가능 영역. 환자의 보호 안전망 확보가 결정 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료·보호·가정법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 정리 (즉시)</strong>.</li>\n<li><strong>2단계 — 정신건강복지센터·사회복지 상담 (1~2주)</strong>.</li>\n<li><strong>3단계 — 변호인 상담·재판이혼 청구 검토</strong>.</li>\n<li><strong>4단계 — 가정법원 조정·재판 (3~6개월)</strong>.</li>\n<li><strong>5단계 — 재산분할·양육비·보호 안전망 확정</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정신질환 배우자 이혼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·부양·보호 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계·가족관계·자녀 기본증명서</strong></li>\n<li><strong>배우자 진단서·치료 기록·입원 자료</strong></li>\n<li><strong>본인 건강 상태·간병 부담 자료</strong></li>\n<li><strong>자녀 양육 환경·심리 영향 자료</strong></li>\n<li><strong>본인·배우자 재산 자료</strong></li>\n<li><strong>정신건강복지센터 상담·보호 자료</strong></li>\n<li><strong>가족·증인 진술서 (간병 한계)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 환자의 보호 안전망(정신건강복지센터·가족·기초생활보장)이 확보되면 재판이혼 \'중대 사유\' 평가가 유연. 일방적 회피·악의의 유기로 보이지 않게 절차 준비.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>중대 사유 평가</strong> — 정신질환 단독 아닌 장기·일방부양 결합.</li>\n<li><strong>보호 안전망</strong> — 환자 생계·치료 지속 확보.</li>\n<li><strong>양육권</strong> — 자녀 보호 환경·환자 위험성 평가.</li>\n<li><strong>재산분할</strong> — 환자 생계도 평가 사정.</li>\n<li><strong>악의의 유기 회피</strong> — 일방적 가출 전 절차 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>정신건강복지센터·정신건강위기상담전화 1577-0199</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부 협력의무 평가 영역',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 영역에서 법원은 부부 일방의 부정행위가 혼인의 본질을 침해한 경우 손해배상 책임 평가를 다루면서, 혼인을 계속하기 어려운 중대 사유 평가가 결정 사정이라고 본 사례 흐름이 있고, 정신질환 장기 치료·일방 부양 한계 누적 사안에도 \'중대 사유\' 평가가 검토되는 영역입니다.',
        takeaway: '정신질환 + 장기 치료 + 일방 부양 한계 결합 시 재판이혼·보호 균형 평가 영역 — 변호인·정신건강복지센터 상담 권장.',
      },
    ],
    faq: [
      {
        question: '정신질환만으로 재판이혼이 인정될까요?',
        answer:
          '<strong>단독은 약하지만 장기 치료·일방 부양 한계 결합은 평가 가능 영역입니다.</strong>',
      },
      {
        question: '아픈 배우자를 두고 이혼하는 게 도의적으로 부담됩니다',
        answer:
          '<strong>환자 보호 안전망 확보가 핵심입니다.</strong> 정신건강복지센터·가족 협조 검토.',
      },
      {
        question: '자녀 양육권은 어떻게 되나요?',
        answer:
          '<strong>자녀 보호 환경·환자 위험성 평가 영역입니다.</strong> 의사 소견·심리 평가 자료.',
      },
      {
        question: '재산분할 시 환자 생계도 고려되나요?',
        answer:
          '<strong>환자 생계·치료비도 평가 사정입니다.</strong> 변호인 상담 후 결정.',
      },
      {
        question: '일방적으로 별거하면 악의의 유기로 불이익이 있나요?',
        answer:
          '<strong>절차 진행 + 보호 안전망 확보 후 별거가 안전한 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '양육권 결정 기준', href: '/guide/divorce/divorce-custody-criteria' },
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '면접교섭 기준', href: '/guide/divorce/divorce-visitation-rights' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 6 inheritance-overseas-marriage-spousal-share-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-overseas-marriage-spousal-share-track',
    keyword: '해외 혼인 배우자 상속 지분',
    questionKeyword: '한국인 부친이 미국에서 미국인 여성과 재혼 후 사망했어요. 한국 자녀들의 상속 지분과 미국 배우자의 권리가 충돌합니다.',
    ctaKeyword: '국제 혼인 상속 분할 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '해외 혼인 한국인 상속 — 5단계 국제사법·지분 | 로앤가이드',
      description:
        '한국인 부모의 해외 재혼·사망 후 상속 충돌이라면 국제사법·민법 상속·지분 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한국 국적 부친(70)이 10년 전 미국에서 미국 국적 여성과 재혼한 후 작년에 미국 거주지에서 사망했습니다. 한국에는 전혼 자녀 3명(본인 포함)이 있고, 미국에는 부친 명의 부동산·연금·은행 계좌가 있어요. 미국 배우자 측은 \'미국 법상 모든 재산이 배우자 단독 상속\'을 주장하고, 한국 자녀들은 \'한국 민법상 자녀 법정 상속분\'을 주장 중입니다." 국제사법 제49조는 \'상속은 사망 당시 피상속인의 본국법\'을 원칙으로 하며, 한국인 사망의 상속은 한국 민법 적용이 일반적입니다. 다만 미국 부동산은 부동산 소재지법(미국 주법) 적용이 일반 원칙이라 \'동산은 본국법·부동산은 소재지법\'으로 갈리는 영역이며, 한국 민법 제1003조는 배우자 + 직계비속이 공동 상속(배우자 1.5 : 자녀 각 1)을 규정합니다. 국제사법 + 미국 주법 + 한국 민법 결합은 상속 지분 + 부동산 소재지 분할 결합 트랙. 상속인이라면 ① 국제사법 적용 ② 동산·부동산 구분 ③ 상속 지분 ④ 한정승인·포기 ⑤ 협의·재판 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 국제 혼인 상속 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 국제사법·구분·지분·승인·협의 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 국제사법 적용</strong> — 동산은 본국법(한국)·부동산은 소재지법(미국 주).</li>\n<li><strong>② 동산·부동산 구분</strong> — 미국 부동산·연금·은행 계좌 별도 평가.</li>\n<li><strong>③ 한국 민법 상속 지분</strong> — 배우자 1.5 : 자녀 각 1.</li>\n<li><strong>④ 한정승인·포기 (3개월)</strong> — 채무 위험 평가.</li>\n<li><strong>⑤ 협의·재판</strong> — 한국·미국 법원 병행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미국 부동산은 미국 주법(예: 캘리포니아 community property)으로 배우자 비중이 큼. 한국 내 자산·연금·동산은 한국 민법 상속 지분이 결정 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 상속 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 국내외 법원·영사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망·재산 자료 수집 (즉시)</strong> — 사망진단서·국내외 재산 목록.</li>\n<li><strong>2단계 — 국제사법 검토 + 한정승인·포기 결정 (3개월 내)</strong>.</li>\n<li><strong>3단계 — 한국 가정법원 상속 협의·재판 검토</strong>.</li>\n<li><strong>4단계 — 미국 프로베이트(probate) 진행 (현지 변호인)</strong>.</li>\n<li><strong>5단계 — 상속세 신고 (6개월·해외 자산 별도)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">국제 혼인 상속 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·재산·혼인 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·국적 자료</strong></li>\n<li><strong>가족관계증명서·혼인관계증명서·재혼 등록부</strong></li>\n<li><strong>국내외 부동산 등기·평가 자료</strong></li>\n<li><strong>국내외 금융·연금 자료</strong></li>\n<li><strong>미국 결혼증명서·배우자 신원 자료</strong></li>\n<li><strong>한국 자녀 신분·상속순위 자료</strong></li>\n<li><strong>채무 자료(한정승인·포기 검토)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 국제 상속은 \'동산은 본국법·부동산은 소재지법\' 원칙이 핵심. 미국 부동산은 현지 변호인 프로베이트 절차 별도.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>국제사법 적용</strong> — 동산·부동산 구분의 결정.</li>\n<li><strong>미국 주법</strong> — community property·separate property 구분.</li>\n<li><strong>한국 민법 지분</strong> — 배우자 1.5 : 자녀 각 1.</li>\n<li><strong>한정승인·포기</strong> — 채무 위험 평가.</li>\n<li><strong>상속세 이중과세</strong> — 한미 조세조약 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>외교부 영사콜센터 +82-2-3210-0404</strong></li>\n<li><strong>국세청 상속세 상담 126</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양도소득세·거주기간 평가 영역',
        summary:
          '대법원 2025두34935(대법원, 2026.01.15 선고) 영역에서 법원은 양도소득세 거주기간 의미 평가를 다루면서, 거주자 판단·과세 기준의 평가가 결정 사정이라고 본 사례 흐름이 있고, 국제 혼인 상속·해외 자산의 거주자 평가와 과세 분쟁에도 동일 평가 기준이 적용되는 영역입니다.',
        takeaway: '국제사법 + 한국 민법 + 미국 주법 결합 시 상속 지분·세무 평가 영역 — 변호인·세무 상담 권장.',
      },
    ],
    faq: [
      {
        question: '미국 배우자가 \'모든 재산이 본인 단독 상속\'이라고 합니다',
        answer:
          '<strong>미국 부동산은 미국 주법, 한국 자산은 한국 민법 분할 영역입니다.</strong>',
      },
      {
        question: '한국 자녀의 법정 상속분은 얼마인가요?',
        answer:
          '<strong>한국 민법상 배우자 1.5 : 자녀 각 1 비율입니다.</strong> 미국 자산은 별도 평가.',
      },
      {
        question: '한정승인 신청을 어디에 하나요?',
        answer:
          '<strong>피상속인의 마지막 한국 주소지 가정법원입니다.</strong> 사망 인지 3개월 내.',
      },
      {
        question: '상속세는 한국·미국 모두 내야 하나요?',
        answer:
          '<strong>한미 조세조약상 이중과세 조정 영역입니다.</strong> 세무사·국세청 상담 권장.',
      },
      {
        question: '미국 프로베이트는 얼마나 걸리나요?',
        answer:
          '<strong>주에 따라 6개월~2년 영역입니다.</strong> 현지 변호인 협조 필수.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '상속 포기 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
      { label: '상속 지분 계산', href: '/guide/inheritance/inheritance-share-calculation' },
      { label: '상속세 신고', href: '/guide/inheritance/inheritance-tax-filing' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-statutory-portion' },
    ],
  },
];
