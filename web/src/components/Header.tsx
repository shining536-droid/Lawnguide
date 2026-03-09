'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showSolid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        showSolid
          ? 'border-b border-gray-200 bg-white/95 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5">
          {/* Scales of Justice icon */}
          <svg
            className={`h-8 w-8 transition-colors ${showSolid ? 'text-navy-700' : 'text-white'}`}
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="16" y1="4" x2="16" y2="28" />
            <line x1="6" y1="8" x2="26" y2="8" />
            <path d="M6 8 L3 18 Q3 22 6 22 Q9 22 9 18 Z" />
            <path d="M26 8 L23 18 Q23 22 26 22 Q29 22 29 18 Z" />
            <line x1="12" y1="28" x2="20" y2="28" />
          </svg>
          <span className={`text-xl font-bold transition-colors ${showSolid ? 'text-navy-700' : 'text-white'}`}>
            로앤가이드
          </span>
        </Link>
        <nav className="hidden gap-8 sm:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              showSolid ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
            }`}
          >
            홈
          </Link>
          <Link
            href="/guide/jeonse"
            className={`text-sm font-medium transition-colors ${
              showSolid ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'
            }`}
          >
            분야별 안내
          </Link>
        </nav>
      </div>
    </header>
  );
}
