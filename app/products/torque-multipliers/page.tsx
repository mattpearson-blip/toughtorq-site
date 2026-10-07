import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TechnicalDownloads } from "@/components/technical-downloads";
import { torqueMultipliers } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Manual Torque Multipliers",
  description:
    "Technical specifications, torque capacity, ratios, drive sizes, fastener ranges, applications, and support information for ToughTorq manual torque multipliers.",
};

function formatNumber(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", {
      maximumFractionDigits: 1,
    });
  }

  return String(value ?? "—");
}

const relatedProducts = [
  {
    title: "Battery Torque Guns",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Pneumatic Torque Guns",
    href: "/products/pneumatic-torque-guns",
  },
  {
    title: "Hydraulic Torque Wrenches",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Digital Manual Torque Wrenches",
    href: "/products/manual-digital-torque-wrenches",
  },
];

function MultiplierTable({
  title,
  description,
  models,
}: {
  title: string;
  description: string;
  models: typeof torqueMultipliers.models;
}) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-[#3f4448]">{title}</h3>
      <p className="mt-3 max-w-3xl leading-7 text-[#555555]">{description}</p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-[#dddddd]">
        <table className="min-w-[960px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#3f4448] text-white">
            <tr>
              <th className="px-4 py-4 font-semibold">Model</th>
              <th className="px-4 py-4 font-semibold">Max Output Torque</th>
              <th className="px-4 py-4 font-semibold">Nut A/F Size</th>
              <th className="px-4 py-4 font-semibold">Bolt Diameter</th>
              <th className="px-4 py-4 font-semibold">Ratio</th>
              <th className="px-4 py-4 font-semibold">Input Square</th>
              <th className="px-4 py-4 font-semibold">Output Square</th>
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
                <td className="border-t border-[#dddddd] px-4 py-4 font-medium text-[#444444]">
                  {formatNumber(model.specifications.maxTorqueFtLb)} ft-lb
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {String(model.specifications.nutAfSize)}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {String(model.specifications.boltDiameter)}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {String(model.specifications.ratio)}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {String(model.specifications.inputSquareIn)} in
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {String(model.specifications.outputSquareIn)} in
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
  );
}

export default function TorqueMultipliersPage() {
  const family = torqueMultipliers;
  const zTypeModels = family.models.filter(
    (model) => model.specifications.series === "Z Type"
  );
  const lTypeModels = family.models.filter(
    (model) => model.specifications.series === "L Type"
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
              Mechanical Torque
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
              Manual Torque
              <br />
              Multipliers
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

          <div className="grid gap-4 sm:grid-cols-2">
            {family.images.map((image, index) => (
              <div
                key={image.src}
                className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-6"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={420}
                  height={360}
                  priority={index === 0}
                  unoptimized
                  className="h-auto max-h-[250px] w-full object-contain"
                />
                <p className="mt-4 text-sm font-semibold text-[#555555]">
                  {index === 0 ? "Z Type" : "L Type"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Mechanical Advantage
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            High torque without external power
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Planetary gearing increases operator input torque to produce
            controlled high-output torque for large fasteners. Selection is
            based on the required output torque, multiplier ratio, square-drive
            sizes, fastener range, reaction point, and working clearance.
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
            Model Specifications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Z Type and L Type technical data
          </h2>

          <MultiplierTable
            title="Z Type Manual Torque Multipliers"
            description="Compact models for confined-space applications with an adjustable reaction foot and high mechanical torque multiplication."
            models={zTypeModels}
          />

          <MultiplierTable
            title="L Type Manual Torque Multipliers"
            description="Offset models for applications where working access and reaction clearance require a different multiplier geometry."
            models={lTypeModels}
          />
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Applications
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Manual high-torque bolting
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
              Selection & Compatibility
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Match the complete mechanical system
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
                  className="rounded-lg border border-[#dddddd] bg-[#fafafa] px-4 py-3 text-sm font-medium text-[#555555]"
                >
                  {accessory}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Related Equipment
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Other torque solutions
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5 transition hover:border-[#ed1c24]"
              >
                <p className="font-semibold text-[#3f4448]">
                  {product.title}
                </p>

                <p className="mt-5 text-sm font-semibold text-[#ed1c24]">
                  View Products →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TechnicalDownloads
        title="Torque multiplier technical resources"
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
              Connect with the ToughTorq distribution network for local
              availability, model selection, and technical support.
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
