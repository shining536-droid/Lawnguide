'use client';

import Link from 'next/link';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface ExampleQuestion {
  text: string;
  icon: string;
  domain: string;
}

/**
 * /chat 첫 화면 예시 질문.
 *
 * 계측: 클릭 시 `example_question_click` 1회.
 * chat_start 는 이동 후 `/chat?domain=` 페이지에서 ChatStartTracker 가 발사하므로
 * 여기서는 절대 발사하지 않는다 (이중 집계 방지).
 * PII 금지: 전송값은 우리가 정의한 고정 문자열(도메인 id, 예시 문구)뿐이다.
 */
export default function ExampleQuestions({ questions }: { questions: ExampleQuestion[] }) {
  const track = (q: ExampleQuestion) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'example_question_click', {
      domain: q.domain,
      question_text: q.text,
      page_context: 'chat_landing',
    });
  };

  return (
    <div className="mt-5">
      <p className="mb-3 text-center text-xs font-medium text-gray-500 md:text-sm">
        이런 상황이시면 눌러보세요
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {questions.map((ex) => (
          <Link
            key={ex.domain}
            href={`/chat?domain=${ex.domain}`}
            onClick={() => track(ex)}
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-left text-sm text-gray-700 transition-all hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700"
          >
            <span className="text-base">{ex.icon}</span>
            <span className="flex-1 leading-tight">{ex.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
