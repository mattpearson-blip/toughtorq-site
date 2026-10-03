export type VerificationStatus =
  | "verified"
  | "needs-review"
  | "draft";

export type CatalogImage = {
  src: string;
  alt: string;
  type?: "product" | "application" | "dimension" | "diagram";
};

export type CatalogDownload = {
  title: string;
  href: string;
  type: "cutsheet" | "manual" | "drawing" | "brochure" | "other";
  status?: "available" | "coming-soon";
};

export type CatalogDimension = {
  key: string;
  label: string;
  value: number | string;
  unit?: string;
};

export type CatalogOperatingRequirement = {
  key: string;
  label: string;
  value: number | string;
  unit?: string;
  note?: string;
};

export type CatalogComponent = {
  id: string;
  group: string;
  displayName: string;
  description?: string;
  images: CatalogImage[];
  specifications: Record<string, number | string | boolean | null>;
  active: boolean;
  public: boolean;
  verificationStatus: VerificationStatus;
  sourceReference: string[];
};

export type CatalogCompatibilityStatus =
  | "compatible"
  | "conditional"
  | "not-compatible"
  | "needs-verification";

export type CatalogCompatibilityEntry = {
  modelId: string;
  componentId: string;
  status: CatalogCompatibilityStatus;
  note?: string;
  sourceReference: string[];
};

export type CatalogModel = {
  id: string;
  model: string;
  displayName: string;
  sourceModel?: string;
  description?: string;
  images: CatalogImage[];
  specifications: Record<string, number | string | boolean | null>;
  dimensions: CatalogDimension[];
  operatingRequirements: CatalogOperatingRequirement[];
  accessories: string[];
  compatibility: string[];
  downloads: CatalogDownload[];
  active: boolean;
  public: boolean;
  jamMarketplaceUrl: string | null;
  rentalApplicable: boolean;
  calibrationApplicable: boolean;
  serviceApplicable: boolean;
  verificationStatus: VerificationStatus;
  sourceReference: string[];
  lastVerifiedAt: string | null;
};

export type CatalogProductFamily = {
  id: string;
  slug: string;
  family: string;
  displayName: string;
  shortDescription: string;
  longDescription: string;
  images: CatalogImage[];
  features: string[];
  applications: string[];
  models: CatalogModel[];
  operatingRequirements: CatalogOperatingRequirement[];
  accessories: string[];
  compatibility: string[];
  componentGroups?: CatalogComponent[];
  compatibilityMatrix?: CatalogCompatibilityEntry[];
  downloads: CatalogDownload[];
  active: boolean;
  public: boolean;
  jamMarketplaceUrl: string | null;
  rentalApplicable: boolean;
  calibrationApplicable: boolean;
  serviceApplicable: boolean;
  verificationStatus: VerificationStatus;
  sourceReference: string[];
  lastVerifiedAt: string | null;
  catalogVersion: string;
};

export type CatalogExport = {
  schemaVersion: string;
  catalogVersion: string;
  status: "partial" | "complete";
  generatedAt: string;
  products: CatalogProductFamily[];
};
