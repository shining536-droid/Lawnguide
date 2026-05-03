import { SpokePage } from '../spoke-pages';

// batch53 dismissal 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 회사로부터 권고사직을 거절한 뒤 인사·평가·전보 등 압박이 이어지다 결국 해고된 근로자가 권고사직 거절과 후속 해고 사이의 인과관계 + 강요된 사직서 무효 법리로 다툴 수 있도록 돕는 페이지다.
// 2. 이 페이지는 시용(수습)기간 중 평가가 차별적이거나 정규직 전환 거절 사유가 추상적인 사용자에게 평가받은 근로자가 시용 종료 거부의 합리적 이유 + 서면통지 요건으로 다툴 수 있도록 돕는 페이지다.
// 3. 이 페이지는 구조조정 명목으로 본인 직무만 폐지·축소되어 정리해고당한 근로자가 직무 폐지의 합리성 + 잔여 사업 재배치 의무 + 선정 기준 객관성 4단계로 다툴 수 있도록 돕는 페이지다.
// 4. 이 페이지는 정시 퇴근·연장근로 거부 또는 회식·주말근무 거부를 사유로 징계해고된 근로자가 근로기준법 제53조 합의 원칙 + 비례성 평가로 다툴 수 있도록 돕는 페이지다.
// 5. 이 페이지는 사상·정치 발언, SNS 정치성향 표시, 종교 활동 등 양심·사상 영역을 사유로 해고된 근로자가 헌법상 양심·사상의 자유 + 업무 관련성 부재 입증으로 다툴 수 있도록 돕는 페이지다.

export const spokesBatch53Dismissal: SpokePage[] = [
  // ─── 1. dismissal / dismissal-recommended-resignation-refused-pressure ───
  {
    domain: 'dismissal',
    slug: 'dismissal-recommended-resignation-refused-pressure',
    keyword: '권고사직 거부 후 압박 해고',
    questionKeyword: '권고사직을 거절했더니 평가·전보로 압박이 이어지다 결국 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '권고사직 거부 후 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '권고사직 거부 후 압박 해고 다투는 4가지 입증 포인트 | 로앤가이드',
      description:
        '권고사직을 거절한 뒤 인사·평가·전보로 압박이 이어지다 해고됐다면 인과관계와 강요된 사직 법리 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"인사팀이 \'그냥 사직서 쓰고 나가는 게 서로 좋다\'며 권고사직을 권했는데 거절했더니 그 뒤로 평가가 최하 등급으로 떨어지고 한직으로 발령났어요. 결국 \'성과 부진\'으로 해고 통보를 받았는데 처음부터 짜인 시나리오 같아 막막합니다." 권고사직 거절 후 일정 기간 안에 인사·평가·전보 등 불이익 처분이 잇따르고 결국 해고로 이어진 사안은, 거절 직후의 압박 패턴이 시간순으로 입증되면 별개의 부당해고로 다툴 수 있는 사례가 있습니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한이며, 자필 사직서 없이 회사가 일방적으로 해고했다면 더 명확한 다툼 트랙입니다.</p>',
    sections: [
      {
        title: 'Q. 권고사직 거부 후 해고에서 다툴 수 있는 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 거절 시점·후속 처분의 패턴·합리성 부재·강요 정황 4가지로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권고사직 거절 시점과 후속 처분 시간 근접성</strong> — 거절일 이후 3~6개월 내 평가하락·전보·징계 등 불이익이 시작됐다면 압박성 처분으로 평가될 정황 자료가 됩니다.</li>\n<li><strong>② 처분의 합리적 이유 부재</strong> — 거절 전 평가·실적은 정상이었는데 거절 직후부터 동일 잣대로 평가가 급락했거나, 같은 부서 동료에게는 적용되지 않는 기준이라면 합리성 결여 정황입니다.</li>\n<li><strong>③ 인사담당자·관리자 발언</strong> — "그냥 나가지 그랬어", "버틸 수록 손해다" 류 발언이 메신저·녹음·증인 진술로 입증되면 강력한 정황 자료입니다.</li>\n<li><strong>④ 절차 하자 + 비례성</strong> — 평가·징계 절차에서 본인 소명기회 부여, 견책·감봉 등 중간 단계 부재 채 곧바로 해고로 간 패턴은 비례성 위반 정황으로 평가될 여지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 자필 사직서를 받지 못한 채 일방적으로 처리했다면 통상해고이므로 정당한 이유 입증 책임이 회사에 있습니다. 거절 의사를 메일·메신저로 명확히 남겨두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권고사직 자료 보존</strong> (즉시) — 권고사직 면담 일자·참석자·발언, 본인 거절 메일·메신저, 회사 측 후속 발언 자료 시간순 정리.</li>\n<li><strong>2단계 — 후속 처분 자료 정리</strong> — 거절 전·후 인사평가서, 전보 발령서, 징계처분서, 동료와의 처우 비교 자료.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 입증자료 각 2부 제출 (우편·방문·온라인). 5인 미만 사업장은 노동위 관할 아니므로 민사 해고무효확인 트랙 검토.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일로부터 60일 이내) — 권고사직 거절 시점·후속 처분 패턴·합리성 부재 + 강요 정황을 단계별로 입증.</li>\n<li><strong>5단계 — 판정·재심·행정소송</strong> (재심 10일·행정소송 15일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">권고사직 거절 후 압박성 해고 사안에서 다툼 트랙과 입증 자료를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권고사직 거절 흐름 + 후속 처분 시간순 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>권고사직 면담 기록·메일·메신저</strong> — 면담 일자·참석자·핵심 발언.</li>\n<li><strong>본인 거절 의사 표시 자료</strong> — 거절 메일·메신저(발송일자 명확).</li>\n<li><strong>거절 전·후 인사평가서</strong> — 등급 변화·평가자·평가 항목 비교.</li>\n<li><strong>전보·인사발령서·징계처분서</strong> — 거절 후 받은 모든 처분 사본.</li>\n<li><strong>해고통보서·해고사유서</strong> — 회사가 든 사유와 권고사직 거절과의 관련 정황.</li>\n<li><strong>동료 비교 자료</strong> — 같은 부서·직급 동료 처우 비교 (차별 정황).</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 사직 권유 단계에서 위로금·실업급여 가능성을 들어 압박하는 사례가 많아, 면담 시 대화는 가능한 범위에서 메모·녹음으로 보존하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"객관적 성과 부진" 주장 반박</strong> — 거절 전 평가가 정상이었다면 갑작스러운 등급 하락 자체가 합리성 부재 정황. 평가 기준·평가자 변경 여부 점검.</li>\n<li><strong>"사직 권유는 단순 상담" 주장 반박</strong> — 면담 일자·횟수·참석자가 다수면 단순 상담을 넘는 압박 정황 자료가 됩니다.</li>\n<li><strong>중간 단계 부재 비례성</strong> — 견책·감봉 없이 곧바로 해고로 간 패턴은 비례성 위반 정황입니다.</li>\n<li><strong>강요된 사직서가 있다면 별도 무효 주장</strong> — 회사 압박으로 사직서를 작성했다면 의사표시 하자(민법 제110조 강박) 무효 주장 검토 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·임금 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 진정·신고 온라인 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 권고사직을 받아들이면서 사직서를 자필 작성하면 부당해고 다툼이 본질적으로 어려워지므로, 거절 의사가 명확하다면 어떤 형태로든 사직서 작성을 미루는 것이 우선입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직서 제출 후 부당해고 다툼의 소의 이익',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 근로자가 사직서를 제출한 후 노동위원회에 부당해고 구제신청을 한 사안에서, 이미 정년·근로계약기간 만료·폐업 등으로 근로계약관계가 종료한 경우에도 근로관계가 유효하게 존속하던 동안의 임금상당액 청구 필요가 있다면 구제명령을 받을 권리가 소멸하지 않아 구제신청의 소의 이익이 있다고 판시한 취지를 보였습니다.',
        takeaway: '권고사직 거부 후 압박을 견디지 못하고 사직서를 제출했더라도 강요된 사직 정황과 임금상당액 청구 필요성이 인정되면 부당해고 구제신청의 소의 이익이 인정될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '권고사직을 거절한다고 메일로 보냈는데 그래도 회사가 일방 해고했어요. 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 자필 사직서가 없는 일방 해고는 통상해고이므로 정당한 이유 입증 책임이 회사에 있고, 권고사직 거절 정황 자체가 강력한 부당해고 정황 자료입니다.',
      },
      {
        question: '거절 후 전보·평가하락만 있고 아직 해고는 안 됐어요. 미리 다툴 수 있나요?',
        answer:
          '<strong>전보·대기발령 자체로도 노동위 구제신청이 가능한 사례가 있습니다.</strong> 승진·승급 제한 등 법률상 불이익이 발생하면 별도 구제신청 이익이 인정될 여지가 있습니다.',
      },
      {
        question: '회사가 위로금을 주겠다며 권고사직을 권하는데, 거절하면 정말 해고당하나요?',
        answer:
          '<strong>거절 자체로 해고 사유가 되지 않습니다.</strong> 거절은 정당한 권리행사이고, 그 후 일어나는 처분이 합리성·비례성 없으면 부당해고로 다툴 영역입니다.',
      },
      {
        question: '실업급여를 위해 권고사직 처리해주겠다는 회사 말, 어떻게 받아들여야 하나요?',
        answer:
          '<strong>주의가 필요한 사례가 있습니다.</strong> "권고사직"으로 신고되면 부당해고 다툼이 사실상 어려워지고, 위로금 합의서에 부제소 조항이 들어가면 향후 다툴 권리도 봉쇄될 수 있습니다.',
      },
      {
        question: '거절 후 6개월 정도 압박 패턴이 이어지다 해고됐어요. 시간이 길어 인과관계 인정이 어렵지 않나요?',
        answer:
          '<strong>중간 처분 자료가 시간순으로 입증되면 6개월 정도는 충분히 인과관계가 평가될 사례가 있습니다.</strong> 평가·전보·징계 자료를 표로 정리해두는 것이 핵심입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '권고사직 함정 거절 다툼', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '강요된 사직서 무효 입증', href: '/guide/dismissal/dismissal-forced-resignation-letter-invalidation' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: 'PIP 평가 절차 하자 입증', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
    ],
  },

  // ─── 2. dismissal / dismissal-probation-period-bias-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-period-bias-fired',
    keyword: '시용기간 차별 평가 정규직 전환 거절',
    questionKeyword: '시용(수습)기간 중 평가가 차별적이거나 정규직 전환 거절 사유가 추상적이에요. 다툴 수 있나요?',
    ctaKeyword: '시용기간 차별 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '시용기간 차별 정규직 전환 거절 다투는 4단계 합리성 | 로앤가이드',
      description:
        '시용기간 중 평가가 차별적이거나 정규직 전환 거절 사유가 추상적이라면 합리적 이유 + 서면통지 4단계로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 시용계약 후 정규직 전환 예정이었는데 마지막 주에 \'본계약 체결을 거부한다\'는 통보를 받았어요. 평가서에는 \'팀 적합성 부족\' 같은 추상적 표현뿐이고, 같은 시기 입사한 동료는 그대로 전환됐어요." 시용기간 중 해고 또는 본계약 체결 거부는 사용자 유보 해약권 행사로 일반 해고보다 넓게 인정되지만, 그 경우에도 객관적·합리적 이유가 존재해 사회통념상 타당하다고 인정돼야 합니다(대법원 2023두50455 등 일관된 법리). 본계약 체결 거부 시 구체적·실질적인 거부 사유를 서면으로 통지해야 하며, 통지 미흡은 그 자체로 효력이 부정되는 사례가 있습니다. 노동위 구제신청은 거부일로부터 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '시용기간 정규직 전환 거절에서 다툴 수 있는 4가지 합리성 포인트',
        content:
          '<p><strong style="color:#1e3a5f">대법원 시용 법리를 종합하면 아래 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 객관적·합리적 이유 존재 여부</strong> — 시용 거부도 정당한 이유가 필요합니다. "팀 적합성 부족" 같은 추상적 표현만으로는 합리성이 인정되기 어려운 사례가 있습니다.</li>\n<li><strong>② 서면통지 요건 (근로기준법 제27조)</strong> — 시용 본계약 체결 거부 시 구체적·실질적 거부 사유를 서면으로 통지해야 하며, 통지 미흡은 효력 부정 정황입니다.</li>\n<li><strong>③ 평가의 공정성·일관성</strong> — 같은 시기 입사 동료와의 평가 비교, 평가자 변경 여부, 평가 항목의 객관성 점검. 차별적 잣대가 적용됐다면 합리성 부재 정황입니다.</li>\n<li><strong>④ 평가 기간·기회 부여 충분성</strong> — 시용 기간 중 업무 학습·교육 기회가 충분했는지, 중간 피드백을 통해 개선 기회가 부여됐는지 절차적 합리성 점검.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시용 본계약 체결 거부는 "보통 해고보다는 넓게" 인정되지만 무제한이 아닙니다. 거부 사유의 추상성과 서면통지 미흡이 결합되면 가장 강력한 다툼 포인트가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시용계약·평가 자료 보존</strong> (즉시) — 시용 근로계약서, 정규직 전환 조건, 평가서, 본계약 거부 통보서 사본 확보.</li>\n<li><strong>2단계 — 동료·평가자 비교 자료 정리</strong> — 같은 시기 입사한 동료의 평가·전환 여부, 평가자 동일성, 평가 기준 일관성.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (거부일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 합리적 이유 부재 + 서면통지 미흡 + 평가 차별 + 개선 기회 미흡 4단계로 입증.</li>\n<li><strong>5단계 — 판정</strong> — 인용 시 원직복직(정규직 전환 효과) + 임금상당액 또는 금전보상명령 검토. 시용 종료가 아닌 정규직 신분으로의 복귀가 핵심입니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시용기간 차별·전환 거절 사안에서 합리성·서면통지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">시용계약 정황 + 평가 비교 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>시용 근로계약서·전환 조건 안내</strong> — 시용기간·전환 기준·평가 항목 명시 여부.</li>\n<li><strong>본계약 체결 거부 통보서</strong> — 사유의 구체성·서면 형식·송달 방식 점검.</li>\n<li><strong>평가서·평가 피드백 자료</strong> — 중간·최종 평가 내용, 평가자 동일성.</li>\n<li><strong>업무 성과·결과물 자료</strong> — 시용기간 중 본인 업무 결과 객관 자료.</li>\n<li><strong>같은 시기 입사 동료 비교</strong> — 동료의 평가·전환 결과 (차별 정황 입증).</li>\n<li><strong>업무 교육·인수인계 기록</strong> — 학습·개선 기회 부여 여부.</li>\n<li><strong>최근 시용기간 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시용 평가서가 본인에게 공유되지 않은 채 일방적으로 거부 결정된 사례가 많아, 평가 기준·결과의 본인 통지 여부 자체가 절차 위반 정황 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"시용은 해약권 유보라 자유" 주장 반박</strong> — 시용도 근로계약관계는 성립한 것이므로 근로기준법 제23조 정당한 이유 요건이 적용됩니다.</li>\n<li><strong>"평가 결과 객관적" 주장 반박</strong> — 평가 항목·기준·평가자가 동료와 동일한지, 평가 결과가 본인에게 사전 공유됐는지 절차 점검.</li>\n<li><strong>서면통지 형식 위반</strong> — 서면통지가 없거나 사유가 추상적이면 그 자체로 효력 부정 정황. 메일·메신저 통보도 형식 점검 필요.</li>\n<li><strong>시용 연장 후 거부</strong> — 시용기간을 반복 연장한 뒤 거부했다면 시용 자체의 유효성도 다툼 영역입니다.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 시용·정규직 전환 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 근로감독 진정 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 시용 거부 통보가 구두·전화로만 이뤄졌다면 서면통지 위반으로 효력이 흔들릴 수 있어, 통보 방식·시점·내용을 즉시 메모해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 만료 시 본계약 거부 요건과 서면통지',
        summary:
          '대법원 2021두34022 사건(대법원, 2021.04.29 선고)에서 법원은 사용자가 시용기간 만료 시 본 근로계약 체결을 거부하기 위해서는 객관적으로 합리적 이유가 존재하여 사회통념상 타당하다고 인정돼야 하며, 근로기준법 제27조에 따라 거부 사유를 서면으로 통지해야 효력이 있고 해당 서면에는 구체적·실질적 거부 사유를 기재해야 한다고 판시한 취지를 보였습니다.',
        takeaway: '시용 본계약 체결 거부도 합리적 이유 + 서면통지가 모두 필요하므로, 거부 사유가 추상적이거나 서면통지 형식이 미흡하면 효력 자체가 다툼 대상이 됩니다.',
      },
    ],
    faq: [
      {
        question: '시용계약서에 "회사가 자유롭게 본계약 거부 가능"이라고 적혀 있는데도 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 시용도 근로계약관계가 성립한 것이므로 근로기준법상 정당한 이유 요건이 적용되며, 계약서 문언이 이를 배제할 수 없습니다.',
      },
      {
        question: '거부 통보가 카카오톡·메일로만 왔어요. 서면통지로 인정되나요?',
        answer:
          '<strong>형식·내용이 모두 점검 대상입니다.</strong> 사유가 구체적·실질적이지 않거나 통지 방식이 취업규칙에 어긋나면 형식 위반으로 효력이 부정될 여지가 있습니다.',
      },
      {
        question: '시용기간을 1개월 더 연장한 뒤 거부됐어요. 연장 자체는 합법인가요?',
        answer:
          '<strong>합리적 이유 없는 시용 연장은 그 자체로 다툼 대상입니다.</strong> 연장이 정규직 전환 회피 목적이라면 무효 정황이 될 수 있습니다.',
      },
      {
        question: '같은 시기 입사한 동료는 전환됐고 저만 거부됐어요. 차별로 다툴 수 있나요?',
        answer:
          '<strong>강력한 정황 자료입니다.</strong> 평가 기준·평가자가 동일한데 결과만 다르다면 평가의 객관성·합리성이 다툼 대상이 됩니다.',
      },
      {
        question: '시용 인용 시 정규직 신분으로 복귀하나요? 시용 연장이 되나요?',
        answer:
          '<strong>본계약 체결 거부가 무효이므로 본계약이 체결된 것과 같은 정규직 신분으로 복귀가 검토됩니다.</strong> 단 사정에 따라 합의 단계에서 금전보상으로 조정되는 경우가 많습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '시용기간 능력 부족 구제 절차', href: '/guide/dismissal/dismissal-probation-skill-deficient-relief' },
      { label: '시용기간 반복 연장 부당', href: '/guide/dismissal/dismissal-probation-repeated-extension-unfair' },
      { label: '시용기간 종료 통보 대응', href: '/guide/dismissal/dismissal-trial-period-termination-response' },
      { label: '시용기간 해고 확인권', href: '/guide/dismissal/dismissal-trial-period-fired-confirmation-right' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
    ],
  },

  // ─── 3. dismissal / dismissal-restructuring-position-elimination ───
  {
    domain: 'dismissal',
    slug: 'dismissal-restructuring-position-elimination',
    keyword: '구조조정 직무 폐지 정리해고',
    questionKeyword: '구조조정 명목으로 본인 직무만 폐지·축소되어 정리해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '구조조정 직무 폐지 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '구조조정 직무 폐지 정리해고 다투는 4단계 절차 | 로앤가이드',
      description:
        '구조조정 명목으로 본인 직무만 폐지되어 정리해고됐다면 직무 폐지 합리성·재배치 의무·선정 기준 4단계로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 \'사업 효율화\'를 명분으로 본인이 맡고 있던 직무 자체를 폐지한다며 정리해고를 통보했어요. 그런데 같은 부서 다른 직무는 그대로고 본인 자리만 사라진 거라 짜놓은 시나리오 같아 막막합니다." 근로기준법 제24조의 정리해고는 ① 긴박한 경영상 필요, ② 해고 회피 노력, ③ 합리적·공정한 선정 기준, ④ 50일 전 근로자대표 협의 4가지 요건을 모두 갖춰야 정당성이 인정됩니다(대법원 2023두51874 등 일관된 법리). 직무 폐지를 명분으로 한 정리해고는 폐지의 합리성과 잔여 직무·부서로의 재배치 가능성 검토 의무가 핵심 다툼 영역입니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '구조조정 직무 폐지 정리해고에서 다툴 수 있는 4단계 입증',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제24조 정리해고 4요건을 단계별로 점검하는 것이 핵심입니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요</strong> — 회사 전체의 경영 위기인지 또는 본인 직무 부서만의 사정인지 점검. 일부 사업·부서 사정만으로는 긴박성이 인정되기 어려운 사례가 있습니다.</li>\n<li><strong>② 해고 회피 노력</strong> — 직무 통합·전환배치·연수·희망퇴직·임금조정 등 해고를 피하기 위한 노력을 다 했는지 입증 책임이 사용자에게 있습니다.</li>\n<li><strong>③ 합리적·공정한 선정 기준</strong> — 누구는 잔류·누구는 해고된 기준의 객관성. 직무 폐지를 사유로 들 때 잔여 직무 재배치 후보자 선정 기준이 합리적인지 점검.</li>\n<li><strong>④ 근로자대표 협의 (50일 전)</strong> — 정리해고 50일 전 근로자대표에게 통보하고 성실한 협의를 거쳐야 하며, 절차 위반은 그 자체로 효력 부정 정황입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직무 폐지 = 정리해고 정당성 자동 인정이 아닙니다. ②번 재배치 의무가 잔여 부서·자회사로 확장되는 사례가 다수이며, 이 점이 가장 큰 다툼 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 구조조정 자료 보존</strong> (즉시) — 회사 구조조정 공고문, 직무 폐지 결정문, 본인 해고통보서·사유서, 회사 측 정리해고 표기 확인.</li>\n<li><strong>2단계 — 잔여 직무·재배치 정황 정리</strong> — 폐지 직무와 유사한 잔여 직무 존재 여부, 같은 부서 동료의 잔류 여부, 신규 채용 정황.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 4요건(긴박성·회피노력·선정기준·협의절차) 단계별 입증.</li>\n<li><strong>5단계 — 판정·재심·행정소송</strong> — 인용 시 원직복직(또는 잔여 유사 직무) + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">구조조정 직무 폐지 해고 사안에서 정리해고 4요건 점검을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">정리해고 4요건 검증 + 재배치 가능성 검증 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>구조조정 공고·직무 폐지 결정문</strong> — 폐지 범위·시점·잔여 사업 자료.</li>\n<li><strong>해고통보서·사유서</strong> — 정리해고/통상해고 표기, 회피 노력·선정 기준 기재 여부.</li>\n<li><strong>근로자대표 협의 자료</strong> — 50일 전 통보·협의 기록 (없으면 절차 위반 정황).</li>\n<li><strong>회사 재무·경영 자료</strong> — 긴박한 경영상 필요 입증 검증용 (영업이익·매출·신규 사업 자료).</li>\n<li><strong>잔여 직무·부서 자료</strong> — 폐지 직무와 유사한 잔여 직무, 같은 부서 동료 처우.</li>\n<li><strong>신규 채용 공고</strong> — 같은 시기 회사·계열사 신규 채용 (해고 회피 노력 부재 정황).</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 IR 자료·언론 보도에서 사업 확대·신규 투자 표명이 있다면 "긴박한 경영상 필요" 주장과 모순되는 정황 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"긴박한 경영상 필요" 주장 반박</strong> — 회사 전체 재무가 양호한데 일부 부서만 폐지한 경우 긴박성이 인정되기 어려운 사례가 있습니다(대법원 91다3192 취지).</li>\n<li><strong>"해고 회피 노력 다 했다" 반박</strong> — 잔여 직무 재배치, 임금조정 제안, 희망퇴직 절차 등 구체적 노력 자료를 사용자가 입증해야 합니다.</li>\n<li><strong>"선정 기준 객관적" 반박</strong> — 평가 항목·점수·동료 비교 자료 요구. 직급·연차·근태 등 표면적 기준 외 차별적 잣대 점검.</li>\n<li><strong>50일 전 협의 부재</strong> — 협의 자체가 없거나 형식적이었다면 절차 위법 단독으로 부당해고 사유.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 정리해고 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 근로자대표 협의 위반 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 정리해고 후 회사가 같은 직무를 외주·자회사로 분리해 운영한다면 "위장 폐지" 정황으로 평가될 수 있어, 해고 후 본인 직무 처리 정황을 추적·기록해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업 일부 폐지 통상해고와 폐업 동등성 입증책임',
        summary:
          '대법원 2023두57876 사건(대법원, 2024.10.25 선고)에서 법원은 사업을 여러 부문으로 나누어 경영하던 사용자가 일부 사업 폐지를 이유로 그 사업 부문 근로자를 해고한 경우 폐업으로 인한 통상해고로서 예외적으로 정당하기 위해서는 일부 사업의 폐지·축소가 사업 전체의 폐지와 같다고 볼 만한 특별한 사정이 인정되어야 하며, 그 입증책임은 사용자에게 있다고 판시했습니다.',
        takeaway: '구조조정 명목 직무 폐지가 정리해고 4요건을 갖추지 못한 채 통상해고로 처리됐다면 폐업 동등성을 사용자가 입증해야 하므로, 회사 추상적 경영 사정 주장만으로는 정당성 인정이 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '회사 전체는 적자가 아닌데 본인 부서만 적자라며 해고했어요. 긴박한 경영상 필요로 인정되나요?',
        answer:
          '<strong>원칙적으로 인정되기 어려운 사례가 있습니다.</strong> 대법원은 "법인의 일부 사업부문 수지만을 기준으로 긴박한 경영상 필요를 판단할 수 없다"는 취지를 일관되게 보여 왔습니다.',
      },
      {
        question: '50일 전 통보 없이 갑자기 해고됐어요. 그것만으로 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 정리해고 50일 전 근로자대표 협의 의무 위반은 그 자체로 절차 위법이며 부당해고 사유가 됩니다.',
      },
      {
        question: '해고 후 회사가 같은 직무를 외주로 돌렸어요. 의미가 있나요?',
        answer:
          '<strong>강력한 정황 자료입니다.</strong> 직무 폐지를 명분으로 해고하면서 외주·자회사로 같은 업무를 이전했다면 "위장 폐지" 정황으로 평가될 여지가 있습니다.',
      },
      {
        question: '인용되면 폐지된 직무로 복직되나요? 잔여 부서로 가나요?',
        answer:
          '<strong>원직 복직이 원칙이지만 직무가 실제 폐지된 경우 잔여 유사 직무로의 재배치가 검토되는 사례가 있습니다.</strong> 합의 단계에서 금전보상으로 조정되는 경우도 많습니다.',
      },
      {
        question: '같은 부서에서 누구는 남고 누구는 해고됐는데 회사는 "객관적 기준"이라고 합니다',
        answer:
          '<strong>선정 기준의 객관성·공정성 입증 책임은 사용자에게 있습니다.</strong> 평가 항목·점수·동료 비교 자료를 요구해 합리성을 다툴 수 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '구조조정 정리해고 부당기준', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '구조조정 우선 재고용권', href: '/guide/dismissal/dismissal-restructuring-recall-priority-rights' },
      { label: '폐업·사업장 폐쇄 정리해고', href: '/guide/dismissal/dismissal-workplace-closure-layoff' },
      { label: '회사 합병 사업부문 폐지 해고', href: '/guide/dismissal/dismissal-cooperation-merger-redundancy-defense' },
      { label: '경제 사정 임금삭감 거부 해고', href: '/guide/dismissal/dismissal-economic-layoff-paycut-refusal' },
    ],
  },

  // ─── 4. dismissal / dismissal-overtime-refusal-disciplinary ───
  {
    domain: 'dismissal',
    slug: 'dismissal-overtime-refusal-disciplinary',
    keyword: '정시 퇴근 연장근로 거부 징계해고',
    questionKeyword: '정시 퇴근·연장근로 거부를 사유로 징계해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '정시 퇴근 사유 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '정시 퇴근 사유 징계해고 다투는 4가지 합의 원칙 | 로앤가이드',
      description:
        '정시 퇴근·연장근로 거부를 이유로 징계해고됐다면 근로기준법 제53조 합의 원칙과 비례성 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"매주 야근·주말 근무를 회사가 일방 지시했고, 본인은 계속 정시 퇴근하며 연장근로 거부 의사를 밝혔어요. 그런데 \'근무 태도 불량\'·\'팀워크 저해\' 명목으로 갑자기 징계해고 통보를 받았어요. 정시 퇴근이 해고 사유가 될 수 있는 건지 막막합니다." 근로기준법 제53조는 연장근로를 1주 12시간 한도 내에서 당사자 간 합의에 의해 가능하다고 규정합니다(합의 원칙). 따라서 근로자가 합의하지 않은 연장근로 지시를 거부하는 것은 정당한 권리행사이며, 이를 이유로 한 징계는 원칙적으로 정당한 이유가 인정되기 어려운 사례가 있습니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 정시 퇴근·연장근로 거부 사유 징계해고에서 다툴 수 있는 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 원칙·정당한 권리행사·비례성·차별 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로기준법 제53조 합의 원칙</strong> — 연장근로는 1주 12시간 한도 내에서 당사자 합의로 가능합니다. 합의 없는 일방 지시는 강제력이 없으며 거부가 정당한 권리행사입니다.</li>\n<li><strong>② 근로계약·취업규칙상 연장근로 약정</strong> — 입사 시 포괄적 연장근로 동의가 있더라도 그 범위·한도가 명확해야 하고, 제53조 한도(1주 12시간)를 넘는 강제는 무효 정황입니다.</li>\n<li><strong>③ 비례성 평가</strong> — 연장근로 거부가 사실이라도 견책·감봉·정직 등 중간 단계 부재 채 곧바로 해고로 간 경우 비례성 위반 정황입니다.</li>\n<li><strong>④ 차별 처분</strong> — 같은 부서에서 다른 동료도 정시 퇴근하는데 본인에게만 적용된 잣대라면 평등권·차별 정황으로 평가될 여지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정시 퇴근 자체는 정당한 권리행사입니다. 회사가 "팀워크 저해"·"근무 태도 불량" 같은 추상적 사유로 묶어 해고했다면 사유의 실질이 결국 연장근로 거부인지 점검하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 흐름으로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 + 근로감독관 신고 병행 트랙이 효과적인 사례가 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연장근로 지시·거부 자료 보존</strong> (즉시) — 회사 측 야근·주말근무 지시 메일·메신저, 본인 거부·합의 부재 의사 표시 자료, 정시 퇴근 정황 (출퇴근 기록).</li>\n<li><strong>2단계 — 징계처분서·해고통보서 분석</strong> — 사유의 추상성·실질, 본인 변명 기회 부여 여부, 동료 처우 비교.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 근로감독관 신고 병행 (선택)</strong> — 미지급 연장근로수당이 있다면 노동포털(labor.moel.go.kr)에 임금체불 진정. 처리기간 25일. 근로기준법 제53조 위반 정황 자료가 노동위에서도 활용됩니다.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정시 퇴근·연장근로 거부 사유 해고 사안에서 합의 원칙·비례성 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 연장근로 정황 + 거부 의사 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙</strong> — 연장근로 약정 범위·한도 점검.</li>\n<li><strong>야근·주말근무 지시 자료</strong> — 메일·메신저·구두 지시 정황.</li>\n<li><strong>본인 거부·합의 부재 의사 표시</strong> — 메일·메신저 답신, 동료 증인 확보.</li>\n<li><strong>출퇴근 기록·근태 자료</strong> — 정시 퇴근 정황 객관 자료.</li>\n<li><strong>해고통보서·징계처분서</strong> — 사유의 추상성·실질 점검.</li>\n<li><strong>같은 부서 동료 처우</strong> — 정시 퇴근하는 동료의 처분 비교 (차별 정황).</li>\n<li><strong>최근 12개월 급여명세서·연장근로수당 명세</strong> — 임금상당액 + 미지급 수당 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회식·주말근무 거부도 동일 법리가 적용되는 사례가 있어, 회식 강제 정황·거부 의사 표시 자료도 함께 정리해두면 다툼이 풍성해집니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "근무 태도·팀워크 사유"라고 추상적으로 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유의 추상성·실질 점검·비례성·차별 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>사유의 실질</strong> — 추상적 표현 뒤의 구체적 행위가 무엇인지 점검. 결국 연장근로 거부라면 정당한 권리행사 영역입니다.</li>\n<li><strong>변명 기회 부여 절차</strong> — 징계위원회 출석·변명 기회 등 절차 준수 여부. 절차 하자는 그 자체로 효력 부정 정황.</li>\n<li><strong>중간 단계 부재 비례성</strong> — 견책·감봉 없이 곧바로 해고로 간 패턴은 비례성 위반 정황입니다.</li>\n<li><strong>같은 행위 동료 처우 비교</strong> — 같은 정시 퇴근 동료의 처분 비교 (차별 정황).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 단지 "성과 부진"으로 사유를 변경할 가능성이 있어, 거부 시점·해고 시점 사이의 평가 변화 자료(거부 전 정상 평가)를 함께 보존해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근무성적 불량 사유 해고의 정당성 기준',
        summary:
          '대법원 2021두33470 사건(대법원, 2023.12.28 선고)에서 법원은 사용자가 근무성적·근무능력 불량을 이유로 해고할 때 평가가 공정·객관적 기준에 따라 이루어졌어야 할 뿐 아니라 사회통념상 고용관계를 계속할 수 없을 정도여야 정당성이 인정되며, 이때 사용자가 교육·전환배치 등 개선 기회를 부여했는지 등이 종합 고려된다고 판시했습니다.',
        takeaway: '정시 퇴근·연장근로 거부를 "근무 태도 불량"으로 묶어 해고하는 패턴은 평가의 객관성·개선 기회 부여 여부 점검으로 다툴 수 있어, 평가 기준·동료 비교 자료가 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 "포괄적 연장근로 동의" 조항이 있어요. 그래도 거부할 수 있나요?',
        answer:
          '<strong>거부할 수 있는 사례가 있습니다.</strong> 포괄 동의도 한도(1주 12시간 등)·범위가 명확해야 하고, 한도 초과 강제는 무효이며 거부가 정당한 권리행사로 평가될 여지가 있습니다.',
      },
      {
        question: '주말 회식 참석 거부도 해고 사유로 묶일 수 있나요?',
        answer:
          '<strong>회식·체육대회 등 근무 외 행사 강제는 원칙적으로 정당한 사유가 되기 어렵습니다.</strong> 업무 관련성·강제성 점검이 핵심입니다.',
      },
      {
        question: '본인은 정시 퇴근하는데 다른 동료들은 야근하면서 본인만 해고됐어요',
        answer:
          '<strong>같은 행위에 대한 차별적 처분은 평등권 위반 정황입니다.</strong> 동료 처우 비교 자료가 강력한 다툼 자료가 됩니다.',
      },
      {
        question: '미지급 연장근로수당이 있는데 노동위 구제신청과 같이 청구할 수 있나요?',
        answer:
          '<strong>임금체불은 노동위가 아닌 노동청·민사 트랙입니다.</strong> 두 트랙을 병행하며 정황 자료를 상호 활용할 수 있습니다.',
      },
      {
        question: '해고 사유서에 "팀워크 저해"라고만 적혀 있어요. 사유가 충분한가요?',
        answer:
          '<strong>구체적·실질적 사유가 아닌 추상적 표현은 근로기준법 제27조 서면통지 요건 미흡 정황으로 평가될 여지가 있습니다.</strong> 통보 형식 자체가 다툼 영역입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '연장근로 거부 구제 절차', href: '/guide/dismissal/dismissal-overtime-refusal-relief' },
      { label: '단일 위반 징계해고 비례성', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
    ],
  },

  // ─── 5. dismissal / dismissal-loyalty-oath-refusal ───
  {
    domain: 'dismissal',
    slug: 'dismissal-loyalty-oath-refusal',
    keyword: '사상 정치 발언 사유 해고',
    questionKeyword: '사상·정치 발언이나 SNS 정치성향 표시를 사유로 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '사상 정치 발언 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사상 정치 발언 사유 해고 다투는 4가지 양심 자유 | 로앤가이드',
      description:
        '사상·정치 발언이나 SNS 정치성향 표시를 사유로 해고됐다면 헌법상 양심·사상의 자유와 업무 관련성 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"개인 SNS에 정치 이슈에 대한 의견을 올렸다는 이유로 회사가 \'회사 명예 훼손\'·\'고객 항의 우려\' 명목으로 해고를 통보했어요. 근무 시간이나 회사 자료와 무관한 개인 표현인데도 해고 사유가 될 수 있는지 막막합니다." 헌법 제19조 양심의 자유, 제17조 사생활의 비밀과 자유, 제21조 표현의 자유는 사적 영역에서의 사상·정치 표현을 보호합니다. 회사가 이를 사유로 해고하려면 ① 그 표현이 업무 수행에 구체적 지장을 줬다는 객관적 사실, ② 회사 명예·이익에 대한 객관적 손해 발생, ③ 사적 영역과 업무 영역의 명확한 분리 위반 등 엄격한 입증 부담을 집니다. 노동위 구제신청은 해고일 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: 'Q. 사상·정치 발언 사유 해고에서 다툴 수 있는 4가지 양심 자유 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 헌법상 보호 영역 + 업무 관련성 부재 + 객관적 손해 부재 + 비례성 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 헌법상 보호 영역</strong> — 사상·정치 발언, SNS 의사 표시, 종교 활동 등은 헌법 제19조 양심의 자유, 제21조 표현의 자유의 핵심 보호 영역으로 원칙적으로 회사 인사권 평가 대상이 아닙니다.</li>\n<li><strong>② 업무 관련성 부재</strong> — 근무 시간 외, 회사 자료 미사용, 업무 미언급 등 업무 영역과 분리된 사적 표현이라면 해고 사유로 평가하기 어려운 사례가 있습니다.</li>\n<li><strong>③ 객관적 손해 발생 부재</strong> — "회사 명예 훼손" 주장은 외부 보도·고객 항의·매출 손실 등 객관적 손해 발생 사실을 회사가 입증해야 합니다. 추상적 우려만으로는 부족한 사례가 있습니다.</li>\n<li><strong>④ 비례성 + 차별</strong> — 견책·면담 등 중간 단계 부재 채 곧바로 해고로 간 경우 비례성 위반, 같은 사내에서 다른 정치성향 표현은 묵인하면서 본인에게만 적용했다면 차별 정황입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ②번 업무 관련성과 ③번 객관적 손해 입증 책임이 회사에 있다는 점이 가장 큰 안전장치입니다. 사적 영역의 표현이 어떻게 회사 업무에 지장을 줬는지 회사가 구체적으로 입증해야 합니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 흐름으로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위 + 인권위 진정 병행 트랙도 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고통보서·사유서 보존</strong> (즉시) — 회사가 든 사유의 추상성·구체성, 본인 표현 인용 부분, 외부 손해 사실 인용 여부 점검.</li>\n<li><strong>2단계 — 본인 표현 정황 정리</strong> — 표현 시점·플랫폼·표현 내용, 근무 시간·회사 자료와의 관련성, 동료의 비슷한 표현 비교.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부.</li>\n<li><strong>4단계 — 인권위 진정 병행 (선택)</strong> — 사상·신앙·정치 사유 차별이 결합된 경우 국가인권위원회(humanrights.go.kr·국번없이 1331) 진정 트랙도 함께 검토. 위원회 권고가 노동위·민사에 자료로 활용됩니다.</li>\n<li><strong>5단계 — 심문회의·판정</strong> (접수일 60일 이내) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사상·정치 발언 사유 해고 사안에서 양심 자유·업무 관련성 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사적 영역 입증 + 회사 측 손해 부재 입증 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>해고통보서·사유서</strong> — 사유의 구체성·표현 인용·외부 손해 인용 여부.</li>\n<li><strong>본인 표현 자료</strong> — SNS 게시물, 발언 시점·장소, 표현 내용 사본.</li>\n<li><strong>표현과 업무 분리 자료</strong> — 근무 시간 외, 회사 계정·자료 미사용 정황.</li>\n<li><strong>본인 업무 성과·근태 자료</strong> — 표현이 업무에 지장을 주지 않았다는 객관 자료.</li>\n<li><strong>회사가 든 외부 손해 입증 자료</strong> — 보도·고객 항의·매출 손실 자료 (입증 부담 점검).</li>\n<li><strong>같은 사내 비슷한 표현 동료 자료</strong> — 차별 정황 입증.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 본인의 사적 표현을 사내·외부에 공유한 정황이 있다면 명예훼손·개인정보 누설 별도 청구 영역도 검토할 여지가 있어, 누가 누구에게 표현을 공유·확산했는지 시간순으로 메모해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "회사 이미지·명예에 영향"이라고 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 객관적 손해 입증·업무 분리·비례성·차별 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>객관적 손해 입증 책임</strong> — 회사가 추상적 "이미지 훼손"이 아닌 매출 손실·고객 이탈·외부 보도 등 객관적 손해를 입증해야 합니다.</li>\n<li><strong>표현과 업무의 분리</strong> — 근무 시간 외, 개인 계정, 회사 자료 미사용이라면 사적 영역으로 평가될 여지가 큽니다.</li>\n<li><strong>중간 단계 부재 비례성</strong> — 면담·견책·게시물 삭제 요청 등 중간 단계 없이 곧바로 해고로 간 경우 비례성 위반 정황입니다.</li>\n<li><strong>차별·평등 점검</strong> — 같은 사내에서 다른 정치성향 표현은 묵인하면서 본인에게만 적용된 잣대라면 헌법 제11조 평등권 위반 정황입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 사상·정치 사유를 추상적 "신뢰관계 파탄"으로 포장할 가능성이 있어, 표현이 회사·동료에게 알려진 경위와 그것이 회사 손해로 이어진 구체적 정황(또는 이어지지 않은 정황)을 함께 정리해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 신문기자 정치활동 사유 해고와 양심 자유',
        summary:
          '대법원 92다44862 사건(대법원, 1993.04.27 선고)에서 법원은 신문기자가 재직 중 정치활동을 했다는 사유로 해고된 사안에서 정당법 제17조 위반이 있더라도 그것이 당연히 언론인 신분 상실을 가져오지 않으며, 사상·정치 표현 자체가 곧 해고 정당성을 자동 인정하지 않는다는 취지를 보였습니다.',
        takeaway: '사상·정치 표현은 헌법상 보호 영역으로 원칙적으로 해고 사유가 되기 어렵고, 회사가 해고하려면 그 표현과 업무 수행·회사 손해 사이의 구체적 인과관계를 입증해야 하므로, 표현의 사적 영역 정황을 보존해두는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: 'SNS 게시물을 회사가 어떻게 알았는지도 모르는데 그래도 해고 사유가 되나요?',
        answer:
          '<strong>알게 된 경위 자체도 다툼 영역입니다.</strong> 회사가 부당한 방법(타인 계정 사찰·동료 신고 강요)으로 자료를 입수했다면 자료 자체의 신뢰성이 흔들립니다.',
      },
      {
        question: '회사 행사에서 정치적 발언을 했어요. 이건 사적 영역으로 보기 어렵지 않나요?',
        answer:
          '<strong>업무 관련성·표현의 경위·청중 등이 종합 평가됩니다.</strong> 회사 행사라도 자유로운 의견 교환 자리였다면 곧바로 해고 사유로 보기 어려운 사례가 있습니다.',
      },
      {
        question: '회사가 종교 활동을 명목으로 해고했어요. 동일하게 다툴 수 있나요?',
        answer:
          '<strong>같은 법리가 적용됩니다.</strong> 헌법 제20조 종교의 자유는 더 강한 보호 영역이며, 업무 관련성 부재 시 해고 사유로 인정되기 어려운 사례가 있습니다.',
      },
      {
        question: '회사가 "고객 항의가 들어왔다"고 주장하는데 항의 내용을 보여주지 않습니다',
        answer:
          '<strong>객관적 손해 입증 책임은 회사에 있습니다.</strong> 노동위·민사 단계에서 문서제출명령으로 항의 자료 제출을 요구할 수 있고, 자료 거부 자체가 정황으로 평가됩니다.',
      },
      {
        question: '인용되면 같은 회사로 복직하는데 분위기가 회복될까요?',
        answer:
          '<strong>원직복직 외에 금전보상명령(통상 6~12개월치)을 신청할 수 있습니다.</strong> 분위기 회복이 어렵다고 판단되면 합의 단계에서 금전보상으로 종결되는 사례가 많습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: 'SNS 비판 글 해고 정당성', href: '/guide/dismissal/dismissal-sns-criticism-legitimacy' },
      { label: 'SNS 사적 게시물 해고 다툼', href: '/guide/dismissal/dismissal-social-media-private-post-fired' },
      { label: '온라인 댓글 사유 해고', href: '/guide/dismissal/dismissal-online-comment-cause-fired' },
      { label: '사내 동거 미혼관계 명목 해고', href: '/guide/dismissal/dismissal-cohabit-unmarried-affair-pretext' },
      { label: '재택근무 디지털 모니터링 위반 해고', href: '/guide/dismissal/dismissal-employee-monitoring-data-violation' },
    ],
  },
];
