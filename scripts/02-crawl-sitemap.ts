/**
 * Step 1-A: Crawl sitemaps for all domains
 * Extracts sidebar navigation to get all page URLs
 * Saves to config/sitemap-{csmSeq}.json
 */
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { fetchPage, pcContentUrl } from '../utils/fetcher';
import { parseSidebar, SitemapEntry } from '../utils/parser';

const targetsPath = path.join(__dirname, '..', 'config', 'targets.json');
const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf-8')).targets;

async function crawlSitemap(csmSeq: number, name: string): Promise<SitemapEntry[]> {
  console.log(`\nCrawling sitemap for ${name} (csmSeq=${csmSeq})...`);

  // Fetch the main page to get sidebar
  const url = pcContentUrl(csmSeq, 1, 1, 1);
  const html = await fetchPage(url);

  // Try sidebar parsing
  let entries = parseSidebar(html, csmSeq);

  // If sidebar parsing fails, try brute-force approach by scanning for links
  if (entries.length === 0) {
    console.log('  Sidebar parsing returned 0 results, trying deep scan...');
    const $ = cheerio.load(html);

    // Look for JavaScript function calls that navigate pages
    const scriptText = $('script').text();
    const allText = html;

    // Find all ccfNo/cciNo/cnpClsNo combinations in the page
    const paramPattern = /ccfNo[=:]\s*['"]?(\d+)['"]?[^]*?cciNo[=:]\s*['"]?(\d+)['"]?[^]*?cnpClsNo[=:]\s*['"]?(\d+)['"]?/g;
    let match: RegExpExecArray | null;
    const found = new Set<string>();

    while ((match = paramPattern.exec(allText)) !== null) {
      const key = `${match[1]}-${match[2]}-${match[3]}`;
      if (!found.has(key)) {
        found.add(key);
        entries.push({
          ccfNo: parseInt(match[1]),
          cciNo: parseInt(match[2]),
          cnpClsNo: parseInt(match[3]),
          title: `Page ${match[1]}-${match[2]}-${match[3]}`,
          url: `/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=${csmSeq}&ccfNo=${match[1]}&cciNo=${match[2]}&cnpClsNo=${match[3]}`,
        });
      }
    }

    // Also try various onclick patterns
    const fnPatterns = [
      /fn_egov_(?:link|goPage)\s*\(\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?/g,
      /goMenu\s*\(\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?/g,
      /fnGoMenu\s*\(\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?/g,
    ];

    for (const pattern of fnPatterns) {
      while ((match = pattern.exec(allText)) !== null) {
        if (parseInt(match[1]) === csmSeq) {
          const key = `${match[2]}-${match[3]}-${match[4]}`;
          if (!found.has(key)) {
            found.add(key);
            entries.push({
              ccfNo: parseInt(match[2]),
              cciNo: parseInt(match[3]),
              cnpClsNo: parseInt(match[4]),
              title: `Page ${match[2]}-${match[3]}-${match[4]}`,
              url: `/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=${csmSeq}&ccfNo=${match[2]}&cciNo=${match[3]}&cnpClsNo=${match[4]}`,
            });
          }
        }
      }
    }
  }

  // Sort entries
  entries.sort((a, b) => {
    if (a.ccfNo !== b.ccfNo) return a.ccfNo - b.ccfNo;
    if (a.cciNo !== b.cciNo) return a.cciNo - b.cciNo;
    return a.cnpClsNo - b.cnpClsNo;
  });

  return entries;
}

async function main() {
  console.log('=== Step 1-A: Crawl Sitemaps ===');
  const configDir = path.join(__dirname, '..', 'config');

  for (const target of targets) {
    try {
      const entries = await crawlSitemap(target.csmSeq, target.name);
      const sitemapFile = path.join(configDir, `sitemap-${target.csmSeq}.json`);
      const sitemapData = {
        csmSeq: target.csmSeq,
        domainId: target.domainId,
        name: target.name,
        crawledAt: new Date().toISOString(),
        totalPages: entries.length,
        pages: entries,
      };
      fs.writeFileSync(sitemapFile, JSON.stringify(sitemapData, null, 2), 'utf-8');
      console.log(`  Saved ${entries.length} entries to ${sitemapFile}`);
    } catch (err: any) {
      console.error(`  ERROR for ${target.name}: ${err.message}`);
    }
  }

  console.log('\n=== Step 1-A Complete ===');
}

main().catch(console.error);
