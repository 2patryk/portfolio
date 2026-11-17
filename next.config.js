/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  env: {
    // Shown as "Last update" in the footer
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString().slice(0, 10),
  },
  reactStrictMode: false,
  typedRoutes: true,
  // A stray lockfile in a parent folder confuses workspace root inference
  outputFileTracingRoot: __dirname,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      { source: "/kaliska", destination: "http://srv71.mikr.us:40457/" },
      { source: "/kaliska/:path*", destination: "http://srv71.mikr.us:40457/:path*" },
    ];
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

module.exports = nextConfig;
