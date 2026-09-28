'use client';

/**
 * 상담 준비 리포트 — /chat(ChatResultCard) 와 /diagnosis(ResultCard) 공용 조각.
 *
 * 설계 원칙
 *  - **새 AI/LLM 호출 없음.** 이미 prop 으로 들어오는 answers + result 로만 결정론적으로 렌더한다.
 *  - **단정적 법률 판단 금지.** "핵심 법률 쟁점" 은 쟁점만 제시하고 귀속 판단을 하지 않는다.
 *    자료는 "이미 준비된 자료 / 추가로 준비하면 좋은 자료 / 아직 확인이 필요한 항목" 3단계로 나눠
 *    추론이 불확실한 항목을 단정하지 않는다.
 *  - **GA4 이벤트를 새로 발사하지 않는다.** 인쇄 계측은 부모가 넘기는 onPrint 에서만 처리한다
 *    (ChatResultCard 의 afterprint → diagnosis_save 흐름을 그대로 유지).
 *  - 런타임 fs 없음. 라벨 맵은 `@/data/answer-field-labels` 상수뿐.
 *  - 인쇄 대상 블록은 `report-block`, 인쇄에서 숨길 요소는 `report-hide` 클래스를 쓴다
 *    (globals.css 의 @media print 규칙과 짝).
 */

import { FIELD_LABELS } from '@/data/answer-field-labels';

/* ─── answers → 사실관계 목록 ────────────────────────────────── */

export interface Fact {
  key: string;
  label: string;
  value: string;
}

/** 값이 비었거나 "모름"류면 사실관계로 세우지 않는다. */
function isBlank(v: unknown): boolean {
  if (v === null || v === undefined) return true;
  const s = String(v).trim();
  return s === '' || s === '모름' || s === '잘 모르겠어요' || s === '선택 안 함' || s === '해당없음';
}

/**
 * answers 를 "라벨 — 값" 목록으로 변환.
 * - 라벨을 못 찾는 key(영문 field, factCheck id 등)는 **버린다.** 원시 key 노출 방지.
 * - 쉼표로 여러 값이 온 항목(다중선택)은 " · " 로 이어 붙인다.
 */
export function buildFacts(
  answers: Record<string, string> | undefined,
  /**
   * 추가 라벨 맵. /chat 의 multi-step(subtype) 흐름은 answers 키가 factCheck id(`fc-...`)라
   * FIELD_LABELS 에 없다. ChatBot 이 subtypes 데이터에서 id→질문문 맵을 만들어 넘긴다
   * (이미 클라이언트에 있는 데이터라 번들이 늘지 않는다).
   */
  extraLabels?: Record<string, string>
): Fact[] {
  if (!answers) return [];
  const out: Fact[] = [];
  for (const [key, raw] of Object.entries(answers)) {
    const label = FIELD_LABELS[key] ?? extraLabels?.[key];
    if (!label) continue;
    if (isBlank(raw)) continue;
    const value = String(raw)
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s && !isBlank(s))
      .join(' · ');
    if (!value) continue;
    out.push({ key, label, value });
  }
  return out;
}

/* ─── 1. 사실관계 타임라인 ───────────────────────────────────── */

export function FactTimeline({ facts }: { facts: Fact[] }) {
  if (facts.length === 0) return null;
  return (
    <div className="report-block">
      <p className="mb-2 text-sm font-bold text-gray-900">🗂 내가 입력한 사실관계</p>
      <p className="mb-3 text-xs text-gray-500">
        상담 때 이 내용을 그대로 설명하면 시간을 아낄 수 있습니다.
      </p>
      <dl className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200">
        {facts.map((f) => (
          <div key={f.key} className="flex gap-3 bg-white px-3 py-2 text-sm">
            <dt className="w-28 flex-shrink-0 text-gray-500">{f.label}</dt>
            <dd className="flex-1 font-medium text-gray-800">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ─── 2. 핵심 법률 쟁점 ─────────────────────────────────────── */

export function LegalIssues({ basis }: { basis?: string[] }) {
  if (!basis || basis.length === 0) return null;
  return (
    <div className="report-block">
      <p className="mb-2 text-sm font-bold text-gray-900">⚖️ 핵심 법률 쟁점</p>
      <p className="mb-3 text-xs text-gray-500">
        상담에서 다뤄질 가능성이 큰 조항입니다. 적용 여부는 사실관계에 따라 달라집니다.
      </p>
      <ul className="space-y-1.5">
        {basis.map((b, i) => (
          <li key={i} className="flex gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700">
            <span className="text-gray-400">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── 3. 자료 준비 상태 (준비됨 / 추가 준비 / 확인 필요) ─────── */

export interface EvidenceBuckets {
  ready: string[];
  todo: string[];
  unsure: string[];
}

const EVIDENCE_WORD =
  /서류|계약|명세|기록|내역|사진|영상|진단|증명|캡처|녹음|문자|메시지|카톡|통장|영수증|등기|확인서|진술|자료/;

/**
 * 체크리스트를 3분류한다.
 *  ready  : status==='has' 또는 사용자가 보유 자료로 고른 값과 라벨이 겹치는 항목
 *  todo   : 보유로 볼 근거가 없는 항목
 *  unsure : 사용자가 언급했지만 체크리스트 항목과 매칭되지 않은 자료성 입력값
 *           → "아직 확인이 필요한 항목" 으로만 표시하고 보유 여부를 단정하지 않는다.
 */
export function splitEvidence(
  docs: { label: string; status?: string }[],
  answers: Record<string, string> | undefined
): EvidenceBuckets {
  const mentioned = new Set<string>();
  for (const v of Object.values(answers ?? {})) {
    if (typeof v !== 'string') continue;
    for (const part of v.split(',')) {
      const t = part.trim();
      if (t.length >= 2 && !isBlank(t)) mentioned.add(t);
    }
  }

  const ready: string[] = [];
  const todo: string[] = [];
  const matched = new Set<string>();

  for (const d of docs) {
    let has = d.status === 'has';
    if (!has) {
      // Array.from: tsconfig target 이 es5 라 Set 직접 순회가 막혀 있다 (TS2802)
      for (const m of Array.from(mentioned)) {
        if (d.label.includes(m) || m.includes(d.label)) {
          has = true;
          matched.add(m);
          break;
        }
      }
    }
    (has ? ready : todo).push(d.label);
  }

  const unsure = Array.from(mentioned).filter((m) => !matched.has(m) && EVIDENCE_WORD.test(m));

  return { ready, todo, unsure };
}

export function EvidenceSplit({ buckets }: { buckets: EvidenceBuckets }) {
  const { ready, todo, unsure } = buckets;
  if (ready.length + todo.length + unsure.length === 0) return null;
  return (
    <div className="report-block grid gap-3 sm:grid-cols-2">
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3">
        <p className="mb-2 text-sm font-bold text-emerald-800">✅ 이미 준비된 자료</p>
        {ready.length ? (
          <ul className="space-y-1 text-sm text-emerald-900">
            {ready.map((l, i) => (
              <li key={i}>· {l}</li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-emerald-700">아직 확인된 항목이 없습니다.</p>
        )}
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3">
        <p className="mb-2 text-sm font-bold text-amber-800">📌 추가로 준비하면 좋은 자료</p>
        {todo.length ? (
          <ul className="space-y-1 text-sm text-amber-900">
            {todo.map((l, i) => (
              <li key={i}>· {l}</li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-amber-700">현재 목록에서 빠진 자료는 없습니다.</p>
        )}
        {unsure.length > 0 && (
          <div className="mt-3 border-t border-amber-200 pt-2">
            <p className="mb-1 text-xs font-semibold text-amber-800">아직 확인이 필요한 항목</p>
            <ul className="space-y-0.5 text-xs text-amber-900">
              {unsure.map((l, i) => (
                <li key={i}>· {l} — 원본과 날짜가 남아 있는지 확인해두세요</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── 4. 변호사에게 물어볼 질문 ─────────────────────────────── */

/**
 * 도메인별 질문. 우선 적용 7개 도메인은 개별 작성, 나머지는 COMMON 폴백.
 * 우리가 답을 주는 섹션이 아니라 **사용자가 변호사에게 던지는 문장**이므로
 * 톤 리스크가 가장 낮다. 판단·확정 표현을 쓰지 않는다.
 */
export const LAWYER_QUESTIONS: Record<string, string[]> = {
  wage: [
    '이 자료만으로 임금체불 진정이 가능한가요?',
    '노동청 진정과 민사청구 중 무엇을 먼저 해야 하나요?',
    '회사가 일부만 지급한 경우 어떻게 대응해야 하나요?',
    '소멸시효 3년이 지난 기간은 회수 방법이 없나요?',
  ],
  divorce: [
    '협의이혼으로 가능한지, 재판이혼이 필요한지 봐야 하나요?',
    '재산분할에서 먼저 정리할 자료는 무엇인가요?',
    '양육비·친권·면접교섭을 같이 정리해야 하나요?',
    '상대방 명의 재산이 분할 대상에 들어갈 수 있나요?',
  ],
  fraud: [
    '형사 고소와 민사 회수를 병행해야 하나요?',
    '현재 증거로 기망행위를 입증할 수 있나요?',
    '합의가 가능한 경우 어떤 문구를 조심해야 하나요?',
    '상대방 재산을 모를 때 회수 실효성은 어떻게 판단하나요?',
  ],
  'traffic-accident': [
    '합의 전 추가 치료나 후유증 가능성을 더 확인해야 하나요?',
    '보험사 제시 금액이 적정한지 어떻게 판단하나요?',
    '과실비율을 다투는 것이 실익이 있나요?',
    '이미 합의했는데 증상이 남으면 추가 청구가 되나요?',
  ],
  'jeonse-fraud': [
    '임차권등기, 지급명령, 소송 중 어떤 순서가 맞나요?',
    '전세사기 피해자 지원제도 신청 대상인지 확인해야 하나요?',
    '지금 이사하면 대항력이 사라지나요?',
    '경매로 넘어갔을 때 배당 순위는 어떻게 되나요?',
  ],
  unemployment: [
    '제 이직 사유가 수급 자격에 해당하는지 봐야 하나요?',
    '이직확인서 사유가 실제와 다르면 어떻게 정정하나요?',
    '피보험단위기간이 부족해 보이는데 합산 방법이 있나요?',
    '수급 중 아르바이트 신고 기준은 어떻게 되나요?',
  ],
  inheritance: [
    '상속포기와 한정승인 중 어느 쪽을 검토해야 하나요?',
    '3개월 기간이 지났는데 아직 방법이 있나요?',
    '피상속인 채무 규모를 어떻게 확인하나요?',
    '유류분 청구가 가능한 상황인지 봐야 하나요?',
  ],
  COMMON: [
    '제 상황에서 지금 가장 먼저 해야 할 일은 무엇인가요?',
    '지금 가진 자료로 부족한 부분은 무엇인가요?',
    '놓치면 안 되는 기한이 있나요?',
    '예상되는 절차와 소요 기간, 비용은 어느 정도인가요?',
  ],
};

export function getLawyerQuestions(domainKey?: string): string[] {
  const own = domainKey ? LAWYER_QUESTIONS[domainKey] : undefined;
  // 도메인 전용 질문 + 공통 질문 중 비용·기간 1개를 붙여 상담 실무에 바로 쓰이게 한다.
  if (own) return [...own, LAWYER_QUESTIONS.COMMON[3]];
  return LAWYER_QUESTIONS.COMMON;
}

export function LawyerQuestions({ domainKey }: { domainKey?: string }) {
  const questions = getLawyerQuestions(domainKey);
  const copy = () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(questions.map((q, i) => `${i + 1}. ${q}`).join('\n')).then(
      () => alert('질문이 복사되었습니다.'),
      () => alert('복사에 실패했습니다.')
    );
  };

  return (
    <div className="report-block">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-sm font-bold text-gray-900">❓ 변호사에게 물어볼 질문</p>
        <button
          onClick={copy}
          className="report-hide rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50"
        >
          질문 복사
        </button>
      </div>
      <ol className="space-y-1.5">
        {questions.map((q, i) => (
          <li key={i} className="flex gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700">
            <span className="font-semibold text-gray-400">{i + 1}.</span>
            <span>{q}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ─── 5. 리포트 저장 버튼 (상단·하단 공용) ──────────────────── */

/**
 * 브라우저 인쇄 기반. 서버사이드 PDF 생성을 하지 않는다.
 * onPrint 를 주면 그 핸들러를 쓴다(ChatResultCard 는 afterprint → diagnosis_save 계측에 필요).
 * 없으면 window.print() 만 호출하고 **어떤 이벤트도 발사하지 않는다.**
 */
export function SaveReportButton({
  onPrint,
  variant = 'primary',
}: {
  onPrint?: () => void;
  variant?: 'primary' | 'subtle';
}) {
  const handle = () => {
    if (onPrint) onPrint();
    else if (typeof window !== 'undefined') window.print();
  };
  const cls =
    variant === 'primary'
      ? 'w-full rounded-lg bg-navy-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800'
      : 'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50';
  return (
    <button onClick={handle} className={`report-hide ${cls}`}>
      상담 준비 리포트 저장하기
    </button>
  );
}

/**
 * 인쇄물 맨 위에만 나타나는 머리글 (화면에서는 globals.css 가 숨긴다).
 * 종이만 보고도 무슨 문서인지 알 수 있게 한다.
 */
export function ReportPrintTitle({ domainName }: { domainName?: string }) {
  return (
    <div className="report-print-title report-block mb-3 border-b border-gray-300 pb-2">
      <p className="text-base font-bold text-gray-900">
        상담 준비 리포트{domainName ? ` — ${domainName}` : ''}
      </p>
      <p className="mt-0.5 text-xs text-gray-600">로앤가이드 · lawnguide.co.kr</p>
    </div>
  );
}

/** 결과 상단에 붙는 안내 + 저장 버튼 */
export function ReportSaveBanner({ onPrint }: { onPrint?: () => void }) {
  return (
    <div className="report-hide rounded-xl border border-primary-200 bg-primary-50/60 p-3">
      <p className="text-sm font-semibold text-navy-800">📄 이 화면을 저장해서 상담에 가져가세요</p>
      <p className="mt-1 text-xs leading-relaxed text-gray-600">
        사실관계 · 쟁점 · 준비서류 · 물어볼 질문이 한 장에 정리됩니다.
      </p>
      <div className="mt-2.5">
        <SaveReportButton onPrint={onPrint} />
      </div>
    </div>
  );
}

/** 인쇄물 하단 면책 문구 — 화면에도 보이고 인쇄에도 남는다. */
export function ReportDisclaimer() {
  return (
    <div className="report-block rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5">
      <p className="text-xs leading-relaxed text-amber-900">
        이 리포트는 상담 전 상황 정리를 돕는 정보 제공용이며, <strong>법률 자문을 대체하지 않습니다</strong>.
        법적 효력을 갖는 유권해석이 아니고, 실제 판단은 사실관계와 증거에 따라 달라집니다.
        정확한 판단은 전문가 상담을 받으시기 바랍니다.
      </p>
    </div>
  );
}
