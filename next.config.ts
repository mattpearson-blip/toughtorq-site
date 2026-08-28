import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/pneumatic-torque-wrenches",
        destination: "/products/pneumatic-torque-guns",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;