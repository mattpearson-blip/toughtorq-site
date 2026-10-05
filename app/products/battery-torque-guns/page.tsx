import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { batteryTorqueGuns } from "@/data/catalog";

export const metadata: Metadata = {
  title: "BT Series Digital Battery Torque Guns",
  description:
    "Technical specifications, torque ranges, dimensions, speed, weight, applications, and support information for ToughTorq BT Series digital battery torque guns.",
};

function formatNumber(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US");
  }

  return String(value ?? "—");
}

function getDimension(
  dimensions: typeof batteryTorqueGuns.models[number]["dimensions"],
  key: string
) {
  const item = dimensions.find((dimension) => dimension.key === key);
  if (!item) return "—";
  return `${item.value}${item.unit ? ` ${item.unit}` : ""}`;
}

export default function BatteryTorqueGunsPage() {
  const family = batteryTorqueGuns;

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
              BT Series
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
              Digital Battery
              <br />
              Torque Guns
            </h1>

            <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#444444]">
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

          <div className="relative min-h-[360px] md:min-h-[480px]">
            <Image
              src="/battery-torque-gun.png"
              alt="ToughTorq BT Series digital battery torque gun"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Overview
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Cordless controlled bolting
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {family.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-[#dddddd] bg-white p-5"
              >
                <span className="font-bold text-[#ed1c24]">✓</span>
                <p className="mt-3 text-sm leading-6 text-[#555555]">{feature}</p>
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
            Model Specifications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            BT Series technical data
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Model-level torque, drive, dimensional, speed, and weight data are
            maintained from the ToughTorq manufacturer catalog.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#3f4448] text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Model</th>
                  <th className="px-4 py-4 font-semibold">Torque Range</th>
                  <th className="px-4 py-4 font-semibold">Square Drive</th>
                  <th className="px-4 py-4 font-semibold">D</th>
                  <th className="px-4 py-4 font-semibold">L</th>
                  <th className="px-4 py-4 font-semibold">K</th>
                  <th className="px-4 py-4 font-semibold">Max Speed</th>
                  <th className="px-4 py-4 font-semibold">Weight</th>
                </tr>
              </thead>

              <tbody>
                {family.models.map((model, index) => (
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
                      {getDimension(model.dimensions, "D")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "L")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "K")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.maxSpeedRpm)} rpm
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.weightLb)} lb
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Applications
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Built for field bolting
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {family.applications.map((application) => (
                <div key={application} className="bg-white p-5">
                  <p className="font-medium text-[#444444]">{application}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Accessories & Compatibility
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Complete the bolting package
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

            <div className="mt-6 space-y-3">
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

      <section
        id="downloads"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Downloads
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            BT Series technical resources
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "BT Series Product Cutsheet",
              "BT Series Dimension Drawing",
              "BT Series Operating Guide",
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
              Connect with the ToughTorq distribution network for local product
              availability, model selection, and technical support.
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
