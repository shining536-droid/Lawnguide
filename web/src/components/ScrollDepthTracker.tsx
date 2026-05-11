'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface ScrollDepthTrackerProps {
  pageSlug: string;
  pageDomain: string;
}

// 페이지 스크롤 깊이 추적 (75%, 100% 도달 시 GA4 scroll_depth_reached 이벤트)
// GA4 Enhanced Measurement 의 scroll 이벤트(90% 자동)와 중복 회피를 위해 별도 이벤트명 사용
export default function ScrollDepthTracker({ pageSlug, pageDomain }: ScrollDepthTrackerProps) {
  useEffect(() => {
    const fired = new Set<number>();
    const thresholds = [75, 100];

    const handleScroll = () => {
      const winH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const percent = docH > winH ? Math.round(((scrolled + winH) / docH) * 100) : 100;

      for (const t of thresholds) {
        if (percent >= t && !fired.has(t)) {
          fired.add(t);
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'scroll_depth_reached', {
              percent: t,
              page_slug: pageSlug,
              page_domain: pageDomain,
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageSlug, pageDomain]);

  return null;
}
