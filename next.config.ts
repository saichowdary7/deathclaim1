import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.56.1"],
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/master',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
