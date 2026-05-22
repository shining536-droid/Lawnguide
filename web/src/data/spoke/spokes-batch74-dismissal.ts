import { SpokePage } from '../spoke-pages';

// batch74 dismissal — 5개 (2026-05-22)
//
// 고유 존재 이유:
// 1. 스타트업 인수합병(acqui-hire) 후 중복인력 정리해고 — economic-restructuring 류와 분기. 여기는 \'인수합병 직후 + 동일 직군 중복 + 인수회사·피인수회사 평가 격차 + 잔류 협상 없이 일방 통보\' 트랙. 긴박한 경영상 필요성·해고 회피 노력·합리적·공정한 기준 4요건 다툼.
// 2. 내부 비리 제보(공익신고) 후 보복성 해고 — 단순 표적해고 류와 분기. 여기는 \'공익신고자 보호법 + 부패방지권익위법 + 신고일과 해고일 시간적 근접성 + 신고 사실 인사팀 인지\' 트랙. 보복금지 + 입증책임 사용자 전환.
// 3. 임신 통보 후 시용기간 만료 부적격 — 시용기간 일반 부적격 류와 분기. 여기는 \'임신 사실 통보 + 그 직후 평가 하락·부적격 결정 + 남녀고용평등법 제11조\' 트랙. 임신·출산 차별 + 시용 평가 객관성 결합.
// 4. 가족돌봄휴직 신청 후 거부 + 해고 — 단순 휴직 분쟁 류와 분기. 여기는 \'남녀고용평등법 제22조의2 가족돌봄휴직 신청 + 사용자 거부 + 인사상 불이익(저평가·해고)\' 트랙. 신청 자체에 대한 불이익 처분 금지 + 차별·보복 다툼.
// 5. 재직 중 장애 발생 후 직무 부적격 해고 — 신규 영역. \'장애인고용촉진법 + 합리적 편의 의무 + 직무재배치 가능성 부재 입증 책임 사용자\' 트랙. 장애를 이유로 한 해고 + 합리적 편의 제공 의무 위반.

export const spokesBatch74Dismissal: SpokePage[] = [
  // ─── 1. dismissal-startup-acqui-hire-redundancy-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-startup-acqui-hire-redundancy-track',
    keyword: '스타트업 인수합병 후 중복인력 정리해고',
    questionKeyword: '다니던 스타트업이 인수합병(acqui-hire)됐는데 인수회사의 동일 직군과 중복돼 정리해고 통보를 받았어요. 다툴 수 있나요?',
    ctaKeyword: '인수합병 정리해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스타트업 인수합병 후 정리해고 — 5단계 4요건 다툼 | 로앤가이드',
      description:
        '인수합병 직후 동일 직군 중복으로 정리해고 통보를 받았다면 긴박한 경영상 필요·회피 노력·공정 기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년간 시리즈A 스타트업 백엔드 개발자로 근무하던 중 회사가 대기업 IT 계열사에 acqui-hire(인수합병) 방식으로 인수됐습니다. 인수 직후 인수회사 측은 \'중복 직군 효율화\'를 명목으로 본인 포함 백엔드팀 5명을 정리해고 대상자로 통보했고, 인수 시점엔 \'고용 승계\'를 약속하는 듯한 발언이 있었어요. 해고 협상이나 잔류 옵션 제안 없이 통보 1개월 후 해고일이 지정됐고, 인수회사 자체 백엔드 인력은 단 한 명도 줄지 않은 정황이었습니다. 회사 측은 \'경영상 필요\'와 \'동일 직군 잉여\'를 사유로 들었어요." 사용자의 경영상 해고는 근로기준법 제24조에 따라 ① 긴박한 경영상의 필요 ② 해고 회피 노력 ③ 합리적·공정한 해고 기준 ④ 근로자 대표와의 협의 4요건을 모두 갖춰야 정당성을 인정받는 영역입니다. 인수합병 직후 + 인수회사 인력 무손실 + 회피 노력 부재 정황은 4요건 입증 부재 다툼이 가능한 트랙. 피해자라면 ① 긴박성 ② 회피노력 ③ 공정기준 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 긴박성 ② 회피 ③ 기준 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 인수합병 후 정리해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 긴박성·회피·기준·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요</strong> — 인수합병으로 인한 실제 경영상 위기 입증 여부.</li>\n<li><strong>② 해고 회피 노력</strong> — 전환배치·근로시간 단축·희망퇴직·교육 전환 등 회피 시도 정황.</li>\n<li><strong>③ 합리적·공정한 해고 기준</strong> — 피인수회사 직원만 선별한 기준의 합리성·형평성.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 4요건 부재 + 근로자 대표 협의 흠결 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정리해고 4요건은 종합 충족 영역. 인수합병 직후 + 인수회사 인력 무손실 + 회피 노력 부재 시 \'긴박성\' 또는 \'회피 노력\' 흠결 인정 가능한 트랙. 4요건 입증책임은 사용자 측 부담.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 인수합병·해고 통보 자료 보존 (즉시)</strong> — 인수 공지·고용 승계 약속·해고 통보서·인사 명령.</li>\n<li><strong>2단계 — 인수회사 인력 자료 (1~2주)</strong> — 인수 전후 인수회사 백엔드팀 인원 변화·신규 채용 공고.</li>\n<li><strong>3단계 — 회피 노력 부재 자료 (2주)</strong> — 희망퇴직 미시행·전환배치 제안 부재·근로자 대표 협의 부재 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 4요건 입증 부재 + 협의 흠결 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">인수합병 후 정리해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 긴박성·회피·기준 갈래입니다.</strong></p>\n<ul>\n<li><strong>인수합병 공지·고용 승계 약속 자료 (사내 메일·언론 보도)</strong></li>\n<li><strong>해고 통보서·사유서·인사명령</strong></li>\n<li><strong>인수회사 인수 전후 백엔드 인력 변화 자료</strong></li>\n<li><strong>회사의 매출·손익·재무제표 (긴박성 입증 반박)</strong></li>\n<li><strong>희망퇴직·전환배치 공고 부재 정황 자료</strong></li>\n<li><strong>근로자 대표 협의 부재 입증 자료 (회의록·통지서)</strong></li>\n<li><strong>같은 부서 동료·인수회사 동일 직군 처우 비교</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인수합병 직후 인수회사 동일 직군 인력이 전혀 줄지 않았다는 사실이 \'긴박성·회피 노력\' 흠결의 결정 입증. 인수 시점의 \'고용 승계\' 발언도 신뢰보호 다툼 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>긴박성 흠결</strong> — 인수회사 인력 무손실 시 \'긴박한 경영상 필요\' 부정.</li>\n<li><strong>회피 노력 부재</strong> — 희망퇴직·전환배치·근로시간 단축 미시도.</li>\n<li><strong>공정 기준 흠결</strong> — 피인수회사 직원만 선별한 기준의 합리성 부정.</li>\n<li><strong>근로자 대표 협의</strong> — 50일 전 통지·성실 협의 의무 위반.</li>\n<li><strong>고용 승계 약속</strong> — 인수 시점 신뢰보호 + 별도 손해배상 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고 4요건과 사직서 제출 후 구제이익',
        summary:
          '대법원 2025두33276(대법원, 2025.10.16 선고) 영역에서 법원은 부당해고 구제신청 시 사용자의 경영상 해고의 정당성은 긴박한 경영상의 필요·해고 회피 노력·합리적이고 공정한 해고 기준·근로자 대표와의 성실한 협의 4요건을 모두 갖추어야 인정되고, 사직서 제출 후의 구제이익 다툼 영역에서도 해고 자체의 정당성 입증 책임은 사용자 측에 있다고 본 사례 흐름이 있습니다.',
        takeaway: '인수합병 직후 + 인수회사 인력 무손실 + 회피 노력 부재 시 4요건 입증 부재 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '인수합병 시점에 \'고용 승계\'를 약속했는데 직후 정리해고가 가능한가요?',
        answer:
          '<strong>고용 승계 약속은 신뢰보호 + 손해배상 별도 다툼 영역입니다.</strong> 인수 공지·사내 메일 자료 보존.',
      },
      {
        question: '인수회사 동일 직군은 한 명도 안 줄였어요',
        answer:
          '<strong>긴박성·회피 노력 흠결의 결정 입증입니다.</strong> 인수 전후 인력 비교 자료 확보.',
      },
      {
        question: '근로자 대표와의 협의 절차가 형식적이었어요',
        answer:
          '<strong>50일 전 통지 + 성실 협의 의무 위반은 절차상 흠결입니다.</strong> 통지서·회의록 부재 자료 보존.',
      },
      {
        question: '\'동일 직군 잉여\'라는 사유로 본인만 통보됐어요',
        answer:
          '<strong>합리적·공정한 기준의 부재 사정입니다.</strong> 같은 직군 인수회사 직원 처우 비교 결정 입증.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 4요건 부재 결합 다툼 가능한 영역입니다.</strong> 면담 정황 녹취·메모 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '정리해고 4요건', href: '/guide/dismissal/dismissal-economic-4-requirements' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
    ],
  },

  // ─── 2. dismissal-internal-whistleblower-retaliation-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-internal-whistleblower-retaliation-fire-track',
    keyword: '내부 비리 제보 후 보복성 해고',
    questionKeyword: '회사 내부 비리(횡령·뇌물·회계조작)를 국민권익위·내부감사에 제보했더니 곧바로 해고됐어요. 보복성으로 다툴 수 있나요?',
    ctaKeyword: '공익신고 보복해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '내부 비리 제보 후 보복 해고 — 5단계 공익신고자 보호 | 로앤가이드',
      description:
        '회사 비리 제보 직후 해고됐다면 공익신고자 보호법·부패방지권익위법·입증책임 전환 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"6년 차 회계팀에서 근무하던 중 임원 횡령·법인카드 사적 사용·매출 부풀리기 정황을 발견했고, 사내 감사실에 1차 제보 → 묵살되자 국민권익위원회 부패신고 + 금감원 분식회계 제보를 진행했습니다. 신고 약 6주 후 인사팀은 \'업무 부적격\'·\'팀워크 저해\'를 사유로 본인을 해고했고, 같은 기간 본인 외 회계팀 인원에 대한 인사조치는 없었어요. 통보서엔 추상적 사유만 적혀 있었고, 평소 인사평가는 보통 이상이었습니다. 신고 사실이 인사팀에 알려진 정황(중간관리자 발언·메신저)도 있었어요." 공익신고자 보호법 제15조·부패방지권익위법 제62조는 신고자에 대한 \'불이익 조치 금지\'를 명시하고, 신고 후 일정 기간(통상 2년) 내 불이익이 있으면 보복성 추정이 적용되어 입증책임이 사용자 측으로 전환되는 영역입니다. 신고 시점·해고 시점의 근접성 + 인사팀 인지 정황 + 추상적 해고 사유는 보복성 다툼이 가능한 트랙. 피해자라면 ① 신고 사실 ② 시간 근접성 ③ 인지 정황 ④ 부당해고 구제 ⑤ 권익위 보호조치 5중 트랙이 가능한 영역. 대응은 ① 신고 ② 근접 ③ 인지 ④ 노동위 ⑤ 권익위 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공익신고 후 보복 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·근접·인지·구제·권익위 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신고 사실 입증</strong> — 권익위·금감원·내부감사 접수 자료·신고 일자.</li>\n<li><strong>② 시간적 근접성</strong> — 신고일과 해고일 간 시간 간격 (통상 2년 내 보복 추정).</li>\n<li><strong>③ 회사 인지 정황</strong> — 인사팀·임원의 신고 사실 인지 메신저·증언.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 부재 + 보복성 다툼.</li>\n<li><strong>⑤ 권익위 보호조치 신청</strong> — 공익신고자 보호법상 보호조치·신분보장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공익신고자 보호법은 \'신고에 따른 불이익 조치\' 입증책임을 사용자 측으로 전환하는 영역. 신고·해고의 시간 근접성 + 회사 인지 정황 + 추상 사유 결합 시 보복성 추정 + 강한 다툼 가능 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·권익위 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고 접수증·해고 통보서 보존 (즉시)</strong> — 권익위 접수번호·금감원 신고증·해고 통보서.</li>\n<li><strong>2단계 — 시간 근접성 자료 (1주)</strong> — 신고일·인사 결정일·해고일 타임라인 정리.</li>\n<li><strong>3단계 — 회사 인지 정황 자료 (2주)</strong> — 인사팀·임원의 신고 사실 인지 메신저·증언·녹취.</li>\n<li><strong>4단계 — 노동위 구제신청 + 권익위 보호조치 (3개월 내)</strong> — 부당해고 + 보복 불이익 동시 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 + 형사 고소</strong> — 위자료·일실수입 + 협박·강요 형사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공익신고 후 보복 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·근접·인지 갈래입니다.</strong></p>\n<ul>\n<li><strong>권익위·금감원·내부감사 신고 접수 자료</strong></li>\n<li><strong>신고 사실 입증 자료 (신고서 사본·증빙)</strong></li>\n<li><strong>해고 통보서·인사명령·사유서</strong></li>\n<li><strong>본인 인사평가·실적·근태 자료 (직무 정상 입증)</strong></li>\n<li><strong>신고일·해고일 타임라인 정리</strong></li>\n<li><strong>인사팀·임원의 신고 사실 인지 정황 자료 (메신저·녹취)</strong></li>\n<li><strong>같은 부서 동료의 처우 비교 (본인만 표적 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 권익위 부패신고는 신원 보호 + 접수번호 발급 + 향후 보호조치 신청 자격. 노동위 구제와 권익위 보호조치는 별도 트랙이라 병행 가능한 영역. 형사 고소는 횡령·뇌물 사실관계가 별도 입증되는 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시간 근접성</strong> — 신고일과 해고일 간 시간 간격 (보복 추정 영역).</li>\n<li><strong>회사 인지 정황</strong> — 인사팀·임원의 신고 사실 인지 입증.</li>\n<li><strong>입증책임 전환</strong> — 공익신고자 보호법상 사용자 측 입증 부담.</li>\n<li><strong>추상 사유</strong> — \'업무 부적격\'·\'팀워크 저해\' 같은 추상 사유의 객관 입증 부재.</li>\n<li><strong>병행 트랙</strong> — 노동위 + 권익위 + 민사 + 형사 다중 대응 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국민권익위원회 1398 (공익신고·보호조치)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당노동행위 시 인사평가 격하·전보의 보복성 평가',
        summary:
          '서울행정법원 2024구합52434(서울행법, 2025.04.18 선고) 영역에서 법원은 부당노동행위 구제 사건에서 사용자의 인사조치(인사평가 격하·전보·해고 등)가 정당한 이유에 기한 것인지 아니면 노동조합 활동 또는 신고·제보 등 정당한 권리 행사에 대한 보복성 처분인지를 종합 평가하면서, 처분의 시기·내용·동기 등을 종합 검토하여야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '신고·해고의 시간 근접성 + 회사 인지 정황 + 추상 사유 결합 시 보복성 추정 + 다툼 강한 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '권익위 신고는 익명으로 했는데 회사가 알고 있는 것 같아요',
        answer:
          '<strong>회사 인지 정황 입증이 핵심입니다.</strong> 인사팀·임원의 인지 메신저·증언·녹취 확보.',
      },
      {
        question: '신고 후 몇 달 만에 해고됐는데 시간이 너무 길지 않나요?',
        answer:
          '<strong>통상 2년 내 불이익은 보복 추정 적용 영역입니다.</strong> 시간 근접성 + 회사 인지 + 추상 사유 종합 평가.',
      },
      {
        question: '노동위와 권익위에 동시에 신청해도 되나요?',
        answer:
          '<strong>별도 트랙이라 병행 가능한 영역입니다.</strong> 권익위 결정은 노동위·민사 사건의 보강 자료.',
      },
      {
        question: '\'업무 부적격\' 사유는 추상적이지만 평가표가 있어요',
        answer:
          '<strong>평가표의 객관성·시점·격차 종합 평가 영역입니다.</strong> 신고 전후 평가 추이 비교 결정.',
      },
      {
        question: '회사가 신고 내용 자체를 명예훼손으로 역고소 가능한가요?',
        answer:
          '<strong>공익신고자 보호법상 신원 비공개 + 책임 면제 영역입니다.</strong> 신고 사실 진실성·공익성 입증 시 면책.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
    ],
  },

  // ─── 3. dismissal-pregnancy-disclosure-probation-no-pass-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnancy-disclosure-probation-no-pass-track',
    keyword: '임신 통보 후 시용기간 부적격 해고',
    questionKeyword: '시용기간 중에 임신 사실을 회사에 알렸더니 곧바로 평가가 하락하고 \'본채용 부적격\' 통보를 받았어요. 차별 해고로 다툴 수 있나요?',
    ctaKeyword: '임신 시용 부적격 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임신 통보 후 시용 부적격 해고 — 5단계 차별·평가 다툼 | 로앤가이드',
      description:
        '시용기간 중 임신 통보 후 부적격 해고를 받았다면 남녀고용평등법 제11조 차별·시용 평가 객관성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"마케팅팀 신입으로 입사해 6개월 시용기간 평가 중 4개월 차에 임신 사실을 인사팀에 알렸습니다. 임신 전까지의 중간 평가는 \'우수\'였고 동료·팀장 피드백도 긍정적이었어요. 임신 통보 후 약 3주 만에 갑자기 평가지표 항목이 추가되고 미세한 실수에 대한 지적이 빈번해졌으며, 시용 종료 시점엔 \'태도 부적합\'·\'협업 부족\'을 사유로 본채용 거부 통보를 받았습니다. 같은 시기 입사한 비임신 동기들은 전원 본채용 됐고, 회사 인사규정에는 \'시용 평가 기준\'이 명시돼 있지 않은 정황이었어요." 시용 근로계약에서도 본채용 거절은 \'사회통념상 상당성\'을 갖춰야 정당성을 인정받는 영역이고, 임신을 이유로 한 차별적 처우는 남녀고용평등법 제11조에 따라 금지되는 영역입니다. 임신 통보 후 평가 급락 + 동기 비교 격차 + 평가 기준 부재 정황은 차별 + 평가 객관성 부재 다툼이 가능한 트랙. 피해자라면 ① 차별 추정 ② 평가 객관성 ③ 동기 비교 ④ 부당해고 구제 ⑤ 인권위 진정 5중 트랙이 가능한 영역. 대응은 ① 차별 ② 평가 ③ 동기 ④ 노동위 ⑤ 인권위 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임신 통보 후 시용 부적격 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차별·평가·동기·구제·인권위 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차별 추정</strong> — 임신 통보 시점과 평가 하락 시점의 일치성.</li>\n<li><strong>② 평가 객관성</strong> — 시용 평가 기준의 사전 명시 + 일관 적용 여부.</li>\n<li><strong>③ 동기 비교</strong> — 같은 시기 입사 비임신 동료의 본채용 처우.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 차별 다툼.</li>\n<li><strong>⑤ 인권위 진정</strong> — 남녀고용평등법 제11조 임신 차별 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시용기간이라도 본채용 거절은 \'사회통념상 상당성\' 필요 영역. 임신 통보 후 평가 급락 + 동기 비교 격차 + 평가 기준 부재 시 차별 추정 + 사회통념 상당성 부재 다툼이 가능한 트랙. 입증책임은 차별 추정 후 사용자 측 부담.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·인권위 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임신 통보·평가 자료 보존 (즉시)</strong> — 임신 통보 메일·중간 평가서·본채용 거절 통보서.</li>\n<li><strong>2단계 — 평가 시점 비교 자료 (1주)</strong> — 임신 전후 평가 격차·지적 시점 타임라인.</li>\n<li><strong>3단계 — 동기 비교 자료 (2주)</strong> — 같은 시기 입사 동료의 본채용 결과·평가 자료.</li>\n<li><strong>4단계 — 노동위 구제신청 + 인권위 진정 (3개월 내)</strong> — 부당해고 + 임신 차별 동시 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임신 통보 후 시용 부적격 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 차별·평가·동기 갈래입니다.</strong></p>\n<ul>\n<li><strong>임신 사실 통보 메일·메신저·증언</strong></li>\n<li><strong>임신 전 중간 평가서·팀장 피드백</strong></li>\n<li><strong>임신 후 평가지표 추가·지적 메일</strong></li>\n<li><strong>본채용 거절 통보서·사유서</strong></li>\n<li><strong>시용 평가 기준 부재 정황 (인사규정 미명시 입증)</strong></li>\n<li><strong>같은 시기 입사 동기 본채용 결과 자료</strong></li>\n<li><strong>의료기관 진단서 (임신 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임신 통보일과 평가 급락일의 시간적 근접성이 차별 추정의 결정적 사정. 비임신 동기 전원 본채용 사실은 동기 비교 격차의 강한 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>차별 추정</strong> — 임신 통보 시점과 평가 하락 시점의 일치성.</li>\n<li><strong>평가 객관성</strong> — 시용 평가 기준 사전 명시·일관 적용.</li>\n<li><strong>동기 비교</strong> — 같은 시기 입사 비임신 동기 전원 본채용 사실.</li>\n<li><strong>사회통념 상당성</strong> — 시용 본채용 거절의 합리적 사유 부재.</li>\n<li><strong>인권위 진정 병행</strong> — 남녀고용평등법 제11조 임신 차별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (모성보호·차별 신고)</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국가인권위원회 1331 (임신 차별 진정)</strong></li>\n<li><strong>여성가족부 콜센터 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용 근로자의 본채용 거절과 사회통념상 상당성',
        summary:
          '서울중앙지법 2023가합96954(서울중앙지법, 2025.05.01 선고) 영역에서 법원은 시용 기간 중인 근로자에 대한 본채용 거절 또는 해고가 \'사회통념상 상당성\'을 갖추어야 정당성을 인정받을 수 있고, 평가 기준의 객관성·일관성과 같은 시기 입사한 다른 근로자와의 형평성 등을 종합 검토하여야 한다고 본 사례 흐름이 있고, 헌법상 평등권·근로기준법상 차별 금지 영역과도 결합 평가가 가능한 트랙입니다.',
        takeaway: '임신 통보 후 평가 급락 + 동기 격차 + 평가 기준 부재 결합 시 사회통념 상당성 부재 + 차별 추정 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '시용기간 중인데도 부당해고 구제신청이 가능한가요?',
        answer:
          '<strong>시용도 근로계약이라 가능한 영역입니다.</strong> 사회통념 상당성 + 차별 추정 결합 다툼.',
      },
      {
        question: '평가표가 있는데 점수가 낮아요',
        answer:
          '<strong>평가 시점·기준의 객관성 다툼 영역입니다.</strong> 임신 전후 평가 격차 + 평가 기준 사전 명시 여부 결정.',
      },
      {
        question: '비임신 동기 전원이 본채용 됐어요',
        answer:
          '<strong>동기 비교 격차는 차별 추정의 결정적 사정입니다.</strong> 동기 본채용 결과 자료 확보.',
      },
      {
        question: '인사규정에 시용 평가 기준이 없어요',
        answer:
          '<strong>평가 기준 부재는 객관성 흠결의 강한 사정입니다.</strong> 인사규정 전문 + 평가 운영 정황 비교.',
      },
      {
        question: '인권위 진정과 노동위 구제신청을 동시에 해도 되나요?',
        answer:
          '<strong>별도 트랙이라 병행 가능한 영역입니다.</strong> 인권위 결정은 노동위·민사 사건의 보강 자료.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '시용기간 부적격 대응', href: '/guide/dismissal/dismissal-trial-period-termination-response' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
    ],
  },

  // ─── 4. dismissal-elderly-care-leave-request-deny-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-elderly-care-leave-request-deny-fire-track',
    keyword: '가족돌봄휴직 신청 후 거부·해고',
    questionKeyword: '치매·중병 부모님 돌봄을 위해 가족돌봄휴직을 신청했더니 회사가 거부하고 \'근무 의지 부족\'으로 해고했어요. 다툴 수 있나요?',
    ctaKeyword: '가족돌봄휴직 보복해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가족돌봄휴직 신청 후 해고 — 5단계 휴직권·보복 다툼 | 로앤가이드',
      description:
        '가족돌봄휴직 신청 후 거부·해고됐다면 남녀고용평등법 제22조의2 휴직권·불이익 처분 금지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부모님이 갑작스러운 뇌졸중·치매 진단으로 일상 돌봄이 필요해졌고, 본인은 회사에 남녀고용평등법 제22조의2에 따른 \'가족돌봄휴직\' 90일을 신청했습니다. 회사 측은 \'대체 인력 확보 불가\'·\'부서 업무 지장\'을 사유로 거부했고, 신청 약 2주 후 \'근무 의지 부족\'·\'태도 불량\'을 사유로 해고 통보를 받았어요. 회사는 상시 30인 이상 사업장이고 가족돌봄휴직 신청 사유로 \'사업 운영에 중대한 지장\'을 입증할 객관 자료는 제출하지 않은 정황이었습니다. 같은 시기 같은 부서엔 본인 외 휴직 신청자가 없었어요." 남녀고용평등법 제22조의2는 가족돌봄휴직을 \'신청권\'으로 보장하고 사용자의 거부 사유를 \'사업 운영에 중대한 지장\'으로 제한하며, 같은 법 제22조의5는 휴직 신청·사용을 이유로 한 불이익 처분(해고·전보·인사평가 격하)을 명시적으로 금지하는 영역입니다. 신청 직후 해고 + 거부 사유 부재 + 추상 사유 결합은 보복성 다툼이 가능한 트랙. 피해자라면 ① 신청권 ② 거부 사유 ③ 시간 근접성 ④ 부당해고 구제 ⑤ 노동부 신고 5중 트랙이 가능한 영역. 대응은 ① 신청 ② 거부 ③ 근접 ④ 노동위 ⑤ 노동부 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 가족돌봄휴직 신청 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청권·거부·근접·구제·노동부 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신청권 보장</strong> — 남녀고용평등법 제22조의2 가족돌봄휴직 신청권.</li>\n<li><strong>② 거부 사유 객관성</strong> — \'사업 운영에 중대한 지장\' 입증 부재 평가.</li>\n<li><strong>③ 시간적 근접성</strong> — 신청일과 해고일 간 시간 간격 (보복성 추정).</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 차별·보복 다툼.</li>\n<li><strong>⑤ 노동부 신고</strong> — 가족돌봄휴직 거부·불이익 처분 행정 신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가족돌봄휴직은 \'사용자의 허가\'가 아닌 \'근로자의 신청권\' 영역. 거부 사유는 \'사업 운영에 중대한 지장\'으로 엄격 제한되고 입증책임 사용자 측 부담. 신청 후 불이익 처분은 명시적 금지 영역이라 보복성 다툼 강한 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·노동부 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 휴직 신청서·거부 회신 보존 (즉시)</strong> — 신청서 사본·거부 사유 회신·면담 메모.</li>\n<li><strong>2단계 — 가족 돌봄 필요성 자료 (1주)</strong> — 부모님 진단서·요양 등급·돌봄 필요 입증.</li>\n<li><strong>3단계 — 사업 지장 부재 자료 (2주)</strong> — 부서 인력·업무 분담 가능성·대체 인력 채용 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 + 노동부 신고 (3개월 내)</strong> — 부당해고 + 휴직권 침해 동시 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가족돌봄휴직 신청 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청·거부·근접 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족돌봄휴직 신청서·거부 회신·면담 메모</strong></li>\n<li><strong>부모님 진단서·요양 등급·돌봄 필요 입증 자료</strong></li>\n<li><strong>가족관계증명서 (대상 가족 입증)</strong></li>\n<li><strong>해고 통보서·인사명령·사유서</strong></li>\n<li><strong>신청일·해고일 타임라인 정리</strong></li>\n<li><strong>부서 인력·업무 분담 가능성 자료</strong></li>\n<li><strong>회사 취업규칙·인사규정 (휴직 운영 조항)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 거부 사유로 \'사업 운영 중대 지장\'을 주장해도 그 입증은 사용자 측 부담. 부서 인력·대체 채용·업무 분담 정황 자료가 \'중대 지장 부재\'의 핵심 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신청권 보장</strong> — 휴직은 신청권이지 사용자 재량 허가가 아닌 영역.</li>\n<li><strong>거부 사유 객관성</strong> — \'사업 운영 중대 지장\' 입증 책임은 사용자 측 부담.</li>\n<li><strong>시간 근접성</strong> — 신청과 해고의 근접성은 보복 추정의 핵심 사정.</li>\n<li><strong>불이익 처분 금지</strong> — 신청·사용을 이유로 한 해고·전보·평가 격하 명시적 금지.</li>\n<li><strong>병행 트랙</strong> — 노동위 + 노동부 + 민사 다중 대응 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (가족돌봄휴직 거부·보복 신고)</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>여성가족부 콜센터 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 금전보상 영역과 사용자 입증책임',
        summary:
          '대법원 2024두54683(대법원, 2025.03.13 선고) 영역에서 법원은 부당해고 구제신청 사건에서 사용자가 해고를 취소하고 원직복직 및 임금 상당액을 지급한 경우의 구제이익 다툼 영역에서도, 해고 자체의 정당성 입증 책임은 사용자 측에 있고, 해고가 휴직·산전후휴가·가족돌봄휴직 등 법령상 신청권 행사에 대한 보복적 성격을 띠는 경우 그 평가가 엄격해진다고 본 사례 흐름이 있습니다.',
        takeaway: '가족돌봄휴직 신청 후 거부 + 해고는 보복성 추정 + 신청권 침해 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '회사가 거부 사유로 \'대체 인력 불가\'라고 했어요',
        answer:
          '<strong>거부 사유 입증 책임은 사용자 측 부담입니다.</strong> 부서 인력·대체 채용 정황 자료가 결정 입증.',
      },
      {
        question: '신청 후 2주 만에 해고됐어요',
        answer:
          '<strong>시간 근접성은 보복 추정의 결정적 사정입니다.</strong> 신청일·해고일 타임라인 정리 결정.',
      },
      {
        question: '회사가 30인 미만 사업장인데 휴직권이 적용되나요?',
        answer:
          '<strong>가족돌봄휴직은 사업장 규모와 무관하게 적용되는 영역입니다.</strong> 사업장 규모 확인 + 휴직권 보장.',
      },
      {
        question: '\'근무 의지 부족\'이라는 추상 사유로 해고됐어요',
        answer:
          '<strong>추상 사유는 객관 입증 부재 영역입니다.</strong> 평소 인사평가·근태 자료가 반박 입증.',
      },
      {
        question: '노동위와 노동부 신고를 동시에 해도 되나요?',
        answer:
          '<strong>별도 트랙이라 병행 가능한 영역입니다.</strong> 노동부 행정 신고는 노동위 사건의 보강 자료.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
    ],
  },

  // ─── 5. dismissal-disability-acquired-mid-employment-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disability-acquired-mid-employment-fire-track',
    keyword: '재직 중 장애 발생 후 직무 부적격 해고',
    questionKeyword: '재직 중 사고·질병으로 시각·청각·지체 장애가 생겼는데 회사가 \'직무 수행 불가\'를 사유로 해고했어요. 다툴 수 있나요?',
    ctaKeyword: '재직 중 장애 발생 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재직 중 장애 발생 해고 — 5단계 합리적 편의·차별 다툼 | 로앤가이드',
      description:
        '재직 중 장애 발생 후 \'직무 부적격\' 해고됐다면 장애인고용촉진법 + 합리적 편의 의무 + 직무재배치 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제조업체 사무직 8년 차에 갑작스러운 출퇴근길 교통사고로 시각 장애 3급 판정을 받았습니다. 산재로 인정되지는 않았지만 의사 진단서 + 장애인 등록을 했고, 회사 측에 \'화면 확대 보조기·음성 안내 소프트웨어 등 합리적 편의\'를 요청했어요. 회사는 \'직무 수행 불가\'·\'다른 직원 업무 부담 증가\'를 사유로 1개월 후 통상해고 통보를 했고, 직무재배치·근로시간 조정·재택근무 가능성 등은 검토되지 않았습니다. 회사는 상시 50인 이상 사업장으로 장애인 의무고용률 대상이었고, 본인은 8년간 동일 직무에서 우수 평가를 받아 왔어요." 장애인고용촉진법 제5조·근로기준법 제6조·국가인권위원회법 등은 장애를 이유로 한 차별적 처우를 금지하고, 사용자는 장애 근로자에 대한 \'합리적 편의(reasonable accommodation)\' 제공 의무가 있으며 그 면제는 \'과도한 부담\'을 사용자 측이 입증해야 인정되는 영역입니다. 합리적 편의 검토 부재 + 직무재배치 부재 + 일방 해고는 차별·정당성 부재 다툼이 가능한 트랙. 피해자라면 ① 차별 ② 합리적 편의 ③ 재배치 ④ 부당해고 구제 ⑤ 인권위 진정 5중 트랙이 가능한 영역. 대응은 ① 차별 ② 편의 ③ 재배치 ④ 노동위 ⑤ 인권위 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 재직 중 장애 발생 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차별·편의·재배치·구제·인권위 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차별 추정</strong> — 장애 발생 후 평가 격하·해고의 인과관계.</li>\n<li><strong>② 합리적 편의 의무</strong> — 보조기·소프트웨어·근로시간 조정 검토 부재.</li>\n<li><strong>③ 직무재배치 가능성</strong> — 다른 직무·재택근무·근로시간 단축 검토 부재.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 차별 다툼.</li>\n<li><strong>⑤ 인권위 진정</strong> — 장애인차별금지법 + 인권위법 차별 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 장애 발생 후 해고는 \'직무 수행 가능성 + 합리적 편의 + 재배치 가능성\' 종합 평가 영역. \'과도한 부담\' 입증 책임은 사용자 측 부담이고, 합리적 편의 검토 부재 + 재배치 부재 + 일방 해고는 차별 추정 + 정당성 부재 다툼 강한 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·인권위 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 장애 진단·해고 자료 보존 (즉시)</strong> — 의사 진단서·장애인 등록증·해고 통보서.</li>\n<li><strong>2단계 — 합리적 편의 요청 자료 (1~2주)</strong> — 보조기·소프트웨어 요청 메일·회사 회신.</li>\n<li><strong>3단계 — 재배치 가능성 자료 (2주)</strong> — 부서 내 다른 직무·재택근무 가능성·근로시간 단축 옵션.</li>\n<li><strong>4단계 — 노동위 구제신청 + 인권위 진정 (3개월 내)</strong> — 부당해고 + 장애 차별 동시 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">재직 중 장애 발생 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 차별·편의·재배치 갈래입니다.</strong></p>\n<ul>\n<li><strong>의사 진단서·장애인 등록증</strong></li>\n<li><strong>합리적 편의 요청 메일·회사 회신 자료</strong></li>\n<li><strong>해고 통보서·인사명령·사유서</strong></li>\n<li><strong>이전 인사평가·실적 자료 (직무 수행 능력 입증)</strong></li>\n<li><strong>부서 내 다른 직무·재택근무 가능성 자료</strong></li>\n<li><strong>장애인 의무고용률 사업장 입증 자료</strong></li>\n<li><strong>한국장애인고용공단 보조기·지원금 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한국장애인고용공단에는 \'보조기기 지원\'·\'근로지원인\'·\'근무환경 개선 지원금\' 등 사용자 부담 완화 제도가 있어 \'과도한 부담\' 입증 자체가 좁아지는 영역. 회사가 이런 지원제도 검토 부재 시 합리적 편의 의무 위반 입증 강한 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>차별 추정</strong> — 장애 발생 후 평가 격하·해고의 인과관계.</li>\n<li><strong>합리적 편의 의무</strong> — 보조기·소프트웨어·근로시간 조정 검토 부재.</li>\n<li><strong>과도한 부담 입증</strong> — 입증 책임은 사용자 측 부담.</li>\n<li><strong>재배치 가능성</strong> — 다른 직무·재택근무·근로시간 단축 검토 부재.</li>\n<li><strong>지원제도 활용</strong> — 한국장애인고용공단 지원금 검토 부재는 합리적 편의 위반 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>한국장애인고용공단 1588-1519</strong></li>\n<li><strong>국가인권위원회 1331 (장애 차별 진정)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당노동행위 구제 영역과 시간적 연속성',
        summary:
          '대법원 2023두41864(대법원, 2025.04.03 선고) 영역에서 법원은 부당노동행위 구제 사건에서 사용자의 인사 조치·해고가 단일성·동일성·동종성·시간적 연속성을 갖춘 일련의 행위로 평가되는 경우 부당노동행위 구제 신청 기간 산정의 기준이 달라질 수 있고, 정당한 권리 행사 또는 법령상 보호 영역(임신·장애·휴직 등)과 결합된 처분의 평가가 엄격해진다고 본 사례 흐름이 있습니다.',
        takeaway: '장애 발생 후 합리적 편의 검토 부재 + 재배치 부재 + 일방 해고는 차별 + 정당성 부재 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '장애가 있다고 회사가 직무 수행이 불가능하다고 일방 결정할 수 있나요?',
        answer:
          '<strong>합리적 편의 + 재배치 가능성 검토 의무가 있는 영역입니다.</strong> 검토 부재는 차별·정당성 부재 사정.',
      },
      {
        question: '회사가 \'다른 직원 부담 증가\'를 사유로 들었어요',
        answer:
          '<strong>\'과도한 부담\' 입증 책임은 사용자 측 부담입니다.</strong> 한국장애인고용공단 지원제도 검토 부재 시 위반.',
      },
      {
        question: '의무고용률 사업장이라 더 강하게 보호받나요?',
        answer:
          '<strong>의무고용 + 합리적 편의 의무는 별도 영역입니다.</strong> 의무고용률 대상이면 차별 평가 더 엄격.',
      },
      {
        question: '인권위 진정과 노동위 구제신청을 동시에 해도 되나요?',
        answer:
          '<strong>별도 트랙이라 병행 가능한 영역입니다.</strong> 인권위 결정은 노동위·민사 사건의 보강 자료.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 차별 결합 다툼 가능한 영역입니다.</strong> 면담 정황 녹취·메모 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '징계 청문 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '권고사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
    ],
  },
];
