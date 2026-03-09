import fetch from 'node-fetch';

const SCRAPE_CONFIG = {
  delayBetweenRequests: 2000,
  maxConcurrent: 1,
  maxRetries: 3,
  timeout: 15000,
  userAgent: 'LegalHelper/1.0 (research; contact@bebeplan.kr)',
  pcBaseUrl: 'https://www.easylaw.go.kr',
  mobileBaseUrl: 'https://m.easylaw.go.kr',
};

let lastRequestTime = 0;

async function waitForDelay(): Promise<void> {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < SCRAPE_CONFIG.delayBetweenRequests) {
    await new Promise(r => setTimeout(r, SCRAPE_CONFIG.delayBetweenRequests - elapsed));
  }
  lastRequestTime = Date.now();
}

export async function fetchPage(url: string, retries = SCRAPE_CONFIG.maxRetries): Promise<string> {
  await waitForDelay();

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), SCRAPE_CONFIG.timeout);
      const res = await fetch(url, {
        headers: {
          'User-Agent': SCRAPE_CONFIG.userAgent,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.5',
        },
        signal: controller.signal as any,
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} for ${url}`);
      }
      return await res.text();
    } catch (err: any) {
      console.error(`  [attempt ${attempt}/${retries}] Error fetching ${url}: ${err.message}`);
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, SCRAPE_CONFIG.delayBetweenRequests * attempt));
      } else {
        throw err;
      }
    }
  }
  throw new Error(`Failed after ${retries} retries: ${url}`);
}

export function pcUrl(path: string): string {
  return `${SCRAPE_CONFIG.pcBaseUrl}${path}`;
}

export function mobileUrl(path: string): string {
  return `${SCRAPE_CONFIG.mobileBaseUrl}${path}`;
}

export function pcContentUrl(csmSeq: number, ccfNo: number, cciNo: number, cnpClsNo: number): string {
  return pcUrl(`/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=${csmSeq}&ccfNo=${ccfNo}&cciNo=${cciNo}&cnpClsNo=${cnpClsNo}`);
}

export function mobileContentUrl(csmSeq: number): string {
  return mobileUrl(`/MOB/CsmInfoRetrieve.laf?csmSeq=${csmSeq}`);
}

export function lawRefsUrl(csmSeq: number): string {
  return pcUrl(`/CSP/SysChartRetrievePLst.laf?csmSeq=${csmSeq}`);
}

export function qnaUrl(csmSeq: number): string {
  return pcUrl(`/CSP/OnhunqueansLstPopRetrieve.laf?csmSeq=${csmSeq}`);
}

export { SCRAPE_CONFIG };
