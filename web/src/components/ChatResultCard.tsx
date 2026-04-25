'use client';

import { useState, useCallback } from 'react';
import type { ResultEntry, DocumentItem } from '@/lib/domains-client';

/**
 * Procedure 데이터 (서버에서 kb/{domain}/*_procedure.json 로드 후 전달).
 *
 * 톤 안전장치 (CRITICAL): 결과화면에서 procedure 데이터를 보여줄 때는
 * 단정형("받을 수 있습니다", "100% 환급") 금지. "검토해볼 수 있습니다",
 * "확인할 수 있습니다", "준비해두는 것이 좋습니다" 같은 가능형으로 표시.
 * 기관 절차는 법원 판결이 아닌 "준비 경로"임을 사용자가 인지하도록.
 */
interface ProcedureFlow {
  id: string;
  name: string;
  applies_to?: string;
  steps: { step: number; title: string; description?: string; deadline?: string }[];
}
interface DomainProcedure {
  domain: string;
  primary_flow: ProcedureFlow | null;
  all_flows: ProcedureFlow[];
  agency_names: string[];
  required_documents: { category: string; items: string[] }[];
  key_deadlines: { label: string; value: string; source?: string }[];
  source_urls: string[];
}

interface ChatResultCardProps {
  result: ResultEntry;
  answers: Record<string, string>;
  domainName: string;
  procedure?: DomainProcedure;
  onRestart?: () => void;
}

function RiskBadge({ level }: { level: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    높음: { bg: 'bg-red-100', text: 'text-red-700', label: '위험도 높음' },
    보통: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '위험도 보통' },
    낮음: { bg: 'bg-green-100', text: 'text-green-700', label: '위험도 낮음' },
  };
  const c = config[level] ?? config['보통'];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}

/* ─── Section divider ─── */
function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 pt-10 pb-4 mt-4 border-t border-gray-200 first:border-t-0 first:pt-0 first:mt-0">
      {icon}
      <h4 className="font-bold text-gray-900">{title}</h4>
    </div>
  );
}

/* ─── Interactive checkbox for documents ─── */
function DocCheckbox({ doc, checked, onToggle }: { doc: DocumentItem; checked: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors text-left"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
            checked
              ? 'bg-green-500 border-green-500'
              : 'bg-white border-gray-300'
          }`}
        >
          {checked && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className={`text-sm ${checked ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{doc.label}</span>
      </div>
      {!checked && (
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
          doc.status === 'has' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {doc.status === 'has' ? '보유' : '필요'}
        </span>
      )}
      {checked && (
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">완료</span>
      )}
    </button>
  );
}

/* ─── Procedure flow section (공식 절차 기준으로 보면) ─── */
function ProcedureFlowSection({ flows, agencies }: { flows: ProcedureFlow[]; agencies: string[] }) {
  // 톤 안전장치: 가능형으로 안내
  const primary = flows[0];
  if (!primary || !primary.steps?.length) return null;
  const agencyText = agencies.length > 0 ? agencies.slice(0, 2).join(' · ') : '공식 기관';

  return (
    <div>
      <SectionHeader
        icon={<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
        title="📋 이렇게 진행됩니다"
      />
      <p className="text-xs text-gray-500 mb-3">
        {agencyText} 안내 절차를 참고하면, 다음 흐름으로 진행됩니다. 사건 사정에 따라 달라질 수 있어요.
      </p>
      <div className="bg-indigo-50 rounded-xl p-4 space-y-3">
        <p className="text-sm font-semibold text-indigo-800">{primary.name}</p>
        <ol className="space-y-2.5">
          {primary.steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                {s.step ?? i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{s.title}</p>
                {s.description && (
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{s.description}</p>
                )}
                {s.deadline && (
                  <p className="text-xs text-indigo-700 mt-1">
                    <span className="font-medium">⏱ </span>{s.deadline}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ─── Procedure 신청·상담 경로 (🏛️) ─── */
function ProcedureAgenciesSection({
  agencies,
  sourceUrls,
}: {
  agencies: string[];
  sourceUrls: string[];
}) {
  if (!agencies || agencies.length === 0) return null;
  return (
    <details className="group">
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between pt-10 pb-4 mt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21V7l9-4 9 4v14m-9-9v9m-4 0h8" /></svg>
            <h4 className="font-bold text-gray-900">🏛️ 신청·상담 경로</h4>
          </div>
          <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </summary>
      <p className="text-xs text-gray-500 mb-3">아래 기관에서 절차 안내·상담을 확인하실 수 있습니다.</p>
      <ul className="space-y-2">
        {agencies.slice(0, 4).map((name, i) => {
          const url = sourceUrls?.[i];
          return (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-blue-500 mt-0.5">▸</span>
              <div className="flex-1 min-w-0">
                <p className="text-gray-800 font-medium">{name}</p>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 hover:underline break-all">
                    {url.replace(/^https?:\/\//, '').split('/')[0]}
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </details>
  );
}

/* ─── (DEPRECATED) Procedure required documents (📎) — 기존 준비서류 섹션과 중복이라 미사용 ─── */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProcedureDocsSection({ docs }: { docs: { category: string; items: string[] }[] }) {
  if (!docs || docs.length === 0) return null;
  // "필수" 카테고리 우선, 그 외는 "권장"
  const isPriority = (cat: string) =>
    /본인|신청|필수|기본|진정|구제신청|이행청구|결정신청|급여 ?신청|반환소송/.test(cat);
  const priority = docs.filter((d) => isPriority(d.category));
  const optional = docs.filter((d) => !isPriority(d.category));

  return (
    <div>
      <SectionHeader
        icon={<svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
        title="📎 지금 챙길 자료"
      />
      <p className="text-xs text-gray-500 mb-3">상담·신청 전 이런 자료를 미리 정리해두면 도움이 됩니다.</p>
      <div className="space-y-3">
        {priority.length > 0 && (
          <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-emerald-700 mb-2">필수 자료</p>
            {/* 톤 안전장치: '필수' 라는 표현이 단정형으로 비치지 않도록 위 안내 문구로 균형 */}
            {priority.map((cat, i) => (
              <div key={i} className={i > 0 ? 'mt-3 pt-3 border-t border-emerald-200' : ''}>
                <p className="text-xs font-medium text-emerald-800 mb-1.5">{cat.category}</p>
                <ul className="space-y-1">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="text-emerald-500 mt-0.5">●</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {optional.length > 0 && (
          <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-600 mb-2">있으면 도움이 되는 자료</p>
            {optional.map((cat, i) => (
              <div key={i} className={i > 0 ? 'mt-3 pt-3 border-t border-gray-200' : ''}>
                <p className="text-xs font-medium text-gray-700 mb-1.5">{cat.category}</p>
                <ul className="space-y-1">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gray-400 mt-0.5">●</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── (DEPRECATED) Procedure key deadlines (⏱) — 단계 안에 자연스럽게 녹임 ─── */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProcedureDeadlinesSection({ deadlines, sourceUrls }: { deadlines: { label: string; value: string; source?: string }[]; sourceUrls: string[] }) {
  if (!deadlines || deadlines.length === 0) return null;
  return (
    <div>
      <SectionHeader
        icon={<svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        title="⏱ 기간·기한"
      />
      <p className="text-xs text-gray-500 mb-3">기관 안내 기준의 일반적인 기한입니다. 본인 사건 기한은 별도 확인하는 것이 좋습니다.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {deadlines.slice(0, 8).map((d, i) => (
          <div key={i} className="border-l-4 border-rose-300 bg-rose-50 rounded-r-lg px-3 py-2">
            <p className="text-xs text-rose-700 font-medium">{d.label}</p>
            <p className="text-sm text-gray-900 font-semibold mt-0.5">{d.value}</p>
          </div>
        ))}
      </div>
      {sourceUrls && sourceUrls.length > 0 && (
        <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
          출처: {sourceUrls.slice(0, 3).map((u, i) => (
            <span key={i}>
              {i > 0 && ' · '}
              <a href={u} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline">
                {u.replace(/^https?:\/\//, '').split('/')[0]}
              </a>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

/* ─── Main Component ─── */
export default function ChatResultCard({ result, answers, domainName, procedure, onRestart }: ChatResultCardProps) {
  // Connect diagnosis answers to document checklist
  // Parse user's existing docs/evidence from answers
  const userExistingDocs = new Set<string>();
  for (const [, val] of Object.entries(answers)) {
    if (typeof val === 'string' && val.includes(',')) {
      val.split(',').forEach((v) => userExistingDocs.add(v.trim()));
    }
  }

  const allDocs = [
    ...(result.checklist_priority ?? []),
    ...(result.checklist_optional ?? []),
  ];

  // Auto-check docs that match user's selected evidence/documents
  const initialChecked: Record<number, boolean> = {};
  allDocs.forEach((doc, i) => {
    if (doc.status === 'has') {
      initialChecked[i] = true;
    } else {
      // Check if any user answer mentions this doc
      for (const keyword of Array.from(userExistingDocs)) {
        if (keyword && doc.label.includes(keyword)) {
          initialChecked[i] = true;
          break;
        }
      }
    }
  });

  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>(initialChecked);

  const toggleDoc = useCallback((index: number) => {
    setCheckedDocs((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다.');
    } catch {
      alert('링크 복사에 실패했습니다.');
    }
  };

  const { caution, do_not, important } = result.actions;
  const hasCaution = (caution?.length ?? 0) + (do_not?.length ?? 0) + (important?.length ?? 0) > 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* ═══ Header ═══ */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{domainName} 진단 결과</h3>
          <RiskBadge level={result.risk_level} />
        </div>
        <p className="text-sm text-gray-600">{result.type_name}</p>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{result.status_summary}</p>
      </div>

      <div className="px-5 pb-5 space-y-6">
        {/* ═══ 1. 진행 타임라인 ═══ */}
        {result.timeline_steps && result.timeline_steps.length > 0 && (
          <div>
            <SectionHeader
              icon={<svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="진행 타임라인"
            />
            <div className="relative pl-8">
              <div className="absolute left-3 top-1 bottom-1 w-0.5 bg-gray-200" />
              {result.timeline_steps.map((step, i) => (
                <div key={i} className="relative pb-5 last:pb-0">
                  <div
                    className={`absolute -left-5 top-0.5 w-4 h-4 rounded-full border-2 ${
                      step.active
                        ? 'bg-primary-500 border-primary-500 ring-4 ring-primary-100'
                        : 'bg-white border-gray-300'
                    }`}
                  />
                  <div className="flex items-center gap-2">
                    <p className={`font-semibold text-sm ${step.active ? 'text-primary-700' : 'text-gray-700'}`}>
                      {step.label}
                    </p>
                    {step.active && (
                      <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                        ← 지금 여기
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-0.5">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ 2. 지금 할 일 ═══ */}
        <div>
          <SectionHeader
            icon={<svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>}
            title="지금 할 일"
          />

          {/* First action */}
          {result.first_action && (
            <div className="bg-primary-50 rounded-xl p-4 mb-4">
              <h5 className="font-semibold text-primary-800 mb-2">{result.first_action.title}</h5>
              <ul className="space-y-1.5">
                {result.first_action.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-primary-700">
                    <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 지금 할 일 단일 박스 — today + this_week 통합 우선순위 순 (2026-04-26 통합 결정) */}
          {((result.actions.today?.length ?? 0) + (result.actions.this_week?.length ?? 0)) > 0 && (
            <div>
              <p className="text-sm font-semibold text-red-600 mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                지금 할 일 (우선순위 순)
              </p>
              <ol className="space-y-1.5 pl-1">
                {[...(result.actions.today ?? []), ...(result.actions.this_week ?? [])].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-700 text-[11px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Key checkpoints */}
          {result.key_checkpoints && result.key_checkpoints.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">핵심 체크포인트</p>
              <div className="grid gap-2">
                {result.key_checkpoints.map((cp, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium text-gray-800 text-sm">{cp.title}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{cp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ═══ 3. 준비서류 ═══ */}
        {allDocs.length > 0 && (
          <div>
            <SectionHeader
              icon={<svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>}
              title="준비서류"
            />
            <p className="text-xs text-gray-500 mb-3">체크하면서 준비 상황을 확인하세요</p>
            <div className="space-y-2">
              {allDocs.map((doc, i) => (
                <DocCheckbox
                  key={i}
                  doc={doc}
                  checked={!!checkedDocs[i]}
                  onToggle={() => toggleDoc(i)}
                />
              ))}
            </div>
            {/* Progress indicator */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${(Object.values(checkedDocs).filter(Boolean).length / allDocs.length) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-500">
                {Object.values(checkedDocs).filter(Boolean).length}/{allDocs.length}
              </span>
            </div>
          </div>
        )}

        {/* ═══ 3.5. 이렇게 진행됩니다 (procedure 데이터 — 기한은 단계 안에 통합) ═══ */}
        {procedure && procedure.all_flows && procedure.all_flows.length > 0 && (
          <ProcedureFlowSection flows={procedure.all_flows} agencies={procedure.agency_names} />
        )}

        {/* ═══ 3.6. 신청·상담 경로 (procedure 기관 정보, 기본 닫힘) ═══ */}
        {procedure && procedure.agency_names && procedure.agency_names.length > 0 && (
          <ProcedureAgenciesSection agencies={procedure.agency_names} sourceUrls={procedure.source_urls} />
        )}

        {/* ═══ 4. 주의할 점 ═══ */}
        {hasCaution && (
          <div>
            <SectionHeader
              icon={<svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>}
              title="주의할 점"
            />
            <div className="space-y-2">
              {do_not && do_not.length > 0 && do_not.map((item, i) => (
                <div key={`dn-${i}`} className="border-l-4 border-red-400 bg-red-50 rounded-r-lg p-3 flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm text-red-800">{item}</p>
                </div>
              ))}
              {caution && caution.length > 0 && caution.map((item, i) => (
                <div key={`c-${i}`} className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-3 flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-amber-800">{item}</p>
                </div>
              ))}
              {important && important.length > 0 && important.map((item, i) => (
                <div key={`imp-${i}`} className="border-l-4 border-blue-400 bg-blue-50 rounded-r-lg p-3">
                  <p className="text-sm text-blue-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ 5. 무료 상담 기관 ═══ */}
        {result.connections.public && result.connections.public.length > 0 && (
          <div>
            <SectionHeader
              icon={<svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>}
              title="무료 상담 기관"
            />
            <div className="space-y-2">
              {result.connections.public.map((conn, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{conn.name}</p>
                    {conn.note && <p className="text-gray-500 text-xs mt-0.5">{conn.note}</p>}
                  </div>
                  {conn.phone && (
                    <a
                      href={`tel:${conn.phone}`}
                      className="flex-shrink-0 bg-primary-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      {conn.phone}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ 6. 변호사 연결 CTA ═══ */}
        <div className="pt-6 border-t border-gray-100">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-5 text-center">
            <p className="text-gray-600 text-sm mb-2">변호사 만나기 전, AI가 빠르게 대응 전략을 세워드립니다.</p>
            <p className="text-gray-800 font-bold mb-1">전문 변호사 상담이 필요하다면</p>
            <p className="text-gray-600 text-sm mb-4">준비된 상태로 상담받으면 결과가 달라집니다</p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl w-full transition-colors text-base shadow-md hover:shadow-lg">
              전문가 매칭 요청하기
            </button>
          </div>
        </div>

        {/* Safety warning */}
        {result.safety_warning && (
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-lg p-3 mt-4">
            <p className="text-sm text-red-800 font-medium">{result.safety_warning}</p>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 leading-relaxed pt-4">
          {result.disclaimer || '이 정보는 법적 효력을 갖는 유권해석이 아닙니다. 정확한 판단은 전문가 상담을 받으시기 바랍니다.'}
        </p>
      </div>

      {/* ═══ Bottom actions ═══ */}
      <div className="border-t border-gray-100 px-5 py-4 flex flex-wrap gap-2">
        <button
          onClick={handleCopyLink}
          className="flex-1 min-w-[80px] text-sm text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 py-2.5 px-4 rounded-xl transition-colors font-medium"
        >
          링크 복사
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 min-w-[80px] text-sm text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 py-2.5 px-4 rounded-xl transition-colors font-medium"
        >
          PDF 저장
        </button>
        {onRestart && (
          <button
            onClick={onRestart}
            className="flex-1 min-w-[80px] text-sm text-primary-600 hover:text-primary-800 bg-primary-50 hover:bg-primary-100 py-2.5 px-4 rounded-xl transition-colors font-medium"
          >
            처음부터 다시
          </button>
        )}
      </div>
    </div>
  );
}
