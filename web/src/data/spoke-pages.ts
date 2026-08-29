export interface SpokeSection {
  title: string;
  content: string;
  links?: { label: string; href: string; description?: string }[];
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
import { spokesBatch41Labor } from './spoke/spokes-batch41-labor';
import { spokesBatch41Nonlabor1 } from './spoke/spokes-batch41-nonlabor1';
import { spokesBatch41Nonlabor2 } from './spoke/spokes-batch41-nonlabor2';
import { spokesBatch42Labor } from './spoke/spokes-batch42-labor';
import { spokesBatch42Nonlabor1 } from './spoke/spokes-batch42-nonlabor1';
import { spokesBatch42Nonlabor2 } from './spoke/spokes-batch42-nonlabor2';
import { spokesBatch42Nonlabor3 } from './spoke/spokes-batch42-nonlabor3';
import { spokesBatch43Labor } from './spoke/spokes-batch43-labor';
import { spokesBatch43Nonlabor1 } from './spoke/spokes-batch43-nonlabor1';
import { spokesBatch43Nonlabor2 } from './spoke/spokes-batch43-nonlabor2';
import { spokesBatch43Nonlabor3 } from './spoke/spokes-batch43-nonlabor3';
import { spokesBatch43Divorce } from './spoke/spokes-batch43-divorce';
import { spokesBatch44Labor } from './spoke/spokes-batch44-labor';
import { spokesBatch44Nonlabor1 } from './spoke/spokes-batch44-nonlabor1';
import { spokesBatch44Nonlabor2 } from './spoke/spokes-batch44-nonlabor2';
import { spokesBatch45Labor } from './spoke/spokes-batch45-labor';
import { spokesBatch45Nonlabor1 } from './spoke/spokes-batch45-nonlabor1';
import { spokesBatch45Nonlabor2 } from './spoke/spokes-batch45-nonlabor2';
import { spokesBatch45Nonlabor3 } from './spoke/spokes-batch45-nonlabor3';
import { spokesBatch46Labor } from './spoke/spokes-batch46-labor';
import { spokesBatch46Nonlabor1 } from './spoke/spokes-batch46-nonlabor1';
import { spokesBatch46Nonlabor2 } from './spoke/spokes-batch46-nonlabor2';
import { spokesBatch46Nonlabor3 } from './spoke/spokes-batch46-nonlabor3';
import { spokesBatch47DefameJeonse } from './spoke/spokes-batch47-defame-jeonse';
import { spokesBatch47Dismissal } from './spoke/spokes-batch47-dismissal';
import { spokesBatch47WageUnemp } from './spoke/spokes-batch47-wage-unemp';
import { spokesBatch47Retirement } from './spoke/spokes-batch47-retirement';
import { spokesBatch47Fraud } from './spoke/spokes-batch47-fraud';
import { spokesBatch47Traffic } from './spoke/spokes-batch47-traffic';
import { spokesBatch47Divorce } from './spoke/spokes-batch47-divorce';
import { spokesBatch47Inheritance } from './spoke/spokes-batch47-inheritance';
import { spokesBatch47Misc } from './spoke/spokes-batch47-misc';
import { spokesBatch48Dismissal } from './spoke/spokes-batch48-dismissal';
import { spokesBatch48Fraud } from './spoke/spokes-batch48-fraud';
import { spokesBatch48Traffic } from './spoke/spokes-batch48-traffic';
import { spokesBatch48Divorce } from './spoke/spokes-batch48-divorce';
import { spokesBatch48Inheritance } from './spoke/spokes-batch48-inheritance';
import { spokesBatch48WageUnemp } from './spoke/spokes-batch48-wage-unemp';
import { spokesBatch48DefameJeonse } from './spoke/spokes-batch48-defame-jeonse';
import { spokesBatch48Misc } from './spoke/spokes-batch48-misc';
import { spokesBatch49WageUnempRetire } from './spoke/spokes-batch49-wage-unemp-retire';
import { spokesBatch49DivorceInheritance } from './spoke/spokes-batch49-divorce-inheritance';
import { spokesBatch49MiscA } from './spoke/spokes-batch49-misc-a';
import { spokesBatch49Dismissal } from './spoke/spokes-batch49-dismissal';
import { spokesBatch49Fraud } from './spoke/spokes-batch49-fraud';
import { spokesBatch49Traffic } from './spoke/spokes-batch49-traffic';
import { spokesBatch49MiscB } from './spoke/spokes-batch49-misc-b';
import { spokesBatch50Dismissal } from './spoke/spokes-batch50-dismissal';
import { spokesBatch50WageUnempRetire } from './spoke/spokes-batch50-wage-unemp-retire';
import { spokesBatch50Fraud } from './spoke/spokes-batch50-fraud';
import { spokesBatch50Traffic } from './spoke/spokes-batch50-traffic';
import { spokesBatch50DivorceInheritance } from './spoke/spokes-batch50-divorce-inheritance';
import { spokesBatch50DefameJeonse } from './spoke/spokes-batch50-defame-jeonse';
import { spokesBatch50Misc } from './spoke/spokes-batch50-misc';
import { spokesBatch51Dismissal } from './spoke/spokes-batch51-dismissal';
import { spokesBatch51WageUnempRetire } from './spoke/spokes-batch51-wage-unemp-retire';
import { spokesBatch51Fraud } from './spoke/spokes-batch51-fraud';
import { spokesBatch51Traffic } from './spoke/spokes-batch51-traffic';
import { spokesBatch51DivorceInheritance } from './spoke/spokes-batch51-divorce-inheritance';
import { spokesBatch51DefameJeonseStalking } from './spoke/spokes-batch51-defame-jeonse-stalking';
import { spokesBatch51Misc } from './spoke/spokes-batch51-misc';
import { spokesBatch52Fraud } from './spoke/spokes-batch52-fraud';
import { spokesBatch52Traffic } from './spoke/spokes-batch52-traffic';
import { spokesBatch52Divorce } from './spoke/spokes-batch52-divorce';
import { spokesBatch52Dismissal } from './spoke/spokes-batch52-dismissal';
import { spokesBatch52WageUnempRetire } from './spoke/spokes-batch52-wage-unemp-retire';
import { spokesBatch52InheritanceDefamation } from './spoke/spokes-batch52-inheritance-defamation';
import { spokesBatch52JeonseStalkingAssaultCS } from './spoke/spokes-batch52-jeonse-stalking-assault-cs';
import { spokesBatch53Dismissal } from './spoke/spokes-batch53-dismissal';
import { spokesBatch53WageUnempRetire } from './spoke/spokes-batch53-wage-unemp-retire';
import { spokesBatch53Fraud } from './spoke/spokes-batch53-fraud';
import { spokesBatch53Traffic } from './spoke/spokes-batch53-traffic';
import { spokesBatch53Divorce } from './spoke/spokes-batch53-divorce';
import { spokesBatch53InheritanceDefamation } from './spoke/spokes-batch53-inheritance-defamation';
import { spokesBatch53JeonseStalkingAssaultCS } from './spoke/spokes-batch53-jeonse-stalking-assault-cs';
import { spokesBatch54Fraud } from './spoke/spokes-batch54-fraud';
import { spokesBatch54Traffic } from './spoke/spokes-batch54-traffic';
import { spokesBatch54Divorce } from './spoke/spokes-batch54-divorce';
import { spokesBatch54Dismissal } from './spoke/spokes-batch54-dismissal';
import { spokesBatch54InheritanceDefamation } from './spoke/spokes-batch54-inheritance-defamation';
import { spokesBatch54WageUnempRetire } from './spoke/spokes-batch54-wage-unemp-retire';
import { spokesBatch54JeonseStalkingAssaultCS } from './spoke/spokes-batch54-jeonse-stalking-assault-cs';
import { spokesBatch54FairAllowance } from './spoke/spokes-batch54-fair-allowance';
import { spokesBatch55DismissalA } from './spoke/spokes-batch55-dismissal-a';
import { spokesBatch55DismissalB } from './spoke/spokes-batch55-dismissal-b';
import { spokesBatch55WageUnemp } from './spoke/spokes-batch55-wage-unemp';
import { spokesBatch55Retire } from './spoke/spokes-batch55-retire';
import { spokesBatch55FraudA } from './spoke/spokes-batch55-fraud-a';
import { spokesBatch55FraudB } from './spoke/spokes-batch55-fraud-b';
import { spokesBatch55TrafficA } from './spoke/spokes-batch55-traffic-a';
import { spokesBatch55TrafficB } from './spoke/spokes-batch55-traffic-b';
import { spokesBatch55DivorceA } from './spoke/spokes-batch55-divorce-a';
import { spokesBatch55DivorceB } from './spoke/spokes-batch55-divorce-b';
import { spokesBatch55Inheritance } from './spoke/spokes-batch55-inheritance';
import { spokesBatch55Defamation } from './spoke/spokes-batch55-defamation';
import { spokesBatch55JeonseStalking } from './spoke/spokes-batch55-jeonse-stalking';
import { spokesBatch55AssaultCsDui } from './spoke/spokes-batch55-assault-cs-dui';
import { spokesBatch56DismissalA } from './spoke/spokes-batch56-dismissal-a';
import { spokesBatch56DismissalB } from './spoke/spokes-batch56-dismissal-b';
import { spokesBatch56WageUnemp } from './spoke/spokes-batch56-wage-unemp';
import { spokesBatch56Retire } from './spoke/spokes-batch56-retire';
import { spokesBatch56FraudA } from './spoke/spokes-batch56-fraud-a';
import { spokesBatch56FraudB } from './spoke/spokes-batch56-fraud-b';
import { spokesBatch56TrafficA } from './spoke/spokes-batch56-traffic-a';
import { spokesBatch56TrafficB } from './spoke/spokes-batch56-traffic-b';
import { spokesBatch56Divorce } from './spoke/spokes-batch56-divorce';
import { spokesBatch56Inheritance } from './spoke/spokes-batch56-inheritance';
import { spokesBatch56Defamation } from './spoke/spokes-batch56-defamation';
import { spokesBatch56JeonseStalking } from './spoke/spokes-batch56-jeonse-stalking';
import { spokesBatch56AssaultCsDui } from './spoke/spokes-batch56-assault-cs-dui';
import { spokesBatch57News } from './spoke/spokes-batch57-news';
import { spokesBatch58DismissalA } from './spoke/spokes-batch58-dismissal-a';
import { spokesBatch58DismissalB } from './spoke/spokes-batch58-dismissal-b';
import { spokesBatch58WageUnemp } from './spoke/spokes-batch58-wage-unemp';
import { spokesBatch58Retire } from './spoke/spokes-batch58-retire';
import { spokesBatch58FraudA } from './spoke/spokes-batch58-fraud-a';
import { spokesBatch58FraudB } from './spoke/spokes-batch58-fraud-b';
import { spokesBatch58TrafficA } from './spoke/spokes-batch58-traffic-a';
import { spokesBatch58TrafficB } from './spoke/spokes-batch58-traffic-b';
import { spokesBatch58Divorce } from './spoke/spokes-batch58-divorce';
import { spokesBatch58Inheritance } from './spoke/spokes-batch58-inheritance';
import { spokesBatch58Defamation } from './spoke/spokes-batch58-defamation';
import { spokesBatch58JeonseStalking } from './spoke/spokes-batch58-jeonse-stalking';
import { spokesBatch58AssaultCsDui } from './spoke/spokes-batch58-assault-cs-dui';
import { spokesBatch58NewsChildcare } from './spoke/spokes-batch58-news-childcare';
import { spokesBatch58NewsElection } from './spoke/spokes-batch58-news-election';
import { spokesBatch59Dismissal } from './spoke/spokes-batch59-dismissal';
import { spokesBatch59WageUnempRetire } from './spoke/spokes-batch59-wage-unemp-retire';
import { spokesBatch59Fraud } from './spoke/spokes-batch59-fraud';
import { spokesBatch59Traffic } from './spoke/spokes-batch59-traffic';
import { spokesBatch59DivorceInheritance } from './spoke/spokes-batch59-divorce-inheritance';
import { spokesBatch59DefameJeonseStalking } from './spoke/spokes-batch59-defame-jeonse-stalking';
import { spokesBatch59AssaultCsDui } from './spoke/spokes-batch59-assault-cs-dui';
import { spokesBatch60Dismissal } from './spoke/spokes-batch60-dismissal';
import { spokesBatch60WageUnempRetire } from './spoke/spokes-batch60-wage-unemp-retire';
import { spokesBatch60Fraud } from './spoke/spokes-batch60-fraud';
import { spokesBatch60Traffic } from './spoke/spokes-batch60-traffic';
import { spokesBatch60DivorceInheritance } from './spoke/spokes-batch60-divorce-inheritance';
import { spokesBatch60DefameJeonseStalking } from './spoke/spokes-batch60-defame-jeonse-stalking';
import { spokesBatch60AssaultCsDui } from './spoke/spokes-batch60-assault-cs-dui';
import { spokesBatch61Dismissal } from './spoke/spokes-batch61-dismissal';
import { spokesBatch61WageUnempRetire } from './spoke/spokes-batch61-wage-unemp-retire';
import { spokesBatch61Fraud } from './spoke/spokes-batch61-fraud';
import { spokesBatch61Traffic } from './spoke/spokes-batch61-traffic';
import { spokesBatch61DivorceInheritance } from './spoke/spokes-batch61-divorce-inheritance';
import { spokesBatch61DefameJeonseStalking } from './spoke/spokes-batch61-defame-jeonse-stalking';
import { spokesBatch61AssaultCsDui } from './spoke/spokes-batch61-assault-cs-dui';
import { spokesBatch62Dismissal } from './spoke/spokes-batch62-dismissal';
import { spokesBatch62WageUnempRetire } from './spoke/spokes-batch62-wage-unemp-retire';
import { spokesBatch62Fraud } from './spoke/spokes-batch62-fraud';
import { spokesBatch62Traffic } from './spoke/spokes-batch62-traffic';
import { spokesBatch62DivorceInheritance } from './spoke/spokes-batch62-divorce-inheritance';
import { spokesBatch62DefameJeonseStalking } from './spoke/spokes-batch62-defame-jeonse-stalking';
import { spokesBatch62AssaultCsDui } from './spoke/spokes-batch62-assault-cs-dui';
import { spokesBatch63Dismissal } from './spoke/spokes-batch63-dismissal';
import { spokesBatch63WageUnempRetire } from './spoke/spokes-batch63-wage-unemp-retire';
import { spokesBatch63Fraud } from './spoke/spokes-batch63-fraud';
import { spokesBatch63Traffic } from './spoke/spokes-batch63-traffic';
import { spokesBatch63DivorceInheritance } from './spoke/spokes-batch63-divorce-inheritance';
import { spokesBatch63DefameJeonseStalking } from './spoke/spokes-batch63-defame-jeonse-stalking';
import { spokesBatch63AssaultCsDui } from './spoke/spokes-batch63-assault-cs-dui';
import { spokesBatch64Dismissal } from './spoke/spokes-batch64-dismissal';
import { spokesBatch64WageUnempRetire } from './spoke/spokes-batch64-wage-unemp-retire';
import { spokesBatch64Fraud } from './spoke/spokes-batch64-fraud';
import { spokesBatch64Traffic } from './spoke/spokes-batch64-traffic';
import { spokesBatch64DivorceInheritance } from './spoke/spokes-batch64-divorce-inheritance';
import { spokesBatch64DefameJeonseStalking } from './spoke/spokes-batch64-defame-jeonse-stalking';
import { spokesBatch64AssaultCsDui } from './spoke/spokes-batch64-assault-cs-dui';
import { spokesBatch65Dismissal } from './spoke/spokes-batch65-dismissal';
import { spokesBatch65WageUnempRetire } from './spoke/spokes-batch65-wage-unemp-retire';
import { spokesBatch65Fraud } from './spoke/spokes-batch65-fraud';
import { spokesBatch65Traffic } from './spoke/spokes-batch65-traffic';
import { spokesBatch65DivorceInheritance } from './spoke/spokes-batch65-divorce-inheritance';
import { spokesBatch65DefameJeonseStalking } from './spoke/spokes-batch65-defame-jeonse-stalking';
import { spokesBatch65AssaultCsDui } from './spoke/spokes-batch65-assault-cs-dui';
import { spokesBatch66Dismissal } from './spoke/spokes-batch66-dismissal';
import { spokesBatch66WageUnempRetire } from './spoke/spokes-batch66-wage-unemp-retire';
import { spokesBatch66Fraud } from './spoke/spokes-batch66-fraud';
import { spokesBatch66Traffic } from './spoke/spokes-batch66-traffic';
import { spokesBatch66DivorceInheritance } from './spoke/spokes-batch66-divorce-inheritance';
import { spokesBatch66DefameJeonseStalking } from './spoke/spokes-batch66-defame-jeonse-stalking';
import { spokesBatch66AssaultCsDui } from './spoke/spokes-batch66-assault-cs-dui';
import { spokesBatch67Dismissal } from './spoke/spokes-batch67-dismissal';
import { spokesBatch67WageUnempRetire } from './spoke/spokes-batch67-wage-unemp-retire';
import { spokesBatch67Fraud } from './spoke/spokes-batch67-fraud';
import { spokesBatch67Traffic } from './spoke/spokes-batch67-traffic';
import { spokesBatch67DivorceInheritance } from './spoke/spokes-batch67-divorce-inheritance';
import { spokesBatch67DefameJeonseStalking } from './spoke/spokes-batch67-defame-jeonse-stalking';
import { spokesBatch67AssaultCsDui } from './spoke/spokes-batch67-assault-cs-dui';
import { spokesBatch68Dismissal } from './spoke/spokes-batch68-dismissal';
import { spokesBatch68WageUnempRetire } from './spoke/spokes-batch68-wage-unemp-retire';
import { spokesBatch68Fraud } from './spoke/spokes-batch68-fraud';
import { spokesBatch68Traffic } from './spoke/spokes-batch68-traffic';
import { spokesBatch68AssaultCsDui } from './spoke/spokes-batch68-assault-cs-dui';
import { spokesBatch68DefameJeonseStalking } from './spoke/spokes-batch68-defame-jeonse-stalking';
import { spokesBatch68DivorceInheritance } from './spoke/spokes-batch68-divorce-inheritance';
import { spokesBatch69Dismissal } from './spoke/spokes-batch69-dismissal';
import { spokesBatch69WageUnempRetire } from './spoke/spokes-batch69-wage-unemp-retire';
import { spokesBatch69Fraud } from './spoke/spokes-batch69-fraud';
import { spokesBatch69Traffic } from './spoke/spokes-batch69-traffic';
import { spokesBatch69AssaultCsDui } from './spoke/spokes-batch69-assault-cs-dui';
import { spokesBatch69DefameJeonseStalking } from './spoke/spokes-batch69-defame-jeonse-stalking';
import { spokesBatch69DivorceInheritance } from './spoke/spokes-batch69-divorce-inheritance';
import { spokesBatch70Dismissal } from './spoke/spokes-batch70-dismissal';
import { spokesBatch70WageUnempRetire } from './spoke/spokes-batch70-wage-unemp-retire';
import { spokesBatch70Fraud } from './spoke/spokes-batch70-fraud';
import { spokesBatch70Traffic } from './spoke/spokes-batch70-traffic';
import { spokesBatch70DivorceInheritCs } from './spoke/spokes-batch70-divorce-inherit-cs';
import { spokesBatch70DefameJeonseStalking } from './spoke/spokes-batch70-defame-jeonse-stalking';
import { spokesBatch70AssaultDui } from './spoke/spokes-batch70-assault-dui';
import { spokesBatch71Dismissal } from './spoke/spokes-batch71-dismissal';
import { spokesBatch71WageUnempRetire } from './spoke/spokes-batch71-wage-unemp-retire';
import { spokesBatch71Fraud } from './spoke/spokes-batch71-fraud';
import { spokesBatch71Traffic } from './spoke/spokes-batch71-traffic';
import { spokesBatch71DivorceInheritCs } from './spoke/spokes-batch71-divorce-inherit-cs';
import { spokesBatch71DefameJeonseStalking } from './spoke/spokes-batch71-defame-jeonse-stalking';
import { spokesBatch71AssaultDui } from './spoke/spokes-batch71-assault-dui';
import { spokesBatch74Dismissal } from './spoke/spokes-batch74-dismissal';
import { spokesBatch74WageUnempRetire } from './spoke/spokes-batch74-wage-unemp-retire';
import { spokesBatch74Fraud } from './spoke/spokes-batch74-fraud';
import { spokesBatch74Traffic } from './spoke/spokes-batch74-traffic';
import { spokesBatch74DivorceInheritCs } from './spoke/spokes-batch74-divorce-inherit-cs';
import { spokesBatch74DefameJeonseStalking } from './spoke/spokes-batch74-defame-jeonse-stalking';
import { spokesBatch74AssaultDui } from './spoke/spokes-batch74-assault-dui';
import { spokesBatch75Fraud } from './spoke/spokes-batch75-fraud';
import { spokesBatch76Fraud } from './spoke/spokes-batch76-fraud';
import { spokesBatch77Fraud } from './spoke/spokes-batch77-fraud';
import { spokesBatch78Fraud } from './spoke/spokes-batch78-fraud';
import { spokesBatch78SexCrime } from './spoke/spokes-batch78-sex-crime';
import { spokesBatch78AssaultDui } from './spoke/spokes-batch78-assault-dui';
import { spokesBatch78DivorceInheritTraffic } from './spoke/spokes-batch78-divorce-inherit-traffic';
import { spokesBatch78DefameJeonseFraud } from './spoke/spokes-batch78-defame-jeonsefraud';
import { spokesBatch78Dismissal } from './spoke/spokes-batch78-dismissal';
import { spokesBatch78WageUnempRetireIa } from './spoke/spokes-batch78-wage-unemp-retire-ia';
import { spokesBatch79Fraud } from './spoke/spokes-batch79-fraud';
import { spokesBatch79SexCrime } from './spoke/spokes-batch79-sex-crime';
import { spokesBatch79AssaultDui } from './spoke/spokes-batch79-assault-dui';
import { spokesBatch79DefameJeonseFraud } from './spoke/spokes-batch79-defame-jeonsefraud';
import { spokesBatch79DivorceInheritTraffic } from './spoke/spokes-batch79-divorce-inherit-traffic';
import { spokesBatch79Dismissal } from './spoke/spokes-batch79-dismissal';
import { spokesBatch79WageUnempRetire } from './spoke/spokes-batch79-wage-unemp-retire';
import { spokesBatch80SexCrime } from './spoke/spokes-batch80-sex-crime';
import { spokesBatch80Fraud } from './spoke/spokes-batch80-fraud';
import { spokesBatch80DefameJeonseFraud } from './spoke/spokes-batch80-defame-jeonsefraud';
import { spokesBatch80AssaultDui } from './spoke/spokes-batch80-assault-dui';
import { spokesBatch80DivorceInheritTraffic } from './spoke/spokes-batch80-divorce-inherit-traffic';
import { spokesBatch80Dismissal } from './spoke/spokes-batch80-dismissal';
import { spokesBatch80WageUnempRetireIa } from './spoke/spokes-batch80-wage-unemp-retire-ia';
import { spokesBatch81FraudSexCrime } from './spoke/spokes-batch81-fraud-sexcrime';
import { spokesBatch81AssaultDuiJeonseFraud } from './spoke/spokes-batch81-assault-dui-jeonsefraud';
import { spokesBatch81DefameDivorceInheritTraffic } from './spoke/spokes-batch81-defame-divorce-inherit-traffic';
import { spokesBatch81Labor } from './spoke/spokes-batch81-labor';
import { spokesBatch82FraudSexCrime } from './spoke/spokes-batch82-fraud-sexcrime';
import { spokesBatch82AssaultDuiJeonseFraud } from './spoke/spokes-batch82-assault-dui-jeonsefraud';
import { spokesBatch82DefameDivorceInheritTraffic } from './spoke/spokes-batch82-defame-divorce-inherit-traffic';
import { spokesBatch82Labor } from './spoke/spokes-batch82-labor';
import { spokesBatch83FraudSexCrime } from './spoke/spokes-batch83-fraud-sexcrime';
import { spokesBatch83AssaultDuiJeonseFraud } from './spoke/spokes-batch83-assault-dui-jeonsefraud';
import { spokesBatch83DefameDivorceInheritTraffic } from './spoke/spokes-batch83-defame-divorce-inherit-traffic';
import { spokesBatch83Labor } from './spoke/spokes-batch83-labor';
import { spokesBatch84FraudSexCrime } from './spoke/spokes-batch84-fraud-sexcrime';
import { spokesBatch84AssaultDuiJeonseFraud } from './spoke/spokes-batch84-assault-dui-jeonsefraud';
import { spokesBatch84DefameDivorceInheritTraffic } from './spoke/spokes-batch84-defame-divorce-inherit-traffic';
import { spokesBatch84Labor } from './spoke/spokes-batch84-labor';
import { spokesBatch85FraudSexCrime } from './spoke/spokes-batch85-fraud-sexcrime';
import { spokesBatch85AssaultDuiJeonseFraud } from './spoke/spokes-batch85-assault-dui-jeonsefraud';
import { spokesBatch85DefameDivorceInheritTraffic } from './spoke/spokes-batch85-defame-divorce-inherit-traffic';
import { spokesBatch85Labor } from './spoke/spokes-batch85-labor';
import { spokesBatch86FraudSexCrime } from './spoke/spokes-batch86-fraud-sexcrime';
import { spokesBatch86AssaultDuiJeonseFraud } from './spoke/spokes-batch86-assault-dui-jeonsefraud';
import { spokesBatch86DefameDivorceInheritTraffic } from './spoke/spokes-batch86-defame-divorce-inherit-traffic';
import { spokesBatch86Labor } from './spoke/spokes-batch86-labor';
import { spokesBatch87FraudSexCrime } from './spoke/spokes-batch87-fraud-sexcrime';
import { spokesBatch87AssaultDuiJeonseFraud } from './spoke/spokes-batch87-assault-dui-jeonsefraud';
import { spokesBatch87DefameDivorceInheritTraffic } from './spoke/spokes-batch87-defame-divorce-inherit-traffic';
import { spokesBatch87Labor } from './spoke/spokes-batch87-labor';
import { spokesBatch88FraudSexCrime } from './spoke/spokes-batch88-fraud-sexcrime';
import { spokesBatch88AssaultDuiJeonseFraud } from './spoke/spokes-batch88-assault-dui-jeonsefraud';
import { spokesBatch88DefameDivorceInheritTraffic } from './spoke/spokes-batch88-defame-divorce-inherit-traffic';
import { spokesBatch88Labor } from './spoke/spokes-batch88-labor';
import { spokesBatch89FraudSexCrime } from './spoke/spokes-batch89-fraud-sexcrime';
import { spokesBatch89AssaultDuiJeonseFraud } from './spoke/spokes-batch89-assault-dui-jeonsefraud';
import { spokesBatch89DefameDivorceInheritTraffic } from './spoke/spokes-batch89-defame-divorce-inherit-traffic';
import { spokesBatch89Labor } from './spoke/spokes-batch89-labor';
import { spokesBatch90FraudSexCrime } from './spoke/spokes-batch90-fraud-sexcrime';
import { spokesBatch90AssaultDuiJeonseFraud } from './spoke/spokes-batch90-assault-dui-jeonsefraud';
import { spokesBatch90DefameDivorceInheritTraffic } from './spoke/spokes-batch90-defame-divorce-inherit-traffic';
import { spokesBatch90Labor } from './spoke/spokes-batch90-labor';
import { spokesBatch91FraudSexCrime } from './spoke/spokes-batch91-fraud-sexcrime';
import { spokesBatch92FraudSexCrime } from './spoke/spokes-batch92-fraud-sexcrime';
import { spokesBatch92AssaultDuiJeonseFraud } from './spoke/spokes-batch92-assault-dui-jeonsefraud';
import { spokesBatch92DefameDivorceInheritTraffic } from './spoke/spokes-batch92-defame-divorce-inherit-traffic';
import { spokesBatch92Labor } from './spoke/spokes-batch92-labor';
import { spokesBatch93FraudSexCrime } from './spoke/spokes-batch93-fraud-sexcrime';
import { spokesBatch93AssaultDuiJeonseFraud } from './spoke/spokes-batch93-assault-dui-jeonsefraud';
import { spokesBatch93DefameDivorceInheritTraffic } from './spoke/spokes-batch93-defame-divorce-inherit-traffic';
import { spokesBatch93Labor } from './spoke/spokes-batch93-labor';
import { spokesBatch94FraudSexCrime } from './spoke/spokes-batch94-fraud-sexcrime';
import { spokesBatch94AssaultDuiJeonseFraud } from './spoke/spokes-batch94-assault-dui-jeonsefraud';
import { spokesBatch94DefameDivorceInheritTraffic } from './spoke/spokes-batch94-defame-divorce-inherit-traffic';
import { spokesBatch94Labor } from './spoke/spokes-batch94-labor';
import { spokesBatch95FraudSexCrime } from './spoke/spokes-batch95-fraud-sexcrime';
import { spokesBatch95AssaultDuiJeonseFraud } from './spoke/spokes-batch95-assault-dui-jeonsefraud';
import { spokesBatch95DefameDivorceInheritTraffic } from './spoke/spokes-batch95-defame-divorce-inherit-traffic';
import { spokesBatch95Labor } from './spoke/spokes-batch95-labor';
import { spokesBatch96FraudSexCrime } from './spoke/spokes-batch96-fraud-sexcrime';
import { spokesBatch96AssaultDuiJeonseFraud } from './spoke/spokes-batch96-assault-dui-jeonsefraud';
import { spokesBatch96DefameDivorceInheritTraffic } from './spoke/spokes-batch96-defame-divorce-inherit-traffic';
import { spokesBatch96Labor } from './spoke/spokes-batch96-labor';
import { spokesBatch97FraudSexCrime } from './spoke/spokes-batch97-fraud-sexcrime';
import { spokesBatch97AssaultDuiJeonseFraud } from './spoke/spokes-batch97-assault-dui-jeonsefraud';
import { spokesBatch97DefameDivorceInheritTraffic } from './spoke/spokes-batch97-defame-divorce-inherit-traffic';
import { spokesBatch97Labor } from './spoke/spokes-batch97-labor';
import { spokesBatch98FraudSexCrime } from './spoke/spokes-batch98-fraud-sexcrime';
import { spokesBatch98AssaultDuiJeonseFraud } from './spoke/spokes-batch98-assault-dui-jeonsefraud';
import { spokesBatch98DefameDivorceInheritTraffic } from './spoke/spokes-batch98-defame-divorce-inherit-traffic';
import { spokesBatch98Labor } from './spoke/spokes-batch98-labor';
import { spokesBatch99FraudSexCrime } from './spoke/spokes-batch99-fraud-sexcrime';
import { spokesBatch99AssaultDuiJeonseFraud } from './spoke/spokes-batch99-assault-dui-jeonsefraud';
import { spokesBatch99DefameDivorceInheritTraffic } from './spoke/spokes-batch99-defame-divorce-inherit-traffic';
import { spokesBatch99Labor } from './spoke/spokes-batch99-labor';
import { spokesBatch100FraudSexCrime } from './spoke/spokes-batch100-fraud-sexcrime';
import { spokesBatch100AssaultDuiJeonseFraud } from './spoke/spokes-batch100-assault-dui-jeonsefraud';
import { spokesBatch100DefameDivorceInheritTraffic } from './spoke/spokes-batch100-defame-divorce-inherit-traffic';
import { spokesBatch100Labor } from './spoke/spokes-batch100-labor';
import { spokesBatch101FraudSexCrime } from './spoke/spokes-batch101-fraud-sexcrime';
import { spokesBatch101AssaultDuiJeonseFraud } from './spoke/spokes-batch101-assault-dui-jeonsefraud';
import { spokesBatch101DefameDivorceInheritTraffic } from './spoke/spokes-batch101-defame-divorce-inherit-traffic';
import { spokesBatch101Labor } from './spoke/spokes-batch101-labor';
import { spokesBatch102FraudSexCrime } from './spoke/spokes-batch102-fraud-sexcrime';
import { spokesBatch102AssaultDuiJeonseFraud } from './spoke/spokes-batch102-assault-dui-jeonsefraud';
import { spokesBatch102DefameDivorceInheritTraffic } from './spoke/spokes-batch102-defame-divorce-inherit-traffic';
import { spokesBatch102Labor } from './spoke/spokes-batch102-labor';
import { spokesBatch103FraudSexCrime } from './spoke/spokes-batch103-fraud-sexcrime';
import { spokesBatch103AssaultDuiJeonseFraud } from './spoke/spokes-batch103-assault-dui-jeonsefraud';
import { spokesBatch103DefameDivorceInheritTraffic } from './spoke/spokes-batch103-defame-divorce-inherit-traffic';
import { spokesBatch103Labor } from './spoke/spokes-batch103-labor';
import { spokesBatch104FraudSexCrime } from './spoke/spokes-batch104-fraud-sexcrime';
import { spokesBatch104AssaultDuiJeonseFraud } from './spoke/spokes-batch104-assault-dui-jeonsefraud';
import { spokesBatch104DefameDivorceInheritTraffic } from './spoke/spokes-batch104-defame-divorce-inherit-traffic';
import { spokesBatch104Labor } from './spoke/spokes-batch104-labor';
import { spokesBatch105FraudSexCrime } from './spoke/spokes-batch105-fraud-sexcrime';
import { spokesBatch105AssaultDuiJeonseFraud } from './spoke/spokes-batch105-assault-dui-jeonsefraud';
import { spokesBatch105DefameDivorceInheritTraffic } from './spoke/spokes-batch105-defame-divorce-inherit-traffic';
import { spokesBatch105Labor } from './spoke/spokes-batch105-labor';
import { spokesBatch106FraudSexCrime } from './spoke/spokes-batch106-fraud-sexcrime';
import { spokesBatch106AssaultDuiJeonseFraud } from './spoke/spokes-batch106-assault-dui-jeonsefraud';
import { spokesBatch106DefameDivorceInheritTraffic } from './spoke/spokes-batch106-defame-divorce-inherit-traffic';
import { spokesBatch106Labor } from './spoke/spokes-batch106-labor';
import { spokesBatch107FraudSexCrime } from './spoke/spokes-batch107-fraud-sexcrime';
import { spokesBatch107AssaultDuiJeonseFraud } from './spoke/spokes-batch107-assault-dui-jeonsefraud';
import { spokesBatch107DefameDivorceInheritTraffic } from './spoke/spokes-batch107-defame-divorce-inherit-traffic';
import { spokesBatch107Labor } from './spoke/spokes-batch107-labor';
import { spokesBatch108FraudSexCrime } from './spoke/spokes-batch108-fraud-sexcrime';
import { spokesBatch108AssaultDuiJeonseFraud } from './spoke/spokes-batch108-assault-dui-jeonsefraud';
import { spokesBatch108DefameDivorceInheritTraffic } from './spoke/spokes-batch108-defame-divorce-inherit-traffic';
import { spokesBatch108Labor } from './spoke/spokes-batch108-labor';
import { spokesBatch109FraudSexCrime } from './spoke/spokes-batch109-fraud-sexcrime';
import { spokesBatch109AssaultDuiJeonseFraud } from './spoke/spokes-batch109-assault-dui-jeonsefraud';
import { spokesBatch109DefameDivorceInheritTraffic } from './spoke/spokes-batch109-defame-divorce-inherit-traffic';
import { spokesBatch109Labor } from './spoke/spokes-batch109-labor';
import { spokesBatch110FraudSexCrime } from './spoke/spokes-batch110-fraud-sexcrime';
import { spokesBatch110AssaultDuiJeonseFraud } from './spoke/spokes-batch110-assault-dui-jeonsefraud';
import { spokesBatch110DefameDivorceInheritTraffic } from './spoke/spokes-batch110-defame-divorce-inherit-traffic';
import { spokesBatch110Labor } from './spoke/spokes-batch110-labor';
import { spokesBatch111FraudSexCrime } from './spoke/spokes-batch111-fraud-sexcrime';
import { spokesBatch111AssaultDuiJeonseFraud } from './spoke/spokes-batch111-assault-dui-jeonsefraud';
import { spokesBatch111DefameDivorceInheritTraffic } from './spoke/spokes-batch111-defame-divorce-inherit-traffic';
import { spokesBatch111Labor } from './spoke/spokes-batch111-labor';
import { spokesBatch112FraudSexCrime } from './spoke/spokes-batch112-fraud-sexcrime';
import { spokesBatch112AssaultDuiJeonseFraud } from './spoke/spokes-batch112-assault-dui-jeonsefraud';
import { spokesBatch112DefameDivorceInheritTraffic } from './spoke/spokes-batch112-defame-divorce-inherit-traffic';
import { spokesBatch112Labor } from './spoke/spokes-batch112-labor';
import { spokesBatch113FraudSexCrime } from './spoke/spokes-batch113-fraud-sexcrime';
import { spokesBatch113AssaultDuiJeonseFraud } from './spoke/spokes-batch113-assault-dui-jeonsefraud';
import { spokesBatch113DefameDivorceInheritTraffic } from './spoke/spokes-batch113-defame-divorce-inherit-traffic';
import { spokesBatch113Labor } from './spoke/spokes-batch113-labor';
import { spokesBatch114FraudSexCrime } from './spoke/spokes-batch114-fraud-sexcrime';
import { spokesBatch114AssaultDuiJeonseFraud } from './spoke/spokes-batch114-assault-dui-jeonsefraud';
import { spokesBatch114DefameDivorceInheritTraffic } from './spoke/spokes-batch114-defame-divorce-inherit-traffic';
import { spokesBatch114Labor } from './spoke/spokes-batch114-labor';
import { spokesBatch115FraudSexCrime } from './spoke/spokes-batch115-fraud-sexcrime';
import { spokesBatch115AssaultDuiJeonseFraud } from './spoke/spokes-batch115-assault-dui-jeonsefraud';
import { spokesBatch115DefameDivorceInheritTraffic } from './spoke/spokes-batch115-defame-divorce-inherit-traffic';
import { spokesBatch115Labor } from './spoke/spokes-batch115-labor';
import { spokesBatch116FraudSexCrime } from './spoke/spokes-batch116-fraud-sexcrime';
import { spokesBatch116AssaultDuiJeonseFraud } from './spoke/spokes-batch116-assault-dui-jeonsefraud';
import { spokesBatch116DefameDivorceInheritTraffic } from './spoke/spokes-batch116-defame-divorce-inherit-traffic';
import { spokesBatch116Labor } from './spoke/spokes-batch116-labor';
import { spokesBatch117FraudSexCrime } from './spoke/spokes-batch117-fraud-sexcrime';
import { spokesBatch117AssaultDuiJeonseFraud } from './spoke/spokes-batch117-assault-dui-jeonsefraud';
import { spokesBatch117DefameDivorceInheritTraffic } from './spoke/spokes-batch117-defame-divorce-inherit-traffic';
import { spokesBatch117Labor } from './spoke/spokes-batch117-labor';
import { spokesBatch118FraudSexCrime } from './spoke/spokes-batch118-fraud-sexcrime';
import { spokesBatch118AssaultDuiJeonseFraud } from './spoke/spokes-batch118-assault-dui-jeonsefraud';
import { spokesBatch118DefameDivorceInheritTraffic } from './spoke/spokes-batch118-defame-divorce-inherit-traffic';
import { spokesBatch118Labor } from './spoke/spokes-batch118-labor';
import { spokesBatch119FraudSexCrime } from './spoke/spokes-batch119-fraud-sexcrime';
import { spokesBatch119AssaultDuiJeonseFraud } from './spoke/spokes-batch119-assault-dui-jeonsefraud';
import { spokesBatch119DefameDivorceInheritTraffic } from './spoke/spokes-batch119-defame-divorce-inherit-traffic';
import { spokesBatch119Labor } from './spoke/spokes-batch119-labor';
import { spokesDivorceHub } from './spoke/spokes-divorce-hub';
import { spokesUnemploymentHub } from './spoke/spokes-unemployment-hub';
import { spokesTrafficHub } from './spoke/spokes-traffic-hub';
import { spokesBatch120FraudSexCrime } from './spoke/spokes-batch120-fraud-sexcrime';
import { spokesBatch120AssaultDuiJeonseFraud } from './spoke/spokes-batch120-assault-dui-jeonsefraud';
import { spokesBatch120DefameDivorceInheritTraffic } from './spoke/spokes-batch120-defame-divorce-inherit-traffic';
import { spokesBatch120Labor } from './spoke/spokes-batch120-labor';
import { spokesBatch121FraudSexCrime } from './spoke/spokes-batch121-fraud-sexcrime';
import { spokesBatch121AssaultDuiJeonseFraud } from './spoke/spokes-batch121-assault-dui-jeonsefraud';
import { spokesBatch121DefameDivorceInheritTraffic } from './spoke/spokes-batch121-defame-divorce-inherit-traffic';
import { spokesBatch121Labor } from './spoke/spokes-batch121-labor';
import { spokesBatch122FraudSexCrime } from './spoke/spokes-batch122-fraud-sexcrime';
import { spokesBatch122AssaultDuiJeonseFraud } from './spoke/spokes-batch122-assault-dui-jeonsefraud';
import { spokesBatch122DefameDivorceInheritTraffic } from './spoke/spokes-batch122-defame-divorce-inherit-traffic';
import { spokesBatch122Labor } from './spoke/spokes-batch122-labor';
import { spokesBatch123FraudSexCrime } from './spoke/spokes-batch123-fraud-sexcrime';
import { spokesBatch123AssaultDuiJeonseFraud } from './spoke/spokes-batch123-assault-dui-jeonsefraud';
import { spokesBatch123DefameDivorceInheritTraffic } from './spoke/spokes-batch123-defame-divorce-inherit-traffic';
import { spokesBatch123Labor } from './spoke/spokes-batch123-labor';
import { spokesBatch124FraudSexCrime } from './spoke/spokes-batch124-fraud-sexcrime';
import { spokesBatch124AssaultDuiJeonseFraud } from './spoke/spokes-batch124-assault-dui-jeonsefraud';
import { spokesBatch124DefameDivorceInheritTraffic } from './spoke/spokes-batch124-defame-divorce-inherit-traffic';
import { spokesBatch124Labor } from './spoke/spokes-batch124-labor';
import { spokesBatch125FraudSexCrime } from './spoke/spokes-batch125-fraud-sexcrime';
import { spokesBatch125AssaultDuiJeonseFraud } from './spoke/spokes-batch125-assault-dui-jeonsefraud';
import { spokesBatch125DefameDivorceInheritTraffic } from './spoke/spokes-batch125-defame-divorce-inherit-traffic';
import { spokesBatch125Labor } from './spoke/spokes-batch125-labor';
import { spokesBatch126FraudSexCrime } from './spoke/spokes-batch126-fraud-sexcrime';
import { spokesBatch126AssaultDuiJeonseFraud } from './spoke/spokes-batch126-assault-dui-jeonsefraud';
import { spokesBatch126DefameDivorceInheritTraffic } from './spoke/spokes-batch126-defame-divorce-inherit-traffic';
import { spokesBatch126Labor } from './spoke/spokes-batch126-labor';
import { spokesBatch127FraudSexCrime } from './spoke/spokes-batch127-fraud-sexcrime';
import { spokesBatch127AssaultDuiJeonseFraud } from './spoke/spokes-batch127-assault-dui-jeonsefraud';
import { spokesBatch127DefameDivorceInheritTraffic } from './spoke/spokes-batch127-defame-divorce-inherit-traffic';
import { spokesBatch127Labor } from './spoke/spokes-batch127-labor';
import { spokesBatch128FraudSexCrime } from './spoke/spokes-batch128-fraud-sexcrime';
import { spokesBatch128AssaultDuiJeonseFraud } from './spoke/spokes-batch128-assault-dui-jeonsefraud';
import { spokesBatch128DefameDivorceInheritTraffic } from './spoke/spokes-batch128-defame-divorce-inherit-traffic';
import { spokesBatch128Labor } from './spoke/spokes-batch128-labor';
import { spokesBatch129FraudSexCrime } from './spoke/spokes-batch129-fraud-sexcrime';
import { spokesBatch129AssaultDuiJeonseFraud } from './spoke/spokes-batch129-assault-dui-jeonsefraud';
import { spokesBatch129DefameDivorceInheritTraffic } from './spoke/spokes-batch129-defame-divorce-inherit-traffic';
import { spokesBatch129Labor } from './spoke/spokes-batch129-labor';
import { spokesBatch130FraudSexCrime } from './spoke/spokes-batch130-fraud-sexcrime';
import { spokesBatch130AssaultDuiJeonseFraud } from './spoke/spokes-batch130-assault-dui-jeonsefraud';
import { spokesBatch130DefameDivorceInheritTraffic } from './spoke/spokes-batch130-defame-divorce-inherit-traffic';
import { spokesBatch130Labor } from './spoke/spokes-batch130-labor';
import { spokesBatch131FraudSexCrime } from './spoke/spokes-batch131-fraud-sexcrime';
import { spokesBatch131AssaultDuiJeonseFraud } from './spoke/spokes-batch131-assault-dui-jeonsefraud';
import { spokesBatch131DefameDivorceInheritTraffic } from './spoke/spokes-batch131-defame-divorce-inherit-traffic';
import { spokesBatch131Labor } from './spoke/spokes-batch131-labor';
import { spokesBatch132FraudSexCrime } from './spoke/spokes-batch132-fraud-sexcrime';
import { spokesBatch132AssaultDuiJeonseFraud } from './spoke/spokes-batch132-assault-dui-jeonsefraud';
import { spokesBatch132DefameDivorceInheritTraffic } from './spoke/spokes-batch132-defame-divorce-inherit-traffic';
import { spokesBatch132Labor } from './spoke/spokes-batch132-labor';
import { spokesBatch133FraudSexCrime } from './spoke/spokes-batch133-fraud-sexcrime';
import { spokesBatch133AssaultDuiJeonseFraud } from './spoke/spokes-batch133-assault-dui-jeonsefraud';
import { spokesBatch133DefameDivorceInheritTraffic } from './spoke/spokes-batch133-defame-divorce-inherit-traffic';
import { spokesBatch133Labor } from './spoke/spokes-batch133-labor';
import { spokesBatch134FraudSexCrime } from './spoke/spokes-batch134-fraud-sexcrime';
import { spokesBatch134AssaultDuiJeonseFraud } from './spoke/spokes-batch134-assault-dui-jeonsefraud';
import { spokesBatch134DefameDivorceInheritTraffic } from './spoke/spokes-batch134-defame-divorce-inherit-traffic';
import { spokesBatch134Labor } from './spoke/spokes-batch134-labor';
import { spokesBatch135FraudSexCrime } from './spoke/spokes-batch135-fraud-sexcrime';
import { spokesBatch135AssaultDuiJeonseFraud } from './spoke/spokes-batch135-assault-dui-jeonsefraud';
import { spokesBatch135DefameDivorceInheritTraffic } from './spoke/spokes-batch135-defame-divorce-inherit-traffic';
import { spokesBatch135Labor } from './spoke/spokes-batch135-labor';
import { spokesBatch136FraudSexCrime } from './spoke/spokes-batch136-fraud-sexcrime';
import { spokesBatch136AssaultDuiJeonseFraud } from './spoke/spokes-batch136-assault-dui-jeonsefraud';
import { spokesBatch136DefameDivorceInheritTraffic } from './spoke/spokes-batch136-defame-divorce-inherit-traffic';
import { spokesBatch136Labor } from './spoke/spokes-batch136-labor';
import { spokesBatch137FraudSexCrime } from './spoke/spokes-batch137-fraud-sexcrime';
import { spokesBatch137AssaultDuiJeonseFraud } from './spoke/spokes-batch137-assault-dui-jeonsefraud';
import { spokesBatch137DefameDivorceInheritTraffic } from './spoke/spokes-batch137-defame-divorce-inherit-traffic';
import { spokesBatch137Labor } from './spoke/spokes-batch137-labor';
import { spokesBatch138FraudSexCrime } from './spoke/spokes-batch138-fraud-sexcrime';
import { spokesBatch138AssaultDuiJeonseFraud } from './spoke/spokes-batch138-assault-dui-jeonsefraud';
import { spokesBatch138DefameDivorceInheritTraffic } from './spoke/spokes-batch138-defame-divorce-inherit-traffic';
import { spokesBatch138Labor } from './spoke/spokes-batch138-labor';
import { spokesBatch139FraudSexCrime } from './spoke/spokes-batch139-fraud-sexcrime';
import { spokesBatch139AssaultDuiJeonseFraud } from './spoke/spokes-batch139-assault-dui-jeonsefraud';
import { spokesBatch139DefameDivorceInheritTraffic } from './spoke/spokes-batch139-defame-divorce-inherit-traffic';
import { spokesBatch139Labor } from './spoke/spokes-batch139-labor';
import { spokesBatch140FraudSexCrime } from './spoke/spokes-batch140-fraud-sexcrime';
import { spokesBatch140AssaultDuiJeonseFraud } from './spoke/spokes-batch140-assault-dui-jeonsefraud';
import { spokesBatch140DefameDivorceInheritTraffic } from './spoke/spokes-batch140-defame-divorce-inherit-traffic';
import { spokesBatch140Labor } from './spoke/spokes-batch140-labor';
import { spokesBatch141FraudSexCrime } from './spoke/spokes-batch141-fraud-sexcrime';
import { spokesBatch141AssaultDuiJeonseFraud } from './spoke/spokes-batch141-assault-dui-jeonsefraud';
import { spokesBatch141DefameDivorceInheritTraffic } from './spoke/spokes-batch141-defame-divorce-inherit-traffic';
import { spokesBatch141Labor } from './spoke/spokes-batch141-labor';
import { spokesBatch142FraudSexCrime } from './spoke/spokes-batch142-fraud-sexcrime';
import { spokesBatch142AssaultDuiJeonseFraud } from './spoke/spokes-batch142-assault-dui-jeonsefraud';
import { spokesBatch142DefameDivorceInheritTraffic } from './spoke/spokes-batch142-defame-divorce-inherit-traffic';
import { spokesBatch142Labor } from './spoke/spokes-batch142-labor';
import { spokesBatch143FraudSexCrime } from './spoke/spokes-batch143-fraud-sexcrime';
import { spokesBatch143AssaultDuiJeonseFraud } from './spoke/spokes-batch143-assault-dui-jeonsefraud';
import { spokesBatch143DefameDivorceInheritTraffic } from './spoke/spokes-batch143-defame-divorce-inherit-traffic';
import { spokesBatch143Labor } from './spoke/spokes-batch143-labor';
import { spokesBatch144FraudSexCrime } from './spoke/spokes-batch144-fraud-sexcrime';
import { spokesBatch144AssaultDuiJeonseFraud } from './spoke/spokes-batch144-assault-dui-jeonsefraud';
import { spokesBatch144DefameDivorceInheritTraffic } from './spoke/spokes-batch144-defame-divorce-inherit-traffic';
import { spokesBatch144Labor } from './spoke/spokes-batch144-labor';
import { spokesBatch91AssaultDuiJeonseFraud } from './spoke/spokes-batch91-assault-dui-jeonsefraud';
import { spokesBatch91DefameDivorceInheritTraffic } from './spoke/spokes-batch91-defame-divorce-inherit-traffic';
import { spokesBatch91Labor } from './spoke/spokes-batch91-labor';
import { spokesBatch76SexCrime } from './spoke/spokes-batch76-sex-crime';
import { spokesBatch76AssaultDui } from './spoke/spokes-batch76-assault-dui';
import { spokesBatch76DivorceInheritTraffic } from './spoke/spokes-batch76-divorce-inherit-traffic';
import { spokesBatch76DefameJeonseFraud } from './spoke/spokes-batch76-defame-jeonsefraud';
import { spokesBatch76Dismissal } from './spoke/spokes-batch76-dismissal';
import { spokesBatch76WageUnempRetireIa } from './spoke/spokes-batch76-wage-unemp-retire-ia';
import { spokesBatch77SexCrime } from './spoke/spokes-batch77-sex-crime';
import { spokesBatch77AssaultDui } from './spoke/spokes-batch77-assault-dui';
import { spokesBatch77DivorceInheritTraffic } from './spoke/spokes-batch77-divorce-inherit-traffic';
import { spokesBatch77DefameJeonseFraud } from './spoke/spokes-batch77-defame-jeonsefraud';
import { spokesBatch77Dismissal } from './spoke/spokes-batch77-dismissal';
import { spokesBatch77WageUnempRetireIa } from './spoke/spokes-batch77-wage-unemp-retire-ia';
import { spokesBatch75DivorceInherit } from './spoke/spokes-batch75-divorce-inherit';
import { spokesBatch75DefameJeonseFraudStalking } from './spoke/spokes-batch75-defame-jeonsefraud-stalking';
import { spokesBatch75AssaultDui } from './spoke/spokes-batch75-assault-dui';
import { spokesBatch75SexCrime } from './spoke/spokes-batch75-sex-crime';
import { spokesBatch75Dismissal } from './spoke/spokes-batch75-dismissal';
import { spokesBatch75WageUnempRetireIa } from './spoke/spokes-batch75-wage-unemp-retire-ia';

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
  ...spokesBatch41Labor,
  ...spokesBatch41Nonlabor1,
  ...spokesBatch41Nonlabor2,
  ...spokesBatch42Labor,
  ...spokesBatch42Nonlabor1,
  ...spokesBatch42Nonlabor2,
  ...spokesBatch42Nonlabor3,
  ...spokesBatch43Labor,
  ...spokesBatch43Nonlabor1,
  ...spokesBatch43Nonlabor2,
  ...spokesBatch43Nonlabor3,
  ...spokesBatch43Divorce,
  ...spokesBatch44Labor,
  ...spokesBatch44Nonlabor1,
  ...spokesBatch44Nonlabor2,
  ...spokesBatch45Labor,
  ...spokesBatch45Nonlabor1,
  ...spokesBatch45Nonlabor2,
  ...spokesBatch45Nonlabor3,
  ...spokesBatch46Labor,
  ...spokesBatch46Nonlabor1,
  ...spokesBatch46Nonlabor2,
  ...spokesBatch46Nonlabor3,
  ...spokesBatch47DefameJeonse,
  ...spokesBatch47Dismissal,
  ...spokesBatch47WageUnemp,
  ...spokesBatch47Retirement,
  ...spokesBatch47Fraud,
  ...spokesBatch47Traffic,
  ...spokesBatch47Divorce,
  ...spokesBatch47Inheritance,
  ...spokesBatch47Misc,
  ...spokesBatch48Dismissal,
  ...spokesBatch48Fraud,
  ...spokesBatch48Traffic,
  ...spokesBatch48Divorce,
  ...spokesBatch48Inheritance,
  ...spokesBatch48WageUnemp,
  ...spokesBatch48DefameJeonse,
  ...spokesBatch48Misc,
  ...spokesBatch49WageUnempRetire,
  ...spokesBatch49DivorceInheritance,
  ...spokesBatch49MiscA,
  ...spokesBatch49Dismissal,
  ...spokesBatch49Fraud,
  ...spokesBatch49Traffic,
  ...spokesBatch49MiscB,
  ...spokesBatch50Dismissal,
  ...spokesBatch50WageUnempRetire,
  ...spokesBatch50Fraud,
  ...spokesBatch50Traffic,
  ...spokesBatch50DivorceInheritance,
  ...spokesBatch50DefameJeonse,
  ...spokesBatch50Misc,
  ...spokesBatch51Dismissal,
  ...spokesBatch51WageUnempRetire,
  ...spokesBatch51Fraud,
  ...spokesBatch51Traffic,
  ...spokesBatch51DivorceInheritance,
  ...spokesBatch51DefameJeonseStalking,
  ...spokesBatch51Misc,
  ...spokesBatch52Fraud,
  ...spokesBatch52Traffic,
  ...spokesBatch52Divorce,
  ...spokesBatch52Dismissal,
  ...spokesBatch52WageUnempRetire,
  ...spokesBatch52InheritanceDefamation,
  ...spokesBatch52JeonseStalkingAssaultCS,
  ...spokesBatch53Dismissal,
  ...spokesBatch53WageUnempRetire,
  ...spokesBatch53Fraud,
  ...spokesBatch53Traffic,
  ...spokesBatch53Divorce,
  ...spokesBatch53InheritanceDefamation,
  ...spokesBatch53JeonseStalkingAssaultCS,
  ...spokesBatch54Fraud,
  ...spokesBatch54Traffic,
  ...spokesBatch54Divorce,
  ...spokesBatch54Dismissal,
  ...spokesBatch54InheritanceDefamation,
  ...spokesBatch54WageUnempRetire,
  ...spokesBatch54JeonseStalkingAssaultCS,
  ...spokesBatch54FairAllowance,
  ...spokesBatch55DismissalA,
  ...spokesBatch55DismissalB,
  ...spokesBatch55WageUnemp,
  ...spokesBatch55Retire,
  ...spokesBatch55FraudA,
  ...spokesBatch55FraudB,
  ...spokesBatch55TrafficA,
  ...spokesBatch55TrafficB,
  ...spokesBatch55DivorceA,
  ...spokesBatch55DivorceB,
  ...spokesBatch55Inheritance,
  ...spokesBatch55Defamation,
  ...spokesBatch55JeonseStalking,
  ...spokesBatch55AssaultCsDui,
  ...spokesBatch56DismissalA,
  ...spokesBatch56DismissalB,
  ...spokesBatch56WageUnemp,
  ...spokesBatch56Retire,
  ...spokesBatch56FraudA,
  ...spokesBatch56FraudB,
  ...spokesBatch56TrafficA,
  ...spokesBatch56TrafficB,
  ...spokesBatch56Divorce,
  ...spokesBatch56Inheritance,
  ...spokesBatch56Defamation,
  ...spokesBatch56JeonseStalking,
  ...spokesBatch56AssaultCsDui,
  ...spokesBatch57News,
  ...spokesBatch58DismissalA,
  ...spokesBatch58DismissalB,
  ...spokesBatch58WageUnemp,
  ...spokesBatch58Retire,
  ...spokesBatch58FraudA,
  ...spokesBatch58FraudB,
  ...spokesBatch58TrafficA,
  ...spokesBatch58TrafficB,
  ...spokesBatch58Divorce,
  ...spokesBatch58Inheritance,
  ...spokesBatch58Defamation,
  ...spokesBatch58JeonseStalking,
  ...spokesBatch58AssaultCsDui,
  ...spokesBatch58NewsChildcare,
  ...spokesBatch58NewsElection,
  ...spokesBatch59Dismissal,
  ...spokesBatch59WageUnempRetire,
  ...spokesBatch59Fraud,
  ...spokesBatch59Traffic,
  ...spokesBatch59DivorceInheritance,
  ...spokesBatch59DefameJeonseStalking,
  ...spokesBatch59AssaultCsDui,
  ...spokesBatch60Dismissal,
  ...spokesBatch60WageUnempRetire,
  ...spokesBatch60Fraud,
  ...spokesBatch60Traffic,
  ...spokesBatch60DivorceInheritance,
  ...spokesBatch60DefameJeonseStalking,
  ...spokesBatch60AssaultCsDui,
  ...spokesBatch61Dismissal,
  ...spokesBatch61WageUnempRetire,
  ...spokesBatch61Fraud,
  ...spokesBatch61Traffic,
  ...spokesBatch61DivorceInheritance,
  ...spokesBatch61DefameJeonseStalking,
  ...spokesBatch61AssaultCsDui,
  ...spokesBatch62Dismissal,
  ...spokesBatch62WageUnempRetire,
  ...spokesBatch62Fraud,
  ...spokesBatch62Traffic,
  ...spokesBatch62DivorceInheritance,
  ...spokesBatch62DefameJeonseStalking,
  ...spokesBatch62AssaultCsDui,
  ...spokesBatch63Dismissal,
  ...spokesBatch63WageUnempRetire,
  ...spokesBatch63Fraud,
  ...spokesBatch63Traffic,
  ...spokesBatch63DivorceInheritance,
  ...spokesBatch63DefameJeonseStalking,
  ...spokesBatch63AssaultCsDui,
  ...spokesBatch64Dismissal,
  ...spokesBatch64WageUnempRetire,
  ...spokesBatch64Fraud,
  ...spokesBatch64Traffic,
  ...spokesBatch64DivorceInheritance,
  ...spokesBatch64DefameJeonseStalking,
  ...spokesBatch64AssaultCsDui,
  ...spokesBatch65Dismissal,
  ...spokesBatch65WageUnempRetire,
  ...spokesBatch65Fraud,
  ...spokesBatch65Traffic,
  ...spokesBatch65DivorceInheritance,
  ...spokesBatch65DefameJeonseStalking,
  ...spokesBatch65AssaultCsDui,
  ...spokesBatch66Dismissal,
  ...spokesBatch66WageUnempRetire,
  ...spokesBatch66Fraud,
  ...spokesBatch66Traffic,
  ...spokesBatch66DivorceInheritance,
  ...spokesBatch66DefameJeonseStalking,
  ...spokesBatch66AssaultCsDui,
  ...spokesBatch67Dismissal,
  ...spokesBatch67WageUnempRetire,
  ...spokesBatch67Fraud,
  ...spokesBatch67Traffic,
  ...spokesBatch67DivorceInheritance,
  ...spokesBatch67DefameJeonseStalking,
  ...spokesBatch67AssaultCsDui,
  ...spokesBatch68Dismissal,
  ...spokesBatch68WageUnempRetire,
  ...spokesBatch68Fraud,
  ...spokesBatch68Traffic,
  ...spokesBatch68AssaultCsDui,
  ...spokesBatch68DefameJeonseStalking,
  ...spokesBatch68DivorceInheritance,
  ...spokesBatch69Dismissal,
  ...spokesBatch69WageUnempRetire,
  ...spokesBatch69Fraud,
  ...spokesBatch69Traffic,
  ...spokesBatch69AssaultCsDui,
  ...spokesBatch69DefameJeonseStalking,
  ...spokesBatch69DivorceInheritance,
  ...spokesBatch70Dismissal,
  ...spokesBatch70WageUnempRetire,
  ...spokesBatch70Fraud,
  ...spokesBatch70Traffic,
  ...spokesBatch70DivorceInheritCs,
  ...spokesBatch70DefameJeonseStalking,
  ...spokesBatch70AssaultDui,
  ...spokesBatch71Dismissal,
  ...spokesBatch71WageUnempRetire,
  ...spokesBatch71Fraud,
  ...spokesBatch71Traffic,
  ...spokesBatch71DivorceInheritCs,
  ...spokesBatch71DefameJeonseStalking,
  ...spokesBatch71AssaultDui,
  ...spokesBatch74Dismissal,
  ...spokesBatch74WageUnempRetire,
  ...spokesBatch74Fraud,
  ...spokesBatch74Traffic,
  ...spokesBatch74DivorceInheritCs,
  ...spokesBatch74DefameJeonseStalking,
  ...spokesBatch74AssaultDui,
  ...spokesBatch75Fraud,
  ...spokesBatch76Fraud,
  ...spokesBatch77Fraud,
  ...spokesBatch78Fraud,
  ...spokesBatch78SexCrime,
  ...spokesBatch78AssaultDui,
  ...spokesBatch78DivorceInheritTraffic,
  ...spokesBatch78DefameJeonseFraud,
  ...spokesBatch78Dismissal,
  ...spokesBatch78WageUnempRetireIa,
  ...spokesBatch79Fraud,
  ...spokesBatch79SexCrime,
  ...spokesBatch79AssaultDui,
  ...spokesBatch79DefameJeonseFraud,
  ...spokesBatch79DivorceInheritTraffic,
  ...spokesBatch79Dismissal,
  ...spokesBatch79WageUnempRetire,
  ...spokesBatch80SexCrime,
  ...spokesBatch80Fraud,
  ...spokesBatch80DefameJeonseFraud,
  ...spokesBatch80AssaultDui,
  ...spokesBatch80DivorceInheritTraffic,
  ...spokesBatch80Dismissal,
  ...spokesBatch80WageUnempRetireIa,
  ...spokesBatch81FraudSexCrime,
  ...spokesBatch81AssaultDuiJeonseFraud,
  ...spokesBatch81DefameDivorceInheritTraffic,
  ...spokesBatch81Labor,
  ...spokesBatch82FraudSexCrime,
  ...spokesBatch82AssaultDuiJeonseFraud,
  ...spokesBatch82DefameDivorceInheritTraffic,
  ...spokesBatch82Labor,
  ...spokesBatch83FraudSexCrime,
  ...spokesBatch83AssaultDuiJeonseFraud,
  ...spokesBatch83DefameDivorceInheritTraffic,
  ...spokesBatch83Labor,
  ...spokesBatch84FraudSexCrime,
  ...spokesBatch84AssaultDuiJeonseFraud,
  ...spokesBatch84DefameDivorceInheritTraffic,
  ...spokesBatch84Labor,
  ...spokesBatch85FraudSexCrime,
  ...spokesBatch85AssaultDuiJeonseFraud,
  ...spokesBatch85DefameDivorceInheritTraffic,
  ...spokesBatch85Labor,
  ...spokesBatch86FraudSexCrime,
  ...spokesBatch86AssaultDuiJeonseFraud,
  ...spokesBatch86DefameDivorceInheritTraffic,
  ...spokesBatch86Labor,
  ...spokesBatch87FraudSexCrime,
  ...spokesBatch87AssaultDuiJeonseFraud,
  ...spokesBatch87DefameDivorceInheritTraffic,
  ...spokesBatch87Labor,
  ...spokesBatch88FraudSexCrime,
  ...spokesBatch88AssaultDuiJeonseFraud,
  ...spokesBatch88DefameDivorceInheritTraffic,
  ...spokesBatch88Labor,
  ...spokesBatch89FraudSexCrime,
  ...spokesBatch89AssaultDuiJeonseFraud,
  ...spokesBatch89DefameDivorceInheritTraffic,
  ...spokesBatch89Labor,
  ...spokesBatch90FraudSexCrime,
  ...spokesBatch90AssaultDuiJeonseFraud,
  ...spokesBatch90DefameDivorceInheritTraffic,
  ...spokesBatch90Labor,
  ...spokesBatch91FraudSexCrime,
  ...spokesBatch92FraudSexCrime,
  ...spokesBatch92AssaultDuiJeonseFraud,
  ...spokesBatch92DefameDivorceInheritTraffic,
  ...spokesBatch92Labor,
  ...spokesBatch93FraudSexCrime,
  ...spokesBatch93AssaultDuiJeonseFraud,
  ...spokesBatch93DefameDivorceInheritTraffic,
  ...spokesBatch93Labor,
  ...spokesBatch91AssaultDuiJeonseFraud,
  ...spokesBatch91DefameDivorceInheritTraffic,
  ...spokesBatch91Labor,
  ...spokesBatch75DivorceInherit,
  ...spokesBatch75DefameJeonseFraudStalking,
  ...spokesBatch75AssaultDui,
  ...spokesBatch75SexCrime,
  ...spokesBatch75Dismissal,
  ...spokesBatch75WageUnempRetireIa,
  ...spokesBatch76SexCrime,
  ...spokesBatch76AssaultDui,
  ...spokesBatch76DivorceInheritTraffic,
  ...spokesBatch76DefameJeonseFraud,
  ...spokesBatch76Dismissal,
  ...spokesBatch76WageUnempRetireIa,
  ...spokesBatch77SexCrime,
  ...spokesBatch77AssaultDui,
  ...spokesBatch77DivorceInheritTraffic,
  ...spokesBatch77DefameJeonseFraud,
  ...spokesBatch77Dismissal,
  ...spokesBatch77WageUnempRetireIa,
  ...spokesBatch94FraudSexCrime,
  ...spokesBatch94AssaultDuiJeonseFraud,
  ...spokesBatch94DefameDivorceInheritTraffic,
  ...spokesBatch94Labor,
  ...spokesBatch95FraudSexCrime,
  ...spokesBatch95AssaultDuiJeonseFraud,
  ...spokesBatch95DefameDivorceInheritTraffic,
  ...spokesBatch95Labor,
  ...spokesBatch96FraudSexCrime,
  ...spokesBatch96AssaultDuiJeonseFraud,
  ...spokesBatch96DefameDivorceInheritTraffic,
  ...spokesBatch96Labor,
  ...spokesBatch97FraudSexCrime,
  ...spokesBatch97AssaultDuiJeonseFraud,
  ...spokesBatch97DefameDivorceInheritTraffic,
  ...spokesBatch97Labor,
  ...spokesBatch98FraudSexCrime,
  ...spokesBatch98AssaultDuiJeonseFraud,
  ...spokesBatch98DefameDivorceInheritTraffic,
  ...spokesBatch98Labor,
  ...spokesBatch99FraudSexCrime,
  ...spokesBatch99AssaultDuiJeonseFraud,
  ...spokesBatch99DefameDivorceInheritTraffic,
  ...spokesBatch99Labor,
  ...spokesBatch100FraudSexCrime,
  ...spokesBatch100AssaultDuiJeonseFraud,
  ...spokesBatch100DefameDivorceInheritTraffic,
  ...spokesBatch100Labor,
  ...spokesBatch101FraudSexCrime,
  ...spokesBatch101AssaultDuiJeonseFraud,
  ...spokesBatch101DefameDivorceInheritTraffic,
  ...spokesBatch101Labor,
  ...spokesBatch102FraudSexCrime,
  ...spokesBatch102AssaultDuiJeonseFraud,
  ...spokesBatch102DefameDivorceInheritTraffic,
  ...spokesBatch102Labor,
  ...spokesBatch103FraudSexCrime,
  ...spokesBatch103AssaultDuiJeonseFraud,
  ...spokesBatch103DefameDivorceInheritTraffic,
  ...spokesBatch103Labor,
  ...spokesBatch104FraudSexCrime,
  ...spokesBatch104AssaultDuiJeonseFraud,
  ...spokesBatch104DefameDivorceInheritTraffic,
  ...spokesBatch104Labor,
  ...spokesBatch105FraudSexCrime,
  ...spokesBatch105AssaultDuiJeonseFraud,
  ...spokesBatch105DefameDivorceInheritTraffic,
  ...spokesBatch105Labor,
  ...spokesBatch106FraudSexCrime,
  ...spokesBatch106AssaultDuiJeonseFraud,
  ...spokesBatch106DefameDivorceInheritTraffic,
  ...spokesBatch106Labor,
  ...spokesBatch107FraudSexCrime,
  ...spokesBatch107AssaultDuiJeonseFraud,
  ...spokesBatch107DefameDivorceInheritTraffic,
  ...spokesBatch107Labor,
  ...spokesBatch108FraudSexCrime,
  ...spokesBatch108AssaultDuiJeonseFraud,
  ...spokesBatch108DefameDivorceInheritTraffic,
  ...spokesBatch108Labor,
  ...spokesBatch109FraudSexCrime,
  ...spokesBatch109AssaultDuiJeonseFraud,
  ...spokesBatch109DefameDivorceInheritTraffic,
  ...spokesBatch109Labor,
  ...spokesBatch110FraudSexCrime,
  ...spokesBatch110AssaultDuiJeonseFraud,
  ...spokesBatch110DefameDivorceInheritTraffic,
  ...spokesBatch110Labor,
  ...spokesBatch111FraudSexCrime,
  ...spokesBatch111AssaultDuiJeonseFraud,
  ...spokesBatch111DefameDivorceInheritTraffic,
  ...spokesBatch111Labor,
  ...spokesBatch112FraudSexCrime,
  ...spokesBatch112AssaultDuiJeonseFraud,
  ...spokesBatch112DefameDivorceInheritTraffic,
  ...spokesBatch112Labor,
  ...spokesBatch113FraudSexCrime,
  ...spokesBatch113AssaultDuiJeonseFraud,
  ...spokesBatch113DefameDivorceInheritTraffic,
  ...spokesBatch113Labor,
  ...spokesBatch114FraudSexCrime,
  ...spokesBatch114AssaultDuiJeonseFraud,
  ...spokesBatch114DefameDivorceInheritTraffic,
  ...spokesBatch114Labor,
  ...spokesBatch115FraudSexCrime,
  ...spokesBatch115AssaultDuiJeonseFraud,
  ...spokesBatch115DefameDivorceInheritTraffic,
  ...spokesBatch115Labor,
  ...spokesBatch116FraudSexCrime,
  ...spokesBatch116AssaultDuiJeonseFraud,
  ...spokesBatch116DefameDivorceInheritTraffic,
  ...spokesBatch116Labor,
  ...spokesBatch117FraudSexCrime,
  ...spokesBatch117AssaultDuiJeonseFraud,
  ...spokesBatch117DefameDivorceInheritTraffic,
  ...spokesBatch117Labor,
  ...spokesBatch118FraudSexCrime,
  ...spokesBatch118AssaultDuiJeonseFraud,
  ...spokesBatch118DefameDivorceInheritTraffic,
  ...spokesBatch118Labor,
  ...spokesBatch119FraudSexCrime,
  ...spokesBatch119AssaultDuiJeonseFraud,
  ...spokesBatch119DefameDivorceInheritTraffic,
  ...spokesBatch119Labor,
  ...spokesDivorceHub,
  ...spokesUnemploymentHub,
  ...spokesTrafficHub,
  ...spokesBatch120FraudSexCrime,
  ...spokesBatch120AssaultDuiJeonseFraud,
  ...spokesBatch120DefameDivorceInheritTraffic,
  ...spokesBatch120Labor,
  ...spokesBatch121FraudSexCrime,
  ...spokesBatch121AssaultDuiJeonseFraud,
  ...spokesBatch121DefameDivorceInheritTraffic,
  ...spokesBatch121Labor,
  ...spokesBatch122FraudSexCrime,
  ...spokesBatch122AssaultDuiJeonseFraud,
  ...spokesBatch122DefameDivorceInheritTraffic,
  ...spokesBatch122Labor,
  ...spokesBatch123FraudSexCrime,
  ...spokesBatch123AssaultDuiJeonseFraud,
  ...spokesBatch123DefameDivorceInheritTraffic,
  ...spokesBatch123Labor,
  ...spokesBatch124FraudSexCrime,
  ...spokesBatch124AssaultDuiJeonseFraud,
  ...spokesBatch124DefameDivorceInheritTraffic,
  ...spokesBatch124Labor,
  ...spokesBatch125FraudSexCrime,
  ...spokesBatch125AssaultDuiJeonseFraud,
  ...spokesBatch125DefameDivorceInheritTraffic,
  ...spokesBatch125Labor,
  ...spokesBatch126FraudSexCrime,
  ...spokesBatch126AssaultDuiJeonseFraud,
  ...spokesBatch126DefameDivorceInheritTraffic,
  ...spokesBatch126Labor,
  ...spokesBatch127FraudSexCrime,
  ...spokesBatch127AssaultDuiJeonseFraud,
  ...spokesBatch127DefameDivorceInheritTraffic,
  ...spokesBatch127Labor,
  ...spokesBatch128FraudSexCrime,
  ...spokesBatch128AssaultDuiJeonseFraud,
  ...spokesBatch128DefameDivorceInheritTraffic,
  ...spokesBatch128Labor,
  ...spokesBatch129FraudSexCrime,
  ...spokesBatch129AssaultDuiJeonseFraud,
  ...spokesBatch129DefameDivorceInheritTraffic,
  ...spokesBatch129Labor,
  ...spokesBatch130FraudSexCrime,
  ...spokesBatch130AssaultDuiJeonseFraud,
  ...spokesBatch130DefameDivorceInheritTraffic,
  ...spokesBatch130Labor,
  ...spokesBatch131FraudSexCrime,
  ...spokesBatch131AssaultDuiJeonseFraud,
  ...spokesBatch131DefameDivorceInheritTraffic,
  ...spokesBatch131Labor,
  ...spokesBatch132FraudSexCrime,
  ...spokesBatch132AssaultDuiJeonseFraud,
  ...spokesBatch132DefameDivorceInheritTraffic,
  ...spokesBatch132Labor,
  ...spokesBatch133FraudSexCrime,
  ...spokesBatch133AssaultDuiJeonseFraud,
  ...spokesBatch133DefameDivorceInheritTraffic,
  ...spokesBatch133Labor,
  ...spokesBatch134FraudSexCrime,
  ...spokesBatch134AssaultDuiJeonseFraud,
  ...spokesBatch134DefameDivorceInheritTraffic,
  ...spokesBatch134Labor,
  ...spokesBatch135FraudSexCrime,
  ...spokesBatch135AssaultDuiJeonseFraud,
  ...spokesBatch135DefameDivorceInheritTraffic,
  ...spokesBatch135Labor,
  ...spokesBatch136FraudSexCrime,
  ...spokesBatch136AssaultDuiJeonseFraud,
  ...spokesBatch136DefameDivorceInheritTraffic,
  ...spokesBatch136Labor,
  ...spokesBatch137FraudSexCrime,
  ...spokesBatch137AssaultDuiJeonseFraud,
  ...spokesBatch137DefameDivorceInheritTraffic,
  ...spokesBatch137Labor,
  ...spokesBatch138FraudSexCrime,
  ...spokesBatch138AssaultDuiJeonseFraud,
  ...spokesBatch138DefameDivorceInheritTraffic,
  ...spokesBatch138Labor,
  ...spokesBatch139FraudSexCrime,
  ...spokesBatch139AssaultDuiJeonseFraud,
  ...spokesBatch139DefameDivorceInheritTraffic,
  ...spokesBatch139Labor,
  ...spokesBatch140FraudSexCrime,
  ...spokesBatch140AssaultDuiJeonseFraud,
  ...spokesBatch140DefameDivorceInheritTraffic,
  ...spokesBatch140Labor,
  ...spokesBatch141FraudSexCrime,
  ...spokesBatch141AssaultDuiJeonseFraud,
  ...spokesBatch141DefameDivorceInheritTraffic,
  ...spokesBatch141Labor,
  ...spokesBatch142FraudSexCrime,
  ...spokesBatch142AssaultDuiJeonseFraud,
  ...spokesBatch142DefameDivorceInheritTraffic,
  ...spokesBatch142Labor,
  ...spokesBatch143FraudSexCrime,
  ...spokesBatch143AssaultDuiJeonseFraud,
  ...spokesBatch143DefameDivorceInheritTraffic,
  ...spokesBatch143Labor,
  ...spokesBatch144FraudSexCrime,
  ...spokesBatch144AssaultDuiJeonseFraud,
  ...spokesBatch144DefameDivorceInheritTraffic,
  ...spokesBatch144Labor,
];

export function getSpokePage(domain: string, slug: string): SpokePage | undefined {
  return SPOKE_PAGES.find((p) => p.domain === domain && p.slug === slug);
}

export function getSpokePagesByDomain(domain: string): SpokePage[] {
  return SPOKE_PAGES.filter((p) => p.domain === domain);
}
