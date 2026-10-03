import hydraulicTorquePumpsJson from "./products/hydraulic-torque-pumps.json";
import pneumaticTorqueGunsJson from "./products/pneumatic-torque-guns.json";

import type {
  CatalogExport,
  CatalogProductFamily,
} from "./types";

export const pneumaticTorqueGuns =
  pneumaticTorqueGunsJson as CatalogProductFamily;

export const hydraulicTorquePumps =
  hydraulicTorquePumpsJson as unknown as CatalogProductFamily;

export const catalogProducts: CatalogProductFamily[] = [
  pneumaticTorqueGuns,
  hydraulicTorquePumps,
];

export const catalog: Omit<CatalogExport, "generatedAt"> = {
  schemaVersion: "1.0.0",
  catalogVersion: "2026.10",
  status: "partial",
  products: catalogProducts,
};

export function getCatalogProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug);
}

export type {
  CatalogDimension,
  CatalogDownload,
  CatalogExport,
  CatalogImage,
  CatalogModel,
  CatalogOperatingRequirement,
  CatalogProductFamily,
  VerificationStatus,
} from "./types";
