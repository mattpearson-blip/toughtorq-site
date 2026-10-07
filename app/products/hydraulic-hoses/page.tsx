import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TechnicalDownloads } from "@/components/technical-downloads";

import { hydraulicHoses } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Hydraulic Hoses",
  description:
    "Technical specifications, pressure ratings, lengths, fittings, applications, and support information for ToughTorq hydraulic hose assemblies.",
};

function formatNumber(value: unknown) {
  return typeof value === "number"
    ? value.toLocaleString("en-US", { maximumFractionDigits: 2 })
    : String(value ?? "—");
}

function HoseTable({
  title,
  models,
}: {
  title: string;
  models: typeof hydraulicHoses.models;
}) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-[#3f4448]">{title}</h3>

      <div className="mt-5 overflow-x-auto rounded-xl border border-[#dddddd]">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#3f4448] text-white">
            <tr>
              <th className="px-4 py-4 font-semibold">Model</th>
              <th className="px-4 py-4 font-semibold">Working Pressure</th>
              <th className="px-4 py-4 font-semibold">Length</th>
              <th className="px-4 py-4 font-semibold">Connection</th>
              <th className="px-4 py-4 font-semibold">ID / Construction</th>
              <th className="px-4 py-4 font-semibold">Weight</th>
            </tr>
          </thead>

          <tbody>
            {models.map((model, index) => {
              const s = model.specifications;

              return (
                <tr
                  key={model.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
                >
                  <td className="border-t border-[#dddddd] px-4 py-4 font-bold text-[#ed1c24]">
                    {model.model}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {formatNumber(s.maxWorkingPressureBar)} bar
                    <span className="block text-xs text-[#888888]">
                      {formatNumber(s.maxWorkingPressurePsi)} psi
                    </span>
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {formatNumber(s.lengthM)} m
                    <span className="block text-xs text-[#888888]">
                      {formatNumber(s.lengthFt)} ft
                    </span>
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {String(s.endFittingThread ?? s.endFitting ?? "—")}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {s.insideDiameterMm
                      ? `${formatNumber(s.insideDiameterMm)} mm ID`
                      : String(s.construction ?? "—")}
                  </td>
                  <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                    {s.weightLb ? `${formatNumber(s.weightLb)} lb` : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function HydraulicHosesPage() {
  const family = hydraulicHoses;
  const standard = family.models.filter(
    (model) => model.specifications.series === "700 Bar Hydraulic Hose"
  );
  const uhp = family.models.filter(
    (model) =>
      model.specifications.series === "Ultra-High-Pressure Hydraulic Hose"
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-12">
          <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Accessories
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Hoses
          </h1>
          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#technical-data" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white">
              View Technical Data
            </Link>
            <Link href="#selection" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444]">
              Selection Guidance
            </Link>
            <Link href="/find-a-distributor" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444]">
              Find a Distributor
            </Link>
          </div>

          </div>

          {family.images[0] && (
            <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-[#e2e2e2] bg-[#fafafa] p-8">
              <Image
                src={family.images[0].src}
                alt={family.images[0].alt}
                width={520}
                height={520}
                priority
                className="h-auto max-h-[360px] w-auto max-w-full object-contain"
              />
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Hose Families
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Select by working pressure and connection
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {(family.componentGroups ?? []).map((group) => (
              <article key={group.id} className="rounded-xl border border-[#dddddd] bg-white p-6">
                {group.images[0] && (
                  <div className="mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-[#e5e5e5] bg-[#fafafa] p-4">
                    <Image
                      src={group.images[0].src}
                      alt={group.images[0].alt}
                      width={420}
                      height={260}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-[#3f4448]">
                  {group.displayName}
                </h3>
                <p className="mt-4 leading-7 text-[#555555]">{group.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technical-data" className="scroll-mt-24 border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Technical Data
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Verified hose specifications
          </h2>
          <HoseTable title="700 Bar Hydraulic Hoses" models={standard} />
          <HoseTable title="Ultra-High-Pressure Hydraulic Hoses" models={uhp} />
        </div>
      </section>

      <section id="selection" className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Hose Selection
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Match every connection in the hydraulic system
            </h2>
            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Maximum working pressure",
                "Required length",
                "End-fitting thread",
                "Pump connection",
                "Tool connection",
                "Application environment",
                "Temperature exposure",
                "Coupler standard",
              ].map((item) => (
                <div key={item} className="bg-white p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              System Compatibility
            </p>
            <div className="mt-6 space-y-4">
              {family.compatibility.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[#555555]">
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/products/hydraulic-fittings-couplers" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] bg-white px-5 py-2 text-sm font-semibold text-[#444444]">
              View Fittings & Couplers
            </Link>
          </div>
        </div>
      </section>

      <TechnicalDownloads
        title="Hydraulic hose technical resources"
        downloads={family.downloads}
        fallbackTitles={["700 Bar Hose Cutsheet","Ultra-High-Pressure Hose Cutsheet","Hydraulic Hose Selection Guide"]}
        background="white"
      />

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">Distribution</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">Find a ToughTorq distributor</h2>
            <p className="mt-4 leading-7 text-[#555555]">Connect with the ToughTorq distribution network for hose selection and technical support.</p>
            <Link href="/find-a-distributor" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] px-5 py-2 text-sm font-semibold text-[#444444]">
              Find a Distributor
            </Link>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">Purchase, Rental & Service</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">Commercial support through JAM Torque</h2>
            <p className="mt-4 leading-7 text-[#555555]">For purchasing, hose assemblies, rental support, service, and application assistance in JAM Torque&apos;s supported market, continue to JAMTorque.com.</p>
            <a href={family.jamMarketplaceUrl ?? "https://jamtorque.com"} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-2 text-sm font-semibold text-white">
              Visit JAM Torque →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
