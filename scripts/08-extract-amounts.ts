/**
 * Step 4: Extract and separate amount/numeric data for each domain
 * Saves to kb/{domain}/amounts.json
 */
import * as fs from 'fs';
import * as path from 'path';

const targetsPath = path.join(__dirname, '..', 'config', 'targets.json');
const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf-8')).targets;

interface AmountEntry {
  category: string;
  text: string;
  value?: number;
  unit?: string;
  context: string;
  source_page: string;
  law_ref?: string;
}

function categorizeAmount(amount: any, pageTitle: string): string {
  const context = (amount.context || '').toLowerCase();
  const text = (amount.text || '').toLowerCase();

  if (context.includes('보증금') || context.includes('전세')) return '보증금';
  if (context.includes('차임') || context.includes('월세') || context.includes('임대료')) return '임대료';
  if (context.includes('임금') || context.includes('급여') || context.includes('수당')) return '임금';
  if (context.includes('퇴직') || context.includes('퇴직금')) return '퇴직금';
  if (context.includes('벌금') || context.includes('과태료') || context.includes('위약금')) return '벌금_과태료';
  if (context.includes('이자') || context.includes('이율') || text.includes('%')) return '이자_비율';
  if (text.includes('개월') || text.includes('일') || text.includes('년')) return '기간';
  if (text.includes('원')) return '금액';
  return '기타';
}

async function main() {
  console.log('=== Step 4: Extract Amounts ===');

  for (const target of targets) {
    const kbDir = path.join(__dirname, '..', 'kb', target.domainId);
    const normalizedFile = path.join(kbDir, 'normalized_units.json');

    if (!fs.existsSync(normalizedFile)) {
      console.log(`\nSkipping ${target.name} - no normalized data`);
      continue;
    }

    console.log(`\nExtracting amounts for ${target.name}...`);
    const normalized = JSON.parse(fs.readFileSync(normalizedFile, 'utf-8'));
    const allAmounts: AmountEntry[] = [];

    for (const unit of normalized.units) {
      for (const amount of (unit.amounts || [])) {
        const category = categorizeAmount(amount, unit.title);
        allAmounts.push({
          category,
          text: amount.text,
          value: amount.value,
          unit: amount.unit,
          context: amount.context,
          source_page: unit.page_id,
          law_ref: findRelatedLawRef(amount.context, unit.law_refs),
        });
      }

      // Also extract amounts from tables
      for (const table of (unit.tables || [])) {
        for (const row of table.rows) {
          const rowText = row.join(' ');
          const amountMatch = rowText.match(/(\d[\d,]*)\s*만?\s*원/);
          if (amountMatch) {
            allAmounts.push({
              category: categorizeAmount({ context: rowText, text: amountMatch[0] }, unit.title),
              text: amountMatch[0],
              value: parseInt(amountMatch[1].replace(/,/g, '')),
              unit: '원',
              context: rowText.substring(0, 100),
              source_page: unit.page_id,
            });
          }
        }
      }
    }

    // Group by category
    const grouped: Record<string, AmountEntry[]> = {};
    for (const amount of allAmounts) {
      if (!grouped[amount.category]) grouped[amount.category] = [];
      grouped[amount.category].push(amount);
    }

    const result = {
      domain: target.domainId,
      version: new Date().toISOString().split('T')[0],
      extractedAt: new Date().toISOString(),
      totalAmounts: allAmounts.length,
      categories: grouped,
      // For jeonse domain, include the standard statutory amounts
      ...(target.domainId === 'jeonse' ? { statutory: getJeonseStatutoryAmounts() } : {}),
    };

    const outFile = path.join(kbDir, 'amounts.json');
    fs.writeFileSync(outFile, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`  Extracted ${allAmounts.length} amount entries in ${Object.keys(grouped).length} categories`);
    for (const [cat, items] of Object.entries(grouped)) {
      console.log(`    ${cat}: ${items.length} entries`);
    }
    console.log(`  Saved to ${outFile}`);
  }

  console.log('\n=== Step 4 Complete ===');
}

function findRelatedLawRef(context: string, lawRefs: any[]): string | undefined {
  if (!lawRefs || !context) return undefined;
  for (const ref of lawRefs) {
    if (context.includes(ref.lawName)) return ref.fullText;
  }
  return undefined;
}

function getJeonseStatutoryAmounts() {
  return {
    law_ref: "주택임대차보호법 시행령 제10조, 제11조",
    note: "시행령 개정 시 이 데이터 업데이트 필요",
    소액보증금_기준: {
      서울특별시: { 보증금_이하: 165000000, 우선변제_이하: 55000000 },
      수도권_과밀억제_서울제외: {
        포함지역: ["세종특별자치시", "용인시", "화성시", "김포시"],
        보증금_이하: 145000000, 우선변제_이하: 48000000
      },
      광역시_등: {
        포함지역: ["안산시", "광주시", "파주시", "이천시", "평택시"],
        보증금_이하: 85000000, 우선변제_이하: 28000000
      },
      기타_지역: { 보증금_이하: 75000000, 우선변제_이하: 25000000 }
    },
    임대차_기간: {
      최소_보장기간_년: 2,
      묵시갱신_기간_년: 2,
      갱신거절_통지_기한_개월_전: [6, 2],
      해지통고_효력_발생_개월: 3
    },
    차임_증액_제한: {
      증액_상한_퍼센트: 5,
      증액청구_최소간격_년: 1
    }
  };
}

main().catch(console.error);
