/**
 * Step 1-C: Crawl law reference pages for all domains
 * Saves to raw/{csmSeq}/law-refs.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { fetchPage, lawRefsUrl } from '../utils/fetcher';
import { parseLawRefsPage } from '../utils/parser';

const targetsPath = path.join(__dirname, '..', 'config', 'targets.json');
const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf-8')).targets;

async function main() {
  console.log('=== Step 1-C: Crawl Law References ===');

  for (const target of targets) {
    const outDir = path.join(__dirname, '..', 'raw', String(target.csmSeq));
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, 'law-refs.json');

    console.log(`\n${target.name} (csmSeq=${target.csmSeq})...`);
    try {
      const url = lawRefsUrl(target.csmSeq);
      const html = await fetchPage(url);
      const refs = parseLawRefsPage(html);

      const result = {
        csmSeq: target.csmSeq,
        domainId: target.domainId,
        name: target.name,
        fetchedAt: new Date().toISOString(),
        sourceUrl: url,
        totalRefs: refs.length,
        refs,
      };

      fs.writeFileSync(outFile, JSON.stringify(result, null, 2), 'utf-8');
      console.log(`  Found ${refs.length} law references`);
      refs.slice(0, 3).forEach(r => console.log(`    - ${r.lawName} ${r.article}`));
    } catch (err: any) {
      console.error(`  ERROR: ${err.message}`);
      fs.writeFileSync(outFile, JSON.stringify({
        csmSeq: target.csmSeq,
        error: err.message,
        fetchedAt: new Date().toISOString(),
      }, null, 2), 'utf-8');
    }
  }

  console.log('\n=== Step 1-C Complete ===');
}

main().catch(console.error);
