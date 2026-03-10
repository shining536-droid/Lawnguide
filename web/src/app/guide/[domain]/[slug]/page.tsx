import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { isValidDomain, getDomainMeta } from '@/lib/domains';
import { getSpokePage, getSpokePagesByDomain, SPOKE_PAGES } from '@/data/spoke-pages';

interface PageProps {
  params: { domain: string; slug: string };
}

export function generateStaticParams() {
  return SPOKE_PAGES.map((p) => ({
    domain: p.domain,
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getSpokePage(params.domain, params.slug);
  if (!page) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export default function GuideSpokePage({ params }: PageProps) {
  if (!isValidDomain(params.domain)) notFound();
  const page = getSpokePage(params.domain, params.slug);
  if (!page) notFound();
  const domainMeta = getDomainMeta(params.domain);
  const siblings = getSpokePagesByDomain(params.domain).filter((p) => p.slug !== params.slug);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Link href={`/guide/${params.domain}`} className="text-sm text-blue-600 hover:underline mb-2 inline-block">
            ← {domainMeta?.name} 안내
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">{page.keyword}</h1>
          <p className="text-sm text-gray-500 mt-2">{page.type}</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Intro */}
        <section className="bg-blue-50 rounded-xl p-5 text-gray-800 leading-relaxed">
          {page.intro}
        </section>

        {/* Sections */}
        {page.sections.map((section, i) => (
          <section key={i} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex-shrink-0">
                {i + 1}
              </span>
              {section.title}
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</div>
          </section>
        ))}

        {/* Comparison Table */}
        {page.comparison && (
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{page.comparison.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    {page.comparison.headers.map((h, i) => (
                      <th key={i} className="border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-200 px-3 py-2 font-medium text-gray-800">{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="border border-gray-200 px-3 py-2 text-gray-700">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Cases */}
        {page.cases.length > 0 && (
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">관련 판례 참고</h2>
            <div className="space-y-4">
              {page.cases.map((c, i) => (
                <div key={i} className="border-l-4 border-blue-300 pl-4">
                  <p className="font-medium text-gray-800 text-sm">{c.title}</p>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">{c.summary}</p>
                  <p className="text-blue-700 mt-2 text-sm">{c.takeaway}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">자주 묻는 질문</h2>
          <div className="divide-y divide-gray-100">
            {page.faq.map((item, i) => (
              <details key={i} className="group py-3">
                <summary className="flex items-start gap-2 cursor-pointer list-none text-gray-800 font-medium text-sm hover:text-blue-700">
                  <span className="text-blue-500 font-bold mt-0.5">Q.</span>
                  {item.question}
                </summary>
                <p className="mt-2 ml-6 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-center">
          <p className="text-white text-lg font-semibold mb-3">{page.cta.text}</p>
          <Link
            href={page.cta.link}
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            진단 시작하기
          </Link>
        </section>

        {/* Related Spoke Pages */}
        {siblings.length > 0 && (
          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">같은 주제 다른 글</h2>
            <ul className="space-y-2">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/guide/${s.domain}/${s.slug}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {s.keyword}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Internal Links */}
        <nav className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">관련 페이지</h3>
          <ul className="flex flex-wrap gap-3">
            {page.internalLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="inline-block text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Disclaimer */}
        <footer className="text-xs text-gray-400 text-center py-4 border-t border-gray-100">
          이 페이지는 법률 정보 안내 목적으로 작성되었으며, 법률 자문이 아닙니다. 구체적인 사안은 반드시 전문가와 상담하세요.
        </footer>
      </div>
    </main>
  );
}
