export interface LawRef {
  lawName: string;
  article: number;
  articleSub?: number;
  paragraph?: number;
  clause?: number;
  fullText: string;
  url?: string;
}

export interface AmountData {
  text: string;
  value?: number;
  unit?: string;
  context: string;
}

const LAW_REF_PATTERN = /「([^」]+)」\s*제(\d+)조(?:의(\d+))?(?:\s*제(\d+)항)?(?:\s*제(\d+)호)?/g;
const CONDITION_PATTERNS = [
  /[가-힣]+(?:하는|한|된|되는|받은|받는|있는|없는|않은|못한)\s*경우/g,
  /[가-힣]+\s*(?:경우에는)/g,
  /[가-힣]+\s*여부/g,
  /(?:\d+[만백천억]?\s*원)\s*(?:이상|이하|초과|미만)/g,
  /(?:\d+개월|년|일)\s*(?:이상|이하|이내|이전|이후)/g,
];
const AMOUNT_PATTERNS = [
  /(\d[\d,]*)\s*만?\s*원/g,
  /(\d+)\s*%/g,
  /(\d+)\s*퍼센트/g,
  /(\d+)\s*개월/g,
  /(\d+)\s*일/g,
  /(\d+)\s*년/g,
];

export function extractLawRefs(text: string): LawRef[] {
  const refs: LawRef[] = [];
  let match: RegExpExecArray | null;
  const regex = new RegExp(LAW_REF_PATTERN.source, 'g');

  while ((match = regex.exec(text)) !== null) {
    refs.push({
      lawName: match[1],
      article: parseInt(match[2]),
      articleSub: match[3] ? parseInt(match[3]) : undefined,
      paragraph: match[4] ? parseInt(match[4]) : undefined,
      clause: match[5] ? parseInt(match[5]) : undefined,
      fullText: match[0],
    });
  }

  return refs;
}

export function extractConditions(text: string): string[] {
  const conditions: string[] = [];
  for (const pattern of CONDITION_PATTERNS) {
    const regex = new RegExp(pattern.source, 'g');
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      const cond = match[0].trim();
      if (cond.length > 3 && !conditions.includes(cond)) {
        conditions.push(cond);
      }
    }
  }
  return conditions;
}

export function extractAmounts(text: string): AmountData[] {
  const amounts: AmountData[] = [];
  for (const pattern of AMOUNT_PATTERNS) {
    const regex = new RegExp(pattern.source, 'g');
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      const start = Math.max(0, match.index - 30);
      const end = Math.min(text.length, match.index + match[0].length + 30);
      const context = text.substring(start, end).trim();

      let unit = '원';
      if (match[0].includes('%') || match[0].includes('퍼센트')) unit = '%';
      else if (match[0].includes('개월')) unit = '개월';
      else if (match[0].includes('일')) unit = '일';
      else if (match[0].includes('년')) unit = '년';

      amounts.push({
        text: match[0],
        value: parseInt(match[1].replace(/,/g, '')),
        unit,
        context,
      });
    }
  }
  return amounts;
}

export function extractProcedures(textBlocks: string[]): string[] {
  const procedures: string[] = [];
  const procedurePatterns = [
    /(\d+)\.\s*/,
    /(?:첫째|둘째|셋째|넷째|다섯째)/,
    /(?:먼저|다음으로|그 다음|마지막으로)/,
    /(?:신청|접수|제출|발급|신고|등록|청구)/,
  ];

  for (const block of textBlocks) {
    for (const pattern of procedurePatterns) {
      if (pattern.test(block)) {
        procedures.push(block);
        break;
      }
    }
  }
  return procedures;
}
