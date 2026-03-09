/**
 * Step 1-D: Crawl 100문100답 (QnA) pages for all domains
 * Saves to raw/{csmSeq}/qna.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { fetchPage, qnaUrl } from '../utils/fetcher';
import { parseQnaPage } from '../utils/parser';

const targetsPath = path.join(__dirname, '..', 'config', 'targets.json');
const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf-8')).targets;

async function main() {
  console.log('=== Step 1-D: Crawl QnA ===');

  for (const target of targets) {
    const outDir = path.join(__dirname, '..', 'raw', String(target.csmSeq));
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, 'qna.json');

    console.log(`\n${target.name} (csmSeq=${target.csmSeq})...`);
    try {
      const url = qnaUrl(target.csmSeq);
      const html = await fetchPage(url);
      const items = parseQnaPage(html);

      const result = {
        csmSeq: target.csmSeq,
        domainId: target.domainId,
        name: target.name,
        fetchedAt: new Date().toISOString(),
        sourceUrl: url,
        totalItems: items.length,
        items,
      };

      fs.writeFileSync(outFile, JSON.stringify(result, null, 2), 'utf-8');
      console.log(`  Found ${items.length} QnA items`);
      if (items.length > 0) {
        console.log(`    First Q: ${items[0].question.substring(0, 60)}...`);
      }
    } catch (err: any) {
      console.error(`  ERROR: ${err.message}`);
      fs.writeFileSync(outFile, JSON.stringify({
        csmSeq: target.csmSeq,
        error: err.message,
        fetchedAt: new Date().toISOString(),
        totalItems: 0,
        items: [],
      }, null, 2), 'utf-8');
    }
  }

  console.log('\n=== Step 1-D Complete ===');
}

main().catch(console.error);
