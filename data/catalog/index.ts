import batteryTorqueGunsJson from "./products/battery-torque-guns.json";
import bearingHeatersJson from "./products/bearing-heaters.json";
import boltTensionersJson from "./products/bolt-tensioners.json";
import flangeToolsJson from "./products/flange-tools.json";
import hydraulicCylindersRamsJson from "./products/hydraulic-cylinders-rams.json";
import hydraulicFittingsCouplersJson from "./products/hydraulic-fittings-couplers.json";
import hydraulicHosesJson from "./products/hydraulic-hoses.json";
import hydraulicNutsJson from "./products/hydraulic-nuts.json";
import hydraulicTorquePumpsJson from "./products/hydraulic-torque-pumps.json";
import manualDigitalTorqueWrenchesJson from "./products/manual-digital-torque-wrenches.json";
import hydraulicTorqueWrenchesJson from "./products/hydraulic-torque-wrenches.json";
import pneumaticTorqueGunsJson from "./products/pneumatic-torque-guns.json";
import pullersNutSplittersJson from "./products/pullers-nut-splitters.json";
import portableValveActuationJson from "./products/portable-valve-actuation.json";
import torqueMultipliersJson from "./products/torque-multipliers.json";
import socketsReactionArmsJson from "./products/sockets-reaction-arms.json";

import type {
  CatalogExport,
  CatalogProductFamily,
} from "./types";

export const batteryTorqueGuns =
  batteryTorqueGunsJson as unknown as CatalogProductFamily;

export const bearingHeaters =
  bearingHeatersJson as unknown as CatalogProductFamily;

export const boltTensioners =
  boltTensionersJson as unknown as CatalogProductFamily;

export const pneumaticTorqueGuns =
  pneumaticTorqueGunsJson as CatalogProductFamily;

export const pullersNutSplitters =
  pullersNutSplittersJson as unknown as CatalogProductFamily;

export const flangeTools =
  flangeToolsJson as unknown as CatalogProductFamily;

export const hydraulicCylindersRams =
  hydraulicCylindersRamsJson as unknown as CatalogProductFamily;

export const hydraulicFittingsCouplers =
  hydraulicFittingsCouplersJson as unknown as CatalogProductFamily;

export const hydraulicHoses =
  hydraulicHosesJson as unknown as CatalogProductFamily;

export const hydraulicNuts =
  hydraulicNutsJson as unknown as CatalogProductFamily;

export const hydraulicTorquePumps =
  hydraulicTorquePumpsJson as unknown as CatalogProductFamily;

export const manualDigitalTorqueWrenches =
  manualDigitalTorqueWrenchesJson as unknown as CatalogProductFamily;

export const hydraulicTorqueWrenches =
  hydraulicTorqueWrenchesJson as unknown as CatalogProductFamily;

export const portableValveActuation =
  portableValveActuationJson as unknown as CatalogProductFamily;

export const torqueMultipliers =
  torqueMultipliersJson as unknown as CatalogProductFamily;

export const socketsReactionArms =
  socketsReactionArmsJson as unknown as CatalogProductFamily;

export const catalogProducts: CatalogProductFamily[] = [
  batteryTorqueGuns,
  bearingHeaters,
  boltTensioners,
  flangeTools,
  hydraulicCylindersRams,
  hydraulicFittingsCouplers,
  hydraulicHoses,
  hydraulicNuts,
  pneumaticTorqueGuns,
  pullersNutSplitters,
  hydraulicTorquePumps,
  hydraulicTorqueWrenches,
  manualDigitalTorqueWrenches,
  torqueMultipliers,
  socketsReactionArms,
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
