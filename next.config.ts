import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/pneumatic-torque-wrenches",
        destination: "/products/pneumatic-torque-guns",
        permanent: true,
      },
      {
        source: "/products/pumps-tensioners-rams",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/torque-wrenches-specialty-tooling",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;