import { SpokePage } from '../spoke-pages';

// batch75 dismissal — 4개 (2026-05-23)
//
// 고유 존재 이유:
// 1. 정년연장형 재계약 거부 — 단순 정년 후 재고용 류와 분기. 여기는 '정년연장협약·1년 갱신 관행 + 동종 직원 갱신 + 본인만 거부' 트랙. 갱신기대권 + 동종 직원 형평성 다툼.
// 2. 겸업·부업 신고 후 해고 — 겸업금지 일반 위반 류와 분기. 여기는 '회사 규정상 사전신고 → 신고 후 회사 이익 침해 명목 해고' 트랙. 근로기준법 제5조 강제근로·신고 후 보복성 다툼.
// 3. 사업양도 고용승계 거부 — 단순 정리해고 류와 분기. 여기는 '영업양도 + 일부 직원만 승계 + 신규채용 미선발 통보' 트랙. 영업양도 고용승계 + 근로기준법 제25조 우선재고용 다툼.
// 4. 경영악화 일방휴직→해고 — 단순 휴직 분쟁 류와 분기. 여기는 '경영악화 명목 무급 휴직 일방 통보 → 3개월 후 해고' 트랙. 사용자 귀책 휴업수당 70% + 일방 휴직 무효 다툼.

export const spokesBatch75Dismissal: SpokePage[] = [
  // ─── 1. dismissal-aging-mandatory-retirement-extension-deny-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-aging-mandatory-retirement-extension-deny-track',
    keyword: '정년연장형 재계약 거부',
    questionKeyword: '정년(만 60세) 후 1년 계약직 갱신 관행이 있는 회사에서 동료들은 갱신됐는데 본인만 재계약을 거부당했어요. 다툴 수 있나요?',
    ctaKeyword: '정년연장 재계약 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정년 후 재계약 거부 — 5단계 갱신기대권·형평성 다툼 | 로앤가이드',
      description:
        '정년연장형 1년 갱신 관행이 있는데 본인만 재계약을 거부당했다면 갱신기대권·동종 직원 비교·우선재고용 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제조업체에서 35년 근무 후 만 60세 정년에 도달했고, 회사 단체협약·취업규칙엔 \'정년 도달 후 본인 희망 시 1년 단위 계약직 전환 + 별도 결격사유 없으면 갱신\' 조항이 있었습니다. 본인과 같은 시기 정년에 도달한 동료 4명 중 3명은 계약직 전환 + 1년 갱신이 이루어졌는데, 본인만 1년 계약 종료 시점에 \'경영상 사정\'을 명목으로 갱신 거부 통보를 받았어요. 1년간 평가는 정상 범위였고 결격 사정도 없었으며, 회사는 본인 후임으로 신규 채용을 진행한 정황도 있었습니다. 정년연장협약·1년 갱신 관행을 신뢰해 노후 계획을 세웠던 상황이었어요." 정년 후 계약직으로 전환된 후의 1년 갱신은 단체협약·취업규칙·관행이 결합되면 \'갱신기대권\'이 인정될 소지가 있는 영역이고, 같은 조건의 동종 직원만 갱신·본인만 거부된 정황은 \'합리적 이유 부재\' 다툼이 가능한 트랙입니다. 근로기준법 제25조 우선재고용 의무도 결합 평가 가능 영역. 피해자라면 ① 갱신기대권 ② 동종 직원 비교 ③ 결격 부재 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 기대권 ② 형평성 ③ 사유 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정년 후 재계약 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기대권·형평성·사유·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신기대권</strong> — 단체협약·취업규칙·관행에 따른 1년 갱신 신뢰 형성 여부.</li>\n<li><strong>② 동종 직원 형평성</strong> — 같은 시기 정년 도달 동료들의 갱신 처우 비교.</li>\n<li><strong>③ 거부 사유 합리성</strong> — \'경영상 사정\' 입증 부재 + 신규 채용 정황 모순.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 갱신기대권 + 합리적 이유 부재 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단체협약·취업규칙·관행 3요소가 결합되면 갱신기대권 인정 영역. 같은 조건 동종 직원은 갱신·본인만 거부 + 후임 신규 채용 정황은 \'합리적 이유 부재\'의 강한 입증. 거부 사유 입증책임은 사용자 측 부담.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단체협약·취업규칙·계약서 보존 (즉시)</strong> — 정년연장협약·1년 갱신 조항·계약직 전환 계약서.</li>\n<li><strong>2단계 — 동종 직원 처우 비교 자료 (1~2주)</strong> — 같은 시기 정년 도달 동료의 갱신 결과·근로 조건.</li>\n<li><strong>3단계 — 후임 신규 채용 정황 자료 (2주)</strong> — 본인 후임 채용 공고·인수인계 자료·신규 인원 배치.</li>\n<li><strong>4단계 — 노동위 구제신청 (재계약 거부일 3개월 내)</strong> — 갱신기대권 + 합리적 이유 부재 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정년 후 재계약 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기대권·형평성·사유 갈래입니다.</strong></p>\n<ul>\n<li><strong>단체협약·취업규칙 정년연장 조항</strong></li>\n<li><strong>정년 후 계약직 전환 근로계약서</strong></li>\n<li><strong>1년간 평가·근태 자료 (결격 부재 입증)</strong></li>\n<li><strong>재계약 거부 통보서·사유서</strong></li>\n<li><strong>같은 시기 정년 도달 동료의 갱신 결과 자료</strong></li>\n<li><strong>본인 후임 신규 채용 공고·인수인계 자료</strong></li>\n<li><strong>회사 재무제표·경영 상황 자료 (경영상 사정 반박)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동종 직원 갱신 + 본인만 거부 + 후임 신규 채용 3요소가 결합되면 \'경영상 사정\' 명목의 거부 사유가 객관 입증 부재 영역으로 평가될 소지가 있는 트랙. 단체협약 정년연장 조항 + 관행 누적은 갱신기대권 핵심 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>갱신기대권 형성</strong> — 단체협약·취업규칙·관행 3요소 결합 평가.</li>\n<li><strong>동종 직원 형평성</strong> — 같은 시기 정년 동료 갱신 vs 본인 거부 격차.</li>\n<li><strong>거부 사유 합리성</strong> — \'경영상 사정\' 명목 + 후임 신규 채용 모순.</li>\n<li><strong>우선재고용 의무</strong> — 근로기준법 제25조 결합 평가 가능.</li>\n<li><strong>입증책임 전환</strong> — 갱신기대권 인정 후 거부 사유 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년·계약기간 만료 영역의 구제이익과 갱신기대권',
        summary:
          '대법원 2025두33276(대법원, 2025.10.16 선고) 영역에서 법원은 부당해고 구제신청 사건에서 근로계약 기간 만료·정년 도달 후의 구제이익 다툼 영역에서도 단체협약·취업규칙·관행에 따라 형성된 \'갱신기대권\'이 인정되는 경우 사용자의 갱신 거절은 정당한 이유가 필요하고, 동종 근로자의 처우와 거부 사유의 합리성을 종합 검토하여야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '정년연장협약 + 동종 직원 갱신 + 본인만 거부 + 후임 신규 채용 결합 시 갱신기대권 + 합리적 이유 부재 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '단체협약에 \'본인 희망 시 갱신\'이라고 돼있는데 갱신기대권이 인정되나요?',
        answer:
          '<strong>단체협약 + 관행 결합 시 갱신기대권 인정 소지가 있는 영역입니다.</strong> 협약 전문 + 과거 갱신 통계 자료 확보.',
      },
      {
        question: '같은 시기 정년 동료 3명은 갱신됐어요',
        answer:
          '<strong>동종 직원 형평성 격차는 합리적 이유 부재의 결정적 사정입니다.</strong> 동료 갱신 결과 자료 확보.',
      },
      {
        question: '회사는 \'경영상 사정\'이라는데 후임 신규 채용 공고가 떴어요',
        answer:
          '<strong>경영상 사정 명목과 신규 채용 정황의 모순이 핵심 다툼 영역입니다.</strong> 채용 공고·인수인계 자료 보존.',
      },
      {
        question: '근로기준법 제25조 우선재고용도 적용되나요?',
        answer:
          '<strong>경영상 해고 후 3년 내 동종 직무 채용 시 우선 의무 영역입니다.</strong> 동일·유사 직무 채용 정황 확인.',
      },
      {
        question: '계약직 전환 시 \'정년 1년 후 자동 종료\'에 서명했어요',
        answer:
          '<strong>관행·협약과 어긋난 일방 조항은 효력 다툼 영역입니다.</strong> 협약 우선 적용 + 의사 하자 결합 평가.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '계약직 갱신 거절 대응', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산과 청구', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-side-business-disclosure-conflict-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-side-business-disclosure-conflict-track',
    keyword: '겸업·부업 사전신고 후 해고',
    questionKeyword: '회사 규정대로 겸업·부업을 사전신고했는데 회사가 \'회사 이익 침해\'를 명목으로 해고 통보를 했어요. 다툴 수 있나요?',
    ctaKeyword: '겸업 부업 신고 후 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '겸업 사전신고 후 해고 — 5단계 직업선택·보복 다툼 | 로앤가이드',
      description:
        '회사 규정대로 겸업·부업을 사전신고했는데 해고됐다면 직업선택의 자유·근로기준법 제5조·보복성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"IT 회사 4년 차 개발자로 근무하던 중 주말·평일 야간에 개인 사이드 프로젝트(앱 개발 외주)를 시작하면서 회사 취업규칙상 \'겸업 사전신고\' 조항에 따라 인사팀에 신고했습니다. 신고 시점엔 \'본업 시간 외 + 동종 경쟁업체 X + 회사 정보 미활용\'을 명시했고 일부 승인 답변까지 받았어요. 그런데 신고 약 1개월 후 회사 측은 \'회사 이익 침해 우려\'·\'근무 집중도 저하\'를 명목으로 징계해고 통보를 했고, 본업 평가·근태에는 문제가 없었습니다. 같은 부서엔 미신고 겸업 정황이 알려진 직원도 있었지만 그들은 어떤 조치도 받지 않았어요." 근로기준법 제5조는 강제근로·차별 금지를 규정하고, 헌법 제15조는 직업선택의 자유를 보장하는 영역입니다. 겸업금지 조항이 있어도 \'본업 직무수행 저해·회사 이익 실질 침해·동종 경쟁업종\'이 객관 입증되지 않으면 일률 금지·해고는 무효 다툼이 가능한 트랙이고, 사전신고 의무를 이행한 직원에 대한 해고는 \'신고 자체에 대한 보복\' 평가 가능 영역. 피해자라면 ① 사전신고 이행 ② 본업 정상 ③ 형평성 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 신고 ② 본업 ③ 비교 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 겸업 신고 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·본업·형평성·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사전신고 이행</strong> — 취업규칙상 절차 준수 + 회사 인지·승인 자료.</li>\n<li><strong>② 본업 직무수행 정상</strong> — 평가·근태·실적 정상 범위 입증.</li>\n<li><strong>③ 회사 이익 침해 부재</strong> — 동종 경쟁업종·정보 활용·근무시간 침범 부재 입증.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 부재 + 형평성 위반 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 겸업금지 조항이 있어도 \'본업 직무수행 저해·회사 이익 실질 침해·동종 경쟁업종\' 객관 입증 없이는 일률 해고 정당성 부정 소지가 있는 영역. 미신고 겸업자 무처분 + 신고자 본인 해고 형평성 격차는 보복성 추정 강한 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고·회신 자료 보존 (즉시)</strong> — 사전신고서·인사팀 회신·승인 메일·해고 통보서.</li>\n<li><strong>2단계 — 본업 정상 자료 (1주)</strong> — 평가표·근태 기록·실적·팀장 피드백.</li>\n<li><strong>3단계 — 회사 이익 침해 부재 자료 (2주)</strong> — 사이드 프로젝트 업무 영역·근무시간 구분·정보 미활용 입증.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 정당한 이유 부재 + 형평성 위반 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">겸업 신고 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·본업·형평성 갈래입니다.</strong></p>\n<ul>\n<li><strong>겸업 사전신고서·인사팀 회신·승인 메일</strong></li>\n<li><strong>회사 취업규칙 겸업금지·신고 조항</strong></li>\n<li><strong>본업 평가표·근태 기록·실적 자료</strong></li>\n<li><strong>해고 통보서·징계위원회 자료</strong></li>\n<li><strong>사이드 프로젝트 업무 영역·계약서 (동종업종 아님 입증)</strong></li>\n<li><strong>근무시간 외 작업 입증 자료 (시간 로그·일정)</strong></li>\n<li><strong>미신고 겸업자 무처분 정황 자료 (형평성 격차)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사이드 프로젝트가 동종 경쟁업종이 아니고 본업 정보·자원을 활용하지 않은 사정이 핵심 입증. 미신고 겸업자에 대한 무처분 정황은 \'신고에 대한 보복성\' 평가의 결정적 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사전신고 이행</strong> — 취업규칙 절차 준수 + 회사 인지·승인 정황.</li>\n<li><strong>본업 정상 입증</strong> — 평가·근태·실적 정상 범위.</li>\n<li><strong>회사 이익 침해 부재</strong> — 동종 경쟁업종 X + 정보·근무시간 침범 X.</li>\n<li><strong>형평성 위반</strong> — 미신고 겸업자 무처분 vs 신고자 해고.</li>\n<li><strong>직업선택의 자유</strong> — 헌법 제15조 + 근로기준법 제5조 결합 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로기준법상 근로자성 판단과 종속관계 평가',
        summary:
          '대법원 2023두54914(대법원, 2026.01.29 선고) 영역에서 법원은 근로기준법상 근로자성 판단에서 사용종속관계의 실질을 종합 평가하여야 하고, 사용자가 직무수행과 무관한 사정(겸업·부업·외부 활동 등)을 이유로 한 해고·징계 정당성을 다투는 경우 그 사유의 객관성·합리성과 본업 직무수행 실질 저해 여부를 함께 검토하여야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '사전신고 이행 + 본업 정상 + 동종업종 아님 + 미신고자 무처분 결합 시 정당한 이유 부재 + 형평성 위반 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '회사 취업규칙에 \'겸업금지\' 조항이 있는데 일률 위반인가요?',
        answer:
          '<strong>일률 금지 조항도 합리적 제한 범위 평가 영역입니다.</strong> 본업 저해·회사 이익 침해 객관 입증 필요.',
      },
      {
        question: '사전신고했더니 \'승인\' 답변까지 받았어요',
        answer:
          '<strong>승인 정황은 회사 인지·동의의 결정적 입증입니다.</strong> 회신 메일 원본 보존이 핵심.',
      },
      {
        question: '같은 부서 미신고 겸업자는 처분이 없어요',
        answer:
          '<strong>형평성 격차는 보복성 추정의 결정적 사정입니다.</strong> 미신고자 정황 + 본인 신고 + 본인만 해고 격차 정리.',
      },
      {
        question: '사이드 프로젝트가 본업과 같은 IT 분야인데 동종업종인가요?',
        answer:
          '<strong>동종업종은 구체 직무·고객·시장 단위 평가 영역입니다.</strong> 외주 영역·고객층·경쟁 관계 자료 확보.',
      },
      {
        question: '주말·야간에만 했는데 \'근무 집중도 저하\' 사유가 인정되나요?',
        answer:
          '<strong>근무시간 외 활동의 본업 저해 입증 책임은 사용자 측 부담입니다.</strong> 본업 평가·근태 정상 입증.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
    ],
  },

  // ─── 3. dismissal-business-transfer-employment-succession-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-business-transfer-employment-succession-track',
    keyword: '사업양도 고용승계 거부',
    questionKeyword: '회사 영업양도 시 양수회사가 일부 직원만 승계하고 본인은 \'신규채용 미선발\'로 통보됐어요. 고용승계 거부로 다툴 수 있나요?',
    ctaKeyword: '사업양도 고용승계 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업양도 고용승계 거부 — 5단계 승계원칙·우선재고용 | 로앤가이드',
      description:
        '영업양도 시 일부 직원만 승계되고 본인은 미선발로 통보됐다면 고용승계 원칙·근로기준법 제25조 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중견 제조업체 7년 차로 근무하던 중 회사 전체 사업부가 다른 회사에 \'영업양도\' 방식으로 이전됐습니다. 양수회사 측은 같은 사업부 직원 중 70%만 \'신규 채용\' 형식으로 인수하고 본인 포함 30%는 \'신규채용 미선발\' 통보를 받았어요. 영업 자체(설비·계약·고객·노하우)는 그대로 이전됐고 본인은 양수 사업부의 핵심 직무를 담당했지만 \'채용 기준 미충족\'을 명목으로 배제됐습니다. 회사 측은 양도계약서에 \'양수회사의 자유로운 채용 선별권\'이 있다고 주장했고, 양도 후 양수회사는 동일·유사 직무에 신규 채용 공고를 진행했어요." 영업양도 시 원칙적으로 \'근로관계 포괄승계\'가 적용될 소지가 있는 영역이고, 양도인·양수인이 \'특정 근로자 배제 합의\'를 했더라도 그 사유가 합리적이지 않으면 무효 다툼이 가능한 트랙입니다. 또한 근로기준법 제25조 우선재고용 의무도 결합 평가 가능한 영역. 영업 실질이 그대로 이전 + 본인 핵심 직무 + 신규 채용 정황은 \'승계 회피 위장\' 다툼이 가능한 트랙. 피해자라면 ① 영업양도 실질 ② 승계 합의 ③ 직무 연속성 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 양도 ② 합의 ③ 직무 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사업양도 고용승계 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양도·합의·직무·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 영업양도 실질</strong> — 설비·계약·고객·노하우의 포괄적 이전 여부.</li>\n<li><strong>② 승계 합의 합리성</strong> — 일부 배제 합의의 객관적 사유 + 형평성.</li>\n<li><strong>③ 직무 연속성</strong> — 본인 핵심 직무 + 양수회사 신규 채용의 동일성.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 승계 회피 위장 + 우선재고용 의무 위반 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영업 실질이 포괄적으로 이전되면 근로관계 포괄승계 원칙 평가 영역. 양도인·양수인의 \'특정 근로자 배제 합의\'도 합리적 사유 부재 시 무효 다툼 가능. 양도 직후 동일·유사 직무 신규 채용 정황은 승계 회피 위장의 강한 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양도계약·통보 자료 보존 (즉시)</strong> — 양도 공지·신규채용 미선발 통보서·인사명령.</li>\n<li><strong>2단계 — 영업양도 실질 자료 (1~2주)</strong> — 설비·계약·고객·노하우 이전 정황·양도계약 전문.</li>\n<li><strong>3단계 — 직무 연속성 자료 (2주)</strong> — 본인 직무 명세서 + 양수회사 신규 채용 공고 비교.</li>\n<li><strong>4단계 — 노동위 구제신청 (통보일 3개월 내)</strong> — 양도인·양수인 공동 피청구인 + 승계 회피 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업양도 고용승계 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 양도·합의·직무 갈래입니다.</strong></p>\n<ul>\n<li><strong>영업양도계약서 (가능한 범위 입수)·양도 공지</strong></li>\n<li><strong>신규채용 미선발 통보서·사유서</strong></li>\n<li><strong>본인 직무 명세서·근로계약서·평가서</strong></li>\n<li><strong>양수회사 동일·유사 직무 신규 채용 공고</strong></li>\n<li><strong>설비·고객·계약·노하우 이전 정황 자료</strong></li>\n<li><strong>같은 사업부 승계 직원·미승계 직원 명단 비교</strong></li>\n<li><strong>승계 거부 사유 객관 입증 부재 정황</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영업양도계약서 전문은 영업비밀 사유로 비공개되는 경우가 많은 영역이라 노동위·법원 단계에서 사실조회·문서제출명령으로 확보 가능. 양수회사 신규 채용 공고와 본인 직무의 동일성이 승계 회피 위장 핵심 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>영업양도 실질</strong> — 영업의 동일성·계속성 유지 여부 종합 평가.</li>\n<li><strong>포괄승계 원칙</strong> — 양도인·양수인의 배제 합의 합리적 사유 부재 시 무효 다툼.</li>\n<li><strong>직무 연속성</strong> — 양수회사 신규 채용의 동일·유사 직무성.</li>\n<li><strong>우선재고용 의무</strong> — 근로기준법 제25조 결합 평가 가능.</li>\n<li><strong>공동 피청구인</strong> — 양도인·양수인 모두를 상대로 구제 신청 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 구제 영역과 사용자 입증책임',
        summary:
          '대법원 2024두54683(대법원, 2025.03.13 선고) 영역에서 법원은 부당해고 구제신청 사건에서 해고 정당성의 입증 책임은 사용자 측에 있고, 영업양도·합병 등 사업이전 영역에서도 근로관계의 포괄적 승계 원칙 + 일부 근로자 배제 합의의 합리적 사유 부재 시 그 효력을 부정할 수 있다는 평가 흐름이 있습니다.',
        takeaway: '영업 실질 포괄 이전 + 본인 핵심 직무 + 양수회사 신규 채용 결합 시 승계 회피 위장 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '양도계약서에 \'양수회사 자유 선별권\'이 있다는데 일률 적용되나요?',
        answer:
          '<strong>일방 합의도 합리적 사유 부재 시 무효 다툼 영역입니다.</strong> 양도계약 사실조회·문서제출명령으로 확보 가능.',
      },
      {
        question: '\'신규 채용 미선발\'이라는데 형식상 해고가 아닌가요?',
        answer:
          '<strong>실질적으로 근로관계 단절 = 해고 평가 영역입니다.</strong> 노동위 구제 대상 + 포괄승계 원칙 결합 다툼.',
      },
      {
        question: '양수회사가 동일 직무에 신규 채용 공고를 냈어요',
        answer:
          '<strong>승계 회피 위장의 결정적 사정입니다.</strong> 채용 공고 + 본인 직무 동일성 입증 자료 확보.',
      },
      {
        question: '우선재고용 의무 3년 기한이 적용되나요?',
        answer:
          '<strong>근로기준법 제25조 결합 평가 가능 영역입니다.</strong> 동종·유사 직무 신규 채용 시 의무 발생 소지.',
      },
      {
        question: '양도인·양수인 중 누구를 상대로 구제 신청하나요?',
        answer:
          '<strong>둘 다 공동 피청구인으로 신청 가능한 영역입니다.</strong> 양도·양수 책임 분배 다툼에 유리.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '정리해고 4요건', href: '/guide/dismissal/dismissal-economic-4-requirements' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산과 청구', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. dismissal-employer-bankruptcy-temp-closure-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-employer-bankruptcy-temp-closure-track',
    keyword: '경영악화 일방휴직 후 해고',
    questionKeyword: '회사가 \'경영악화\' 명목으로 무급 휴직을 일방 통보하더니 3개월 후 해고 처리했어요. 휴업수당·부당해고로 다툴 수 있나요?',
    ctaKeyword: '경영악화 휴직 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경영악화 일방휴직→해고 — 5단계 휴업수당·정당성 | 로앤가이드',
      description:
        '회사가 경영악화로 무급 휴직 일방 통보 후 해고했다면 휴업수당 70%·정리해고 4요건 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중소 유통업체 5년 차로 근무하던 중 회사가 \'코로나 후 매출 급락\'·\'경영악화\'를 명목으로 본인 포함 영업팀 전원에게 \'무급 휴직 3개월\'을 일방 통보했습니다. 휴직 동의서를 요구받았지만 본인은 거부했고, 회사는 그래도 무급 처리를 강행했어요. 3개월 후 회사는 \'경영악화 지속\'·\'사업 축소\'를 명목으로 정리해고 통보를 했고, 그 과정에서 근로자 대표 협의·해고 회피 노력·합리적 선정 기준은 형식적으로만 거쳤습니다. 같은 시기 회사는 사무직 신규 채용을 진행했고, 무급 휴직 기간 동안의 휴업수당도 지급되지 않았어요." 근로기준법 제46조는 사용자 귀책 휴업 시 평균임금 70% 이상의 휴업수당 지급 의무를 규정하는 영역이고, 동의 없는 일방 무급 휴직은 그 자체로 무효 다툼이 가능한 트랙입니다. 또한 휴직 직후의 정리해고는 \'해고 회피 노력 우회\' 정황으로 평가되어 정리해고 4요건 충족 여부가 엄격하게 검토되는 영역. 피해자라면 ① 휴업수당 ② 일방 휴직 무효 ③ 4요건 부재 ④ 부당해고 구제 ⑤ 임금체불 신고 5중 트랙이 가능한 영역. 대응은 ① 수당 ② 휴직 ③ 4요건 ④ 노동위 ⑤ 노동부 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경영악화 일방휴직→해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 수당·휴직·4요건·구제·노동부 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴업수당 청구</strong> — 근로기준법 제46조 평균임금 70% 이상.</li>\n<li><strong>② 일방 휴직 무효</strong> — 근로자 동의 부재 시 무급 휴직 효력 다툼.</li>\n<li><strong>③ 정리해고 4요건 부재</strong> — 긴박성·회피노력·공정기준·근로자 대표 협의.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 휴직 무효 + 해고 4요건 부재 결합 다툼.</li>\n<li><strong>⑤ 노동부 임금체불 신고</strong> — 휴업수당 미지급 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사용자 귀책 휴업은 평균임금 70% 이상 휴업수당 지급 의무 영역. 근로자 동의 없는 일방 무급 휴직은 무효 다툼 가능 트랙. 휴직 직후 정리해고 + 신규 채용 정황은 4요건 \'회피 노력\' 흠결의 강한 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 수당·구제·노동부 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 휴직 통보·해고 통보 자료 보존 (즉시)</strong> — 무급 휴직 통보서·동의 거부 메일·해고 통보서.</li>\n<li><strong>2단계 — 평균임금·휴업수당 계산 (1주)</strong> — 직전 3개월 평균임금 + 70% 기준 휴업수당 산정.</li>\n<li><strong>3단계 — 4요건 부재 자료 (2주)</strong> — 회사 재무·신규 채용 공고·회피 노력 부재·협의 형식 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 + 노동부 진정 (3개월 내)</strong> — 부당해고 + 휴업수당 체불 동시 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경영악화 휴직→해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 수당·휴직·4요건 갈래입니다.</strong></p>\n<ul>\n<li><strong>무급 휴직 통보서·동의 거부 메일·면담 메모</strong></li>\n<li><strong>해고 통보서·인사명령·사유서</strong></li>\n<li><strong>직전 3개월 급여명세서 (평균임금 산정)</strong></li>\n<li><strong>회사 재무제표·매출 자료 (경영악화 입증 반박)</strong></li>\n<li><strong>휴직 기간 중 신규 채용 공고·인원 변동 자료</strong></li>\n<li><strong>근로자 대표 협의 형식성 정황 (회의록·통지서)</strong></li>\n<li><strong>회피 노력 부재 자료 (희망퇴직·전환배치 미시행)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 휴업수당은 노동부 진정으로 즉시 청구 가능 영역이고, 부당해고는 노동위 구제 별도 트랙. 두 절차 병행 가능. 휴직 기간 신규 채용 정황은 \'경영악화\' 명목 + 4요건 흠결의 결정적 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>휴업수당 의무</strong> — 사용자 귀책 휴업 시 평균임금 70% 이상.</li>\n<li><strong>일방 휴직 무효</strong> — 근로자 동의 부재 시 효력 다툼.</li>\n<li><strong>4요건 흠결</strong> — 긴박성·회피노력·공정기준·근로자 대표 협의 부재.</li>\n<li><strong>회피 노력 우회</strong> — 휴직 직후 해고는 4요건 흠결의 강한 사정.</li>\n<li><strong>병행 트랙</strong> — 노동위 구제 + 노동부 진정 + 민사 동시 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불·휴업수당)</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고 4요건과 사용자 입증책임',
        summary:
          '대법원 2025두33276(대법원, 2025.10.16 선고) 영역에서 법원은 사용자의 경영상 해고가 정당성을 인정받기 위해서는 긴박한 경영상의 필요·해고 회피 노력·합리적이고 공정한 해고 기준·근로자 대표와의 성실한 협의 4요건을 모두 갖추어야 하고, 휴직·휴업 등 회피 수단의 형식적 실시 후 곧바로 이루어지는 해고에 대해서는 \'회피 노력\'의 실질적 충족 여부가 엄격하게 검토되어야 한다는 평가 흐름이 있습니다.',
        takeaway: '일방 무급 휴직 + 휴직 직후 해고 + 신규 채용 정황 결합 시 4요건 흠결 + 회피 노력 우회 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '무급 휴직 동의서에 서명 안 했는데 회사가 강행했어요',
        answer:
          '<strong>동의 부재 일방 무급 휴직은 효력 다툼 영역입니다.</strong> 휴업수당 70% 청구 + 휴직 무효 결합 다툼.',
      },
      {
        question: '휴업수당은 어떻게 계산하나요?',
        answer:
          '<strong>평균임금의 70% 이상이 기본 영역입니다.</strong> 직전 3개월 총임금 ÷ 일수로 산정.',
      },
      {
        question: '휴직 기간 회사가 신규 채용을 했어요',
        answer:
          '<strong>경영악화 명목과 모순되는 결정적 사정입니다.</strong> 신규 채용 공고·인원 변동 자료 확보.',
      },
      {
        question: '근로자 대표 협의는 했다는데 형식적이었어요',
        answer:
          '<strong>50일 전 통지 + 성실 협의 의무 영역입니다.</strong> 통지서·회의록 부재 정황이 흠결 입증.',
      },
      {
        question: '휴업수당 신고와 부당해고 구제를 동시에 해도 되나요?',
        answer:
          '<strong>별도 트랙이라 병행 가능한 영역입니다.</strong> 노동부 진정 + 노동위 구제 + 민사 동시.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '정리해고 4요건', href: '/guide/dismissal/dismissal-economic-4-requirements' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
    ],
  },
];
