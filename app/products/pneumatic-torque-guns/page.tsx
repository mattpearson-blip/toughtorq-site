import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TechnicalDownloads } from "@/components/technical-downloads";
import { pneumaticTorqueGuns } from "@/data/catalog";

export const metadata: Metadata = {
  title: "PT Series Pneumatic Torque Guns",
  description:
    "Technical data, model specifications, dimensions, operating requirements, applications, and support information for ToughTorq PT Series pneumatic torque guns.",
};

function formatNumber(value: unknown) {
  const numericValue = Number(value);

  if (Number.isNaN(numericValue)) {
    return String(value ?? "—");
  }

  return numericValue.toLocaleString("en-US");
}

function getDimension(
  dimensions: typeof pneumaticTorqueGuns.models[number]["dimensions"],
  key: string
) {
  const dimension = dimensions.find((item) => item.key === key);

  if (!dimension) {
    return "—";
  }

  return `${dimension.value}${dimension.unit ? ` ${dimension.unit}` : ""}`;
}

export default function PneumaticTorqueGunsPage() {
  const family = pneumaticTorqueGuns;

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
              PT Series
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
              Pneumatic
              <br />
              Torque Guns
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

          {family.images[0] && (
            <div className="relative flex min-h-[340px] items-center justify-center rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-8 md:min-h-[430px]">
              <Image
                src={family.images[0].src}
                alt={family.images[0].alt}
                width={760}
                height={460}
                priority
                unoptimized
                className="h-auto max-h-[390px] w-full object-contain"
              />
            </div>
          )}
        </div>
      </section>

      {/* TECHNICAL OVERVIEW */}
      <section
        id="technical-data"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Technical Overview
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            PT Series operating data
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] md:grid-cols-3">
            {family.operatingRequirements.map((requirement) => (
              <div key={requirement.key} className="bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                  {requirement.label}
                </p>

                <p className="mt-2 text-2xl font-semibold text-[#3f4448]">
                  {requirement.value}
                  {requirement.unit ? ` ${requirement.unit}` : ""}
                </p>

                {requirement.note && (
                  <p className="mt-2 text-sm leading-6 text-[#666666]">
                    {requirement.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#dddddd] bg-white p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                  Standard Accuracy
                </p>
                <p className="mt-2 text-lg font-semibold text-[#3f4448]">
                  ±5%
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                  Repeatability
                </p>
                <p className="mt-2 text-lg font-semibold text-[#3f4448]">
                  ±1%
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                  Optional Digital Regulation
                </p>
                <p className="mt-2 text-lg font-semibold text-[#3f4448]">
                  ±3% torque accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODEL TABLE */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Model Selection
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            PT Series specifications
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Model-level performance and dimensional data are maintained from
            the ToughTorq manufacturer catalog. Dimension letters L, E, and D
            follow the catalog drawing convention.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#3f4448] text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Model</th>
                  <th className="px-4 py-4 font-semibold">Torque Range</th>
                  <th className="px-4 py-4 font-semibold">Square Drive</th>
                  <th className="px-4 py-4 font-semibold">Max Speed</th>
                  <th className="px-4 py-4 font-semibold">Weight</th>
                  <th className="px-4 py-4 font-semibold">L</th>
                  <th className="px-4 py-4 font-semibold">E</th>
                  <th className="px-4 py-4 font-semibold">D</th>
                </tr>
              </thead>

              <tbody>
                {family.models.map((model, index) => (
                  <tr
                    key={model.id}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
                    }
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
                      {formatNumber(model.specifications.maxSpeedRpm)} rpm
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.weightLb)} lb
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "L")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "E")}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {getDimension(model.dimensions, "D")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FEATURES + APPLICATIONS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Designed for continuous industrial bolting
            </h2>

            <div className="mt-7 space-y-3">
              {family.features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 rounded-lg border border-[#dddddd] bg-white p-4"
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
              Typical applications
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {family.applications.map((application) => (
                <div key={application} className="bg-white p-5">
                  <p className="font-medium text-[#444444]">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <TechnicalDownloads
        title="PT Series technical resources"
        downloads={family.downloads}
        background="white"
      />

      {/* DISTRIBUTION + JAM HANDOFF */}
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
              For purchasing, rental availability, calibration, and service in
              JAM Torque&apos;s supported market, continue to JAMTorque.com.
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
