import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  logging: {
    incomingRequests: true,
  },
  productionBrowserSourceMaps: true,
  reactMaxHeadersLength: 1000,
  reactProductionProfiling: true,
};

export default nextConfig;
