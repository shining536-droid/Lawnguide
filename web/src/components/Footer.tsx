export default function Footer() {
  return (
    <footer className="bg-navy-700 py-12 md:py-16">
      <div className="container-wide">
        <p className="text-center text-lg font-medium text-white md:text-xl">
          당신의 상담 시간을 가치 있게, 로앤가이드
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-navy-300">
          이 서비스는 법적 효력을 갖는 유권해석이 아닙니다.
        </p>
        <p className="mt-2 text-center text-sm text-navy-400">
          데이터 출처: 법제처 | lawnguide.co.kr
        </p>
      </div>
    </footer>
  );
}
