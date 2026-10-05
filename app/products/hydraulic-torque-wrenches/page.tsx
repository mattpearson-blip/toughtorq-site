import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { hydraulicTorqueWrenches } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Hydraulic Torque Wrenches",
  description:
    "Technical specifications, torque ranges, dimensions, accessories, and application data for ToughTorq square-drive and low-profile hydraulic torque wrenches.",
};

function formatNumber(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US");
  }

  return String(value ?? "—");
}

function getDimension(
  dimensions: typeof hydraulicTorqueWrenches.models[number]["dimensions"],
  key: string
) {
  const item = dimensions.find((dimension) => dimension.key === key);
  if (!item) return "—";
  return `${item.value}${item.unit ? ` ${item.unit}` : ""}`;
}

export default function HydraulicTorqueWrenchesPage() {
  const family = hydraulicTorqueWrenches;
  const squareDriveModels = family.models.filter(
    (model) => model.specifications.series === "Square Drive"
  );
  const cassetteModels = family.models.filter(
    (model) => model.specifications.series === "Low Profile Cassette"
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Bolting
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic
            <br />
            Torque Wrenches
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#square-drive"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Square Drive Data
            </Link>

            <Link
              href="#low-profile"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Low-Profile Data
            </Link>

            <Link
              href="#downloads"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Downloads
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:px-8 lg:grid-cols-3 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#888888]">
              Square Drive
            </p>
            <p className="mt-2 text-2xl font-semibold text-[#3f4448]">
              121–51,074 ft-lb
            </p>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#888888]">
              Low Profile
            </p>
            <p className="mt-2 text-2xl font-semibold text-[#3f4448]">
              180–29,196 ft-lb
            </p>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#888888]">
              Square-Drive Accuracy
            </p>
            <p className="mt-2 text-2xl font-semibold text-[#3f4448]">
              ±3%
            </p>
          </div>
        </div>
      </section>

      <section
        id="square-drive"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Square Drive Series
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
                Controlled high-torque bolting
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#555555]">
                The square-drive series operates at up to 10,000 psi and uses
                a lightweight alloy body, 360° swivel hydraulic connection,
                adjustable reaction arm, and precision ratchet system.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "10,000 psi maximum working pressure",
                  "360° swivel hose coupler",
                  "360° adjustable reaction arm",
                  "3% accuracy",
                  "Square or hexagonal drive options",
                  "Custom reaction configurations available",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-lg border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-sm text-[#555555]"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative min-h-[320px] w-full max-w-[560px] md:min-h-[420px]">
                <Image
                  src="/square-drive-hydraulic-torque-wrench.png"
                  alt="ToughTorq square drive hydraulic torque wrench"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto rounded-xl border border-[#dddddd]">
            <table className="min-w-[1040px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#3f4448] text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Model</th>
                  <th className="px-4 py-4 font-semibold">Torque Range</th>
                  <th className="px-4 py-4 font-semibold">Square Drive</th>
                  <th className="px-4 py-4 font-semibold">Weight</th>
                  <th className="px-4 py-4 font-semibold">L1</th>
                  <th className="px-4 py-4 font-semibold">L3</th>
                  <th className="px-4 py-4 font-semibold">H1</th>
                  <th className="px-4 py-4 font-semibold">H2</th>
                  <th className="px-4 py-4 font-semibold">R1</th>
                  <th className="px-4 py-4 font-semibold">L2</th>
                </tr>
              </thead>

              <tbody>
                {squareDriveModels.map((model, index) => (
                  <tr
                    key={model.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
                  >
                    <td className="border-t border-[#dddddd] px-4 py-4 font-bold text-[#ed1c24]">
                      {model.model}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 font-medium text-[#444444]">
                      {formatNumber(model.specifications.torqueMinFtLb)}–
                      {formatNumber(model.specifications.torqueMaxFtLb)} ft-lb
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {String(model.specifications.squareDriveIn)} in
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.weightLb)} lb
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "L1")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "L3")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "H1")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "H2")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "R1")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "L2")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#777777]">
            Dimension letters follow the ToughTorq manufacturer drawing
            convention. Full dimensional drawings will be added to the download
            section as finalized.
          </p>
        </div>
      </section>

      <section
        id="low-profile"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1">
              <div className="relative min-h-[300px] w-full max-w-[560px] md:min-h-[400px]">
                <Image
                  src="/ratchet-cassette-hydraulic-torque-wrench.png"
                  alt="ToughTorq low-profile ratchet cassette hydraulic torque wrench"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Low Profile Series
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
                Ratchet cassette hydraulic torque wrenches
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#555555]">
                Low-profile power units use interchangeable ratchet links and
                reducer inserts to cover multiple fastener sizes while keeping
                the working envelope compact for restricted-access bolting.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Pancake low-profile design",
                  "Interchangeable working heads",
                  "Multiple ratchet-link sizes",
                  "Reducer inserts available",
                  "360° swivel hose coupler",
                  "Designed for restricted access",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-lg border border-[#dddddd] bg-white px-4 py-3 text-sm text-[#555555]"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto rounded-xl border border-[#dddddd]">
            <table className="min-w-[1040px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#3f4448] text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Model</th>
                  <th className="px-4 py-4 font-semibold">Torque Range</th>
                  <th className="px-4 py-4 font-semibold">Power Unit</th>
                  <th className="px-4 py-4 font-semibold">Reference Cassette</th>
                  <th className="px-4 py-4 font-semibold">Weight</th>
                  <th className="px-4 py-4 font-semibold">L</th>
                  <th className="px-4 py-4 font-semibold">H1</th>
                  <th className="px-4 py-4 font-semibold">H2</th>
                  <th className="px-4 py-4 font-semibold">W1</th>
                  <th className="px-4 py-4 font-semibold">W2</th>
                </tr>
              </thead>

              <tbody>
                {cassetteModels.map((model, index) => (
                  <tr
                    key={model.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f1f1f1]"}
                  >
                    <td className="border-t border-[#dddddd] px-4 py-4 font-bold text-[#ed1c24]">
                      {model.model}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 font-medium text-[#444444]">
                      {formatNumber(model.specifications.torqueMinFtLb)}–
                      {formatNumber(model.specifications.torqueMaxFtLb)} ft-lb
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {String(model.specifications.powerUnit)}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {String(model.specifications.ratchetCassette)}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.weightLb)} lb
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "L")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "H1")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "H2")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "W1")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "W2")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#777777]">
            The listed cassette is the published reference configuration for
            each power unit. Additional ratchet links and reducer inserts are
            available within the compatible power-unit family.
          </p>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Accessories & Compatibility
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Build the complete hydraulic bolting system
            </h2>

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

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[#3f4448]">
              System matching
            </h3>

            <div className="mt-5 space-y-4">
              {family.compatibility.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[#555555]">
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/products/hydraulic-pumps"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] bg-white px-5 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              View Hydraulic Torque Pumps
            </Link>
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
            Hydraulic torque wrench technical resources
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Square Drive Cutsheet",
              "Low-Profile Cassette Cutsheet",
              "Pressure-to-Torque Operational Charts",
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
              Connect with the ToughTorq distribution network for local product
              availability, system selection, and technical support.
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
              Purchase, Rental, Calibration & Service
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Commercial support through JAM Torque
            </h2>

            <p className="mt-4 leading-7 text-[#555555]">
              For purchasing, rental availability, calibration, repair, and
              field support in JAM Torque&apos;s supported market, continue to
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
