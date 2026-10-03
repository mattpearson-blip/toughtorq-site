import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const productsDir = path.join(root, "data", "catalog", "products");
const outputFile = path.join(root, "public", "catalog.json");

const requiredFamilyFields = [
  "id",
  "slug",
  "family",
  "displayName",
  "models",
  "active",
  "public",
  "verificationStatus",
  "catalogVersion",
];

const requiredModelFields = [
  "id",
  "model",
  "displayName",
  "specifications",
  "dimensions",
  "operatingRequirements",
  "active",
  "public",
  "verificationStatus",
];

const internalOnlyKeys = new Set([
  "sourceReference",
  "lastVerifiedAt",
  "sourceModel",
]);

function assertFields(record, fields, label) {
  for (const field of fields) {
    if (!(field in record)) {
      throw new Error(`${label} is missing required field "${field}".`);
    }
  }
}

function toPublicCatalogValue(value) {
  if (Array.isArray(value)) {
    return value.map(toPublicCatalogValue);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => !internalOnlyKeys.has(key))
        .map(([key, nestedValue]) => [key, toPublicCatalogValue(nestedValue)])
    );
  }

  return value;
}

const filenames = (await fs.readdir(productsDir))
  .filter((filename) => filename.endsWith(".json"))
  .sort();

const products = [];

for (const filename of filenames) {
  const fullPath = path.join(productsDir, filename);
  const raw = await fs.readFile(fullPath, "utf8");
  const product = JSON.parse(raw);

  assertFields(product, requiredFamilyFields, filename);

  if (!Array.isArray(product.models)) {
    throw new Error(`${filename} models must be an array.`);
  }

  for (const model of product.models) {
    assertFields(
      model,
      requiredModelFields,
      `${filename} model ${model.model ?? model.id ?? "unknown"}`
    );
  }

  products.push(toPublicCatalogValue(product));
}

const catalogVersions = products
  .map((product) => product.catalogVersion)
  .filter(Boolean)
  .sort();

const catalog = {
  schemaVersion: "1.1.0",
  catalogVersion:
    catalogVersions.at(-1) ?? new Date().toISOString().slice(0, 10),
  status: "partial",
  generatedAt: new Date().toISOString(),
  products,
};

await fs.mkdir(path.dirname(outputFile), { recursive: true });
await fs.writeFile(outputFile, JSON.stringify(catalog, null, 2) + "\n");

console.log(
  `Generated public/catalog.json with ${products.length} product famil${products.length === 1 ? "y" : "ies"}.`
);
