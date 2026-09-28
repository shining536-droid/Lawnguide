import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import ChatBot from '@/components/ChatBot';
import ChatStartTracker from '@/components/ChatStartTracker';
import ChatEntryHero from '@/components/ChatEntryHero';
import { DOMAINS, getQuestions, getBranches, getResults } from '@/lib/domains';
import { loadAllProcedureData } from '@/lib/procedure-data';

/* 첫 화면 예시 질문 — 클릭 시 해당 도메인으로 시작 (클릭 계측은 ExampleQuestions 가 담당) */
const EXAMPLE_QUESTIONS = [
  { text: '사기 당했어요', icon: '🎭', domain: 'fraud' },
  { text: '해고 통보 받았어요', icon: '⚖️', domain: 'dismissal' },
  { text: '이혼하고 싶어요', icon: '💔', domain: 'divorce' },
  { text: '월급이 밀려요', icon: '💰', domain: 'wage' },
  { text: '전세금 못 받겠어요', icon: '🏠', domain: 'jeonse' },
  { text: '교통사고 합의금이 적어요', icon: '🚦', domain: 'traffic-accident' },
];

export const metadata: Metadata = {
  title: 'AI 법률 도우미 | 로앤가이드',
  description:
    '어떤 법률 문제든 대화하듯 편하게 물어보세요. 주요 법률 분야 무료 AI 법률 진단으로 지금 해야 할 일을 3분 안에 정리해드립니다.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.lawnguide.co.kr/chat',
  },
  openGraph: {
    title: 'AI 법률 도우미 | 로앤가이드',
    description:
      '어떤 법률 문제든 대화하듯 편하게 물어보세요. 주요 법률 분야 무료 AI 법률 진단으로 지금 해야 할 일을 3분 안에 정리해드립니다.',
    url: 'https://www.lawnguide.co.kr/chat',
    siteName: '로앤가이드',
    type: 'website',
  },
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

  // Load 기관 절차(procedure) data for result-card augmentation.
  // 톤 안전장치: 단정형 금지, "검토해볼 수 있습니다" 톤 유지.
  const procedureData = loadAllProcedureData();

  // 히어로는 domain 유무와 무관하게 항상 렌더한다.
  // (이전 `showWelcome = !searchParams.domain` 은 블로그 CTA 유입자에게 신뢰요소를 전부 숨겼다.)
  // domain 이 있을 때 무엇을 줄일지는 ChatEntryHero 내부에서 결정한다.
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      <ChatStartTracker domain={searchParams.domain} />
      <ChatEntryHero domain={searchParams.domain} examples={EXAMPLE_QUESTIONS} />
      <ChatBot allDomainData={allDomainData} subtypesData={subtypesData} procedureData={procedureData} initialDomain={searchParams.domain} />
    </div>
  );
}
