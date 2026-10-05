import hydraulicTorquePumpsJson from "./products/hydraulic-torque-pumps.json";
import hydraulicTorqueWrenchesJson from "./products/hydraulic-torque-wrenches.json";
import pneumaticTorqueGunsJson from "./products/pneumatic-torque-guns.json";
import portableValveActuationJson from "./products/portable-valve-actuation.json";

import type {
  CatalogExport,
  CatalogProductFamily,
} from "./types";

export const pneumaticTorqueGuns =
  pneumaticTorqueGunsJson as CatalogProductFamily;

export const hydraulicTorquePumps =
  hydraulicTorquePumpsJson as unknown as CatalogProductFamily;

export const hydraulicTorqueWrenches =
  hydraulicTorqueWrenchesJson as unknown as CatalogProductFamily;

export const portableValveActuation =
  portableValveActuationJson as unknown as CatalogProductFamily;

export const catalogProducts: CatalogProductFamily[] = [
  pneumaticTorqueGuns,
  hydraulicTorquePumps,
  hydraulicTorqueWrenches,
  portableValveActuation,
];

export const catalog: Omit<CatalogExport, "generatedAt"> = {
  schemaVersion: "1.1.0",
  catalogVersion: "2026.10",
  status: "partial",
  products: catalogProducts,
};

export function getCatalogProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug);
}

export type {
  CatalogCompatibilityEntry,
  CatalogCompatibilityStatus,
  CatalogComponent,
  CatalogDimension,
  CatalogDownload,
  CatalogExport,
  CatalogImage,
  CatalogModel,
  CatalogOperatingRequirement,
  CatalogProductFamily,
  VerificationStatus,
} from "./types";
