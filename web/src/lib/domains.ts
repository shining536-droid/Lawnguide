import fs from 'fs';
import path from 'path';

export interface DomainMeta {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const DOMAINS: DomainMeta[] = [
  { id: 'jeonse', name: '주택임대차', description: '보증금을 못 받았거나 계약 문제가 있을 때', icon: '🏠' },
  { id: 'jeonse-fraud', name: '전세사기 피해', description: '전세사기가 의심되는 상황일 때', icon: '🚨' },
  { id: 'sangga', name: '상가건물 임대차', description: '상가 보증금, 권리금, 계약갱신 문제가 있을 때', icon: '🏪' },
  { id: 'wage', name: '임금', description: '임금 체불이나 수당 미지급 문제가 있을 때', icon: '💰' },
  { id: 'retirement', name: '퇴직급여', description: '퇴직금을 받지 못했거나 산정이 궁금할 때', icon: '📋' },
  { id: 'dismissal', name: '해고근로자', description: '해고 통보를 받았거나 부당해고가 의심될 때', icon: '⚖️' },
  { id: 'small-claims', name: '소액사건재판', description: '지급명령이나 소액소송을 검토하고 있을 때', icon: '📄' },
  { id: 'rehabilitation', name: '개인회생', description: '채무가 많아 회생 절차를 알아보고 있을 때', icon: '🔄' },
  { id: 'bankruptcy', name: '개인파산', description: '파산·면책 절차를 검토하고 있을 때', icon: '📉' },
  { id: 'inheritance', name: '상속', description: '상속 순위, 상속세, 상속포기를 확인하고 싶을 때', icon: '📜' },
  { id: 'divorce', name: '이혼', description: '이혼 절차, 재산분할, 양육권을 정리하고 싶을 때', icon: '💔' },
  { id: 'child-support', name: '양육비', description: '양육비 산정이나 이행확보가 필요할 때', icon: '👶' },
  { id: 'neighbor-dispute', name: '이웃 간 분쟁', description: '층간소음, 하자, 경계 분쟁이 있을 때', icon: '🏘️' },
  { id: 'defamation', name: '명예훼손/모욕', description: '온라인·오프라인 명예훼손이나 모욕 관련 상황을 정리할 때', icon: '💻' },
  { id: 'real-estate-sale', name: '부동산 매매', description: '매매계약 해제, 하자, 중개 분쟁이 있을 때', icon: '🏗️' },
  { id: 'real-estate-auction', name: '부동산 경매', description: '경매 절차, 배당, 명도 문제가 있을 때', icon: '🔨' },
  { id: 'industrial-accident1', name: '산업재해보상보험 I', description: '업무상 재해를 입었을 때', icon: '🏭' },
  { id: 'industrial-accident2', name: '산업재해보상보험 II', description: '산재 보험급여를 신청하고 싶을 때', icon: '🩺' },
  { id: 'unemployment', name: '실업급여', description: '실업급여 수급자격이나 신청 절차가 궁금할 때', icon: '📋' },
  { id: 'digital-sex-crime', name: '디지털성범죄', description: '불법촬영, 유포, 딥페이크 등 디지털 성범죄 문제가 있을 때', icon: '📱' },
  { id: 'sex-crime', name: '성범죄', description: '성폭행, 성추행 등 성범죄 관련 상황을 정리하고 싶을 때', icon: '🛡️' },
  { id: 'sexual-harassment', name: '성희롱', description: '직장 내 성희롱 등 성희롱 문제가 있을 때', icon: '🏢' },
  { id: 'stalking', name: '스토킹', description: '반복적 따라다님, 연락 등 스토킹 피해가 있을 때', icon: '🚷' },
  { id: 'assault', name: '폭행', description: '폭행, 상해, 협박 등의 상황을 정리하고 싶을 때', icon: '⚠️' },
  { id: 'child-sex-crime', name: '아동성범죄', description: '아동·청소년 대상 성범죄 관련 상황일 때', icon: '🧒' },
  { id: 'school-violence', name: '학교폭력', description: '학교폭력 피해나 대응이 필요할 때', icon: '🏫' },
  { id: 'fraud', name: '사기/재산범죄', description: '사기 피해를 입었거나 사기 혐의를 받고 있을 때', icon: '🎭' },
  { id: 'dui', name: '음주운전', description: '음주운전 단속이나 사고 관련 대응을 준비할 때', icon: '🚗' },
  { id: 'traffic-accident', name: '교통사고', description: '교통사고 후 합의, 보험, 과실 문제를 정리할 때', icon: '🚦' },
  { id: 'drug-crime', name: '마약범죄', description: '마약 관련 수사나 혐의 대응을 준비할 때', icon: '💊' },
  { id: 'prostitution', name: '성매매', description: '성매매 관련 피해 지원이나 혐의 대응이 필요할 때', icon: '🛡️' },
];

function dataDir() {
  // In production build, data is copied to public/data
  // In dev, read from parent directories
  return path.join(process.cwd(), '..', 'domains');
}

function kbDir() {
  return path.join(process.cwd(), '..', 'kb');
}

export interface Question {
  id: string;
  field: string;
  stage: string;
  text: string;
  type: string; // enum | boolean | range | region | multiselect
  options: { value: string | boolean; label: string }[];
  next: Record<string, string>;
  description?: string;
}

export interface DocumentItem {
  label: string;
  status: 'has' | 'need';
  note?: string;
}

export interface QuestionsFile {
  domain: string;
  version: string;
  totalQuestions: number;
  questions: Question[];
}

export interface BranchType {
  id: string;
  name: string;
  description: string;
  conditions: Record<string, string | string[] | boolean>;
  priority: number;
}

export interface BranchesFile {
  domain: string;
  version: string;
  types: BranchType[];
  resolution_order: string[];
}

export interface ResultAction {
  today?: string[];
  this_week?: string[];
  caution?: string[];
  if_no_response?: string[];
  important?: string[];
  do_not?: string[];
  checklist?: string[];
  [key: string]: string[] | undefined;
}

export interface Connection {
  name: string;
  phone?: string;
  url?: string;
  note?: string;
}

export interface RelatedSystem {
  name: string;
  description: string;
}

export interface KeyCheckpoint {
  title: string;
  desc: string;
}

export interface TimelineStep {
  label: string;
  desc: string;
  active?: boolean;
}

export interface FirstAction {
  title: string;
  items: string[];
  buttons?: { label: string; target: string }[];
}

export interface ResultEntry {
  type_id: string;
  type_name: string;
  status_summary: string;
  status_summary_template?: string;
  risk_level: string;
  first_action?: FirstAction;
  key_checkpoints?: KeyCheckpoint[];
  timeline_steps?: TimelineStep[];
  actions: ResultAction;
  documents: string[] | DocumentItem[];
  checklist_priority?: DocumentItem[];
  checklist_optional?: DocumentItem[];
  related_systems: RelatedSystem[];
  connections: {
    public: Connection[];
    professional: { type: string; note?: string; description?: string }[];
  };
  legal_basis: string[];
  disclaimer: string;
  safety_warning?: string;
}

export interface ResultsFile {
  domain: string;
  version: string;
  results: ResultEntry[];
}

export interface LegalFact {
  id: string;
  topic: string;
  statement: string;
  law_refs: string[];
  prerequisites: string[];
  exceptions?: string[];
  source_pages: string[];
}

export interface LegalFactsFile {
  domain: string;
  version: string;
  totalFacts: number;
  facts: LegalFact[];
}

function readJSON<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

export function getQuestions(domain: string): QuestionsFile {
  return readJSON<QuestionsFile>(path.join(dataDir(), domain, 'questions.json'));
}

export function getBranches(domain: string): BranchesFile {
  return readJSON<BranchesFile>(path.join(dataDir(), domain, 'branches.json'));
}

export function getResults(domain: string): ResultsFile {
  return readJSON<ResultsFile>(path.join(dataDir(), domain, 'results.json'));
}

export function getLegalFacts(domain: string): LegalFactsFile {
  return readJSON<LegalFactsFile>(path.join(kbDir(), domain, 'legal_facts.json'));
}

export function getDomainMeta(domain: string): DomainMeta | undefined {
  return DOMAINS.find((d) => d.id === domain);
}

export function isValidDomain(domain: string): boolean {
  return DOMAINS.some((d) => d.id === domain);
}

// Resolve which result type matches given answers
export function resolveResult(
  branches: BranchesFile,
  answers: Record<string, string | boolean>
): string | null {
  for (const typeId of branches.resolution_order) {
    const branchType = branches.types.find((t) => t.id === typeId);
    if (!branchType) continue;

    let match = true;
    for (const [field, expected] of Object.entries(branchType.conditions)) {
      const actual = answers[field];
      if (actual === undefined) {
        match = false;
        break;
      }
      if (Array.isArray(expected)) {
        if (!expected.includes(String(actual))) {
          match = false;
          break;
        }
      } else {
        if (String(actual) !== String(expected)) {
          match = false;
          break;
        }
      }
    }
    if (match) return typeId;
  }
  // Fallback: return last type
  const lastType = branches.types[branches.types.length - 1];
  return lastType?.id ?? null;
}

// Generate a URL-safe slug from a topic name
// Keep the original topic text as-is; Next.js handles encoding in URLs
export function topicToSlug(topic: string): string {
  return topic;
}

export function slugToTopic(slug: string): string {
  return decodeURIComponent(slug);
}

// Get unique topics from legal facts for hub/spoke pages
export function getUniqueTopics(facts: LegalFactsFile): { topic: string; slug: string; factCount: number; firstFact: LegalFact }[] {
  const topicMap = new Map<string, { count: number; first: LegalFact }>();
  for (const fact of facts.facts) {
    const existing = topicMap.get(fact.topic);
    if (existing) {
      existing.count++;
    } else {
      topicMap.set(fact.topic, { count: 1, first: fact });
    }
  }
  return Array.from(topicMap.entries()).map(([topic, data]) => ({
    topic,
    slug: topicToSlug(topic),
    factCount: data.count,
    firstFact: data.first,
  }));
}

// Get all facts for a given topic
export function getFactsByTopic(facts: LegalFactsFile, topic: string): LegalFact[] {
  return facts.facts.filter((f) => f.topic === topic);
}
