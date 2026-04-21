/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  async redirects() {
    return [
      {
        source: '/guide/child-support/child-support-lawsuit-procedure',
        destination: '/guide/child-support/child-support-lawsuit-process',
        permanent: true,
      },
      {
        source: '/guide/school-violence/report-to-committee-procedure',
        destination: '/guide/school-violence/school-violence-committee-procedure',
        permanent: true,
      },
      {
        source: '/guide/industrial-accident1/workers-comp-medical-claim-process',
        destination: '/guide/industrial-accident1/workers-comp-claim-process',
        permanent: true,
      },
      {
        source: '/guide/unemployment/unemployment-recognized-job-search-activity-guide',
        destination: '/guide/unemployment/unemployment-job-search-recognized-types',
        permanent: true,
      },
      {
        source: '/guide/retirement/retirement-contract-worker-under-1year',
        destination: '/guide/retirement/retirement-less-than-1year-eligibility',
        permanent: true,
      },
      {
        source: '/guide/traffic-accident/insurance-claim-process-summary',
        destination: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive',
        permanent: true,
      },
      {
        source: '/guide/traffic-accident/post-settlement-aftereffect-additional-claim',
        destination: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim',
        permanent: true,
      },
      {
        source: '/guide/assault/injury-vs-assault-penalty',
        destination: '/guide/assault/assault-vs-injury-penalties',
        permanent: true,
      },
      {
        source: '/guide/unemployment/unemployment-part-time-income-limit',
        destination: '/guide/unemployment/unemployment-side-income-during-benefit',
        permanent: true,
      },
      {
        source: '/guide/prostitution/sting-operation-response',
        destination: '/guide/prostitution/prostitution-entrapment-response',
        permanent: true,
      },
      {
        source: '/guide/sangga/sangga-premium-recovery-blocked',
        destination: '/guide/sangga/commercial-lease-premium-landlord-liability',
        permanent: true,
      },
      {
        source: '/guide/real-estate-auction/pre-bidding-checklist',
        destination: '/guide/real-estate-auction/auction-rights-analysis-checklist',
        permanent: true,
      },
      {
        source: '/guide/assault/assault-immediate-evidence-steps',
        destination: '/guide/assault/assault-evidence-collection-procedure',
        permanent: true,
      },
      {
        source: '/guide/sex-crime/common-mistakes-when-accused',
        destination: '/guide/sex-crime/sex-crime-common-mistakes',
        permanent: true,
      },
      {
        source: '/guide/child-sex-crime/victim-report-required-documents',
        destination: '/guide/child-sex-crime/child-victim-report-required-documents',
        permanent: true,
      },
      {
        source: '/guide/jeonse/deposit-lawsuit-preparation',
        destination: '/guide/jeonse/deposit-lawsuit-docs',
        permanent: true,
      },
      {
        source: '/guide/jeonse/jeonse-partial-deposit-return-remaining-claim',
        destination: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide',
        permanent: true,
      },
      {
        source: '/guide/traffic-accident/accident-settlement-fair-amount',
        destination: '/guide/traffic-accident/settlement-amount-calculation',
        permanent: true,
      },
      {
        source: '/guide/unemployment/unemployment-harassment-quit',
        destination: '/guide/unemployment/unemployment-sexual-harassment-quit-benefit',
        permanent: true,
      },
      {
        source: '/guide/real-estate-sale/defect-damage-claim',
        destination: '/guide/real-estate-sale/sale-defect-discovery-damage-claim',
        permanent: true,
      },
      {
        source: '/guide/inheritance/limited-acceptance-vs-renunciation',
        destination: '/guide/inheritance/inheritance-limited-vs-renounce',
        permanent: true,
      },
      {
        source: '/guide/child-sex-crime/mandatory-reporting-and-procedure',
        destination: '/guide/child-sex-crime/mandatory-reporting-procedure',
        permanent: true,
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
