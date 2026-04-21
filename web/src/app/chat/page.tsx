import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ChatBot from '@/components/ChatBot';
import { DOMAINS, getQuestions, getBranches, getResults } from '@/lib/domains';

/* 첫 화면 예시 질문 — 클릭 시 해당 도메인으로 시작 */
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
    '어떤 법률 문제든 대화하듯 편하게 물어보세요. 31개 분야 무료 AI 법률 진단으로 지금 해야 할 일을 3분 안에 정리해드립니다.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.lawnguide.co.kr/chat',
  },
  openGraph: {
    title: 'AI 법률 도우미 | 로앤가이드',
    description:
      '어떤 법률 문제든 대화하듯 편하게 물어보세요. 31개 분야 무료 AI 법률 진단으로 지금 해야 할 일을 3분 안에 정리해드립니다.',
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

  const showWelcome = !searchParams.domain;

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      {showWelcome && (
        <section className="border-b border-gray-200 bg-white px-4 pt-6 pb-4">
          <div className="mx-auto max-w-3xl">
            {/* 신뢰 뱃지 */}
            <div className="flex flex-wrap justify-center gap-2 text-[11px] md:text-xs">
              <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-700">
                31개 분야
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
                평균 3분
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-700">
                무료 · 회원가입 없음
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                입력 정보 저장 안 함
              </span>
            </div>

            {/* 예시 질문 6개 */}
            <div className="mt-5">
              <p className="mb-3 text-center text-xs font-medium text-gray-500 md:text-sm">
                이런 상황이시면 눌러보세요
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {EXAMPLE_QUESTIONS.map((ex) => (
                  <Link
                    key={ex.domain}
                    href={`/chat?domain=${ex.domain}`}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-left text-sm text-gray-700 transition-all hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700"
                  >
                    <span className="text-base">{ex.icon}</span>
                    <span className="flex-1 leading-tight">{ex.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      <ChatBot allDomainData={allDomainData} subtypesData={subtypesData} initialDomain={searchParams.domain} />
    </div>
  );
}
