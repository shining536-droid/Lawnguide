/**
 * SEO 스포크 페이지에 자동 삽입되는 5개 procedure 섹션:
 *  📌 공식 절차 한눈에 보기
 *  ⏰ 처리기간/신청기한
 *  📋 준비서류 체크리스트
 *  ⚠️ 자주 하는 실수
 *  🏛️ 무료기관/신청 경로
 *
 * 톤 안전장치 (CRITICAL): 단정형 금지. "검토해볼 수 있습니다",
 * "정리해두는 것이 좋습니다" 등 가능형·준비 안내형으로만 표시.
 * 기관 절차는 법률 판단이 아닌 "준비 경로"임을 사용자가 인지하도록.
 * CLAUDE.md "결과화면 첫 문장·요약 톤" 섹션 참조.
 */
import type { DomainProcedure } from '@/data/procedure-data-generated';

interface Props {
  procedure: DomainProcedure;
}

function isPriorityCategory(cat: string): boolean {
  return /본인|신청|필수|기본|진정|구제신청|이행청구|결정신청|급여\s?신청|반환소송|구제|구비/.test(cat);
}

function hostFromUrl(u: string): string {
  try {
    const parsed = new URL(u);
    return parsed.host.replace(/^www\./, '');
  } catch {
    return u.replace(/^https?:\/\//, '').split('/')[0];
  }
}

export default function SpokeProcedureBlock({ procedure }: Props) {
  const flow = procedure.primary_flow;
  const agencyText = procedure.agency_names.length
    ? procedure.agency_names.slice(0, 2).join(' · ')
    : '공식 기관';

  // 단계 3~6개로 요약 (steps 너무 많으면 앞 6개만)
  const stepsCapped = flow ? flow.steps.slice(0, 6) : [];

  // 준비서류 분류
  const priorityDocs = procedure.required_documents.filter((d) => isPriorityCategory(d.category));
  const optionalDocs = procedure.required_documents.filter((d) => !isPriorityCategory(d.category));

  // 자주 하는 실수 3~5개만
  const mistakes = (procedure.common_mistakes || []).slice(0, 5);

  // 기한 8개까지
  const deadlines = (procedure.key_deadlines || []).slice(0, 8);

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-6 shadow-sm space-y-6">
      <div>
        <h2 className="text-lg font-bold text-indigo-900 mb-1">📌 공식 절차 한눈에 보기</h2>
        <p className="text-xs text-indigo-700">
          {agencyText} 안내 절차를 참고하면, 다음 흐름을 검토해볼 수 있습니다.
        </p>
      </div>

      {/* 1. 공식 절차 단계 */}
      {stepsCapped.length > 0 && (
        <div className="bg-white rounded-lg p-5 border border-indigo-100">
          {flow && <p className="text-sm font-semibold text-indigo-800 mb-3">{flow.name}</p>}
          <ol className="space-y-2.5">
            {stepsCapped.map((s, i) => (
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
                      <span className="font-medium">⏱ </span>
                      {s.deadline}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* 2. 처리기간/신청기한 */}
      {deadlines.length > 0 && (
        <div className="bg-white rounded-lg p-5 border border-indigo-100">
          <h3 className="text-base font-bold text-rose-700 mb-1">⏰ 처리기간 · 신청기한</h3>
          <p className="text-xs text-gray-500 mb-3">
            기관 안내 기준의 일반적인 기한입니다. 본인 사건 기한은 별도 확인하는 것이 좋습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {deadlines.map((d, i) => (
              <div key={i} className="border-l-4 border-rose-300 bg-rose-50 rounded-r px-3 py-2">
                <p className="text-xs text-rose-700 font-medium">{d.label}</p>
                <p className="text-sm text-gray-900 font-semibold mt-0.5">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. 준비서류 체크리스트 */}
      {(priorityDocs.length > 0 || optionalDocs.length > 0) && (
        <div className="bg-white rounded-lg p-5 border border-indigo-100">
          <h3 className="text-base font-bold text-emerald-700 mb-1">📋 준비서류 체크리스트</h3>
          <p className="text-xs text-gray-500 mb-3">
            상담·신청 전 이런 자료를 미리 정리해두면 도움이 됩니다.
          </p>
          <div className="space-y-3">
            {priorityDocs.length > 0 && (
              <div className="border border-emerald-200 bg-emerald-50 rounded-md p-3">
                <p className="text-xs font-semibold text-emerald-700 mb-2">필수 자료</p>
                {priorityDocs.map((cat, i) => (
                  <div key={i} className={i > 0 ? 'mt-2.5 pt-2.5 border-t border-emerald-200' : ''}>
                    <p className="text-xs font-medium text-emerald-800 mb-1">{cat.category}</p>
                    <ul className="space-y-0.5">
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
            {optionalDocs.length > 0 && (
              <div className="border border-gray-200 bg-gray-50 rounded-md p-3">
                <p className="text-xs font-semibold text-gray-600 mb-2">있으면 도움이 되는 자료</p>
                {optionalDocs.map((cat, i) => (
                  <div key={i} className={i > 0 ? 'mt-2.5 pt-2.5 border-t border-gray-200' : ''}>
                    <p className="text-xs font-medium text-gray-700 mb-1">{cat.category}</p>
                    <ul className="space-y-0.5">
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
      )}

      {/* 4. 자주 하는 실수 */}
      {mistakes.length > 0 && (
        <div className="bg-white rounded-lg p-5 border border-indigo-100">
          <h3 className="text-base font-bold text-amber-700 mb-1">⚠️ 자주 하는 실수</h3>
          <p className="text-xs text-gray-500 mb-3">미리 알아두면 피할 수 있는 실수들입니다.</p>
          <ul className="space-y-1.5">
            {mistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                <span className="text-amber-500 mt-0.5">●</span>
                <span className="leading-relaxed">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 5. 무료기관 / 신청 경로 */}
      {(procedure.agency_names.length > 0 || procedure.source_urls.length > 0) && (
        <div className="bg-white rounded-lg p-5 border border-indigo-100">
          <h3 className="text-base font-bold text-blue-700 mb-1">🏛️ 무료기관 · 신청 경로</h3>
          <p className="text-xs text-gray-500 mb-3">
            아래 기관에서 절차 안내·상담을 확인하실 수 있습니다.
          </p>
          <ul className="space-y-2">
            {procedure.agency_names.slice(0, 4).map((name, i) => {
              // 같은 인덱스의 source_url 시도
              const url = procedure.source_urls[i];
              return (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-blue-500 mt-0.5">▸</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium">{name}</p>
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 hover:underline break-all"
                      >
                        {hostFromUrl(url)}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          {procedure.contacts && Object.keys(procedure.contacts).length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-600 mb-2">상담 전화</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(procedure.contacts)
                  .slice(0, 4)
                  .map(([label, phone]) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full"
                    >
                      <span className="text-gray-500">{label}</span>
                      <span className="font-semibold">{phone}</span>
                    </span>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}

      <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
        본 안내는 기관 공개 절차를 정리한 것으로 법률 판단이 아닙니다. 사건마다 결과가 달라질 수 있어
        구체적 사정은 변호사·전문기관 상담을 통해 검토해보시기 바랍니다.
      </p>
    </section>
  );
}
