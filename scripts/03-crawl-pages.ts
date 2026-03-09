/**
 * Step 1-B: Crawl all pages for all domains
 * Uses sitemap files to visit each page and parse PC content
 * Saves to raw/{csmSeq}/{ccfNo}-{cciNo}-{cnpClsNo}.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { fetchPage, pcContentUrl } from '../utils/fetcher';
import { parsePcContent } from '../utils/parser';
import { extractLawRefs, extractConditions, extractAmounts, extractProcedures } from '../utils/law-ref-extractor';

const targetsPath = path.join(__dirname, '..', 'config', 'targets.json');
const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf-8')).targets;

interface CrawlError {
  csmSeq: number;
  page: string;
  error: string;
  timestamp: string;
}

async function main() {
  console.log('=== Step 1-B: Crawl All Pages ===');
  const errors: CrawlError[] = [];
  let totalPages = 0;
  let totalSuccess = 0;

  for (const target of targets) {
    const sitemapFile = path.join(__dirname, '..', 'config', `sitemap-${target.csmSeq}.json`);
    if (!fs.existsSync(sitemapFile)) {
      console.log(`\nSkipping ${target.name} - no sitemap found`);
      continue;
    }

    const sitemap = JSON.parse(fs.readFileSync(sitemapFile, 'utf-8'));
    const pages = sitemap.pages;
    const outDir = path.join(__dirname, '..', 'raw', String(target.csmSeq));
    fs.mkdirSync(outDir, { recursive: true });

    console.log(`\n--- ${target.name} (csmSeq=${target.csmSeq}, ${pages.length} pages) ---`);

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const pageId = `${page.ccfNo}-${page.cciNo}-${page.cnpClsNo}`;
      const outFile = path.join(outDir, `${pageId}.json`);
      totalPages++;

      // Skip if already crawled
      if (fs.existsSync(outFile)) {
        console.log(`  [${i + 1}/${pages.length}] ${pageId} - already exists, skipping`);
        totalSuccess++;
        continue;
      }

      console.log(`  [${i + 1}/${pages.length}] ${pageId} - ${page.title}`);
      try {
        const url = pcContentUrl(target.csmSeq, page.ccfNo, page.cciNo, page.cnpClsNo);
        const html = await fetchPage(url);
        const parsed = parsePcContent(html);

        const allText = parsed.textBlocks.join('\n');
        const result = {
          metadata: {
            csmSeq: target.csmSeq,
            domainId: target.domainId,
            ccfNo: page.ccfNo,
            cciNo: page.cciNo,
            cnpClsNo: page.cnpClsNo,
            pageId,
            title: parsed.title || page.title,
            breadcrumb: parsed.breadcrumb,
            sourceUrl: url,
            fetchedAt: new Date().toISOString(),
          },
          content: {
            textBlocks: parsed.textBlocks,
            tables: parsed.tables,
          },
          extracted: {
            conditions: extractConditions(allText),
            lawRefs: extractLawRefs(allText),
            amounts: extractAmounts(allText),
            procedures: extractProcedures(parsed.textBlocks),
          },
        };

        fs.writeFileSync(outFile, JSON.stringify(result, null, 2), 'utf-8');
        totalSuccess++;
        console.log(`    -> ${parsed.textBlocks.length} text blocks, ${result.extracted.lawRefs.length} law refs`);
      } catch (err: any) {
        console.error(`    ERROR: ${err.message}`);
        errors.push({
          csmSeq: target.csmSeq,
          page: pageId,
          error: err.message,
          timestamp: new Date().toISOString(),
        });
      }
    }
  }

  // Save errors log
  if (errors.length > 0) {
    const errFile = path.join(__dirname, '..', 'raw', 'crawl-errors.json');
    fs.writeFileSync(errFile, JSON.stringify(errors, null, 2), 'utf-8');
    console.log(`\nErrors saved to ${errFile}`);
  }

  console.log(`\n=== Step 1-B Summary ===`);
  console.log(`Total pages: ${totalPages}`);
  console.log(`Success: ${totalSuccess}`);
  console.log(`Errors: ${errors.length}`);
  console.log('=== Step 1-B Complete ===');
}

main().catch(console.error);
