import type { Metadata } from "next";
import Link from "next/link";

import { socketsReactionArms } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Sockets & Reaction Arms",
  description:
    "Technical socket dimensions, wrench compatibility, fastener references, reaction guidance, and support information for ToughTorq bolting systems.",
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
  dimensions: typeof socketsReactionArms.models[number]["dimensions"],
  key: string
) {
  const item = dimensions.find((dimension) => dimension.key === key);
  if (!item) return "—";
  return `${item.value}${item.unit ? ` ${item.unit}` : ""}`;
}

function SocketTable({
  title,
  description,
  models,
}: {
  title: string;
  description: string;
  models: typeof socketsReactionArms.models;
}) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-[#3f4448]">{title}</h3>
      <p className="mt-3 max-w-3xl leading-7 text-[#555555]">{description}</p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-[#dddddd]">
        <table className="min-w-[980px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#3f4448] text-white">
            <tr>
              <th className="px-4 py-4 font-semibold">Model</th>
              <th className="px-4 py-4 font-semibold">Compatible Wrench</th>
              <th className="px-4 py-4 font-semibold">Square Drive</th>
              <th className="px-4 py-4 font-semibold">Bolt Diameter</th>
              <th className="px-4 py-4 font-semibold">Nut A/F</th>
              <th className="px-4 py-4 font-semibold">L1</th>
              <th className="px-4 py-4 font-semibold">L2</th>
              <th className="px-4 py-4 font-semibold">D1</th>
              <th className="px-4 py-4 font-semibold">D2</th>
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
                  {String(model.specifications.compatibleWrenchModel)}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {String(model.specifications.squareDriveIn)} in
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {String(model.specifications.boltDiameter)}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {formatNumber(model.specifications.nutAfMm)} mm
                  <span className="block text-xs text-[#888888]">
                    {formatNumber(model.specifications.nutAfIn)} in
                  </span>
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {getDimension(model.dimensions, "L1")}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {getDimension(model.dimensions, "L2")}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {getDimension(model.dimensions, "D1")}
                </td>
                <td className="border-t border-[#dddddd] px-4 py-4 text-[#555555]">
                  {getDimension(model.dimensions, "D2")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SocketsReactionArmsPage() {
  const family = socketsReactionArms;

  const threeQuarterModels = family.models.filter(
    (model) => model.specifications.squareDriveIn === "3/4"
  );
  const oneInchModels = family.models.filter(
    (model) => model.specifications.squareDriveIn === "1"
  );
  const oneHalfModels = family.models.filter(
    (model) => model.specifications.squareDriveIn === "1-1/2"
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Bolting Accessories
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Sockets
            <br />
            & Reaction Arms
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#socket-data"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Socket Data
            </Link>

            <Link
              href="#reaction"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Reaction Guidance
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
            Manufacturer System
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Socket and drive configurations
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            The ToughTorq socket system includes standard sockets, hexagon
            sockets, square drives, hexagonal drives, and castle sockets. The
            published model table below covers the standard square-drive socket
            range for ToughTorq hydraulic torque wrenches.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Socket",
              "Hexagon Socket",
              "Square Drive",
              "Hexagonal Drive",
              "Castle Socket",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#dddddd] bg-white p-5 text-center"
              >
                <p className="font-semibold text-[#3f4448]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="socket-data"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Technical Data
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Torque wrench socket specifications
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Socket selection is tied directly to square-drive size, compatible
            wrench model, fastener diameter, nut A/F size, and available
            clearance. Dimensions are converted to inches from the manufacturer
            source table.
          </p>

          <SocketTable
            title='3/4" Drive Socket Range'
            description="Published socket range for the TT1XTA square-drive hydraulic torque wrench."
            models={threeQuarterModels}
          />

          <SocketTable
            title='1" Drive Socket Range'
            description="Published socket range for the TT3XTA square-drive hydraulic torque wrench."
            models={oneInchModels}
          />

          <SocketTable
            title='1-1/2" Drive Socket Range'
            description="Published socket range shared across the TT5XTA, TT8XTA, and TT10XTA square-drive hydraulic torque wrench families."
            models={oneHalfModels}
          />
        </div>
      </section>

      <section
        id="reaction"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Reaction Control
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Reaction equipment is application-specific
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              ToughTorq square-drive hydraulic torque wrenches use a reaction
              arm that can be positioned through 360° on the tool support.
              Reaction equipment can also be customized where the available
              structure, tool position, or fastener geometry cannot be handled
              with the standard configuration.
            </p>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Reaction Selection
            </p>

            <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Torque tool model",
                "Required torque",
                "Fastener position",
                "Available reaction point",
                "Working clearance",
                "Surrounding equipment",
                "Reaction distance",
                "Application geometry",
              ].map((item) => (
                <div key={item} className="bg-[#fafafa] p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-[#555555]">
              Final reaction geometry should be selected around the actual
              application rather than from a generic arm category alone.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Compatibility
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Match the complete bolting interface
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {family.compatibility.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
              >
                <span className="font-bold text-[#ed1c24]">✓</span>
                <p className="mt-3 text-sm leading-7 text-[#555555]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/products/hydraulic-torque-wrenches"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] bg-white px-5 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              View Hydraulic Torque Wrenches
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
            Socket and reaction technical resources
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Torque Wrench Socket Guide",
              "Socket Dimension Reference",
              "Reaction Arm Application Guide",
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
              Connect with the ToughTorq distribution network for socket
              matching, reaction selection, and technical support.
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
              For purchasing, rental availability, custom reaction support,
              service, and application assistance in JAM Torque&apos;s
              supported market, continue to JAMTorque.com.
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
