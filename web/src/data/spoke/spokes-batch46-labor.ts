import { SpokePage } from '../spoke-pages';

// batch46 labor 12개: dismissal 5 + wage 3 + unemployment 2 + retirement 2
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 평가는 통과인데 성과급만 0원 책정으로 사실상 권고사직 압박을 받은 근로자가 위장 해고로 다투도록 돕는 페이지다.
// 2. 이 페이지는 해고 후 동종업계 재취업이 막히는 블랙리스트 정황을 겪은 근로자가 명예훼손·업무방해까지 함께 검토하도록 돕는 페이지다.
// 3. 이 페이지는 사내 회의 녹음이 발각돼 즉시 해고된 근로자가 녹음의 정당한 이익과 비례원칙으로 다투도록 돕는 페이지다.
// 4. 이 페이지는 동료 갈등을 핑계로 일방 해고된 근로자가 절차 흠결과 사용자 책임 회피로 다투도록 돕는 페이지다.
// 5. 이 페이지는 임신 사실을 알린 직후 해고된 근로자가 남녀고용평등법·근기법 제23조로 신속 다투도록 돕는 페이지다.
// 6. 이 페이지는 팀장 승진과 동시에 야근수당이 끊긴 근로자가 관리감독자성·포괄임금 다툼으로 차액을 청구하도록 돕는 페이지다.
// 7. 이 페이지는 재직 조건부 상여금이 퇴사 직전에 미지급된 근로자가 임금성·재직조건 효력으로 다투도록 돕는 페이지다.
// 8. 이 페이지는 스톡옵션을 받았다는 이유로 야근수당이 퉁쳐진 근로자가 옵션과 임금의 분리를 입증해 청구하도록 돕는 페이지다.
// 9. 이 페이지는 대학원 진학을 이유로 사직한 근로자가 정당이직사유 한정 인정 범위를 정확히 점검하도록 돕는 페이지다.
// 10. 이 페이지는 해외 이주를 위해 사직한 근로자가 거주이전 정당이직 인정 절차를 정리하도록 돕는 페이지다.
// 11. 이 페이지는 비정규직에서 정규직으로 전환된 근로자가 전환 전 기간이 퇴직금에 합산되는지 확인하도록 돕는 페이지다.
// 12. 이 페이지는 수습기간을 별도로 보고 퇴직금을 줄여 받은 근로자가 수습기간 합산 원칙을 정리하도록 돕는 페이지다.

export const spokesBatch46Labor: SpokePage[] = [
  // ─── 1. dismissal / bonus-cut-disguised-discharge ───
  {
    domain: 'dismissal',
    slug: 'dismissal-bonus-cut-disguised-discharge',
    keyword: '성과급 0원 위장 해고',
    questionKeyword: '성과급만 0원으로 책정해 사실상 권고사직을 강요하는 것도 부당해고로 다툴 수 있나요?',
    ctaKeyword: '성과급 0원 위장해고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '성과급 0원 위장해고 4가지 다툼 포인트 | 로앤가이드',
      description:
        '평가는 통과했는데 성과급만 유독 0원으로 책정돼 자진퇴사를 강요받았다면 위장 해고로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"평가 등급은 B인데 성과급만 0원이 떴어요. 인사팀이 \'스스로 거취를 정하라\'고 합니다"라는 사연이 늘고 있습니다. 평가와 성과급이 따로 노는 구조는 사실상 사직을 압박하는 위장 해고로 검토될 수 있습니다. 통보 시점·평가표·동료 비교를 한 묶음으로 정리하면 자진퇴사 압박을 부당해고로 되돌릴 수 있습니다. 통보 후 3개월이 지나면 구제신청 자체가 막히니 시간이 가장 큰 변수입니다.</p>',
    sections: [
      {
        title: '위장 해고 의심 신호 — 어떤 패턴이 위법 소지가 있나',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 신호가 동시에 나타나면 권고사직을 가장한 해고로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>평가-성과급 분리</strong> — 인사평가는 보통 등급인데 성과급만 0원·최하위로 책정.</li>\n<li><strong>면담 압박</strong> — "올해는 성과급이 어렵다, 거취를 고민해보라" 식 1대1 면담.</li>\n<li><strong>업무 박탈</strong> — 신규 프로젝트 배제·결재 라인 제외 등 단계적 배제 흐름.</li>\n<li><strong>동료 비교</strong> — 같은 등급 동료는 정상 지급되는데 본인만 0원으로 책정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자진사직처럼 보여도 회사가 사직을 강요한 정황이 인정되면 부당해고로 평가될 소지가 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 면담 직후부터 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">사직서를 쓰지 않은 시점에 자료를 모으는 것이 가장 안전합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 평가표·성과급 명세 정리</strong> — 최근 3년 인사평가 등급과 성과급 명세를 표로 비교.</li>\n<li><strong>2단계 — 면담 기록 보존</strong> — 면담 일시·발언 요지·참석자 메모, 가능하면 본인 기억 기준 녹취.</li>\n<li><strong>3단계 — 동료 비교 자료</strong> — 동일 등급·직급 동료의 성과급 수령 여부 익명 확인.</li>\n<li><strong>4단계 — 사직서 보류 + 내용증명</strong> — 회사에 "정상 평가 결과로 처우해달라" 내용증명 발송.</li>\n<li><strong>5단계 — 지노위 구제신청</strong> — 사실상 해고로 평가될 시점부터 3개월 이내 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 위장 해고 정황과 구제신청 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "성과급은 회사 재량"이라 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">재량이라도 형평·성실의 원칙은 적용됩니다.</strong></p>\n<ul>\n<li><strong>같은 등급 동일 기준</strong> — 같은 등급에 다른 금액이면 차별 책정으로 다툴 소지가 있습니다.</li>\n<li><strong>관행 형성</strong> — 매년 일정 비율로 지급된 이력이 있다면 묵시적 임금성으로 검토 가능.</li>\n<li><strong>사후 평가 변경</strong> — 평가 후 별도 사유 없이 0원이면 사후 자의적 처분으로 평가될 소지.</li>\n<li><strong>사직 유도 정황</strong> — 면담·인사이동·업무 배제와 결합되면 권고사직 강요로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평가표·성과급표·면담 메모 3종을 같은 시간선에 정리하면 위장 해고 정황 입증이 쉬워집니다.</blockquote>',
      },
      {
        title: '구제 결과 — 복직·임금상당액·차액 청구',
        content:
          '<p><strong style="color:#1e3a5f">부당해고로 인용되면 원직복직 + 임금상당액 + 미지급 성과급 차액까지 정리할 수 있습니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 동일 직무·동일 처우로 복귀, 평가·성과급 기준도 정상화.</li>\n<li><strong>임금상당액</strong> — 사실상 해고일~복직일까지 평균임금 기준 월 급여 전액.</li>\n<li><strong>성과급 차액</strong> — 동일 등급 동료 평균 대비 차액을 별도 임금체불로 청구.</li>\n<li><strong>금전보상명령</strong> — 복직이 사실상 어려우면 6~12개월치 보상으로 갈음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사직서를 이미 제출했다면 "강요·기망에 의한 의사표시"로 취소를 별도 다툴 필요가 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사회통념상 고용관계 유지가 곤란한지의 판단 기준',
        summary:
          '대법원 2023두41864 사건(대법원, 2024 선고)에서 법원은 근로자에게 책임 있는 사유로 해고할 때 사회통념상 고용관계를 유지할 수 없을 정도인지를 종합 고려해야 한다며, 평가 결과만으로 곧바로 해고 정당성을 인정해선 안 된다는 취지로 판시했습니다.',
        takeaway: '평가 결과를 빌미로 한 사직 압박은 그 자체로 해고 정당성이 인정되기 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '아직 사직서는 안 썼는데 지금 다투는 게 맞나요?',
        answer:
          '<strong>사직서 제출 전이 가장 안전한 시점입니다.</strong> 사직 의사를 명확히 거부하는 메일·내용증명을 회사에 남겨두면 이후 다툼에서 유리해요.',
      },
      {
        question: '성과급 0원이 부당해고가 될 수 있다는 게 잘 이해가 안 돼요',
        answer:
          '<strong>성과급 책정 자체가 해고는 아닙니다.</strong> 다만 사직 유도 정황과 결합되면 사실상 해고로 검토될 수 있어 면담·업무 배제 자료를 함께 모으는 것이 핵심입니다.',
      },
      {
        question: '사직서를 이미 냈는데 되돌릴 수 있나요?',
        answer:
          '<strong>강요·기망에 의한 사직은 의사표시 취소가 가능할 수 있습니다.</strong> 사직 시점이 가까울수록 유리하니 지체 없이 내용증명부터 보내세요.',
      },
      {
        question: '회사가 평가 자료를 안 주면 어떻게 다투나요?',
        answer:
          '<strong>지노위 절차에서 회사에 자료 제출을 요구할 수 있습니다.</strong> 본인 보관 자료(이전 면담 메일·동료 메시지)부터 정리해두는 것이 좋습니다.',
      },
      {
        question: '소액 성과급인데도 다툴 가치가 있나요?',
        answer:
          '<strong>금액보다 사직 강요 정황 자체가 핵심입니다.</strong> 성과급 차액은 별건 임금체불로 진정해도 되니 부당해고 다툼과 분리해 진행 가능해요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '권고사직 강요 다툼 절차', href: '/guide/dismissal/dismissal-resignation-pressure-relief' },
      { label: '인사평가 급락의 위법성', href: '/guide/dismissal/dismissal-evaluation-drop-illegality' },
      { label: '사직서 강요 의사표시 취소', href: '/guide/dismissal/dismissal-forced-resignation-cancel' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '성과급 임금성 판단', href: '/guide/wage/wage-performance-bonus-employment' },
    ],
  },

  // ─── 2. dismissal / blacklist-industry-block ───
  {
    domain: 'dismissal',
    slug: 'dismissal-blacklist-industry-block',
    keyword: '해고 후 동종업계 블랙리스트',
    questionKeyword: '해고 후 동종업계 면접에서 모두 떨어지는데 블랙리스트로 다툴 수 있나요?',
    ctaKeyword: '동종업계 블랙리스트 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '해고 후 동종업계 블랙리스트 5가지 다툼 가이드 | 로앤가이드',
      description:
        '해고 후 동종업계 면접만 보면 합격 직전에 떨어지는 패턴이 반복된다면 블랙리스트·명예훼손 정황을 정리하는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"해고 후 같은 업계 면접 7번 봤는데 마지막 단계에서 다 떨어졌어요"라는 상담이 적지 않습니다. 사용자가 채용 방해 목적으로 다른 회사에 부정적 정보를 제공하는 것은 직업안정법 제40조와 형법상 명예훼손·업무방해까지 검토될 소지가 있습니다. 정황 증거를 모아 노동청 진정과 형사 고소를 병행하는 것이 일반적입니다. 동종업계 인사담당자 진술 1건이 결정적 단서가 됩니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 정황이 블랙리스트 의심 신호인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 4가지가 겹치면 채용 방해 정황으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>최종 단계 반복 탈락</strong> — 면접·평판조회 단계에서 갑자기 결과가 뒤집힘.</li>\n<li><strong>전 직장 언급</strong> — 면접관이 전 직장 사정·해고 사유를 비공식 채널로 알고 있음.</li>\n<li><strong>지원 시점 인접성</strong> — 해고 후 1~6개월 내 동종업계 지원이 모두 무산.</li>\n<li><strong>관계자 진술</strong> — "그쪽에서 전화가 왔더라" 같은 인사담당자 발언.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직업안정법 제40조는 누구든지 채용을 방해할 목적으로 거짓·왜곡 정보를 제공할 수 없다고 명시합니다.</blockquote>',
      },
      {
        title: 'Q. 어떻게 입증하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 면접 기록과 인사담당자 진술 두 가지가 결정적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 면접 일정·결과 정리</strong> — 지원 회사·면접 단계·탈락 시점을 표로 정리.</li>\n<li><strong>2단계 — 인사담당자 진술 확보</strong> — "전 직장에서 연락이 왔다"는 발언을 메일·문자로 받아두기.</li>\n<li><strong>3단계 — 평판조회 동의 여부</strong> — 본인이 동의하지 않은 평판조회였는지 확인(개인정보보호법 위반 여지).</li>\n<li><strong>4단계 — 노동청 진정</strong> — 직업안정법 제40조 위반으로 진정 접수.</li>\n<li><strong>5단계 — 형사 고소 병행</strong> — 명예훼손·업무방해죄 검토 시 경찰 고소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 채용 방해 정황과 형사·민사 다툼 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "사실 그대로 알려줬을 뿐"이라 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실이라도 정당한 목적·범위를 벗어나면 위법 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>본인 동의 없는 정보 제공</strong> — 해고 사유·평판은 개인정보 → 본인 동의 없는 제공은 다툴 소지가 있습니다.</li>\n<li><strong>왜곡·과장</strong> — 사실을 부풀리거나 일부만 언급해 부정적 인상을 주면 명예훼손 검토 가능.</li>\n<li><strong>전파 범위</strong> — 동종업계 다수 회사에 반복 제공되면 업무방해죄 구성 검토.</li>\n<li><strong>전 사용자 책임</strong> — 인사담당자 개인·회사 모두 손해배상 책임의 대상이 될 소지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "사실"이라는 회사 주장에 휘둘리지 말고 본인 동의·정보 제공 범위에 초점을 맞추세요.</blockquote>',
      },
      {
        title: 'Q. 손해배상은 얼마나 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 일실 임금 + 정신적 위자료 두 갈래로 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>일실 임금</strong> — 채용 방해로 입사 못한 기간 동안 받았을 급여 추정액.</li>\n<li><strong>정신적 위자료</strong> — 명예 훼손·구직 활동 곤란에 따른 위자료 별도 청구.</li>\n<li><strong>형사 합의금</strong> — 명예훼손·업무방해 형사 절차 진행 시 합의금이 별도로 발생할 소지.</li>\n<li><strong>3년 시효</strong> — 손해 발생 + 가해자 인지 시점부터 3년, 시효 관리 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 손해 입증이 어려우니 면접 일정·연봉 협상 결과까지 자료로 남겨두세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사용자의 채용 방해 행위와 손해배상 책임',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 근로관계의 부수적 의무로서 사용자가 근로자의 명예·재취업 가능성에 부당한 영향을 주어서는 안 되며, 정당한 이유 없이 부정적 정보를 제공해 채용을 방해하면 손해배상 책임이 따른다는 취지로 판시했습니다.',
        takeaway: '"사실대로 알려줬다"는 항변만으로 채용 방해 책임이 면제되기는 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '면접관이 직접 "전 직장에서 들었다"고 말한 게 아니면 입증이 어렵지 않나요?',
        answer:
          '<strong>입증 부담이 본인에게 있어 정황 누적이 핵심입니다.</strong> 같은 패턴의 탈락이 다수 회사에서 반복되면 정황 증거로 검토 가능해요.',
      },
      {
        question: '평판조회는 어디까지 합법인가요?',
        answer:
          '<strong>본인 동의 + 채용 목적 한정이면 합법 범위입니다.</strong> 동의 없는 조회·해고 사유 공개는 개인정보보호법 위반 소지가 있습니다.',
      },
      {
        question: '직업안정법 제40조 위반은 형사처벌이 되나요?',
        answer:
          '<strong>5년 이하 징역 또는 5천만원 이하 벌금이 규정되어 있습니다.</strong> 노동청 진정 → 검찰 송치 절차로 진행됩니다.',
      },
      {
        question: '인사담당자 개인을 상대로 소송할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 직접 행위자 개인 + 사용자 책임의 회사 둘 다를 상대로 청구할 수 있어요.',
      },
      {
        question: '동종업계만이 아니라 거래처에도 알린 정황이 있다면?',
        answer:
          '<strong>전파 범위가 넓을수록 업무방해·명예훼손 책임이 커집니다.</strong> 거래처 관계자 진술도 함께 모으는 것이 좋아요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '직업안정법 제40조 채용 방해', href: '/guide/dismissal/dismissal-employment-stability-law' },
      { label: '평판조회 동의와 개인정보', href: '/guide/dismissal/dismissal-reference-check-consent' },
      { label: '명예훼손 형사 고소 절차', href: '/guide/defamation/defamation-criminal-complaint-procedure' },
      { label: '업무방해죄 검토 포인트', href: '/guide/dismissal/dismissal-business-interference-review' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 3. dismissal / meeting-recording-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-meeting-recording-fired',
    keyword: '회의 녹음 발각 해고',
    questionKeyword: '회의를 녹음한 게 발각돼서 해고됐는데 부당해고로 다툴 수 있나요?',
    ctaKeyword: '회의 녹음 해고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회의 녹음 발각 해고 4가지 다툼 절차 | 로앤가이드',
      description:
        '직장 내 괴롭힘·임금체불 입증을 위해 회의를 녹음한 사실이 발각돼 해고됐다면 정당한 이익과 비례원칙으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"부장 폭언을 입증하려고 휴대폰으로 녹음했다가 발각돼서 그날 해고 통보를 받았어요"라는 사연이 늘고 있습니다. 본인이 대화 당사자였다면 통신비밀보호법 위반은 일반적으로 검토되지 않고, 녹음 목적이 권리 보호·증거 수집이라면 정당한 이익으로 평가될 소지가 있습니다. 즉시 해고는 절차 흠결까지 동시에 다툴 수 있는 구도입니다.</p>',
    sections: [
      {
        title: '녹음의 위법성 판단 — 어떤 경우가 정당한가',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 요건이 충족되면 권리 보호 목적의 녹음으로 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>대화 당사자성</strong> — 본인이 회의에 참석한 당사자면 통신비밀보호법 적용 범위 밖.</li>\n<li><strong>증거 수집 목적</strong> — 직장 내 괴롭힘·임금체불·해고 등 권리 보호용.</li>\n<li><strong>비례원칙</strong> — 녹음 외에 입증할 수단이 없거나 부족할 것.</li>\n<li><strong>유출 자제</strong> — 녹음을 외부에 임의 공개하지 않고 분쟁 절차에만 사용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 본인이 참여한 회의의 녹음은 통상 위법으로 평가되지 않으며, 해고 사유로 삼기엔 부족합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">즉시 해고는 절차 흠결까지 함께 다툴 수 있는 구도입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 녹음 목적 정리</strong> — 어떤 권리 침해를 입증하려 했는지 시간순 메모.</li>\n<li><strong>2단계 — 해고 사유서·통보서 보존</strong> — 회사가 적시한 사유·날짜·서면 형식 확인.</li>\n<li><strong>3단계 — 절차 흠결 점검</strong> — 30일 전 예고·서면 통보·소명 기회 부여 여부 확인.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 사유 부당성 + 절차 흠결 동시 주장.</li>\n<li><strong>5단계 — 직장 내 괴롭힘 별건</strong> — 녹음 원인이 괴롭힘이라면 노동청 진정 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 녹음의 정당성과 절차 흠결 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "보안 위반·신뢰 훼손"으로 포장할 때',
        content:
          '<p><strong style="color:#1e3a5f">막연한 신뢰 훼손 주장은 해고 정당성을 곧바로 부여하지 않습니다.</strong></p>\n<ul>\n<li><strong>비례원칙</strong> — 사회통념상 고용관계 유지가 곤란할 정도여야 해고 인정.</li>\n<li><strong>경고·징계 절차</strong> — 시말서·경고 등 단계적 조치 없이 해고는 절차 흠결.</li>\n<li><strong>녹음 내용 정당성</strong> — 영업비밀·기밀이 아닌 인사·업무 회의는 보안 위반으로 단정 어려움.</li>\n<li><strong>대체 수단</strong> — 회사가 녹음 외 다른 방법으로 권리 보호를 제안했는지 점검.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영업비밀 자료가 아닌 일반 회의 녹음을 보안 위반으로 단정하기는 어렵습니다.</blockquote>',
      },
      {
        title: '구제 결과 — 복직·임금상당액·괴롭힘 시정',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 인용 시 원직복직 + 미지급 임금 + 괴롭힘 별건 시정까지 정리됩니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 동일 직무·직급으로 복귀, 인사 보복 금지.</li>\n<li><strong>임금상당액</strong> — 해고일~복직일까지 평균임금 기준 월 급여 전액.</li>\n<li><strong>괴롭힘 시정</strong> — 노동청 인용 시 가해자 분리·교육·징계 의무 부과.</li>\n<li><strong>위자료 별건</strong> — 부당해고 + 괴롭힘 인정되면 별도 손해배상 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 녹음을 SNS·외부에 공개하면 별건 책임이 발생할 소지가 있어 분쟁 절차에만 사용하는 게 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고 사유의 정당성 판단 기준',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 부당해고 구제신청 후 사정 변경이 있어도 노동위원회는 신청의 이익이 남아 있는지를 종합해 판단해야 한다며, 사용자가 임의로 신뢰 훼손을 주장한다고 곧바로 해고가 정당화되지는 않는다는 취지로 판시했습니다.',
        takeaway: '"보안 위반"·"신뢰 훼손" 같은 추상적 사유만으로 해고 정당성이 인정되기는 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '본인이 참석하지 않은 회의를 녹음한 거면 위법인가요?',
        answer:
          '<strong>비당사자 녹음은 통신비밀보호법 위반 소지가 있습니다.</strong> 본인이 참석한 회의여야 정당화 여지가 큽니다.',
      },
      {
        question: '녹음 사실을 회사에 미리 알려야 하나요?',
        answer:
          '<strong>법적으로 필수는 아닙니다.</strong> 단, 사내 정보보안 규정에서 녹음 금지를 명시한 경우는 별도 검토가 필요해요.',
      },
      {
        question: '녹음 파일을 변호사·노동청에 제출하면 문제가 되지 않나요?',
        answer:
          '<strong>권리 구제 목적의 분쟁 절차 제출은 일반적으로 정당한 사용으로 평가됩니다.</strong> 외부 SNS 공개와는 다릅니다.',
      },
      {
        question: '회사 컴퓨터·CCTV 녹음도 같은 기준인가요?',
        answer:
          '<strong>회사 자산을 이용한 녹음은 사내 규정과 보안 규약 적용을 별도로 받습니다.</strong> 개인 휴대폰 녹음과는 구분해서 검토하세요.',
      },
      {
        question: '해고 통보가 구두였는데 절차 흠결로 다툴 수 있나요?',
        answer:
          '<strong>근기법 제27조 위반입니다.</strong> 서면 통보가 없으면 그 자체로 해고 효력이 부정될 소지가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '해고 절차 흠결 30일 예고', href: '/guide/dismissal/dismissal-procedure-flaw-30day' },
      { label: '서면 해고통보 의무 위반', href: '/guide/dismissal/dismissal-written-notice-violation' },
      { label: '직장 내 괴롭힘 신고 절차', href: '/guide/dismissal/dismissal-workplace-bullying-report' },
      { label: '녹음의 증거능력 판단', href: '/guide/dismissal/dismissal-recording-evidence-ability' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 4. dismissal / coworker-feud-pretext ───
  {
    domain: 'dismissal',
    slug: 'dismissal-coworker-feud-pretext',
    keyword: '동료 갈등 핑계 해고',
    questionKeyword: '동료와 갈등이 있었다는 이유로 해고됐는데 부당해고로 다툴 수 있나요?',
    ctaKeyword: '동료 갈등 핑계 해고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '동료 갈등 핑계 해고 5가지 다툼 포인트 | 로앤가이드',
      description:
        '단순 동료 갈등을 이유로 일방 해고됐다면 사용자 책임 회피·절차 흠결로 다투는 정확한 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"동료와 사이가 안 좋다는 이유로 갑자기 해고 통보가 왔어요"라는 상담이 적지 않습니다. 동료 갈등은 사용자에게 갈등 조정·인사이동 의무가 먼저 있기 때문에 곧바로 해고 사유가 되기 어렵습니다. 회사가 갈등을 핑계로 한쪽만 자르는 패턴은 차별·절차 흠결까지 함께 다툴 수 있는 구도입니다. 통보 후 3개월이 가장 큰 변수입니다.</p>',
    sections: [
      {
        title: 'Q. 동료 갈등이 정당한 해고 사유가 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사회통념상 고용관계 유지가 불가능할 정도여야 인정될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>사용자 의무</strong> — 갈등 중재·인사이동·교육 등 1차 조치 의무가 회사에 있습니다.</li>\n<li><strong>책임 비율</strong> — 일방적 책임이 명확히 본인에게 있는지 평가 필요.</li>\n<li><strong>업무 지장</strong> — 갈등으로 업무가 실제 마비되는 정도인지 객관적 입증 필요.</li>\n<li><strong>보호 조치</strong> — 휴가·부서이동 등 단계적 조치 없이 해고는 비례원칙 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 갈등 자체보다 갈등을 방치한 사용자 책임이 먼저 검토됩니다.</blockquote>',
      },
      {
        title: 'Q. 통보 후 어떤 자료부터 모아야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 갈등 경위 + 회사 대응 내역 두 가지가 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갈등 경위 시간선</strong> — 발생일·내용·당사자·증인을 표로 정리.</li>\n<li><strong>2단계 — 회사 대응 기록</strong> — 인사팀 면담·중재 시도·인사이동 검토 메일 보존.</li>\n<li><strong>3단계 — 본인 노력 자료</strong> — 갈등 해소 노력(사과·중재 요청)을 메일·메시지로 입증.</li>\n<li><strong>4단계 — 동료의 처분 비교</strong> — 같은 갈등 상대방 동료가 어떤 처분을 받았는지 확인.</li>\n<li><strong>5단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 사유 부당성 + 차별 처분 동시 주장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 갈등 핑계 해고의 부당성과 차별 정황을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "직장 내 분위기 해친다"고 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 분위기 같은 추상적 사유는 곧바로 해고 정당성을 부여하지 않습니다.</strong></p>\n<ul>\n<li><strong>객관적 업무 지장</strong> — 매출 감소·고객 민원 등 구체적 손해 입증 필요.</li>\n<li><strong>차별 정황</strong> — 같은 갈등에 두 사람 중 한 명만 해고면 차별로 다툴 소지.</li>\n<li><strong>절차 흠결</strong> — 시말서·경고·인사이동 단계 없이 해고는 비례원칙 위반.</li>\n<li><strong>괴롭힘 가능성</strong> — 본인이 오히려 괴롭힘 피해자였다면 별건 진정 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 갈등에서 상대방이 멀쩡히 근무 중이라면 차별 처분 정황으로 강력한 단서가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 구제 결과는 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 부당해고 인용 시 원직복직 + 임금상당액 + 인사 보복 금지가 적용됩니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 동일 직무로 복귀, 다만 갈등 상대방과 분리 배치 가능.</li>\n<li><strong>임금상당액</strong> — 해고일~복직일까지 평균임금 기준 월 급여 전액.</li>\n<li><strong>금전보상명령</strong> — 복직이 사실상 어려우면 6~12개월치 보상 갈음.</li>\n<li><strong>괴롭힘 별건</strong> — 본인이 피해자로 인정되면 가해자 징계·교육 의무 부과.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 복직 후에도 갈등 상대방과 같은 부서로 돌아가면 재발 위험이 있어 부서 분리 명령을 함께 요청하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고 사유와 사회통념상 곤란성',
        summary:
          '대법원 2023두41864 사건(대법원, 2024 선고)에서 법원은 근로자에게 책임 있는 사유로 해고할 때 사회통념상 고용관계를 유지할 수 없을 정도인지를 평가해야 한다며, 단순 갈등이나 분위기 같은 추상적 사유만으로는 해고가 정당화되기 어렵다는 취지로 판시했습니다.',
        takeaway: '"분위기 해침"은 해고 사유로 곧바로 인정되기 어렵습니다. 객관적 손해 입증이 필요합니다.',
      },
    ],
    faq: [
      {
        question: '저도 갈등에 일부 책임이 있는데 그래도 다툴 수 있나요?',
        answer:
          '<strong>책임 분담은 양정에 영향을 줄 뿐 해고 정당성과는 별개입니다.</strong> 일부 책임이 있더라도 해고가 비례원칙에 어긋나면 다툴 소지가 있어요.',
      },
      {
        question: '갈등 상대방 동료는 그대로 근무 중인데요?',
        answer:
          '<strong>차별 처분의 강력한 정황입니다.</strong> 같은 사유에 다른 결과면 처분의 형평성을 다툴 수 있어요.',
      },
      {
        question: '경고나 시말서를 받은 적이 없는데 갑자기 해고되면?',
        answer:
          '<strong>단계적 조치 없는 해고는 절차 흠결로 다툴 수 있습니다.</strong> 시말서·경고 → 정직 → 해고 순이 일반적입니다.',
      },
      {
        question: '동료가 저를 괴롭힌 게 갈등의 원인이라면?',
        answer:
          '<strong>본인이 피해자로 인정되면 부당해고 + 괴롭힘 두 갈래로 다툴 수 있습니다.</strong> 노동청 진정과 지노위 구제신청을 병행하세요.',
      },
      {
        question: '복직해도 또 갈등이 생기면 어떡하나요?',
        answer:
          '<strong>복직 명령에 부서 분리·관리감독 강화 조치를 포함시킬 수 있습니다.</strong> 복직 후 6개월간 일지 작성도 안전장치입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '비례원칙과 단계적 징계', href: '/guide/dismissal/dismissal-proportionality-progressive' },
      { label: '직장 내 괴롭힘 신고 절차', href: '/guide/dismissal/dismissal-workplace-bullying-report' },
      { label: '차별 처분 다툼 포인트', href: '/guide/dismissal/dismissal-discriminatory-action-relief' },
      { label: '시말서·경고와 해고의 관계', href: '/guide/dismissal/dismissal-warning-letter-relation' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 5. dismissal / pregnancy-period-protect ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnancy-period-protect',
    keyword: '임신 알린 후 해고',
    questionKeyword: '임신 사실을 회사에 알린 직후 해고됐는데 어떻게 다투나요?',
    ctaKeyword: '임신 직후 해고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임신 직후 해고 5단계 신속 다툼 절차 | 로앤가이드',
      description:
        '임신 사실을 회사에 알린 직후 권고사직·해고 통보를 받았다면 남녀고용평등법·근기법으로 신속히 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"임신 8주차라고 회사에 알리고 일주일 만에 해고 통보를 받았어요"라는 사연이 적지 않습니다. 임신을 이유로 한 해고는 남녀고용평등법 제11조와 근기법 제23조 위반으로 검토될 소지가 있고, 시간적 인접성이 강력한 차별 정황이 됩니다. 임신 사실 고지 시점·해고 통보 시점·평가 변동 셋을 한 시간선에 묶어 정리하면 차별 입증이 쉬워집니다.</p>',
    sections: [
      {
        title: '임신 차별 의심 신호 — 어떤 변화가 있었나',
        content:
          '<p><strong style="color:#1e3a5f">고지부터 해고까지 4가지 정황이 겹치면 임신 차별로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>시간적 인접성</strong> — 고지 후 1~2개월 이내 해고·권고사직 통보.</li>\n<li><strong>평가·업무 변경</strong> — 고지 직후 단순 업무 전환·평가 하락.</li>\n<li><strong>구두 사유</strong> — "출산휴가 부담된다"·"인력 운영 어렵다" 발언.</li>\n<li><strong>대체채용</strong> — 해고 직후 동일 직무에 새 인력 채용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 남녀고용평등법 제11조는 혼인·임신·출산을 이유로 한 해고를 금지하고, 근기법 제23조 제2항은 산전후휴가 + 30일 해고를 금지합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 직후 즉시 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">시간이 가장 큰 변수입니다. 임신 진행과 함께 절차도 빨리 움직여야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임신확인서·진단서</strong> — 산부인과에서 임신 시기·예정일이 명시된 확인서 발급.</li>\n<li><strong>2단계 — 고지 시점 입증</strong> — 회사에 알린 메일·카톡·면담 메모 보존.</li>\n<li><strong>3단계 — 해고 사유서</strong> — 회사 적시 사유와 임신 시점 인접성 비교.</li>\n<li><strong>4단계 — 노동청 진정</strong> — 남녀고용평등법 제11조 위반 진정 접수.</li>\n<li><strong>5단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 차별 + 정당사유 부재 동시 주장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임신 차별 정황과 구제신청 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "성과 미흡·구조조정"으로 포장할 때',
        content:
          '<p><strong style="color:#1e3a5f">사유의 인접성과 비교집단 분석이 핵심입니다.</strong></p>\n<ul>\n<li><strong>평가 일관성</strong> — 고지 전 1~2년 평가와 고지 후 평가 차이를 표로 비교.</li>\n<li><strong>비교집단</strong> — 비슷한 성과의 비임신 동료가 같은 처분을 받았는지 확인.</li>\n<li><strong>긴박성 입증</strong> — 구조조정이라면 긴박한 경영상 필요·해고 회피 노력 입증 필요.</li>\n<li><strong>대체채용 흔적</strong> — 해고 직후 동일 직무 채용 공고가 있다면 사유 합리성 부정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노동청 진정과 지노위 구제신청은 병행 가능하며, 둘 다 신속 진행됩니다.</blockquote>',
      },
      {
        title: '구제 결과 — 복직·임금상당액·출산휴가 보장',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 인용 시 원직복직 + 임금 + 출산휴가·육아휴직권까지 회복됩니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 동일 직무로 복귀, 임신 상태 고려한 업무 조정 동반.</li>\n<li><strong>임금상당액</strong> — 해고일~복직일까지 평균임금 기준 월 급여 전액.</li>\n<li><strong>산전후휴가 90일</strong> — 출산예정일 전후 90일 보장(미숙아 100일).</li>\n<li><strong>육아휴직 1년</strong> — 만 8세 이하 자녀 양육 위해 최대 1년 사용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 출산예정일이 가까우면 출산 전 신속 대응이 필수입니다. 출산 후 신청 시 자료 수집이 더 어려워집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고 사유의 정당성과 시간적 인접성',
        summary:
          '대법원 2023두41864 사건(대법원, 2024 선고)에서 법원은 해고 사유의 정당성을 평가할 때 사회통념상 고용관계 유지가 곤란한 정도인지를 종합 고려해야 한다며, 보호 사유 고지 직후 짧은 기간 내 처분된 해고는 인접성 자체가 차별 정황으로 검토된다는 취지로 판시했습니다.',
        takeaway: '임신 고지 후 짧은 기간 내 해고는 시간적 인접성만으로도 차별 추정의 강한 단서가 됩니다.',
      },
    ],
    faq: [
      {
        question: '임신 사실을 회사에 정식으로 알린 시점이 애매한데요?',
        answer:
          '<strong>구두 고지·카톡·메일 어느 형태라도 입증되면 충분합니다.</strong> 면담 자리에서 알린 경우 같은 자리 동료 진술도 도움이 됩니다.',
      },
      {
        question: '시용기간(수습)인데도 임신 차별 보호를 받나요?',
        answer:
          '<strong>받습니다.</strong> 시용기간이라도 정당한 사유 없는 해고는 부당해고이며, 임신 차별은 시용 여부와 무관하게 금지됩니다.',
      },
      {
        question: '회사가 "그 자리는 출산 후 못 돌아온다"고 하면?',
        answer:
          '<strong>출산휴가·육아휴직 후 복귀 시 동일 직무 또는 동등한 직무 보장이 의무입니다.</strong> 위반 시 별건 진정·구제신청이 가능해요.',
      },
      {
        question: '해고가 아니라 권고사직 형태였는데도 다툴 수 있나요?',
        answer:
          '<strong>강요·기망에 의한 사직은 의사표시 취소가 가능할 수 있습니다.</strong> 사직서를 이미 제출했어도 곧바로 내용증명을 보내세요.',
      },
      {
        question: '실업급여는 어떻게 되나요?',
        answer:
          '<strong>"임신·출산"은 정당이직 사유 중 하나입니다.</strong> 자진퇴사 코드라도 임신 사실이 입증되면 수급자격이 인정될 수 있어요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '남녀고용평등법 제11조', href: '/guide/dismissal/dismissal-equal-employment-act-11' },
      { label: '산전후휴가 90일 보장', href: '/guide/dismissal/dismissal-maternity-leave-90' },
      { label: '육아휴직 후 복귀 보호', href: '/guide/dismissal/dismissal-childcare-leave-return' },
      { label: '시용기간 중 부당해고', href: '/guide/dismissal/dismissal-probation-relief' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 6. wage / team-leader-overtime-strip ───
  {
    domain: 'wage',
    slug: 'wage-team-leader-overtime-strip',
    keyword: '팀장 승진 야근수당 끊김',
    questionKeyword: '팀장으로 승진한 뒤 야근수당이 끊겼는데 청구할 수 있나요?',
    ctaKeyword: '팀장 야근수당 미지급 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '팀장 승진 후 야근수당 끊김 4가지 청구 포인트 | 로앤가이드',
      description:
        '팀장으로 승진한 뒤 갑자기 연장·야간수당이 끊겼다면 관리감독자성 판단과 차액 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"팀장이 되니까 그날부터 야근수당이 안 들어와요. \'관리자라 안 준다\'고 합니다"라는 상담이 늘고 있습니다. 직책이 팀장이라고 해서 원칙적으로 관리감독자(근기법 제63조)인 것은 아니며, 실질적 권한·근무 형태가 핵심 판단 기준입니다. 명목상 팀장이라도 일반 근로자와 다르지 않다면 연장·야간·휴일수당 미지급은 임금체불로 청구할 수 있습니다. 임금채권 시효 3년이 가장 큰 변수입니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 경우가 관리감독자로 인정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 직책이 아니라 다음 4가지 실질이 모두 충족되어야 합니다.</strong></p>\n<ul>\n<li><strong>채용·해고 권한</strong> — 팀원 채용·평가·해고에 대한 실질적 결정권 보유.</li>\n<li><strong>출퇴근 자율</strong> — 출퇴근 시간·휴게에 대한 자율적 재량.</li>\n<li><strong>임금 처우</strong> — 일반 근로자보다 상당히 높은 직책 수당·연봉 책정.</li>\n<li><strong>경영 참여</strong> — 사업 운영·예산·인사 등 경영적 의사결정 참여.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 팀장이라도 위 4가지가 안 되면 일반 근로자로 평가돼 연장·야간수당 청구가 가능합니다.</blockquote>',
      },
      {
        title: 'Q. 청구 절차는 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 5단계로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근무시간 입증</strong> — 출퇴근 기록·메신저 시간·결재 시간·교통카드 사용 이력 확보.</li>\n<li><strong>2단계 — 직책 실질 정리</strong> — 채용·평가·예산 결정권 유무를 표로 정리.</li>\n<li><strong>3단계 — 차액 산정</strong> — 연장·야간·휴일별로 가산임금 차액 계산.</li>\n<li><strong>4단계 — 내용증명 발송</strong> — "관리감독자 미해당, 차액 임금 청구" 명목 송달.</li>\n<li><strong>5단계 — 노동청 진정 또는 민사</strong> — 진정: 비용 무료. 민사: 강제집행 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 관리감독자성과 차액 산정 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "포괄임금에 다 포함됐다"고 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 포괄임금 약정도 엄격한 요건이 있어 원칙적으로 인정되지 않습니다.</strong></p>\n<ul>\n<li><strong>약정 명확성</strong> — 근로계약서에 연장·야간·휴일 시간이 구체적으로 명시되어야 함.</li>\n<li><strong>실제 시간 비교</strong> — 약정 시간보다 실제 근무가 더 많으면 초과분 별도 청구 가능.</li>\n<li><strong>최저임금 보장</strong> — 포괄임금이라도 최저임금·통상임금 산입은 별도 적용.</li>\n<li><strong>관행 변경</strong> — 승진 전엔 시간외수당이 따로 지급되었다면 포괄임금 합의 자체가 의문.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 승진 전에 시간외수당이 따로 지급되었다면 승진 후 포괄임금 약정의 합의 사실 자체가 약합니다.</blockquote>',
      },
      {
        title: 'Q. 청구 결과는 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 차액 + 지연이자 + 통상임금 재산정까지 따라옵니다.</strong></p>\n<ul>\n<li><strong>차액 임금</strong> — 연장 1.5배·야간 1.5배·휴일 1.5배(8시간 초과 2배) 가산.</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일 미지급분에 연 20% 지연이자.</li>\n<li><strong>3년 시효</strong> — 임금채권 3년이라 매월 급여일 기준으로 도과 분 발생.</li>\n<li><strong>형사 압박</strong> — 임금체불은 사업주 형사책임 → 합의 동기 강함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 시효 도과를 막으려면 내용증명 송달이나 노동청 진정 접수로 시효 중단을 즉시 시도하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 명목·지급 기준에 따른 임금성 판단',
        summary:
          '대법원 2022다255454 사건(대법원, 2024 선고)에서 법원은 명목이 무엇이든 사전에 정해진 산정기준에 따라 일률·자동으로 지급되는 금원은 임금으로 평가되며, 사용자가 명목만 바꿔 지급을 면할 수는 없다는 취지로 판시했습니다.',
        takeaway: '"팀장 직책수당으로 퉁쳤다"는 회사 항변은 실질이 가산임금 미지급이라면 받아들여지기 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '저는 팀원 평가만 하고 채용 권한은 없는데 관리감독자인가요?',
        answer:
          '<strong>일부만 충족하면 관리감독자성이 부정될 가능성이 큽니다.</strong> 채용·해고·예산 등 경영 권한이 폭넓게 있어야 인정될 수 있습니다.',
      },
      {
        question: '직책수당 50만원을 받는데 그 안에 야근수당이 포함된 건가요?',
        answer:
          '<strong>직책수당은 통상 직책에 대한 보상으로 가산임금과는 별개입니다.</strong> 명목·금액이 가산임금을 충당할 정도인지 별도 검토 필요해요.',
      },
      {
        question: '재직 중에 청구하면 보복당하지 않을까요?',
        answer:
          '<strong>임금 청구를 이유로 한 불이익은 근기법 위반입니다.</strong> 노동청 진정은 비공개 진행 가능하고 보복 시 별건 다툴 수 있어요.',
      },
      {
        question: '근무시간 입증은 어떻게 하나요?',
        answer:
          '<strong>메신저 송수신 시간·메일 시간·교통카드·CCTV 등이 모두 활용 가능합니다.</strong> 본인 휴대폰 자료부터 백업해두세요.',
      },
      {
        question: '승진 전 야근수당까지 소급 청구할 수 있나요?',
        answer:
          '<strong>3년 시효 안에서 가능합니다.</strong> 미지급분이 있다면 승진 시점과 무관하게 도과 전 분량은 모두 청구 대상입니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '관리감독자 인정 4요건', href: '/guide/wage/wage-supervisor-recognition' },
      { label: '포괄임금 약정의 한계', href: '/guide/wage/wage-comprehensive-agreement-limit' },
      { label: '연장·야간·휴일 가산임금', href: '/guide/wage/wage-overtime-night-holiday' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-labor-office-petition' },
      { label: '내용증명 작성 요령', href: '/guide/wage/wage-certified-mail-template' },
    ],
  },

  // ─── 7. wage / bonus-vesting-departure ───
  {
    domain: 'wage',
    slug: 'wage-bonus-vesting-departure',
    keyword: '재직조건 상여금 미지급',
    questionKeyword: '재직 중일 때만 준다는 상여금이 퇴사 직전에 미지급됐는데 청구할 수 있나요?',
    ctaKeyword: '재직조건 상여금 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재직조건 상여금 미지급 5단계 청구 절차 | 로앤가이드',
      description:
        '"지급일 기준 재직 중인 자에 한함" 조건이 붙은 상여금이 퇴사 직전에 미지급됐다면 임금성 판단과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3월 말 퇴사했더니 4월 지급 예정이던 상반기 상여금을 못 받았어요. 재직조건 때문이래요"라는 사연이 적지 않습니다. 재직조건부 상여금이라도 정기·일률·고정성을 갖춘 임금이라면 사후 임의로 미지급할 수 없는 것이 원칙으로 검토되며, 재직조건 자체가 원칙적으로 효력을 갖는 것은 아닙니다. 근로 제공 시점·산정 기간·지급 시점을 분리해 보면 청구 가능성이 보입니다.</p>',
    sections: [
      {
        title: '재직조건의 효력 — 어떤 경우 청구 가능한가',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 정황이 있다면 재직조건에도 불구하고 청구가 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>임금성 충족</strong> — 정기·일률·고정으로 지급되어 온 상여금.</li>\n<li><strong>근로 제공 완료</strong> — 산정 기간(1~6월) 동안 근로를 모두 제공함.</li>\n<li><strong>약정 명확성</strong> — 근로계약·취업규칙에 재직조건이 명시되어 있는지 확인.</li>\n<li><strong>관행 형성</strong> — 과거 퇴사자에게도 일할 또는 전액 지급된 이력.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임금에 해당하는 정기상여금은 "지급일 재직 조건"만으로 권리 자체를 부정하기 어려운 것이 대법원 흐름입니다.</blockquote>',
      },
      {
        title: '5단계 청구 — 퇴사 전후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전에 자료를 백업해두는 것이 가장 안전합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 이력 정리</strong> — 최근 3년 상여금 지급일·금액·산정기준 표 작성.</li>\n<li><strong>2단계 — 근거 문서 입수</strong> — 취업규칙·임금협정·근로계약서 상여금 조항 확보.</li>\n<li><strong>3단계 — 과거 퇴사자 사례</strong> — 동료 퇴사자가 일할·전액·미지급 중 어떻게 처리됐는지 확인.</li>\n<li><strong>4단계 — 내용증명 발송</strong> — 퇴직금 정산 시점에 맞춰 차액 청구 송달.</li>\n<li><strong>5단계 — 노동청 진정 또는 민사</strong> — 진정 6주~3개월, 민사 소액심판 3,000만원 이하 빠른 절차.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 재직조건 효력과 청구 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "취업규칙에 명시되어 있다"고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">취업규칙 조항이 있어도 임금성을 부정할 수는 없습니다.</strong></p>\n<ul>\n<li><strong>임금 처분의 한계</strong> — 임금에 해당하는 이상 사용자가 일방으로 박탈할 수 없습니다.</li>\n<li><strong>취업규칙 합리성</strong> — 일률 박탈은 합리성·비례성 결여로 효력 다툴 소지.</li>\n<li><strong>일할 지급 관행</strong> — 과거 퇴사자에 일할 지급된 이력이 있다면 묵시적 합의로 검토.</li>\n<li><strong>지급일 임의 조정</strong> — 지급일을 사후 조정해 퇴사자를 배제하면 사후 합리화로 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동일 회사에서 다른 퇴사자에게 일할 지급된 사례 1건만 확인되면 청구 입증력이 크게 강화됩니다.</blockquote>',
      },
      {
        title: '청구 결과 — 차액·지연이자·통상임금 산입',
        content:
          '<p><strong style="color:#1e3a5f">인용 시 차액 + 지연이자 + 통상임금 재산정까지 함께 정리됩니다.</strong></p>\n<ul>\n<li><strong>차액 임금</strong> — 산정기간 비율 또는 전액 청구, 3년 시효 안에서.</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일 미지급분에 연 20% 지연이자.</li>\n<li><strong>통상임금 산입</strong> — 정기상여금이 통상임금에 산입되면 가산임금까지 재계산.</li>\n<li><strong>퇴직금 재산정</strong> — 평균임금 변동으로 퇴직금 차액도 별도 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직 후 14일이 지나면 지연이자가 시작되니 퇴직금 정산서 수령 즉시 차액 점검이 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기상여금의 임금성과 통상임금 산입',
        summary:
          '대법원 2021다248299 사건(대법원, 2024 선고)에서 법원은 정기·일률·고정성을 갖춘 정기상여금은 임금에 해당하며, 사용자가 임의로 지급일 재직조건을 끼워넣어 권리를 박탈하는 것은 임금의 본질에 반한다는 취지로 판시했습니다.',
        takeaway: '"지급일 재직 조건"이 있어도 정기상여금이 임금이라면 청구할 수 있는 여지가 큽니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 재직조건이 명시되어 있는데도 청구할 수 있나요?',
        answer:
          '<strong>가능성이 있습니다.</strong> 임금에 해당하는 상여금이라면 사용자가 일방으로 박탈할 수 없다는 흐름이 형성되어 있어요.',
      },
      {
        question: '퇴사 시점이 지급일 1주일 전인데 너무 가까워서 다툼이 어렵지 않나요?',
        answer:
          '<strong>오히려 인접성이 강한 사례입니다.</strong> 산정 기간 근로를 모두 제공한 점을 강조하면 청구 가능성이 큽니다.',
      },
      {
        question: '경쟁사 이직 때문에 회사가 미지급한다는데?',
        answer:
          '<strong>이직 자체가 미지급 사유가 되기는 어렵습니다.</strong> 별도 경업금지 약정 위반이 입증되지 않는 한 임금 박탈 근거로 부족합니다.',
      },
      {
        question: '과거 퇴사자가 일할 지급된 사례를 어떻게 확인하나요?',
        answer:
          '<strong>같은 회사 퇴사자 동료에게 직접 확인하거나 SNS·카페·블라인드 글 캡처도 보조 자료가 됩니다.</strong>',
      },
      {
        question: '소액 상여금 100만원인데 진정 가치가 있나요?',
        answer:
          '<strong>금액 무관하게 진정 가능합니다.</strong> 다른 동료가 같은 패턴이라면 집단 진정으로 가는 것도 효율적이에요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '정기상여금 통상임금 산입', href: '/guide/wage/wage-regular-bonus-ordinary' },
      { label: '취업규칙 불이익변경 절차', href: '/guide/wage/wage-rules-disadvantage-change' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-labor-office-petition' },
      { label: '퇴직금 재산정 차액 청구', href: '/guide/retirement/retirement-recalculation-claim' },
      { label: '내용증명 작성 요령', href: '/guide/wage/wage-certified-mail-template' },
    ],
  },

  // ─── 8. wage / pogual-equity-pretext ───
  {
    domain: 'wage',
    slug: 'wage-pogual-equity-pretext',
    keyword: '스톡옵션 야근수당 미지급',
    questionKeyword: '스톡옵션을 줬다는 이유로 야근수당을 안 주는데 청구할 수 있나요?',
    ctaKeyword: '스톡옵션 야근수당 미지급 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '스톡옵션 핑계 야근수당 미지급 5가지 청구 포인트 | 로앤가이드',
      description:
        '회사가 스톡옵션 부여를 이유로 야근수당을 퉁쳤다면 옵션과 임금의 분리·임금성 입증으로 청구하는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"스톡옵션 받았으니 야근수당 따로 안 준다는데, 정작 옵션은 4년 베스팅에 행사도 어렵습니다"라는 상담이 늘고 있습니다. 스톡옵션은 미래 권리이고 가산임금은 현재 발생한 임금이라 본질이 다릅니다. 옵션 부여로 임금 청구권을 미리 포기하는 약정은 효력이 제한될 소지가 있고, 가산임금은 별도로 청구할 수 있는 구조입니다. 임금채권 시효 3년이 가장 큰 변수입니다.</p>',
    sections: [
      {
        title: 'Q. 스톡옵션과 가산임금은 왜 분리해서 봐야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 본질·시점·조건이 모두 다르기 때문입니다.</strong></p>\n<ul>\n<li><strong>본질</strong> — 옵션은 미래 권리, 가산임금은 이미 제공한 근로의 대가.</li>\n<li><strong>시점</strong> — 옵션 행사 가능 시기(베스팅 후)와 임금 발생 시점이 다름.</li>\n<li><strong>조건</strong> — 옵션은 재직·성과 조건이 붙고, 가산임금은 근로 제공만으로 발생.</li>\n<li><strong>가치 불확실성</strong> — 옵션 가치는 시장·회사 상황에 따라 0이 될 수 있어 가산임금 대체로 부족.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 옵션은 임금이 아닌 보너스적 성격이라 가산임금 미지급 사유가 되기 어렵습니다.</blockquote>',
      },
      {
        title: 'Q. 청구 절차는 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 5단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근무시간 입증</strong> — 메신저·메일 시간·결재 기록·교통카드 등 시간 자료 백업.</li>\n<li><strong>2단계 — 옵션 계약서 분석</strong> — 옵션 부여 조건·베스팅 기간·행사 조건 정리.</li>\n<li><strong>3단계 — 약정 무효 검토</strong> — "옵션이 가산임금을 대체한다" 조항이 있다면 그 효력 다툼.</li>\n<li><strong>4단계 — 차액 산정</strong> — 연장 1.5배·야간 1.5배·휴일 가산 산정.</li>\n<li><strong>5단계 — 노동청 진정 또는 민사</strong> — 진정 6주~3개월, 민사 강제집행 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 옵션과 가산임금 분리 가능성과 청구액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 회사가 "옵션 받았으니 그게 다라" 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금 청구권 사전 포기 약정은 효력이 제한될 수 있습니다.</strong></p>\n<ul>\n<li><strong>임금 청구권 포기 한계</strong> — 발생 전 임금을 포괄적으로 포기하는 약정은 강행규정 위반 소지.</li>\n<li><strong>옵션 가치 불확정</strong> — 행사 못 한 옵션은 가치가 0이라 가산임금을 대체하기에 부족.</li>\n<li><strong>관행·계약 분리</strong> — 옵션 계약과 근로계약은 별개 → 한쪽이 다른 쪽을 흡수 못 함.</li>\n<li><strong>최저기준 보장</strong> — 근기법은 강행규정 → 사적 합의로 무효화 못 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 옵션 계약서와 근로계약서를 별도로 검토해 임금 사전 포기 조항이 있는지부터 확인하세요.</blockquote>',
      },
      {
        title: 'Q. 청구 결과는 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 차액 + 지연이자 + 옵션 권리 별도 보존이 함께 정리됩니다.</strong></p>\n<ul>\n<li><strong>가산임금 차액</strong> — 연장·야간·휴일 가산임금 미지급분, 3년 시효.</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일 미지급분에 연 20% 지연이자.</li>\n<li><strong>옵션 별도 행사</strong> — 가산임금 청구로 옵션 권리가 영향받지 않습니다.</li>\n<li><strong>형사 압박</strong> — 임금체불은 사업주 형사책임 → 합의 동기 강함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴사 후 옵션 행사 기간이 짧을 수 있어 가산임금 청구와 옵션 행사를 병행 관리해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 명목·지급기준에 따른 임금성 판단',
        summary:
          '대법원 2025다214605 사건(대법원, 2025 선고)에서 법원은 명목과 무관하게 정기·일률·고정성을 갖추어 지급된 금원은 임금에 해당하며, 사용자가 임금에 해당하는 권리를 사적 약정으로 사전에 포괄 포기시킬 수 없다는 취지로 판시했습니다.',
        takeaway: '"옵션을 받았으니 가산임금은 면제"라는 약정은 강행규정 위반 소지가 있어 청구 가능성이 큽니다.',
      },
    ],
    faq: [
      {
        question: '입사 시 옵션 계약서에 "야근수당 면제" 조항에 서명했는데도 청구 가능한가요?',
        answer:
          '<strong>가능성이 있습니다.</strong> 발생 전 임금을 포괄 포기하는 약정은 효력이 제한될 수 있어요. 조항 자체의 무효를 다투는 구조입니다.',
      },
      {
        question: '아직 옵션을 행사 못 한 상태인데 가산임금을 청구하면 옵션이 취소될까요?',
        answer:
          '<strong>가산임금 청구는 옵션 권리에 직접 영향을 주지 않는 것이 원칙입니다.</strong> 다만 회사가 보복적으로 옵션 회수를 시도할 수 있어 별도 다툴 준비도 필요합니다.',
      },
      {
        question: '근무시간 기록이 부실한데 어떻게 입증하나요?',
        answer:
          '<strong>메신저·메일 시간·결재 기록·교통카드 사용 이력 등 간접 자료가 모두 활용됩니다.</strong> 노동청도 사용자에게 입증 책임을 분담시키는 흐름입니다.',
      },
      {
        question: '재직 중인데 청구하면 옵션을 회수당하지 않을까요?',
        answer:
          '<strong>임금 청구를 이유로 한 불이익은 근기법 위반입니다.</strong> 옵션 회수 시 별건 다툴 수 있고 노동청 진정은 비공개 진행 가능해요.',
      },
      {
        question: '소멸시효 3년이라는데 정확히 언제부터인가요?',
        answer:
          '<strong>각 월별 임금 발생일(통상 매월 급여일)부터 3년입니다.</strong> 진정 접수·내용증명 송달로 시효 중단 가능합니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 약정의 한계', href: '/guide/wage/wage-comprehensive-agreement-limit' },
      { label: '연장·야간·휴일 가산임금', href: '/guide/wage/wage-overtime-night-holiday' },
      { label: '임금 청구권 사전 포기 효력', href: '/guide/wage/wage-prior-waiver-effect' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-labor-office-petition' },
      { label: '내용증명 작성 요령', href: '/guide/wage/wage-certified-mail-template' },
    ],
  },

  // ─── 9. unemployment / graduate-school-eligible ───
  {
    domain: 'unemployment',
    slug: 'unemployment-graduate-school-eligible',
    keyword: '대학원 진학 사직 실업급여',
    questionKeyword: '대학원 진학을 위해 사직했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '대학원 진학 사직 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '대학원 진학 사직 4가지 실업급여 인정 포인트 | 로앤가이드',
      description:
        '대학원 진학을 이유로 자진퇴사했다면 정당이직 사유로 실업급여를 받을 수 있는지 정확한 인정 범위를 지금 확인하세요.',
    },
    intro:
      '<p>"풀타임 대학원 진학을 결정하고 사직했는데 실업급여 거부될까봐 걱정이에요"라는 상담이 늘고 있습니다. 대학원 진학 자체는 일반적으로 정당이직 사유로 좁게 인정되지만, 회사 위탁교육·직무능력 향상·통근 곤란 등 부수 요건이 결합되면 인정 가능성이 있습니다. 또 진학 후에도 구직 활동이 가능한 야간·주말 과정인지에 따라 수급자격 판단이 달라질 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대학원 진학이 정당이직 사유가 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 일반적으로 좁게 인정되지만 다음 4가지 부수 요건이 결합되면 인정 가능성이 있습니다.</strong></p>\n<ul>\n<li><strong>회사 위탁·지원교육</strong> — 회사 추천·승진 요건으로 진학한 경우.</li>\n<li><strong>직무능력 향상 직접 관련</strong> — 직무 전문성과 직접 연결된 학위·자격.</li>\n<li><strong>통근 곤란</strong> — 진학 학교가 멀어 출퇴근이 사실상 불가능한 경우.</li>\n<li><strong>야간·주말 과정</strong> — 구직활동·수급자격 유지에 영향 없는 과정 선택.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 풀타임 주간 대학원은 구직활동 의무와 충돌해 수급자격이 부정될 가능성이 큽니다.</blockquote>',
      },
      {
        title: 'Q. 자료는 무엇을 모아야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 진학 사유 + 구직활동 가능성 두 갈래로 정리합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진학 사유 입증</strong> — 합격증·진학 동기서·회사 추천서·직무 관련성 메모.</li>\n<li><strong>2단계 — 과정 시간표</strong> — 야간·주말 과정임을 입증하는 학사 시간표.</li>\n<li><strong>3단계 — 구직활동 의지</strong> — 워크넷 등록·이력서 발송 이력 사전 준비.</li>\n<li><strong>4단계 — 이직확인서 코드 점검</strong> — 회사가 어떤 코드로 기재했는지 확인.</li>\n<li><strong>5단계 — 고용센터 신청</strong> — 별도 사유서 첨부, 처분 이의 단계 준비.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 정당이직 인정 가능성과 보강 자료를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 풀타임 대학원이라 구직활동이 어려울 것 같은데?',
        content:
          '<p><strong style="color:#1e3a5f">A. 풀타임 진학은 수급자격 부정 사유가 되기 쉽습니다.</strong></p>\n<ul>\n<li><strong>구직활동 의무</strong> — 인정일마다 구직활동 1~2회 필수, 풀타임 학업과 충돌 가능성.</li>\n<li><strong>취업 가능 상태</strong> — 즉시 취업 가능한 상태가 수급요건의 핵심.</li>\n<li><strong>대안</strong> — 야간·주말·온라인 과정으로 변경하면 수급자격 유지 가능성.</li>\n<li><strong>휴직 활용</strong> — 사직 대신 무급휴직·교육휴직으로 전환하면 실업급여 자체가 불필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사직 전에 회사 교육휴직·무급휴직 제도가 있는지 먼저 확인해두는 것이 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 결과 — 인정·부정·이의 단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 1차 거부 시 3단계 이의절차로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>1차 처분</strong> — 신청 14일 내 결정, 정당이직 부정될 가능성 큼.</li>\n<li><strong>심사청구</strong> — 1차 처분 90일 이내, 노동위 심사관 검토.</li>\n<li><strong>재심사청구</strong> — 심사 결정 90일 이내, 고용보험심사위원회.</li>\n<li><strong>행정소송</strong> — 재심사 결과 90일 이내, 행정법원에 제소 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 풀타임 진학으로 수급이 어려우면 무리한 신청보다 학업 일정과 분리한 후 신청이 합리적입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당이직 사유 인정 기준',
        summary:
          '대법원 2018두63235 사건(대법원, 2020 선고)에서 법원은 자발적 이직이라도 사회통념상 정당한 사정이 있다면 구직급여 수급자격이 제한되지 않으며, 시행규칙 별표2의 사유는 예시로서 유사·동등한 사정이 있으면 정당이직으로 평가될 수 있다는 취지로 판시했습니다.',
        takeaway: '대학원 진학도 직무 관련성·통근 곤란 등 부수 사정이 결합되면 정당이직으로 검토될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 대학원 진학을 이유로 권고사직을 권유하면 정당이직인가요?',
        answer:
          '<strong>회사 권고사직이라면 별도 정당이직 사유가 됩니다.</strong> 권고사직 코드로 이직확인서가 나오면 수급자격이 보다 쉽게 인정될 수 있어요.',
      },
      {
        question: '진학을 미루고 일단 실업급여를 받는 게 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 다만 사직 사유는 진학 외 다른 정당이직 사유여야 하고, 수급 중에는 구직활동 의무를 지켜야 해요.',
      },
      {
        question: '직장인 야간 MBA는 어떻게 평가되나요?',
        answer:
          '<strong>야간·주말 과정이면 구직활동과 병행 가능합니다.</strong> 진학 시간표를 첨부해 구직 가능 상태임을 입증하세요.',
      },
      {
        question: '회사 추천으로 진학하는데도 실업급여가 필요한가요?',
        answer:
          '<strong>회사 추천 + 무급휴직이라면 실업급여 자체가 불필요합니다.</strong> 사직보다 휴직이 안전할 수 있어요.',
      },
      {
        question: '진학 후 다시 취업 못하면 어떻게 되나요?',
        answer:
          '<strong>학업 종료 후 재취업 활동을 하면서 수급자격을 다시 신청할 수 있습니다.</strong> 다만 피보험단위기간 180일 요건은 재충족 필요합니다.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '정당이직 사유 인정 범위', href: '/guide/unemployment/unemployment-just-cause-scope' },
      { label: '이직확인서 코드 정정', href: '/guide/unemployment/unemployment-departure-code-correction' },
      { label: '구직활동 의무와 인정', href: '/guide/unemployment/unemployment-job-search-duty' },
      { label: '심사청구·재심사청구 절차', href: '/guide/unemployment/unemployment-review-procedure' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
    ],
  },

  // ─── 10. unemployment / overseas-relocation-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-overseas-relocation-quit',
    keyword: '해외 이주 자진퇴사 실업급여',
    questionKeyword: '해외 이주를 이유로 자진퇴사했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '해외 이주 자진퇴사 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 이주 자진퇴사 5단계 실업급여 정리 | 로앤가이드',
      description:
        '해외 이주를 위해 사직했다면 거주이전 정당이직 인정 범위와 신청 시점, 출국 전 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 해외 발령받아서 같이 나가게 됐는데 출국 전에 실업급여를 받을 수 있을까요"라는 사연이 적지 않습니다. 가족 동반 해외 이주는 거주이전을 이유로 한 정당이직 사유로 검토될 소지가 있지만, 출국 후에는 구직활동 의무가 사실상 불가능해 수급이 어렵습니다. 출국 전에 신청·구직활동·수급 일정을 압축적으로 정리해야 합니다. 시간이 가장 큰 변수입니다.</p>',
    sections: [
      {
        title: '정당이직 — 어떤 요건을 갖추어야 하나',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2의 4가지 요건이 핵심입니다.</strong></p>\n<ul>\n<li><strong>가족 동반 사유</strong> — 배우자·미성년 자녀의 발령·이주 등 동반 필요성.</li>\n<li><strong>실거주 이전</strong> — 단순 단기 출장이 아닌 실제 생활 거점 이전.</li>\n<li><strong>통근 불가능</strong> — 해외 거주지에서 기존 직장 통근이 사실상 불가능.</li>\n<li><strong>이직 시점 인접성</strong> — 발령일·출국일 전후 1~3개월 내 사직.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 출국 후에는 구직활동이 불가능해 수급자격이 사실상 부정될 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 신청 — 출국 전에 끝내야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">출국 일정 + 신청·구직활동 일정을 압축해서 정리합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배우자 발령 공문 확보</strong> — 회사 인사발령서·재직증명서 + 해외법인 임명장.</li>\n<li><strong>2단계 — 출국 일정 정리</strong> — 비자·항공권·해외 거주지 계약을 시간선으로 정리.</li>\n<li><strong>3단계 — 이직확인서 코드 정정</strong> — "23번(가족 동거)"으로 기재 요청.</li>\n<li><strong>4단계 — 고용센터 신청</strong> — 출국 전 워크넷 등록 + 수급자격 신청, 사유서 첨부.</li>\n<li><strong>5단계 — 출국 전 구직활동</strong> — 인정일별 구직활동 횟수 채우고, 출국 일정 미리 통보.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 출국 일정에 맞춘 신청 가능성과 수급액을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '출국 후 수급 가능성 — 구직활동의 한계',
        content:
          '<p><strong style="color:#1e3a5f">출국 이후에는 구직활동 의무 충족이 사실상 어려워집니다.</strong></p>\n<ul>\n<li><strong>국내 구직활동 원칙</strong> — 수급자격은 국내 노동시장 구직 가능 상태가 전제.</li>\n<li><strong>해외 체류 시 처리</strong> — 일시 출국·일정 기간 보고 등 별도 신고 의무 발생.</li>\n<li><strong>잔여 일수 처리</strong> — 출국 시점에 잔여 소정급여일수가 남으면 사실상 소멸.</li>\n<li><strong>대안</strong> — 출국 전 가능한 구간만 수급, 출국 후엔 별도 자격 재검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출국 일정을 1~2개월 늦출 수 있다면 그 사이 인정일을 채워 수급액을 확보할 수 있습니다.</blockquote>',
      },
      {
        title: '인정 결과 — 수급자격·급여액·잔여일수',
        content:
          '<p><strong style="color:#1e3a5f">정당이직 인정 + 출국 전 구직활동 충족이면 가능한 일수만큼 수급할 수 있습니다.</strong></p>\n<ul>\n<li><strong>피보험단위기간 180일</strong> — 이직 전 18개월 중 180일 이상 충족 시 수급자격.</li>\n<li><strong>구직급여 일액</strong> — 평균임금의 60%, 상한 1일 6.6만원·하한 6.4만원(2026 기준).</li>\n<li><strong>소정급여일수</strong> — 가입기간·연령에 따라 120~270일.</li>\n<li><strong>출국 전 수급 한도</strong> — 출국 전 인정일에 받은 일수만 실수령 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 신청 지연 시 출국 전 수급 가능 일수가 줄어 손실이 커집니다. 사직 즉시 신청을 시작하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당한 이직사유와 거주이전',
        summary:
          '대법원 2018두63235 사건(대법원, 2020 선고)에서 법원은 자발적 이직이라도 사회통념상 정당한 사정이 있다면 구직급여 수급자격이 제한되지 않으며, 가족 동반 거주이전 등 시행규칙 별표2 사유는 정당이직으로 평가된다는 취지로 판시했습니다.',
        takeaway: '해외 이주도 가족 동반 거주이전 요건이 충족되면 자진퇴사라도 수급자격이 검토될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '본인이 단독으로 해외 이주하는 경우는 어떻게 평가되나요?',
        answer:
          '<strong>가족 동반 요건 없이는 정당이직 인정이 어렵습니다.</strong> 회사 발령·국내 구직 대상 취업 등 별도 사유가 있어야 합니다.',
      },
      {
        question: '출국 후 잔여 일수는 입국하면 다시 받을 수 있나요?',
        answer:
          '<strong>일반적으로 어렵습니다.</strong> 수급 기간(이직 후 12개월) 내 잔여 일수만 사용 가능하고, 그 후엔 소멸됩니다.',
      },
      {
        question: '출국 1주 전인데 지금이라도 신청하면 의미가 있나요?',
        answer:
          '<strong>제한적입니다.</strong> 신청 → 7일 대기 → 인정일 시작 구조라 1주 안에 받을 수 있는 일수가 적어요. 그래도 시도하는 편이 낫습니다.',
      },
      {
        question: '비자 종류(주재원·동반비자)에 따라 차이가 있나요?',
        answer:
          '<strong>비자 자체보다 거주 사실의 실질이 핵심입니다.</strong> 출입국 사실 + 임대차계약 + 공과금 등 실거주 자료가 중요합니다.',
      },
      {
        question: '이직확인서를 자진퇴사 코드로 받았는데 정정 거부되면?',
        answer:
          '<strong>고용센터에서 직접 사유서로 다툴 수 있습니다.</strong> 회사 코드와 무관하게 정당이직 입증 자료를 첨부하면 됩니다.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '거주이전 정당이직 인정', href: '/guide/unemployment/unemployment-relocation-just-cause' },
      { label: '이직확인서 코드 정정', href: '/guide/unemployment/unemployment-departure-code-correction' },
      { label: '출국·해외체류 시 처리', href: '/guide/unemployment/unemployment-overseas-stay-process' },
      { label: '심사청구·재심사청구 절차', href: '/guide/unemployment/unemployment-review-procedure' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
    ],
  },

  // ─── 11. retirement / non-regular-converted-merge ───
  {
    domain: 'retirement',
    slug: 'retirement-non-regular-converted-merge',
    keyword: '비정규 정규 전환 기간 합산',
    questionKeyword: '비정규직에서 정규직으로 전환됐는데 비정규 기간이 퇴직금에 합산되나요?',
    ctaKeyword: '비정규 전환 퇴직금 합산 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비정규 전환 퇴직금 합산 5단계 점검 절차 | 로앤가이드',
      description:
        '계약직·파견직에서 정규직으로 전환된 뒤 퇴직금을 받을 때 비정규 기간이 합산되는지 정확한 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"2년 계약직 후 정규직으로 전환됐는데 회사가 퇴직금은 정규직 전환일부터만 계산한대요"라는 상담이 적지 않습니다. 근로관계가 단절 없이 이어졌다면 비정규 기간도 계속근로기간에 합산되는 것이 원칙으로 검토됩니다. 사직·재입사 형식만 거쳤다고 해서 자동 단절이 되는 것은 아니며, 실질적 근로관계 연속성이 핵심입니다. 차액은 매월 평균임금 변동으로 커질 수 있어 정확한 산정이 중요합니다.</p>',
    sections: [
      {
        title: '계속근로 — 어떤 요건을 갖추어야 합산되나',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 요건이 충족되면 비정규 기간이 계속근로기간에 합산될 가능성이 큽니다.</strong></p>\n<ul>\n<li><strong>업무 동일성</strong> — 비정규·정규 직무가 실질적으로 동일·유사.</li>\n<li><strong>장소 연속성</strong> — 같은 사업장·같은 사용자 아래에서 근무 연속.</li>\n<li><strong>단절 부재</strong> — 사직·재입사 사이에 실질적 공백 기간이 없음.</li>\n<li><strong>관행·합의</strong> — 회사가 비정규 기간을 합산해 처우한 이력 또는 합의서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형식적 사직서·재입사가 있어도 실질적 단절이 없으면 계속근로로 평가될 소지가 있습니다.</blockquote>',
      },
      {
        title: '5단계 점검 — 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서·인사기록·평균임금을 한 묶음으로 정리해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로계약서 입수</strong> — 비정규·정규 시기 계약서를 모두 확보, 업무·근무지 비교.</li>\n<li><strong>2단계 — 인사기록 확인</strong> — 4대보험 가입이력·급여 명세·전직 발령 기록 확인.</li>\n<li><strong>3단계 — 평균임금 산정</strong> — 퇴직 전 3개월 평균임금 × 30 × 계속근로연수 산식.</li>\n<li><strong>4단계 — 내용증명 발송</strong> — 회사에 "비정규 기간 합산 차액 청구" 송달.</li>\n<li><strong>5단계 — 노동청 진정 또는 민사</strong> — 진정 6주~3개월, 민사 강제집행 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 비정규 합산 가능성과 차액 산정 방법을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 "전환 시 사직서 받았다"고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">사직서 형식이 있어도 실질이 단절이 아니면 합산이 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>형식과 실질</strong> — 사직서·재입사 절차만 있고 실제 공백이 없다면 단절로 보기 어려움.</li>\n<li><strong>퇴직금 정산 여부</strong> — 비정규 종료 시 퇴직금이 별도 정산되었는지가 단절 판단의 큰 단서.</li>\n<li><strong>강요·관행 여부</strong> — "전환 위해 형식 사직"이 회사 관행이었다면 합산 가능성 큼.</li>\n<li><strong>4대보험 연속</strong> — 보험 가입이력이 끊기지 않으면 단절이 부정될 소지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 비정규 종료 시 퇴직금을 따로 받지 않았다면 합산 입증이 한결 쉬워집니다.</blockquote>',
      },
      {
        title: '청구 결과 — 차액·지연이자·평균임금 재산정',
        content:
          '<p><strong style="color:#1e3a5f">합산 인정 시 미지급 차액 + 연 20% 지연이자 + 평균임금 재산정까지 따라옵니다.</strong></p>\n<ul>\n<li><strong>차액 퇴직금</strong> — 비정규 기간 × 30일분 평균임금, 3년 시효 안에서.</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일 미지급분에 연 20% 지연이자.</li>\n<li><strong>평균임금 변동</strong> — 통상임금 산입·상여금 합산으로 평균임금 자체가 올라갈 수 있음.</li>\n<li><strong>형사 압박</strong> — 미지급 퇴직금은 사업주 형사책임 → 합의 동기 강함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임금·퇴직금 채권 시효는 3년이라 도과 분이 매월 발생하므로 신속한 진행이 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기상여금의 임금성과 통상임금 산입',
        summary:
          '대법원 2021다248299 사건(대법원, 2024 선고)에서 법원은 정기·일률·고정성을 갖춘 정기상여금은 통상임금에 해당하며, 통상임금은 평균임금 산정의 기초가 되어 퇴직금 산정에도 영향을 준다는 취지로 판시했습니다.',
        takeaway: '비정규 기간 합산 + 통상임금 재산정이 결합되면 퇴직금 차액이 크게 늘어날 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '파견직에서 직접 채용으로 전환됐는데 파견 기간도 합산되나요?',
        answer:
          '<strong>같은 사용자 사업장에서 동일 업무를 수행했다면 합산 가능성이 큽니다.</strong> 파견업체와 사용업체 모두 자료를 확보하세요.',
      },
      {
        question: '비정규 종료 시 퇴직금을 이미 받았는데 또 청구할 수 있나요?',
        answer:
          '<strong>이중 지급은 어렵지만 차액 청구는 가능할 수 있습니다.</strong> 평균임금 재산정·통상임금 산입으로 차액이 발생할 수 있어요.',
      },
      {
        question: '계약직 1년 후 1개월 공백 후 정규직 전환됐는데?',
        answer:
          '<strong>실질 단절 여부가 핵심입니다.</strong> 1개월 공백이 형식적이고 같은 자리·같은 업무로 복귀했다면 합산 가능성이 있어요.',
      },
      {
        question: '회사가 "비정규 시절은 다른 법인이었다"고 주장하면?',
        answer:
          '<strong>실질적 동일 사용자성을 따져봐야 합니다.</strong> 대표·사업장·업무가 같으면 형식적 법인 분리만으로 단절이 부정되기 어려워요.',
      },
      {
        question: '재직 중인데 청구하면 보복당할까봐 걱정이에요',
        answer:
          '<strong>임금·퇴직금 청구를 이유로 한 불이익은 근기법 위반입니다.</strong> 노동청 진정은 비공개 진행이 가능하고 보복 시 별건 다툴 수 있어요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '계속근로기간 단절 판단', href: '/guide/retirement/retirement-continuous-service-judgment' },
      { label: '평균임금·통상임금 차이', href: '/guide/retirement/retirement-average-ordinary-wage' },
      { label: '파견·도급 합산 다툼', href: '/guide/retirement/retirement-dispatch-merge-dispute' },
      { label: '퇴직금 차액 진정 절차', href: '/guide/retirement/retirement-difference-petition' },
      { label: '내용증명 작성 요령', href: '/guide/retirement/retirement-certified-mail-template' },
    ],
  },

  // ─── 12. retirement / trial-period-included ───
  {
    domain: 'retirement',
    slug: 'retirement-trial-period-included',
    keyword: '수습기간 퇴직금 합산',
    questionKeyword: '수습기간이 퇴직금 산정에 포함되나요?',
    ctaKeyword: '수습기간 합산 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '수습기간 퇴직금 합산 4가지 판단 포인트 | 로앤가이드',
      description:
        '수습기간 3개월을 빼고 퇴직금을 산정한다면 계속근로기간 합산 원칙과 차액 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"입사할 때 수습 3개월을 거쳤는데 회사가 퇴직금은 그 후부터만 계산했어요"라는 상담이 늘고 있습니다. 수습기간도 근로계약이 체결돼 근로를 제공한 기간이라면 계속근로기간에 포함되는 것이 원칙으로 검토됩니다. 수습기간을 빼는 처리는 사용자에게 입증 책임이 있는 예외이며, 일반적으로 받아들여지기 어렵습니다. 차액은 평균임금에 비례해 커지므로 정확한 점검이 필요합니다.</p>',
    sections: [
      {
        title: 'Q. 수습기간이 계속근로에 포함되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙적으로 포함되며 다음 4가지 판단 기준이 있습니다.</strong></p>\n<ul>\n<li><strong>근로계약 체결</strong> — 수습기간에도 정식 근로계약이 체결돼 있으면 근로자성 인정.</li>\n<li><strong>실제 근로 제공</strong> — 회사 지휘·감독 하에 업무를 수행했다면 근로기간에 산입.</li>\n<li><strong>4대보험 가입</strong> — 수습기간에도 보험 가입돼 있다면 계속근로 강한 단서.</li>\n<li><strong>임금 지급</strong> — 수습기간 임금이 지급됐다면 근로 제공의 명백한 증거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수습은 본채용 전 능력 검증 기간일 뿐 근로계약과 별개의 기간이 아닙니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "수습 후 본채용일을 기산일로 본다" 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형식적 본채용일 표기는 단독으로 단절 사유가 되기 어렵습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 입사일 입증</strong> — 최초 출근일·계약서 작성일을 확인.</li>\n<li><strong>2단계 — 근로 연속성</strong> — 수습 종료~본채용 사이 공백이 없었음을 증명.</li>\n<li><strong>3단계 — 4대보험 이력</strong> — 보험 가입일이 수습 시작일인지 확인.</li>\n<li><strong>4단계 — 내용증명 발송</strong> — 회사에 "수습기간 합산 차액 청구" 송달.</li>\n<li><strong>5단계 — 노동청 진정 또는 민사</strong> — 진정 6주~3개월, 민사 소액심판도 활용.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 수습기간 합산 가능성과 차액 산정 방법을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 수습기간 임금이 90%만 지급된 경우 평균임금 산정은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 평균임금은 퇴직 전 3개월 임금 기준이라 수습기간이 평균임금 자체에 영향을 주는 경우는 드뭅니다.</strong></p>\n<ul>\n<li><strong>평균임금 산정 기간</strong> — 퇴직 직전 3개월 임금 평균이라 수습기간은 통상 포함되지 않음.</li>\n<li><strong>계속근로기간 산정</strong> — 평균임금과는 별개로 수습기간을 합산해 근로연수 늘림.</li>\n<li><strong>30일분 ×</strong> — "30일분 평균임금 × 계속근로연수"가 퇴직금 공식.</li>\n<li><strong>수습 90% 적용</strong> — 최저임금법상 1년 미만 계약직에게 수습 감액은 제한.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수습 임금 자체가 부족했다면 별건 임금체불로 청구할 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 수습 중 퇴사한 경우는 퇴직금이 발생하지 않나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 1년 미만 근로는 퇴직금 발생 자체가 어렵습니다.</strong></p>\n<ul>\n<li><strong>1년 이상 요건</strong> — 근기퇴직금법은 1년 이상 계속근로한 경우 퇴직금 지급 의무.</li>\n<li><strong>수습 + 본채용 합산 1년</strong> — 수습 포함 1년 이상이면 퇴직금 청구 가능.</li>\n<li><strong>주 15시간 이상</strong> — 1주 평균 근로시간 15시간 이상이어야 적용.</li>\n<li><strong>예외 사유</strong> — 경영상 해고·산재 등은 1년 미만이라도 별도 청구 가능 사유 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 1년이 며칠 차이로 부족하면 회사가 의도적으로 단축 처리할 수 있어 정확한 일자 확인이 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 명목·지급기준에 따른 임금성과 평균임금',
        summary:
          '대법원 2022다255454 사건(대법원, 2024 선고)에서 법원은 명목과 무관하게 정기·일률·고정성을 갖춘 금원은 임금에 해당하며, 평균임금 산정 시 임금에 해당하는 항목은 모두 포함해야 한다는 취지로 판시했습니다.',
        takeaway: '수습기간 합산 + 평균임금 재산정이 결합되면 퇴직금 차액이 작지 않게 늘어날 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '수습 후 정식 채용 평가에서 떨어졌어요. 퇴직금은요?',
        answer:
          '<strong>1년 이상이면 청구 가능, 1년 미만이면 어렵습니다.</strong> 다만 평가 절차에 흠결이 있으면 부당해고로 별건 다툴 수 있어요.',
      },
      {
        question: '근로계약서에 "수습기간은 근속에서 제외"라고 적혀 있는데도 합산되나요?',
        answer:
          '<strong>가능성이 있습니다.</strong> 근기퇴직금법은 강행규정이므로 사적 합의로 강행규정상 권리를 박탈하기는 어려워요.',
      },
      {
        question: '4대보험이 본채용 후부터 가입된 경우는?',
        answer:
          '<strong>실질적 근로 제공 입증이 더 중요합니다.</strong> 출근부·메일·메신저 기록으로 수습기간 근로 사실을 입증하면 됩니다.',
      },
      {
        question: '수습 임금이 최저임금보다 적었는데 어떻게 되나요?',
        answer:
          '<strong>최저임금법은 1년 이상 계약 + 단순노무가 아닌 경우에만 수습 감액(90%)을 허용합니다.</strong> 미달이면 별건 임금체불 청구 가능해요.',
      },
      {
        question: '소액 차액인데 다툴 가치가 있나요?',
        answer:
          '<strong>금액 무관하게 가능합니다.</strong> 노동청 진정은 무료고, 같은 회사 동료들과 집단으로 진정하면 합의 가능성이 더 커집니다.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '계속근로기간 단절 판단', href: '/guide/retirement/retirement-continuous-service-judgment' },
      { label: '평균임금·통상임금 차이', href: '/guide/retirement/retirement-average-ordinary-wage' },
      { label: '1년 미만 퇴직금 예외', href: '/guide/retirement/retirement-under-one-year-exception' },
      { label: '수습기간 최저임금 90%', href: '/guide/wage/wage-trial-minimum-90-percent' },
      { label: '퇴직금 차액 진정 절차', href: '/guide/retirement/retirement-difference-petition' },
    ],
  },
];
