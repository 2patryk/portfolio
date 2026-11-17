/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  env: {
    // Shown as "Last update" in the footer
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString().slice(0, 10),
  },
  reactStrictMode: false,
  experimental: {
    typedRoutes: true,
  },
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      { source: "/kaliska", destination: "http://srv71.mikr.us:40457/" },
      { source: "/kaliska/:path*", destination: "http://srv71.mikr.us:40457/:path*" },
    ];
  },
  webpack: (config) => {
    // ... other rules

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });

    return config;
  },
};

module.exports = nextConfig;
