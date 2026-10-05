import type { Metadata } from "next";
import Link from "next/link";

import { catalogProducts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Technical Resources",
  description:
    "ToughTorq technical resources, product data, cutsheets, model specifications, compatibility information, and application references.",
};

function productHref(slug: string) {
  if (slug === "hydraulic-torque-pumps") {
    return "/products/hydraulic-pumps";
  }

  return `/products/${slug}`;
}

export default function ResourcesPage() {
  const publicProducts = catalogProducts
    .filter((product) => product.active && product.public)
    .sort((a, b) => a.displayName.localeCompare(b.displayName));

  const availableDownloads = publicProducts.flatMap((product) =>
    product.downloads
      .filter((download) => download.status !== "coming-soon")
      .map((download) => ({
        ...download,
        productName: product.displayName,
        productSlug: product.slug,
      }))
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            ToughTorq Resources
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Technical Resources
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Manufacturer product data, model specifications, dimensions,
            compatibility information, cutsheets, and technical references for
            ToughTorq equipment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#product-data"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Browse Product Data
            </Link>

            <Link
              href="#downloads"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Available Downloads
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Technical Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] md:grid-cols-4">
            {[
              ["Canonical Families", String(publicProducts.length)],
              ["Manufacturer Data", "Model-level specifications"],
              ["Compatibility", "System & accessory guidance"],
              ["Commercial Support", "Through JAM Torque"],
            ].map(([label, value]) => (
              <div key={label} className="bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                  {label}
                </p>
                <p className="mt-2 text-xl font-semibold text-[#3f4448]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="product-data"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Data
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Technical product library
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-[#555555]">
            These product families are driven by the canonical ToughTorq
            manufacturer catalog. Each page contains the technical data
            currently verified for that family, including model tables,
            dimensions, operating requirements, applications, accessories, and
            compatibility where available.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {publicProducts.map((product) => (
              <Link
                key={product.id}
                href={productHref(product.slug)}
                className="group flex h-full flex-col rounded-xl border border-[#dddddd] bg-[#fafafa] p-5 transition hover:border-[#ed1c24]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#ed1c24]">
                  {product.family}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                  {product.displayName}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {product.shortDescription}
                </p>

                <div className="mt-auto pt-5">
                  <p className="text-sm font-semibold text-[#ed1c24]">
                    View Technical Data →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="downloads"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Downloads
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Published technical documents
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Documents appear here automatically when they are published in the
            canonical product catalog. Additional cutsheets, drawings, manuals,
            and selection guides will populate this library as they are
            finalized.
          </p>

          {availableDownloads.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {availableDownloads.map((download) => (
                <a
                  key={`${download.productSlug}-${download.href}`}
                  href={download.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[#dddddd] bg-white p-5 transition hover:border-[#ed1c24]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                    {download.type}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-[#3f4448]">
                    {download.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#666666]">
                    {download.productName}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-[#ed1c24]">
                    View PDF →
                  </p>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="font-semibold text-[#3f4448]">
                Technical documents are being prepared.
              </p>
              <p className="mt-2 text-sm leading-7 text-[#666666]">
                Product data remains available on each technical product page
                while downloadable documents are finalized.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Engineering References
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Technical information by application
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Torque ranges & drive sizes",
                "Hydraulic working pressure",
                "Cylinder capacity & stroke",
                "Bolt tensioning load",
                "Socket & fastener compatibility",
                "PVA head & accessory compatibility",
                "Pump flow & reservoir data",
                "Dimensions & clearance",
              ].map((item) => (
                <div key={item} className="bg-[#fafafa] p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Source of Truth
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              ToughTorq owns the technical product record
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Product specifications, dimensions, compatibility, engineering
              information, and manufacturer documents are maintained here as
              the authoritative ToughTorq record.
            </p>

            <p className="mt-4 leading-8 text-[#555555]">
              JAM Torque adds the commercial layer for purchasing, rentals,
              calibration, service, availability, customer accounts, and
              transactions.
            </p>

            <a
              href="https://jamtorque.com"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] bg-white px-5 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Visit JAM Torque →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[#dddddd] bg-white p-6 md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Technical Support
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Need technical information for a specific application?
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#666666]">
                Send ToughTorq the tool, model, operating conditions, and
                application details so the technical requirement can be
                reviewed.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              Contact ToughTorq
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
