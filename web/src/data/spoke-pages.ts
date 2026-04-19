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
import { spokesBatch18Part1Pages } from './spoke/spokes-batch18-part1';
import { spokesBatch18_6to10 } from './spoke/spokes-batch18-6to10';
import { spokesBatch18_11to15 } from './spoke/spokes-batch18-11to15';
import { spokesBatch18_16to20 } from './spoke/spokes-batch18-16to20';
import { spokesBatch18_21to25 } from './spoke/spokes-batch18-21to25';
import { spokesBatch18_26to30 } from './spoke/spokes-batch18-26to30';
import { spokesBatch18_31to35 } from './spoke/spokes-batch18-31to35';
import { spokesBatch19_1to7 } from './spoke/spokes-batch19-1to7';
import { spokesBatch19_8to14 } from './spoke/spokes-batch19-8to14';
import { spokesBatch19_15to21 } from './spoke/spokes-batch19-15to21';
import { spokesBatch19_22to28 } from './spoke/spokes-batch19-22to28';
import { spokesBatch19_29to35 } from './spoke/spokes-batch19-29to35';
import { spokesBatch20_1to7 } from './spoke/spokes-batch20-1to7';
import { spokesBatch20_8to14 } from './spoke/spokes-batch20-8to14';
import { spokesBatch20_15to21 } from './spoke/spokes-batch20-15to21';
import { spokesBatch20_22to27 } from './spoke/spokes-batch20-22to27';
import { spokesBatch21_1to7 } from './spoke/spokes-batch21-1to7';
import { spokesBatch21_8to14 } from './spoke/spokes-batch21-8to14';
import { spokesBatch21_15to21 } from './spoke/spokes-batch21-15to21';
import { spokesBatch21_22to28 } from './spoke/spokes-batch21-22to28';
import { spokesBatch21_29to35 } from './spoke/spokes-batch21-29to35';
import { spokesBatch22_1to7 } from './spoke/spokes-batch22-1to7';
import { spokesBatch22_8to14 } from './spoke/spokes-batch22-8to14';
import { spokesBatch22_15to21 } from './spoke/spokes-batch22-15to21';
import { spokesBatch22_22to28 } from './spoke/spokes-batch22-22to28';
import { spokesBatch22_29to35 } from './spoke/spokes-batch22-29to35';
import { spokesBatch23_1to7 } from './spoke/spokes-batch23-1to7';
import { spokesBatch23_8to14 } from './spoke/spokes-batch23-8to14';
import { spokesBatch23_15to21 } from './spoke/spokes-batch23-15to21';
import { spokesBatch23_22to28 } from './spoke/spokes-batch23-22to28';
import { spokesBatch23_29to35 } from './spoke/spokes-batch23-29to35';
import { spokesBatch24_1to7 } from './spoke/spokes-batch24-1to7';
import { spokesBatch24_8to14 } from './spoke/spokes-batch24-8to14';
import { spokesBatch24_15to21 } from './spoke/spokes-batch24-15to21';
import { spokesBatch24_22to28 } from './spoke/spokes-batch24-22to28';
import { spokesBatch24_29to35 } from './spoke/spokes-batch24-29to35';
import { spokesBatch25_1to7 } from './spoke/spokes-batch25-1to7';
import { spokesBatch25_8to14 } from './spoke/spokes-batch25-8to14';
import { spokesBatch25_15to21 } from './spoke/spokes-batch25-15to21';
import { spokesBatch25_22to28 } from './spoke/spokes-batch25-22to28';
import { spokesBatch25_29to35 } from './spoke/spokes-batch25-29to35';
import { spokesBatch26_1to8 } from './spoke/spokes-batch26-1to8';
import { spokesBatch26_9to14 } from './spoke/spokes-batch26-9to14';
import { spokesBatch26_15to19 } from './spoke/spokes-batch26-15to19';
import { spokesBatch26_20to24 } from './spoke/spokes-batch26-20to24';
import { spokesBatch26_25to29 } from './spoke/spokes-batch26-25to29';
import { spokesBatch26_30to33 } from './spoke/spokes-batch26-30to33';
import { spokesBatch26_34to35 } from './spoke/spokes-batch26-34to35';
import { spokesBatch26Extra_1to5 } from './spoke/spokes-batch26-extra-1to5';
import { spokesBatch26Extra_6to9 } from './spoke/spokes-batch26-extra-6to9';
import { spokesBatch26Extra_10to13 } from './spoke/spokes-batch26-extra-10to13';
import { spokesBatch27Pogual_1to5 } from './spoke/spokes-batch27-pogual-1to5';
import { spokesBatch27Unemployment_1to5 } from './spoke/spokes-batch27-unemployment-1to5';
import { spokesBatch27Unemployment_6to10 } from './spoke/spokes-batch27-unemployment-6to10';
import { spokesBatch27RetirementWage } from './spoke/spokes-batch27-retirement-wage';
import { spokesBatch27DismissalTraffic } from './spoke/spokes-batch27-dismissal-traffic';
import { spokesBatch27Misc } from './spoke/spokes-batch27-misc';
import { spokesBatch28Unemployment } from './spoke/spokes-batch28-unemployment';
import { spokesBatch28RetirementWageUnpaid } from './spoke/spokes-batch28-retirement-wage';
import { spokesBatch28PogualDismissal } from './spoke/spokes-batch28-pogual-dismissal';
import { spokesBatch28Misc } from './spoke/spokes-batch28-misc';
import { spokesBatch29Unemployment1 } from './spoke/spokes-batch29-unemployment-1';
import { spokesBatch29Unemployment2 } from './spoke/spokes-batch29-unemployment-2';
import { spokesBatch29RetirementWage } from './spoke/spokes-batch29-retirement-wage';
import { spokesBatch29DismissalPogual } from './spoke/spokes-batch29-dismissal-pogual';
import { spokesBatch29Misc } from './spoke/spokes-batch29-misc';
import { spokesBatch30Unemployment } from './spoke/spokes-batch30-unemployment';
import { spokesBatch30RetirementWage } from './spoke/spokes-batch30-retirement-wage';
import { spokesBatch30DismissalFraud } from './spoke/spokes-batch30-dismissal-fraud';
import { spokesBatch30PogualTraffic } from './spoke/spokes-batch30-pogual-traffic';
import { spokesBatch30Misc } from './spoke/spokes-batch30-misc';
import { spokesBatch31Unemployment } from './spoke/spokes-batch31-unemployment';
import { spokesBatch31RetirementWage } from './spoke/spokes-batch31-retirement-wage';
import { spokesBatch31DismissalFraud } from './spoke/spokes-batch31-dismissal-fraud';
import { spokesBatch31TrafficDivorce } from './spoke/spokes-batch31-traffic-divorce';
import { spokesBatch31Misc } from './spoke/spokes-batch31-misc';
import { spokesBatch32Unemployment } from './spoke/spokes-batch32-unemployment';
import { spokesBatch32RetirementWage } from './spoke/spokes-batch32-retirement-wage';
import { spokesBatch32DismissalFraud } from './spoke/spokes-batch32-dismissal-fraud';
import { spokesBatch32Misc } from './spoke/spokes-batch32-misc';
import { spokesBatch33Labor } from './spoke/spokes-batch33-labor';
import { spokesBatch33Nonlabor } from './spoke/spokes-batch33-nonlabor';
import { spokesBatch33Unemployment } from './spoke/spokes-batch33-unemployment';
import { spokesBatch34Labor } from './spoke/spokes-batch34-labor';
import { spokesBatch34Nonlabor } from './spoke/spokes-batch34-nonlabor';
import { spokesBatch35Unemployment } from './spoke/spokes-batch35-unemployment';
import { spokesBatch35Labor } from './spoke/spokes-batch35-labor';
import { spokesBatch35Nonlabor } from './spoke/spokes-batch35-nonlabor';
import { spokesBatch36GscPrecision } from './spoke/spokes-batch36-gsc-precision';
import { spokesBatch37Labor } from './spoke/spokes-batch37-labor';
import { spokesBatch37Nonlabor1 } from './spoke/spokes-batch37-nonlabor1';
import { spokesBatch37Nonlabor2 } from './spoke/spokes-batch37-nonlabor2';
import { spokesBatch38Labor } from './spoke/spokes-batch38-labor';
import { spokesBatch38Nonlabor } from './spoke/spokes-batch38-nonlabor';
import { spokesBatch39Labor } from './spoke/spokes-batch39-labor';
import { spokesBatch39Nonlabor1 } from './spoke/spokes-batch39-nonlabor1';
import { spokesBatch39Nonlabor2 } from './spoke/spokes-batch39-nonlabor2';
import { spokesBatch40Labor1 } from './spoke/spokes-batch40-labor1';
import { spokesBatch40Labor2 } from './spoke/spokes-batch40-labor2';
import { spokesBatch40Nonlabor1 } from './spoke/spokes-batch40-nonlabor1';
import { spokesBatch40Nonlabor2 } from './spoke/spokes-batch40-nonlabor2';

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
  ...spokesBatch18Part1Pages,
  ...spokesBatch18_6to10,
  ...spokesBatch18_11to15,
  ...spokesBatch18_16to20,
  ...spokesBatch18_21to25,
  ...spokesBatch18_26to30,
  ...spokesBatch18_31to35,
  ...spokesBatch19_1to7,
  ...spokesBatch19_8to14,
  ...spokesBatch19_15to21,
  ...spokesBatch19_22to28,
  ...spokesBatch19_29to35,
  ...spokesBatch20_1to7,
  ...spokesBatch20_8to14,
  ...spokesBatch20_15to21,
  ...spokesBatch20_22to27,
  ...spokesBatch21_1to7,
  ...spokesBatch21_8to14,
  ...spokesBatch21_15to21,
  ...spokesBatch21_22to28,
  ...spokesBatch21_29to35,
  ...spokesBatch22_1to7,
  ...spokesBatch22_8to14,
  ...spokesBatch22_15to21,
  ...spokesBatch22_22to28,
  ...spokesBatch22_29to35,
  ...spokesBatch23_1to7,
  ...spokesBatch23_8to14,
  ...spokesBatch23_15to21,
  ...spokesBatch23_22to28,
  ...spokesBatch23_29to35,
  ...spokesBatch24_1to7,
  ...spokesBatch24_8to14,
  ...spokesBatch24_15to21,
  ...spokesBatch24_22to28,
  ...spokesBatch24_29to35,
  ...spokesBatch25_1to7,
  ...spokesBatch25_8to14,
  ...spokesBatch25_15to21,
  ...spokesBatch25_22to28,
  ...spokesBatch25_29to35,
  ...spokesBatch26_1to8,
  ...spokesBatch26_9to14,
  ...spokesBatch26_15to19,
  ...spokesBatch26_20to24,
  ...spokesBatch26_25to29,
  ...spokesBatch26_30to33,
  ...spokesBatch26_34to35,
  ...spokesBatch26Extra_1to5,
  ...spokesBatch26Extra_6to9,
  ...spokesBatch26Extra_10to13,
  ...spokesBatch27Pogual_1to5,
  ...spokesBatch27Unemployment_1to5,
  ...spokesBatch27Unemployment_6to10,
  ...spokesBatch27RetirementWage,
  ...spokesBatch27DismissalTraffic,
  ...spokesBatch27Misc,
  ...spokesBatch28Unemployment,
  ...spokesBatch28RetirementWageUnpaid,
  ...spokesBatch28PogualDismissal,
  ...spokesBatch28Misc,
  ...spokesBatch29Unemployment1,
  ...spokesBatch29Unemployment2,
  ...spokesBatch29RetirementWage,
  ...spokesBatch29DismissalPogual,
  ...spokesBatch29Misc,
  ...spokesBatch30Unemployment,
  ...spokesBatch30RetirementWage,
  ...spokesBatch30DismissalFraud,
  ...spokesBatch30PogualTraffic,
  ...spokesBatch30Misc,
  ...spokesBatch31Unemployment,
  ...spokesBatch31RetirementWage,
  ...spokesBatch31DismissalFraud,
  ...spokesBatch31TrafficDivorce,
  ...spokesBatch31Misc,
  ...spokesBatch32Unemployment,
  ...spokesBatch32RetirementWage,
  ...spokesBatch32DismissalFraud,
  ...spokesBatch32Misc,
  ...spokesBatch33Labor,
  ...spokesBatch33Nonlabor,
  ...spokesBatch33Unemployment,
  ...spokesBatch34Labor,
  ...spokesBatch34Nonlabor,
  ...spokesBatch35Unemployment,
  ...spokesBatch35Labor,
  ...spokesBatch35Nonlabor,
  ...spokesBatch36GscPrecision,
  ...spokesBatch37Labor,
  ...spokesBatch37Nonlabor1,
  ...spokesBatch37Nonlabor2,
  ...spokesBatch38Labor,
  ...spokesBatch38Nonlabor,
  ...spokesBatch39Labor,
  ...spokesBatch39Nonlabor1,
  ...spokesBatch39Nonlabor2,
  ...spokesBatch40Labor1,
  ...spokesBatch40Labor2,
  ...spokesBatch40Nonlabor1,
  ...spokesBatch40Nonlabor2,
];

export function getSpokePage(domain: string, slug: string): SpokePage | undefined {
  return SPOKE_PAGES.find((p) => p.domain === domain && p.slug === slug);
}

export function getSpokePagesByDomain(domain: string): SpokePage[] {
  return SPOKE_PAGES.filter((p) => p.domain === domain);
}
