/**
 * Internal link validation script
 * Run: npx tsx scripts/validate-internal-links.ts
 * Checks all spoke internalLinks point to valid routes
 */

import { SPOKE_PAGES, getSpokePagesByDomain } from '../src/data/spoke-pages';
import { DOMAINS } from '../src/lib/domains';

const validDomainIds = new Set(DOMAINS.map((d) => d.id));
const allSpokeRoutes = new Set(
  SPOKE_PAGES.map((p) => `/guide/${p.domain}/${p.slug}`)
);
const allGuideRoutes = new Set(
  DOMAINS.map((d) => `/guide/${d.id}`)
);
const allDiagnosisRoutes = new Set(
  DOMAINS.map((d) => `/diagnosis/${d.id}`)
);

let errors = 0;
let warnings = 0;
let checked = 0;

for (const page of SPOKE_PAGES) {
  for (const link of page.internalLinks) {
    checked++;
    const href = link.href;

    // Check guide spoke routes
    if (href.startsWith('/guide/') && href.split('/').length === 4) {
      if (!allSpokeRoutes.has(href)) {
        console.error(`BROKEN: ${page.domain}/${page.slug} → ${href} (spoke not found)`);
        errors++;
      }
    }
    // Check guide hub routes
    else if (href.startsWith('/guide/') && href.split('/').length === 3) {
      const domain = href.split('/')[2];
      if (!validDomainIds.has(domain)) {
        console.error(`BROKEN: ${page.domain}/${page.slug} → ${href} (domain not found)`);
        errors++;
      }
    }
    // Check diagnosis routes
    else if (href.startsWith('/diagnosis/')) {
      const domain = href.split('/')[2];
      if (!validDomainIds.has(domain)) {
        console.error(`BROKEN: ${page.domain}/${page.slug} → ${href} (domain not found)`);
        errors++;
      }
    }
    // External or unknown
    else if (!href.startsWith('/')) {
      console.warn(`EXTERNAL: ${page.domain}/${page.slug} → ${href}`);
      warnings++;
    }
  }
}

console.log(`\n=== Internal Link Validation ===`);
console.log(`Checked: ${checked} links across ${SPOKE_PAGES.length} spokes`);
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  process.exit(1);
}
