import Link from "next/link";

import { ProductSection } from "../../../components/product-section";

import {
  pvaAccessories,
  pvaAdaptors,
  pvaDrivePlatforms,
  pvaHeads,
  pvaReactionDevices,
} from "../../../data/pva";

const industries = [
  "Water",
  "Oil & Gas",
  "Power Generation",
  "Mining",
  "Pulp & Paper",
  "Petrochemical",
];

const configurationSteps = [
  {
    number: "01",
    title: "Power",
  },
  {
    number: "02",
    title: "Head",
  },
  {
    number: "03",
    title: "Adaptor",
  },
  {
    number: "04",
    title: "Reaction",
  },
  {
    number: "05",
    title: "Options",
  },
];

export default function ValveActuatorToolsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Portable Valve Actuation
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Portable Valve
            <br />
            Actuator Systems
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Portable, modular valve actuation systems for faster and more
            controlled operation of industrial valves.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#configure-system"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Configure a PVA System
            </Link>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              View Quote Cart →
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex min-h-[70px] items-center justify-center bg-white px-4 text-center"
              >
                <p className="text-sm font-semibold text-[#444444]">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 1 */}
      <div id="configure-system">
        <ProductSection
          eyebrow="Step 1"
          title="Choose Your Power Platform"
          description="Select the drive platform based on the work environment, valve location, available utilities, operating frequency, and required torque."
          items={pvaDrivePlatforms}
          columns={2}
          background="white"
        />
      </div>

      {/* CONFIGURATION FLOW */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Configure Your System
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Build the PVA system step by step
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-5">
            {configurationSteps.map((step) => (
              <div key={step.number} className="bg-white p-5">
                <p className="text-xs font-bold text-[#ed1c24]">
                  {step.number}
                </p>

                <p className="mt-2 text-lg font-semibold text-[#3f4448]">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 2 */}
      <ProductSection
        eyebrow="Step 2"
        title="Actuator Heads"
        description="Choose the head geometry that matches the valve position, stem configuration, and available working clearance."
        items={pvaHeads}
        columns={4}
        compactCards
        background="white"
      />

      {/* STEP 3 */}
      <ProductSection
        eyebrow="Step 3"
        title="Valve Adaptors"
        description="Match the portable actuator to the valve handwheel, spokes, stem, or drive interface."
        items={pvaAdaptors}
        columns={3}
        compactCards
        background="gray"
      />

      {/* STEP 4 */}
      <ProductSection
        eyebrow="Step 4"
        title="Reaction Management"
        description="Stabilize the actuator using the reaction device best suited to the valve configuration and operator position."
        items={pvaReactionDevices}
        columns={3}
        compactCards
        background="white"
      />

      {/* STEP 5 */}
      <ProductSection
        eyebrow="Step 5"
        title="Options & Accessories"
        description="Add torque control, reach, transport, power, reaction, or utility components to complete the valve actuation package."
        items={pvaAccessories}
        columns={3}
        compactCards
        background="gray"
      />

      {/* BENEFITS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Benefits
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Portable valve operation
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Operator Safety
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#3f4448]">
                Reduce manual strain
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Reduce physical effort and limit operator exposure during
                difficult or repetitive valve operations.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Equipment Protection
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#3f4448]">
                Controlled operation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Controlled valve actuation helps protect the valve and
                surrounding equipment during operation.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Productivity
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#3f4448]">
                Operate repetitive valves faster
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Portable powered operation can improve productivity across
                networks containing many manually operated valves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[#dddddd] bg-white p-6 md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Complete Your Configuration
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Finished selecting your PVA system?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#666666]">
                Review the actuator, head, adaptor, reaction equipment, and
                accessories you selected before submitting the quote request.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              View Quote Cart
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}