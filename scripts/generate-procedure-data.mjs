// Generate web/src/data/procedure-data-generated.ts from kb/{domain}/*_procedure.json
// Run: node scripts/generate-procedure-data.mjs
//
// 이유: /chat 페이지가 dynamic 이라 procedure-data.ts 의 fs.readFileSync 가
// 런타임 코드로 분류 → Next.js File Tracing 이 kb/ 전체를 함수 번들에 포함 →
// Vercel 250MB 한도 초과. 이 스크립트로 빌드타임에 사전 생성, 런타임 fs 제거.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const KB_DIR = path.join(ROOT, 'kb');
const OUT = path.join(ROOT, 'web', 'src', 'data', 'procedure-data-generated.ts');

const DOMAIN_FILES = {
  jeonse: ['hug_procedure.json', 'jeonsesagi_procedure.json', 'klac_procedure.json'],
  'jeonse-fraud': ['hug_procedure.json', 'jeonsesagi_procedure.json', 'klac_procedure.json'],
  'child-support': ['csa_procedure.json', 'family_court_procedure.json'],
  fraud: ['police_kisa_procedure.json', 'fss_procedure.json', 'kca_procedure.json'],
  stalking: ['police_kisa_procedure.json'],
  'digital-sex-crime': ['police_kisa_procedure.json', 'pidrc_procedure.json'],
  wage: ['molab_procedure.json'],
  dismissal: ['nlrc_procedure.json', 'molab_procedure.json'],
  retirement: ['molab_procedure.json'],
  'industrial-accident': ['comwel_procedure.json'],
  rehabilitation: ['klac_procedure.json'],
  bankruptcy: ['klac_procedure.json'],
  'small-claims': ['klac_procedure.json', 'kca_procedure.json', 'comm_procedure.json'],
  divorce: ['family_court_procedure.json'],
  defamation: ['pidrc_procedure.json'],
  'school-violence': ['sv_procedure.json'],
  'neighbor-dispute': ['ecc_procedure.json'],
  // 2026-04-26: 4순위 부족 도메인 보강 (8개)
  assault: ['criminal_procedure.json'],
  'sex-crime': ['criminal_procedure.json'],
  'child-sex-crime': ['criminal_procedure.json'],
  prostitution: ['criminal_procedure.json'],
  'drug-crime': ['criminal_procedure.json'],
  dui: ['criminal_procedure.json'],
  inheritance: ['family_court_procedure.json'],
  sangga: ['sangga_procedure.json'],
};

function aggregate(domain, files) {
  const sources = [];
  for (const filename of files) {
    const filePath = path.join(KB_DIR, domain, filename);
    if (!fs.existsSync(filePath)) continue;
    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      sources.push(JSON.parse(raw));
    } catch (e) {
      console.error(`  ⚠️ ${domain}/${filename}:`, e.message);
    }
  }
  if (sources.length === 0) return null;

  const all_flows = [];
  const agency_names = [];
  const required_documents = [];
  const key_deadlines = [];
  const source_urls = [];
  const common_mistakes = [];
  const contacts = {};
  const seenDocCats = new Set();
  const seenDeadlines = new Set();
  const seenUrls = new Set();
  const seenMistakes = new Set();

  for (const src of sources) {
    if (src.source) agency_names.push(src.source);
    if (Array.isArray(src.procedures)) {
      for (const p of src.procedures) {
        if (p && Array.isArray(p.steps) && p.steps.length > 0) {
          all_flows.push({
            id: p.id || '',
            name: p.name || '',
            applies_to: p.applies_to || undefined,
            steps: p.steps.map((s) => ({
              step: s.step ?? 0,
              title: s.title || '',
              description: s.description || undefined,
              deadline: s.deadline || undefined,
            })),
          });
        }
        // per-procedure documents (hug)
        if (Array.isArray(p?.documents)) {
          for (const cat of p.documents) {
            if (!cat?.category || seenDocCats.has(cat.category)) continue;
            seenDocCats.add(cat.category);
            required_documents.push({ category: cat.category, items: cat.items || [] });
          }
        }
        // per-procedure required_documents (klac 일부)
        if (Array.isArray(p?.required_documents)) {
          for (const cat of p.required_documents) {
            if (!cat?.category || seenDocCats.has(cat.category)) continue;
            seenDocCats.add(cat.category);
            required_documents.push({ category: cat.category, items: cat.items || [] });
          }
        }
      }
    }
    // top-level required_documents
    if (Array.isArray(src.required_documents)) {
      for (const cat of src.required_documents) {
        if (!cat?.category || seenDocCats.has(cat.category)) continue;
        seenDocCats.add(cat.category);
        required_documents.push({ category: cat.category, items: cat.items || [] });
      }
    }
    if (Array.isArray(src.key_deadlines)) {
      for (const d of src.key_deadlines) {
        const key = `${d.label}::${d.value}`;
        if (seenDeadlines.has(key)) continue;
        seenDeadlines.add(key);
        key_deadlines.push({ label: d.label, value: d.value, source: d.source || undefined });
      }
    }
    if (Array.isArray(src.source_urls)) {
      for (const u of src.source_urls) {
        if (!u || seenUrls.has(u)) continue;
        seenUrls.add(u);
        source_urls.push(u);
      }
    }
    if (Array.isArray(src.common_mistakes)) {
      for (const m of src.common_mistakes) {
        if (!m || seenMistakes.has(m)) continue;
        seenMistakes.add(m);
        common_mistakes.push(m);
      }
    }
    // contact / contacts
    const contactObj = src.contact || src.contacts;
    if (contactObj && typeof contactObj === 'object') {
      for (const [k, v] of Object.entries(contactObj)) {
        if (!contacts[k]) contacts[k] = v;
      }
    }
  }

  return {
    domain,
    primary_flow: all_flows[0] || null,
    all_flows,
    agency_names,
    required_documents,
    key_deadlines,
    source_urls,
    common_mistakes,
    contacts,
  };
}

function main() {
  const result = {};
  for (const [domain, files] of Object.entries(DOMAIN_FILES)) {
    const data = aggregate(domain, files);
    if (data) result[domain] = data;
  }

  const header = `// AUTO-GENERATED — do not edit by hand.
// Source: scripts/generate-procedure-data.mjs (run from project root)
// 이유: /chat 동적 렌더에서 fs.readFileSync(kb/...) 사용 시 NFT 가 kb/ 전체를
// 함수 번들에 끌어옴 → Vercel 250MB 한도 초과. 빌드타임에 단일 TS 상수로 사전생성.
//
// 이 파일은 \`node scripts/generate-procedure-data.mjs\` 실행해 재생성.
// 톤 안전장치: 결과화면에서 표시할 때는 단정형 금지, "검토해볼 수 있습니다" 톤 유지.
// CLAUDE.md "결과화면 첫 문장·요약 톤" 섹션 참조.

export interface ProcedureStep {
  step: number;
  title: string;
  description?: string;
  deadline?: string;
}

export interface ProcedureFlow {
  id: string;
  name: string;
  applies_to?: string;
  steps: ProcedureStep[];
}

export interface RequiredDocCategory {
  category: string;
  items: string[];
}

export interface KeyDeadline {
  label: string;
  value: string;
  source?: string;
}

export interface DomainProcedure {
  domain: string;
  primary_flow: ProcedureFlow | null;
  all_flows: ProcedureFlow[];
  agency_names: string[];
  required_documents: RequiredDocCategory[];
  key_deadlines: KeyDeadline[];
  source_urls: string[];
  common_mistakes: string[];
  contacts: Record<string, string>;
}

`;

  const json = JSON.stringify(result, null, 2);
  const out = `${header}export const PROCEDURE_DATA: Record<string, DomainProcedure> = ${json};\n`;

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, out, 'utf-8');

  const counts = Object.entries(result).map(([d, v]) => `  - ${d}: ${v.all_flows.length} flows / ${v.required_documents.length} doc-cats / ${v.key_deadlines.length} deadlines / ${v.common_mistakes.length} mistakes`);
  console.log(`✅ Wrote ${OUT}`);
  console.log(`   ${Object.keys(result).length} domains:`);
  console.log(counts.join('\n'));
}

main();
