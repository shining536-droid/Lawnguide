/**
 * 도메인 클러스터 매핑 — cross-domain 추천에 사용.
 *
 * 한 도메인이 여러 클러스터에 속할 수 있다 (예: dui = traffic + criminal).
 * 같은 클러스터 안에서 사용자가 자연스럽게 옆 도메인을 탐색하게 만든다.
 */

export const DOMAIN_CLUSTERS: { [domain: string]: string[] } = {
  // 노동 클러스터 — 해고된 사람이 실업급여·퇴직금·임금까지 자연스럽게 탐색
  dismissal: ['labor'],
  unemployment: ['labor'],
  retirement: ['labor'],
  wage: ['labor'],
  'industrial-accident': ['labor'],
  'industrial-accident1': ['labor'],
  'industrial-accident2': ['labor'],

  // 가족법 클러스터 — 이혼하면 양육비·상속도 같이 검토
  divorce: ['family'],
  'child-support': ['family'],
  inheritance: ['family'],

  // 형사·재산범죄 클러스터 — 사기·명예훼손·폭행
  fraud: ['criminal-property'],
  defamation: ['criminal-property'],
  assault: ['criminal-property'],

  // 성·폭력 클러스터 — 성범죄·스토킹·학폭·성희롱·디지털성범죄·아동성범죄
  'sex-crime': ['sex-violence'],
  stalking: ['sex-violence'],
  'school-violence': ['sex-violence'],
  'sexual-harassment': ['sex-violence'],
  'digital-sex-crime': ['sex-violence'],
  'child-sex-crime': ['sex-violence'],
  prostitution: ['sex-violence'],

  // 부동산·임대차 클러스터
  jeonse: ['real-estate'],
  'jeonse-fraud': ['real-estate'],
  sangga: ['real-estate'],
  'real-estate-sale': ['real-estate'],
  'real-estate-auction': ['real-estate'],
  'neighbor-dispute': ['real-estate'],

  // 교통 클러스터 — dui는 형사 성격도 있어 criminal-property와도 연결 가능하나 운전자 시점에서 traffic 우선
  'traffic-accident': ['traffic'],
  dui: ['traffic'],
  'drug-crime': ['traffic'], // 음주운전·마약 모두 운전자 시점 형사

  // 도산 클러스터 — 회생·파산·소액사건
  rehabilitation: ['insolvency'],
  bankruptcy: ['insolvency'],
  'small-claims': ['insolvency'],
};

/**
 * 두 도메인이 같은 클러스터에 속하는가
 */
export function inSameCluster(a: string, b: string): boolean {
  if (a === b) return false;
  const clustersA = DOMAIN_CLUSTERS[a] || [];
  const clustersB = DOMAIN_CLUSTERS[b] || [];
  return clustersA.some((c) => clustersB.includes(c));
}

/**
 * procedure JSON 데이터를 보유한 도메인 — 추천 가산점 (양질 페이지 시그널).
 * (CLAUDE.md "기관 절차 데이터 연동 규칙" 적용 도메인 + procedure-data.ts 일치)
 */
export const DOMAINS_WITH_PROCEDURE = new Set<string>([
  'jeonse',
  'jeonse-fraud',
  'child-support',
  'fraud',
  'stalking',
  'digital-sex-crime',
  'wage',
  'dismissal',
  'retirement',
  'industrial-accident',
  'industrial-accident1',
  'industrial-accident2',
  'rehabilitation',
  'bankruptcy',
  'small-claims',
  'divorce',
  'defamation',
  'school-violence',
  'neighbor-dispute',
  'assault',
  'sex-crime',
  'child-sex-crime',
  'prostitution',
  'drug-crime',
  'dui',
  'inheritance',
  'sangga',
]);

export function hasProcedure(domain: string): boolean {
  return DOMAINS_WITH_PROCEDURE.has(domain);
}
