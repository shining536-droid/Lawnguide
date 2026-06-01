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
  /** GA4 cta_location 파라미터용 위치값 (예: guide_mid, guide_bottom). 미지정 시 'guide_body' */
  ctaLocation?: string;
  /** GA4 button_text 파라미터용. 미지정 시 children 이 문자열이면 그 값을 사용 */
  buttonText?: string;
  className?: string;
  children: ReactNode;
}

// CTA 클릭 추적 (GA4 cta_click 이벤트)
export default function CtaButton({
  href,
  ctaType,
  pageSlug,
  pageDomain,
  ctaLocation = 'guide_body',
  buttonText,
  className,
  children,
}: CtaButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        // 기존 파라미터 유지
        cta_type: ctaType,
        page_slug: pageSlug,
        page_domain: pageDomain,
        cta_destination: href,
        // 공통 파라미터 추가 (ChatResultCard 와 통일)
        page_path: window.location.pathname,
        guide_domain: pageDomain,
        cta_location: ctaLocation,
        button_text: buttonText ?? (typeof children === 'string' ? children : undefined),
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
