'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface CtaButtonProps {
  href: string;
  ctaType: string;
  pageSlug: string;
  pageDomain: string;
  className?: string;
  children: ReactNode;
}

// CTA 클릭 추적 (GA4 cta_click 이벤트)
export default function CtaButton({
  href,
  ctaType,
  pageSlug,
  pageDomain,
  className,
  children,
}: CtaButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        cta_type: ctaType,
        page_slug: pageSlug,
        page_domain: pageDomain,
        cta_destination: href,
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
