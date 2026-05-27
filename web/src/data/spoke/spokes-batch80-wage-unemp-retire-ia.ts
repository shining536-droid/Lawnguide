import { SpokePage } from '../spoke-pages';

// batch80 wage / unemployment / retirement / industrial-accident — 7개 (2026-05-28)
//
// 고유 존재 이유:
// wage 1. 임금체불 진정·간이대지급금 — 일반 임금체불 신고 류와 분기. 여기는 '체불 진정 접수 → 체불확인서 → 간이대지급금(소액체당) 청구'의 절차 트랙(사업장 영업 중 미지급) + 소정근로·최저임금 산입 임금 범위. 근기법 제43조·임금채권보장법 결합. (절차형/neutral)
// wage 2. 포괄임금 약정 연장수당 미산입 — batch79 '포괄임금 시간외 한도 초과'와 분기. 여기는 '포괄임금 약정 유효성 + 통상임금 정기·일률·고정성 기준으로 실제 연장근로가 포괄급에 포함됐다고 볼 수 있는지 차액' 트랙. 근기법 제2조·제56조 통상임금 결합. (판단형/victim)
// unemployment 3. 부서이동 임금 대폭 하락 자진퇴사 — batch79 '급여 반납 20% 거부 자진퇴사'와 분기. 여기는 '부서이동 지시로 실적급 구조상 월 평균임금 상당 비율 하락이 장래 확정 → 자진퇴사가 정당한 이직사유인지' 트랙. 고용보험법 제40조·제58조·시행규칙 별표2 결합. (판단형/victim)
// unemployment 4. 계약만료 신청·구직급여일액 산정 — 신규 절차 트랙. 여기는 '기간제 계약만료자의 수급자격 신청 절차 + 구직급여일액(평균임금) 산정·임금 범위' 트랙. 고용보험법 제45조·제46조·근기법 평균임금 결합. (절차형/neutral)
// retirement 5. 단시간 근로자 퇴직금 근로자성·청구 — 신규 절차 트랙. 여기는 '위탁/단시간 형식이라도 종속관계 실질이면 근로자 → 주 15시간 이상 퇴직금 적용 + 청구 절차' 트랙. 근퇴법 제4조·근기법 제2조 근로자성 결합. (절차형/neutral)
// retirement 6. 명예퇴직 후 미청구 퇴직급여 시효 — batch79 '퇴직금 소멸시효 신의칙'과 분기. 여기는 '명예퇴직 등 급여지급사유 발생일에 추상적 급여청구권 취득 + 청구 지연 시 소멸시효 기산·완성' 트랙. 공무원연금법 제88조 등 급여청구권 시효 결합. (판단형/victim)
// industrial-accident 7. 과로·스트레스 기존 질병 악화 업무상 질병 — 신규 절차 트랙. 여기는 '기존 질병이 업무상 과로·스트레스로 자연경과 이상 급격 악화(상당인과관계 추단) → 업무상 질병 요양급여 신청' 트랙. 산재보험법 제5조·제37조 결합. (절차형/neutral)

export const spokesBatch80WageUnempRetireIa: SpokePage[] = [
  // ─── 1. wage-arrears-complaint-simple-deposit-claim-track ───
  {
    domain: 'wage',
    slug: 'wage-arrears-complaint-simple-deposit-claim-track',
    keyword: '임금체불 진정 간이대지급금 청구 절차',
    questionKeyword: '회사가 임금을 몇 달째 안 주는데 영업은 계속하고 있어요. 노동청에 진정을 넣고 간이대지급금까지 받으려면 어떤 순서로 진행하나요?',
    ctaKeyword: '임금체불 진정 간이대지급금 청구 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '임금체불 진정·간이대지급금 — 5단계 청구 절차 | 로앤가이드',
      description:
        '몇 달째 임금이 밀렸는데 회사는 영업을 계속해 어디서부터 시작할지 막막하시다면 노동청 진정·체불확인서·간이대지급금 최대 1천만원 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"입사 때 약속한 월급이 몇 달째 밀렸는데도 회사는 멀쩡히 영업을 계속하는 사업장에 다니는 근로자입니다. 사장님은 \'곧 자금이 돈다\'며 미루기만 하고, 정작 들어와야 할 기본급과 연장수당은 명세서에만 찍힐 뿐 통장에는 들어오지 않았어요. 퇴사를 해야 받는지, 노동청에 신고하면 회사와 더 틀어지는 건 아닌지, 또 회사가 버티면 정부가 대신 주는 제도가 있다던데 어떤 순서로 챙겨야 하는지 막막한 상태예요." 근로기준법 제43조는 임금을 매월 1회 이상 정해진 날에 전액 지급하도록 정하고, 임금채권보장법은 사업주가 임금을 지급하지 못할 때 국가가 일정 한도의 체불 임금을 대신 지급(간이대지급금)하는 제도를 두는 영역입니다. 사업장이 영업 중이어도 체불 사실이 확인되면 진정·체불확인서를 거쳐 간이대지급금 청구가 검토되는 트랙입니다. ① 체불액 정리 ② 노동청 진정 ③ 체불확인서 ④ 간이대지급금 청구 ⑤ 민사·후속 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 정리 ② 진정 ③ 확인서 ④ 청구 ⑤ 후속 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임금체불 진정·간이대지급금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정리·진정·확인서·청구·후속 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 체불액 정리</strong> — 기본급·연장수당·미지급 항목과 기간을 명세서로 집계.</li>\n<li><strong>② 노동청 진정 접수</strong> — 사업장 관할 지방고용노동청에 임금체불 진정 제기.</li>\n<li><strong>③ 체불 임금등·사업주 확인서 발급</strong> — 근로감독관 조사 후 체불 사실·금액 확인.</li>\n<li><strong>④ 간이대지급금 청구</strong> — 확인서를 근거로 근로복지공단에 일정 한도 내 청구.</li>\n<li><strong>⑤ 민사·후속 (시효 3년)</strong> — 차액 미정산 시 소액·민사 청구, 임금 시효 3년 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 영업을 계속하더라도 체불이 확인되면 진정·체불확인서를 거쳐 간이대지급금 청구를 검토해볼 수 있는 영역. 체불 항목과 기간을 명세서로 정리하는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임금체불 진정·간이대지급금 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 체불 자료 확보 (즉시)</strong> — 근로계약서·임금명세서·통장 입금 내역으로 체불 항목·기간 정리.</li>\n<li><strong>2단계 — 노동청 진정 접수 (수시)</strong> — 관할 지방고용노동청에 임금체불 진정서 제출(고용노동부 1350 안내).</li>\n<li><strong>3단계 — 근로감독관 조사·확인서 발급 (보통 약 25일 내외)</strong> — 출석 조사 후 체불 임금등·사업주 확인서 발급.</li>\n<li><strong>4단계 — 간이대지급금 청구 (확인서 발급일로부터 기한 내)</strong> — 근로복지공단에 일정 한도 내 청구·심사.</li>\n<li><strong>5단계 — 민사 청구 또는 형사 (시효 3년 내)</strong> — 잔액은 소액·민사 청구, 미정산 지속 시 형사 진정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임금체불 진정 간이대지급금 청구 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 체불입증·진정·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (약정 임금·소정근로시간)</strong></li>\n<li><strong>임금명세서 (미지급 항목·기간)</strong></li>\n<li><strong>통장 입금 내역 (실제 미지급 확인)</strong></li>\n<li><strong>출퇴근 기록·근무표 (연장근로 입증)</strong></li>\n<li><strong>임금체불 진정서 (고용노동부 양식)</strong></li>\n<li><strong>체불 임금등·사업주 확인서</strong></li>\n<li><strong>간이대지급금 청구서 (근로복지공단 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 간이대지급금은 체불 임금등·사업주 확인서가 있어야 청구가 진행되므로, 진정 단계에서 체불 항목·금액·기간이 명확히 잡히도록 명세서와 입금 내역을 함께 제출하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임금 산입 범위</strong> — 소정근로 대가인지, 연장·야간·휴일 가산임금인지에 따라 산정 항목이 갈림.</li>\n<li><strong>체불 금액 확정</strong> — 회사 주장 금액과 실제 미지급액의 차이.</li>\n<li><strong>간이대지급금 한도</strong> — 정부 대지급 한도를 넘는 부분은 별도 청구.</li>\n<li><strong>퇴사 전후</strong> — 재직 중에도 진정·청구가 가능한지.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 1588-0075 (간이대지급금)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소정근로 대가와 가산임금 등 임금 산입 범위 평가',
        summary:
          '대법원 2020다300299(대법원, 2024.12.26 선고) 영역에서 법원은 근로기준법 제2조 제1항 제8호의 \'소정근로시간\'은 법정 근로시간의 범위에서 근로자와 사용자가 정한 근로시간을 말하고, 연장·휴일근로에 대한 임금 및 가산임금 등은 소정근로에 대하여 지급하는 임금으로 보기 어렵다는 취지로 임금의 성격을 가린 사례 흐름이 있으며, 체불액을 산정·청구할 때에도 소정근로 대가와 가산임금 등 항목별 임금 성격을 살펴볼 수 있습니다.',
        takeaway: '체불 임금은 소정근로 대가·가산임금 등 항목별로 산정되는 영역 — 진정·간이대지급금 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '회사가 영업 중인데도 간이대지급금을 받나요?',
        answer:
          '<strong>도산이 아니어도 체불이 확인되면 일정 한도 내 청구를 검토해볼 수 있는 영역입니다.</strong> 체불확인서 발급이 핵심.',
      },
      {
        question: '퇴사를 해야만 진정을 넣을 수 있나요?',
        answer:
          '<strong>재직 중에도 임금체불 진정을 제기해볼 수 있는 영역입니다.</strong> 미지급 항목·기간 정리가 먼저.',
      },
      {
        question: '간이대지급금은 얼마까지 받나요?',
        answer:
          '<strong>정부가 정한 한도 내에서 지급되고 초과분은 별도 청구하는 영역입니다.</strong> 한도·요건은 근로복지공단 1588-0075로 확인.',
      },
      {
        question: '진정하면 회사가 보복하지 않을까요?',
        answer:
          '<strong>임금체불 신고를 이유로 한 불이익은 별도 다툼 사유가 될 수 있는 영역입니다.</strong> 경위·증거를 기록으로 남겨두는 것이 좋습니다.',
      },
      {
        question: '체불 임금은 몇 년치까지 청구하나요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구 가능.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 진정 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '임금체불 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '간이대지급금 신청', href: '/guide/wage/unpaid-wage-guarantee-fund-application' },
      { label: '임금체불 어디부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '체불 임금 3년 시효', href: '/guide/wage/unpaid-wage-3year-limitation' },
    ],
  },

  // ─── 2. wage-comprehensive-pay-overtime-not-included-claim-track ───
  {
    domain: 'wage',
    slug: 'wage-comprehensive-pay-overtime-not-included-claim-track',
    keyword: '포괄임금 약정 연장수당 미산입 차액',
    questionKeyword: '연봉에 연장수당이 다 포함됐다는 포괄임금 계약을 썼는데, 실제 연장근로를 계산해 보면 약정한 금액으로는 도저히 안 맞아요. 차액을 받을 수 있나요?',
    ctaKeyword: '포괄임금 약정 연장수당 미산입 차액 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 연장수당 미산입 — 5단계 차액 점검 | 로앤가이드',
      description:
        '연봉에 연장수당이 다 포함됐다는 포괄임금 계약인데 실제 연장근로로 계산하면 약정액이 부족해 답답하시다면 약정 유효성·통상임금·차액 재산정 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"입사할 때 \'연봉에 연장·야간수당이 모두 포함돼 있다\'는 포괄임금 계약서에 서명한 근로자입니다. 그런데 막상 일해 보니 매달 정해진 시간보다 훨씬 길게 일하는데, 계약서에 적힌 고정 연장수당으로는 실제 연장근로를 통상임금 기준으로 계산한 금액에 한참 못 미쳤어요. 회사는 \'포괄임금이라 더 줄 게 없다\'고 하는데, 약정한 고정수당으로 실제 연장근로가 정말 다 메워진 건지, 부족분은 받을 수 없는 건지 막막한 상태예요." 근로기준법 제56조는 연장·야간·휴일근로에 통상임금의 50% 이상 가산을 정하고, 제2조의 통상임금은 소정근로의 대가로 정기적·일률적·고정적으로 지급되는 임금을 기준으로 객관적 성질에 따라 판단하는 영역입니다. 포괄임금 약정이 있어도 고정수당이 실제 연장근로 대가에 미치지 못하면 그 차액 청구가 검토되는 트랙입니다. ① 약정 내용 ② 실근로·통상임금 산정 ③ 차액 산정 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 약정 ② 산정 ③ 차액 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 포괄임금 연장수당 미산입 차액 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·산정·차액·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정 내용 확인</strong> — 계약서·취업규칙의 고정 연장수당 금액·포함 시간 정리.</li>\n<li><strong>② 실근로·통상임금 산정</strong> — 실제 연장·야간·휴일근로시간과 통상임금(정기·일률·고정 항목) 산정.</li>\n<li><strong>③ 차액 산정</strong> — 통상임금 × 50% 가산 기준 실제 수당과 고정 약정액의 차액 계산.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 부족분을 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포괄임금 약정이 있더라도 고정수당이 실제 연장근로를 통상임금 기준으로 계산한 금액에 미치지 못하면 그 차액을 청구할 수 있는지 검토해볼 수 있는 영역. 통상임금 범위와 실근로시간이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 포괄임금 차액 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·근로시간 자료 보존 (즉시)</strong> — 근로계약서·취업규칙·임금명세서·출퇴근 기록 확보.</li>\n<li><strong>2단계 — 통상임금·실근로 산정 (1~2주)</strong> — 정기·일률·고정 항목으로 통상임금 확정, 실제 연장·야간·휴일시간 집계.</li>\n<li><strong>3단계 — 차액 산정 (2~3주)</strong> — 통상임금 × 50% 기준 실제 수당과 고정 약정액 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">포괄임금 약정 연장수당 미산입 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정·산정·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>포괄임금 근로계약서 (고정수당·포함 시간)</strong></li>\n<li><strong>취업규칙·임금 규정 (수당 구성)</strong></li>\n<li><strong>임금명세서 (고정 연장수당 표기)</strong></li>\n<li><strong>출퇴근 기록·근무표 (실제 연장근로시간)</strong></li>\n<li><strong>통상임금 산정 자료 (정기·일률·고정 항목)</strong></li>\n<li><strong>차액 산정표 (실제 수당 − 고정 약정액)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통상임금은 명칭이 아니라 소정근로 대가로 정기·일률·고정적으로 지급되는지를 기준으로 판단되는 영역. 어떤 수당이 통상임금에 들어가는지부터 정리해야 차액 계산의 기초가 잡힙니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>약정의 효력 범위</strong> — 고정수당으로 실제 연장근로가 모두 보전됐다고 볼 수 있는지.</li>\n<li><strong>통상임금 범위</strong> — 어떤 항목이 정기·일률·고정 요건을 갖춰 통상임금에 들어가는지.</li>\n<li><strong>실근로시간 입증</strong> — 약정 시간을 넘긴 실제 연장근로의 입증 방법.</li>\n<li><strong>차액 발생 여부</strong> — 고정 약정액과 통상임금 기준 산정액의 차이.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금 판단 기준(정기·일률·고정성)과 소정근로 대가',
        summary:
          '대법원 2012다89399(대법원, 2013.12.18 선고) 영역에서 법원은 어떠한 임금이 통상임금에 속하는지는 그 임금이 소정근로의 대가로 정기적·일률적·고정적으로 지급되는 것인지를 기준으로 객관적 성질에 따라 판단해야 하고 명칭이나 지급주기 등 형식적 기준으로 정할 것이 아니라고 판시했습니다. 포괄임금의 고정수당이 실제 연장근로 대가에 미치지 못하는지를 검토할 때에도 통상임금 산정 기준을 살펴볼 수 있습니다.',
        takeaway: '통상임금은 소정근로 대가의 정기·일률·고정성으로 판단되는 영역 — 포괄임금 연장수당 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '포괄임금 계약을 썼는데도 차액을 받나요?',
        answer:
          '<strong>고정수당이 실제 연장근로 대가에 미치지 못하면 차액 청구를 검토해볼 수 있는 영역입니다.</strong> 실근로시간·통상임금 산정이 먼저.',
      },
      {
        question: '통상임금에는 무엇이 들어가나요?',
        answer:
          '<strong>소정근로 대가로 정기·일률·고정적으로 지급되는 임금이 기준인 영역입니다.</strong> 명칭이 아니라 지급의 실질로 판단.',
      },
      {
        question: '실제 연장근로시간은 어떻게 입증하나요?',
        answer:
          '<strong>출퇴근 기록·근무표·업무지시 정황으로 보완해볼 수 있는 영역입니다.</strong> 약정 시간 초과분을 함께 정리.',
      },
      {
        question: '회사는 포괄임금이라 끝이라는데요?',
        answer:
          '<strong>고정수당으로 실제 연장근로가 다 보전됐는지로 판단하는 영역입니다.</strong> 통상임금 기준 산정액과 비교.',
      },
      {
        question: '차액 청구 시효는 얼마인가요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 차액 청구 가능.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 연장수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '포괄임금 고정·실제 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '포괄임금 무효 청구', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '정기상여 통상임금 산입', href: '/guide/wage/wage-regular-bonus-ordinary-wage-track' },
    ],
  },

  // ─── 3. unemployment-department-transfer-pay-drop-quit-just-cause-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-department-transfer-pay-drop-quit-just-cause-track',
    keyword: '부서이동 임금 대폭 하락 자진퇴사 실업급여',
    questionKeyword: '다른 부서로 이동하라는 지시를 받았는데, 그 부서로 가면 실적급 구조상 월급이 절반 가까이 줄어요. 거부하고 그만두면 실업급여를 받을 수 있나요?',
    ctaKeyword: '부서이동 임금 하락 자진퇴사 실업급여 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '부서이동 임금하락 자진퇴사 — 5단계 수급 점검 | 로앤가이드',
      description:
        '부서이동으로 실적급이 줄어 월급이 절반 가까이 떨어지는데 그만둘지 고민되어 막막하시다면 근로조건 저하·정당한 이직사유와 수급요건 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"한 부서에서 실적급을 포함한 급여를 받으며 일해 온 근로자입니다. 회사가 갑자기 다른 부서로 이동하라고 지시했는데, 그 부서로 가면 실적급 지급 구조 자체가 달라 월 평균 임금이 절반 가까이 줄어드는 상황이었어요. 당장 생활이 흔들릴 정도라 거부하고 퇴사를 택했는데, 회사가 \'본인이 그만둔 자발적 퇴사\'라고 하면 실업급여가 안 되는 건 아닐지 막막한 상태예요." 고용보험법 제40조는 구직급여 수급요건으로 이직 전 18개월 중 피보험단위기간 180일 이상 등을 정하고, 제58조는 정당한 사유 없는 자발적 이직을 수급 제한사유로 두면서도 이직일 전 1년 이내에 일정 기간 이상 실제 근로조건이 종전보다 낮아진 경우 등은 수급이 제한되지 않는 정당한 이직사유로 보는 영역입니다. 부서이동으로 임금이 상당 비율 줄어드는 근로조건 저하가 장래에 확정된 상황을 거부하고 이직했다면 수급 요건을 검토해볼 수 있는 트랙입니다. ① 사유 정리 ② 임금 하락 입증 ③ 수급요건 점검 ④ 신청·심사 ⑤ 불복 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 사유 ② 입증 ③ 요건 ④ 신청 ⑤ 불복 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 부서이동 임금하락 자진퇴사 실업급여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·입증·요건·신청·불복 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이직사유 정리</strong> — 부서이동 지시 경위·시점과 거부·퇴사 과정 시간순 정리.</li>\n<li><strong>② 임금 하락 입증</strong> — 이동 전후 실적급 구조·월 평균 임금 하락 비율 자료 수집.</li>\n<li><strong>③ 수급요건 점검</strong> — 피보험단위기간 180일·근로조건 저하의 정당성 점검.</li>\n<li><strong>④ 신청·심사</strong> — 고용센터에 수급자격 인정 신청, 이직사유 심사.</li>\n<li><strong>⑤ 불복 (처분 송달 후 90일 내)</strong> — 불인정 시 고용보험심사위원회 심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형식상 사직이라도 부서이동으로 실제 근로조건(임금)이 상당 비율 낮아질 것이 장래에 확정된 상황을 거부하고 이직했다면 정당한 이직사유에 해당하는지 검토해볼 수 있는 영역. 임금 하락 비율과 그 확정성이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부서이동 임금하락 자진퇴사 5단계',
        content:
          '<p><strong>A. 고용노동부·고용보험 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직 경위 자료 보존 (즉시)</strong> — 부서이동 발령·통지·실적급 규정·이동 후 예상 급여 자료 확보.</li>\n<li><strong>2단계 — 임금 하락 정리 (신속)</strong> — 이동 전후 실적급 구조·월 평균 임금 하락 비율 정리.</li>\n<li><strong>3단계 — 수급자격 인정 신청</strong> — 고용센터에 신청서 + 이직확인서 + 소명 자료 제출.</li>\n<li><strong>4단계 — 이직사유 심사</strong> — 정당한 이직사유 해당 여부 심사.</li>\n<li><strong>5단계 — 심사 청구 (처분 송달 후 90일 내)</strong> — 불인정 시 고용보험심사위원회에 심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">부서이동 임금 대폭 하락 자진퇴사 실업급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·입증·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>부서이동 발령·통지서 (이동 시점·내용)</strong></li>\n<li><strong>실적급 지급 규정·취업규칙 (부서별 급여 구조)</strong></li>\n<li><strong>이동 전 임금명세서 (종전 월 평균 임금)</strong></li>\n<li><strong>이동 후 예상 급여 산정 자료 (하락 비율)</strong></li>\n<li><strong>이직확인서·고용보험 피보험 내역</strong></li>\n<li><strong>이직 경위 소명서 (근로조건 저하·거부)</strong></li>\n<li><strong>수급자격 인정 신청서 (고용센터 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부서이동 후 임금이 일시적으로 줄어드는 정도가 아니라 일정 기간 이상 이어지는 근로조건 저하로 장래에 확정됐다는 점이 정당한 이직사유 검토의 핵심. 실적급 규정과 전후 명세서로 하락 비율을 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임금 하락 정도</strong> — 부서이동에 따른 하락 비율·기간이 정당한 이직사유 기준에 이르는지.</li>\n<li><strong>실적급의 임금성</strong> — 실적급이 임금에 포함돼 하락 산정에 반영되는지.</li>\n<li><strong>장래 확정성</strong> — 저하가 일시적인지, 장래에 이어질 것으로 확정됐는지.</li>\n<li><strong>피보험단위기간</strong> — 이직 전 18개월 중 180일 이상 충족 여부.</li>\n<li><strong>심사 기한</strong> — 불인정 처분 송달 후 90일 내 심사 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>거주지 관할 고용센터 (수급자격 신청)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부서이동에 따른 근로조건 저하와 정당한 이직사유 평가',
        summary:
          '대법원 2014구합2270(대법원, 2014.07.03 선고) 영역에서 법원은 실적급이 임금에 포함되는 사업장에서 부서이동으로 실적급 지급구조상 월 평균 임금이 46% 이상 하락하게 되는 등 이직일 전 1년 이내에 2개월 이상 실제 근로조건이 종전보다 낮아질 것이 장래에 확정된 경우로 보아 수급자격이 제한되지 않는 정당한 이직사유에 해당한다고 판단했습니다. 부서이동으로 임금이 상당 비율 하락한 이직을 검토할 때에도 근로조건 저하의 정도와 장래 확정성을 살펴볼 수 있습니다.',
        takeaway: '부서이동으로 임금이 상당 비율 하락하는 근로조건 저하가 장래에 확정된 이직은 수급 요건을 검토해볼 수 있는 영역 — 소명·심사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '부서이동을 거부하고 그만두면 자발적 퇴사인가요?',
        answer:
          '<strong>형식은 사직이라도 임금 등 근로조건 저하가 확정됐다면 정당한 이직사유를 검토할 수 있는 영역입니다.</strong> 이동 경위·하락 비율 정리가 먼저.',
      },
      {
        question: '임금이 얼마나 줄어야 인정 검토가 되나요?',
        answer:
          '<strong>하락 비율과 적용 기간이 함께 평가되는 영역입니다.</strong> 이동 전후 명세서·실적급 규정으로 하락 정도를 정리.',
      },
      {
        question: '실적급도 임금으로 봐서 하락에 넣나요?',
        answer:
          '<strong>정기적으로 지급의무가 있는 실적급은 임금에 포함될 수 있는 영역입니다.</strong> 지급 규정·내역으로 임금성을 확인.',
      },
      {
        question: '피보험단위기간은 며칠이 필요하나요?',
        answer:
          '<strong>이직 전 18개월 중 180일 이상이 기본 요건인 영역입니다.</strong> 고용보험 피보험 내역으로 확인.',
      },
      {
        question: '수급자격을 못 받으면 어떻게 하나요?',
        answer:
          '<strong>처분 송달 후 90일 내 심사를 청구해볼 수 있는 영역입니다.</strong> 소명 자료로 이직사유를 보강.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '임금 10% 삭감 자진퇴사', href: '/guide/unemployment/unemployment-wage-cut-10percent-quit' },
      { label: '근로시간 30% 단축 자진퇴사', href: '/guide/unemployment/unemployment-working-hours-cut-30percent-quit' },
      { label: '야간근무 전환 자진퇴사', href: '/guide/unemployment/unemployment-night-shift-change-quit' },
      { label: '자발적 퇴사 예외 총정리', href: '/guide/unemployment/unemployment-voluntary-quit-exception-comprehensive' },
      { label: '수급 거부 이의 절차', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
    ],
  },

  // ─── 4. unemployment-fixed-term-expiry-apply-benefit-amount-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-fixed-term-expiry-apply-benefit-amount-track',
    keyword: '계약만료 실업급여 신청 절차 구직급여일액',
    questionKeyword: '계약직 계약이 만료돼 실업급여를 신청하려는데, 어떤 순서로 신청하고 하루에 얼마씩 나오는지(구직급여일액)는 어떻게 정해지는지 궁금해요.',
    ctaKeyword: '계약만료 실업급여 신청 절차 구직급여일액 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '계약만료 실업급여 — 5단계 신청·일액 산정 절차 | 로앤가이드',
      description:
        '계약직 계약이 끝나 실업급여를 신청하려는데 순서와 하루 지급액(구직급여일액) 산정이 막막하시다면 신청 절차와 평균임금 기준 일액 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"1년 또는 2년으로 정해진 기간제 계약이 만료돼 더 이상 일하지 못하게 된 근로자입니다. 계약기간이 끝나 자연스럽게 그만둔 것이라 실업급여 대상이 되는지부터 헷갈리고, 막상 신청하려니 어디서 무엇을 먼저 해야 하는지, 또 하루에 얼마씩(구직급여일액) 나오는지가 어떻게 정해지는지도 잘 모르겠어요. 계약만료라 회사와 다툴 일은 아닌데, 신청 시기를 놓치거나 서류가 빠질까 봐 막막한 상태예요." 고용보험법 제40조는 구직급여 수급요건으로 이직 전 18개월 중 피보험단위기간 180일 이상과 이직 사유 등을 정하고, 제45조·제46조는 구직급여일액을 원칙적으로 평균임금(이직 전 3개월 임금총액을 그 기간 총일수로 나눈 금액)을 기초로 산정하도록 정하는 영역입니다. 기간제 계약만료는 비자발적 이직으로 정리되는 경우가 많고, 신청 절차와 일액 산정 기준을 미리 정리해두는 것이 검토되는 트랙입니다. ① 자격 확인 ② 이직확인서·신청 ③ 수급자격 인정·교육 ④ 일액 산정 ⑤ 실업인정·지급 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 자격 ② 신청 ③ 인정 ④ 산정 ⑤ 지급 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 계약만료 실업급여 신청·일액 산정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·신청·인정·산정·지급 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수급자격 확인</strong> — 이직 전 18개월 중 피보험단위기간 180일·계약만료 이직 여부 확인.</li>\n<li><strong>② 이직확인서·신청</strong> — 회사의 이직확인서 처리 확인 후 워크넷 구직등록·수급자격 신청.</li>\n<li><strong>③ 수급자격 인정·교육</strong> — 고용센터 수급자격 신청자 교육·인정 절차 진행.</li>\n<li><strong>④ 구직급여일액 산정</strong> — 이직 전 3개월 평균임금을 기초로 일액 산정(상·하한 적용).</li>\n<li><strong>⑤ 실업인정·지급</strong> — 정해진 주기마다 재취업활동 신고·실업인정 후 지급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약만료는 비자발적 이직으로 정리되는 경우가 많고, 구직급여일액은 평균임금(이직 전 3개월 임금총액 ÷ 총일수)을 기초로 산정되는 영역. 신청 시기를 놓치지 않는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 계약만료 실업급여 신청 5단계',
        content:
          '<p><strong>A. 고용노동부·고용센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직확인서 처리 확인 (이직 직후)</strong> — 회사가 고용센터에 이직확인서·피보험자격 상실 신고를 했는지 확인.</li>\n<li><strong>2단계 — 워크넷 구직등록·수급자격 신청 (지체 없이)</strong> — 구직등록 후 거주지 관할 고용센터에 수급자격 인정 신청.</li>\n<li><strong>3단계 — 수급자격 신청자 교육·인정</strong> — 온라인·집체 교육 이수 후 수급자격 인정.</li>\n<li><strong>4단계 — 구직급여일액 산정 (인정 단계)</strong> — 이직 전 3개월 평균임금 기초 산정, 상·하한 적용.</li>\n<li><strong>5단계 — 실업인정·지급 (주기마다)</strong> — 재취업활동 신고·실업인정 후 정해진 일수만큼 지급.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 신청 순서, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약만료 실업급여 신청 절차 구직급여일액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·신청·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>기간제 근로계약서 (계약기간·만료일)</strong></li>\n<li><strong>이직확인서 (이직 사유·코드)</strong></li>\n<li><strong>고용보험 피보험 내역 (180일 산정)</strong></li>\n<li><strong>이직 전 3개월 임금명세서 (평균임금 산정 기초)</strong></li>\n<li><strong>신분증·본인 명의 통장</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>수급자격 인정 신청서 (고용센터 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 구직급여일액은 이직 전 3개월 임금총액을 그 기간 총일수로 나눈 평균임금을 기초로 산정되므로, 이직 전 3개월 임금명세서를 정확히 챙기는 것이 일액 산정의 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이직 사유 코드</strong> — 계약만료가 이직확인서에 정확히 반영됐는지.</li>\n<li><strong>평균임금 산정</strong> — 이직 전 3개월 임금총액에 어떤 항목이 포함되는지.</li>\n<li><strong>일액 상·하한</strong> — 산정 일액에 상한·하한이 적용되는지.</li>\n<li><strong>신청 시기</strong> — 이직 후 신청이 늦어지면 수급기간에 영향이 있는지.</li>\n<li><strong>재취업활동</strong> — 실업인정에 필요한 재취업활동 기준.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>거주지 관할 고용센터 (수급자격 신청)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여일액 산정 기초인 평균임금과 임금 범위 평가',
        summary:
          '대법원 2016두42289(대법원, 2019.07.25 선고) 영역에서 법원은 고용보험법이 구직급여일액을 원칙적으로 근로기준법상 평균임금(이직 전 3개월 임금총액을 그 기간 총일수로 나눈 금액)을 기초로 산정하도록 정하고 있고, 근로의 대가로 지급된 금품은 평균임금 산정의 기초가 되는 임금에 포함된다는 취지로 판시했습니다. 계약만료 후 구직급여일액을 확인할 때에도 평균임금 산정 기초가 되는 임금 범위를 살펴볼 수 있습니다.',
        takeaway: '구직급여일액은 이직 전 3개월 평균임금을 기초로 산정되는 영역 — 신청·일액 확인 트랙.',
      },
    ],
    faq: [
      {
        question: '계약만료도 실업급여 대상인가요?',
        answer:
          '<strong>계약만료는 비자발적 이직으로 정리되는 경우가 많은 영역입니다.</strong> 피보험단위기간 180일 충족 여부를 함께 확인.',
      },
      {
        question: '신청은 어디서부터 시작하나요?',
        answer:
          '<strong>이직확인서 처리 확인 → 워크넷 구직등록 → 고용센터 수급자격 신청 순서인 영역입니다.</strong> 신청 시기를 놓치지 않는 것이 중요.',
      },
      {
        question: '하루에 얼마씩 나오는지는 어떻게 정해지나요?',
        answer:
          '<strong>이직 전 3개월 평균임금을 기초로 구직급여일액이 산정되는 영역입니다.</strong> 상한·하한이 함께 적용.',
      },
      {
        question: '이직 전 3개월 임금에는 무엇이 들어가나요?',
        answer:
          '<strong>근로의 대가로 지급된 임금이 평균임금 산정 기초에 포함될 수 있는 영역입니다.</strong> 3개월 임금명세서로 확인.',
      },
      {
        question: '신청이 늦어지면 어떻게 되나요?',
        answer:
          '<strong>신청이 늦어지면 수급기간에 영향이 있을 수 있는 영역입니다.</strong> 이직 후 지체 없이 신청 절차를 진행.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '계약만료 신청 순서', href: '/guide/unemployment/contract-expiry-benefit-application-order' },
      { label: '계약만료 수급 자격', href: '/guide/unemployment/contract-expiry-benefit-eligibility' },
      { label: '구직급여일액·소정급여일수', href: '/guide/unemployment/benefit-duration-and-daily-amount' },
      { label: '신청 서류 체크리스트', href: '/guide/unemployment/application-required-documents-checklist' },
      { label: '신청부터 지급까지 전 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
    ],
  },

  // ─── 5. retirement-short-time-15hour-employee-status-claim-track ───
  {
    domain: 'retirement',
    slug: 'retirement-short-time-15hour-employee-status-claim-track',
    keyword: '단시간 근로자 퇴직금 근로자성 청구 절차',
    questionKeyword: '주 몇 차례 짧게 나와 일하면서 위탁계약서를 썼는데, 실제로는 회사 지시를 받고 정해진 시간에 일했어요. 단시간이라도 퇴직금을 청구할 수 있나요?',
    ctaKeyword: '단시간 근로자 퇴직금 근로자성 청구 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '단시간 근로자 퇴직금 — 5단계 근로자성·청구 절차 | 로앤가이드',
      description:
        '위탁계약을 썼지만 실제로는 회사 지시로 정해진 시간에 일한 단시간 근무라 퇴직금이 막막하시다면 근로자성 판단과 주 15시간 기준·청구 절차 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"주 며칠, 정해진 시간에만 짧게 나와 일하면서 \'위탁\' 또는 \'프리랜서\' 계약서를 쓴 근로자입니다. 계약서 형식은 도급·위탁처럼 돼 있었지만, 실제로는 회사가 정한 시간에 출근해 회사 지시와 관리·감독을 받으며 일했고, 보수도 일한 시간에 맞춰 정해진 방식으로 받았어요. 그런데 그만두려고 보니 회사는 \'근로자가 아니라 퇴직금이 없다\'고 합니다. 단시간이라도, 위탁계약이라도 퇴직금을 청구할 수 있는지 막막한 상태예요." 근로기준법 제2조는 계약 형식과 무관하게 임금을 목적으로 종속적 관계에서 근로를 제공했는지로 근로자성을 판단하고, 근로자퇴직급여보장법 제4조는 계속근로기간 1년 이상이면서 4주 평균 1주 소정근로시간이 15시간 이상인 근로자에게 퇴직급여 제도를 적용하는 영역입니다. 위탁계약 형식이라도 종속관계 실질이 인정되면 근로자로서 퇴직금 청구가 검토되는 트랙입니다. ① 근로자성 정리 ② 적용요건 점검 ③ 퇴직금 산정 ④ 청구·진정 ⑤ 후속 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 근로자성 ② 요건 ③ 산정 ④ 청구 ⑤ 후속 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 단시간 근로자 퇴직금 근로자성·청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로자성·요건·산정·청구·후속 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로자성 정리</strong> — 업무지시·근무시간·장소 구속·지휘감독 등 종속관계 실질 정리.</li>\n<li><strong>② 적용요건 점검</strong> — 계속근로 1년 이상·4주 평균 1주 소정근로 15시간 이상 여부 점검.</li>\n<li><strong>③ 퇴직금 산정</strong> — 계속근로기간·평균임금 기준 퇴직금 산정(단시간은 비례 산정).</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 후속</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로자에 해당하는지는 계약이 위탁·도급 형식인지가 아니라 임금을 목적으로 종속적 관계에서 근로를 제공했는지의 실질로 판단되는 영역. 종속관계 실질이 인정되면 단시간이라도 퇴직금 청구를 검토해볼 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 단시간 근로자 퇴직금 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로 실질 자료 보존 (즉시)</strong> — 위탁계약서·업무지시·근무표·출퇴근 기록·보수 지급 내역 확보.</li>\n<li><strong>2단계 — 근로자성·적용요건 정리 (1~2주)</strong> — 종속관계 정황과 계속근로 1년·주 15시간 요건 정리.</li>\n<li><strong>3단계 — 퇴직금 산정 (2~3주)</strong> — 계속근로기간·평균임금 기준 퇴직금 산정·청구 금액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단시간 근로자 퇴직금 근로자성 청구 절차 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로자성·요건·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>위탁·프리랜서 계약서 (형식상 계약 내용)</strong></li>\n<li><strong>업무지시·근무표 (지휘감독·시간 구속 입증)</strong></li>\n<li><strong>출퇴근 기록 (정해진 근무시간)</strong></li>\n<li><strong>보수 지급 내역 (시간·정기성)</strong></li>\n<li><strong>4주 평균 소정근로시간 정리표 (15시간 이상)</strong></li>\n<li><strong>계속근로기간·평균임금 산정표</strong></li>\n<li><strong>퇴직금 청구 내용증명·진정서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직급여 제도는 계속근로 1년 이상이면서 4주 평균 1주 소정근로시간이 15시간 이상이어야 적용되는 영역. 근무표·출퇴근 기록으로 주 15시간 이상과 종속관계를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로자성</strong> — 위탁·도급 형식인지가 아니라 종속관계 실질이 있었는지가 분기점.</li>\n<li><strong>주 15시간 요건</strong> — 4주 평균 1주 소정근로시간이 15시간 이상인지.</li>\n<li><strong>계속근로 1년</strong> — 단속적·반복 근로의 계속근로기간 산정.</li>\n<li><strong>평균임금 산정</strong> — 단시간 근로의 퇴직금 산정 기초.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 퇴직급여 제도 안내 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계약 형식과 무관한 근로자성(종속관계) 판단 기준',
        summary:
          '대법원 2012다77006(대법원, 2012.12.13 선고) 영역에서 법원은 근로자에 해당하는지는 계약 형식이 고용계약인지 도급계약인지와 관계없이 그 실질에서 임금을 목적으로 종속적 관계에서 사용자에게 근로를 제공했는지에 따라 판단해야 하며, 업무 내용·지휘감독·근무시간과 장소의 구속·보수의 성격 등을 종합해 종속관계 유무를 가린다고 판시했습니다. 위탁계약 형식의 단시간 근로에서 퇴직금을 검토할 때에도 종속관계 실질을 살펴볼 수 있습니다.',
        takeaway: '근로자성은 계약 형식이 아니라 종속관계 실질로 판단되는 영역 — 단시간 근로자 퇴직금 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '위탁계약을 썼는데도 퇴직금을 받나요?',
        answer:
          '<strong>계약 형식이 아니라 종속관계 실질로 근로자성을 판단하는 영역입니다.</strong> 업무지시·근무시간 구속 정황 정리가 먼저.',
      },
      {
        question: '단시간 근무도 퇴직금 대상인가요?',
        answer:
          '<strong>계속근로 1년 이상·4주 평균 1주 소정근로 15시간 이상이면 적용 검토가 되는 영역입니다.</strong> 근무표로 주 시간을 확인.',
      },
      {
        question: '근로자라는 건 무엇으로 입증하나요?',
        answer:
          '<strong>업무지시·정해진 출근·지휘감독·보수의 근로 대가성 정황이 입증 자료가 될 수 있는 영역입니다.</strong> 근무표·지시 기록 확보.',
      },
      {
        question: '주 15시간이 안 되는 주가 있어도 되나요?',
        answer:
          '<strong>4주를 평균해 1주 소정근로시간이 15시간 이상인지로 판단하는 영역입니다.</strong> 4주 단위로 시간을 정리.',
      },
      {
        question: '퇴직금 청구 시효는 얼마인가요?',
        answer:
          '<strong>퇴직금 청구 시효는 퇴직일로부터 3년인 영역입니다.</strong> 3년 내 청구 가능.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '단시간 근로자 퇴직금 자격', href: '/guide/retirement/retirement-part-time-eligibility' },
      { label: '프리랜서 퇴직금 자격', href: '/guide/retirement/retirement-freelancer-eligibility' },
      { label: '근로계약서 없을 때 입증', href: '/guide/retirement/retirement-no-contract-proof-method' },
      { label: '퇴직금 청구 어디부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 진정', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },

  // ─── 6. retirement-honorary-retire-unclaimed-benefit-statute-track ───
  {
    domain: 'retirement',
    slug: 'retirement-honorary-retire-unclaimed-benefit-statute-track',
    keyword: '명예퇴직 후 퇴직급여 미청구 소멸시효',
    questionKeyword: '명예퇴직을 한 뒤 한참 동안 퇴직급여를 청구하지 않고 있었는데, 이제 와서 청구하니 시효가 끝났다며 거부됐어요. 정말 받을 수 없는 건가요?',
    ctaKeyword: '명예퇴직 후 퇴직급여 미청구 소멸시효 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '명예퇴직 후 퇴직급여 미청구 — 5단계 시효 점검 | 로앤가이드',
      description:
        '명예퇴직 뒤 한참 지나 퇴직급여를 청구했더니 시효가 끝났다고 거부돼 막막하시다면 급여청구권 발생 시점과 소멸시효 기산·완성 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 기간 근무하다 명예퇴직으로 직장을 떠난 근로자입니다. 퇴직 당시 곧바로 퇴직급여(퇴직연금·퇴직수당 등) 청구 절차를 밟지 못했고, 행정 처리가 누락되거나 안내를 받지 못한 사이 여러 해가 흘렀어요. 뒤늦게 청구하려 하니 기관은 \'급여를 받을 권리가 발생한 날부터 일정 기간이 지나 소멸시효가 완성됐다\'며 지급을 거부했습니다. 청구가 늦어진 사정이 있었는데도 정말 받을 수 없는 건지, 시효는 언제부터 어떻게 진행되는 건지 막막한 상태예요." 퇴직급여를 받을 권리는 지급요건을 모두 갖춰 급여지급사유가 발생한 날에 \'추상적 급여청구권\'을 취득하고, 정해진 절차·기준에 따라 지급 신청을 하면 구체적 급여청구권으로 확정되는 영역입니다(공무원연금법 제88조 등 급여청구권 소멸시효 규정). 다만 권리가 발생한 날부터 정해진 소멸시효가 진행되므로, 청구 지연과 기산점·시효 완성 여부가 검토되는 트랙입니다. ① 권리 발생일 확인 ② 시효 기산 정리 ③ 지연 사정 정리 ④ 청구·이의 ⑤ 불복 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 발생일 ② 기산 ③ 사정 ④ 청구 ⑤ 불복 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 명예퇴직 후 퇴직급여 미청구 시효 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발생일·기산·사정·청구·불복 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리 발생일 확인</strong> — 명예퇴직 등 급여지급사유 발생일(추상적 급여청구권 취득일) 정리.</li>\n<li><strong>② 시효 기산 정리</strong> — 권리 발생일부터 정해진 소멸시효의 기산점·완성 여부 점검.</li>\n<li><strong>③ 지연 사정 정리</strong> — 행정 누락·미안내 등 청구가 늦어진 경위와 자료 수집.</li>\n<li><strong>④ 청구·이의</strong> — 기관에 퇴직급여 지급 청구·거부처분에 대한 이의.</li>\n<li><strong>⑤ 불복</strong> — 거부처분에 대한 심사·행정쟁송 등 불복 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴직급여를 받을 권리는 급여지급사유가 발생한 날에 추상적 급여청구권으로 취득되고, 그날부터 소멸시효가 진행되는 영역. 권리 발생일과 시효 기산점·완성 여부가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 명예퇴직 후 퇴직급여 청구 5단계',
        content:
          '<p><strong>A. 연금공단·기관 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴직·급여 자료 확보 (즉시)</strong> — 명예퇴직 발령일·재직 기간·급여 산정 자료·청구 안내 수령 여부 확인.</li>\n<li><strong>2단계 — 시효 기산·완성 정리 (신속)</strong> — 권리 발생일 기준 소멸시효 기산점·완성 여부 정리.</li>\n<li><strong>3단계 — 지급 청구서 제출</strong> — 관할 기관에 퇴직급여 지급 청구서·증빙 제출.</li>\n<li><strong>4단계 — 거부처분 이의 (처분 송달 후 기한 내)</strong> — 시효 완성 거부에 대해 심사·이의 신청.</li>\n<li><strong>5단계 — 행정쟁송 검토</strong> — 거부 유지 시 행정심판·행정소송 등 불복 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">명예퇴직 후 퇴직급여 미청구 소멸시효 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 발생일·시효·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>명예퇴직 발령·퇴직 증빙 (권리 발생일)</strong></li>\n<li><strong>재직 기간·급여 산정 자료</strong></li>\n<li><strong>청구 안내 수령·누락 정황 자료</strong></li>\n<li><strong>퇴직급여 지급 청구서 (기관 양식)</strong></li>\n<li><strong>시효 기산·완성 정리 메모</strong></li>\n<li><strong>거부처분서 (사유·근거 조문)</strong></li>\n<li><strong>이의·심사 청구서 (불복 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소멸시효는 급여를 받을 권리가 발생한 날(급여지급사유 발생일)부터 진행되므로, 명예퇴직 발령일과 청구 안내를 받았는지·언제 받았는지를 먼저 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>권리 발생일</strong> — 추상적 급여청구권이 언제 발생했는지(급여지급사유 발생일).</li>\n<li><strong>시효 기산점</strong> — 권리 발생일부터 소멸시효가 진행되는지.</li>\n<li><strong>지연 경위</strong> — 행정 누락·미안내 등 청구가 늦어진 사정이 있었는지.</li>\n<li><strong>시효 완성 여부</strong> — 정해진 기간이 경과해 시효가 완성됐는지.</li>\n<li><strong>거부처분 불복</strong> — 거부처분에 대한 심사·행정쟁송 기한.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직급여 안내)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 연금·급여 지급 기관 (청구·이의 접수)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직급여청구권의 발생 시점과 소멸시효 기산 평가',
        summary:
          '서울행정법원 2025구합54475(2025.11.13 선고) 영역에서 법원은 급여를 받을 권리는 급여의 지급요건을 모두 갖추어 급여지급사유가 발생한 날에 \'추상적 급여청구권\'을 취득하고, 정해진 절차·방법·기준에 따라 지급 신청을 하여 구체적 급여청구권으로 확정된다는 전제에서, 명예퇴직 후 일정 기간이 지나 청구한 퇴직급여에 대해 소멸시효 완성 여부를 판단한 사례 흐름이 있습니다. 명예퇴직 후 미청구 퇴직급여를 검토할 때에도 권리 발생일과 시효 기산점을 살펴볼 수 있습니다.',
        takeaway: '퇴직급여청구권은 급여지급사유 발생일에 발생해 그날부터 시효가 진행되는 영역 — 발생일·기산점 정리 트랙.',
      },
    ],
    faq: [
      {
        question: '명예퇴직 후 한참 지나 청구하면 못 받나요?',
        answer:
          '<strong>권리 발생일부터 소멸시효가 진행되므로 기산점·완성 여부를 검토해볼 수 있는 영역입니다.</strong> 발생일·청구 시점 정리가 먼저.',
      },
      {
        question: '시효는 언제부터 시작되나요?',
        answer:
          '<strong>급여지급사유가 발생한 날(추상적 급여청구권 취득일)부터 진행되는 영역입니다.</strong> 명예퇴직 발령일로 확인.',
      },
      {
        question: '기관 안내를 못 받아 늦어졌어요',
        answer:
          '<strong>청구 지연 경위는 사정으로 정리해두는 것이 좋은 영역입니다.</strong> 안내 누락·수령 시점 자료를 확보.',
      },
      {
        question: '거부처분을 받았는데 다툴 수 있나요?',
        answer:
          '<strong>거부처분에 대해 심사·행정쟁송 등 불복을 검토해볼 수 있는 영역입니다.</strong> 처분 송달일부터 기한 진행.',
      },
      {
        question: '추상적 급여청구권이 무슨 뜻인가요?',
        answer:
          '<strong>지급요건을 갖춰 사유가 발생하면 먼저 취득되는 권리이고, 신청으로 구체적 청구권이 확정되는 영역입니다.</strong> 발생일이 시효 기산점.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '시효 지난 후 청구 회생', href: '/guide/retirement/retirement-statute-expired-revival' },
      { label: '시효 항변 신의칙 대응', href: '/guide/retirement/retirement-statute-good-faith-estoppel-track' },
      { label: '교원 명예퇴직 퇴직급여', href: '/guide/retirement/retirement-teachers-honorary-retirement' },
      { label: '퇴직금 청구 어디부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ─── 7. industrial-accident-overwork-aggravated-existing-disease-claim-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-overwork-aggravated-existing-disease-claim-track',
    keyword: '과로 스트레스 기존 질병 악화 업무상 질병 요양급여',
    questionKeyword: '원래 가지고 있던 질병이 과로와 업무 스트레스가 겹치면서 갑자기 크게 나빠졌어요. 기존 질병이라 산재가 안 된다는데 요양급여를 신청할 수 있나요?',
    ctaKeyword: '과로 스트레스 기존 질병 악화 업무상 질병 요양급여 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '과로 기존질병 악화 산재 — 5단계 요양급여 신청 절차 | 로앤가이드',
      description:
        '원래 있던 질병이 과로·업무 스트레스로 급격히 나빠졌는데 기존 질병이라 산재가 안 된다고 들어 막막하시다면 상당인과관계와 요양급여 신청 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"평소 어느 정도 관리하며 정상적으로 근무하던 기초 질병이 있던 근로자입니다. 그런데 일이 한꺼번에 몰려 장시간 근무가 이어지고 업무 스트레스가 심해진 시기를 지나면서, 그 질병이 평소의 자연스러운 진행 속도와는 비교가 안 될 만큼 급격히 나빠졌어요. 근로복지공단에 산재를 알아보니 \'원래 있던 병이라 업무 때문이라고 보기 어렵다\'는 말을 듣고, 요양급여를 신청해도 되는 건지, 인과관계를 어떻게 봐야 하는지 막막한 상태예요." 산업재해보상보험법 제5조는 업무상 사유에 따른 부상·질병 등을 업무상 재해로 정하고, 제37조는 업무와 재해 사이 상당인과관계가 있을 때 업무상 재해로 보는 영역입니다. 기존 질병이라도 업무상 과로·스트레스가 겹쳐 자연경과 이상으로 급격히 악화됐다면 상당인과관계가 검토되는 트랙입니다. ① 발병·악화 경위 정리 ② 업무 부담 입증 ③ 의학적 소견 ④ 요양급여 신청 ⑤ 불복 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 경위 ② 입증 ③ 소견 ④ 신청 ⑤ 불복 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 과로 기존질병 악화 업무상 질병 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·입증·소견·신청·불복 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발병·악화 경위 정리</strong> — 기존 질병의 상태와 악화 시점·정도를 시간순 정리.</li>\n<li><strong>② 업무 부담 입증</strong> — 발병·악화 직전 근로시간·업무량·스트레스 등 업무 부담 자료 수집.</li>\n<li><strong>③ 의학적 소견 확보</strong> — 자연경과 이상으로 급격히 악화됐다는 진료기록·소견 정리.</li>\n<li><strong>④ 요양급여 신청</strong> — 근로복지공단에 요양급여(요양·휴업급여 등) 신청.</li>\n<li><strong>⑤ 불복</strong> — 불승인 시 심사 청구·재심사 청구 등 불복 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기존 질병이라도 업무상 과로·스트레스가 주된 발생원인에 겹쳐 자연경과 이상으로 급격히 악화됐다면 상당인과관계가 인정될 수 있는지 검토해볼 수 있는 영역. 인과관계는 의학적으로 명백히 증명되지 않아도 제반 사정으로 추단될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 과로 기존질병 악화 요양급여 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진료·근무 자료 확보 (즉시)</strong> — 진료기록·검사 결과·악화 시점 자료와 근로시간·업무량 기록 확보.</li>\n<li><strong>2단계 — 업무 부담·인과관계 정리 (신속)</strong> — 발병·악화 직전 과로·스트레스 정황과 자연경과 이상 악화 정리.</li>\n<li><strong>3단계 — 요양급여 신청서 제출</strong> — 근로복지공단(1588-0075)에 요양급여 신청서·소견·증빙 제출.</li>\n<li><strong>4단계 — 업무상질병판정위원회 심의</strong> — 상당인과관계 심의·업무상 재해 여부 판정.</li>\n<li><strong>5단계 — 불복 (결정 통지 후 기한 내)</strong> — 불승인 시 심사 청구·산업재해보상보험재심사위원회 재심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 요양·휴업급여 신청 순서, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">과로 스트레스 기존 질병 악화 업무상 질병 요양급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·입증·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>진료기록·검사 결과 (기존 질병·악화 시점)</strong></li>\n<li><strong>주치의 소견서 (자연경과 이상 악화)</strong></li>\n<li><strong>근로시간·근무표 (발병·악화 직전 과로)</strong></li>\n<li><strong>업무량·업무 스트레스 정황 자료</strong></li>\n<li><strong>재직·소속 증빙 (업무 수행 입증)</strong></li>\n<li><strong>요양급여 신청서 (근로복지공단 양식)</strong></li>\n<li><strong>심사·재심사 청구서 (불승인 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인과관계는 의학적·자연과학적으로 명백히 증명되지 않아도 제반 사정으로 상당인과관계가 추단되면 인정될 수 있는 영역. 발병·악화 직전의 근로시간·업무량 기록과 진료기록을 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상당인과관계</strong> — 업무상 과로·스트레스가 기존 질병의 발생·악화에 겹쳤는지.</li>\n<li><strong>자연경과 이상 악화</strong> — 기초·기존 질병이 자연 진행 이상으로 급격히 나빠졌는지.</li>\n<li><strong>증명의 정도</strong> — 의학적으로 명백히 증명하지 못해도 제반 사정으로 추단되는지.</li>\n<li><strong>판단 기준</strong> — 평균인이 아니라 당해 근로자의 건강·신체조건 기준으로 보는지.</li>\n<li><strong>불복 기한</strong> — 불승인 결정 통지 후 심사·재심사 청구 기한.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075 (요양급여 신청)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>근로복지공단 산재고객센터·관할 지사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기존 질병의 업무상 악화와 상당인과관계 평가',
        summary:
          '대법원 2019두62604(대법원, 2020.05.28 선고) 영역에서 법원은 질병의 주된 발생원인이 업무와 직접 관계가 없더라도 업무상 과로나 스트레스가 주된 발생원인에 겹쳐 질병을 유발·악화시켰다면 인과관계가 있고, 평소 정상 근무가 가능한 기초·기존 질병이 직무 과중 등으로 자연경과 이상으로 급격히 악화된 때도 증명이 있는 경우에 포함되며, 인과관계는 의학적으로 명백히 증명하지 못해도 제반 사정으로 상당인과관계가 추단되면 인정된다고 판시했습니다. 기존 질병의 업무상 악화를 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '기존 질병이 업무상 과로·스트레스로 자연경과 이상 급격히 악화되면 상당인과관계가 검토되는 영역 — 요양급여 신청·불복 트랙.',
      },
    ],
    faq: [
      {
        question: '원래 있던 병인데도 산재가 되나요?',
        answer:
          '<strong>업무상 과로·스트레스로 자연경과 이상 급격히 악화됐다면 상당인과관계를 검토해볼 수 있는 영역입니다.</strong> 악화 시점·업무 부담 정리가 먼저.',
      },
      {
        question: '인과관계를 의학적으로 꼭 증명해야 하나요?',
        answer:
          '<strong>명백히 증명하지 못해도 제반 사정으로 상당인과관계가 추단되면 인정될 수 있는 영역입니다.</strong> 진료기록·근무 자료를 함께 제출.',
      },
      {
        question: '인과관계는 누구를 기준으로 판단하나요?',
        answer:
          '<strong>평균인이 아니라 당해 근로자의 건강·신체조건을 기준으로 판단하는 영역입니다.</strong> 기존 질병 상태도 함께 정리.',
      },
      {
        question: '요양급여는 어디에 신청하나요?',
        answer:
          '<strong>근로복지공단(1588-0075)에 요양급여 신청서를 제출하는 영역입니다.</strong> 소견서·근무 기록을 함께 준비.',
      },
      {
        question: '불승인되면 어떻게 다투나요?',
        answer:
          '<strong>심사 청구·재심사 청구 등 불복 절차를 검토해볼 수 있는 영역입니다.</strong> 결정 통지일부터 기한이 진행.',
      },
    ],
    cta: { text: '요양·휴업급여 신청 순서, AI로 확인하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '업무 스트레스 정신질환 산재', href: '/guide/industrial-accident/industrial-accident-work-stress-mental-illness-track' },
      { label: '근골격계 질환 산재', href: '/guide/industrial-accident/industrial-accident-musculoskeletal-disease-track' },
      { label: '정신질환 산재 인정', href: '/guide/industrial-accident/industrial-accident-mental-illness-acknowledge' },
      { label: '산재 불승인 이의', href: '/guide/industrial-accident/industrial-accident-denial-appeal' },
      { label: '치료 후 직장 복귀', href: '/guide/industrial-accident/return-to-work-after-injury' },
    ],
  },
];
