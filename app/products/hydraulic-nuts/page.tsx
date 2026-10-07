import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TechnicalDownloads } from "@/components/technical-downloads";

import { hydraulicNuts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Hydraulic Nuts",
  description:
    "Technical specifications, load ratings, pressure requirements, threads, dimensions, applications, and support information for ToughTorq hydraulic nuts.",
};

function formatNumber(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
  }

  return String(value ?? "—");
}

function getDimension(
  dimensions: typeof hydraulicNuts.models[number]["dimensions"],
  key: string
) {
  const item = dimensions.find((dimension) => dimension.key === key);
  if (!item) return "—";
  return `${item.value}${item.unit ? ` ${item.unit}` : ""}`;
}

function UpperLockingTable({
  models,
}: {
  models: typeof hydraulicNuts.models;
}) {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
      <table className="min-w-[860px] w-full border-collapse text-left text-sm">
        <thead className="bg-[#3f4448] text-white">
          <tr>
            <th className="px-4 py-4 font-semibold">Model</th>
            <th className="px-4 py-4 font-semibold">Bolt</th>
            <th className="px-4 py-4 font-semibold">Max Load</th>
            <th className="px-4 py-4 font-semibold">Working Pressure</th>
            <th className="px-4 py-4 font-semibold">Outside Diameter</th>
            <th className="px-4 py-4 font-semibold">Height</th>
            <th className="px-4 py-4 font-semibold">Stroke</th>
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
                {String(model.specifications.boltDiameter)}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 font-medium text-[#444444]">
                {formatNumber(model.specifications.maxLoadLbf)} lbf
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.maxWorkingPressurePsi)} psi
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.outsideDiameterIn)} in
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.heightIn)} in
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.strokeIn)} in
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BearingNutTable({
  models,
}: {
  models: typeof hydraulicNuts.models;
}) {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
      <table className="min-w-[1040px] w-full border-collapse text-left text-sm">
        <thead className="bg-[#3f4448] text-white">
          <tr>
            <th className="px-4 py-4 font-semibold">Model</th>
            <th className="px-4 py-4 font-semibold">Thread</th>
            <th className="px-4 py-4 font-semibold">D</th>
            <th className="px-4 py-4 font-semibold">d1</th>
            <th className="px-4 py-4 font-semibold">d2</th>
            <th className="px-4 py-4 font-semibold">Height</th>
            <th className="px-4 py-4 font-semibold">Stroke</th>
            <th className="px-4 py-4 font-semibold">Effective Area</th>
            <th className="px-4 py-4 font-semibold">Weight</th>
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
                {String(model.specifications.thread)}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {getDimension(model.dimensions, "D")}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {getDimension(model.dimensions, "d1")}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {getDimension(model.dimensions, "d2")}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {getDimension(model.dimensions, "H")}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {getDimension(model.dimensions, "stroke")}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.effectiveAreaIn2)} in²
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.weightLb)} lb
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HydraulicNutsPage() {
  const family = hydraulicNuts;
  const upperLocking = family.models.filter(
    (model) => model.specifications.series === "Upper Locking"
  );
  const bearingAssembly = family.models.filter(
    (model) => model.specifications.series === "Bearing Assembly"
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Controlled Axial Loading
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Nuts
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#upper-locking"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Upper-Locking Data
            </Link>

            <Link
              href="#bearing-assembly"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Bearing Nut Data
            </Link>

            <Link
              href="#downloads"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Downloads
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
            Hydraulic Preload
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Apply controlled force without relying only on torque
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Hydraulic nuts convert hydraulic pressure into axial force. Depending
            on the design, that force can be mechanically retained for a bolted
            joint or used to move bearings and other press-fit components into
            or out of position.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {family.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-[#dddddd] bg-white p-5"
              >
                <span className="font-bold text-[#ed1c24]">✓</span>
                <p className="mt-3 text-sm leading-6 text-[#555555]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="upper-locking"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Upper-Locking Series
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Hydraulic loading with mechanical retention
          </h2>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_380px]">
            <p className="max-w-3xl leading-8 text-[#555555]">
              TTNM upper-locking hydraulic nuts operate at up to 21,756 psi and
              cover M33 through M150 bolt applications. Standard configurations
              are suitable for temperatures up to 100°C, with special seals
              available for higher-temperature service.
            </p>

            {upperLocking[0]?.images[0] && (
              <div className="flex min-h-[220px] items-center justify-center rounded-xl border border-[#dddddd] bg-[#fafafa] p-6">
                <Image
                  src={upperLocking[0].images[0].src}
                  alt={upperLocking[0].images[0].alt}
                  width={370}
                  height={180}
                  className="max-h-[200px] w-auto object-contain"
                />
              </div>
            )}
          </div>

          <UpperLockingTable models={upperLocking} />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Anti-corrosion protective cap",
              "Spherical washers available for non-square interfaces",
              "Special sealing available above 100°C",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5 text-sm leading-7 text-[#555555]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="bearing-assembly"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Bearing Assembly Series
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Controlled bearing installation and removal
          </h2>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_340px]">
            <p className="max-w-3xl leading-8 text-[#555555]">
              TTHMV hydraulic nuts thread onto the shaft or sleeve and use
              ultra-high hydraulic pressure to move bearings and other
              interference-fit components. Published operating pressure is
              10,153–21,756 psi, and every model is equipped for connection to a
              compatible ultra-high-pressure hydraulic pump.
            </p>

            {bearingAssembly[0]?.images[0] && (
              <div className="flex min-h-[250px] items-center justify-center rounded-xl border border-[#dddddd] bg-white p-6">
                <Image
                  src={bearingAssembly[0].images[0].src}
                  alt={bearingAssembly[0].images[0].alt}
                  width={285}
                  height={240}
                  className="max-h-[230px] w-auto object-contain"
                />
              </div>
            )}
          </div>

          <BearingNutTable models={bearingAssembly} />
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Applications
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Loading, locking, assembly, and removal
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {family.applications.map((application) => (
                <div key={application} className="bg-[#fafafa] p-5">
                  <p className="font-medium text-[#444444]">{application}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Selection & Compatibility
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Match thread, pressure, and application geometry
            </h2>

            <div className="mt-6 space-y-4">
              {family.compatibility.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[#555555]">
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {family.accessories.map((accessory) => (
                <div
                  key={accessory}
                  className="rounded-lg border border-[#dddddd] bg-white px-4 py-3 text-sm font-medium text-[#555555]"
                >
                  {accessory}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechnicalDownloads
        title="Hydraulic nut technical resources"
        downloads={family.downloads}
        fallbackTitles={[
          "Upper-Locking Hydraulic Nut Cutsheet",
          "Bearing Assembly Hydraulic Nut Cutsheet",
          "Hydraulic Nut Selection Guide",
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
              Connect with the ToughTorq distribution network for hydraulic nut
              sizing, pump selection, and technical support.
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
