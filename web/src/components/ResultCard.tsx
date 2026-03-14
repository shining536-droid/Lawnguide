'use client';

import type { ResultEntry, DocumentItem, KeyCheckpoint, TimelineStep, FirstAction } from '@/lib/domains';

interface ResultCardProps {
  result: ResultEntry;
  answers?: Record<string, string>;
}

const FIELD_LABELS: Record<string, string> = {
  // 공통
  problem_type: '문제 유형',
  progress_stage: '진행 단계',
  timeline: '시점/시기',
  counterparty_contact: '상대방 연락',
  existing_docs: '보유 서류',
  // jeonse
  move_in_report: '전입신고 여부',
  fixed_date: '확정일자 여부',
  deposit_insurance: '보증보험 가입',
  fraud_suspicion: '사기 의심 여부',
  auction_notice: '경매 통지 여부',
  deposit_amount_range: '보증금 금액대',
  property_region: '주택 소재지',
  // jeonse-fraud
  fraud_type: '피해 유형',
  deposit_status: '보증금 상황',
  landlord_status: '임대인 상태',
  police_report: '경찰 신고 여부',
  victim_recognition: '피해자 인정 신청',
  auction_status: '경매 진행 여부',
  housing_need: '현재 주거 상황',
  multiple_victims: '다른 피해자 여부',
  // sangga
  issue_type: '문제 유형',
  contract_status: '계약 상태',
  business_registration: '사업자등록 여부',
  lease_duration: '임대차 기간',
  deposit_range: '보증금 금액대',
  premium_issue: '권리금 문제',
  dispute_resolution: '분쟁 해결 조치',
  confirmed_date: '확정일자 여부',
  deposit_amount: '보증금 금액',
  // wage
  employment_status: '고용 상태',
  contract_type: '근로 형태',
  written_contract: '근로계약서 작성 여부',
  unpaid_period: '체불 기간',
  evidence: '증거자료',
  action_taken: '조치 현황',
  unpaid_amount: '체불 금액',
  // retirement
  service_period: '근무 기간',
  pension_type: '퇴직급여 유형',
  separation_reason: '퇴사 사유',
  recent_salary_docs: '최근3개월 급여자료',
  company_size: '사업장 규모',
  expected_amount: '예상 퇴직금',
  irp_account: 'IRP 계좌 여부',
  // dismissal
  notice_method: '해고 통보 방식',
  reason_explained: '해고 사유 설명',
  advance_notice: '해고 예고 여부',
  protection_status: '보호 사유',
  desired_outcome: '희망 결과',
  dismissal_type: '해고 유형',
  notice_given: '해고 예고 여부',
  written_notice: '서면 통지 여부',
  special_status: '특수 상황',
  time_since_dismissal: '해고 경과 기간',
  // small-claims
  claim_type: '청구 유형',
  claim_amount: '청구 금액',
  evidence_level: '증거 보유',
  debtor_response: '상대방 반응',
  prior_demand: '사전 독촉 여부',
  payment_order: '지급명령 고려',
  has_property: '상대방 재산 파악',
  urgency: '긴급성',
  // rehabilitation
  debtor_type: '채무자 유형',
  total_debt: '총 채무',
  income_status: '소득 여부',
  debt_type: '채무 종류',
  overdue_period: '연체 기간',
  prior_consultation: '사전 상담',
  creditor_pressure: '채권추심 상태',
  family_status: '부양가족',
  secured_debt: '담보채무 여부',
  debt_scale: '채무 규모',
  // bankruptcy
  debt_amount: '총 채무',
  asset_status: '재산 상태',
  debt_cause: '채무 원인',
  overdue_status: '연체 상태',
  prior_attempt: '이전 시도',
  family_support: '부양가족',
  creditor_action: '채권자 조치',
  // inheritance
  inheritance_status: '상속 진행 단계',
  heir_type: '상속인 유형',
  heir_count: '상속인 수',
  has_will: '유언장 유무',
  estate_type: '상속재산 종류',
  estate_value: '상속재산 규모',
  debt_status: '피상속인 채무',
  renunciation_interest: '상속포기/한정승인',
  dispute_status: '분쟁 여부',
  tax_filing: '상속세 신고',
  death_timing: '사망 시점',
  // divorce
  divorce_type: '이혼 유형',
  spouse_agreement: '배우자 동의',
  children: '미성년 자녀',
  custody_issue: '양육권 쟁점',
  property_status: '재산분할',
  domestic_violence: '가정폭력 여부',
  alimony_issue: '위자료 청구',
  cohabitation: '동거 여부',
  evidence_status: '증거 확보',
  // child-support
  support_status: '양육비 현황',
  agreement_type: '합의 방법',
  payment_period: '미지급 기간',
  obligor_situation: '의무자 상황',
  child_age: '자녀 나이',
  enforcement_tried: '이행확보 시도',
  income_change: '소득 변동',
  has_execution_title: '집행권원 보유',
  income_data: '소득자료',
  // neighbor-dispute
  dispute_type: '분쟁 유형',
  severity: '심각도',
  mediation_interest: '조정 의향',
  property_damage: '재산 피해',
  physical_harm: '신체/건강 피해',
  housing_type: '주거 유형',
  // defamation
  defamation_type: '명예훼손 유형',
  platform: '게시 장소',
  content_truth: '내용 사실여부',
  spread_extent: '확산 정도',
  poster_identity: '게시자 특정',
  damage_type: '피해 유형',
  deletion_request: '삭제 요청',
  legal_action_interest: '법적 조치',
  // real-estate-sale
  sale_stage: '거래 단계',
  contract_deposit: '계약금 지급',
  counterparty: '상대방',
  defect_type: '하자 유형',
  agent_involvement: '공인중개사',
  damage_amount: '피해 금액',
  // real-estate-auction
  participant_role: '참여 유형',
  auction_stage: '경매 단계',
  rights_analysis: '권리분석',
  tenant_status: '임차인 여부',
  bid_experience: '경매 경험',
  budget_status: '자금 준비',
  special_issue: '특수 사항',
  // industrial-accident1
  accident_type: '재해 유형',
  injury_severity: '부상 정도',
  employment_type: '고용 형태',
  employer_report: '사업주 산재 신고',
  medical_treatment: '치료 상태',
  insurance_coverage: '산재보험 가입',
  time_since_accident: '발생 시기',
  employer_pressure: '사업주 압박',
  approval_status: '승인 상태',
  care_status: '요양/휴업 여부',
  // industrial-accident2
  benefit_type: '급여 종류',
  claim_status: '청구 상태',
  disability_grade: '장해 등급',
  rehabilitation_need: '재활 필요',
  objection_interest: '불복 의사',
  return_to_work: '직장복귀',
  ongoing_treatment: '추가 치료',
  special_situation: '특수 상황',
  // unemployment
  separation_reason_ue: '이직 사유',
  employment_period: '고용보험 가입 기간',
  current_status: '현재 상태',
  registration_status: '구직등록',
  application_timing: '신청 시기',
  age_group: '연령대',
  special_case: '특수 상황',
  // crime domains (shared)
  perspective: '관점',
  situation_type: '상황 유형',
  crime_subtype: '세부 유형',
  report_status: '신고 여부',
  medical_exam: '의료 조치',
  location_type: '발생 장소',
  harassment_type: '유형',
  workplace_action: '직장 내 조치',
  employer_response: '사업주 대응',
  retaliation_concern: '보복 우려',
  stalking_type: '유형',
  assault_type: '폭행 유형',
  injury_level: '부상 정도',
  relationship: '관계',
  victim_age: '연령',
  guardian_status: '보호자 여부',
  school_response: '학교 대응',
  violence_type: '폭력 유형',
  // shared
  legal_support: '법률 지원 여부',
  property_type: '부동산 유형',
};

// Fallback values for template variables that may not exist in answers
const TEMPLATE_FALLBACKS: Record<string, string> = {
  duration: '최근',
  timeline: '최근',
  existing_docs: '정리된 자료가 많지 않은 상태',
  progress_stage: '확인이 필요한',
  counterparty_contact: '연락 상태 확인이 필요한',
  contact_status: '연락 상태 확인이 필요한',
  first_action_short: '기본 자료부터 정리해두는 것',
  perspective: '해당',
  situation_type: '해당',
  problem_type: '해당',
  residence_status: '확인이 필요한',
  deposit_status: '확인이 필요한',
  payment_status: '확인이 필요한',
  employment_status: '확인이 필요한',
  move_in_report: '확인이 필요한',
  fixed_date: '확인이 필요한',
  assault_type: '해당',
  report_status: '확인 전',
  medical_exam: '확인 전',
  crime_subtype: '해당',
  harassment_type: '해당',
  stalking_type: '해당',
  divorce_type: '해당',
  dispute_type: '해당',
  claim_type: '해당',
  debtor_type: '해당',
  fraud_type: '해당',
  issue_type: '해당',
  sale_stage: '해당',
  auction_stage: '해당',
  accident_type: '해당',
  benefit_type: '해당',
  separation_reason_ue: '해당',
  defamation_type: '해당',
  violence_type: '해당',
  support_status: '해당',
  inheritance_status: '해당',
};

// Template replacement: {field} -> answer value with fallback
function renderTemplate(template: string, answers: Record<string, string>, result?: ResultEntry): string {
  // Derive first_action_short from result if not in answers
  const vars: Record<string, string> = { ...answers };
  if (result?.first_action?.items?.[0] && !vars.first_action_short) {
    vars.first_action_short = result.first_action.items[0]
      .replace(/해보세요$/, '해보는 것')
      .replace(/하세요$/, '하는 것')
      .replace(/받아보세요$/, '받아보는 것')
      .replace(/보세요$/, '보는 것');
  }

  return template.replace(/\{(\w+)\}/g, (_, field) => {
    return vars[field] || TEMPLATE_FALLBACKS[field] || '';
  });
}

function isDocumentItemArray(docs: string[] | DocumentItem[]): docs is DocumentItem[] {
  return docs.length > 0 && typeof docs[0] === 'object';
}

// [A] Safety Warning
function SafetyWarning({ message }: { message: string }) {
  return (
    <section className="rounded-xl border-2 border-red-300 bg-red-50 p-5 md:p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">!</span>
        <div>
          <h3 className="text-lg font-bold text-red-800">안전 안내</h3>
          <p className="mt-1 text-base leading-relaxed text-red-700">{message}</p>
        </div>
      </div>
    </section>
  );
}

// [B] First Action Box
function FirstActionBox({ firstAction, onScrollTo }: { firstAction: FirstAction; onScrollTo?: (target: string) => void }) {
  return (
    <section className="rounded-xl border-2 border-primary-300 bg-gradient-to-br from-primary-50 to-blue-50 p-6 md:p-8 shadow-sm">
      <h3 className="mb-3 text-xl font-bold text-navy-700 md:text-2xl">{firstAction.title}</h3>
      <ul className="space-y-2">
        {firstAction.items.map((item, i) => (
          <li key={i} className="flex gap-2 text-lg leading-relaxed text-gray-800">
            <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">{i + 1}</span>
            {item}
          </li>
        ))}
      </ul>
      {firstAction.buttons && firstAction.buttons.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {firstAction.buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => onScrollTo?.(btn.target)}
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
            >
              {btn.label} &darr;
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

// [C] Status Summary
function StatusSummary({ result, answers }: { result: ResultEntry; answers?: Record<string, string> }) {
  const summary = result.status_summary_template && answers
    ? renderTemplate(result.status_summary_template, answers, result)
    : result.status_summary;

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-3 text-xl font-bold text-navy-700 md:text-2xl">현재 상황 요약</h3>
      <p className="text-base leading-relaxed text-gray-700 md:text-lg">{summary}</p>
      <p className="mt-3 text-sm font-medium text-primary-600">{result.risk_level}</p>
    </section>
  );
}

// [D] Key Checkpoints
function KeyCheckpoints({ checkpoints }: { checkpoints: KeyCheckpoint[] }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-navy-700 md:text-2xl">핵심 확인 포인트</h3>
      <div className="space-y-4">
        {checkpoints.map((cp, i) => (
          <div key={i} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy-700 text-xs font-bold text-white">{i + 1}</span>
              <div>
                <h4 className="text-lg font-semibold text-navy-700">{cp.title}</h4>
                <p className="mt-1 text-base leading-relaxed text-gray-600">{cp.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// [E] Today's Items
function TodayItems({ items }: { items: string[] }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-navy-700 md:text-2xl">
        <span className="flex h-6 w-6 items-center justify-center rounded bg-red-100 text-sm text-red-700">!</span>
        오늘 확인할 사항
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-lg leading-relaxed text-gray-800">
            <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

// [F] This Week's Items
function ThisWeekItems({ items }: { items: string[] }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-navy-700 md:text-2xl">
        <span className="flex h-6 w-6 items-center justify-center rounded bg-primary-100 text-sm text-primary-600">&rarr;</span>
        이번 주에 준비할 것
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-lg leading-relaxed text-gray-800">
            <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

// [G] Timeline Visualization — horizontal on desktop, vertical on mobile
function Timeline({ steps }: { steps: TimelineStep[] }) {
  // Find index of first active step (for completed logic)
  const activeIndex = steps.findIndex((s) => s.active);

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-5 text-xl font-bold text-navy-700 md:text-2xl">진행 절차 안내</h3>

      {/* Desktop: horizontal layout (md+) */}
      <div className="hidden md:flex items-start overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center" style={{ minWidth: '120px' }}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                step.active
                  ? 'bg-primary-600 text-white ring-4 ring-primary-100'
                  : activeIndex >= 0 && i < activeIndex
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-500'
              }`}>
                {activeIndex >= 0 && i < activeIndex ? '\u2713' : i + 1}
              </div>
              <p className={`mt-2 text-center text-sm font-medium ${step.active ? 'text-primary-700' : 'text-gray-600'}`}>
                {step.label}
              </p>
              <p className="mt-0.5 text-center text-xs text-gray-400" style={{ maxWidth: '110px' }}>
                {step.desc}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="mt-5 h-0.5 w-8 flex-shrink-0 bg-gray-200 md:w-12" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical layout (<md) */}
      <div className="md:hidden flex flex-col">
        {steps.map((step, i) => {
          const isCompleted = activeIndex >= 0 && i < activeIndex;
          const isActive = step.active;
          return (
            <div key={i} className="flex items-start gap-4">
              {/* Left: circle + connector line */}
              <div className="flex flex-col items-center">
                <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  isActive
                    ? 'bg-primary-600 text-white ring-4 ring-primary-100'
                    : isCompleted
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}>
                  {isCompleted ? '\u2713' : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 min-h-[28px] bg-gray-200 my-1" />
                )}
              </div>
              {/* Right: label + description */}
              <div className={`pb-5 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                <p className={`text-base font-medium ${isActive ? 'text-primary-700 font-bold' : 'text-gray-600'}`}>
                  {step.label}
                </p>
                <p className="text-sm text-gray-400 mt-0.5">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// [H] Prep Memo (collapsible)
function PrepMemo({ answers }: { answers: Record<string, string> }) {
  if (!answers || Object.keys(answers).length === 0) return null;

  const entries = Object.entries(answers).slice(0, 8);

  return (
    <section className="rounded-xl border border-primary-200 bg-primary-50 p-6 md:p-8 shadow-sm">
      <details>
        <summary className="cursor-pointer text-xl font-bold text-navy-700 md:text-2xl">
          상담 전 준비 메모
        </summary>
        <div className="mt-4 rounded-lg bg-white px-4 py-3">
          <ul className="space-y-1">
            {entries.map(([key, val]) => (
              <li key={key} className="flex justify-between text-base">
                <span className="text-gray-600">{FIELD_LABELS[key] ?? key}</span>
                <span className="font-medium text-gray-800">{val || '(선택 안 함)'}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </section>
  );
}

// [I] Priority-split Checklist
function PriorityChecklist({
  priority,
  optional,
  documents,
  answers,
}: {
  priority?: DocumentItem[];
  optional?: DocumentItem[];
  documents?: string[] | DocumentItem[];
  answers?: Record<string, string>;
}) {
  const existingDocs = answers?.existing_docs?.split(',') ?? [];

  // Use priority/optional if available, otherwise fall back to documents
  const hasPrioritySplit = (priority && priority.length > 0) || (optional && optional.length > 0);

  const renderDocItem = (doc: DocumentItem, i: number) => {
    const autoHas = doc.status === 'has' || existingDocs.includes(doc.label);
    return (
      <div key={i} className="rounded-lg bg-gray-50 px-4 py-3.5">
        {/* Line 1: Document name — bold */}
        <p className={`text-base font-semibold ${autoHas ? 'text-gray-500' : 'text-gray-800'}`}>
          {doc.label}
        </p>
        {/* Line 2: Description — small gray, wrap allowed */}
        {doc.note && (
          <p className="mt-1 text-sm leading-relaxed text-gray-500">{doc.note}</p>
        )}
        {/* Line 3: Status */}
        <p className={`mt-1.5 text-sm font-medium ${autoHas ? 'text-green-600' : 'text-orange-600'}`}>
          {autoHas ? '\u2705 있음' : '\u2610 준비 필요'}
        </p>
      </div>
    );
  };

  if (hasPrioritySplit) {
    return (
      <section id="checklist" className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-navy-700 md:text-2xl">상담 전 체크리스트</h3>
        {priority && priority.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 flex items-center gap-2 text-base font-semibold text-red-700">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-red-100 text-xs">!</span>
              반드시 준비
            </h4>
            <div className="space-y-2.5">{priority.map(renderDocItem)}</div>
          </div>
        )}
        {optional && optional.length > 0 && (
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-base font-semibold text-gray-500">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-gray-100 text-xs">+</span>
              있으면 좋은 것
            </h4>
            <div className="space-y-2.5">{optional.map(renderDocItem)}</div>
          </div>
        )}
      </section>
    );
  }

  // Fallback: use legacy documents field
  if (!documents || documents.length === 0) return null;

  if (isDocumentItemArray(documents)) {
    return (
      <section id="checklist" className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-navy-700 md:text-2xl">상담 전 체크리스트</h3>
        <div className="space-y-2.5">{documents.map(renderDocItem)}</div>
      </section>
    );
  }

  return (
    <section id="checklist" className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-navy-700 md:text-2xl">상담 전 체크리스트</h3>
      <div className="space-y-2.5">
        {documents.map((doc, i) => {
          const autoHas = existingDocs.includes(doc);
          return (
            <div key={i} className="rounded-lg bg-gray-50 px-4 py-3.5">
              <p className={`text-base font-semibold ${autoHas ? 'text-gray-500' : 'text-gray-800'}`}>{doc}</p>
              <p className={`mt-1.5 text-sm font-medium ${autoHas ? 'text-green-600' : 'text-orange-600'}`}>
                {autoHas ? '\u2705 있음' : '\u2610 준비 필요'}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// [J] Free Help Institutions
function PublicConnections({ connections }: { connections: { name: string; phone?: string; url?: string; note?: string }[] }) {
  return (
    <section id="institutions" className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-navy-700 md:text-2xl">무료로 도움받을 수 있는 곳</h3>
      <div className="space-y-2">
        {connections.map((conn, i) => (
          <div key={i} className="rounded-lg bg-primary-50 px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-navy-700">{conn.name}</span>
              <div className="flex items-center gap-2">
                {conn.phone && (
                  <a href={`tel:${conn.phone}`} className="rounded-lg bg-primary-600 px-4 py-1.5 text-base font-medium text-white hover:bg-primary-700">
                    {conn.phone}
                  </a>
                )}
              </div>
            </div>
            {conn.note && <p className="mt-1 text-base text-gray-600">{conn.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

// [K] Professional Section
function ProfessionalSection({ professionals }: { professionals: { type: string; note?: string; description?: string }[] }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-navy-700 md:text-2xl">전문가 상담이 필요한 경우</h3>
      <div className="space-y-2">
        {professionals.map((p, i) => (
          <div key={i} className="rounded-lg bg-gray-50 px-4 py-3">
            <p className="text-lg font-medium text-primary-600">{p.note ?? `이 유형의 사안을 다루는 ${p.type} 보기 (광고 포함)`}</p>
            {p.description && (
              <p className="mt-1 rounded bg-blue-50 px-3 py-2 text-base leading-relaxed text-blue-700">{p.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// [L] Related Systems & Legal Basis
function LegalInfo({ result }: { result: ResultEntry }) {
  if ((!result.related_systems || result.related_systems.length === 0) && (!result.legal_basis || result.legal_basis.length === 0)) return null;

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-navy-700 md:text-2xl">관련 제도 / 법적 근거</h3>
      {result.related_systems?.length > 0 && (
        <div className="mb-3 space-y-2">
          {result.related_systems.map((sys, i) => (
            <div key={i}>
              <h4 className="text-lg font-semibold text-navy-700">{sys.name}</h4>
              <p className="text-base leading-relaxed text-gray-700">{sys.description}</p>
            </div>
          ))}
        </div>
      )}
      {result.legal_basis?.length > 0 && (
        <ul className="space-y-1">
          {result.legal_basis.map((basis, i) => (
            <li key={i} className="text-base text-gray-600">{basis}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

// Caution Items
function CautionSection({ items }: { items: string[] }) {
  return (
    <section className="rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8 shadow-sm">
      <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-800 md:text-2xl">
        <span className="flex h-6 w-6 items-center justify-center rounded bg-amber-100 text-sm text-amber-700">{'\u26A0'}</span>
        유의사항
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-lg leading-relaxed text-amber-900">
            <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

// [M] Disclaimer
function Disclaimer({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
      <p className="text-base text-amber-800">{text}</p>
    </div>
  );
}

export default function ResultCard({ result, answers }: ResultCardProps) {
  const actions = result.actions;
  const isOk = result.type_id === 'TYPE_OK';

  const scrollTo = (target: string) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // TYPE_OK: compact view
  if (isOk) {
    return (
      <div className="space-y-6">
        <section className="rounded-xl border border-green-200 bg-green-50 p-6 text-center shadow-sm md:p-8">
          <div className="mb-3 text-4xl">{'\u2705'}</div>
          <p className="text-xl font-semibold text-green-800 md:text-2xl">{result.status_summary}</p>
        </section>

        {actions?.checklist && actions.checklist.length > 0 && (
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-700 md:text-2xl">마무리 확인사항</h3>
            <ul className="space-y-2">
              {actions.checklist.map((item, i) => (
                <li key={i} className="flex gap-2 text-lg leading-relaxed text-gray-800">
                  <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <Disclaimer text={result.disclaimer ?? '이 내용은 준비 안내이며 법적 효력을 갖는 유권해석이 아닙니다.'} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* [A] Safety Warning */}
      {result.safety_warning && <SafetyWarning message={result.safety_warning} />}

      {/* [B] First Action Box */}
      {result.first_action && <FirstActionBox firstAction={result.first_action} onScrollTo={scrollTo} />}

      {/* [C] Status Summary */}
      <StatusSummary result={result} answers={answers} />

      {/* [D] Key Checkpoints */}
      {result.key_checkpoints && result.key_checkpoints.length > 0 && (
        <KeyCheckpoints checkpoints={result.key_checkpoints} />
      )}

      {/* [E] Today's Items */}
      {actions?.today && actions.today.length > 0 && <TodayItems items={actions.today} />}

      {/* [F] This Week's Items */}
      {actions?.this_week && actions.this_week.length > 0 && <ThisWeekItems items={actions.this_week} />}

      {/* [G] Timeline */}
      {result.timeline_steps && result.timeline_steps.length > 0 && <Timeline steps={result.timeline_steps} />}

      {/* [H] Prep Memo */}
      {answers && Object.keys(answers).length > 0 && <PrepMemo answers={answers} />}

      {/* [I] Checklist */}
      <PriorityChecklist
        priority={result.checklist_priority}
        optional={result.checklist_optional}
        documents={result.documents}
        answers={answers}
      />

      {/* Caution Items */}
      {actions?.caution && actions.caution.length > 0 && <CautionSection items={actions.caution} />}

      {/* [J] Free Help Institutions */}
      {result.connections?.public?.length > 0 && (
        <PublicConnections connections={result.connections.public} />
      )}

      {/* [K] Professional Section */}
      {result.connections?.professional?.length > 0 && (
        <ProfessionalSection professionals={result.connections.professional} />
      )}

      {/* [L] Related Systems & Legal Basis */}
      <LegalInfo result={result} />

      {/* [M] Disclaimer */}
      <Disclaimer text={result.disclaimer ?? '이 내용은 준비 안내이며 법적 효력을 갖는 유권해석이 아닙니다.'} />
    </div>
  );
}
