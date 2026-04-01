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
import { batch7Part1Pages } from './spoke/spokes-batch7-part1';
import { batch7Part2Pages } from './spoke/spokes-batch7-part2';
import { batch7Part3Pages } from './spoke/spokes-batch7-part3';
import { spokesBatch7Pages11to15 } from './spoke/spokes-batch7-11to15';
import { spokesBatch7Pages16to20 } from './spoke/spokes-batch7-16to20';
import { spokesBatch8Part1Pages } from './spoke/spokes-batch8-part1';
import { spokesBatch8Part2Pages } from './spoke/spokes-batch8-part2';
import { spokesBatch8Pages11to15 } from './spoke/spokes-batch8-11to15';
import { spokesBatch8Pages16to20 } from './spoke/spokes-batch8-16to20';
import { spokesBatch9Part2Pages } from './spoke/spokes-batch9-part2';
import { spokesBatch9Pages11to15 } from './spoke/spokes-batch9-11to15';
import { spokesBatch9Pages16to20 } from './spoke/spokes-batch9-16to20';
import { spokesBatch10Part1Pages } from './spoke/spokes-batch10-part1';
import { spokesBatch10Part2Pages } from './spoke/spokes-batch10-part2';
import { spokesBatch10Pages11to15 } from './spoke/spokes-batch10-11to15';
import { spokesBatch10Pages16to20 } from './spoke/spokes-batch10-16to20';
import { spokesBatch10Pages21to25 } from './spoke/spokes-batch10-21to25';
import { spokesBatch10Pages26to30 } from './spoke/spokes-batch10-26to30';
import { spokesBatch11Part1Pages } from './spoke/spokes-batch11-part1';
import { spokesBatch11Part2Pages } from './spoke/spokes-batch11-part2';
import { spokesBatch11Pages11to15 } from './spoke/spokes-batch11-11to15';
import { spokesBatch11Pages16to20 } from './spoke/spokes-batch11-16to20';
import { spokesBatch11Pages21to25 } from './spoke/spokes-batch11-21to25';
import { spokesBatch11Pages26to30 } from './spoke/spokes-batch11-26to30';
import { spokesBatch12Part1Pages } from './spoke/spokes-batch12-part1';
import { spokesBatch12Part2Pages } from './spoke/spokes-batch12-part2';
import { spokesBatch12Pages11to15 } from './spoke/spokes-batch12-11to15';
import { spokesBatch12Pages16to20 } from './spoke/spokes-batch12-16to20';
import { spokesBatch12Pages21to25 } from './spoke/spokes-batch12-21to25';
import { spokesBatch12Pages26to30 } from './spoke/spokes-batch12-26to30';
import { spokesBatch12Pages31to35 } from './spoke/spokes-batch12-31to35';
import { spokesBatch13Part1Pages } from './spoke/spokes-batch13-part1';
import { spokesBatch13Part2Pages } from './spoke/spokes-batch13-part2';
import { spokesBatch13Pages11to15 } from './spoke/spokes-batch13-11to15';
import { spokesBatch13Pages16to20 } from './spoke/spokes-batch13-16to20';
import { spokesBatch13Pages21to25 } from './spoke/spokes-batch13-21to25';
import { spokesBatch13Pages26to30 } from './spoke/spokes-batch13-26to30';
import { spokesBatch13Pages31to35 } from './spoke/spokes-batch13-31to35';
import { spokesBatch14Part1Pages } from './spoke/spokes-batch14-part1';
import { spokesBatch14Part2Pages } from './spoke/spokes-batch14-part2';
import { spokesBatch14Pages11to15 } from './spoke/spokes-batch14-11to15';
import { spokesBatch14Pages16to20 } from './spoke/spokes-batch14-16to20';
import { spokesBatch14Pages21to25 } from './spoke/spokes-batch14-21to25';
import { spokesBatch14Pages26to30 } from './spoke/spokes-batch14-26to30';
import { spokesBatch14Pages31to35 } from './spoke/spokes-batch14-31to35';
import { spokesBatch15Part1Pages } from './spoke/spokes-batch15-part1';
import { spokesBatch15Part2Pages } from './spoke/spokes-batch15-part2';
import { spokesBatch15Pages11to15 } from './spoke/spokes-batch15-11to15';
import { spokesBatch15Pages16to20 } from './spoke/spokes-batch15-16to20';
import { spokesBatch15Pages21to25 } from './spoke/spokes-batch15-21to25';
import { spokesBatch16_11to15 } from './spoke/spokes-batch16-11to15';
import { spokesBatch16Pages16to20 } from './spoke/spokes-batch16-16to20';
import { spokesBatch16Pages21to25 } from './spoke/spokes-batch16-21to25';
import { spokesBatch16Part1Pages } from './spoke/spokes-batch16-part1';
import { spokesBatch16Pages31to35 } from './spoke/spokes-batch16-31to35';
import { spokesBatch16Part2Pages } from './spoke/spokes-batch16-part2';
import { spokesBatch16Pages26to30 } from './spoke/spokes-batch16-26to30';
import { spokesBatch17Part1Pages } from './spoke/spokes-batch17-part1';
import { spokesBatch17_6to10 } from './spoke/spokes-batch17-6to10';
import { spokesBatch17_11to15 } from './spoke/spokes-batch17-11to15';
import { spokesBatch17_16to20 } from './spoke/spokes-batch17-16to20';
import { spokesBatch17_21to25 } from './spoke/spokes-batch17-21to25';
import { spokesBatch17_26to30 } from './spoke/spokes-batch17-26to30';
import { spokesBatch17_31to35 } from './spoke/spokes-batch17-31to35';
import { spokesBatch17GscWageStalking } from './spoke/spokes-batch17-gsc-wage-stalking';
import { spokesBatch17GscFraud } from './spoke/spokes-batch17-gsc-fraud';
import { spokesBatch17GscTraffic } from './spoke/spokes-batch17-gsc-traffic';
import { spokesBatch17GscDivorce } from './spoke/spokes-batch17-gsc-divorce';

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
  ...batch7Part1Pages,
  ...batch7Part2Pages,
  ...batch7Part3Pages,
  ...spokesBatch7Pages11to15,
  ...spokesBatch7Pages16to20,
  ...spokesBatch8Part1Pages,
  ...spokesBatch8Part2Pages,
  ...spokesBatch8Pages11to15,
  ...spokesBatch8Pages16to20,
  ...spokesBatch9Part2Pages,
  ...spokesBatch9Pages11to15,
  ...spokesBatch9Pages16to20,
  ...spokesBatch10Part1Pages,
  ...spokesBatch10Part2Pages,
  ...spokesBatch10Pages11to15,
  ...spokesBatch10Pages16to20,
  ...spokesBatch10Pages21to25,
  ...spokesBatch10Pages26to30,
  ...spokesBatch11Part1Pages,
  ...spokesBatch11Part2Pages,
  ...spokesBatch11Pages11to15,
  ...spokesBatch11Pages16to20,
  ...spokesBatch11Pages21to25,
  ...spokesBatch11Pages26to30,
  ...spokesBatch12Part1Pages,
  ...spokesBatch12Part2Pages,
  ...spokesBatch12Pages11to15,
  ...spokesBatch12Pages16to20,
  ...spokesBatch12Pages21to25,
  ...spokesBatch12Pages26to30,
  ...spokesBatch12Pages31to35,
  ...spokesBatch13Part1Pages,
  ...spokesBatch13Part2Pages,
  ...spokesBatch13Pages11to15,
  ...spokesBatch13Pages16to20,
  ...spokesBatch13Pages21to25,
  ...spokesBatch13Pages26to30,
  ...spokesBatch13Pages31to35,
  ...spokesBatch14Part1Pages,
  ...spokesBatch14Part2Pages,
  ...spokesBatch14Pages11to15,
  ...spokesBatch14Pages16to20,
  ...spokesBatch14Pages21to25,
  ...spokesBatch14Pages26to30,
  ...spokesBatch14Pages31to35,
  ...spokesBatch15Part1Pages,
  ...spokesBatch15Part2Pages,
  ...spokesBatch15Pages11to15,
  ...spokesBatch15Pages16to20,
  ...spokesBatch15Pages21to25,
  ...spokesBatch16_11to15,
  ...spokesBatch16Pages16to20,
  ...spokesBatch16Pages21to25,
  ...spokesBatch16Part1Pages,
  ...spokesBatch16Pages31to35,
  ...spokesBatch16Part2Pages,
  ...spokesBatch16Pages26to30,
  ...spokesBatch17Part1Pages,
  ...spokesBatch17_6to10,
  ...spokesBatch17_11to15,
  ...spokesBatch17_16to20,
  ...spokesBatch17_21to25,
  ...spokesBatch17_26to30,
  ...spokesBatch17_31to35,
  ...spokesBatch17GscWageStalking,
  ...spokesBatch17GscFraud,
  ...spokesBatch17GscTraffic,
  ...spokesBatch17GscDivorce,
];

export function getSpokePage(domain: string, slug: string): SpokePage | undefined {
  return SPOKE_PAGES.find((p) => p.domain === domain && p.slug === slug);
}

export function getSpokePagesByDomain(domain: string): SpokePage[] {
  return SPOKE_PAGES.filter((p) => p.domain === domain);
}
