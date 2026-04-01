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
  const domainMeta = getDomainMeta(params.domain);
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `https://www.lawnguide.co.kr/guide/${params.domain}/${params.slug}`,
    },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      url: `https://www.lawnguide.co.kr/guide/${params.domain}/${params.slug}`,
      siteName: '로앤가이드',
      type: 'article',
    },
  };
}

export default function GuideSpokePage({ params }: PageProps) {
  if (!isValidDomain(params.domain)) notFound();
  const page = getSpokePage(params.domain, params.slug);
  if (!page) notFound();
  const domainMeta = getDomainMeta(params.domain);
  const siblings = getSpokePagesByDomain(params.domain).filter((p) => p.slug !== params.slug);

  // Structured Data: Article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.keyword,
    description: page.meta.description,
    url: `https://www.lawnguide.co.kr/guide/${params.domain}/${params.slug}`,
    publisher: {
      '@type': 'Organization',
      name: '로앤가이드',
      url: 'https://www.lawnguide.co.kr',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.lawnguide.co.kr/guide/${params.domain}/${params.slug}`,
    },
    about: {
      '@type': 'Thing',
      name: domainMeta?.name || params.domain,
    },
  };

  // Structured Data: BreadcrumbList
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://www.lawnguide.co.kr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${domainMeta?.name || params.domain} 안내`,
        item: `https://www.lawnguide.co.kr/guide/${params.domain}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.keyword,
        item: `https://www.lawnguide.co.kr/guide/${params.domain}/${params.slug}`,
      },
    ],
  };

  // Structured Data: FAQPage
  const faqJsonLd = page.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer.replace(/<[^>]*>/g, ''),
      },
    })),
  } : null;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
          <div dangerouslySetInnerHTML={{ __html: page.intro }} />
        </section>

        {/* Timeline Box - 해결 순서 한눈에 보기 */}
        {page.timelineSteps && page.timelineSteps.length > 0 && (
          <section className="bg-gray-100 rounded-xl p-5">
            <p className="text-sm font-semibold text-gray-600 mb-2">해결 순서 한눈에 보기</p>
            <div className="flex flex-wrap items-center gap-1 text-sm text-gray-800">
              {page.timelineSteps.map((step, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span className="bg-white px-3 py-1 rounded-full border border-gray-200 font-medium">{step}</span>
                  {i < page.timelineSteps!.length - 1 && <span className="text-gray-400">→</span>}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Sections with Mid-CTA after 2nd section */}
        {page.sections.map((section, i) => (
          <div key={i}>
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div
                className="text-gray-700 leading-relaxed spoke-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </section>

            {/* Mid CTA - after 2nd section (index 1) */}
            {i === 1 && (
              <section className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-10 text-center">
                <p className="text-gray-800 font-medium mb-2">
                  <strong style={{ color: '#D97706' }}>1분</strong> 안에{' '}
                  <strong style={{ color: '#D97706' }}>{page.ctaKeyword}</strong> 확인하기
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  <strong style={{ color: '#D97706' }}>무료 법률기관</strong>과{' '}
                  <strong style={{ color: '#D97706' }}>전문가</strong>도 함께{' '}
                  <strong style={{ color: '#D97706' }}>안내</strong>해드립니다.
                </p>
                <Link
                  href={`/diagnosis/${page.domain}`}
                  className="inline-block bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  지금 시작하기 →
                </Link>
              </section>
            )}
          </div>
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

        {/* FAQ - first 2 open by default */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">자주 묻는 질문</h2>
          <div className="divide-y divide-gray-100">
            {page.faq.map((item, i) => (
              <details key={i} className="group py-3" {...(i < 2 ? { open: true } : {})}>
                <summary className="flex items-start gap-2 cursor-pointer list-none text-gray-800 font-medium text-sm hover:text-blue-700">
                  <span className="text-blue-500 font-bold mt-0.5">Q.</span>
                  {item.question}
                </summary>
                <div
                  className="mt-2 ml-6 text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-center">
          <p className="text-white text-lg font-semibold mb-2">
            <strong style={{ color: '#D97706' }}>1분</strong> 안에{' '}
            <strong style={{ color: '#D97706' }}>{page.ctaKeyword}</strong> 확인하기
          </p>
          <p className="text-blue-100 text-sm mb-3">
            <strong style={{ color: '#D97706' }}>무료 법률기관</strong>과{' '}
            <strong style={{ color: '#D97706' }}>전문가</strong>도 함께{' '}
            <strong style={{ color: '#D97706' }}>안내</strong>해드립니다.
          </p>
          <Link
            href={page.cta.link}
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            지금 시작하기 →
          </Link>
        </section>

        {/* Related Spoke Pages - Smart Recommendations */}
        {siblings.length > 0 && (() => {
          // Score siblings by relevance: same type > same perspective > different
          const scored = siblings.map((s) => {
            let score = 0;
            if (s.type === page.type) score += 2;
            if (s.perspective && page.perspective && s.perspective === page.perspective) score += 1;
            // Randomize within same score for variety
            score += Math.random() * 0.5;
            return { ...s, score };
          }).sort((a, b) => b.score - a.score);
          const recommended = scored.slice(0, 3);
          const rest = scored.slice(3);
          return (
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">📌 이 글을 읽은 분이 함께 본 글</h2>
              <ul className="space-y-3">
                {recommended.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/guide/${s.domain}/${s.slug}`}
                      className="flex items-start gap-2 text-blue-600 hover:text-blue-800 hover:underline text-sm"
                    >
                      <span className="text-blue-400 mt-0.5">▸</span>
                      <span>{s.questionKeyword || s.keyword}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {rest.length > 0 && (
                <details className="mt-4">
                  <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                    {domainMeta?.name} 관련 글 {rest.length}개 더보기
                  </summary>
                  <ul className="mt-2 space-y-2">
                    {rest.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/guide/${s.domain}/${s.slug}`}
                          className="text-blue-600 hover:underline text-sm"
                        >
                          {s.questionKeyword || s.keyword}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </section>
          );
        })()}

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
