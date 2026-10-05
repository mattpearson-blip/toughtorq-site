import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TechnicalDownloads } from "@/components/technical-downloads";
import { bearingHeaters } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Bearing Heaters",
  description:
    "Technical specifications, electrical requirements, workpiece capacity, temperature range, dimensions, applications, and support information for ToughTorq bearing heaters.",
};

function formatNumber(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", { maximumFractionDigits: 2 });
  }

  return String(value ?? "—");
}

export default function BearingHeatersPage() {
  const family = bearingHeaters;
  const plateModels = family.models.filter(
    (model) => model.specifications.series === "Plate Bearing Heater"
  );
  const inductionModels = family.models.filter(
    (model) => model.specifications.series === "Bearing Induction Heater"
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Removal & Maintenance
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Bearing Heaters
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
            Heating Technologies
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Plate and induction heating
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {(family.componentGroups ?? []).map((group) => (
              <article
                key={group.id}
                className="rounded-xl border border-[#dddddd] bg-white p-6"
              >
                {group.images[0] && (
                  <div className="mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-[#e5e5e5] bg-[#fafafa] p-5">
                    <Image
                      src={group.images[0].src}
                      alt={group.images[0].alt}
                      width={480}
                      height={360}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}

                <h3 className="text-2xl font-semibold text-[#3f4448]">
                  {group.displayName}
                </h3>

                {group.description && (
                  <p className="mt-4 leading-7 text-[#555555]">
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
            Plate Bearing Heaters
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Conductive plate-heater specifications
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Plate heaters are designed for controlled preheating of smaller
            bearings and suitable components. The integrated heating surface can
            heat multiple workpieces within the available plate area.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#3f4448] text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Model</th>
                  <th className="px-4 py-4 font-semibold">Voltage</th>
                  <th className="px-4 py-4 font-semibold">Power</th>
                  <th className="px-4 py-4 font-semibold">Temperature Range</th>
                  <th className="px-4 py-4 font-semibold">Control Accuracy</th>
                  <th className="px-4 py-4 font-semibold">Plate Size</th>
                  <th className="px-4 py-4 font-semibold">Overall Size</th>
                  <th className="px-4 py-4 font-semibold">Weight</th>
                </tr>
              </thead>

              <tbody>
                {plateModels.map((model, index) => (
                  <tr
                    key={model.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
                  >
                    <td className="border-t border-[#dddddd] px-4 py-4 font-bold text-[#ed1c24]">
                      {model.model}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {String(model.specifications.ratedVoltageV)} V
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.heatingPowerKw)} kW
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.heatingTemperatureMinC)}–
                      {formatNumber(model.specifications.heatingTemperatureMaxC)} °C
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {String(model.specifications.controlAccuracyC)} °C
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {String(model.specifications.plateSizeMm)} mm
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {String(model.specifications.overallSizeMm)} mm
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
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Bearing Induction Heaters
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            KHG Series induction-heater specifications
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-[#555555]">
            KHG induction heaters use electromagnetic induction to heat the
            workpiece directly. The series supports constant-temperature and
            timed heating, automatic heat preservation, manual/automatic
            demagnetization, and overheat protection.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
            <table className="min-w-[1180px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#3f4448] text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Model</th>
                  <th className="px-4 py-4 font-semibold">Electrical</th>
                  <th className="px-4 py-4 font-semibold">Power</th>
                  <th className="px-4 py-4 font-semibold">Max Bearing Weight</th>
                  <th className="px-4 py-4 font-semibold">Max Workpiece OD</th>
                  <th className="px-4 py-4 font-semibold">Min ID — Hanging</th>
                  <th className="px-4 py-4 font-semibold">Min ID — Level</th>
                  <th className="px-4 py-4 font-semibold">Max Temp.</th>
                  <th className="px-4 py-4 font-semibold">Unit Weight</th>
                </tr>
              </thead>

              <tbody>
                {inductionModels.map((model, index) => (
                  <tr
                    key={model.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f1f1f1]"}
                  >
                    <td className="border-t border-[#dddddd] px-4 py-4 font-bold text-[#ed1c24]">
                      {model.model}
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {String(model.specifications.ratedVoltageV)} V /{" "}
                      {formatNumber(model.specifications.ratedCurrentA)} A
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.powerKw)} kW
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 font-medium text-[#444444]">
                      {formatNumber(model.specifications.maxBearingWeightKg)} kg
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.maxWorkpieceOdMm)} mm
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.minWorkpieceIdHangMm)} mm
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.minWorkpieceIdLevelMm)} mm
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.maxTemperatureC)} °C
                    </td>
                    <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                      {formatNumber(model.specifications.weightLb)} lb
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-7 text-[#777777]">
            Workpiece limits vary by hanging or level orientation. Use the
            published ID, OD, width, weight, and electrical limits for the
            selected model.
          </p>
        </div>
      </section>

      <section
        id="selection"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Product Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Match the heater to the workpiece
            </h2>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Workpiece inner diameter",
                "Workpiece outer diameter",
                "Workpiece width",
                "Workpiece weight",
                "Required temperature",
                "Heating method",
                "Available voltage",
                "Available current / phase",
              ].map((item) => (
                <div key={item} className="bg-[#fafafa] p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Applications
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {family.applications.map((application) => (
                <div
                  key={application}
                  className="rounded-lg border border-[#dddddd] bg-white px-4 py-3 text-sm font-medium text-[#555555]"
                >
                  {application}
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

      <TechnicalDownloads
        title="Bearing-heater technical resources"
        downloads={family.downloads}
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
              Connect with the ToughTorq distribution network for heater
              selection, electrical requirements, and technical support.
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
