import type { Metadata } from 'next';
import ChatBot from '@/components/ChatBot';
import { DOMAINS, getQuestions, getBranches, getResults } from '@/lib/domains';

export const metadata: Metadata = {
  title: 'AI 법률 도우미 | 로앤가이드',
  description:
    '어떤 법률 문제든 대화하듯 편하게 물어보세요. 31개 분야 무료 AI 법률 진단으로 지금 해야 할 일을 1분 안에 정리해드립니다.',
  robots: { index: true, follow: true },
};

interface PageProps {
  searchParams: { domain?: string };
}

export default function ChatPage({ searchParams }: PageProps) {
  // Pre-load all domain data server-side for client use
  const allDomainData: Record<
    string,
    {
      questions: ReturnType<typeof getQuestions>['questions'];
      branches: ReturnType<typeof getBranches>;
      results: ReturnType<typeof getResults>;
    }
  > = {};

  for (const domain of DOMAINS) {
    try {
      const questionsFile = getQuestions(domain.id);
      const branchesFile = getBranches(domain.id);
      const resultsFile = getResults(domain.id);
      allDomainData[domain.id] = {
        questions: questionsFile.questions,
        branches: branchesFile,
        results: resultsFile,
      };
    } catch {
      // Skip domains with missing data
    }
  }

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      <ChatBot allDomainData={allDomainData} initialDomain={searchParams.domain} />
    </div>
  );
}
