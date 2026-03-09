import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import DiagnosisFlow from '@/components/DiagnosisFlow';
import { isValidDomain, getDomainMeta, getQuestions, getBranches, getResults, DOMAINS } from '@/lib/domains';

interface PageProps {
  params: { domain: string };
}

export function generateStaticParams() {
  return DOMAINS.map((d) => ({ domain: d.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const meta = getDomainMeta(params.domain);
  if (!meta) return {};
  return {
    title: `${meta.name} 상황 정리 | 로앤가이드`,
    description: meta.description,
  };
}

export default function DiagnosisPage({ params }: PageProps) {
  if (!isValidDomain(params.domain)) notFound();

  const meta = getDomainMeta(params.domain)!;
  const questionsFile = getQuestions(params.domain);
  const branchesFile = getBranches(params.domain);
  const resultsFile = getResults(params.domain);

  return (
    <div className="bg-gray-50 py-8">
      <div className="container-narrow">
        <div className="mb-6 text-center">
          <span className="text-3xl">{meta.icon}</span>
          <h1 className="mt-2 text-2xl font-bold text-navy-700">{meta.name} 상황 정리</h1>
          <p className="mt-1 text-sm text-gray-500">{meta.description}</p>
        </div>

        <DiagnosisFlow
          questions={questionsFile.questions}
          branches={branchesFile}
          results={resultsFile}
          domainName={meta.name}
        />
      </div>
    </div>
  );
}
