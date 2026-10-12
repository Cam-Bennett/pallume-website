/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: "/privacy", destination: "/privacy-policy", statusCode: 301 },
    { source: "/services", destination: "/", statusCode: 301 },
    // Retired 10/11/2026 (coaching model). statusCode 301, not permanent (308).
    { source: "/pallume-light", destination: "/", statusCode: 301 },
    { source: "/pricing", destination: "/", statusCode: 301 },
    { source: "/how-it-works", destination: "/", statusCode: 301 },
    { source: "/the-work", destination: "/", statusCode: 301 },
    { source: "/the-work/:slug*", destination: "/", statusCode: 301 },
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), payment=()",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "frame-src https://tally.so",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://tally.so https://www.googletagmanager.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: blob: https://www.google-analytics.com",
            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://tally.so",
          ].join("; "),
        },
      ],
    },
  ],
};

export default nextConfig;
