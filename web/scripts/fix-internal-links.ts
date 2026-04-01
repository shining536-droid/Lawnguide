/**
 * Fix broken internal links in spoke pages
 * Run: npx tsx scripts/fix-internal-links.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { SPOKE_PAGES } from '../src/data/spoke-pages';
import { DOMAINS } from '../src/lib/domains';

const validDomainIds = new Set(DOMAINS.map((d) => d.id));
const allSpokeRoutes = new Map<string, string>(); // slug -> full route
const slugToDomain = new Map<string, string>(); // slug -> domain

for (const p of SPOKE_PAGES) {
  const route = `/guide/${p.domain}/${p.slug}`;
  allSpokeRoutes.set(p.slug, route);
  slugToDomain.set(p.slug, p.domain);
}

// Build domain -> slugs map for fuzzy matching
const domainSlugs = new Map<string, string[]>();
for (const p of SPOKE_PAGES) {
  if (!domainSlugs.has(p.domain)) domainSlugs.set(p.domain, []);
  domainSlugs.get(p.domain)!.push(p.slug);
}

function findClosestSlug(brokenSlug: string, domain: string): string | null {
  const candidates = domainSlugs.get(domain) || [];
  if (candidates.length === 0) return null;

  // Try exact substring match first
  for (const c of candidates) {
    if (c.includes(brokenSlug) || brokenSlug.includes(c)) return c;
  }

  // Try word overlap scoring
  const brokenWords = new Set(brokenSlug.split('-'));
  let bestScore = 0;
  let bestSlug: string | null = null;

  for (const c of candidates) {
    const cWords = new Set(c.split('-'));
    let overlap = 0;
    for (const w of brokenWords) {
      if (cWords.has(w)) overlap++;
    }
    const score = overlap / Math.max(brokenWords.size, cWords.size);
    if (score > bestScore) {
      bestScore = score;
      bestSlug = c;
    }
  }

  return bestScore >= 0.3 ? bestSlug : null;
}

// Scan all spoke files for broken links and fix them
const spokeDir = path.join(__dirname, '..', 'src', 'data', 'spoke');
const files = fs.readdirSync(spokeDir).filter(f => f.endsWith('.ts'));

let totalFixed = 0;
let totalFallback = 0;

for (const file of files) {
  const filePath = path.join(spokeDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Fix pattern 1: /guide/slug (missing domain) -> /guide/domain/slug
  const missingDomainPattern = /href:\s*'\/guide\/([^/']+)'/g;
  let match;
  const replacements: [string, string][] = [];

  // Reset and collect all matches
  const allMatches: { full: string; slug: string; index: number }[] = [];
  while ((match = missingDomainPattern.exec(content)) !== null) {
    const slug = match[1];
    // Check if this is a 2-segment path (missing domain) vs 3-segment
    const fullMatch = match[0];
    allMatches.push({ full: fullMatch, slug, index: match.index });
  }

  for (const m of allMatches) {
    // If slug is actually a domain, skip (it's a hub link /guide/domain)
    if (validDomainIds.has(m.slug)) continue;

    // Check if slug exists as a spoke
    if (allSpokeRoutes.has(m.slug)) {
      const correctRoute = allSpokeRoutes.get(m.slug)!;
      const oldStr = `href: '${'/guide/' + m.slug}'`;
      const newStr = `href: '${correctRoute}'`;
      content = content.replace(oldStr, newStr);
      modified = true;
      totalFixed++;
      console.log(`FIXED (path): ${file} | /guide/${m.slug} → ${correctRoute}`);
    }
  }

  // Fix pattern 2: /guide/domain/slug where slug doesn't exist
  const spokePattern = /href:\s*'\/guide\/([^/']+)\/([^/']+)'/g;
  while ((match = spokePattern.exec(content)) !== null) {
    const domain = match[1];
    const slug = match[2];
    const route = `/guide/${domain}/${slug}`;

    if (!validDomainIds.has(domain)) continue;

    // Check if this spoke exists
    const existingRoute = allSpokeRoutes.get(slug);
    if (existingRoute) continue; // Valid link

    // Try to find closest match
    const closest = findClosestSlug(slug, domain);
    if (closest) {
      const oldStr = `href: '${route}'`;
      const newStr = `href: '/guide/${domain}/${closest}'`;
      content = content.replace(oldStr, newStr);
      modified = true;
      totalFixed++;
      console.log(`FIXED (fuzzy): ${file} | ${route} → /guide/${domain}/${closest}`);
    } else {
      // Fallback to domain hub
      const oldStr = `href: '${route}'`;
      const newStr = `href: '/guide/${domain}'`;
      content = content.replace(oldStr, newStr);
      modified = true;
      totalFallback++;
      console.log(`FALLBACK (hub): ${file} | ${route} → /guide/${domain}`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

console.log(`\n=== Fix Summary ===`);
console.log(`Fixed: ${totalFixed}`);
console.log(`Fallback to hub: ${totalFallback}`);
console.log(`Total: ${totalFixed + totalFallback}`);
