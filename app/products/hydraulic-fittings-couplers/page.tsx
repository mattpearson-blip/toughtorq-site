import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TechnicalDownloads } from "@/components/technical-downloads";

import { hydraulicFittingsCouplers } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Hydraulic Fittings, Couplers & Controls",
  description:
    "Technical specifications, pressure ratings, threads, flow data, manifold configurations, gauges, adaptors, and valves for ToughTorq hydraulic systems.",
};

function formatNumber(value: unknown) {
  return typeof value === "number"
    ? value.toLocaleString("en-US", { maximumFractionDigits: 2 })
    : String(value ?? "—");
}

function AccessoryTable({
  title,
  models,
}: {
  title: string;
  models: typeof hydraulicFittingsCouplers.models;
}) {
  return (
    <details className="overflow-hidden rounded-xl border border-[#dddddd] bg-white">
      <summary className="cursor-pointer px-5 py-4 text-lg font-semibold text-[#3f4448]">
        {title}
        <span className="ml-2 text-sm font-normal text-[#777777]">
          ({models.length} models)
        </span>
      </summary>

      <div className="overflow-x-auto border-t border-[#dddddd]">
        <table className="min-w-[1080px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#3f4448] text-white">
            <tr>
              <th className="px-4 py-4 font-semibold">Model</th>
              <th className="px-4 py-4 font-semibold">Type</th>
              <th className="px-4 py-4 font-semibold">Connection / Thread</th>
              <th className="px-4 py-4 font-semibold">Pressure / Range</th>
              <th className="px-4 py-4 font-semibold">Flow / Outlets</th>
              <th className="px-4 py-4 font-semibold">Details</th>
            </tr>
          </thead>

          <tbody>
            {models.map((model, index) => {
              const s = model.specifications;
              const connection =
                s.thread ??
                s.interfaceThread ??
                s.gaugeConnectorThread ??
                s.portThread ??
                (s.fromConnection && s.toConnection
                  ? `${String(s.fromConnection)} → ${String(s.toConnection)}`
                  : "—");

              const pressure =
                s.maxWorkingPressurePsi
                  ? `${formatNumber(s.maxWorkingPressurePsi)} psi`
                  : s.workingPressureRangeMpa
                  ? `${String(s.workingPressureRangeMpa)} MPa working`
                  : "—";

              const flowOrOutlets = s.maxFlowLMin
                ? `${formatNumber(s.maxFlowLMin)} L/min`
                : s.outlets
                ? `${formatNumber(s.outlets)} outlets`
                : "—";

              const details =
                s.productName ??
                s.measuringRangeMpa ??
                s.malePart ??
                s.productName ??
                model.description ??
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
                    {String(s.series ?? title)}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {String(connection)}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {String(pressure)}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {String(flowOrOutlets)}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {String(details)}
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

export default function HydraulicFittingsCouplersPage() {
  const family = hydraulicFittingsCouplers;
  const groups = family.componentGroups ?? [];
  const seriesNames = Array.from(
    new Set(family.models.map((model) => String(model.specifications.series)))
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-12">
          <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Accessories
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Fittings, Couplers
            <br />
            & Controls
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#technical-data"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              View Technical Data
            </Link>

            <Link
              href="#system-matching"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444]"
            >
              System Matching
            </Link>

            <Link
              href="/find-a-distributor"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444]"
            >
              Find a Distributor
            </Link>
          </div>

          {family.images[0] && (
            <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-[#e2e2e2] bg-[#fafafa] p-8">
              <Image
                src={family.images[0].src}
                alt={family.images[0].alt}
                width={520}
                height={360}
                priority
                className="h-auto max-h-[340px] w-auto max-w-full object-contain"
              />
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Accessory Families
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Build the complete hydraulic connection system
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <article
                key={group.id}
                className="rounded-xl border border-[#dddddd] bg-white p-5"
              >
                {group.images[0] && (
                  <div className="mb-4 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-lg border border-[#e5e5e5] bg-[#fafafa] p-4">
                    <Image
                      src={group.images[0].src}
                      alt={group.images[0].alt}
                      width={420}
                      height={260}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#3f4448]">
                  {group.displayName}
                </h3>
                {group.description && (
                  <p className="mt-3 text-sm leading-7 text-[#555555]">
                    {group.description}
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
            Verified connection-component specifications
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-[#555555]">
            Open a product family below to review published model numbers,
            threads, working-pressure information, flow or outlet data, and
            application details.
          </p>

          <div className="mt-8 space-y-4">
            {seriesNames.map((seriesName) => (
              <AccessoryTable
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
        id="system-matching"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              System Matching
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Match pressure, thread, flow, and function
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Working pressure",
                "Thread type",
                "Thread size",
                "Male / female interface",
                "Required flow",
                "Gauge range",
                "Number of manifold outlets",
                "Valve function",
              ].map((item) => (
                <div key={item} className="bg-white p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Compatibility
            </p>

            <div className="mt-6 space-y-4">
              {family.compatibility.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[#555555]">
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/products/hydraulic-hoses"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] bg-white px-5 py-2 text-sm font-semibold text-[#444444]"
            >
              View Hydraulic Hoses
            </Link>
          </div>
        </div>
      </section>

      <TechnicalDownloads
        title="Hydraulic accessory technical resources"
        downloads={family.downloads}
        fallbackTitles={["Coupler & Manifold Guide","Hydraulic Fitting Guide","Pressure Gauge & Adaptor Guide","Hydraulic Control Valve Guide"]}
        background="white"
      />

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
              Connect with the ToughTorq distribution network for connection
              matching and technical support.
            </p>

            <Link
              href="/find-a-distributor"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] px-5 py-2 text-sm font-semibold text-[#444444]"
            >
              Find a Distributor
            </Link>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Purchase & Service
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Commercial support through JAM Torque
            </h2>

            <p className="mt-4 leading-7 text-[#555555]">
              For purchasing, hose and fitting assemblies, replacement
              components, service, and application support in JAM Torque&apos;s
              supported market, continue to JAMTorque.com.
            </p>

            <a
              href={family.jamMarketplaceUrl ?? "https://jamtorque.com"}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-2 text-sm font-semibold text-white"
            >
              Visit JAM Torque →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
