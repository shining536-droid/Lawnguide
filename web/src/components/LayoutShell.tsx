'use client';

import { usePathname } from 'next/navigation';
import SiteFooter from './SiteFooter';
import MobileBottomNav from './MobileBottomNav';
import FloatingChatButton from './FloatingChatButton';

export default function LayoutShell() {
  const pathname = usePathname();
  const isChatPage = pathname === '/chat';

  return (
    <>
      {!isChatPage && <SiteFooter />}
      {!isChatPage && <MobileBottomNav />}
      <FloatingChatButton />
    </>
  );
}
