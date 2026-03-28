import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
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

function loadSubtypesData(): Record<string, unknown> {
  const merged: Record<string, unknown> = {};
  const chatConfigDir = path.join(process.cwd(), '..', 'domains', 'chat-config');

  for (const filename of ['subtypes.json', 'subtypes-2.json']) {
    try {
      const filePath = path.join(chatConfigDir, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(raw);
      // Merge all domain keys except _meta
      for (const [key, value] of Object.entries(data)) {
        if (key === '_meta') continue;
        merged[key] = value;
      }
    } catch {
      // Skip missing files
    }
  }

  return merged;
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

  // Load subtypes data for new multi-step flow
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subtypesData = loadSubtypesData() as any;

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      <ChatBot allDomainData={allDomainData} subtypesData={subtypesData} initialDomain={searchParams.domain} />
    </div>
  );
}
