import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: '로앤가이드 - 변호사 만나기 전에 이것만 챙기세요',
  description:
    '전세보증금, 사기, 해고, 폭행 등 법률 문제 상담 전 준비사항을 1분 안에 정리해드립니다. 31개 분야 무료 진단.',
  openGraph: {
    title: '로앤가이드 - 변호사 만나기 전에 이것만 챙기세요',
    description:
      '전세보증금, 사기, 해고, 폭행 등 법률 문제 상담 전 준비사항을 1분 안에 정리해드립니다. 31개 분야 무료 진단.',
  },
  other: {
    // GA4 placeholder
    'google-analytics': '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-site-verification" content="vL9P2IwiUGewHLUXc8epNWxdLtdZNtkAkim3QyaPiFU" />
        {/* GA4 placeholder - replace with your Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
