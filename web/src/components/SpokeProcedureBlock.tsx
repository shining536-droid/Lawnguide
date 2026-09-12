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

/**
 * 기관명 → 공식 호스트 조각.
 *
 * 과거에는 agency_names[i] 에 source_urls[i] 를 인덱스로 짝지었는데, 두 배열은 길이도 순서도
 * 무관해서 라벨과 전혀 다른 기관으로 연결됐다(예: jeonse 의 "대한법률구조공단" → khug.or.kr).
 * 이제 라벨에 이름이 적힌 기관만 대상으로 삼고, 그 도메인의 source_urls 안에서만 링크를 고른다.
 * 여기 없는 호스트를 새로 만들지 않으며, 후보가 없으면 링크를 붙이지 않는다.
 */
const AGENCY_HOSTS: ReadonlyArray<readonly [RegExp, readonly string[]]> = [
  [/HUG|주택도시보증/, ['khug.or.kr']],
  [/전세사기피해지원센터/, ['jeonse.kgeop.go.kr']],
  [/주택임대차분쟁조정/, ['hldcc.or.kr', 'adrhome.reb.or.kr']],
  [/상가건물임대차분쟁조정/, ['cbldcc.or.kr']],
  [/법률구조공단|KLAC/, ['klac.or.kr']],
  [/양육비이행관리원/, ['childsupport.or.kr']],
  [/노동위원회/, ['nlrc.go.kr']],
  [/고용노동부/, ['moel.go.kr']],
  [/근로복지공단/, ['comwel.or.kr']],
  [/경찰청|ECRM|사이버범죄/, ['ecrm.police.go.kr', 'police.go.kr']],
  [/KISA|보호나라/, ['boho.or.kr']],
  [/금융감독원|FSS/, ['fss.or.kr']],
  [/한국소비자원|KCA/, ['kca.go.kr']],
  [/소비자24/, ['consumer.go.kr']],
  [/개인정보분쟁조정|PIDRC|kopico/, ['kopico.go.kr']],
  [/개인정보보호위원회/, ['privacy.go.kr']],
  [/가정법원|전자민원센터|^법원/, ['help.scourt.go.kr', 'scourt.go.kr']],
  [/찾기쉬운 생활법령정보/, ['easylaw.go.kr']],
  [/교육부/, ['moe.go.kr']],
  [/환경분쟁조정|ECC/, ['ecc.me.go.kr']],
  [/층간소음이웃사이센터/, ['noiseinfo.or.kr']],
  [/검찰청/, ['spo.go.kr']],
  [/범죄피해자지원센터/, ['kcvc.kcva.or.kr']],
  [/해바라기센터/, ['women1366.kr']],
  [/디지털성범죄피해자지원센터/, ['d4u.stop.or.kr']],
  [/아동권리보장원/, ['ncrc.or.kr']],
  [/한국마약퇴치운동본부/, ['drugfree.or.kr']],
  [/식품의약품안전처/, ['mfds.go.kr']],
  [/도로교통공단/, ['koroad.or.kr']],
  [/중앙행정심판위원회/, ['simpan.go.kr']],
  [/국세청/, ['nts.go.kr']],
  [/법무부/, ['moj.go.kr']],
  [/통신분쟁조정/, ['tdrc.kr', 'kcc.go.kr']],
  [/콘텐츠분쟁조정/, ['kcdrc.kr']],
];

/** 라벨에 이름이 적힌 기관들의 호스트를 라벨 등장 순서대로 모은다. */
function hostsNamedIn(label: string): string[] {
  const ordered: string[] = [];
  for (const part of label.split(/\s*[+＋]\s*/)) {
    const head = part.split(/\s*[—–-]\s*/)[0].replace(/\([^)]*\)/g, '').trim();
    const hit = AGENCY_HOSTS.find(([re]) => re.test(head));
    if (!hit) continue;
    for (const h of hit[1]) if (!ordered.includes(h)) ordered.push(h);
  }
  return ordered;
}

/**
 * 표시 기관명에 맞는 URL 을 그 도메인의 source_urls 에서 고른다.
 * 라벨 앞쪽(대표) 기관을 우선하고, 어느 기관의 URL 도 없으면 undefined (링크 없음).
 * deep link 는 원형 그대로 유지한다.
 */
function urlForAgency(label: string, urls: readonly string[]): string | undefined {
  for (const host of hostsNamedIn(label)) {
    const hit = urls.find((u) => hostFromUrl(u).includes(host.replace(/^www\./, '')));
    if (hit) return hit;
  }
  return undefined;
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

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-6 shadow-sm space-y-6">
      <div>
        <h2 className="text-lg font-bold text-indigo-900 mb-1">📌 이렇게 진행됩니다</h2>
        <p className="text-xs text-indigo-700">
          {agencyText} 안내 절차를 참고하면, 다음 흐름으로 진행됩니다.
        </p>
      </div>

      {/* 1. 이렇게 진행됩니다 — 기한은 단계 제목 옆에 괄호로 자연스럽게 통합 */}
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
                  <p className="text-sm font-medium text-gray-900">
                    {s.title}
                    {s.deadline && <span className="text-sm font-normal text-indigo-700 ml-1">({s.deadline})</span>}
                  </p>
                  {s.description && (
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{s.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* 3. 준비서류 체크리스트 — 길이 절감 위해 접기 */}
      {(priorityDocs.length > 0 || optionalDocs.length > 0) && (
        <details className="bg-white rounded-lg border border-indigo-100 group" open>
          <summary className="cursor-pointer p-5 list-none flex items-center justify-between hover:bg-gray-50 rounded-lg">
            <div>
              <h3 className="text-base font-bold text-emerald-700">📋 준비서류 체크리스트</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                상담·신청 전 이런 자료를 미리 정리해두면 도움이 됩니다.
              </p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-5 pb-5 space-y-3">
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
        </details>
      )}

      {/* 4. 자주 하는 실수 — 접기 (기본 닫힘) */}
      {mistakes.length > 0 && (
        <details className="bg-white rounded-lg border border-indigo-100 group">
          <summary className="cursor-pointer p-5 list-none flex items-center justify-between hover:bg-gray-50 rounded-lg">
            <div>
              <h3 className="text-base font-bold text-amber-700">⚠️ 자주 하는 실수</h3>
              <p className="text-xs text-gray-500 mt-0.5">미리 알아두면 피할 수 있는 실수들입니다.</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <ul className="px-5 pb-5 space-y-1.5">
            {mistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                <span className="text-amber-500 mt-0.5">●</span>
                <span className="leading-relaxed">{m}</span>
              </li>
            ))}
          </ul>
        </details>
      )}

      {/* 5. 무료기관 / 신청 경로 — 접기 (기본 닫힘) */}
      {(procedure.agency_names.length > 0 || procedure.source_urls.length > 0) && (
        <details className="bg-white rounded-lg border border-indigo-100 group">
          <summary className="cursor-pointer p-5 list-none flex items-center justify-between hover:bg-gray-50 rounded-lg">
            <div>
              <h3 className="text-base font-bold text-blue-700">🏛️ 무료기관 · 신청 경로</h3>
              <p className="text-xs text-gray-500 mt-0.5">아래 기관에서 절차 안내·상담을 확인하실 수 있습니다.</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-5 pb-5">
          <ul className="space-y-2">
            {procedure.agency_names.slice(0, 4).map((name, i) => {
              // 인덱스 짝짓기 금지 — 라벨에 이름이 적힌 기관의 URL 만 연결한다(없으면 링크 생략).
              const url = urlForAgency(name, procedure.source_urls);
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
        </details>
      )}

      <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
        본 안내는 기관 공개 절차를 정리한 것으로 법률 판단이 아닙니다. 사건마다 결과가 달라질 수 있어
        구체적 사정은 변호사·전문기관 상담을 통해 검토해보시기 바랍니다.
      </p>
    </section>
  );
}
