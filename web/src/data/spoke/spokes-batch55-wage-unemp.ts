import { SpokePage } from '../spoke-pages';

// batch55 wage+unemployment 3개 (2026-05-05)
//
// 고유 존재 이유:
// 1. 이 페이지는 회사 회식·법인카드 처리 등에서 본인 카드로 자비 결제한 업무비용을 회사에 청구하려는 근로자가 임금 vs 비용보전(실비 변상) 구분과 청구 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 입사 전 합의한 사이닝보너스가 미지급된 근로자가 약정금 청구 + 임금성 판단(근로기준법 제2조)에 따른 노동청 진정 가능성을 검토하도록 돕는 페이지다.
// 3. 이 페이지는 회사가 권고사직 처리 약속 후 자진퇴사로 이직확인서를 신고한 근로자가 이직사유 정정 + 수급자격 인정 절차를 정리하도록 돕는 페이지다.

export const spokesBatch55WageUnemp: SpokePage[] = [
  // ─── 1. wage / wage-business-expense-personal-card-claim ───
  {
    domain: 'wage',
    slug: 'wage-business-expense-personal-card-claim',
    keyword: '업무비 자비 결제 청구',
    questionKeyword: '회식·거래처 비용을 본인 카드로 결제했는데 회사에 청구할 수 있나요?',
    ctaKeyword: '업무비 자비 결제 청구 + 임금성 판단 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '업무비를 자비로 결제했을 때 청구 5단계 | 로앤가이드',
      description:
        '회식·거래처·법인카드 처리 등 업무비를 본인 카드로 결제했다면 비용보전 청구 + 임금성 판단까지 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"팀 회식인데 법인카드를 못 받아서 제 카드로 결제했어요. 거래처 식사·교통비도 자비로 처리해왔는데 영수증만 모아두고 정산이 계속 미뤄집니다. 청구할 수 있나요?" 업무 수행에 필요한 비용을 근로자가 자비로 부담했다면 사용자에 대한 비용보전 청구가 가능합니다(근로기준법 제43조 임금지급 + 민법 제688조 위임사무 비용상환). 정기·계속 지급되는 형태라면 임금성 판단으로 임금체불 진정 트랙도 함께 검토할 수 있어요.</p>',
    sections: [
      {
        title: '비용보전 vs 임금 — 자비 결제 업무비의 4가지 구분 신호',
        content:
          '<p><strong style="color:#1e3a5f">자비로 결제한 업무비가 임금에 해당하는지, 단순 비용보전(실비 변상)인지 다음 사정으로 구분합니다.</strong></p>\n<ul>\n<li><strong>① 단순 실비 변상 (비용보전)</strong> — 업무 수행에 필요한 실제 지출(거래처 식사·교통·자료 구매 등). 영수증·결재 라인이 명확하면 사용자에게 비용상환 청구(민법 제688조).</li>\n<li><strong>① 정기·계속 지급되는 정액 (임금성)</strong> — 매월 일정액의 활동비·식대·차량유지비처럼 실제 지출과 무관하게 정기·계속·일률 지급되면 임금에 해당할 수 있음(대법원 2021다248299 취지).</li>\n<li><strong>③ 영수증·결재 라인이 사후 정리</strong> — 회사 시스템에 결재 권한이 없거나 회식·법인카드가 부족해 자비 결제했다면 영수증·결재 라인을 사후라도 명확히 남겨두는 게 핵심.</li>\n<li><strong>④ 회사 부담 의사 입증</strong> — "법인카드 받아서 처리하라"는 지시·메신저, 부서장 결재, 사내 비용 정산 규정·매뉴얼이 있으면 회사 부담 의무가 더 분명해짐.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비용보전은 민사 청구, 정기·계속 지급되는 정액은 임금성 판단으로 노동청 진정도 가능합니다.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 비용보전을 청구할 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"개인 친목 회식이다"</strong> → 부서장 지시·참석 강제·업무 결재 라인이 있으면 업무 회식으로 평가. 메신저·일정·참석자 명단 확보.</li>\n<li><strong>"영수증 사후 제출이라 정산 못 한다"</strong> → 비용 발생 사실·업무 관련성 입증되면 사후 정산도 거부 사유 안 됨. 사내 정산 규정·매뉴얼 확인.</li>\n<li><strong>"법인카드 권한이 없어 본인이 부담한 것"</strong> → 권한 부재로 자비 결제했다면 그 비용은 회사 부담. 결재 라인·지시 메신저 확보.</li>\n<li><strong>"식대·교통비는 임금이 아니다"</strong> → 정기·계속·정액 지급되면 임금성 판단 가능(대법원 2021다248299 취지). 통상임금·평균임금 산입 다툼도 함께 검토.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 비용보전·임금성 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 비용상환 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영수증·결재 라인·지시 자료 확보</strong> (즉시) — 카드사 명세서·영수증·메신저 지시·결재 라인·일정·참석자 명단·사내 정산 규정.</li>\n<li><strong>2단계 — 청구 항목 구분</strong> (즉시) — 단순 비용(거래처 식사·교통·자료 구매) vs 정기·계속 지급(활동비·식대 정액). 시효: 비용보전 10년(민사) / 임금 3년.</li>\n<li><strong>3단계 — 회사 정산 요청</strong> (선택) — 인사·재무팀에 서면(메일·내용증명)으로 정산 요청. 14일 회신 없으면 다음 단계로.</li>\n<li><strong>4단계 — 노동청 진정 (임금성 인정 시)</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 임금체불 진정 접수. 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치.</li>\n<li><strong>5단계 — 민사 비용상환 청구 (필요 시)</strong> — 비용보전은 민법 제688조 청구. 3,000만 원 이하면 소액심판으로 통상 2~3개월. 임금성 인정분은 연 20% 지연이자(퇴직자).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 자비 결제 업무비, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">결제 항목·결재 라인·정산 거부 정황을 입력하면 비용보전·임금성 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>본인 카드 명세서·영수증·세금계산서 원본</li>\n<li>업무 지시·법인카드 부재 안내 메신저·이메일</li>\n<li>회식·거래처 미팅 일정표·참석자 명단</li>\n<li>사내 비용 정산 규정·매뉴얼·결재 라인 양식</li>\n<li>정산 요청 메일·내용증명·회사 회신 기록</li>\n<li>최근 3년 급여명세서 (식대·활동비 정액 항목 추적)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"개인 친목 회식" → 부서 회의·업무 회식 입증으로 다툼 가능.</li>\n<li>"영수증 사후 제출" → 비용 발생·업무 관련성 입증되면 사후 정산도 거부 사유 안 됨.</li>\n<li>"식대 정액은 임금 아니다" → 정기·계속·일률이면 임금성 인정 여지(대법원 2021다248299 취지).</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정의 기초가 되는 임금의 범위',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 근로자에게 지급하는 금품으로서, 근로자에게 계속적·정기적으로 지급되고 단체협약·취업규칙·급여규정·근로계약·노동관행 등에 의하여 사용자에게 그 지급의무가 지워져 있는 것이라고 판시했습니다.',
        takeaway: '실비 변상이 아닌 정기·계속 지급되는 정액 지원은 임금성 인정 여지가 있고, 비용보전·임금 청구 트랙을 함께 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회식비를 제 카드로 결제했는데 회사가 정산 안 해줘요',
        answer:
          '<strong>업무 회식이라면 사용자 부담이 원칙이고 비용보전 청구가 가능합니다.</strong> 부서장 지시·참석자 명단·결재 라인을 확보해 정산 요청부터 보내보세요.',
      },
      {
        question: '거래처 식사·교통비를 자비로 처리했는데 청구 가능한가요?',
        answer:
          '<strong>업무 수행 비용이라면 민법 제688조에 따라 사용자에게 비용상환 청구가 가능합니다.</strong> 영수증·일정·메신저로 업무 관련성을 입증해두세요.',
      },
      {
        question: '매월 정액으로 받던 활동비도 임금인가요?',
        answer:
          '<strong>실제 지출과 무관하게 정기·계속·일률 지급된다면 임금성이 인정될 수 있습니다(대법원 2021다248299 취지).</strong> 통상임금·평균임금 산입 다툼도 함께 검토해보세요.',
      },
      {
        question: '영수증을 한참 뒤에 모아두면 정산 못 한다는데 맞나요?',
        answer:
          '<strong>비용 발생·업무 관련성이 입증되면 사후 정산이라도 거부 사유로 보기 어렵습니다.</strong> 사내 정산 규정과 비교해 다툼 여지를 확인해보세요.',
      },
      {
        question: '퇴직했는데도 청구 가능한가요?',
        answer:
          '<strong>비용보전은 민사 시효 10년, 임금성 인정분은 3년 안에서 청구 가능합니다.</strong> 퇴직자라면 임금분에 대해 연 20% 지연이자도 함께 청구할 수 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '식대·교통비 통상임금 산입', href: '/guide/wage/wage-meal-allowance-ordinary-wage' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
      { label: '내용증명으로 임금 청구', href: '/guide/wage/wage-certified-mail-claim' },
      { label: '소액심판 임금 청구 절차', href: '/guide/wage/wage-small-claim-procedure' },
      { label: '평균임금 상여·연차수당 산입', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
    ],
  },

  // ─── 2. wage / wage-signing-bonus-unpaid-promised ───
  {
    domain: 'wage',
    slug: 'wage-signing-bonus-unpaid-promised',
    keyword: '사이닝보너스 미지급 청구',
    questionKeyword: '입사 전 합의한 사이닝보너스를 회사가 안 줘요. 청구할 수 있나요?',
    ctaKeyword: '사이닝보너스 약정금 청구 + 임금성 판단 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사이닝보너스 미지급 청구 4단계 절차 | 로앤가이드',
      description:
        '입사 전 합의한 사이닝보너스가 미지급됐다면 약정금 청구 + 임금성 판단까지 가능합니다. 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"입사 면접 때 사이닝보너스 1,000만 원 주기로 합의했는데 입사 후 회사가 약속을 미루고 있어요. 노동청 진정이 가능한지, 민사로 가야 하는지 헷갈립니다." 사이닝보너스는 채용 시 합의한 일회성 또는 분할 지급 약정금으로, 임금성 인정 여부에 따라 노동청 진정 트랙과 민사 약정금 트랙이 갈립니다(근로기준법 제2조 임금 정의 + 대법원 2022다255454 취지). 합의 경위·지급 조건을 정리해 두 트랙 모두 검토할 수 있어요.</p>',
    sections: [
      {
        title: '사이닝보너스의 성격 — 임금 vs 약정금 구분 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">사이닝보너스가 임금에 해당하는지 단순 약정금인지 다음 사정으로 평가됩니다.</strong></p>\n<ul>\n<li><strong>① 근로의 대가성 (임금성↑)</strong> — 입사 후 일정 기간 근속 조건으로 지급되거나, 매월 분할로 급여와 함께 지급되면 임금에 가까움(근로기준법 제2조).</li>\n<li><strong>② 일회성 보상금 (약정금↑)</strong> — 채용 유인용 일시금이고 별도 근속 조건 없이 입사 시 지급 약정이면 약정금 성격이 강함.</li>\n<li><strong>③ 합의서·계약서 명시 여부</strong> — 채용 제안서·입사 합의서·근로계약서에 사이닝보너스 액수·지급 시기·반환 조건이 명시돼 있으면 청구권 인정 명확.</li>\n<li><strong>④ 반환 약정 (의무복무기간)</strong> — "X년 내 퇴직 시 반환" 조건이 있으면 약정금 성격 + 의무복무 미완료 시 반환 다툼 별도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임금성이 인정되면 노동청 진정 + 형사 송치 가능. 약정금이면 민사 청구로 갑니다. 합의 경위·근속 조건이 핵심이에요.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 사이닝보너스 미지급을 청구할 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"구두 합의일 뿐 계약서에 없다"</strong> → 채용 제안서·합격 통보 메일·메신저·면접 녹취·증인이 있으면 합의 사실 입증 가능.</li>\n<li><strong>"실적·성과 조건 미달이라 못 준다"</strong> → 합의 당시 조건에 명시되지 않은 사후 조건 추가는 효력 다툼. 합의서 원문 우선.</li>\n<li><strong>"경영 사정 악화로 지급 불가"</strong> → 약정 의무는 경영 사정과 별개. 지연 시 지연이자(상사 6%·민사 5%) 청구 가능.</li>\n<li><strong>"의무복무기간 미충족이라 반환 사유다"</strong> → 반환 조건의 적정성·합리성 다툼. 과도한 의무복무는 근로기준법상 위약 예정 금지(제20조) 위반 검토.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사이닝보너스 청구 4단계',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 약정금 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합의 경위·지급 조건 자료 확보</strong> (즉시) — 채용 제안서·합격 통보 메일·면접 메모·근로계약서 부속서류·인사 담당자 메신저·면접 녹취. 액수·지급 시기·반환 조건 명시 여부 정리.</li>\n<li><strong>2단계 — 임금성 판단 + 청구 트랙 결정</strong> (즉시) — 분할·근속 조건이면 임금성 인정 여지(대법원 2022다255454 취지) → 노동청 진정 + 민사 병행. 일시금·반환 조건만 있으면 약정금 → 민사 단독.</li>\n<li><strong>3단계 — 회사 정산 요청 (내용증명)</strong> (선택) — 인사팀에 서면(내용증명)으로 지급 요청 + 14일 기한. 회신 없으면 다음 단계.</li>\n<li><strong>4단계 — 노동청 진정 (임금성 인정 시) + 민사 약정금 청구</strong> (3년/10년 이내) — 노동청 진정은 노동포털(labor.moel.go.kr) 처리기간 25일(연장 가능), 시정지시 미이행 시 형사 송치. 민사는 약정금 + 지연이자 청구. 3,000만 원 이하면 소액심판 통상 2~3개월.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사이닝보너스 미지급, AI로 청구 트랙을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">합의 경위·지급 조건·반환 약정을 입력하면 임금성·약정금 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>채용 제안서·오퍼레터·합격 통보 메일</li>\n<li>입사 합의서·근로계약서·부속 합의서</li>\n<li>인사 담당자 메신저·이메일·면접 녹취·메모</li>\n<li>지급 시기·액수·반환 조건 명시 자료</li>\n<li>입사 후 급여명세서 (분할 지급 항목 추적)</li>\n<li>회사 정산 요청 내용증명·회신 기록</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"구두 합의" → 메일·메신저·증인으로 합의 입증 가능.</li>\n<li>"성과 조건 미달" → 합의 당시 명시 안 된 조건 사후 추가는 효력 다툼.</li>\n<li>"의무복무 미충족 반환" → 반환 조건 적정성·근로기준법 제20조 위약 예정 금지 검토.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 노동관행이 근로계약 내용으로 인정되는 요건',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업의 내부에 존재하는 특정의 관행이 근로계약의 내용을 이루고 있다고 하기 위해서는 그러한 관행이 기업 사회에서 일반적으로 근로관계를 규율하는 규범적인 사실로서 명확히 승인되거나 기업의 구성원에 의하여 일반적으로 받아들여져 사실상의 제도로 확립되어 있어야 한다고 판시했습니다.',
        takeaway: '사이닝보너스 같은 채용 단계 합의도 명시 합의서가 우선이고, 관행 인정에는 객관적·일반적 승인 요건이 필요합니다. 합의 경위 자료 확보가 핵심이에요.',
      },
    ],
    faq: [
      {
        question: '구두로만 합의했는데 청구 가능한가요?',
        answer:
          '<strong>채용 제안서·합격 메일·메신저·증인이 있으면 합의 사실 입증이 가능합니다.</strong> 면접 메모·인사 담당자 통화 기록도 함께 확보해두세요.',
      },
      {
        question: '입사 후 회사가 "성과 미달이라 못 준다"고 합니다',
        answer:
          '<strong>합의 당시 조건에 없던 사후 조건 추가는 효력 다툼이 가능합니다.</strong> 원합의서·메일을 우선 근거로 청구해보세요.',
      },
      {
        question: '의무복무기간 미충족이라 반환하라는데 정당한가요?',
        answer:
          '<strong>반환 조건의 적정성과 근로기준법 제20조 위약 예정 금지 위반 여부를 검토할 수 있습니다.</strong> 과도한 위약금이면 무효 다툼 여지가 있어요.',
      },
      {
        question: '노동청 진정으로 받을 수 있나요?',
        answer:
          '<strong>임금성(근속·분할 조건)이 인정되면 노동청 진정이 가능합니다(대법원 2022다255454 취지).</strong> 일시금·반환 조건 위주면 민사 약정금 트랙이 더 적합해요.',
      },
      {
        question: '시효는 얼마나 되나요?',
        answer:
          '<strong>임금성 인정분은 3년, 약정금은 민사 10년입니다.</strong> 임금분은 퇴직자 연 20% 지연이자도 함께 청구 가능해요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '내용증명으로 임금 청구', href: '/guide/wage/wage-certified-mail-claim' },
      { label: '소액심판 임금 청구 절차', href: '/guide/wage/wage-small-claim-procedure' },
      { label: '연봉 합의서 사후 변경', href: '/guide/wage/wage-annual-salary-unilateral-change' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
      { label: '근로계약서 미작성 불이익', href: '/guide/wage/wage-no-written-contract-disadvantage' },
    ],
  },

  // ─── 3. unemployment / unemployment-separation-code-recommendation-to-voluntary-correction ───
  {
    domain: 'unemployment',
    slug: 'unemployment-separation-code-recommendation-to-voluntary-correction',
    keyword: '이직사유 자진퇴사 정정',
    questionKeyword: '회사가 권고사직 약속하고 자진퇴사로 신고했어요. 정정할 수 있나요?',
    ctaKeyword: '이직사유 정정 + 수급자격 인정 절차 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이직사유 자진퇴사로 신고됐을 때 정정 5단계 | 로앤가이드',
      description:
        '회사가 권고사직 약속 후 자진퇴사로 신고했다면 이직확인서 정정·수급자격 불인정 처분 취소 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"권고사직으로 처리해주겠다고 해서 사직서를 냈는데 막상 이직확인서를 보니 자진퇴사로 신고됐어요. 고용센터에서는 수급자격 안 된다고 하는데 어떻게 정정해야 하나요?" 이직사유 코드는 실업급여 수급자격을 좌우하는 핵심 항목이고, 사실과 다르면 정정 신청 + 수급자격 불인정 처분 취소 청구가 가능합니다(고용보험법 제43조 + 고용보험심사위원회 2023재결 제44호 사례 참조). 권고 정황 자료를 확보해 5단계 절차를 검토할 수 있어요.</p>',
    sections: [
      {
        title: '이직사유 코드 — 정정이 필요한 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">회사가 신고한 이직사유 코드와 실제 사실관계가 다르다면 다음 사정을 점검해보세요.</strong></p>\n<ul>\n<li><strong>① 권고사직 약속 후 자진퇴사 신고</strong> — 사용자·관리자가 권고 또는 압박으로 사직을 유도한 정황이 있는데도 코드 11(자진퇴사)로 신고된 경우.</li>\n<li><strong>② 경영상 이유 미반영</strong> — 폐업·인원감축·구조조정 정황이 있는데 일반 자진퇴사로 신고. 코드 23(경영상 필요·노사합의 인원감축) 등으로 정정 검토.</li>\n<li><strong>③ 정당이직 사유(임금체불·괴롭힘) 미반영</strong> — 임금체불·직장 내 괴롭힘·통근 불가 등 정당이직 사유가 있는데 단순 자진퇴사로 처리.</li>\n<li><strong>④ 사직서 사유와 신고 코드 불일치</strong> — 사직서에 권고·경영상 이유로 적었는데 회사가 일방으로 자진퇴사 신고. 사실관계 입증으로 정정 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이직사유 코드는 사실관계 기준입니다. 회사 신고와 실제가 다르면 사용자에게 정정 요구 + 고용센터 직권조사 + 심사청구 트랙이 있어요.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 이직사유 정정을 요구할 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인이 사직서 냈으니 자진퇴사다"</strong> → 사직 유도·압박·권고 정황 입증으로 권고사직 코드 정정 가능. 면담 녹취·메신저·동료 증언 확보.</li>\n<li><strong>"권고는 구두였고 합의문 없다"</strong> → 메일·메신저·통화 녹취·동료 진술도 정황 자료. 사직서에 "권고에 의함"이라 적은 사본도 강력.</li>\n<li><strong>"이직확인서 코드 변경하면 회사가 불이익 받는다"</strong> → 사실관계 우선. 회사가 정정 거부하면 고용센터에 직권조사 신청.</li>\n<li><strong>"이미 수급자격 불인정 처분 났다"</strong> → 처분 통지일로부터 90일 내 심사청구(고용보험심사위원회) → 재심사청구 → 행정소송 트랙 가능.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이직사유 정정 + 수급자격 인정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제43조 + 고용복지플러스센터 안내를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권고 정황 자료 확보</strong> (즉시) — 면담 녹취·메신저·이메일·동료 증언·사직서 사본(사유 기재)·회사 인사 공지. 일자·발언자·발언 내용 정리.</li>\n<li><strong>2단계 — 회사에 이직확인서 정정 요청</strong> (즉시) — 인사팀에 서면(내용증명)으로 코드 정정 요구. 회사가 14일 내 정정하지 않으면 다음 단계.</li>\n<li><strong>3단계 — 고용센터 직권조사 요청</strong> (수급자격 신청 시) — 고용복지플러스센터(1350)에 권고 정황 자료 제출. 담당관이 사용자에게 직권조사·확인 후 코드 정정 또는 사실관계 인정 가능.</li>\n<li><strong>4단계 — 수급자격 불인정 처분에 대한 심사청구</strong> (처분 통지 후 90일 내) — 고용보험심사위원회에 심사청구. 재결 사례에서 이직사유 정정으로 수급자격 인정된 사안 다수(2023재결 제44호 등 참조). 처리기간 통상 60~90일.</li>\n<li><strong>5단계 — 재심사청구·행정소송 (필요 시)</strong> — 재결 통지 후 90일 내 재심사청구 또는 행정법원 처분 취소소송. 권고 정황·동료 증언이 강할수록 인정률 상승.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 이직사유 정정, AI로 인정 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">권고 정황·사직서 사유·회사 신고 코드를 입력하면 정정·심사청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>이직확인서 사본 (회사 신고 코드 확인)</li>\n<li>사직서 사본 (사유 기재 확인)</li>\n<li>권고 면담 녹취·메신저·이메일·문자</li>\n<li>인사팀 통보·공지·구조조정·인원감축 자료</li>\n<li>동료 증언서·진술서 (서명 + 일자)</li>\n<li>회사 정정 요청 내용증명·회신 기록</li>\n<li>심사청구서 (처분 통지서 첨부)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"본인이 사직서 냈다" → 권고·압박 정황 입증으로 코드 정정 가능.</li>\n<li>"구두 권고라 증거 없다" → 메신저·녹취·동료 증언도 정황 자료.</li>\n<li>"이미 처분 났다" → 처분 통지일로부터 90일 내 심사청구로 다툴 수 있음.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용복지플러스센터 1350 — 수급자격·이직사유 안내</li>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 동반 진정 접수</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 이직사유 정정으로 수급자격 불인정 처분 취소',
        summary:
          '고용보험심사위원회 2023재결 제44호(2023.06.21 재결)에서 위원회는 청구인이 요양보호사로 근무하다 2023년 1월 이직한 후 신청한 실업급여 수급자격 불인정 처분에 대해, 청구인이 사업장의 운영 사정과 사용자 측 권유 등 이직 경위를 종합 검토한 결과 자진 이직으로 평가하기 어렵다고 보아 피청구인의 수급자격 불인정 처분을 취소한다고 재결했습니다.',
        takeaway: '회사가 자진퇴사로 신고했어도 권고·압박·경영상 이유 등 이직 경위가 입증되면 처분 취소가 가능합니다. 처분 통지 후 90일 내 심사청구 트랙을 검토할 수 있어요.',
      },
    ],
    faq: [
      {
        question: '회사가 권고사직 약속하고 자진퇴사로 신고했어요',
        answer:
          '<strong>면담 녹취·메신저·동료 증언으로 권고 정황을 입증하면 코드 정정·처분 취소 청구가 가능합니다.</strong> 사직서에 "권고에 의함"이라 기재된 사본도 강력한 자료예요.',
      },
      {
        question: '구두 권고라 증거가 없는데 어떻게 입증하나요?',
        answer:
          '<strong>메신저·이메일·통화 녹취·동료 진술서도 정황 자료로 인정될 수 있습니다.</strong> 일자·발언자·발언 내용을 시간순으로 정리해두세요.',
      },
      {
        question: '이미 수급자격 불인정 처분이 났는데 다툴 수 있나요?',
        answer:
          '<strong>처분 통지일로부터 90일 내 고용보험심사위원회에 심사청구가 가능합니다.</strong> 권고 정황 자료가 강하면 재결 사례에서 처분 취소 사례가 다수 보고됩니다(2023재결 제44호 등 참조).</p>',
      },
      {
        question: '회사가 이직확인서 정정을 거부하면 어떻게 하나요?',
        answer:
          '<strong>고용복지플러스센터(1350)에 직권조사를 요청할 수 있습니다.</strong> 담당관이 사용자에게 사실관계를 확인하고 코드 정정 또는 사실 인정 처분이 가능해요.',
      },
      {
        question: '심사청구 처리 기간은 얼마나 되나요?',
        answer:
          '<strong>통상 60~90일 안에 재결이 나오는 것으로 안내되고 있습니다.</strong> 결과 불복 시 재심사청구 또는 행정소송으로 추가 다툼이 가능해요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '권고사직 인정 자료 정리', href: '/guide/unemployment/unemployment-recommended-resignation-evidence' },
      { label: '실업급여 수급자격 불인정 처분 취소', href: '/guide/unemployment/unemployment-disqualification-appeal' },
      { label: '심사청구 90일 내 절차', href: '/guide/unemployment/unemployment-administrative-appeal-90days' },
      { label: '이직확인서 정정 요청', href: '/guide/unemployment/unemployment-separation-confirm-correction' },
      { label: '정당이직 사유 인정 자료', href: '/guide/unemployment/unemployment-justified-resignation-cases' },
    ],
  },
];
