import type { Metadata } from "next";
import Link from "next/link";

import { hydraulicCylindersRams } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Hydraulic Cylinders & Rams",
  description:
    "Technical cylinder families, capacities, strokes, collapsed heights, operating pressures, applications, and support information for ToughTorq hydraulic cylinders and rams.",
};

function formatNumber(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", { maximumFractionDigits: 2 });
  }

  return String(value ?? "—");
}

function getDimension(
  dimensions: typeof hydraulicCylindersRams.models[number]["dimensions"],
  key: string
) {
  const item = dimensions.find((dimension) => dimension.key === key);
  if (!item) return "—";
  return `${item.value}${item.unit ? ` ${item.unit}` : ""}`;
}

function SeriesTable({
  title,
  models,
}: {
  title: string;
  models: typeof hydraulicCylindersRams.models;
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
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#3f4448] text-white">
            <tr>
              <th className="px-4 py-4 font-semibold">Model</th>
              <th className="px-4 py-4 font-semibold">Capacity</th>
              <th className="px-4 py-4 font-semibold">Stroke</th>
              <th className="px-4 py-4 font-semibold">Collapsed Height</th>
              <th className="px-4 py-4 font-semibold">Extended Height</th>
              <th className="px-4 py-4 font-semibold">Weight</th>
              <th className="px-4 py-4 font-semibold">Working Pressure</th>
            </tr>
          </thead>

          <tbody>
            {models.map((model, index) => (
              <tr
                key={model.id}
                className={index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
              >
                <td className="border-t border-[#dddddd] px-4 py-4 font-bold text-[#ed1c24]">
                  {model.model}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {formatNumber(model.specifications.capacityTons)} ton
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {getDimension(model.dimensions, "stroke")}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {getDimension(model.dimensions, "collapsedHeight")}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {getDimension(model.dimensions, "extendedHeight")}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {formatNumber(model.specifications.weightLb)} lb
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {formatNumber(model.specifications.maxWorkingPressurePsi)} psi
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

export default function HydraulicCylindersRamsPage() {
  const family = hydraulicCylindersRams;
  const series = family.componentGroups ?? [];

  const detailedSeries = Array.from(
    new Set(family.models.map((model) => String(model.specifications.series)))
  ).map((seriesName) => ({
    seriesName,
    models: family.models.filter(
      (model) => String(model.specifications.series) === seriesName
    ),
  }));

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Lifting & Positioning
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Cylinders
            <br />
            & Rams
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#families"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Cylinder Families
            </Link>

            <Link
              href="#model-data"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Model Data
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
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] md:grid-cols-4">
            {[
              ["Pressure Classes", "700 & 1500 bar"],
              ["Capacity Range", "5–1000+ ton"],
              ["Acting Types", "Single & double"],
              ["Specialty Designs", "Hollow, lock nut, telescopic & more"],
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
        id="families"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Cylinder Families
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Select the cylinder architecture
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            ToughTorq covers general-purpose lifting, restricted-clearance
            applications, pulling and tensioning, mechanical load holding,
            high-tonnage lifting, lightweight aluminum systems, telescopic
            lifting, and staged synchronized lifting.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {series.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#ed1c24]">
                  {item.displayName}
                </p>

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
        id="model-data"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Technical Data
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Verified model specifications
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-[#555555]">
            Model tables below use converted manufacturer data for capacity,
            stroke, collapsed height, extended height, weight, and working
            pressure. Open a series to view its model range.
          </p>

          <div className="mt-8 space-y-4">
            {detailedSeries.map(({ seriesName, models }) => (
              <SeriesTable
                key={seriesName}
                title={seriesName}
                models={models}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Cylinder Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Match the cylinder to the load and available space
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Required capacity",
                "Stroke length",
                "Collapsed height",
                "Extended height",
                "Single or double acting",
                "Return method",
                "Load-holding requirement",
                "Available clearance",
                "Side-load exposure",
                "Operating pressure",
              ].map((item) => (
                <div key={item} className="bg-[#fafafa] p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Complete Hydraulic System
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Match every hydraulic component
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {family.accessories.map((accessory) => (
                <div
                  key={accessory}
                  className="rounded-lg border border-[#dddddd] bg-white px-4 py-3 text-sm font-medium text-[#555555]"
                >
                  {accessory}
                </div>
              ))}
            </div>

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
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Industrial lifting, positioning, pushing & pulling
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {family.applications.map((application) => (
              <div key={application} className="bg-white p-5">
                <p className="font-medium text-[#444444]">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="downloads"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Downloads
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Hydraulic cylinder technical resources
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "General-Purpose Cylinder Cutsheet",
              "Low-Height Cylinder Cutsheet",
              "Hollow-Plunger Cylinder Cutsheet",
              "Lock-Nut Cylinder Selection Guide",
            ].map((title) => (
              <div
                key={title}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
              >
                <p className="font-semibold text-[#3f4448]">{title}</p>
                <p className="mt-2 text-sm text-[#777777]">
                  Download publishing in progress
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Distribution
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Find a ToughTorq distributor
            </h2>

            <p className="mt-4 leading-7 text-[#555555]">
              Connect with the ToughTorq distribution network for cylinder
              sizing, hydraulic-system selection, and technical support.
            </p>

            <Link
              href="/find-a-distributor"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] px-5 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Find a Distributor
            </Link>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
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
