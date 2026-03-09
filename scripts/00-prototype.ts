/**
 * Step 0: Prototype - Parse a single page (csmSeq=629, ccfNo=5, cciNo=2, cnpClsNo=1)
 * Tests PC content, mobile content, and law refs page parsing
 * Saves result to raw/629/prototype-5-2-1.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { fetchPage, pcContentUrl, mobileContentUrl, lawRefsUrl } from '../utils/fetcher';
import { parsePcContent, parseMobileContent, parseLawRefsPage, parseSidebar } from '../utils/parser';
import { extractLawRefs, extractConditions, extractAmounts, extractProcedures } from '../utils/law-ref-extractor';

const CSM_SEQ = 629;
const CCF_NO = 5;
const CCI_NO = 2;
const CNP_CLS_NO = 1;

async function main() {
  console.log('=== Step 0: Prototype Parsing ===');
  console.log(`Target: csmSeq=${CSM_SEQ}, ccfNo=${CCF_NO}, cciNo=${CCI_NO}, cnpClsNo=${CNP_CLS_NO}`);
  console.log('');

  const outDir = path.join(__dirname, '..', 'raw', String(CSM_SEQ));
  fs.mkdirSync(outDir, { recursive: true });

  const result: any = {
    metadata: {
      csmSeq: CSM_SEQ,
      ccfNo: CCF_NO,
      cciNo: CCI_NO,
      cnpClsNo: CNP_CLS_NO,
      fetchedAt: new Date().toISOString(),
    },
    pc: null,
    mobile: null,
    lawRefs: null,
    sidebar: null,
    extracted: {
      conditions: [] as string[],
      lawRefs: [] as any[],
      amounts: [] as any[],
      procedures: [] as string[],
    },
  };

  // 1. PC Content
  console.log('[1/4] Fetching PC content...');
  try {
    const pcUrlStr = pcContentUrl(CSM_SEQ, CCF_NO, CCI_NO, CNP_CLS_NO);
    console.log(`  URL: ${pcUrlStr}`);
    const pcHtml = await fetchPage(pcUrlStr);
    const pcParsed = parsePcContent(pcHtml);
    result.pc = pcParsed;
    console.log(`  Title: ${pcParsed.title}`);
    console.log(`  Breadcrumb: ${pcParsed.breadcrumb.join(' > ')}`);
    console.log(`  Text blocks: ${pcParsed.textBlocks.length}`);
    console.log(`  Tables: ${pcParsed.tables.length}`);

    // Extract from PC text
    const allText = pcParsed.textBlocks.join('\n');
    result.extracted.conditions = extractConditions(allText);
    result.extracted.lawRefs = extractLawRefs(allText);
    result.extracted.amounts = extractAmounts(allText);
    result.extracted.procedures = extractProcedures(pcParsed.textBlocks);

    // Parse sidebar for sitemap
    console.log('\n[1.5/4] Parsing sidebar...');
    const sidebarEntries = parseSidebar(pcHtml, CSM_SEQ);
    result.sidebar = sidebarEntries;
    console.log(`  Sidebar entries found: ${sidebarEntries.length}`);
    if (sidebarEntries.length > 0) {
      sidebarEntries.slice(0, 5).forEach(e => {
        console.log(`    - ${e.title} (${e.ccfNo}-${e.cciNo}-${e.cnpClsNo})`);
      });
      if (sidebarEntries.length > 5) console.log(`    ... and ${sidebarEntries.length - 5} more`);
    }
  } catch (err: any) {
    console.error(`  ERROR: ${err.message}`);
    result.pc = { error: err.message };
  }

  // 2. Mobile Content
  console.log('\n[2/4] Fetching mobile content...');
  try {
    const mobUrlStr = mobileContentUrl(CSM_SEQ);
    console.log(`  URL: ${mobUrlStr}`);
    const mobileHtml = await fetchPage(mobUrlStr);
    const mobileParsed = parseMobileContent(mobileHtml);
    result.mobile = mobileParsed;
    console.log(`  Title: ${mobileParsed.title}`);
    console.log(`  Text blocks: ${mobileParsed.textBlocks.length}`);
  } catch (err: any) {
    console.error(`  ERROR: ${err.message}`);
    result.mobile = { error: err.message };
  }

  // 3. Law Refs Page
  console.log('\n[3/4] Fetching law refs page...');
  try {
    const lawUrlStr = lawRefsUrl(CSM_SEQ);
    console.log(`  URL: ${lawUrlStr}`);
    const lawHtml = await fetchPage(lawUrlStr);
    const lawRefsParsed = parseLawRefsPage(lawHtml);
    result.lawRefs = lawRefsParsed;
    console.log(`  Law refs found: ${lawRefsParsed.length}`);
    lawRefsParsed.slice(0, 5).forEach(r => {
      console.log(`    - ${r.lawName} ${r.article}`);
    });
  } catch (err: any) {
    console.error(`  ERROR: ${err.message}`);
    result.lawRefs = { error: err.message };
  }

  // Summary
  console.log('\n=== Extraction Summary ===');
  console.log(`Conditions: ${result.extracted.conditions.length}`);
  result.extracted.conditions.slice(0, 5).forEach((c: string) => console.log(`  - ${c}`));
  console.log(`Law refs: ${result.extracted.lawRefs.length}`);
  result.extracted.lawRefs.slice(0, 5).forEach((r: any) => console.log(`  - ${r.fullText}`));
  console.log(`Amounts: ${result.extracted.amounts.length}`);
  result.extracted.amounts.slice(0, 5).forEach((a: any) => console.log(`  - ${a.text} (${a.context})`));
  console.log(`Procedures: ${result.extracted.procedures.length}`);

  // Save - strip rawHtmlSnippets for cleaner output
  const saveResult = JSON.parse(JSON.stringify(result));
  if (saveResult.pc && saveResult.pc.rawHtmlSnippets) {
    saveResult.pc.rawHtmlSnippets = [`[${saveResult.pc.rawHtmlSnippets[0]?.length || 0} chars - omitted for brevity]`];
  }

  const outFile = path.join(outDir, 'prototype-5-2-1.json');
  fs.writeFileSync(outFile, JSON.stringify(saveResult, null, 2), 'utf-8');
  console.log(`\nSaved to: ${outFile}`);
  console.log('=== Step 0 Complete ===');
}

main().catch(console.error);
