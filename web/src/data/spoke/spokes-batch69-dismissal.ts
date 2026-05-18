import { SpokePage } from '../spoke-pages';

// batch69 dismissal — 5개 (2026-05-19)
//
// 고유 존재 이유:
// 1. 난임치료휴가 사용 후 해고 — 남녀고용평등법 제18조의3 난임치료휴가(연간 3일, 1일 유급) 사용 그 자체를 사유로 한 해고. 기존 maternity-return-*, pregnancy-* 트랙(출산·임신 자체)과 분기 — 난임치료 시술·휴가 자체가 사유로 평가된 경우.
// 2. 리텐션보너스 반환 요구 후 사직 압박 — 입사 후 정착·체류 약정으로 받은 리텐션보너스(stay bonus) 반환 압박 + 사직 종용 결합 트랙. 기존 retirement-honorary-quit-extra-claim-waiver-invalid 와 분기 — 퇴직 시점 합의 무효가 아닌 \'재직 중 보너스 반환 요구 + 해고/사직 압박\' 변형.
// 3. 취업규칙 부업금지 위반 명목 해고 — 근무외 시간 부업(영업비밀 아님) 발각 → 충실의무·취업규칙 위반 명목 해고. 기존 confidentiality-trade-secret-relief 와 분기 — 영업비밀이 아닌 \'단순 동종업계 부업·아르바이트\' 트랙.
// 4. 조사 명목 무기한 대기발령 후 사직 압박 — 기존 internal-investigation-forced-statement-track 와 분기 — 진술 강요가 아닌 \'징계조사 명목 무기한 대기발령 + 사직 종용\' 자체 부당 트랙. 대기발령 정당성·기간 다툼.
// 5. 경업금지 약정 위반 명목 해고 — confidentiality-trade-secret 와 분기 — 영업비밀이 아닌 \'단순 경업금지 약정(동종업계 이직 금지)\' 위반 명목 해고. 약정 유효성·합리성 다툼.

export const spokesBatch69Dismissal: SpokePage[] = [
  // ─── 1. dismissal-fertility-treatment-leave-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fertility-treatment-leave-fire-track',
    keyword: '난임치료휴가 사용 후 해고',
    questionKeyword: '난임치료를 위해 남녀고용평등법상 난임치료휴가를 신청·사용했더니, 회사가 \'잦은 결근·업무 차질\'을 사유로 해고 통보를 했어요.',
    ctaKeyword: '난임치료휴가 사용 후 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '난임치료휴가 후 해고 — 5단계 차별·불이익 다툼 | 로앤가이드',
      description:
        '난임치료휴가 사용 후 해고됐다면 휴가권 보장·불리한 처우 금지·차별 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"체외수정 시술 일정을 맞추기 위해 남녀고용평등법상 난임치료휴가(연간 3일, 1일 유급)를 처음 신청했고, 추가로 시술일 전후 연차도 일부 사용했습니다. 그런데 인사팀에서 \'시술 일정 때문에 업무 흐름이 끊긴다·동료 부담이 크다\'며 면담을 반복했고, 결국 한 달 뒤 \'잦은 결근·업무 차질\'을 사유로 해고 통보를 받았어요. 같은 부서 동료들의 일반 연차 사용은 문제 삼지 않으면서 본인 시술 휴가만 문제 삼는 분위기였고, 시술 사실을 안 뒤로는 회의 배제·중요 업무 제외도 이어졌습니다." 남녀고용평등법 제18조의3은 사업주가 근로자의 난임치료휴가 사용을 이유로 해고·징계 등 불리한 처우를 하지 못하도록 정하는 영역이고, 같은 법은 혼인·임신·출산 등 모성보호·일·가정 양립과 관련된 사유로 차별적 대우를 하는 운영을 금지하는 트랙입니다. 피해자라면 ① 휴가권 정당성 ② 불리한 처우 금지 ③ 차별적 대우 ④ 부당해고 구제 ⑤ 손해배상 5중 트랙이 가능한 영역. 대응은 ① 휴가 ② 불이익 ③ 차별 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 난임치료휴가 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴가·불이익·차별·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴가 사용 정당성</strong> — 남녀고용평등법상 난임치료휴가 + 진단서·시술확인서 정상 절차.</li>\n<li><strong>② 불리한 처우 금지 위반</strong> — 휴가 사용을 사실상의 해고 사유로 삼은 정황.</li>\n<li><strong>③ 차별적 대우</strong> — 동료의 일반 연차는 문제 삼지 않고 시술 휴가만 문제 삼은 패턴.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 모성·차별 위반 결합.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 난임치료휴가는 법정 보장 휴가 영역. 사용을 이유로 한 해고·불이익은 \'불리한 처우\' 그 자체로 평가될 여지가 있는 트랙입니다. 같은 시기 동료의 연차 사용과의 비교 입증이 결정 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 휴가·시술 자료 보존 (즉시)</strong> — 휴가 신청서·승인 통보·진단서·시술확인서.</li>\n<li><strong>2단계 — 면담·발언 기록 (1~2주)</strong> — 인사팀 면담 메모·\"업무 차질\" 발언 녹취·메신저.</li>\n<li><strong>3단계 — 동료 휴가 사용 비교 자료 (2주)</strong> — 동료 연차·병가 사용 패턴과 처우 차이.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 모성·차별 위반.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">난임치료휴가 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴가·불이익·차별 갈래입니다.</strong></p>\n<ul>\n<li><strong>난임치료휴가 신청서·승인 통보 자료</strong></li>\n<li><strong>진단서·시술확인서·예약 일정표</strong></li>\n<li><strong>휴가 사용 전후 인사팀 면담 메모·녹취</strong></li>\n<li><strong>회의 배제·중요 업무 제외 정황 자료</strong></li>\n<li><strong>같은 부서 동료의 연차·병가 사용 패턴 자료</strong></li>\n<li><strong>해고 통보서·사유서·인사위 회의록</strong></li>\n<li><strong>취업규칙·단체협약 (휴가·해고 조항)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시술 자료(진단서·예약 일정표)는 의료기관 발급 즉시 사본 보존. 시술 사실을 회사가 안 시점 전후의 평가·배치 변화 비교가 핵심 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>휴가 정당성</strong> — 법정 휴가 사용 자체는 결근 평가 대상 아닌 영역.</li>\n<li><strong>불이익 인과관계</strong> — 시술 사실을 안 시점 전후 처우 변화 비교 사정.</li>\n<li><strong>차별적 운영</strong> — 동료의 연차 사용은 문제 삼지 않은 패턴이 차별 자인.</li>\n<li><strong>해고 사유의 진실성</strong> — \"업무 차질\" 명목 사유의 객관적 입증 부재.</li>\n<li><strong>증명책임</strong> — 차별적 처우 부정 입증은 사용자 측 부담 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (모성보호·차별 신고)</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국가인권위원회 1331 (차별 진정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 남녀의 차별적 대우와 직제개편을 통한 불리한 처우',
        summary:
          '대법원 2006두3476(대법원, 2006.07.28 선고) 영역에서 법원은 남녀고용평등법 제2조 제1항·제11조 제1항 및 근로기준법 제5조상의 \'남녀의 차별적 대우\'란 합리적인 이유 없이 남녀를 다르게 대우하는 것을 의미하고, 행정직 6직급으로 근무하는 여성근로자를 모두 상용직으로 편입하여 기존에 허용되던 상용직 내에서의 승진조차 전혀 허용하지 아니한 직제개편조치가 합리적 이유 없이 행정직 6직급 여성근로자들에게만 불리하게 승진을 제한하는 차별적 대우에 해당한다고 본 사례 흐름이 있습니다.',
        takeaway: '합리적 이유 없는 불리한 처우 = 차별적 대우. 난임치료휴가 사용 시점 전후의 평가·처우 격차도 같은 구조로 평가될 여지가 있는 사정.',
      },
    ],
    faq: [
      {
        question: '난임치료휴가는 며칠까지 보장되나요?',
        answer:
          '<strong>남녀고용평등법상 연간 3일(1일 유급) 보장 영역입니다.</strong> 사용을 이유로 한 불리한 처우는 금지 사정.',
      },
      {
        question: '진단서 외에 추가로 회사에 알려야 하는 정보가 있나요?',
        answer:
          '<strong>휴가 사유 입증 범위를 넘는 정보 요구는 부적정 사정입니다.</strong> 시술 일정·진단서만으로 충분한 영역.',
      },
      {
        question: '\"잦은 결근으로 업무에 차질\"이라는 회사 주장은 어떻게 다투나요?',
        answer:
          '<strong>법정 휴가 사용은 결근 평가 대상이 아닌 영역입니다.</strong> 동료 연차 사용과의 비교 자료가 결정 사정.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 차별 결합 다툼 가능한 영역입니다.</strong> 면담 정황·발언 녹취 보존이 출발점.',
      },
      {
        question: '인권위 진정과 노동위 구제 동시 가능한가요?',
        answer:
          '<strong>병행 가능한 영역입니다.</strong> 노동위는 복직·임금, 인권위는 차별 시정 권고로 트랙이 달라요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '임신 사실 알린 후 권고사직', href: '/guide/dismissal/dismissal-pregnancy-announce-immediate-pressure-track' },
      { label: '출산휴가 복직 후 해고', href: '/guide/dismissal/dismissal-maternity-return-fired' },
      { label: '병가 중 해고', href: '/guide/dismissal/dismissal-during-sick-leave' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 2. dismissal-retention-bonus-clawback-resign-pressure-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-retention-bonus-clawback-resign-pressure-track',
    keyword: '리텐션보너스 반환 요구 후 사직 압박',
    questionKeyword: '입사 시 받은 리텐션보너스(체류 보너스) 반환을 요구받았고 동시에 사직 종용을 받고 있어요. 어떻게 해야 하나요?',
    ctaKeyword: '리텐션보너스 반환 사직 압박 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '리텐션보너스 반환 + 사직 압박 — 5단계 묵시적 해고 다툼 | 로앤가이드',
      description:
        '리텐션보너스 반환 요구와 사직 압박을 받았다면 약정 효력·묵시적 해고·의사 하자 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 당시 \'3년 의무 재직\' 조건으로 리텐션보너스 3,000만원을 일시 지급받았고, 약정서에는 중도 퇴직 시 잔여 기간에 비례해 반환한다고 적혀 있었습니다. 그런데 입사 1년 6개월 시점에 회사가 사업 부진을 이유로 \'리텐션보너스 잔여분을 반환하고 자진 퇴직하라\'는 통보를 했고, 거절하자 부서 변경·직책 회수·근태 감사 등이 이어졌어요. 면담에서는 \'어차피 나가게 될 텐데 빨리 결정하라\'는 말이 반복됐고, 사직서를 제출하지 않으면 해고 절차를 진행하겠다는 압박도 있었습니다." 해고는 명칭이나 형식에 관계없이 근로자의 의사에 반하여 사용자의 일방적 의사에 의해 이루어지는 모든 근로계약관계 종료를 의미하는 영역이고, 묵시적 의사표시에 의한 해고가 있는지는 노무 수령 거부 경위·근로자 반응 등 제반 사정을 종합해 판단하는 트랙입니다. 피해자라면 ① 리텐션 약정 효력 ② 반환 요구의 적법성 ③ 묵시적 해고·의사 하자 ④ 부당해고 구제 ⑤ 민사 보너스 반환 다툼 5중 트랙이 가능한 영역. 대응은 ① 약정 ② 반환 ③ 묵시 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 리텐션보너스 반환·사직 압박 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·반환·묵시·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 리텐션 약정 효력</strong> — 약정서 문언·반환 비율·자발성 요건.</li>\n<li><strong>② 반환 요구의 적법성</strong> — 회사 사유 퇴직 압박과 결합 시 약정 취지 위배.</li>\n<li><strong>③ 묵시적 해고·의사 하자</strong> — 사직 종용·부서 변경·근태 감사 결합 시 묵시 해고 사정.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고·사직 의사 하자 다툼.</li>\n<li><strong>⑤ 민사 보너스 반환 다툼</strong> — 약정 무효·감액·반환금 채무부존재.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사 사유로 퇴직을 압박하면서 근로자 의무에 기초한 리텐션 반환을 요구하는 운영은 약정 취지와 부합하지 않을 여지가 있는 영역. 묵시적 해고 + 약정 무효 트랙 결합 가능합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·지급 자료 보존 (즉시)</strong> — 리텐션 약정서·지급 통장 내역·세무 자료.</li>\n<li><strong>2단계 — 사직 압박 자료 (1~2주)</strong> — 면담 녹취·\"어차피 나가게 될\" 발언·반환 요구 공문.</li>\n<li><strong>3단계 — 보복 인사 정황 (2주)</strong> — 부서 변경·직책 회수·근태 감사 통보서.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일·사직일 3개월 내)</strong> — 부당해고 + 의사 하자.</li>\n<li><strong>5단계 — 민사 약정 무효·반환금 채무부존재 확인</strong> — 보너스 반환 다툼 별도 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">리텐션보너스 반환 + 사직 압박 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·압박·보복 갈래입니다.</strong></p>\n<ul>\n<li><strong>리텐션보너스 약정서·근로계약서 별첨</strong></li>\n<li><strong>보너스 지급 내역·세무 자료 (원천징수영수증 등)</strong></li>\n<li><strong>회사의 반환 요구 공문·메일</strong></li>\n<li><strong>사직 종용 면담 메모·녹취·메신저 캡처</strong></li>\n<li><strong>부서 변경·직책 회수 통보서</strong></li>\n<li><strong>근태 감사·평가 변동 자료</strong></li>\n<li><strong>회사 사업 부진 관련 공식 발표·내부 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 리텐션 약정은 \"근로자 자발 퇴직\"을 전제로 반환의무가 인정되는 구조가 많은 영역. 회사 사유 퇴직 압박과 결합하면 약정 취지 위배 다툼이 가능한 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>약정 문언 해석</strong> — \"자발 퇴직 시 반환\" 문언과 회사 사유 압박의 충돌.</li>\n<li><strong>묵시적 해고</strong> — 사직 종용·보복 인사 결합 시 묵시 해고 사정.</li>\n<li><strong>의사 하자</strong> — 반환 압박은 강박·기망 요소로 평가될 영역.</li>\n<li><strong>약정 효력 다툼</strong> — 위약금 약정 금지·과도한 부담 다툼 별도 트랙.</li>\n<li><strong>증명책임</strong> — 해고·사직 압박 입증은 근로자 측, 약정 효력은 사용자 측.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 묵시적 의사표시에 의한 해고의 판단 기준',
        summary:
          '대법원 2022두57695(대법원, 2023.02.02 선고) 영역에서 법원은 해고란 실제 사업장에서 불리는 명칭이나 절차에 관계없이 근로자의 의사에 반하여 사용자의 일방적 의사에 의하여 이루어지는 모든 근로계약관계의 종료를 의미하고, 묵시적 의사표시에 의한 해고가 있는지는 사용자의 노무 수령 거부 경위와 방법·노무 수령 거부에 대하여 근로자가 보인 태도 등 제반 사정을 종합적으로 고려하여 사용자가 근로관계를 일방적으로 종료할 확정적 의사를 표시한 것으로 볼 수 있는지에 따라 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '\"사표 쓰라\" 반복 + 사직 종용 + 보복 인사 결합 시 묵시적 해고로 평가될 여지가 있는 사정. 리텐션 반환 압박도 같은 구조 검토.',
      },
    ],
    faq: [
      {
        question: '리텐션보너스 약정서에 \'무조건 반환\' 조항이 있어도 다툼 가능한가요?',
        answer:
          '<strong>약정 문언과 실제 퇴직 사유의 부합 여부 다툼 영역입니다.</strong> 회사 사유 압박은 약정 취지 위배 사정.',
      },
      {
        question: '아직 사직서는 안 냈는데 어떤 조치부터 해야 하나요?',
        answer:
          '<strong>사직 종용 자료·반환 요구 공문 보존이 우선 영역입니다.</strong> 사직 전 노무 상담 권장.',
      },
      {
        question: '근태 감사·부서 변경은 어떻게 다투나요?',
        answer:
          '<strong>사직 압박과 결합 시 보복 인사 + 묵시 해고 사정입니다.</strong> 통보서·내부 메모 보존 결정.',
      },
      {
        question: '노동위 구제 신청 시 보너스 반환 분쟁도 함께 해결되나요?',
        answer:
          '<strong>노동위는 복직·임금 중심 영역, 보너스 반환은 민사 별도 트랙입니다.</strong> 두 절차 병행 검토.',
      },
      {
        question: '\"자진 퇴직하면 반환 면제\"라고 합니다',
        answer:
          '<strong>면제 조건부 사직 종용도 의사 하자 사정으로 평가될 영역입니다.</strong> 면담 녹취 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '권고사직 거부 압박', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
      { label: '구조적 강요사직', href: '/guide/dismissal/dismissal-constructive-forced-resignation' },
      { label: '사직서 서명 후 철회', href: '/guide/dismissal/dismissal-resignation-letter-signed-revoke-window' },
      { label: '관리직 강등 후 사직 압박', href: '/guide/dismissal/dismissal-management-position-demotion-resign-pressure-track' },
    ],
  },

  // ─── 3. dismissal-second-job-rule-violation-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-second-job-rule-violation-fire-track',
    keyword: '취업규칙 부업금지 위반 명목 해고',
    questionKeyword: '주말·퇴근 후 시간에 동종업계 부업을 하다 발각됐고, 취업규칙 부업금지 조항 위반을 사유로 해고됐어요.',
    ctaKeyword: '취업규칙 부업금지 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '취업규칙 부업금지 해고 — 5단계 정당한 이유 다툼 | 로앤가이드',
      description:
        '근무외 시간 부업을 사유로 해고됐다면 취업규칙 효력·정당한 이유·상당성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본업 외 시간(주말·퇴근 후 야간)에 동종업계는 아닌 다른 분야 사이드 프로젝트를 했는데, 회사가 \'취업규칙 부업금지 조항 위반\'을 사유로 해고 통보를 했습니다. 부업으로 인한 근무 차질·영업비밀 누설·고객 이탈 같은 실제 손해는 없었고, 본업 평가도 평이한 \'중\' 수준이었어요. 회사는 \'규정 위반 자체로 신뢰관계 파탄\'이라며 즉시 해고를 단행했는데, 사전 시정 요구·경고·정직 등 단계적 징계 절차는 거치지 않았습니다." 근기법 제23조 제1항은 \'정당한 이유 없는 해고\'를 금지하는 영역이고, 사용자가 취업규칙에서 정한 해고사유에 해당한다는 이유로 근로자를 해고할 때에도 별도로 정당한 이유가 있어야 하는 트랙입니다. \'사회통념상 고용관계를 계속할 수 없을 정도\'인지 판단할 때는 비위의 성질·실손해·개선 가능성·교육·전환배치 등을 종합 고려하는 영역입니다. 피해자라면 ① 부업 행위 평가 ② 취업규칙 효력 ③ 실손해·개선 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 행위 ② 규칙 ③ 손해 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 취업규칙 부업금지 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 행위·규칙·손해·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부업 행위 평가</strong> — 근무외 시간·영업비밀 무관·실손해 부재 여부.</li>\n<li><strong>② 취업규칙 효력</strong> — 부업금지 조항의 합리성·과도한 직업선택 자유 제한 다툼.</li>\n<li><strong>③ 실손해·개선 가능성</strong> — 본업 차질·고객 이탈 등 구체적 손해 입증.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 부재·상당성 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 취업규칙 위반 자체만으로는 해고 정당성이 자동 인정되지 않는 영역. 사회통념상 고용관계 유지 불가 + 사용자의 개선 기회 부여 등 종합 판단이 필요한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부업 자료·근무시간 보존 (즉시)</strong> — 부업 계약·시간 분포·본업 근무기록.</li>\n<li><strong>2단계 — 실손해 부재 자료 (1~2주)</strong> — 본업 평가·고객 이탈 없음·영업비밀 무관 입증.</li>\n<li><strong>3단계 — 절차 흠결 자료 (2주)</strong> — 사전 시정 요구·경고·정직 등 단계적 징계 부재 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 정당한 이유 + 상당성 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">취업규칙 부업금지 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 부업·규칙·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>본업 근로계약서·취업규칙 (부업금지 조항)</strong></li>\n<li><strong>부업 계약서·운영 기록·시간 분포 자료</strong></li>\n<li><strong>본업 근무기록·인사평가·실적 자료</strong></li>\n<li><strong>본업 고객·영업비밀 무관 입증 자료</strong></li>\n<li><strong>해고 통보서·사유서·인사위 회의록</strong></li>\n<li><strong>사전 경고·시정 요구·정직 등 단계 부재 정황</strong></li>\n<li><strong>같은 부서 다른 직원의 부업 사례 (있을 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부업이 본업 평가·고객·영업비밀에 영향을 주지 않았다는 입증이 핵심. 본업 평가 자료가 평이하다면 \"사회통념상 유지 불가\" 인정이 어려운 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실손해 부재</strong> — 본업 차질·고객 이탈·영업비밀 무관 시 정당성 부정 사정.</li>\n<li><strong>취업규칙 합리성</strong> — 근무외 시간 일체 금지 조항은 직업선택 자유 과도 제한 다툼.</li>\n<li><strong>단계적 징계 부재</strong> — 시정 요구·경고 없는 즉시 해고는 상당성 부정.</li>\n<li><strong>형평성</strong> — 같은 부업을 한 동료 처우와의 비교 사정.</li>\n<li><strong>비위 성질</strong> — 영업비밀 누설과 달리 단순 부업은 신뢰 파탄 정도 약함.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 해고사유와 정당한 이유',
        summary:
          '대법원 2018다253680(대법원, 2021.02.25 선고) 영역에서 법원은 근로기준법 제23조 제1항이 사용자가 근로자에게 정당한 이유 없이 해고하지 못하도록 하고 있어, 사용자가 취업규칙에서 정한 해고사유에 해당한다는 이유로 근로자를 해고할 때에도 정당한 이유가 있어야 하며, 정당성이 인정되려면 평가의 공정성·객관성 + 상대적이 아닌 절대적으로 일반적으로 기대되는 최소한 미달 + 상당 기간 지속 + 향후 개선 가능성 부재 + 사용자의 교육·전환배치 기회 부여 여부 등을 종합 판단하여 사회통념상 고용관계를 계속할 수 없을 정도여야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '취업규칙 위반 = 자동 해고 사유 아님. 사회통념상 유지 불가 + 개선 기회 종합 판단. 단순 부업도 같은 기준 적용 영역.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 \"부업 일체 금지\" 조항이 있어도 해고 사유 다툼 가능한가요?',
        answer:
          '<strong>조항 자체의 합리성 + 실손해 부재 다툼 가능한 영역입니다.</strong> 직업선택 자유 과도 제한 사정.',
      },
      {
        question: '부업이 동종업계가 아니라면 어떻게 평가되나요?',
        answer:
          '<strong>경업금지·영업비밀 무관 사정으로 정당성 부정 강한 영역입니다.</strong> 부업 분야 차이 입증이 핵심.',
      },
      {
        question: '회사가 사전 경고도 없이 즉시 해고했어요',
        answer:
          '<strong>단계적 징계 부재는 상당성 부정의 강력 사정입니다.</strong> 시정 요구·경고 부재 정황 보존.',
      },
      {
        question: '본업 평가는 \"중\" 수준이었는데 해고된 게 정당한가요?',
        answer:
          '<strong>본업 차질·실손해 부재로 \"사회통념상 유지 불가\" 인정 어려운 영역입니다.</strong> 평가 자료 확보 결정.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 해고 사유 흠결 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '영업비밀 의심 즉시 해고', href: '/guide/dismissal/dismissal-trade-secret-suspicion-immediate-fire' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '단일 위반 징계 해고', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 4. dismissal-investigation-indefinite-standby-resign-pressure-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-investigation-indefinite-standby-resign-pressure-track',
    keyword: '조사 명목 무기한 대기발령 후 사직 압박',
    questionKeyword: '\'징계조사 중\'이라며 무기한 대기발령을 받았고, 그 사이 인사팀이 사직을 종용했어요. 대기발령은 언제까지 가능한가요?',
    ctaKeyword: '징계조사 무기한 대기발령 사직 압박 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '징계조사 무기한 대기발령 — 5단계 권리남용 다툼 | 로앤가이드',
      description:
        '징계조사 명목 무기한 대기발령과 사직 압박을 받았다면 대기발령 정당성·기간·재량 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 \'특정 비위 의심 사항을 조사 중\'이라며 \'조사 종료 시까지\' 무기한 대기발령을 통보했고, 3개월이 지나도록 구체적 조사 결과·진행 상황을 알려주지 않았습니다. 그 사이 인사팀은 \'어차피 결과가 나오면 징계가 무거울 수밖에 없으니 미리 자진 사직하는 게 낫다\'며 사직을 종용했어요. 대기발령 기간 동안 출입증·업무 시스템 접근이 차단됐고, 임금은 기본급의 70%만 지급됐습니다." 대기발령은 근로자가 현재의 직위·직무를 장래에 계속 담당하게 되면 업무상 장애 등이 예상되는 경우에 이를 예방하기 위해 일시적으로 직위를 부여하지 않는 잠정적 조치 영역이고, 인사권자인 사용자가 갖는 일정 재량 범위 내의 인사명령이지만 \'권리남용\'에 해당하면 무효 평가가 가능한 트랙입니다. 피해자라면 ① 대기발령 사유·기간 ② 권리남용 ③ 사직 압박 의사 하자 ④ 부당대기·부당해고 구제 ⑤ 민사 임금 5중 트랙이 가능한 영역. 대응은 ① 사유 ② 남용 ③ 의사 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 징계조사 무기한 대기발령 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·남용·의사·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대기발령 사유·기간</strong> — 구체적 사유 적시·상당 기간 한정 여부.</li>\n<li><strong>② 권리남용 판단</strong> — 업무상 필요성·기간·근로자 불이익 형량.</li>\n<li><strong>③ 사직 압박 의사 하자</strong> — \"미리 자진 사직\" 종용 + 무기한 대기 결합.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당 대기발령 + (사직 시) 부당해고 결합.</li>\n<li><strong>⑤ 민사 임금 청구</strong> — 임금 감액분·정신적 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대기발령은 잠정적·예방적 조치 영역. \"조사 종료 시까지\" 같은 무기한·무확정 형식은 권리남용 다툼 가능한 트랙. 임금 70% 지급도 별도 다툼 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대기발령 통보·임금 자료 보존 (즉시)</strong> — 통보서·사유서·급여명세서.</li>\n<li><strong>2단계 — 조사 진행 자료 요청 (1~2주)</strong> — 조사 진행 상황·소명 기회 부여 여부.</li>\n<li><strong>3단계 — 사직 종용 자료 (2주)</strong> — \"미리 자진 사직\" 발언 녹취·메신저·면담 메모.</li>\n<li><strong>4단계 — 노동위 구제신청 (대기발령일 3개월 내)</strong> — 부당 대기발령 + 의사 하자 결합.</li>\n<li><strong>5단계 — 민사 임금 청구</strong> — 임금 감액분·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">징계조사 무기한 대기발령 + 사직 압박 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 대기·압박·임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>대기발령 통보서·사유서·인사명령</strong></li>\n<li><strong>대기 기간 동안의 급여명세서·임금 감액 자료</strong></li>\n<li><strong>출입증·업무 시스템 접근 차단 통보</strong></li>\n<li><strong>조사 진행 상황 요청·회사 답변 자료</strong></li>\n<li><strong>인사팀 사직 종용 발언 녹취·메신저</strong></li>\n<li><strong>취업규칙·인사규정 (대기발령·임금 조항)</strong></li>\n<li><strong>비교 사례 (같은 비위 의심 동료의 처우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대기발령 \"기간\"이 핵심 다툼 사정. 무기한·무확정 통보는 권리남용 강한 인정 영역. 조사 진행 상황 요청에 회사가 침묵한 정황이 결정 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무상 필요성 부재</strong> — 의심 단계만으로 무기한 대기는 필요성 약한 사정.</li>\n<li><strong>기간 한정 부재</strong> — \"조사 종료 시까지\" 형식은 권리남용 사정.</li>\n<li><strong>임금 감액 다툼</strong> — 대기 기간 임금 감액의 합리적 기준 입증 책임.</li>\n<li><strong>사직 종용 결합</strong> — 무기한 대기 + 사직 압박 = 묵시적 해고 가능 영역.</li>\n<li><strong>소명 기회 부여</strong> — 조사 진행 상황·소명 절차 부재는 절차 흠결.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기발령의 정당성 판단 기준',
        summary:
          '대법원 2018다251486(대법원, 2022.09.15 선고) 영역에서 법원은 대기발령이 정당한 인사권의 범위 내에 속하는지는 업무상 필요성·근로자가 입게 되는 신분상·경제상 불이익·근로자 본인과의 협의 등 신의칙상 요구되는 절차를 거쳤는지 등을 종합 고려하여 판단해야 하고, 대기발령을 하는 과정에서 근로자 본인과 성실한 협의절차를 거치지 아니하였다는 사정만으로 대기발령이 권리남용에 해당되어 당연히 무효가 되지는 않으나, 근무성적·근무능력 불량을 이유로 한 대기발령 후 일정 기간이 경과하면 해고한다고 정한 규정에 따라 해고할 때에도 별도로 정당한 이유가 있어야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '대기발령 정당성 = 업무상 필요성 + 불이익 + 협의 종합 판단. \"무기한·무확정\" 형식은 권리남용 강한 다툼 사정.',
      },
    ],
    faq: [
      {
        question: '대기발령 기간 임금이 70%만 지급되는데 적법한가요?',
        answer:
          '<strong>취업규칙·합리적 기준 + 휴업수당 70% 하한 영역입니다.</strong> 임금 감액의 합리적 사유 입증 책임은 사용자.',
      },
      {
        question: '\"조사 종료 시까지\" 같이 기간 없는 대기발령도 가능한가요?',
        answer:
          '<strong>무기한·무확정은 권리남용 강한 사정입니다.</strong> 상당 기간 한정·진행 상황 통지가 원칙.',
      },
      {
        question: '사직을 종용받았는데 대기 기간이 너무 길어 견디기 힘듭니다',
        answer:
          '<strong>무기한 대기 + 사직 종용 결합은 묵시적 해고로 평가될 영역입니다.</strong> 종용 자료 보존 결정.',
      },
      {
        question: '조사 결과 징계 없이 종결됐는데 그 기간 임금은 어떻게 되나요?',
        answer:
          '<strong>대기발령이 부당하면 차액 임금 청구 가능한 영역입니다.</strong> 노동위 구제 + 민사 병행 트랙.',
      },
      {
        question: '구제신청 3개월이 지났을 수도 있는데요?',
        answer:
          '<strong>대기발령 자체에 대한 신청은 그 통보일 기준 영역입니다.</strong> 사직·해고 시점에 따른 별도 기산 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '징계조사 진술 강요', href: '/guide/dismissal/dismissal-internal-investigation-forced-statement-track' },
      { label: '구조적 강요사직', href: '/guide/dismissal/dismissal-constructive-forced-resignation' },
      { label: '권고사직 거부 압박', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
      { label: '징계 재심 절차 흠결', href: '/guide/dismissal/dismissal-disciplinary-rehearing-procedural-defect' },
    ],
  },

  // ─── 5. dismissal-non-compete-clause-violation-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-non-compete-clause-violation-fire-track',
    keyword: '경업금지 약정 위반 명목 해고',
    questionKeyword: '입사 시 \'동종업계 이직·창업 금지\' 경업금지 약정에 서명했는데, 재직 중 동종업계 부업·창업 준비가 발각돼 해고됐어요.',
    ctaKeyword: '경업금지 약정 위반 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경업금지 약정 위반 해고 — 5단계 약정 유효성 다툼 | 로앤가이드',
      description:
        '경업금지 약정 위반 명목으로 해고됐다면 약정 합리성·기간·보상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 당시 \'재직 중·퇴직 후 2년간 동종업계 이직·창업·영업 일체 금지\'라는 경업금지 약정에 서명했습니다. 재직 중 본업과 별개로 동종업계 1인 사업자 등록을 한 사실이 발각됐고, 회사는 \'경업금지 약정 위반 + 충실의무 위반\'을 사유로 해고를 통보했어요. 회사가 보호하려는 영업비밀을 직접 사용하거나 고객을 유인한 사실은 없었고, 약정에는 별도의 보상금·위약금 조항도 없었습니다." 경업금지 약정은 사용자의 영업상 이익을 보호하기 위한 영역이지만 근로자의 직업선택 자유를 일정 부분 제한하는 트랙이라 약정의 \'합리적 범위\'(보호이익·금지기간·지역·직종·대가 보상 등)를 종합 판단해 효력을 평가합니다. 약정 효력이 인정되더라도 위반 자체만으로 해고 정당성이 자동 인정되는 것은 아니고 별도의 \'정당한 이유\'가 요구되는 영역입니다. 피해자라면 ① 약정 합리성 ② 위반 행위 평가 ③ 절차 흠결 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 약정 ② 행위 ③ 절차 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경업금지 약정 위반 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·행위·절차·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정의 합리성</strong> — 보호이익·기간·지역·직종·대가 보상 종합 평가.</li>\n<li><strong>② 위반 행위 평가</strong> — 실제 영업비밀 사용·고객 유인·실손해 여부.</li>\n<li><strong>③ 해고 절차 흠결</strong> — 사전 시정·경고·단계적 징계 부재 정황.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정당한 이유 + 상당성 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경업금지 약정 위반 = 자동 해고 사유 아닌 영역. 약정 자체의 합리적 범위 + 실손해 + 사회통념상 유지 불가 종합 판단 트랙. 보상 조항 없는 광범위 금지는 약정 효력 자체 다툼.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정·근로계약 자료 보존 (즉시)</strong> — 경업금지 약정서·근로계약 별첨.</li>\n<li><strong>2단계 — 위반 행위 평가 자료 (1~2주)</strong> — 사업자등록·실제 영업 활동 범위·고객 자료.</li>\n<li><strong>3단계 — 실손해 부재 자료 (2주)</strong> — 회사 영업비밀 미사용·고객 미유인 입증.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 정당한 이유 + 약정 효력 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경업금지 약정 위반 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·위반·절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>경업금지 약정서·근로계약서 별첨</strong></li>\n<li><strong>약정 체결 시점·서명 정황 자료 (강박·기망 시)</strong></li>\n<li><strong>본업 직무 내용·접근 정보 범위 자료</strong></li>\n<li><strong>위반 사업의 사업자등록·매출·고객 자료</strong></li>\n<li><strong>회사 영업비밀 미사용·고객 미유인 입증 자료</strong></li>\n<li><strong>해고 통보서·사유서·인사위 회의록</strong></li>\n<li><strong>약정상 보상금·대가 조항 유무 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"보상 없는 광범위 경업금지\"는 약정 효력 부정 강한 사정. 본인의 본업 직무가 핵심 영업비밀 접근이 없었다는 입증이 결정 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>약정 합리성</strong> — 보호이익·기간·지역·직종·대가 보상 종합 부족 시 무효 사정.</li>\n<li><strong>실손해 부재</strong> — 영업비밀 미사용·고객 미유인 시 정당성 부정 강한 사정.</li>\n<li><strong>본업 평가</strong> — 본업 차질·실적 저하 부재 시 \"유지 불가\" 인정 어려운 영역.</li>\n<li><strong>절차 흠결</strong> — 사전 시정·경고 부재 + 즉시 해고는 상당성 부정.</li>\n<li><strong>약정 체결 정황</strong> — 입사 시 일방적 서명 강제는 약정 효력 다툼 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직위해제·동일사유 해임과 구제이익',
        summary:
          '대법원 2007두18406(대법원, 2010.07.29 선고) 영역에서 법원은 직위해제처분은 근로자로서의 지위를 그대로 존속시키면서 다만 그 직위만을 부여하지 아니하는 처분이고, 어떤 사유에 기하여 근로자를 직위해제한 후 그 직위해제 사유와 동일한 사유를 이유로 징계처분을 한 경우 뒤에 이루어진 징계처분에 의하여 그 전에 있었던 직위해제처분은 효력을 상실하지만, 직위해제처분에 따른 효과로 승진·승급 제한 등 법률상 불이익이 규정되어 있는 경우 그 실효된 직위해제처분에 대해서도 구제를 신청할 이익이 있다고 본 사례 흐름이 있습니다.',
        takeaway: '약정·규정 위반을 이유로 한 직위해제·해고가 결합된 경우, 각 단계의 정당성 + 구제이익 별도 평가 영역. 약정 효력과 해고 정당성은 별개 다툼.',
      },
    ],
    faq: [
      {
        question: '경업금지 약정에 서명했는데 그 자체로 무조건 효력이 있나요?',
        answer:
          '<strong>보호이익·기간·지역·직종·보상 등 합리적 범위 평가가 필요한 영역입니다.</strong> 보상 없는 광범위 금지는 무효 사정.',
      },
      {
        question: '영업비밀을 실제로 쓰지 않았는데도 해고된 게 정당한가요?',
        answer:
          '<strong>실손해 부재는 정당성 부정의 강력 사정입니다.</strong> 본인 직무의 영업비밀 접근성 입증 결정.',
      },
      {
        question: '입사 시 \"서명 안 하면 채용 안 됨\" 분위기에서 서명했어요',
        answer:
          '<strong>약정 체결의 자발성 다툼 영역입니다.</strong> 협상 여지 부재·일방적 서명 강제 정황 보존.',
      },
      {
        question: '회사가 사전 시정 요구·경고도 없이 해고했어요',
        answer:
          '<strong>단계적 징계 부재는 상당성 부정 사정입니다.</strong> 시정 요구·경고 부재 정황 결정 입증.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 약정 효력 다툼 결합 가능한 영역입니다.</strong> 압박 정황 자료 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '영업비밀 의심 즉시 해고', href: '/guide/dismissal/dismissal-trade-secret-suspicion-immediate-fire' },
      { label: '비밀유지 영업비밀 구제', href: '/guide/dismissal/dismissal-confidentiality-trade-secret-relief' },
      { label: '단일 위반 징계 해고', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '징계 과도성 다툼', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
    ],
  },
];
