import { SpokePage } from '../spoke-pages';

// batch47 retirement 2개
//
// 고유 존재 이유:
// 1. 이 페이지는 회사 합병·분할 후 퇴직금 기산점이 리셋됐다고 주장하는 사용자에게
//    계속고용 법리와 평균임금 재계산 다툼 절차를 정리하는 페이지다.
// 2. 이 페이지는 해외파견 중 현지 법인에서 임금을 받은 근로자가
//    귀임 후 퇴직금 산정 시 파견 기간이 빠져 있는 문제를 다투도록 돕는 페이지다.

export const spokesBatch47Retirement: SpokePage[] = [
  // ─── 1. retirement / merger-acquisition-recalc ───
  {
    domain: 'retirement',
    slug: 'retirement-merger-acquisition-recalc',
    keyword: '회사 합병 후 퇴직금 재계산',
    questionKeyword:
      '회사가 합병됐는데 새 회사에서 "합병 전 기간은 퇴직금 기산에서 빠진다"고 하는데 맞나요?',
    ctaKeyword: '합병 후 퇴직금 재계산 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '회사 합병 후 퇴직금 재계산 다툼 4가지 핵심 | 로앤가이드',
      description:
        '합병·분할 후 회사가 이전 근속 기간을 퇴직금에서 제외하려 한다면, 계속고용 법리와 근로자퇴직급여보장법으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"합병 전 10년, 합병 후 5년 총 15년 근무했는데 새 회사가 합병 시점부터 5년치만 퇴직금을 주겠다고 합니다"라는 상담이 이어지고 있습니다. 합병·분할로 사용자가 바뀌었더라도 근로관계가 승계됐다면 합산 근속연수를 기준으로 퇴직금을 산정해야 한다는 것이 법원의 일관된 태도입니다. 합병 전후 고용승계 여부·평균임금 기준·IRP 지급 여부를 한 묶음으로 정리하면 미지급 퇴직금을 청구할 수 있습니다. 퇴직금 청구권 소멸시효는 퇴직일로부터 3년이므로 시간이 갈수록 불리해집니다.</p>',
    sections: [
      {
        title: 'Q. 합병 시 고용이 승계됐는지 어떻게 판단하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용자만 바뀌고 근로조건·업무가 유지됐다면 근로관계 승계로 볼 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>포괄양수도·합병</strong> — 상법상 합병 시 근로관계는 원칙적으로 존속법인에 포괄 승계됩니다.</li>\n<li><strong>사업 분할</strong> — 분할 계획서에 "특정 근로자의 고용승계 제외" 조항이 없으면 승계 처리가 원칙입니다.</li>\n<li><strong>사실상 동일 업무</strong> — 사업장·업무·지휘감독 구조가 합병 전후 동일하면 단순 사용자 변경으로 평가됩니다.</li>\n<li><strong>고용승계 합의서 유무</strong> — 합병 당시 "퇴직금 정산 후 재입사" 합의가 있었는지 확인합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합병 시 "퇴직금 정산 후 재입사" 합의를 했더라도 그 합의가 근로자에게 불리하면 근로기준법 제15조에 따라 무효로 다툴 소지가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 합병 전 기간이 빠진 평균임금을 어떻게 바로잡나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 합산 근속기간을 기준으로 평균임금을 재계산해 차액을 청구하는 것이 핵심입니다.</strong></p>\n<ul>\n<li><strong>근속기간 합산</strong> — 합병 전 회사 재직기간 + 합병 후 기간을 모두 합산한 총 근속연수 기준으로 산정합니다.</li>\n<li><strong>평균임금 기준일</strong> — 퇴직 전 3개월 임금 총액 ÷ 해당 기간 총 일수로 산정 (근기법 제2조 제1항 제6호).</li>\n<li><strong>목표 인센티브 포함 여부</strong> — 계속적·정기적으로 지급된 인센티브는 평균임금 산정 기초 임금에 포함될 소지가 있습니다(대법원 2021다248299 참조).</li>\n<li><strong>차액 계산</strong> — (정당 퇴직금) - (이미 수령한 퇴직금) = 추가 청구 가능 금액.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 재계산, AI로 먼저 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">합병 전후 근속기간·평균임금 산정 방식을 AI가 분석해 정리해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고용노동부 진정 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 공식 절차를 참고하면, 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 내용증명 발송</strong>(퇴직일 + 14일 경과 확인 후) — 합산 근속기간 기준 퇴직금 차액 지급을 요청하는 내용증명을 사업주에게 발송합니다. 시효 중단 + 협상 효과.</li>\n<li><strong>2단계 — 고용노동부 진정 접수</strong>(퇴직금 청구권 소멸시효 3년 이내) — 노동포털(labor.moel.go.kr) 또는 사업장 관할 지방고용노동청 방문. 진정서 + 근로계약서 + 급여명세서(체불 기간) + 합병 전 재직 입증자료 지참.</li>\n<li><strong>3단계 — 근로감독관 조사</strong>(처리 기간 약 25일) — 감독관이 배정돼 사용자·근로자 출석 조사. 합산 근속기간 입증 서류를 집중 제출합니다.</li>\n<li><strong>4단계 — 시정지시 후 14일 내 지급</strong> — 체불 확인 시 사업주에 지급 명령. 미이행 시 형사 입건 → 검찰 송치.</li>\n<li><strong>5단계 — 간이대지급금 검토</strong>(사업주 미이행 시) — 고용노동부 체불확인서 발급 후 근로복지공단에 청구(신청 후 14일 내 지급). 최종 3년분 퇴직금 한도 적용.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 합병 시 "재입사 동의서"에 서명했다고 포기하지 마세요. 근로자에게 불리한 합의는 근로기준법 제15조 위반으로 무효가 될 소지가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "합병 시 퇴직금 정산 합의했다"고 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의의 자발성·대가 지급 여부·불이익성을 3가지 축으로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>자발적 합의인가</strong> — 합병 당시 근로자가 자발적으로 정산에 동의했는지, 또는 사실상 강요된 것인지 확인합니다.</li>\n<li><strong>실제 정산금 수령</strong> — 합병 시점에 합산 기간 기준 정당한 퇴직금이 실제로 지급됐는지 확인합니다. 일부만 지급됐다면 차액 청구 가능.</li>\n<li><strong>불이익 변경 판단</strong> — "퇴직금 기산일 리셋" 조항이 취업규칙 불이익 변경에 해당하면 근로자 과반수 동의가 없는 한 효력이 없습니다(근기법 제94조).</li>\n<li><strong>IRP 지급 의무</strong> — 2022년 4월 14일 이후 퇴직자는 IRP 계좌로 의무지급 대상입니다. 미이행 시 별도 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합병 전후 급여명세서·인사명령서·조직도를 비교하면 근로관계 승계 정황을 입증하기 쉬워집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 목표 인센티브의 임금성과 평균임금 산입',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 계속적·정기적으로 지급되고 사용자에게 지급의무가 확정된 목표 인센티브는 근로의 대가인 임금에 해당하므로 평균임금 산정의 기초에 포함돼야 한다고 판시했습니다.',
        takeaway:
          '합병 전 받던 정기 인센티브가 평균임금 계산에서 빠졌다면 퇴직금 차액을 추가로 다툴 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '합병 전 회사에서 이미 퇴직금 일부를 받았는데 다시 청구할 수 있나요?',
        answer:
          '<strong>수령한 금액을 공제하고 정당 퇴직금과의 차액을 청구할 수 있습니다.</strong> 중간 정산액이 합산 기간 기준 퇴직금보다 적으면 차액이 남게 돼요.',
      },
      {
        question: '합병 후 3년이 지났는데 시효가 끝난 건가요?',
        answer:
          '<strong>퇴직 시점이 기산일입니다.</strong> 합병일이 아니라 최종 퇴직일로부터 3년이 소멸시효이므로, 재직 중이라면 아직 시효가 진행 중이지 않습니다.',
      },
      {
        question: '"재입사 동의서"에 서명했는데 이미 늦은 건가요?',
        answer:
          '<strong>근로자에게 불리한 조항은 근기법 제15조에 따라 무효로 다툴 소지가 있습니다.</strong> 서명 경위·실제 정산금 지급 여부를 정리해 진정 시 함께 제출하는 것이 좋아요.',
      },
      {
        question: '사업 분할의 경우도 동일한가요?',
        answer:
          '<strong>분할 계획서에 고용 제외 조항이 없으면 근로관계 승계가 원칙입니다.</strong> 분할등기 이전에 교부된 고용승계 제외 통보는 그 효력을 별도로 다툴 수 있어요.',
      },
      {
        question: '노동위 구제신청과 진정을 동시에 해도 되나요?',
        answer:
          '<strong>퇴직금 미지급은 민사·형사(진정)로, 부당해고 등은 노동위로 각각 병행하는 것이 일반적입니다.</strong> 퇴직금 청구는 지방노동청 진정이 더 빠른 경로예요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      {
        label: '퇴직금 평균임금 산정 기준',
        href: '/guide/retirement/retirement-average-wage-calculation',
      },
      {
        label: '중간정산 퇴직금 합산 여부',
        href: '/guide/retirement/retirement-interim-settlement-inclusion',
      },
      {
        label: '근로자퇴직급여보장법 IRP 의무지급',
        href: '/guide/retirement/retirement-irp-mandatory-payment',
      },
      {
        label: '퇴직금 미지급 진정 절차',
        href: '/guide/retirement/retirement-unpaid-complaint-procedure',
      },
      {
        label: '취업규칙 불이익 변경 무효 다툼',
        href: '/guide/dismissal/dismissal-work-rules-disadvantageous-change',
      },
    ],
  },

  // ─── 2. retirement / overseas-dispatch-period ───
  {
    domain: 'retirement',
    slug: 'retirement-overseas-dispatch-period',
    keyword: '해외파견 기간 퇴직금 산입',
    questionKeyword:
      '해외파견 중 현지 법인에서 임금을 받았는데 귀임 후 퇴직금 계산에서 파견 기간이 빠져 있어요',
    ctaKeyword: '해외파견 퇴직금 산입 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '해외파견 기간 퇴직금 산입 다툼 4단계 | 로앤가이드',
      description:
        '해외파견 중 현지 법인 급여를 받았다는 이유로 파견 기간을 퇴직금에서 빼고 있다면, 근로관계 유지 여부와 평균임금 산정 기준으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"7년간 국내 본사에 다니다 3년 해외파견을 나갔는데, 귀임 후 퇴직하니 퇴직금이 4년치만 나왔어요"라는 사연이 적지 않습니다. 해외파견 중 현지 법인 계좌로 임금을 받더라도 국내 본사의 지휘·감독 아래 근로를 계속했다면 근속기간이 이어진 것으로 볼 소지가 있습니다. 파견 발령장·업무보고 이메일·국내 사회보험 유지 여부를 정리하면 산입 누락 기간에 대한 퇴직금 차액을 청구하는 데 도움이 됩니다. 퇴직금 청구권 소멸시효는 퇴직일로부터 3년이니 지체하지 않는 것이 중요합니다.</p>',
    sections: [
      {
        title: 'Q. 해외파견 중에도 국내 근로관계가 유지되는 건가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 국내 본사의 지휘·감독 아래 근로가 계속됐다면 근로관계가 유지된 것으로 검토될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>파견 발령장</strong> — 국내 본사가 발행한 해외파견 명령서·인사발령서가 있으면 근로관계 유지 정황입니다.</li>\n<li><strong>업무보고 라인</strong> — 현지에서도 국내 본사 임원·팀장에게 업무보고를 한 이메일·결재 이력.</li>\n<li><strong>국내 4대보험 유지</strong> — 파견 중에도 국민연금·건강보험이 국내에서 계속 납부됐는지 확인합니다.</li>\n<li><strong>귀임 복직 처리</strong> — 귀임 후 별도 재입사 절차 없이 이전 직급·호봉으로 복직했는지 확인합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "현지 법인에서 급여를 받았다"는 사실 하나만으로 국내 근로관계가 단절됐다고 보기는 어렵습니다. 지휘·감독 구조가 핵심입니다.</blockquote>',
      },
      {
        title: 'Q. 파견 기간 중 평균임금은 어떻게 산정하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 파견 중 현지 임금이 국내 임금보다 낮거나 높을 때 각각 다른 기준이 적용될 수 있습니다.</strong></p>\n<ul>\n<li><strong>현지 임금이 낮은 경우</strong> — 파견 기간이 평균임금에 포함되면 퇴직 전 3개월 평균임금이 낮아질 수 있으므로, 파견 기간 제외 후 국내 임금만으로 재계산을 요청할 수 있습니다.</li>\n<li><strong>현지 임금이 높은 경우</strong> — 파견 수당·주거비 등이 임금성 있다면 평균임금에 포함될 소지가 있습니다.</li>\n<li><strong>근속기간 기준 퇴직금</strong> — 근로자퇴직급여보장법 제8조에 따라 계속근로기간 1년에 대해 30일분 이상 평균임금 지급 의무가 있습니다.</li>\n<li><strong>이중급여 공제 문제</strong> — 현지 법인이 별도 퇴직금을 지급한 경우 그 금액을 공제하고 차액을 청구하는 구조로 정리됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 해외파견 퇴직금, AI로 먼저 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">파견 기간 산입 여부와 평균임금 재계산 가능성을 AI가 분석해 정리해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 퇴직금 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 공식 절차를 참고하면, 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근속기간·임금 자료 정리</strong> — 파견 발령장, 파견 전후 급여명세서(최소 퇴직 전 12개월), 국내 4대보험 납부 내역, 업무보고 이메일을 한 묶음으로 정리합니다.</li>\n<li><strong>2단계 — 내용증명 발송</strong>(퇴직일 + 14일 경과 후) — 파견 기간 포함 합산 근속기간 기준 퇴직금 차액 지급을 요청합니다. 소멸시효 중단 효과.</li>\n<li><strong>3단계 — 고용노동부 진정 접수</strong>(퇴직금 청구권 소멸시효 3년 이내) — 노동포털(labor.moel.go.kr) 또는 사업장 관할 지방고용노동청에 접수. 파견 발령장·4대보험 납부확인서 첨부 필수.</li>\n<li><strong>4단계 — 근로감독관 조사·시정지시</strong>(처리 약 25일) — 파견 기간 근로관계 유지 여부 집중 조사. 시정지시 후 14일 내 지급 명령.</li>\n<li><strong>5단계 — 간이대지급금 검토</strong>(미이행 시) — 체불확인서 발급 후 근로복지공단 청구. 신청 후 14일 내 지급. 최종 3년분 퇴직금 한도.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "현지 법인과 별도 계약서를 쓴 적 없으니 괜찮겠지" 하고 방치하면 소멸시효 3년이 지나 청구 자체가 막힐 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "파견 중 현지 법인 근로자였으니 별개"라고 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 실질적 지휘·감독 구조를 입증해 명목상 분리에 불과하다고 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>지휘·감독 이중성</strong> — 현지 법인 관리자와 국내 본사 임원이 동시에 업무 지시를 내렸다면 국내 근로관계가 유지됐다는 정황.</li>\n<li><strong>인사권 귀속</strong> — 파견 중 인사고과·승진·징계가 국내 본사에서 결정됐는지 확인합니다.</li>\n<li><strong>귀임 후 인사처리</strong> — 귀임 즉시 국내 직급으로 복직됐다면 파견이 "출장의 연장"으로 볼 여지가 있습니다.</li>\n<li><strong>현지법인 설립 목적</strong> — 단순 세무·비용 처리를 위한 페이퍼 컴퍼니라면 실질적 고용주가 국내 본사임을 주장할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 파견 발령장·업무보고 이메일·귀임 인사명령서 3종을 같은 시간선으로 정리하면 근로관계 유지 입증이 쉬워집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 완성 후 퇴직금 거절의 신의칙 위반 여부',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 사용자가 시효완성 전에 근로자의 퇴직금 청구권 행사를 불가능하게 한 특별한 사정이 없는 한 소멸시효 완성 주장이 권리남용이 되기는 어렵다며, 3년 이내 청구가 핵심이라는 취지로 판시했습니다.',
        takeaway:
          '해외파견 기간 산입 다툼도 퇴직일로부터 3년 이내 진정·청구를 서두르는 것이 가장 중요합니다.',
      },
    ],
    faq: [
      {
        question: '파견 중 현지에서 퇴직금 명목으로 금액을 받은 경우 어떻게 되나요?',
        answer:
          '<strong>현지에서 지급받은 금액을 공제한 나머지 차액을 국내에서 별도 청구할 수 있습니다.</strong> 이중 수령이 아니라 차액 보전 청구이므로 공제 후 잔액 계산이 핵심이에요.',
      },
      {
        question: '파견 기간이 10년 넘었는데도 국내 퇴직금을 청구할 수 있나요?',
        answer:
          '<strong>퇴직일로부터 3년 이내라면 전체 파견 기간에 대한 청구가 가능합니다.</strong> 국내 근로관계 유지 입증 자료가 길수록 유리하니 파견 발령장·4대보험 내역을 먼저 모으세요.',
      },
      {
        question: '파견 전 회사와 파견 후 법인 명칭이 다른데 어느 쪽에 청구하나요?',
        answer:
          '<strong>실질적으로 근로관계를 유지한 법인(대개 국내 본사)을 피진정인으로 합니다.</strong> 법인 명칭 변경·분리가 있더라도 고용 실질을 따지는 것이 원칙이에요.',
      },
      {
        question: '귀임 후 바로 권고사직을 당한 경우 부당해고와 퇴직금 다툼을 같이 할 수 있나요?',
        answer:
          '<strong>부당해고 구제신청(노동위)과 퇴직금 미지급 진정(고용노동부)은 별개 절차로 병행 가능합니다.</strong> 퇴직금 청구권 소멸시효는 해고일이 아닌 퇴직일 기준이므로 함께 준비하는 것이 좋아요.',
      },
      {
        question: '현지 법인이 이미 폐업한 경우 어떻게 청구하나요?',
        answer:
          '<strong>국내 본사가 실질적 사용자라면 본사에 직접 청구하는 방식을 검토할 수 있습니다.</strong> 현지 법인 폐업 사실 자체가 국내 근로관계 유지 정황으로 활용되기도 해요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      {
        label: '퇴직금 평균임금 산정 기준',
        href: '/guide/retirement/retirement-average-wage-calculation',
      },
      {
        label: '퇴직금 미지급 진정 절차',
        href: '/guide/retirement/retirement-unpaid-complaint-procedure',
      },
      {
        label: '간이대지급금 신청 조건',
        href: '/guide/retirement/retirement-simple-payment-eligibility',
      },
      {
        label: '파견근로자 퇴직금 산정',
        href: '/guide/retirement/retirement-dispatch-worker-calculation',
      },
      {
        label: '퇴직금 소멸시효 3년 정리',
        href: '/guide/retirement/retirement-statute-of-limitations',
      },
    ],
  },
];
