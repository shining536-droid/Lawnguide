/**
 * 19개 도메인 진단 플로우 자동 테스트
 *
 * 테스트 항목:
 * 1. questions.json 구조 검증 (next 필드, totalQuestions 일치 등)
 * 2. branches.json 구조 검증 (resolution_order, conditions 유효성)
 * 3. results.json 구조 검증 (필수 필드, 결과 유형 매칭)
 * 4. 첫 번째 옵션만 선택하며 끝까지 진행 시뮬레이션
 * 5. 결과 카드 필수 섹션 존재 확인
 *
 * 실행: npx ts-node scripts/test-diagnosis-flow.ts
 */

import fs from 'fs';
import path from 'path';

const DOMAINS_DIR = path.join(__dirname, '..', 'domains');

interface Option {
  value: string | boolean;
  label: string;
}

interface Question {
  id: string;
  field: string;
  stage: string;
  text: string;
  type: string;
  options: Option[];
  next?: Record<string, string>;
  _next?: string;
  description?: string;
}

interface QuestionsFile {
  _draft: boolean;
  domain: string;
  version: string;
  totalQuestions: number;
  questions: Question[];
}

interface BranchType {
  id: string;
  name: string;
  conditions: Record<string, string | string[] | boolean>;
  priority: number;
}

interface BranchesFile {
  _draft: boolean;
  domain: string;
  types: BranchType[];
  resolution_order: string[];
}

interface ResultEntry {
  type_id: string;
  type_name: string;
  status_summary: string;
  risk_level: string;
  actions: Record<string, string[]>;
  documents: Array<{ label: string; status: string; note?: string }> | string[];
  connections: {
    public: Array<{ name: string; phone?: string; url?: string; note?: string }>;
    professional: Array<{ type: string; note?: string }>;
  };
  related_systems?: Array<{ name: string; description: string }>;
  legal_basis?: string[];
  disclaimer: string;
}

interface ResultsFile {
  _draft: boolean;
  domain: string;
  results: ResultEntry[];
}

interface TestResult {
  domain: string;
  passed: boolean;
  errors: string[];
  warnings: string[];
  questionCount: number;
  resultType: string | null;
  flowCompleted: boolean;
}

function readJSON<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function resolveResult(branches: BranchesFile, answers: Record<string, string>): string | null {
  for (const typeId of branches.resolution_order) {
    const branchType = branches.types.find((t) => t.id === typeId);
    if (!branchType) continue;
    let match = true;
    for (const [field, expected] of Object.entries(branchType.conditions)) {
      const actual = answers[field];
      if (actual === undefined) { match = false; break; }
      if (Array.isArray(expected)) {
        if (!expected.includes(actual)) { match = false; break; }
      } else {
        if (actual !== String(expected)) { match = false; break; }
      }
    }
    if (match) return typeId;
  }
  const lastType = branches.types[branches.types.length - 1];
  return lastType?.id ?? null;
}

function testDomain(domain: string): TestResult {
  const result: TestResult = {
    domain,
    passed: true,
    errors: [],
    warnings: [],
    questionCount: 0,
    resultType: null,
    flowCompleted: false,
  };

  const domainDir = path.join(DOMAINS_DIR, domain);

  // Check files exist
  for (const file of ['questions.json', 'branches.json', 'results.json']) {
    if (!fs.existsSync(path.join(domainDir, file))) {
      result.errors.push(`${file} 파일 없음`);
      result.passed = false;
      return result;
    }
  }

  let questions: QuestionsFile;
  let branches: BranchesFile;
  let results: ResultsFile;

  try {
    questions = readJSON<QuestionsFile>(path.join(domainDir, 'questions.json'));
    branches = readJSON<BranchesFile>(path.join(domainDir, 'branches.json'));
    results = readJSON<ResultsFile>(path.join(domainDir, 'results.json'));
  } catch (e: any) {
    result.errors.push(`JSON 파싱 실패: ${e.message}`);
    result.passed = false;
    return result;
  }

  result.questionCount = questions.questions.length;

  // 1. questions.json 검증
  if (questions.totalQuestions !== questions.questions.length) {
    result.errors.push(
      `totalQuestions(${questions.totalQuestions}) != 실제(${questions.questions.length})`
    );
  }

  const questionIds = new Set(questions.questions.map((q) => q.id));

  for (const q of questions.questions) {
    // next 필드 존재 확인
    if (!q.next && !q._next) {
      result.errors.push(`${q.id}: next 필드 없음`);
    }

    // multiselect인 경우 _next 확인
    if (q.type === 'multiselect') {
      if (q.next && !q.next['_next']) {
        result.errors.push(`${q.id}: multiselect인데 next._next 없음`);
      }
      if (!q.next && q._next) {
        result.errors.push(`${q.id}: _next가 top-level에 있음 (next 안에 있어야 함)`);
      }
    }

    // next 값이 유효한 질문 ID 또는 RESULT인지
    if (q.next) {
      for (const [key, val] of Object.entries(q.next)) {
        if (val !== 'RESULT' && !val.startsWith('REDIRECT_') && !questionIds.has(val)) {
          result.errors.push(`${q.id}: next['${key}']='${val}' → 존재하지 않는 질문 ID`);
        }
      }
    }

    // 옵션이 있는지
    if (!q.options || q.options.length === 0) {
      result.errors.push(`${q.id}: 옵션이 없음`);
    }

    // enum인 경우 모든 옵션 값이 next에 매핑되는지
    if (q.type === 'enum' && q.next) {
      for (const opt of q.options) {
        const v = String(opt.value);
        if (!(v in q.next)) {
          result.warnings.push(`${q.id}: 옵션 '${v}'가 next에 매핑 안 됨`);
        }
      }
    }
  }

  // 2. branches.json 검증
  const branchTypeIds = new Set(branches.types.map((t) => t.id));

  for (const typeId of branches.resolution_order) {
    if (!branchTypeIds.has(typeId)) {
      result.errors.push(`branches: resolution_order의 '${typeId}'가 types에 없음`);
    }
  }

  if (!branchTypeIds.has('TYPE_OK')) {
    result.warnings.push('branches: TYPE_OK가 없음');
  }

  if (branches.types.length < 4) {
    result.warnings.push(`branches: 결과 유형이 ${branches.types.length}개 (최소 4개 권장)`);
  }

  // conditions의 필드가 질문 필드에 있는지
  const questionFields = new Set(questions.questions.map((q) => q.field));
  for (const bt of branches.types) {
    for (const field of Object.keys(bt.conditions)) {
      if (!questionFields.has(field)) {
        result.warnings.push(
          `branches: ${bt.id}의 condition '${field}'가 질문 필드에 없음`
        );
      }
    }
  }

  // 3. results.json 검증
  const resultTypeIds = new Set(results.results.map((r) => r.type_id));

  for (const typeId of branches.resolution_order) {
    if (!resultTypeIds.has(typeId)) {
      result.errors.push(`results: '${typeId}'에 대한 결과가 없음`);
    }
  }

  for (const r of results.results) {
    // 필수 필드 확인
    if (!r.status_summary) result.errors.push(`results ${r.type_id}: status_summary 없음`);
    if (!r.risk_level) result.errors.push(`results ${r.type_id}: risk_level 없음`);
    if (!r.disclaimer) result.errors.push(`results ${r.type_id}: disclaimer 없음`);

    // 톤 규칙: "~형" 금지
    if (r.type_name.endsWith('형')) {
      result.warnings.push(`results ${r.type_id}: type_name '${r.type_name}'이 '형'으로 끝남`);
    }

    // TYPE_OK가 아닌 경우 필수 섹션
    if (r.type_id !== 'TYPE_OK') {
      if (!r.actions?.today || r.actions.today.length === 0) {
        result.warnings.push(`results ${r.type_id}: 오늘 확인할 사항 없음`);
      }
      if (!r.connections?.public || r.connections.public.length === 0) {
        result.warnings.push(`results ${r.type_id}: 무료 기관 없음`);
      }
    }
  }

  // 4. 첫 번째 옵션 선택 시뮬레이션
  const answers: Record<string, string> = {};
  let currentIndex = 0;
  let steps = 0;
  const maxSteps = 30;

  while (steps < maxSteps) {
    steps++;
    const q = questions.questions[currentIndex];
    if (!q) {
      result.errors.push(`시뮬레이션: index ${currentIndex}에 질문이 없음`);
      break;
    }

    // 첫 번째 옵션 선택 (multiselect는 빈 선택)
    if (q.type === 'multiselect') {
      answers[q.field] = '';
      const next = q.next;
      const nextId = next?.['_next'] ?? (next ? Object.values(next)[0] : undefined);
      if (!nextId || nextId === 'RESULT') {
        result.flowCompleted = true;
        break;
      }
      const nextIndex = questions.questions.findIndex((qq) => qq.id === nextId);
      if (nextIndex < 0) {
        result.errors.push(`시뮬레이션: ${q.id}의 _next='${nextId}' → 질문 없음`);
        break;
      }
      currentIndex = nextIndex;
    } else {
      const firstValue = String(q.options[0]?.value ?? '');
      answers[q.field] = firstValue;
      const nextId = q.next?.[firstValue] ?? q.next?.[String(firstValue)];
      if (!nextId || nextId === 'RESULT') {
        result.flowCompleted = true;
        break;
      }
      if (nextId.startsWith('REDIRECT_')) {
        result.flowCompleted = true;
        result.warnings.push(`시뮬레이션: ${q.id}에서 REDIRECT 발생 (${nextId})`);
        break;
      }
      const nextIndex = questions.questions.findIndex((qq) => qq.id === nextId);
      if (nextIndex < 0) {
        result.errors.push(`시뮬레이션: ${q.id}의 next='${nextId}' → 질문 없음`);
        break;
      }
      currentIndex = nextIndex;
    }
  }

  if (steps >= maxSteps) {
    result.errors.push(`시뮬레이션: ${maxSteps}단계 초과 (무한루프 의심)`);
  }

  // 5. 결과 매칭
  if (result.flowCompleted) {
    const resolvedTypeId = resolveResult(branches, answers);
    result.resultType = resolvedTypeId;

    if (resolvedTypeId) {
      const matchedResult = results.results.find((r) => r.type_id === resolvedTypeId);
      if (!matchedResult) {
        result.errors.push(`결과 매칭: '${resolvedTypeId}'에 대한 결과 없음`);
      } else {
        // 필수 섹션 확인 (TYPE_OK 제외)
        if (resolvedTypeId !== 'TYPE_OK') {
          if (!matchedResult.status_summary) result.errors.push('결과: 현재 상황 요약 없음');
          if (!matchedResult.actions?.today?.length) result.warnings.push('결과: 오늘 확인할 사항 없음');
          if (!matchedResult.documents?.length) result.warnings.push('결과: 체크리스트 없음');
          if (!matchedResult.connections?.public?.length) result.warnings.push('결과: 무료 기관 없음');
        }
      }
    } else {
      result.errors.push('결과 매칭: 어떤 유형에도 매칭되지 않음');
    }
  }

  if (result.errors.length > 0) result.passed = false;

  return result;
}

// === MAIN ===
console.log('=== 19개 도메인 진단 플로우 자동 테스트 ===\n');

const domains = fs.readdirSync(DOMAINS_DIR).filter((d) => {
  const dir = path.join(DOMAINS_DIR, d);
  return fs.statSync(dir).isDirectory() && fs.existsSync(path.join(dir, 'questions.json'));
});

console.log(`발견된 도메인: ${domains.length}개\n`);

let totalPassed = 0;
let totalFailed = 0;
const allResults: TestResult[] = [];

for (const domain of domains.sort()) {
  const testResult = testDomain(domain);
  allResults.push(testResult);

  const icon = testResult.passed ? '\u2705' : '\u274C';
  const flowIcon = testResult.flowCompleted ? '\u2705' : '\u274C';
  console.log(
    `${icon} ${domain.padEnd(24)} 질문:${String(testResult.questionCount).padStart(2)} | ` +
    `플로우:${flowIcon} | 결과:${(testResult.resultType ?? 'N/A').padEnd(18)}`
  );

  if (testResult.errors.length > 0) {
    for (const err of testResult.errors) {
      console.log(`   \u274C ${err}`);
    }
  }
  if (testResult.warnings.length > 0) {
    for (const warn of testResult.warnings) {
      console.log(`   \u26A0 ${warn}`);
    }
  }

  if (testResult.passed) totalPassed++;
  else totalFailed++;
}

console.log('\n=== 요약 ===');
console.log(`전체: ${domains.length}개 | 통과: ${totalPassed}개 | 실패: ${totalFailed}개`);

if (totalFailed > 0) {
  console.log('\n실패한 도메인:');
  for (const r of allResults.filter((r) => !r.passed)) {
    console.log(`  - ${r.domain}: ${r.errors.join(', ')}`);
  }
  process.exit(1);
} else {
  console.log('\n모든 도메인 테스트 통과!');
  process.exit(0);
}
