export interface SpokeSection {
  title: string;
  content: string;
}

export interface ComparisonTable {
  title: string;
  headers: string[];
  rows: { label: string; values: string[] }[];
}

export interface CaseRef {
  title: string;
  summary: string;
  takeaway: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface InternalLink {
  label: string;
  href: string;
}

export interface SpokePage {
  domain: string;
  slug: string;
  keyword: string;
  questionKeyword?: string;
  ctaKeyword: string;
  type: string;
  perspective?: string;
  meta: { title: string; description: string };
  intro: string;
  timelineSteps?: string[];
  sections: SpokeSection[];
  comparison?: ComparisonTable;
  cases: CaseRef[];
  faq: FAQ[];
  cta: { text: string; link: string };
  internalLinks: InternalLink[];
}

// Content will be added by domain-specific imports
import { jeonsePages } from './spoke/jeonse';
import { jeonseFraudPages } from './spoke/jeonse-fraud';
import { rehabilitationPages } from './spoke/rehabilitation';
import { divorcePages } from './spoke/divorce';
import { fraudPages } from './spoke/fraud';
import { duiPages } from './spoke/dui';
import { sanggaPages } from './spoke/sangga';
import { wagePages } from './spoke/wage';
import { dismissalPages } from './spoke/dismissal';
import { retirementPages } from './spoke/retirement';
import { inheritancePages } from './spoke/inheritance';
import { defamationPages } from './spoke/defamation';
import { assaultPages } from './spoke/assault';
import { stalkingPages } from './spoke/stalking';
import { schoolViolencePages } from './spoke/school-violence';
import { sexualHarassmentPages } from './spoke/sexual-harassment';
import { digitalSexCrimePages } from './spoke/digital-sex-crime';
import { childSexCrimePages } from './spoke/child-sex-crime';
import { smallClaimsPages } from './spoke/small-claims';
import { bankruptcyPages } from './spoke/bankruptcy';
import { unemploymentPages } from './spoke/unemployment';
import { neighborDisputePages } from './spoke/neighbor-dispute';
import { realEstateSalePages } from './spoke/real-estate-sale';
import { industrialAccident1Pages } from './spoke/industrial-accident1';
import { trafficAccidentPages } from './spoke/traffic-accident';
import { drugCrimePages } from './spoke/drug-crime';
import { childSupportPages } from './spoke/child-support';
import { prostitutionPages } from './spoke/prostitution';
import { sexCrimePages } from './spoke/sex-crime';
import { leavePages } from './spoke/leave';

export const SPOKE_PAGES: SpokePage[] = [
  ...jeonsePages,
  ...jeonseFraudPages,
  ...rehabilitationPages,
  ...divorcePages,
  ...fraudPages,
  ...duiPages,
  ...sanggaPages,
  ...wagePages,
  ...dismissalPages,
  ...retirementPages,
  ...inheritancePages,
  ...defamationPages,
  ...assaultPages,
  ...stalkingPages,
  ...schoolViolencePages,
  ...sexualHarassmentPages,
  ...digitalSexCrimePages,
  ...childSexCrimePages,
  ...smallClaimsPages,
  ...bankruptcyPages,
  ...unemploymentPages,
  ...neighborDisputePages,
  ...realEstateSalePages,
  ...industrialAccident1Pages,
  ...trafficAccidentPages,
  ...drugCrimePages,
  ...childSupportPages,
  ...prostitutionPages,
  ...sexCrimePages,
  ...leavePages,
];

export function getSpokePage(domain: string, slug: string): SpokePage | undefined {
  return SPOKE_PAGES.find((p) => p.domain === domain && p.slug === slug);
}

export function getSpokePagesByDomain(domain: string): SpokePage[] {
  return SPOKE_PAGES.filter((p) => p.domain === domain);
}
