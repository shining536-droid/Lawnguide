export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-700 py-12 md:py-16">
      <div className="container-wide relative z-10">
        <p className="text-center text-lg font-medium text-white md:text-xl">
          당신의 상담 시간을 가치 있게, 로앤가이드
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-navy-300">
          이 서비스는 법적 효력을 갖는 유권해석이 아닙니다. 정확한 법률 판단은 전문가 상담을 받으시기 바랍니다.
        </p>
        <p className="mt-2 text-center text-sm text-navy-400">
          데이터 출처: 법제처
        </p>
      </div>
      {/* Decorative diamond */}
      <div className="absolute bottom-6 right-8 text-navy-600/40 md:right-16">
        <svg className="h-12 w-12 md:h-16 md:w-16" viewBox="0 0 48 48" fill="currentColor">
          <path d="M24 2 L32 16 L46 20 L36 32 L38 46 L24 40 L10 46 L12 32 L2 20 L16 16 Z" />
        </svg>
      </div>
    </footer>
  );
}
