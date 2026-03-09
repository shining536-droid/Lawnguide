/**
 * Step 1 prep: csmSeq values are already confirmed in targets.json
 * This script just validates them by fetching a page for each.
 */
import * as fs from 'fs';
import * as path from 'path';
import { fetchPage, pcContentUrl } from '../utils/fetcher';

const targetsPath = path.join(__dirname, '..', 'config', 'targets.json');
const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf-8')).targets;

async function main() {
  console.log('=== Validating csmSeq values ===');
  const results: any[] = [];

  for (const target of targets) {
    console.log(`\nChecking ${target.name} (csmSeq=${target.csmSeq})...`);
    try {
      const url = pcContentUrl(target.csmSeq, 1, 1, 1);
      const html = await fetchPage(url);
      const hasContent = html.length > 1000;
      console.log(`  OK - HTML size: ${html.length} bytes`);
      results.push({ ...target, valid: hasContent, htmlSize: html.length });
    } catch (err: any) {
      console.log(`  FAIL - ${err.message}`);
      results.push({ ...target, valid: false, error: err.message });
    }
  }

  console.log('\n=== Validation Summary ===');
  results.forEach(r => {
    console.log(`  ${r.valid ? 'OK' : 'FAIL'} ${r.name} (${r.csmSeq})`);
  });
}

main().catch(console.error);
