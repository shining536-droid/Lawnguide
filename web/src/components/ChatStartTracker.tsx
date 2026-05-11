'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// /chat 페이지 진입 시 chat_start 이벤트 (GA4 자동 page_view 와는 별개로 의도 추적)
export default function ChatStartTracker({ domain }: { domain?: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'chat_start', {
        page_domain: domain || 'unknown',
      });
    }
  }, [domain]);

  return null;
}
