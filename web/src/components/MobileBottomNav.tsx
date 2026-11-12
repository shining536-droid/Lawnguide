'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DomainIcon, { type IconName } from './DomainIcon';

/**
 * 모바일 하단 내비 (md 미만 전용).
 * - 높이 56px + iOS safe-area, 탭 3개(각 ≥ 56px 높이의 탭 영역) 로 탭 타깃 확보
 * - 활성 탭: brand.accent 색 + 상단 2px 인디케이터 + aria-current
 * - AI도우미 탭은 가이드 분야 페이지(/guide/{domain}/…)에서는 해당 분야로 미리 맞춘 /chat?domain= 으로 연결
 *   (플로팅 버튼이 모바일에서 사라지면서 잃는 분야별 진입을 탭이 대신한다). 그 외에는 기존과 같은 /chat.
 */
const TABS: { label: string; href: string; icon: IconName; matchPrefix?: string }[] = [
  { label: '홈', href: '/', icon: 'house-nav' },
  { label: 'AI도우미', href: '/chat', icon: 'message-circle', matchPrefix: '/chat' },
  { label: '가이드', href: '/guide', icon: 'book-open', matchPrefix: '/guide' },
];

function getDomainFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/guide\/([^/]+)/);
  return match ? match[1] : null;
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const domain = getDomainFromPath(pathname);

  const isActive = (tab: typeof TABS[number]) => {
    if (tab.matchPrefix) return pathname.startsWith(tab.matchPrefix);
    return pathname === tab.href;
  };

  return (
    <>
      {/* 내비 높이만큼 본문 바닥 여백 (safe-area 포함) */}
      <div className="h-[calc(3.5rem+env(safe-area-inset-bottom))] md:hidden" aria-hidden="true" />
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-line bg-white/95 backdrop-blur-sm md:hidden"
        aria-label="하단 메뉴"
      >
        <ul className="flex h-14 items-stretch" role="list">
          {TABS.map((tab) => {
            const active = isActive(tab);
            const href = tab.href === '/chat' && domain ? `/chat?domain=${domain}` : tab.href;
            return (
              <li key={tab.label} className="flex flex-1">
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative flex flex-1 flex-col items-center justify-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent/40 ${
                    active ? 'text-brand-accent' : 'text-brand-muted hover:text-navy-700'
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-0 h-0.5 w-8 -translate-x-1/2 rounded-b-full bg-brand-accent"
                    />
                  )}
                  <DomainIcon name={tab.icon} size={22} strokeWidth={active ? 2 : 1.75} />
                  <span className={`text-[11px] leading-none ${active ? 'font-semibold' : 'font-medium'}`}>{tab.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* iOS 홈 인디케이터 영역 */}
        <div className="h-[env(safe-area-inset-bottom)] bg-white" />
      </nav>
    </>
  );
}
