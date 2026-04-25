// Build kb/_meta/procedure_index.json — registry of all *_procedure.json files.
//
// Run: node scripts/build-procedure-index.mjs
//
// 목적: 22+ procedure JSON 들이 도메인 곳곳에 흩어져 있어 stale·중복 추적용
// 관리표 필요. 분기마다 last_checked 갱신 + source_url HEAD 체크 가능.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const KB_DIR = path.join(ROOT, 'kb');
const META_DIR = path.join(KB_DIR, '_meta');
const OUT = path.join(META_DIR, 'procedure_index.json');

// 17 domains × procedure 파일 매핑 (web/src/lib/procedure-data.ts 와 동기)
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
};

function shortSource(label) {
  // "HUG 주택도시보증공사" → "HUG"
  // "양육비이행관리원 (Korea Child Support Agency, CSA)" → "CSA"
  // "고용노동부 (민원마당 + 노동포털) + 근로복지공단" → "molab+comwel"
  if (!label) return '';
  const map = [
    [/HUG/, 'HUG'],
    [/CSA|양육비이행관리원/, 'CSA'],
    [/노동위원회/, 'NLRC'],
    [/근로복지공단/, 'COMWEL'],
    [/고용노동부/, 'MOLAB'],
    [/대한법률구조공단|KLAC/, 'KLAC'],
    [/금융감독원|FSS/, 'FSS'],
    [/한국소비자원|KCA/, 'KCA'],
    [/개인정보분쟁조정|PIDRC|kopico/, 'PIDRC'],
    [/전세사기피해지원/, 'JEONSESAGI'],
    [/주택임대차분쟁조정/, 'JUTAEK-MED'],
    [/경찰청|ECRM/, 'POLICE'],
    [/KISA|보호나라/, 'KISA'],
    [/학교폭력|교육부/, 'MOE-SV'],
    [/가정법원/, 'COURT-FAM'],
    [/통신분쟁조정/, 'TDRC'],
    [/콘텐츠분쟁조정/, 'KCDRC'],
    [/환경분쟁조정|ECC/, 'ECC'],
  ];
  const tags = [];
  for (const [re, tag] of map) {
    if (re.test(label) && !tags.includes(tag)) tags.push(tag);
  }
  return tags.join('+') || label;
}

function buildEntry(domain, filename) {
  const filePath = path.join(KB_DIR, domain, filename);
  if (!fs.existsSync(filePath)) {
    return {
      domain,
      file_path: `kb/${domain}/${filename}`,
      status: 'MISSING',
    };
  }
  let data = null;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (e) {
    return {
      domain,
      file_path: `kb/${domain}/${filename}`,
      status: 'PARSE_ERROR',
      error: e.message,
    };
  }

  const stat = fs.statSync(filePath);
  const today = new Date().toISOString().slice(0, 10);

  return {
    domain,
    source: shortSource(data.source || ''),
    source_full: data.source || '',
    file_path: `kb/${domain}/${filename}`,
    source_urls: Array.isArray(data.source_urls) ? data.source_urls : [],
    collected_at: data.fetched_at || today,
    last_checked: today,
    applies_to_result_card: true,
    applies_to_seo: true,
    procedures_count: Array.isArray(data.procedures) ? data.procedures.length : 0,
    has_documents: Array.isArray(data.required_documents)
      ? data.required_documents.length > 0
      : (data.procedures || []).some(
          (p) => Array.isArray(p?.documents) || Array.isArray(p?.required_documents),
        ),
    has_deadlines: Array.isArray(data.key_deadlines) && data.key_deadlines.length > 0,
    has_mistakes: Array.isArray(data.common_mistakes) && data.common_mistakes.length > 0,
    file_size_bytes: stat.size,
    status: 'OK',
  };
}

function main() {
  const entries = [];
  for (const [domain, files] of Object.entries(DOMAIN_FILES)) {
    for (const f of files) {
      entries.push(buildEntry(domain, f));
    }
  }

  // 통계
  const by_source = {};
  const by_domain = {};
  let okCount = 0;
  let missingCount = 0;
  for (const e of entries) {
    if (e.status === 'OK') okCount++;
    else missingCount++;
    by_source[e.source] = (by_source[e.source] || 0) + 1;
    by_domain[e.domain] = (by_domain[e.domain] || 0) + 1;
  }

  const index = {
    schema: 'procedure-index/v1',
    generated_at: new Date().toISOString(),
    description:
      'Registry of all kb/{domain}/*_procedure.json files. Tracks source, file_path, source_urls, collected_at, last_checked, applies_to_* flags. 분기마다 재실행해 stale 추적.',
    rebuild_command: 'node scripts/build-procedure-index.mjs',
    summary: {
      total_files: entries.length,
      ok: okCount,
      missing: missingCount,
      domains_covered: Object.keys(by_domain).length,
      by_source,
    },
    entries,
  };

  fs.mkdirSync(META_DIR, { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(index, null, 2), 'utf-8');

  console.log(`✅ Wrote ${OUT}`);
  console.log(`   Total: ${entries.length} entries (${okCount} OK / ${missingCount} missing)`);
  console.log(`   Domains: ${Object.keys(by_domain).length}`);
  console.log(`   By source:`, by_source);
}

main();
