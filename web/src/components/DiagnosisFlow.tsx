'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import ProgressBar from './ProgressBar';
import ResultCard from './ResultCard';
import type { Question, BranchesFile, ResultsFile } from '@/lib/domains';

interface DiagnosisFlowProps {
  questions: Question[];
  branches: BranchesFile;
  results: ResultsFile;
  domainName: string;
  /** 도메인 id (예: 'unemployment'). GA4 guide_domain 파라미터용 — 표시명(domainName)과 구분한다. */
  domain: string;
}

const REDIRECTS: Record<string, { message: string; link: string; linkText: string }> = {
  REDIRECT_SANGGA: {
    message: '상가건물 임대차는 별도 상황 정리를 이용해주세요.',
    link: '/diagnosis/sangga',
    linkText: '상가건물 임대차 준비사항 확인하기',
  },
};

function resolveResultClient(
  branches: BranchesFile,
  answers: Record<string, string>
): string | null {
  for (const typeId of branches.resolution_order) {
    const branchType = branches.types.find((t) => t.id === typeId);
    if (!branchType) continue;

    let match = true;
    for (const [field, expected] of Object.entries(branchType.conditions)) {
      const actual = answers[field];
      if (actual === undefined) {
        match = false;
        break;
      }
      if (Array.isArray(expected)) {
        if (!expected.includes(actual)) {
          match = false;
          break;
        }
      } else {
        if (actual !== String(expected)) {
          match = false;
          break;
        }
      }
    }
    if (match) return typeId;
  }
  const lastType = branches.types[branches.types.length - 1];
  return lastType?.id ?? null;
}

function ShareButtons({ answers }: { answers: Record<string, string> }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(() => {
    const params = new URLSearchParams(answers);
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [answers]);

  const handleSavePDF = useCallback(() => {
    window.print();
  }, []);

  return (
    <>
      <button
        onClick={handleCopyLink}
        className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-primary-500 hover:text-primary-600"
      >
        {copied ? '복사됨!' : '링크 복사'}
      </button>
      <button
        onClick={handleSavePDF}
        className="rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600"
      >
        PDF 저장
      </button>
      <button
        disabled
        className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-400 cursor-not-allowed"
        title="준비 중"
      >
        카카오톡 공유
      </button>
    </>
  );
}

export default function DiagnosisFlow({ questions, branches, results, domainName, domain }: DiagnosisFlowProps) {
  // Auto-skip Q1 if it has only one option (e.g., drug-crime has only "혐의")
  const q1Skip = useMemo(() => {
    const q1 = questions[0];
    if (q1 && q1.options.length === 1) {
      const value = String(q1.options[0].value);
      const nextId = q1.next[value];
      const nextIndex = questions.findIndex((q) => q.id === nextId);
      if (nextIndex >= 0) {
        return { answers: { [q1.field]: value }, startIndex: nextIndex };
      }
    }
    return null;
  }, [questions]);

  const [answers, setAnswers] = useState<Record<string, string>>(q1Skip?.answers ?? {});
  const [currentIndex, setCurrentIndex] = useState(q1Skip?.startIndex ?? 0);
  const [history, setHistory] = useState<number[]>([q1Skip?.startIndex ?? 0]);
  const [finished, setFinished] = useState(false);
  const [redirect, setRedirect] = useState<string | null>(null);
  const [multiSelectState, setMultiSelectState] = useState<Record<string, boolean>>({});

  const currentQuestion = questions[currentIndex];

  /* ─── /diagnosis 퍼널 계측 (situation_start → situation_complete) ───
     기존 이벤트(chat_start·chat_complete·diagnosis_save·diagnosis_share)는 /chat 결과카드에서 발사되는 것이라
     이름·파라미터를 건드리지 않는다. 이름이 섞이지 않도록 /diagnosis 경로는 화면 명칭('상황 정리')을 따라
     situation_* 으로 분리하고, entry_surface='diagnosis_route' 를 함께 보낸다 (ANALYTICS_EVENTS.md 참조).
     PII 금지: 사용자의 선택 조합(answers)·자유입력·결과 문구는 보내지 않고, 앱이 정의한 카테고리 값만 보낸다. */
  const trackDiagnosis = useCallback(
    (eventName: 'situation_start' | 'situation_complete', params?: Record<string, string>) => {
      if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
      window.gtag('event', eventName, {
        guide_domain: domain,
        entry_surface: 'diagnosis_route',
        page_path: window.location.pathname,
        ...params,
      });
    },
    [domain]
  );

  // situation_start — 첫 질문에 실제로 답한 시점에 1회. 페이지 렌더나 CTA 노출로는 발사하지 않는다.
  const startFired = useRef(false);
  const fireStartOnce = useCallback(() => {
    if (startFired.current) return;
    startFired.current = true;
    trackDiagnosis('situation_start');
  }, [trackDiagnosis]);

  // 결과 상태로 전환됐을 때의 결과 엔트리 — 화면에 렌더되는 것과 같은 계산을 재사용한다.
  const finishedResult = useMemo(() => {
    if (!finished) return null;
    const typeId = resolveResultClient(branches, answers);
    return results.results.find((r) => r.type_id === typeId) ?? results.results[0] ?? null;
  }, [finished, branches, answers, results]);

  // situation_complete — flow 가 실제로 결과 상태에 도달했을 때 1회.
  // ref 가드로 리렌더·StrictMode 중복 발사를 막는다(ChatResultCard 의 chat_complete 와 같은 방식).
  const completeFired = useRef(false);
  useEffect(() => {
    if (!finished || !finishedResult || completeFired.current) return;
    completeFired.current = true;
    trackDiagnosis('situation_complete', {
      result_type_id: finishedResult.type_id,
      // risk_level 은 경로에 따라 안내 문장이 들어올 수 있어 ChatResultCard 와 동일한 화이트리스트로 좁힌다.
      risk_level: ['높음', '보통', '낮음'].includes(finishedResult.risk_level) ? finishedResult.risk_level : 'other',
    });
  }, [finished, finishedResult, trackDiagnosis]);

  // Calculate effective total: exclude branched questions not on the user's path
  const effectiveTotal = useMemo(() => {
    const branchPrefixes = new Set<string>();
    for (const q of questions) {
      const match = q.id.match(/^Q_(V|A|F|P|R|C)/);
      if (match) branchPrefixes.add(match[1]);
    }
    if (branchPrefixes.size === 0) return questions.length - (q1Skip ? 1 : 0);

    const branchedQuestions = questions.filter((q) => /^Q_(V|A|F|P|R|C)\d/.test(q.id));
    const branchGroupSize = Math.floor(branchedQuestions.length / branchPrefixes.size);
    return questions.length - branchGroupSize * Math.max(0, branchPrefixes.size - 1) - (q1Skip ? 1 : 0);
  }, [questions, q1Skip]);

  const resolveNextId = useCallback(
    (question: Question, value: string, currentAnswers: Record<string, string>): string | undefined => {
      let nextId = question.next[value] ?? question.next[String(value)];

      // Handle perspective-based routing
      if (nextId === '_PERSPECTIVE' && question.next_perspective) {
        const perspective = currentAnswers['perspective'];
        if (perspective && question.next_perspective[perspective]) {
          nextId = question.next_perspective[perspective];
        }
      }

      return nextId;
    },
    []
  );

  const advanceToNext = useCallback(
    (nextId: string | undefined) => {
      if (nextId && nextId.startsWith('REDIRECT_')) {
        setRedirect(nextId);
        return;
      }
      if (!nextId || nextId === 'RESULT') {
        setFinished(true);
        return;
      }
      const nextIndex = questions.findIndex((q) => q.id === nextId);
      if (nextIndex >= 0) {
        setHistory((prev) => [...prev, nextIndex]);
        setCurrentIndex(nextIndex);
      } else {
        setFinished(true);
      }
    },
    [questions]
  );

  const handleSelect = useCallback(
    (value: string) => {
      if (!currentQuestion) return;
      fireStartOnce();

      const newAnswers = { ...answers, [currentQuestion.field]: value };
      setAnswers(newAnswers);

      const nextId = resolveNextId(currentQuestion, value, newAnswers);
      advanceToNext(nextId);
    },
    [answers, currentQuestion, advanceToNext, resolveNextId, fireStartOnce]
  );

  const handleMultiSelectConfirm = useCallback(() => {
    if (!currentQuestion) return;
    fireStartOnce();
    const selected = Object.entries(multiSelectState)
      .filter(([, v]) => v)
      .map(([k]) => k);
    const value = selected.join(',');
    const newAnswers = { ...answers, [currentQuestion.field]: value };
    setAnswers(newAnswers);
    setMultiSelectState({});

    const next = currentQuestion.next;
    let nextId = next?.['_next'] ?? (next ? Object.values(next)[0] : undefined);

    // Handle perspective routing for multiselect
    if (nextId === '_PERSPECTIVE' && currentQuestion.next_perspective) {
      const perspective = newAnswers['perspective'];
      if (perspective && currentQuestion.next_perspective[perspective]) {
        nextId = currentQuestion.next_perspective[perspective];
      }
    }

    advanceToNext(nextId);
  }, [answers, currentQuestion, multiSelectState, advanceToNext, fireStartOnce]);

  const handleBack = useCallback(() => {
    if (redirect) {
      setRedirect(null);
      return;
    }
    if (history.length <= 1) return;
    setMultiSelectState({});

    // Pop the current entry from history
    const newHistory = history.slice(0, -1);
    const prevIndex = newHistory[newHistory.length - 1];

    // Remove the answer for the question we're leaving
    const leavingQuestion = questions[history[history.length - 1]];
    if (leavingQuestion) {
      const newAnswers = { ...answers };
      delete newAnswers[leavingQuestion.field];
      setAnswers(newAnswers);
    }

    setHistory(newHistory);
    setCurrentIndex(prevIndex);
  }, [history, answers, questions, redirect]);

  const handleRestart = useCallback(() => {
    // "다시 정리하기" 는 새로운 진단 1회다. 다시 답하면 start, 다시 끝내면 complete 가 각각 1회 더 발사된다.
    startFired.current = false;
    completeFired.current = false;
    setAnswers(q1Skip?.answers ?? {});
    setCurrentIndex(q1Skip?.startIndex ?? 0);
    setHistory([q1Skip?.startIndex ?? 0]);
    setFinished(false);
    setRedirect(null);
  }, [q1Skip]);

  // Redirect screen
  if (redirect) {
    const info = REDIRECTS[redirect];
    return (
      <div>
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm text-center">
          <p className="mb-6 text-lg text-gray-700">{info?.message ?? '별도 상황 정리를 이용해주세요.'}</p>
          <Link
            href={info?.link ?? '/'}
            className="inline-block rounded-xl bg-primary-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-primary-700"
          >
            {info?.linkText ?? '이동'} {'\u2192'}
          </Link>
        </div>
        <button
          onClick={handleBack}
          className="mt-4 text-sm text-gray-400 hover:text-primary-600"
        >
          {'\u2190'} 이전 질문
        </button>
      </div>
    );
  }

  if (finished) {
    const result = finishedResult ?? results.results[0];

    return (
      <div>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold text-navy-700 md:text-2xl">준비사항 확인</h2>
          <div className="grid grid-cols-2 gap-2 md:flex md:items-center">
            <ShareButtons answers={answers} />
            <button
              onClick={handleRestart}
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-primary-500 hover:text-primary-600"
            >
              다시 정리하기
            </button>
          </div>
        </div>
        <ResultCard result={result} answers={answers} />
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div>
      <ProgressBar
        current={history.length}
        total={effectiveTotal}
        stage={currentQuestion.stage}
      />

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 md:text-2xl">{currentQuestion.text}</h2>
        {currentQuestion.description && (
          <p className="mb-5 text-base text-gray-500">{currentQuestion.description}</p>
        )}
        {!currentQuestion.description && <div className="mb-5" />}

        {currentQuestion.type === 'multiselect' ? (
          <div className="space-y-2.5">
            {currentQuestion.options.map((option) => (
              <label
                key={String(option.value)}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 px-5 py-3.5 text-base text-gray-700 transition-colors hover:border-primary-300 hover:bg-primary-50"
              >
                <input
                  type="checkbox"
                  checked={!!multiSelectState[String(option.value)]}
                  onChange={() =>
                    setMultiSelectState((prev) => ({
                      ...prev,
                      [String(option.value)]: !prev[String(option.value)],
                    }))
                  }
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                {option.label}
              </label>
            ))}
            <button
              onClick={handleMultiSelectConfirm}
              className="mt-4 w-full rounded-xl bg-primary-600 px-4 py-3.5 text-base font-semibold text-white hover:bg-primary-700"
            >
              다음
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={String(option.value)}
                onClick={() => handleSelect(String(option.value))}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-left text-base text-gray-700 transition-colors hover:border-primary-400 hover:bg-primary-50 active:bg-primary-100"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {history.length > 1 && (
          <button
            onClick={handleBack}
            className="mt-5 text-sm text-gray-400 hover:text-primary-600"
          >
            {'\u2190'} 이전 질문
          </button>
        )}
      </div>

      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-5 py-3.5">
        <p className="text-xs leading-relaxed text-amber-800">
          이 상황 정리는 법적 효력을 갖는 유권해석이 아닙니다. 정확한 판단은 전문가 상담을 받으시기 바랍니다.
        </p>
      </div>
    </div>
  );
}
