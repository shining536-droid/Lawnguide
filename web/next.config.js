/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone' 제거: Vercel 자체 번들러가 SSG/서버리스 분리 처리.
  // standalone 모드는 1253개 prerender 된 /guide/[domain]/[slug] 가 .next/server/app 에 모두 들어가
  // 서버리스 함수 번들 크기 219MB → 250MB 한도 초과 원인이었음 (2026-04-24).

  // outputFileTracingExcludes: 함수 번들 NFT(File Tracing)에서 데이터 디렉토리를 명시적으로 제외.
  // 정적 import 는 막지 못하지만, 4/26 procedure-data.ts 사고처럼 fs.readFileSync 또는 dynamic 라우트가
  // 실수로 kb/, content/ 를 끌어오는 경우 폭발 반경을 축소하는 안전망. 0 위험, 패시브 보호.
  // 패턴은 web/ 와 monorepo root 양쪽에서 매칭되도록 ../prefix 와 prefix 없는 형태 둘 다 포함.
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        '../kb/**/*',
        '../content/**/*',
        '../scripts/**/*',
        '../__pycache__/**/*',
        '../*.py',
        '../publish_*_results_*.json',
        '../naver_cookies_*.json',
        '../tistory_cookies_*.json',
        'kb/**/*',
        'content/**/*',
        'scripts/**/*',
        '__pycache__/**/*',
      ],
    },
  },

  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // 모든 redirect 를 statusCode: 301 명시 사용 (permanent: true 는 308 + Refresh 헤더 자동 추가되어
  // GSC 가 '리디렉션 오류' 로 라벨하는 사례 다수 보고됨). vercel.json 의 redirect 규칙은 제거하여
  // Vercel layer + Next.js layer 중복 책임을 next.config.js 로 단일화 (2026-05-11).
  async redirects() {
    return [
      {
        source: '/guide/child-support/child-support-lawsuit-procedure',
        destination: '/guide/child-support/child-support-lawsuit-process',
        statusCode: 301,
      },
      {
        source: '/guide/school-violence/report-to-committee-procedure',
        destination: '/guide/school-violence/school-violence-committee-procedure',
        statusCode: 301,
      },
      {
        source: '/guide/industrial-accident1/workers-comp-medical-claim-process',
        destination: '/guide/industrial-accident1/workers-comp-claim-process',
        statusCode: 301,
      },
      {
        source: '/guide/unemployment/unemployment-recognized-job-search-activity-guide',
        destination: '/guide/unemployment/unemployment-job-search-recognized-types',
        statusCode: 301,
      },
      {
        source: '/guide/retirement/retirement-contract-worker-under-1year',
        destination: '/guide/retirement/retirement-less-than-1year-eligibility',
        statusCode: 301,
      },
      {
        source: '/guide/traffic-accident/insurance-claim-process-summary',
        destination: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive',
        statusCode: 301,
      },
      {
        source: '/guide/traffic-accident/post-settlement-aftereffect-additional-claim',
        destination: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim',
        statusCode: 301,
      },
      {
        source: '/guide/assault/injury-vs-assault-penalty',
        destination: '/guide/assault/assault-vs-injury-penalties',
        statusCode: 301,
      },
      {
        source: '/guide/unemployment/unemployment-part-time-income-limit',
        destination: '/guide/unemployment/unemployment-side-income-during-benefit',
        statusCode: 301,
      },
      {
        source: '/guide/prostitution/sting-operation-response',
        destination: '/guide/prostitution/prostitution-entrapment-response',
        statusCode: 301,
      },
      {
        source: '/guide/sangga/sangga-premium-recovery-blocked',
        destination: '/guide/sangga/commercial-lease-premium-landlord-liability',
        statusCode: 301,
      },
      {
        source: '/guide/real-estate-auction/pre-bidding-checklist',
        destination: '/guide/real-estate-auction/auction-rights-analysis-checklist',
        statusCode: 301,
      },
      {
        source: '/guide/assault/assault-immediate-evidence-steps',
        destination: '/guide/assault/assault-evidence-collection-procedure',
        statusCode: 301,
      },
      {
        source: '/guide/sex-crime/common-mistakes-when-accused',
        destination: '/guide/sex-crime/sex-crime-common-mistakes',
        statusCode: 301,
      },
      {
        source: '/guide/child-sex-crime/victim-report-required-documents',
        destination: '/guide/child-sex-crime/child-victim-report-required-documents',
        statusCode: 301,
      },
      {
        source: '/guide/jeonse/deposit-lawsuit-preparation',
        destination: '/guide/jeonse/deposit-lawsuit-docs',
        statusCode: 301,
      },
      {
        source: '/guide/jeonse/jeonse-partial-deposit-return-remaining-claim',
        destination: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide',
        statusCode: 301,
      },
      {
        source: '/guide/traffic-accident/accident-settlement-fair-amount',
        destination: '/guide/traffic-accident/settlement-amount-calculation',
        statusCode: 301,
      },
      {
        source: '/guide/unemployment/unemployment-harassment-quit',
        destination: '/guide/unemployment/unemployment-sexual-harassment-quit-benefit',
        statusCode: 301,
      },
      {
        source: '/guide/real-estate-sale/defect-damage-claim',
        destination: '/guide/real-estate-sale/sale-defect-discovery-damage-claim',
        statusCode: 301,
      },
      {
        source: '/guide/inheritance/limited-acceptance-vs-renunciation',
        destination: '/guide/inheritance/inheritance-limited-vs-renounce',
        statusCode: 301,
      },
      {
        source: '/guide/child-sex-crime/mandatory-reporting-and-procedure',
        destination: '/guide/child-sex-crime/mandatory-reporting-procedure',
        statusCode: 301,
      },
      {
        source: '/guide/unemployment/voluntary-resignation-benefit-possible',
        destination: '/guide/unemployment/unemployment-voluntary-quit-benefits',
        statusCode: 301,
      },
      {
        source: '/guide/child-support/child-support-direct-payment-order-procedure',
        destination: '/guide/child-support/child-support-direct-payment-order-process',
        statusCode: 301,
      },
      {
        source: '/guide/fraud/fraud-prosecution-procedure-overview',
        destination: '/guide/fraud/fraud-complaint-procedure-comprehensive',
        statusCode: 301,
      },
      {
        source: '/guide/fraud/fraud-charge-rebuttal',
        destination: '/guide/fraud/fraud-accused-defense-strategy-guide',
        statusCode: 301,
      },
      {
        source: '/guide/retirement/retirement-statute-expired-revival',
        destination: '/guide/retirement/retirement-statute-of-limitations',
        statusCode: 301,
      },
      {
        source: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice',
        destination: '/guide/rehabilitation/rehabilitation-vs-bankruptcy',
        statusCode: 301,
      },
      {
        source: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalking-fault',
        destination: '/guide/traffic-accident/traffic-accident-pedestrian-cross-jaywalk',
        statusCode: 301,
      },
      {
        source: '/guide/wage/wage-night-overtime-exact-calculation',
        destination: '/guide/wage/overtime-pay-calculation-claim',
        statusCode: 301,
      },
      // *-where-to-start 5개 — Stage A/B/C 정리에서 슬러그 변경되었으나 외부 백링크 잔존 (2026-05-11)
      {
        source: '/guide/dismissal/dismissal-where-to-start',
        destination: '/guide/dismissal/dismissal-relief-procedure-comprehensive',
        statusCode: 301,
      },
      {
        source: '/guide/fraud/fraud-where-to-start',
        destination: '/guide/fraud/fraud-victim-where-to-start',
        statusCode: 301,
      },
      {
        source: '/guide/assault/assault-where-to-start',
        destination: '/guide/assault/assault-victim-where-to-start',
        statusCode: 301,
      },
      {
        source: '/guide/jeonse/jeonse-where-to-start',
        destination: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide',
        statusCode: 301,
      },
      {
        source: '/guide/divorce/divorce-where-to-start',
        destination: '/guide/divorce',
        statusCode: 301,
      },
      {
        source: '/spoke/:path*',
        destination: '/guide/:path*',
        statusCode: 301,
      },
      // /spcke/ 오타 URL 정정 (2025년 외부 백링크에서 유입된 GSC 크롤링 흔적)
      // 슬러그가 변경된 페이지는 명시적으로 새 슬러그로 매핑
      {
        source: '/spcke/small-claims/complaint-form-template-and-example',
        destination: '/guide/small-claims/small-claims-complaint-template',
        statusCode: 301,
      },
      // 나머지 /spcke/* 는 /guide/ 같은 슬러그로 fallback (slug 보존되는 케이스용)
      {
        source: '/spcke/:path*',
        destination: '/guide/:path*',
        statusCode: 301,
      },
      // non-www → www 강제 301 — vercel.json 의 중복 규칙 제거 후 next.config.js 단독 책임
      // GSC '리디렉션 오류' 라벨 (308 + Refresh 듀얼 메커니즘 영향) 회피 목적
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'lawnguide.co.kr' }],
        destination: 'https://www.lawnguide.co.kr/:path*',
        statusCode: 301,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
