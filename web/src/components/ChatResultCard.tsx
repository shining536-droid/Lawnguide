'use client';

import { useState } from 'react';
import type { ResultEntry, DocumentItem } from '@/lib/domains-client';

interface ChatResultCardProps {
  result: ResultEntry;
  answers: Record<string, string>;
  domainName: string;
  onRestart?: () => void;
}

const TABS = [
  { id: 'actions', label: '지금 할 일' },
  { id: 'documents', label: '준비서류' },
  { id: 'caution', label: '주의할 점' },
  { id: 'legal', label: '관련 법률' },
  { id: 'consult', label: '상담 연결' },
] as const;

type TabId = (typeof TABS)[number]['id'];

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

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/* ─── Tab: 지금 할 일 ─── */
function ActionsTab({ result }: { result: ResultEntry }) {
  return (
    <div className="space-y-6">
      {/* Status summary + risk */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <RiskBadge level={result.risk_level} />
        <p className="text-gray-700 text-sm leading-relaxed">{result.status_summary}</p>
      </div>

      {/* First action */}
      {result.first_action && (
        <div className="bg-primary-50 rounded-xl p-4">
          <h4 className="font-semibold text-primary-800 mb-2">{result.first_action.title}</h4>
          <ul className="space-y-1.5">
            {result.first_action.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-primary-700">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key checkpoints */}
      {result.key_checkpoints && result.key_checkpoints.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">핵심 체크포인트</h4>
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

      {/* Timeline */}
      {result.timeline_steps && result.timeline_steps.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">진행 타임라인</h4>
          <div className="relative pl-6">
            <div className="absolute left-2 top-1 bottom-1 w-0.5 bg-gray-200" />
            {result.timeline_steps.map((step, i) => (
              <div key={i} className="relative pb-4 last:pb-0">
                <div
                  className={`absolute -left-4 top-1 w-3 h-3 rounded-full border-2 ${
                    step.active
                      ? 'bg-primary-500 border-primary-500'
                      : 'bg-white border-gray-300'
                  }`}
                />
                <p className={`font-medium text-sm ${step.active ? 'text-primary-700' : 'text-gray-700'}`}>
                  {step.label}
                </p>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Today actions */}
      {result.actions.today && result.actions.today.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            오늘 할 일
          </h4>
          <ul className="space-y-1.5">
            {result.actions.today.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-red-400 mt-0.5">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* This week actions */}
      {result.actions.this_week && result.actions.this_week.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            이번 주 할 일
          </h4>
          <ul className="space-y-1.5">
            {result.actions.this_week.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-400 mt-0.5">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ─── Tab: 준비서류 ─── */
function DocumentsTab({ result }: { result: ResultEntry }) {
  const isDocItem = (d: string | DocumentItem): d is DocumentItem => typeof d !== 'string';

  return (
    <div className="space-y-6">
      {/* Priority checklist */}
      {result.checklist_priority && result.checklist_priority.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">필수 서류</h4>
          <div className="space-y-2">
            {result.checklist_priority.map((doc, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  {doc.status === 'has' ? <CheckIcon /> : <XIcon />}
                  <span className="text-sm text-gray-800">{doc.label}</span>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    doc.status === 'has'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {doc.status === 'has' ? '보유' : '필요'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional checklist */}
      {result.checklist_optional && result.checklist_optional.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">선택 서류</h4>
          <div className="space-y-2">
            {result.checklist_optional.map((doc, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  {doc.status === 'has' ? <CheckIcon /> : <XIcon />}
                  <span className="text-sm text-gray-700">{doc.label}</span>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    doc.status === 'has'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {doc.status === 'has' ? '보유' : '필요'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* General documents list */}
      {result.documents && result.documents.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">관련 서류 목록</h4>
          <ul className="space-y-1.5">
            {result.documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>{isDocItem(doc) ? doc.label : doc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ─── Tab: 주의할 점 ─── */
function CautionTab({ result }: { result: ResultEntry }) {
  const { caution, do_not, important } = result.actions;
  const hasContent = (caution?.length ?? 0) + (do_not?.length ?? 0) + (important?.length ?? 0) > 0;

  if (!hasContent) {
    return <p className="text-gray-500 text-sm">등록된 주의사항이 없습니다.</p>;
  }

  return (
    <div className="space-y-4">
      {caution && caution.length > 0 && (
        <div className="space-y-2">
          {caution.map((item, i) => (
            <div key={i} className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-3 flex items-start gap-2">
              <WarningIcon />
              <p className="text-sm text-amber-800">{item}</p>
            </div>
          ))}
        </div>
      )}

      {do_not && do_not.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold text-red-700 text-sm">절대 하지 마세요</h4>
          {do_not.map((item, i) => (
            <div key={i} className="border-l-4 border-red-400 bg-red-50 rounded-r-lg p-3 flex items-start gap-2">
              <XIcon />
              <p className="text-sm text-red-800">{item}</p>
            </div>
          ))}
        </div>
      )}

      {important && important.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold text-blue-700 text-sm">꼭 알아두세요</h4>
          {important.map((item, i) => (
            <div key={i} className="border-l-4 border-blue-400 bg-blue-50 rounded-r-lg p-3">
              <p className="text-sm text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Tab: 관련 법률 ─── */
function LegalTab({ result }: { result: ResultEntry }) {
  return (
    <div className="space-y-6">
      {result.legal_basis && result.legal_basis.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">적용 법률</h4>
          <ul className="space-y-2">
            {result.legal_basis.map((item, i) => (
              <li key={i} className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.related_systems && result.related_systems.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">관련 제도</h4>
          <div className="space-y-2">
            {result.related_systems.map((sys, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-gray-800 text-sm">{sys.name}</p>
                <p className="text-gray-600 text-sm mt-0.5">{sys.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Tab: 상담 연결 ─── */
function ConsultTab({ result }: { result: ResultEntry }) {
  return (
    <div className="space-y-6">
      {/* Public connections */}
      {result.connections.public && result.connections.public.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">무료 상담 기관</h4>
          <div className="space-y-2">
            {result.connections.public.map((conn, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-gray-800 text-sm">{conn.name}</p>
                {conn.phone && (
                  <a href={`tel:${conn.phone}`} className="text-primary-600 text-sm hover:underline">
                    {conn.phone}
                  </a>
                )}
                {conn.url && (
                  <a
                    href={conn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary-600 text-sm hover:underline truncate"
                  >
                    {conn.url}
                  </a>
                )}
                {conn.note && <p className="text-gray-500 text-xs mt-1">{conn.note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Professional connections */}
      {result.connections.professional && result.connections.professional.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">전문가 상담</h4>
          <div className="space-y-2">
            {result.connections.professional.map((prof, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-gray-800 text-sm">{prof.type}</p>
                {prof.description && <p className="text-gray-600 text-sm mt-0.5">{prof.description}</p>}
                {prof.note && <p className="text-gray-500 text-xs mt-1">{prof.note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-amber-50 rounded-xl p-5 text-center">
        <p className="text-gray-800 font-semibold mb-3">전문 변호사 상담이 필요하다면</p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl w-full transition-colors">
          전문가 매칭 요청하기
        </button>
      </div>

      {/* Safety warning */}
      {result.safety_warning && (
        <div className="border-l-4 border-red-400 bg-red-50 rounded-r-lg p-3">
          <p className="text-sm text-red-800 font-medium">{result.safety_warning}</p>
        </div>
      )}

      {/* Disclaimer */}
      {result.disclaimer && (
        <p className="text-xs text-gray-400 leading-relaxed">{result.disclaimer}</p>
      )}
    </div>
  );
}

/* ─── Main Component ─── */
export default function ChatResultCard({ result, answers, domainName, onRestart }: ChatResultCardProps) {
  const [activeTab, setActiveTab] = useState<TabId>('actions');

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다.');
    } catch {
      alert('링크 복사에 실패했습니다.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-gray-900">{domainName} 진단 결과</h3>
          <RiskBadge level={result.risk_level} />
        </div>
        <p className="text-sm text-gray-500">{result.type_name}</p>
      </div>

      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50 scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 px-4 py-3 text-sm whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-primary-600 text-primary-600 font-semibold bg-white'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-5">
        {activeTab === 'actions' && <ActionsTab result={result} />}
        {activeTab === 'documents' && <DocumentsTab result={result} />}
        {activeTab === 'caution' && <CautionTab result={result} />}
        {activeTab === 'legal' && <LegalTab result={result} />}
        {activeTab === 'consult' && <ConsultTab result={result} />}
      </div>

      {/* Share / action buttons */}
      <div className="border-t border-gray-100 px-5 py-4 flex flex-wrap gap-2">
        <button
          onClick={handleCopyLink}
          className="flex-1 min-w-[100px] text-sm text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 py-2.5 px-4 rounded-xl transition-colors font-medium"
        >
          링크 복사
        </button>
        <button
          onClick={handlePrint}
          className="flex-1 min-w-[100px] text-sm text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 py-2.5 px-4 rounded-xl transition-colors font-medium"
        >
          PDF 저장
        </button>
        {onRestart && (
          <button
            onClick={onRestart}
            className="flex-1 min-w-[100px] text-sm text-primary-600 hover:text-primary-800 bg-primary-50 hover:bg-primary-100 py-2.5 px-4 rounded-xl transition-colors font-medium"
          >
            처음부터 다시
          </button>
        )}
      </div>
    </div>
  );
}
