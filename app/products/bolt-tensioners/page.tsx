import type { Metadata } from "next";
import Link from "next/link";

import { boltTensioners } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Hydraulic Bolt Tensioners",
  description:
    "Technical specifications, bolt ranges, load capacities, stroke, pressure requirements, accessories, and application data for ToughTorq hydraulic bolt tensioners.",
};

function formatNumber(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
  }

  return String(value ?? "—");
}

function SpringReturnTable({
  models,
}: {
  models: typeof boltTensioners.models;
}) {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
      <table className="min-w-[820px] w-full border-collapse text-left text-sm">
        <thead className="bg-[#3f4448] text-white">
          <tr>
            <th className="px-4 py-4 font-semibold">Model</th>
            <th className="px-4 py-4 font-semibold">Thread Range</th>
            <th className="px-4 py-4 font-semibold">Max Tension Force</th>
            <th className="px-4 py-4 font-semibold">Effective Area</th>
            <th className="px-4 py-4 font-semibold">Max Stroke</th>
            <th className="px-4 py-4 font-semibold">Return</th>
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
                {String(model.specifications.threadRange)}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 font-medium text-[#444444]">
                {formatNumber(model.specifications.maxTensionForceLbf)} lbf
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.effectiveAreaIn2)} in²
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.maxStrokeIn)} in
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                Automatic spring return
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LoadReturnTable({
  models,
}: {
  models: typeof boltTensioners.models;
}) {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
      <table className="min-w-[920px] w-full border-collapse text-left text-sm">
        <thead className="bg-[#3f4448] text-white">
          <tr>
            <th className="px-4 py-4 font-semibold">Model</th>
            <th className="px-4 py-4 font-semibold">Thread Range</th>
            <th className="px-4 py-4 font-semibold">Max Load</th>
            <th className="px-4 py-4 font-semibold">Working Pressure</th>
            <th className="px-4 py-4 font-semibold">Effective Area</th>
            <th className="px-4 py-4 font-semibold">Stroke</th>
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
                {String(model.specifications.threadRange)}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 font-medium text-[#444444]">
                {formatNumber(model.specifications.maxLoadLbf)} lbf
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.maxWorkingPressurePsi)} psi
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.effectiveAreaIn2)} in²
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.strokeIn)} in
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

function MultistageTable({
  models,
}: {
  models: typeof boltTensioners.models;
}) {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
      <table className="min-w-[980px] w-full border-collapse text-left text-sm">
        <thead className="bg-[#3f4448] text-white">
          <tr>
            <th className="px-4 py-4 font-semibold">Model</th>
            <th className="px-4 py-4 font-semibold">Bolt</th>
            <th className="px-4 py-4 font-semibold">Max Pulling Capacity</th>
            <th className="px-4 py-4 font-semibold">Working Pressure</th>
            <th className="px-4 py-4 font-semibold">Stroke</th>
            <th className="px-4 py-4 font-semibold">Effective Area</th>
            <th className="px-4 py-4 font-semibold">Outside Diameter</th>
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
                {String(model.specifications.boltDiameter)}
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 font-medium text-[#444444]">
                {formatNumber(model.specifications.maxPullingCapacityLbf)} lbf
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.maxWorkingPressurePsi)} psi
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.strokeIn)} in
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.cylinderEffectiveAreaIn2)} in²
              </td>
              <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                {formatNumber(model.specifications.outsideDiameterIn)} in
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

export default function BoltTensionersPage() {
  const family = boltTensioners;
  const springReturn = family.models.filter(
    (model) => model.specifications.series === "Spring Return"
  );
  const loadReturn = family.models.filter(
    (model) => model.specifications.series === "Load Return"
  );
  const multistage = family.models.filter(
    (model) => model.specifications.series === "Multistage"
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Tensioning
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Bolt Tensioners
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
            Controlled Preload
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Apply hydraulic load directly to the stud
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Hydraulic bolt tensioning stretches the stud axially so the nut can
            be positioned while the bolt is under controlled load. This reduces
            dependence on torque-friction relationships and supports repeatable
            loading on critical joints.
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
        id="technical-data"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Spring-Return Series
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Automatic spring-return tensioners
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Spring-return models cover a broad thread range and are designed
            for fast repeated operation, quick hydraulic connection, and
            simultaneous multiple-tool tensioning.
          </p>

          <SpringReturnTable models={springReturn} />
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Load-Return Series
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Modular load-return tensioners
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Load-return models use modular adaptor kits, detachable rotational
            bridges, twin hydraulic ports, and a piston stroke indicator for
            demanding threaded connections and multi-tool operation.
          </p>

          <LoadReturnTable models={loadReturn} />
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Multistage Series
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Compact high-capacity tensioning
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            TTE multistage tensioners operate at up to 21,756 psi and combine a
            compact outside diameter with high pulling capacity for applications
            where radial clearance is restricted.
          </p>

          <MultistageTable models={multistage} />
        </div>
      </section>

      <section
        id="selection"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              System Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Size the tensioner to the joint
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Tensioner selection depends on the bolt and thread specification,
              required preload, available stud projection, nut dimensions,
              radial clearance, working pressure, joint geometry, and whether
              tools will be operated individually or simultaneously.
            </p>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Bolt diameter",
                "Thread pitch",
                "Required bolt load",
                "Stud projection",
                "Nut size",
                "Radial clearance",
                "Working pressure",
                "Joint geometry",
              ].map((item) => (
                <div key={item} className="bg-white p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Complete System
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Match all ultra-high-pressure components
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {family.accessories.map((accessory) => (
                <div
                  key={accessory}
                  className="rounded-lg border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-sm font-medium text-[#555555]"
                >
                  {accessory}
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              {family.compatibility.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[#555555]">
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <span>{item}</span>
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
            Critical bolted joints
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

      <section
        id="downloads"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Downloads
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Bolt tensioner technical resources
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "Spring-Return Tensioner Cutsheet",
              "Load-Return Tensioner Cutsheet",
              "Multistage Tensioner Cutsheet",
              "Bolt Tensioner Selection Guide",
            ].map((title) => (
              <div
                key={title}
                className="rounded-xl border border-[#dddddd] bg-white p-5"
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
              Connect with the ToughTorq distribution network for tensioner
              sizing, hydraulic-system selection, and technical support.
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
