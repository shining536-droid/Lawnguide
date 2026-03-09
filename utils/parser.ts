import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

const selectorsPath = path.join(__dirname, '..', 'config', 'selectors.json');
const selectors = JSON.parse(fs.readFileSync(selectorsPath, 'utf-8'));

export interface ParsedPage {
  title: string;
  breadcrumb: string[];
  textBlocks: string[];
  tables: TableData[];
  rawHtmlSnippets: string[];
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface SitemapEntry {
  ccfNo: number;
  cciNo: number;
  cnpClsNo: number;
  title: string;
  url: string;
  parentTitle?: string;
}

// Easylaw content uses these CSS classes for structured text:
// .cnpClsTitle - page title
// .cnpClsNt   - intro/summary
// .plv1a      - level 1 heading (section header)
// .plv2a      - level 2 heading (subsection)
// .plv3a      - level 3 paragraph (main content)
// .plv4a      - level 4 paragraph (sub-content)
// .plv5d      - level 5 bullet (checklist item)
// .tplv2d     - tip/note level 2
// .tplv3a     - tip/note level 3
// .tplv3      - tip/note plain

const CONTENT_SELECTORS = '.cnpClsNt, .plv1a, .plv2a, .plv3a, .plv4a, .plv5d, .tplv2d, .tplv3a, .tplv3';

export function parsePcContent(html: string): ParsedPage {
  const $ = cheerio.load(html);

  // Title from .cnpClsTitle
  const title = $('.cnpClsTitle').first().text().trim();

  // Breadcrumb from .location
  const breadcrumb: string[] = [];
  const locText = $('.location').first().text().trim();
  if (locText) {
    locText.split('>').forEach(part => {
      const clean = part.trim();
      if (clean && clean !== '홈') breadcrumb.push(clean);
    });
  }

  // Text blocks from structured content divs
  const textBlocks: string[] = [];
  const rawHtmlSnippets: string[] = [];

  // Get intro text
  const intro = $('.cnpClsNt').first().text().trim().replace(/\s+/g, ' ');
  if (intro && intro.length > 5) {
    textBlocks.push(intro);
  }

  // Get all structured content
  $(CONTENT_SELECTORS).each((_: number, el: any) => {
    const $el = $(el);
    // Skip if it's a parent containing other content divs (avoid duplication)
    const cls = $el.attr('class') || '';
    // Get only the direct text, handling nested elements like <a> and <b>
    const text = $el.text().trim().replace(/\s+/g, ' ');

    if (text && text.length > 3) {
      // Remove "인쇄체크" prefix that appears on some headers
      const cleanText = text.replace(/^인쇄체크\s*/, '').trim();
      if (cleanText.length > 3 && !textBlocks.includes(cleanText)) {
        textBlocks.push(cleanText);
      }
    }
  });

  // Get raw HTML of content area
  const $contentArea = $('.ovDivbox1').first();
  if ($contentArea.length) {
    rawHtmlSnippets.push($contentArea.html() || '');
  }

  // Tables
  const tables: TableData[] = [];
  $(selectors.pc.tables).each((_: number, table: any) => {
    const headers: string[] = [];
    const rows: string[][] = [];
    $(table).find('thead th, thead td, tr:first-child th').each((_: number, th: any) => {
      headers.push($(th).text().trim());
    });
    $(table).find('tbody tr, tr').each((_: number, tr: any) => {
      const row: string[] = [];
      $(tr).find('td').each((_: number, td: any) => {
        row.push($(td).text().trim());
      });
      if (row.length > 0) rows.push(row);
    });
    if (rows.length > 0 || headers.length > 0) {
      tables.push({ headers, rows });
    }
  });

  return { title, breadcrumb, textBlocks, tables, rawHtmlSnippets };
}

export function parseMobileContent(html: string): ParsedPage {
  const $ = cheerio.load(html);

  let title = '';
  for (const sel of selectors.mobile.title.split(', ')) {
    const el = $(sel).first();
    if (el.length) {
      title = el.text().trim();
      break;
    }
  }

  const textBlocks: string[] = [];

  // Mobile also uses same easylaw CSS classes
  $(CONTENT_SELECTORS).each((_: number, el: any) => {
    const text = $(el).text().trim().replace(/\s+/g, ' ');
    if (text && text.length > 3) {
      const cleanText = text.replace(/^인쇄체크\s*/, '').trim();
      if (cleanText.length > 3 && !textBlocks.includes(cleanText)) {
        textBlocks.push(cleanText);
      }
    }
  });

  // Fallback for mobile: try generic content selectors
  if (textBlocks.length === 0) {
    let $content: cheerio.Cheerio<any> | null = null;
    for (const sel of selectors.mobile.contentArea.split(', ')) {
      const found = $(sel).first();
      if (found.length) { $content = found; break; }
    }
    if ($content) {
      $content.find('p, li, div').each((_: number, el: any) => {
        const $el = $(el);
        if ($el.children('p, li, div').length === 0) {
          const text = $el.text().trim().replace(/\s+/g, ' ');
          if (text && text.length > 10) textBlocks.push(text);
        }
      });
    }
  }

  const tables: TableData[] = [];
  for (const sel of selectors.mobile.tables.split(', ')) {
    $(sel).each((_: number, table: any) => {
      const headers: string[] = [];
      const rows: string[][] = [];
      $(table).find('thead th, thead td').each((_: number, th: any) => {
        headers.push($(th).text().trim());
      });
      $(table).find('tbody tr').each((_: number, tr: any) => {
        const row: string[] = [];
        $(tr).find('td, th').each((_: number, td: any) => {
          row.push($(td).text().trim());
        });
        if (row.length > 0) rows.push(row);
      });
      if (rows.length > 0 || headers.length > 0) {
        tables.push({ headers, rows });
      }
    });
  }

  return { title, breadcrumb: [], textBlocks, tables, rawHtmlSnippets: [] };
}

export function parseSidebar(html: string, csmSeq: number): SitemapEntry[] {
  const $ = cheerio.load(html);
  const entries: SitemapEntry[] = [];

  // Easylaw uses links with href containing csmSeq, ccfNo, cciNo, cnpClsNo
  const selectorsList = selectors.pc.sidebarLinks.split(', ');

  for (const sel of selectorsList) {
    $(sel).each((_: number, a: any) => {
      const href = $(a).attr('href') || $(a).attr('onclick') || '';
      const title = $(a).text().trim();

      let ccfNo: number | null = null;
      let cciNo: number | null = null;
      let cnpClsNo: number | null = null;

      const ccfMatch = href.match(/ccfNo=(\d+)/);
      const cciMatch = href.match(/cciNo=(\d+)/);
      const cnpMatch = href.match(/cnpClsNo=(\d+)/);

      if (ccfMatch) ccfNo = parseInt(ccfMatch[1]);
      if (cciMatch) cciNo = parseInt(cciMatch[1]);
      if (cnpMatch) cnpClsNo = parseInt(cnpMatch[1]);

      // Also try onclick patterns
      const onclickMatch = href.match(/fn_\w+\s*\(\s*'?\d+'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?/);
      if (onclickMatch) {
        ccfNo = parseInt(onclickMatch[1]);
        cciNo = parseInt(onclickMatch[2]);
        cnpClsNo = parseInt(onclickMatch[3]);
      }

      if (ccfNo !== null && cciNo !== null && cnpClsNo !== null && title) {
        const url = `/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=${csmSeq}&ccfNo=${ccfNo}&cciNo=${cciNo}&cnpClsNo=${cnpClsNo}`;
        const exists = entries.some(e => e.ccfNo === ccfNo && e.cciNo === cciNo && e.cnpClsNo === cnpClsNo);
        if (!exists) {
          entries.push({ ccfNo, cciNo, cnpClsNo, title, url });
        }
      }
    });
  }

  // Fallback: scan all links if sidebar parsing got nothing
  if (entries.length === 0) {
    $('a').each((_: number, a: any) => {
      const href = $(a).attr('href') || '';
      const onclick = $(a).attr('onclick') || '';
      const title = $(a).text().trim();
      const combined = href + ' ' + onclick;

      const seqMatch = combined.match(/csmSeq=(\d+)/);
      if (seqMatch && parseInt(seqMatch[1]) === csmSeq) {
        const ccfMatch = combined.match(/ccfNo=(\d+)/);
        const cciMatch = combined.match(/cciNo=(\d+)/);
        const cnpMatch = combined.match(/cnpClsNo=(\d+)/);

        if (ccfMatch && cciMatch && cnpMatch) {
          const ccfNo = parseInt(ccfMatch[1]);
          const cciNo = parseInt(cciMatch[1]);
          const cnpClsNo = parseInt(cnpMatch[1]);
          const url = `/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=${csmSeq}&ccfNo=${ccfNo}&cciNo=${cciNo}&cnpClsNo=${cnpClsNo}`;
          const exists = entries.some(e => e.ccfNo === ccfNo && e.cciNo === cciNo && e.cnpClsNo === cnpClsNo);
          if (!exists && title) {
            entries.push({ ccfNo, cciNo, cnpClsNo, title, url });
          }
        }
      }

      const fnMatch = onclick.match(/(?:fn_egov_link|goMenu|fnGoMenu)\s*\(\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?\s*,\s*'?(\d+)'?/);
      if (fnMatch && parseInt(fnMatch[1]) === csmSeq) {
        const ccfNo = parseInt(fnMatch[2]);
        const cciNo = parseInt(fnMatch[3]);
        const cnpClsNo = parseInt(fnMatch[4]);
        const url = `/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=${csmSeq}&ccfNo=${ccfNo}&cciNo=${cciNo}&cnpClsNo=${cnpClsNo}`;
        const exists = entries.some(e => e.ccfNo === ccfNo && e.cciNo === cciNo && e.cnpClsNo === cnpClsNo);
        if (!exists && title) {
          entries.push({ ccfNo, cciNo, cnpClsNo, title, url });
        }
      }
    });
  }

  return entries;
}

export function parseLawRefsPage(html: string): Array<{ lawName: string; article: string; url?: string }> {
  const $ = cheerio.load(html);
  const refs: Array<{ lawName: string; article: string; url?: string }> = [];

  $('table tbody tr').each((_: number, tr: any) => {
    const tds = $(tr).find('td');
    if (tds.length >= 1) {
      const lawName = $(tds[0]).text().trim();
      const article = tds.length >= 2 ? $(tds[1]).text().trim() : '';
      const link = $(tr).find('a').attr('href') || '';
      if (lawName) {
        refs.push({ lawName, article, url: link || undefined });
      }
    }
  });

  if (refs.length === 0) {
    $('li, .law_list a, .relate_law a').each((_: number, el: any) => {
      const text = $(el).text().trim();
      const link = $(el).attr('href') || $(el).find('a').attr('href') || '';
      if (text) {
        refs.push({ lawName: text, article: '', url: link || undefined });
      }
    });
  }

  return refs;
}

export function parseQnaPage(html: string): Array<{ question: string; answer: string }> {
  const $ = cheerio.load(html);
  const items: Array<{ question: string; answer: string }> = [];

  for (const listSel of selectors.pc.qaList.split(', ')) {
    $(listSel).each((_: number, li: any) => {
      let question = '';
      let answer = '';
      for (const qSel of selectors.pc.qaQuestion.split(', ')) {
        const q = $(li).find(qSel).first();
        if (q.length) { question = q.text().trim(); break; }
      }
      for (const aSel of selectors.pc.qaAnswer.split(', ')) {
        const a = $(li).find(aSel).first();
        if (a.length) { answer = a.text().trim(); break; }
      }
      if (question) items.push({ question, answer });
    });
    if (items.length > 0) break;
  }

  if (items.length === 0) {
    $('dt').each((i: number, dt: any) => {
      const question = $(dt).text().trim();
      const dd = $(dt).next('dd');
      const answer = dd.length ? dd.text().trim() : '';
      if (question) items.push({ question, answer });
    });
  }

  return items;
}
