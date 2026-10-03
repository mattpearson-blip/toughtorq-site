import type { Metadata } from "next";
import Link from "next/link";

import { hydraulicTorquePumps } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Hydraulic Torque Pumps",
  description:
    "Technical specifications, flow data, operating requirements, dimensions, and support information for ToughTorq battery, electric, and pneumatic hydraulic torque pumps.",
};

function formatValue(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US");
  }

  return String(value ?? "—");
}

function modelSpec(
  model: typeof hydraulicTorquePumps.models[number],
  key: string
) {
  return model.specifications[key];
}

export default function HydraulicPumpsPage() {
  const family = hydraulicTorquePumps;

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Power
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic
            <br />
            Torque Pumps
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#model-data"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Technical Data
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

      {/* PRODUCT OVERVIEW */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Family
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Four torque-pump platforms
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {family.models.map((model) => (
              <article
                key={model.id}
                className="rounded-xl border border-[#dddddd] bg-white p-5"
              >
                <p className="text-sm font-bold text-[#ed1c24]">{model.model}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                  {model.displayName.replace(`${model.model} `, "")}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {model.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL DATA */}
      <section
        id="model-data"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Model Specifications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Verified torque-pump data
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            The table below uses source-verified manufacturer data. Blank or
            unpublished fields are intentionally not estimated.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
            <table className="min-w-[1080px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#3f4448] text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Model</th>
                  <th className="px-4 py-4 font-semibold">Power Source</th>
                  <th className="px-4 py-4 font-semibold">Pressure</th>
                  <th className="px-4 py-4 font-semibold">Flow</th>
                  <th className="px-4 py-4 font-semibold">Reservoir</th>
                  <th className="px-4 py-4 font-semibold">Power / Air</th>
                  <th className="px-4 py-4 font-semibold">Weight</th>
                </tr>
              </thead>

              <tbody>
                {family.models.map((model, index) => {
                  const isBattery = model.model === "TTQ-BATT-10K-48V";
                  const isKAT = model.model === "KAT-3000";
                  const isKLW2000 = model.model === "KLW-2000";
                  const isKLW3000 = model.model === "KLW-3000";

                  let pressure = "—";
                  let flow = "—";
                  let reservoir = "—";
                  let power = "—";
                  let weight = "—";

                  if (isBattery) {
                    pressure = `${formatValue(
                      modelSpec(model, "maxPressurePsi")
                    )} psi`;
                    flow = `${formatValue(
                      modelSpec(model, "firstStageFlowGpm")
                    )} GPM first stage`;
                    reservoir = "Small / large tank configurations";
                    power = "48V / 26 Ah battery, 750 W motor";
                  }

                  if (isKLW2000) {
                    flow = "7.0 / 0.7 L/min";
                    reservoir = `${formatValue(
                      modelSpec(model, "oilCapacityL")
                    )} L`;
                    power = `${formatValue(
                      modelSpec(model, "motorPowerKw")
                    )} kW electric`;
                    weight = `${formatValue(modelSpec(model, "weightKg"))} kg`;
                  }

                  if (isKLW3000) {
                    flow = "7.0 / 1.6 / 0.8 L/min";
                    reservoir = `${formatValue(
                      modelSpec(model, "oilCapacityL")
                    )} L`;
                    power = `${formatValue(
                      modelSpec(model, "motorPowerKw")
                    )} kW electric`;
                    weight = `${formatValue(modelSpec(model, "weightKg"))} kg`;
                  }

                  if (isKAT) {
                    pressure = `${formatValue(
                      modelSpec(model, "minPressureBar")
                    )}–${formatValue(
                      modelSpec(model, "maxPressureBar")
                    )} bar`;
                    flow = "0.63 @700 / 1.26 @300 / 7 @70 bar L/min";
                    reservoir = `${formatValue(
                      modelSpec(model, "oilCapacityL")
                    )} L`;
                    power = `${formatValue(
                      modelSpec(model, "compressedAirBar")
                    )} bar compressed air`;
                    weight = `${formatValue(modelSpec(model, "weightKg"))} kg`;
                  }

                  return (
                    <tr
                      key={model.id}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
                      }
                    >
                      <td className="border-t border-[#dddddd] px-4 py-4 font-bold text-[#ed1c24]">
                        {model.model}
                      </td>
                      <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                        {formatValue(modelSpec(model, "powerSource"))}
                      </td>
                      <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                        {pressure}
                      </td>
                      <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                        {flow}
                      </td>
                      <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                        {reservoir}
                      </td>
                      <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                        {power}
                      </td>
                      <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                        {weight}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TTQ BATTERY DETAIL */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              TTQ-BATT-10K-48V
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Cordless hydraulic power
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                ["Maximum Pressure", "10,150 psi"],
                ["Battery", "48V / 26 Ah lithium"],
                ["Motor", "750 W"],
                ["First-Stage Flow", "1.27 GPM"],
                ["Runtime", "1.5–2 hours per battery"],
                ["Remote", "20 ft low-current control"],
                ["Flow Design", "2-stage"],
                ["Stated Noise", "<75 dB"],
              ].map(([label, value]) => (
                <div key={label} className="bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                    {label}
                  </p>
                  <p className="mt-2 font-semibold text-[#3f4448]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Overall Dimensions
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Small and large tank configurations
            </h2>

            <div className="mt-7 overflow-hidden rounded-xl border border-[#dddddd] bg-white">
              <div className="grid grid-cols-4 bg-[#3f4448] px-4 py-3 text-sm font-semibold text-white">
                <span>Configuration</span>
                <span>Width</span>
                <span>Height</span>
                <span>Length</span>
              </div>

              <div className="grid grid-cols-4 border-t border-[#dddddd] px-4 py-4 text-sm text-[#555555]">
                <span className="font-semibold text-[#3f4448]">10K-1-S</span>
                <span>11.42 in</span>
                <span>16.93 in</span>
                <span>16.14 in</span>
              </div>

              <div className="grid grid-cols-4 border-t border-[#dddddd] bg-[#f7f7f7] px-4 py-4 text-sm text-[#555555]">
                <span className="font-semibold text-[#3f4448]">10K-1-L</span>
                <span>11.61 in</span>
                <span>19.09 in</span>
                <span>17.32 in</span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#666666]">
              Small and large-capacity oil tank configurations are available.
              Reservoir capacity values are not shown here until the final
              manufacturer values are verified.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES + APPLICATIONS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Hydraulic power for demanding bolting work
            </h2>

            <div className="mt-7 space-y-3">
              {family.features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 rounded-lg border border-[#dddddd] bg-[#fafafa] p-4"
                >
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <p className="text-sm leading-6 text-[#555555]">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Applications
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Typical torque-pump applications
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {family.applications.map((application) => (
                <div key={application} className="bg-[#fafafa] p-5">
                  <p className="font-medium text-[#444444]">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSORIES / COMPATIBILITY */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Accessories
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              System components
            </h2>

            <div className="mt-6 space-y-3">
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

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Compatibility
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Match the complete hydraulic system
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Pump selection must account for wrench pressure requirements,
              hydraulic couplers, hose rating, connected tool count, reservoir
              capacity, available power source, and expected duty cycle.
            </p>

            <p className="mt-4 leading-8 text-[#555555]">
              Specific pump-to-wrench compatibility will be published as the
              hydraulic wrench catalog is migrated into the canonical ToughTorq
              dataset.
            </p>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section
        id="downloads"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Downloads
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Hydraulic torque pump technical resources
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "TTQ-BATT-10K-48V Cutsheet",
              "KLW-2000 Technical Data",
              "KLW-3000 Technical Data",
              "KAT-3000 Technical Data",
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

      {/* DISTRIBUTOR + JAM HANDOFF */}
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
              Connect with the ToughTorq distribution network for local product
              availability and technical support.
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
              For purchasing, rental availability, hydraulic service, and
              application support in JAM Torque&apos;s supported market,
              continue to JAMTorque.com.
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
