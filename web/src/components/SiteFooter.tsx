import Link from 'next/link';

const CONTACT_EMAIL = 'shining8930@naver.com';

// 네비게이션: 실제 존재하는 라우트만 사용
const NAV_LINKS: { label: string; href: string }[] = [
  { label: '서비스 안내', href: '/guide' },
  { label: '이용약관', href: '/terms' },
  { label: '개인정보처리방침', href: '/privacy' },
  { label: '문의하기', href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('[로앤가이드] 문의')}` },
  {
    label: '정보 정정·오류 신고',
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('[로앤가이드] 정보 정정·오류 신고')}`,
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white" aria-label="사이트 정보">
      <div className="container-wide py-8 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <p className="text-base font-semibold text-navy-700">로앤가이드</p>
            <p className="mt-1 text-sm text-gray-500">법률문제 해결을 위한 정보 가이드</p>
          </div>

          {/* Navigation */}
          <nav aria-label="푸터 메뉴">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
              {NAV_LINKS.map((link) =>
                link.href.startsWith('mailto:') ? (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-navy-700 hover:underline">
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-navy-700 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        {/* Service disclaimer */}
        <div className="mt-6 space-y-1.5 border-t border-gray-100 pt-6 text-xs leading-relaxed text-gray-500">
          <p>
            로앤가이드는 이용자가 법률문제를 이해하고 필요한 자료와 절차를 확인할 수 있도록 법률정보를 제공하는
            서비스입니다.
          </p>
          <p>
            진단·안내는 미리 정리된 질문 분기와 법률정보를 바탕으로 자동 제공되는 일반적인 참고정보이며, 개별 사건에
            관한 변호사의 법률자문을 대체하지 않습니다.
          </p>
          <p>구체적인 법률적 판단은 사건의 사실관계에 따라 달라질 수 있습니다.</p>
        </div>

        {/* Operator information — 검증된 정보만 표기 (사업자등록번호·주소 등은 확인 전까지 미표기) */}
        <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
          <div className="flex gap-1.5">
            <dt className="text-gray-400">이메일</dt>
            <dd>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-navy-700 hover:underline">
                {CONTACT_EMAIL}
              </a>
            </dd>
          </div>
        </dl>

        {/* Copyright */}
        <p className="mt-5 text-xs text-gray-400">© 2026 LawnGuide. All rights reserved.</p>
      </div>
    </footer>
  );
}
