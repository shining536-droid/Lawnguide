/**
 * Fix remaining broken links with manual domain mapping
 */
import * as fs from 'fs';
import * as path from 'path';

// Map non-existent domains to closest real domains
const domainMapping: Record<string, string> = {
  'civil-litigation': 'small-claims',
  'enforcement': 'small-claims',
  'individual-rehabilitation': 'rehabilitation',
  'debt-adjustment': 'bankruptcy',
  'unfair-dismissal': 'dismissal',
  'wage-claim': 'wage',
  'damages': 'neighbor-dispute',
  'environmental-dispute': 'neighbor-dispute',
  'real-estate-dispute': 'real-estate-sale',
  'certified-mail': 'real-estate-sale',
  'provisional-remedy': 'real-estate-sale',
  'criminal': 'drug-crime',
};

// Fix industrial-accident -> industrial-accident1
const industrialFixes: [string, string][] = [
  ['/diagnosis/industrial-accident', '/diagnosis/industrial-accident1'],
  ['/guide/industrial-accident/workers-comp-claim-process', '/guide/industrial-accident1'],
];

// Fix sangga lease-renewal-rejection
const sanggaFixes: [string, string][] = [
  ['/guide/sangga/lease-renewal-rejection', '/guide/sangga'],
];

const spokeDir = path.join(__dirname, '..', 'src', 'data', 'spoke');
const files = fs.readdirSync(spokeDir).filter(f => f.endsWith('.ts'));

let fixed = 0;

for (const file of files) {
  const filePath = path.join(spokeDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Fix domain mappings: /guide/wrong-domain -> /guide/correct-domain
  for (const [wrong, correct] of Object.entries(domainMapping)) {
    const pattern = `'/guide/${wrong}'`;
    const replacement = `'/guide/${correct}'`;
    if (content.includes(pattern)) {
      content = content.split(pattern).join(replacement);
      modified = true;
      fixed++;
      console.log(`FIXED: ${file} | /guide/${wrong} → /guide/${correct}`);
    }
  }

  // Fix industrial-accident links
  for (const [old, newLink] of industrialFixes) {
    const pattern = `'${old}'`;
    const replacement = `'${newLink}'`;
    if (content.includes(pattern)) {
      content = content.split(pattern).join(replacement);
      modified = true;
      fixed++;
      console.log(`FIXED: ${file} | ${old} → ${newLink}`);
    }
  }

  // Fix sangga links
  for (const [old, newLink] of sanggaFixes) {
    const pattern = `'${old}'`;
    const replacement = `'${newLink}'`;
    if (content.includes(pattern)) {
      content = content.split(pattern).join(replacement);
      modified = true;
      fixed++;
      console.log(`FIXED: ${file} | ${old} → ${newLink}`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

console.log(`\nTotal fixed: ${fixed}`);
