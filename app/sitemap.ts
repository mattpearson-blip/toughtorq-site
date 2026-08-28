import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toughtorq.com";

  const routes = [
    "",
    "/products",
    "/platform",
    "/brand-story",
    "/distributors",
    "/contact",
    "/find-a-distributor",
    "/become-a-distributor",
    "/distributor-login",
    "/request-a-quote",

    // Torquing
    "/products/battery-torque-guns",
    "/products/pneumatic-torque-guns",
    "/products/hydraulic-torque-wrenches",
    "/products/manual-digital-torque-wrenches",
    "/products/torque-multipliers",
    "/products/reaction-washers",
    "/products/sockets-reaction-arms",

    // Hydraulic Pumps & Accessories
    "/products/hydraulic-pumps",
    "/products/hydraulic-hoses",
    "/products/hydraulic-fittings-couplers",

    // Tensioning
    "/products/bolt-tensioners",
    "/products/hydraulic-nuts",

    // Lifting & Positioning
    "/products/hydraulic-cylinders-rams",

    // Flange & Alignment
    "/products/flange-tools",

    // Removal & Maintenance
    "/products/pullers-nut-splitters",
    "/products/bearing-heaters",

    // Valve Tools
    "/products/valve-actuator-tools",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/products"
        ? 0.9
        : route.startsWith("/products/")
        ? 0.8
        : 0.7,
  }));
}