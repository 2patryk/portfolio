/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    typedRoutes: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
