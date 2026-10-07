import type { Metadata } from "next";
import Link from "next/link";

import { TechnicalDownloads } from "@/components/technical-downloads";

import { pullersNutSplitters } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Pullers & Nut Splitters",
  description:
    "Technical data, capacities, nut ranges, puller configurations, applications, and support information for ToughTorq pullers and nut splitters.",
};

function formatNumber(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", { maximumFractionDigits: 2 });
  }

  return String(value ?? "—");
}

function ToolTable({
  title,
  models,
}: {
  title: string;
  models: typeof pullersNutSplitters.models;
}) {
  return (
    <details className="overflow-hidden rounded-xl border border-[#dddddd] bg-white">
      <summary className="cursor-pointer px-5 py-4 text-lg font-semibold text-[#3f4448]">
        {title}{" "}
        <span className="ml-2 text-sm font-normal text-[#777777]">
          ({models.length} models)
        </span>
      </summary>

      <div className="overflow-x-auto border-t border-[#dddddd]">
        <table className="min-w-[980px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#3f4448] text-white">
            <tr>
              <th className="px-4 py-4 font-semibold">Model</th>
              <th className="px-4 py-4 font-semibold">Capacity</th>
              <th className="px-4 py-4 font-semibold">Nut / Component Range</th>
              <th className="px-4 py-4 font-semibold">Spread</th>
              <th className="px-4 py-4 font-semibold">Stroke</th>
              <th className="px-4 py-4 font-semibold">Weight</th>
              <th className="px-4 py-4 font-semibold">Operation</th>
            </tr>
          </thead>

          <tbody>
            {models.map((model, index) => {
              const s = model.specifications;

              const range =
                s.nutAfSize ??
                s.boltDiameter ??
                s.matchedModuleSpecification ??
                s.hydraulicCylinder ??
                "—";

              return (
                <tr
                  key={model.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
                >
                  <td className="border-t border-[#dddddd] px-4 py-4 font-bold text-[#ed1c24]">
                    {model.model}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {s.capacityTons
                      ? `${formatNumber(s.capacityTons)} ton`
                      : "—"}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {String(range)}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {s.maxSpreadIn
                      ? `${formatNumber(s.maxSpreadIn)} in`
                      : "—"}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {s.strokeIn
                      ? `${formatNumber(s.strokeIn)} in`
                      : "—"}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {s.weightLb
                      ? `${formatNumber(s.weightLb)} lb`
                      : s.setWeightLb
                      ? `${formatNumber(s.setWeightLb)} lb set`
                      : "—"}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {String(s.operationType ?? "Hydraulic")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </details>
  );
}

export default function PullersNutSplittersPage() {
  const family = pullersNutSplitters;
  const families = family.componentGroups ?? [];
  const seriesNames = Array.from(
    new Set(family.models.map((model) => String(model.specifications.series)))
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Removal & Maintenance
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Pullers
            <br />
            & Nut Splitters
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#technical-data"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Technical Data
            </Link>

            <Link
              href="#selection"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Selection Guidance
            </Link>

            <Link
              href="/find-a-distributor"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Find a Distributor
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Families
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Controlled removal tooling
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {families.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-[#dddddd] bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-[#3f4448]">
                  {item.displayName}
                </h3>
                {item.description && (
                  <p className="mt-3 text-sm leading-7 text-[#555555]">
                    {item.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="technical-data"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Technical Data
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Verified puller and splitter models
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-[#555555]">
            Open a family below to review the published capacity, nut or
            component range, spread, stroke, weight, and operating method.
          </p>

          <div className="mt-8 space-y-4">
            {seriesNames.map((seriesName) => (
              <ToolTable
                key={seriesName}
                title={seriesName}
                models={family.models.filter(
                  (model) => String(model.specifications.series) === seriesName
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="selection"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Product Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Match the removal tool to the component
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Puller selection should account for component size, required
              force, reach, spread, jaw engagement, available clearance, and
              whether the work calls for a puller, coupler tool, or nut
              splitter.
            </p>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Component diameter",
                "Required pulling force",
                "Reach",
                "Spread",
                "Jaw configuration",
                "Available clearance",
                "Nut A/F size",
                "Bolt diameter",
              ].map((item) => (
                <div key={item} className="bg-white p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              System Matching
            </p>

            <div className="mt-6 space-y-4">
              {family.compatibility.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-[#555555]"
                >
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {family.accessories.map((accessory) => (
                <div
                  key={accessory}
                  className="rounded-lg border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-sm font-medium text-[#555555]"
                >
                  {accessory}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Industrial component removal
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {family.applications.map((application) => (
              <div key={application} className="bg-[#fafafa] p-5">
                <p className="font-medium text-[#444444]">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnicalDownloads
        title="Removal-tool technical resources"
        downloads={family.downloads}
        fallbackTitles={[
          "Nut Splitter Cutsheet",
          "Hydraulic Puller Set Guide",
          "Adjustable Gear Puller Cutsheet",
          "Removal Tool Selection Guide",
        ]}
        background="gray"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Distribution
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Find a ToughTorq distributor
            </h2>

            <p className="mt-4 leading-7 text-[#555555]">
              Connect with the ToughTorq distribution network for puller and
              nut-splitter selection and technical support.
            </p>

            <Link
              href="/find-a-distributor"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] bg-white px-5 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Find a Distributor
            </Link>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Purchase, Rental & Service
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Commercial support through JAM Torque
            </h2>

            <p className="mt-4 leading-7 text-[#555555]">
              For purchasing, rental availability, service, and application
              support in JAM Torque&apos;s supported market, continue to
              JAMTorque.com.
            </p>

            <a
              href={family.jamMarketplaceUrl ?? "https://jamtorque.com"}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Visit JAM Torque →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
