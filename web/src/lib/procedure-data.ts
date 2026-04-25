import fs from 'fs';
import path from 'path';

/**
 * Procedure data loaded from kb/{domain}/*_procedure.json
 *
 * 톤 안전장치 (CRITICAL): 결과화면에서 procedure 데이터를 보여줄 때는
 * 항상 "검토해볼 수 있습니다" / "확인할 수 있습니다" 같은 가능형으로 표시.
 * 단정형("받을 수 있습니다", "100% ~", "반드시") 금지.
 */

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
  deadline?: string;
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

export interface ProcedureSource {
  source: string; // e.g. "경찰청 ECRM + KISA"
  source_urls: string[];
  procedures: ProcedureFlow[];
  required_documents?: RequiredDocCategory[];
  key_deadlines?: KeyDeadline[];
  common_mistakes?: string[];
  contact?: Record<string, string>;
  contacts?: Record<string, string>;
}

export interface DomainProcedure {
  domain: string;
  sources: ProcedureSource[];
  // Aggregated view for result card display
  primary_flow: ProcedureFlow | null;
  all_flows: ProcedureFlow[];
  agency_names: string[]; // e.g. ["경찰청 ECRM + KISA", "금융감독원"]
  required_documents: RequiredDocCategory[];
  key_deadlines: KeyDeadline[];
  source_urls: string[];
}

/** Map of domain ID → ordered list of procedure file basenames (most relevant first). */
const DOMAIN_PROCEDURE_FILES: Record<string, string[]> = {
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
};

const KB_DIR = path.join(process.cwd(), '..', 'kb');

function readProcedureFile(domain: string, filename: string): ProcedureSource | null {
  try {
    const filePath = path.join(KB_DIR, domain, filename);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw) as ProcedureSource;
    return data;
  } catch {
    return null;
  }
}

/**
 * Load and aggregate procedure data for a domain.
 * Returns null if the domain has no procedure data.
 */
export function loadProcedureForDomain(domain: string): DomainProcedure | null {
  const files = DOMAIN_PROCEDURE_FILES[domain];
  if (!files || files.length === 0) return null;

  const sources: ProcedureSource[] = [];
  for (const filename of files) {
    const data = readProcedureFile(domain, filename);
    if (data) sources.push(data);
  }

  if (sources.length === 0) return null;

  // Aggregate
  const all_flows: ProcedureFlow[] = [];
  const agency_names: string[] = [];
  const required_documents: RequiredDocCategory[] = [];
  const key_deadlines: KeyDeadline[] = [];
  const source_urls: string[] = [];
  const seen_doc_categories = new Set<string>();
  const seen_deadlines = new Set<string>();
  const seen_urls = new Set<string>();

  for (const src of sources) {
    if (src.source) agency_names.push(src.source);
    if (Array.isArray(src.procedures)) {
      for (const p of src.procedures) {
        if (p && Array.isArray(p.steps) && p.steps.length > 0) {
          all_flows.push(p);
        }
      }
    }
    // Top-level required_documents (jeonsesagi, csa, molab 등)
    if (Array.isArray(src.required_documents)) {
      for (const cat of src.required_documents) {
        const key = cat.category;
        if (!seen_doc_categories.has(key)) {
          seen_doc_categories.add(key);
          required_documents.push(cat);
        }
      }
    }
    // Per-procedure documents (hug 의 procedures[].documents) +
    // per-procedure required_documents (klac 의 일부)
    if (Array.isArray(src.procedures)) {
      for (const p of src.procedures as unknown as Array<Record<string, unknown>>) {
        const docs1 = p.documents as RequiredDocCategory[] | undefined;
        const docs2 = p.required_documents as RequiredDocCategory[] | undefined;
        for (const arr of [docs1, docs2]) {
          if (!Array.isArray(arr)) continue;
          for (const cat of arr) {
            if (!cat || typeof cat !== 'object') continue;
            const key = cat.category;
            if (!key || seen_doc_categories.has(key)) continue;
            seen_doc_categories.add(key);
            required_documents.push(cat);
          }
        }
      }
    }
    if (Array.isArray(src.key_deadlines)) {
      for (const d of src.key_deadlines) {
        const key = `${d.label}::${d.value}`;
        if (!seen_deadlines.has(key)) {
          seen_deadlines.add(key);
          key_deadlines.push(d);
        }
      }
    }
    if (Array.isArray(src.source_urls)) {
      for (const u of src.source_urls) {
        if (u && !seen_urls.has(u)) {
          seen_urls.add(u);
          source_urls.push(u);
        }
      }
    }
  }

  return {
    domain,
    sources,
    primary_flow: all_flows[0] ?? null,
    all_flows,
    agency_names,
    required_documents,
    key_deadlines,
    source_urls,
  };
}

/** Pre-load procedure data for all configured domains (server-side use). */
export function loadAllProcedureData(): Record<string, DomainProcedure> {
  const result: Record<string, DomainProcedure> = {};
  for (const domain of Object.keys(DOMAIN_PROCEDURE_FILES)) {
    const data = loadProcedureForDomain(domain);
    if (data) result[domain] = data;
  }
  return result;
}
