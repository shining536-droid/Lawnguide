'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const DOMAIN_LABELS: Record<string, string> = {
  fraud: '사기',
  jeonse: '전세보증금',
  divorce: '이혼',
  assault: '폭행',
  dui: '음주운전',
  drug: '마약',
  defamation: '명예훼손',
  'sex-crime': '성범죄',
  'school-violence': '학교폭력',
  inheritance: '상속',
  'child-support': '양육비',
  labor: '노동',
  bankruptcy: '파산·회생',
};

function getDomainFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/guide\/([^/]+)/);
  return match ? match[1] : null;
}

function getTooltipText(domain: string | null): string {
  if (domain && DOMAIN_LABELS[domain]) {
    return `${DOMAIN_LABELS[domain]} 관련 상황을 정리해보세요`;
  }
  return '변호사 만나기 전,\nAI가 빠르게 대응 전략을 세워드립니다.';
}

export default function FloatingChatButton() {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  const domain = getDomainFromPath(pathname);
  const chatHref = domain ? `/chat?domain=${domain}` : '/chat';
  const tooltipText = getTooltipText(domain);

  // Don't render on /chat page
  const isChat = pathname.startsWith('/chat');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isChat || dismissed) return;
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, [isChat, dismissed]);

  // Reset tooltip when navigating to a new domain page
  useEffect(() => {
    if (!dismissed) {
      setShowTooltip(false);
      const timer = setTimeout(() => setShowTooltip(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [pathname, dismissed]);

  if (!mounted || isChat) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50 md:bottom-6">
      {/* Tooltip speech bubble */}
      {showTooltip && !dismissed && (
        <div
          className="absolute bottom-16 right-0 w-64 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl transition-all duration-500"
          style={{
            animation: 'floatIn 0.4s ease-out',
          }}
        >
          <button
            onClick={() => setDismissed(true)}
            className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="닫기"
          >
            ✕
          </button>
          <Link href={chatHref} className="block text-sm leading-relaxed text-gray-700">
            {tooltipText.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </Link>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-gray-100 bg-white" />
        </div>
      )}

      {/* Floating button */}
      <Link
        href={chatHref}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl active:scale-95"
        aria-label="AI 상담 시작"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
        </svg>
      </Link>

      <style jsx>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
