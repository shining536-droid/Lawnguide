/**
 * Step 2: Normalize raw data for all domains
 * Converts raw page data into normalized units
 * Saves to kb/{domain}/normalized_units.json
 */
import * as fs from 'fs';
import * as path from 'path';

const targetsPath = path.join(__dirname, '..', 'config', 'targets.json');
const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf-8')).targets;

interface NormalizedUnit {
  page_id: string;
  title: string;
  breadcrumb: string[];
  text_blocks: string[];
  conditions: string[];
  law_refs: Array<{
    lawName: string;
    article: number;
    articleSub?: number;
    paragraph?: number;
    clause?: number;
    fullText: string;
  }>;
  amounts: Array<{
    text: string;
    value?: number;
    unit?: string;
    context: string;
  }>;
  procedures: string[];
  tables: Array<{ headers: string[]; rows: string[][] }>;
  source_url: string;
  fetched_at: string;
}

function normalizeTarget(target: any): NormalizedUnit[] {
  const rawDir = path.join(__dirname, '..', 'raw', String(target.csmSeq));
  if (!fs.existsSync(rawDir)) {
    console.log(`  No raw data directory for ${target.name}`);
    return [];
  }

  const units: NormalizedUnit[] = [];
  const files = fs.readdirSync(rawDir).filter(f => /^\d+-\d+-\d+\.json$/.test(f));

  for (const file of files) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(rawDir, file), 'utf-8'));
      const meta = data.metadata || {};
      const content = data.content || {};
      const extracted = data.extracted || {};

      const unit: NormalizedUnit = {
        page_id: `${target.csmSeq}/${meta.pageId || file.replace('.json', '')}`,
        title: meta.title || '',
        breadcrumb: meta.breadcrumb || [],
        text_blocks: content.textBlocks || [],
        conditions: extracted.conditions || [],
        law_refs: (extracted.lawRefs || []).map((r: any) => ({
          lawName: r.lawName,
          article: r.article,
          articleSub: r.articleSub,
          paragraph: r.paragraph,
          clause: r.clause,
          fullText: r.fullText,
        })),
        amounts: (extracted.amounts || []).map((a: any) => ({
          text: a.text,
          value: a.value,
          unit: a.unit,
          context: a.context,
        })),
        procedures: extracted.procedures || [],
        tables: content.tables || [],
        source_url: meta.sourceUrl || '',
        fetched_at: meta.fetchedAt || '',
      };

      units.push(unit);
    } catch (err: any) {
      console.log(`  Error processing ${file}: ${err.message}`);
    }
  }

  // Sort by page_id
  units.sort((a, b) => a.page_id.localeCompare(b.page_id));
  return units;
}

async function main() {
  console.log('=== Step 2: Normalize Raw Data ===');

  for (const target of targets) {
    console.log(`\nNormalizing ${target.name} (csmSeq=${target.csmSeq})...`);

    const units = normalizeTarget(target);
    if (units.length === 0) {
      console.log('  No data to normalize');
      continue;
    }

    const kbDir = path.join(__dirname, '..', 'kb', target.domainId);
    fs.mkdirSync(kbDir, { recursive: true });

    const result = {
      domain: target.domainId,
      csmSeq: target.csmSeq,
      name: target.name,
      normalizedAt: new Date().toISOString(),
      totalUnits: units.length,
      totalTextBlocks: units.reduce((sum, u) => sum + u.text_blocks.length, 0),
      totalConditions: units.reduce((sum, u) => sum + u.conditions.length, 0),
      totalLawRefs: units.reduce((sum, u) => sum + u.law_refs.length, 0),
      totalAmounts: units.reduce((sum, u) => sum + u.amounts.length, 0),
      units,
    };

    const outFile = path.join(kbDir, 'normalized_units.json');
    fs.writeFileSync(outFile, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`  ${units.length} units normalized`);
    console.log(`  Text blocks: ${result.totalTextBlocks}`);
    console.log(`  Conditions: ${result.totalConditions}`);
    console.log(`  Law refs: ${result.totalLawRefs}`);
    console.log(`  Amounts: ${result.totalAmounts}`);
    console.log(`  Saved to ${outFile}`);
  }

  console.log('\n=== Step 2 Complete ===');
}

main().catch(console.error);
