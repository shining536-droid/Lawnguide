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
import { rehabilitationPages } from './spoke/rehabilitation';
import { divorcePages } from './spoke/divorce';

export const SPOKE_PAGES: SpokePage[] = [
  ...jeonsePages,
  ...rehabilitationPages,
  ...divorcePages,
];

export function getSpokePage(domain: string, slug: string): SpokePage | undefined {
  return SPOKE_PAGES.find((p) => p.domain === domain && p.slug === slug);
}

export function getSpokePagesByDomain(domain: string): SpokePage[] {
  return SPOKE_PAGES.filter((p) => p.domain === domain);
}
