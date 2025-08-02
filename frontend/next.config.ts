import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  logging: {
    incomingRequests: true,
  },
  productionBrowserSourceMaps: true,
  reactMaxHeadersLength: 1000,
  reactProductionProfiling: true,
};

export default nextConfig;
