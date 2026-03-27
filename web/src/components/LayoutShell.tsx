'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import FloatingChatButton from './FloatingChatButton';

export default function LayoutShell() {
  const pathname = usePathname();
  const isChatPage = pathname === '/chat';

  return (
    <>
      {!isChatPage && <Footer />}
      {!isChatPage && <MobileBottomNav />}
      <FloatingChatButton />
    </>
  );
}
