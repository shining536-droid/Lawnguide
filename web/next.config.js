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
