'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import type { Question, BranchesFile, ResultsFile, ResultEntry, DomainMeta } from '@/lib/domains-client';
import { DOMAINS } from '@/lib/domains-client';
import ChatResultCard from './ChatResultCard';

/* ─────────────── Types ─────────────── */

interface ChatMessage {
  id: string;
  type: 'bot' | 'user' | 'options' | 'result' | 'reflection' | 'progress';
  content: string;
  options?: { value: string; label: string; icon?: string }[];
  result?: ResultEntry;
  answers?: Record<string, string>;
  isTyping?: boolean;
}

interface ChatBotProps {
  allDomainData: Record<string, {
    questions: Question[];
    branches: BranchesFile;
    results: ResultsFile;
  }>;
  initialDomain?: string;
}

type Phase = 'category' | 'domain-select' | 'diagnosis' | 'result';

/* ─────────────── Constants ─────────────── */

const CATEGORIES = [
  {
    label: '사기/재산범죄', icon: '🎭',
    domains: ['fraud'],
  },
  {
    label: '폭행/상해', icon: '⚠️',
    domains: ['assault'],
  },
  {
    label: '성범죄/스토킹', icon: '🛡️',
    domains: ['sex-crime', 'digital-sex-crime', 'sexual-harassment', 'stalking', 'child-sex-crime', 'prostitution'],
  },
  {
    label: '이혼/가족', icon: '💔',
    domains: ['divorce', 'child-support', 'inheritance'],
  },
  {
    label: '전세/부동산', icon: '🏠',
    domains: ['jeonse', 'jeonse-fraud', 'sangga', 'real-estate-sale', 'real-estate-auction'],
  },
  {
    label: '해고/임금', icon: '💰',
    domains: ['dismissal', 'wage', 'retirement', 'unemployment', 'industrial-accident1', 'industrial-accident2'],
  },
  {
    label: '음주운전/교통', icon: '🚗',
    domains: ['dui', 'traffic-accident'],
  },
  {
    label: '기타', icon: '📋',
    domains: ['defamation', 'school-violence', 'drug-crime', 'small-claims', 'rehabilitation', 'bankruptcy', 'neighbor-dispute'],
  },
];

const REFLECTIONS: Record<string, Record<string, string>> = {
  perspective: {
    '피해를 입었습니다': '피해를 입으신 상황이시군요. 상황을 좀 더 파악해볼게요.',
    '혐의를 받고 있습니다': '혐의를 받고 계신 상황으로 이해했어요. 대응 준비를 도와드릴게요.',
    '사실과 다르게 신고되었다고 생각합니다': '억울한 상황이시군요. 정확한 대응 방향을 정리해드릴게요.',
  },
};

const TYPING_DELAY_MIN = 500;
const TYPING_DELAY_MAX = 800;

function typingDelay(): number {
  return Math.floor(Math.random() * (TYPING_DELAY_MAX - TYPING_DELAY_MIN + 1)) + TYPING_DELAY_MIN;
}

let _msgId = 0;
function nextId(): string {
  _msgId += 1;
  return `msg-${_msgId}-${Date.now()}`;
}

/* ─────────────── resolveResultClient ─────────────── */

function resolveResultClient(
  branches: BranchesFile,
  answers: Record<string, string>,
): string | null {
  for (const typeId of branches.resolution_order) {
    const branchType = branches.types.find((t) => t.id === typeId);
    if (!branchType) continue;

    let match = true;
    for (const [field, expected] of Object.entries(branchType.conditions)) {
      const actual = answers[field];
      if (actual === undefined) { match = false; break; }
      if (Array.isArray(expected)) {
        if (!expected.includes(actual)) { match = false; break; }
      } else {
        if (actual !== String(expected)) { match = false; break; }
      }
    }
    if (match) return typeId;
  }
  const lastType = branches.types[branches.types.length - 1];
  return lastType?.id ?? null;
}

/* ─────────────── Helper: resolve next question id ─────────────── */

function resolveNextId(
  question: Question,
  value: string,
  currentAnswers: Record<string, string>,
): string | undefined {
  let nextId = question.next[value] ?? question.next[String(value)];
  if (nextId === '_PERSPECTIVE' && question.next_perspective) {
    const perspective = currentAnswers['perspective'];
    if (perspective && question.next_perspective[perspective]) {
      nextId = question.next_perspective[perspective];
    }
  }
  return nextId;
}

/* ─────────────── Typing Indicator ─────────────── */

function TypingIndicator() {
  return (
    <div className="flex max-w-[85%] items-center gap-1.5 rounded-2xl rounded-tl-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0ms' }} />
      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '150ms' }} />
      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '300ms' }} />
    </div>
  );
}

/* ─────────────── ChatBot Component ─────────────── */

export default function ChatBot({ allDomainData, initialDomain }: ChatBotProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentPhase, setCurrentPhase] = useState<Phase>('category');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [multiSelectState, setMultiSelectState] = useState<Record<string, boolean>>({});
  const [showUnsupported, setShowUnsupported] = useState(false);

  // Domain data for the selected domain
  const domainData = selectedDomain ? allDomainData[selectedDomain] : null;
  const questions = domainData?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex] ?? null;

  const domainMeta = useMemo(
    () => (selectedDomain ? DOMAINS.find((d) => d.id === selectedDomain) : null),
    [selectedDomain],
  );

  // Total questions (effective, accounting for branches)
  const effectiveTotal = useMemo(() => {
    if (!questions.length) return 0;
    const branchPrefixes = new Set<string>();
    for (const q of questions) {
      const m = q.id.match(/^Q_(V|A|F|P|R|C)/);
      if (m) branchPrefixes.add(m[1]);
    }
    if (branchPrefixes.size === 0) return questions.length;
    const branched = questions.filter((q) => /^Q_(V|A|F|P|R|C)\d/.test(q.id));
    const groupSize = Math.floor(branched.length / branchPrefixes.size);
    return questions.length - groupSize * Math.max(0, branchPrefixes.size - 1);
  }, [questions]);

  /* ── Auto scroll — show newest message without jumping past it ── */
  useEffect(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    // Only auto-scroll if user is near the bottom (within 300px)
    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 300;
    if (isNearBottom) {
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight - el.clientHeight, behavior: 'smooth' });
      });
    }
  }, [messages, isTyping]);

  /* ── Add message with optional typing delay ── */
  const addBotMessage = useCallback(
    (msg: Omit<ChatMessage, 'id'>, callback?: () => void) => {
      setIsTyping(true);
      const delay = typingDelay();
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { ...msg, id: nextId() }]);
        callback?.();
      }, delay);
    },
    [],
  );

  const addMessageImmediate = useCallback((msg: Omit<ChatMessage, 'id'>) => {
    setMessages((prev) => [...prev, { ...msg, id: nextId() }]);
  }, []);

  /* ── Initialize ── */
  useEffect(() => {
    if (initialDomain && allDomainData[initialDomain]) {
      // Skip to diagnosis directly
      startDiagnosis(initialDomain);
    } else {
      // Show welcome
      addBotMessage({
        type: 'bot',
        content: '안녕하세요! 법률 상황 정리를 도와드릴게요.',
      }, () => {
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [
              ...prev,
              {
                id: nextId(),
                type: 'options',
                content: '어떤 문제로 고민하고 계신가요?',
                options: CATEGORIES.map((c) => ({ value: c.label, label: c.label, icon: c.icon })),
              },
            ]);
          }, typingDelay());
        }, 200);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Progress message logic ── */
  const getProgressMessage = useCallback(
    (answeredCount: number, total: number): string | null => {
      if (answeredCount === 3 && total > 5) return '잘 하고 계세요. 몇 가지만 더 여쭤볼게요.';
      if (total - answeredCount === 2) return '거의 다 왔어요. 2개만 더 답하면 결과를 볼 수 있어요.';
      if (total - answeredCount === 1) return '마지막 질문이에요.';
      return null;
    },
    [],
  );

  /* ── Start diagnosis for a domain ── */
  const startDiagnosis = useCallback(
    (domainId: string) => {
      const data = allDomainData[domainId];
      if (!data) return;

      setSelectedDomain(domainId);
      setCurrentPhase('diagnosis');
      setAnswers({});
      setHistory([]);
      setMultiSelectState({});

      const meta = DOMAINS.find((d) => d.id === domainId);
      const qs = data.questions;

      // Auto-skip Q1 if single option
      let startIndex = 0;
      let initialAnswers: Record<string, string> = {};
      const q1 = qs[0];
      if (q1 && q1.options.length === 1) {
        const value = String(q1.options[0].value);
        const nid = q1.next[value];
        const ni = qs.findIndex((q) => q.id === nid);
        if (ni >= 0) {
          initialAnswers = { [q1.field]: value };
          startIndex = ni;
        }
      }

      setAnswers(initialAnswers);
      setCurrentQuestionIndex(startIndex);
      setHistory([startIndex]);

      const firstQ = qs[startIndex];
      if (!firstQ) return;

      addBotMessage(
        {
          type: 'bot',
          content: `${meta?.name ?? domainId} 관련 상황을 정리해드릴게요.`,
        },
        () => {
          addBotMessage({
            type: 'options',
            content: firstQ.text,
            options: firstQ.options.map((o) => ({ value: String(o.value), label: o.label })),
          });
        },
      );
    },
    [allDomainData, addBotMessage],
  );

  /* ── Handle category select ── */
  const handleCategorySelect = useCallback(
    (categoryLabel: string) => {
      const cat = CATEGORIES.find((c) => c.label === categoryLabel);
      if (!cat) return;

      addMessageImmediate({ type: 'user', content: `${cat.icon} ${cat.label}` });

      if (cat.domains.length === 1) {
        // Go directly to diagnosis
        startDiagnosis(cat.domains[0]);
      } else {
        // Show domain sub-options
        setCurrentPhase('domain-select');
        const domainOptions = cat.domains
          .filter((d) => allDomainData[d])
          .map((d) => {
            const meta = DOMAINS.find((dm) => dm.id === d);
            return { value: d, label: meta?.name ?? d, icon: meta?.icon };
          });

        addBotMessage({
          type: 'options',
          content: '좀 더 구체적으로 어떤 상황인가요?',
          options: domainOptions,
        });
      }
    },
    [addMessageImmediate, addBotMessage, allDomainData, startDiagnosis],
  );

  /* ── Handle domain select ── */
  const handleDomainSelect = useCallback(
    (domainId: string) => {
      const meta = DOMAINS.find((d) => d.id === domainId);
      addMessageImmediate({ type: 'user', content: meta?.name ?? domainId });
      startDiagnosis(domainId);
    },
    [addMessageImmediate, startDiagnosis],
  );

  /* ── Show next question as bot message ── */
  const showQuestion = useCallback(
    (qIndex: number, answeredCount: number) => {
      const q = questions[qIndex];
      if (!q) return;

      // Check for progress message first
      const progressMsg = getProgressMessage(answeredCount, effectiveTotal);
      if (progressMsg) {
        addBotMessage({ type: 'progress', content: progressMsg }, () => {
          addBotMessage({
            type: 'options',
            content: q.text,
            options: q.options.map((o) => ({ value: String(o.value), label: o.label })),
          });
        });
      } else {
        addBotMessage({
          type: 'options',
          content: q.text,
          options: q.options.map((o) => ({ value: String(o.value), label: o.label })),
        });
      }
    },
    [questions, effectiveTotal, getProgressMessage, addBotMessage],
  );

  /* ── Advance to next question or finish ── */
  const advanceToNext = useCallback(
    (nextIdStr: string | undefined, newAnswers: Record<string, string>, newHistory: number[]) => {
      if (!nextIdStr || nextIdStr === 'RESULT') {
        // Finished — show result
        if (!domainData) return;
        const typeId = resolveResultClient(domainData.branches, newAnswers);
        const result = domainData.results.results.find((r) => r.type_id === typeId) ?? domainData.results.results[0];

        setCurrentPhase('result');
        addBotMessage({ type: 'bot', content: '결과가 준비됐어요! 아래에서 확인해주세요.' }, () => {
          addMessageImmediate({
            type: 'result',
            content: '',
            result,
            answers: newAnswers,
          });
        });
        return;
      }

      if (nextIdStr.startsWith('REDIRECT_')) {
        // For redirects, just show as a bot message
        addBotMessage({
          type: 'bot',
          content: '해당 상황은 별도 상황 정리를 이용해주세요.',
        });
        return;
      }

      const nextIndex = questions.findIndex((q) => q.id === nextIdStr);
      if (nextIndex < 0) {
        // Fallback: finish
        if (!domainData) return;
        const typeId = resolveResultClient(domainData.branches, newAnswers);
        const result = domainData.results.results.find((r) => r.type_id === typeId) ?? domainData.results.results[0];
        setCurrentPhase('result');
        addBotMessage({ type: 'bot', content: '결과가 준비됐어요! 아래에서 확인해주세요.' }, () => {
          addMessageImmediate({ type: 'result', content: '', result, answers: newAnswers });
        });
        return;
      }

      const updatedHistory = [...newHistory, nextIndex];
      setCurrentQuestionIndex(nextIndex);
      setHistory(updatedHistory);
      showQuestion(nextIndex, updatedHistory.length);
    },
    [questions, domainData, addBotMessage, addMessageImmediate, showQuestion],
  );

  /* ── Handle diagnosis answer select ── */
  const handleAnswerSelect = useCallback(
    (value: string) => {
      if (!currentQuestion) return;

      // Show user bubble
      const selectedOption = currentQuestion.options.find((o) => String(o.value) === value);
      addMessageImmediate({ type: 'user', content: selectedOption?.label ?? value });

      const newAnswers = { ...answers, [currentQuestion.field]: value };
      setAnswers(newAnswers);

      // Reflection
      const fieldReflections = REFLECTIONS[currentQuestion.field];
      const reflection = fieldReflections?.[value];

      const nid = resolveNextId(currentQuestion, value, newAnswers);

      if (reflection) {
        addBotMessage({ type: 'reflection', content: reflection }, () => {
          advanceToNext(nid, newAnswers, history);
        });
      } else {
        // Generic domain-aware reflection for perspective question
        if (currentQuestion.field === 'perspective' && domainMeta) {
          const generic = `${domainMeta.name} 관련으로 이해했어요. 구체적인 상황을 확인해볼게요.`;
          addBotMessage({ type: 'reflection', content: generic }, () => {
            advanceToNext(nid, newAnswers, history);
          });
        } else {
          advanceToNext(nid, newAnswers, history);
        }
      }
    },
    [currentQuestion, answers, history, domainMeta, addMessageImmediate, addBotMessage, advanceToNext],
  );

  /* ── Handle multiselect confirm ── */
  const handleMultiSelectConfirm = useCallback(() => {
    if (!currentQuestion) return;

    const selected = Object.entries(multiSelectState)
      .filter(([, v]) => v)
      .map(([k]) => k);
    const value = selected.join(',');

    // Show user bubble with selected labels
    const selectedLabels = currentQuestion.options
      .filter((o) => selected.includes(String(o.value)))
      .map((o) => o.label);
    addMessageImmediate({ type: 'user', content: selectedLabels.join(', ') || '(선택 없음)' });

    const newAnswers = { ...answers, [currentQuestion.field]: value };
    setAnswers(newAnswers);
    setMultiSelectState({});

    const next = currentQuestion.next;
    let nid = next?.['_next'] ?? (next ? Object.values(next)[0] : undefined);
    if (nid === '_PERSPECTIVE' && currentQuestion.next_perspective) {
      const perspective = newAnswers['perspective'];
      if (perspective && currentQuestion.next_perspective[perspective]) {
        nid = currentQuestion.next_perspective[perspective];
      }
    }

    advanceToNext(nid, newAnswers, history);
  }, [currentQuestion, multiSelectState, answers, history, addMessageImmediate, advanceToNext]);

  /* ── Handle back ── */
  const handleBack = useCallback(() => {
    if (history.length <= 1) return;

    setMultiSelectState({});
    const newHistory = history.slice(0, -1);
    const prevIndex = newHistory[newHistory.length - 1];

    // Remove answer for current question
    const leavingQ = questions[history[history.length - 1]];
    const newAnswers = { ...answers };
    if (leavingQ) delete newAnswers[leavingQ.field];
    setAnswers(newAnswers);

    setHistory(newHistory);
    setCurrentQuestionIndex(prevIndex);

    // Remove last few messages (user answer + bot question + reflection/progress) and re-show
    // Simpler approach: remove messages back to previous question
    setMessages((prev) => {
      // Find the last 'options' message index (current question) and remove everything after the one before it
      const optionIndices: number[] = [];
      prev.forEach((m, i) => { if (m.type === 'options') optionIndices.push(i); });
      if (optionIndices.length >= 2) {
        const cutAt = optionIndices[optionIndices.length - 1];
        // Remove from the user answer before this options message
        // Find the user message right before the last options message
        let removeFrom = cutAt;
        for (let i = cutAt - 1; i >= 0; i--) {
          if (prev[i].type === 'user') { removeFrom = i; break; }
        }
        return prev.slice(0, removeFrom);
      }
      return prev;
    });

    // Re-show the previous question
    const prevQ = questions[prevIndex];
    if (prevQ) {
      addBotMessage({
        type: 'options',
        content: prevQ.text,
        options: prevQ.options.map((o) => ({ value: String(o.value), label: o.label })),
      });
    }
  }, [history, questions, answers, addBotMessage]);

  /* ── Handle restart ── */
  const handleRestart = useCallback(() => {
    setMessages([]);
    setCurrentPhase('category');
    setSelectedDomain(null);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setHistory([]);
    setIsTyping(false);
    setMultiSelectState({});
    setShowUnsupported(false);

    setTimeout(() => {
      addBotMessage({
        type: 'bot',
        content: '안녕하세요! 법률 상황 정리를 도와드릴게요.',
      }, () => {
        addBotMessage({
          type: 'options',
          content: '어떤 문제로 고민하고 계신가요?',
          options: CATEGORIES.map((c) => ({ value: c.label, label: c.label, icon: c.icon })),
        });
      });
    }, 100);
  }, [addBotMessage]);

  /* ── Handle option click (routes based on phase) ── */
  const handleOptionClick = useCallback(
    (value: string) => {
      if (currentPhase === 'category') {
        handleCategorySelect(value);
      } else if (currentPhase === 'domain-select') {
        handleDomainSelect(value);
      } else if (currentPhase === 'diagnosis') {
        handleAnswerSelect(value);
      }
    },
    [currentPhase, handleCategorySelect, handleDomainSelect, handleAnswerSelect],
  );

  /* ── Check if last options message is multiselect ── */
  const isCurrentMultiselect = currentPhase === 'diagnosis' && currentQuestion?.type === 'multiselect';

  /* ── Render a single message ── */
  const renderMessage = (msg: ChatMessage, index: number) => {
    const isLastOptions = msg.type === 'options' && index === messages.length - 1 && !isTyping;

    switch (msg.type) {
      case 'bot':
      case 'reflection':
      case 'progress':
        return (
          <div key={msg.id} className="flex justify-start">
            <div
              className={`max-w-[85%] rounded-2xl rounded-tl-md border px-4 py-3 shadow-sm ${
                msg.type === 'progress'
                  ? 'border-primary-100 bg-primary-50 text-primary-700'
                  : msg.type === 'reflection'
                    ? 'border-blue-100 bg-blue-50 text-blue-800'
                    : 'border-gray-100 bg-white text-gray-800'
              }`}
            >
              <p className="text-[15px] leading-relaxed">{msg.content}</p>
            </div>
          </div>
        );

      case 'user':
        return (
          <div key={msg.id} className="flex justify-end">
            <div className="max-w-[85%] ml-auto rounded-2xl rounded-tr-md bg-primary-600 px-4 py-3 text-white">
              <p className="text-[15px] leading-relaxed">{msg.content}</p>
            </div>
          </div>
        );

      case 'options':
        return (
          <div key={msg.id} className="flex flex-col gap-3">
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
                <p className="text-[15px] leading-relaxed text-gray-800">{msg.content}</p>
              </div>
            </div>
            {isLastOptions && msg.options && (
              <div className="flex flex-col gap-2 pl-2">
                {/* Multiselect */}
                {isCurrentMultiselect ? (
                  <>
                    {msg.options.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 px-4 py-3 text-left font-medium text-gray-700 transition-all hover:border-primary-500 hover:bg-primary-50"
                      >
                        <input
                          type="checkbox"
                          checked={!!multiSelectState[opt.value]}
                          onChange={() =>
                            setMultiSelectState((prev) => ({
                              ...prev,
                              [opt.value]: !prev[opt.value],
                            }))
                          }
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        {opt.icon && <span>{opt.icon}</span>}
                        <span>{opt.label}</span>
                      </label>
                    ))}
                    <button
                      onClick={handleMultiSelectConfirm}
                      className="mt-1 w-full rounded-xl bg-primary-600 px-4 py-3 text-base font-semibold text-white hover:bg-primary-700 transition-colors"
                    >
                      다음
                    </button>
                  </>
                ) : (
                  /* Single select */
                  msg.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleOptionClick(opt.value)}
                      className={`w-full text-left rounded-xl border-2 border-gray-200 px-4 py-3 font-medium text-gray-700 transition-all hover:border-primary-500 hover:bg-primary-50 ${
                        opt.icon ? 'flex items-center gap-3 py-4' : ''
                      }`}
                    >
                      {opt.icon && <span className="text-xl">{opt.icon}</span>}
                      <span>{opt.label}</span>
                    </button>
                  ))
                )}

                {/* Unsupported domain link for category phase */}
                {currentPhase === 'category' && !showUnsupported && (
                  <button
                    onClick={() => setShowUnsupported(true)}
                    className="mt-2 text-sm text-gray-400 hover:text-primary-600 underline underline-offset-2"
                  >
                    지원하지 않는 문제인가요?
                  </button>
                )}
                {currentPhase === 'category' && showUnsupported && (
                  <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 space-y-2">
                    <p className="font-medium text-gray-700">아직 지원하지 않는 분야일 수 있어요.</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>위 카테고리에서 가장 비슷한 분야를 선택해보세요.</li>
                      <li>일반 법률 상담은 <span className="font-medium">대한법률구조공단 132</span>에 전화해보세요.</li>
                      <li>긴급 상황이라면 <span className="font-medium">112(경찰)</span> 또는 <span className="font-medium">119(응급)</span>에 연락하세요.</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            {/* Show past options as disabled if not the last */}
            {!isLastOptions && msg.options && (
              <div className="flex flex-col gap-1 pl-2 opacity-50">
                {msg.options.map((opt) => (
                  <div
                    key={opt.value}
                    className="w-full text-left rounded-xl border border-gray-100 px-4 py-2 text-sm text-gray-400"
                  >
                    {opt.icon && <span className="mr-2">{opt.icon}</span>}
                    {opt.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'result':
        return (
          <div key={msg.id} className="w-full">
            {msg.result && <ChatResultCard result={msg.result} answers={msg.answers ?? {}} domainName={domainMeta?.name ?? ''} onRestart={handleRestart} />}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚖️</span>
          <h1 className="text-base font-bold text-gray-800">로앤가이드 상황정리</h1>
        </div>
        <button
          onClick={handleRestart}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-primary-600 transition-colors"
        >
          처음부터 다시 시작
        </button>
      </div>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, i) => renderMessage(msg, i))}

        {/* Typing indicator */}
        {isTyping && <TypingIndicator />}

        {/* Invisible scroll anchor */}
        <div ref={bottomRef} />
      </div>

      {/* Bottom actions */}
      {currentPhase === 'diagnosis' && history.length > 1 && !isTyping && (
        <div className="border-t border-gray-200 bg-white px-4 py-3">
          <button
            onClick={handleBack}
            className="text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors"
          >
            ← 이전으로
          </button>
        </div>
      )}

      {currentPhase === 'result' && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 flex gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-all"
          >
            다른 문제 상담하기
          </button>
        </div>
      )}
    </div>
  );
}
