# ToughTorq Catalog Architecture

## Purpose

ToughTorq.com is the manufacturer and technical product authority.

JAMTorque.com is the customer-facing commercial marketplace.

ToughTorq owns canonical technical product data. JAM may consume that data, but should not maintain a separate manually edited copy of ToughTorq specifications.

## Source of truth

Canonical product-family records live in:

```
data/catalog/products/
```

Shared TypeScript types live in:

```
data/catalog/types.ts
```

The website imports catalog data through:

```
data/catalog/index.ts
```

## JAM export

Before every production build:

```
npm run catalog
```

generates:

```
public/catalog.json
```

The same generator runs automatically through the `prebuild` script.

JAM should consume the deployed catalog at build time rather than depend on a runtime API between the two sites.

The export is currently marked `status: "partial"` while product families are migrated into the canonical dataset.

## Product ownership

ToughTorq owns:

- model IDs and naming
- technical descriptions
- specifications
- dimensions and drawings
- operating requirements
- images
- features and applications
- accessories and compatibility
- cutsheets, manuals, and downloads
- public/active state
- applicability flags for rental, calibration, and service
- the JAM marketplace handoff URL
- source references and verification status

JAM owns:

- pricing
- inventory and availability
- rental rates and rental workflows
- calibration workflows
- repair and service workflows
- quotes and orders
- customer accounts
- CRM data
- invoices, purchase orders, and transaction history

## Verification workflow

Do not publish uncertain technical values as verified.

Each family and model carries:

- `verificationStatus`
- `sourceReference`
- `lastVerifiedAt`
- `catalogVersion`

Use `verified` only when the value is supported by the current approved ToughTorq source material.

Use `needs-review` when naming, compatibility, imagery, or technical data still requires manufacturer confirmation.

## CTA hierarchy

ToughTorq product pages should prioritize:

1. Technical overview
2. Model specifications
3. Dimensions / drawings
4. Features and applications
5. Accessories / compatibility
6. Downloads
7. Find a Distributor
8. Purchase, rental, calibration, and service handoff to JAM Torque

The existing quote cart may remain temporarily, but new ToughTorq product architecture should not depend on it.

## Migration order

1. Pneumatic Torque Guns
2. Hydraulic Torque Pumps
3. Portable Valve Actuation
4. Remaining catalog families

## Hydraulic torque pump naming

KAT-3000 is the approved canonical designation for the pneumatic hydraulic torque pump. The prior KAT-1000 reference is not supported by the currently verified source documents and should not be propagated into ToughTorq or JAM product data.
