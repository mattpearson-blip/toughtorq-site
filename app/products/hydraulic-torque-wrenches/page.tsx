import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const squareDriveModels = [
  {
    model: "TT1XTA",
    minTorque: "121",
    maxTorque: "1,298",
    drive: '3/4"',
    weight: "4.41",
  },
  {
    model: "TT3XTA",
    minTorque: "319",
    maxTorque: "3,195",
    drive: '1"',
    weight: "8.82",
  },
  {
    model: "TT5XTA",
    minTorque: "547",
    maxTorque: "5,473",
    drive: '1-1/2"',
    weight: "15.43",
  },
  {
    model: "TT8XTA",
    minTorque: "749",
    maxTorque: "7,693",
    drive: '1-1/2"',
    weight: "23.37",
  },
  {
    model: "TT10XTA",
    minTorque: "1,113",
    maxTorque: "11,130",
    drive: '2-1/2"',
    weight: "28.44",
  },
  {
    model: "TT15XTA",
    minTorque: "1,431",
    maxTorque: "14,315",
    drive: '2-1/2"',
    weight: "44.09",
  },
  {
    model: "TT20XTA",
    minTorque: "1,847",
    maxTorque: "19,506",
    drive: '2-1/2"',
    weight: "55.12",
  },
  {
    model: "TT25XTA",
    minTorque: "2,441",
    maxTorque: "25,539",
    drive: '2-1/2"',
    weight: "74.52",
  },
  {
    model: "TT35XTA",
    minTorque: "3,497",
    maxTorque: "34,971",
    drive: '2-1/2"',
    weight: "94.80",
  },
  {
    model: "TT50XTA",
    minTorque: "5,108",
    maxTorque: "51,074",
    drive: '2-1/2"',
    weight: "114.64",
  },
];

const cassetteModels = [
  {
    model: "TT2LCT",
    minTorque: "180",
    maxTorque: "1,869",
    cassette: "2LC-50",
    weight: "4.85",
  },
  {
    model: "TT4LCT",
    minTorque: "361",
    maxTorque: "3,977",
    cassette: "4LC-65",
    weight: "11.02",
  },
  {
    model: "TT8LCT",
    minTorque: "750",
    maxTorque: "7,709",
    cassette: "8LC-90",
    weight: "21.16",
  },
  {
    model: "TT14LCT",
    minTorque: "1,272",
    maxTorque: "11,982",
    cassette: "14LC-115",
    weight: "37.26",
  },
  {
    model: "TT18LCT",
    minTorque: "1,657",
    maxTorque: "16,889",
    cassette: "18LC-135",
    weight: "50.49",
  },
  {
    model: "TT30LCT",
    minTorque: "2,779",
    maxTorque: "29,196",
    cassette: "30LC-155",
    weight: "83.78",
  },
];

const squareDriveFeatures = [
  "10,000 PSI maximum working pressure",
  "High-strength lightweight alloy construction",
  "360° swivel hose coupler",
  "360° adjustable reaction arm",
  "Quick-operating trigger lock",
  "3% accuracy",
  "Square or hexagonal drive options",
];

const cassetteFeatures = [
  "Low-profile pancake design",
  "High-strength lightweight construction",
  "360° swivel hose coupler",
  "Interchangeable working heads",
  "Multiple cassette and reducer configurations",
  "Designed for restricted-access applications",
];

function QuoteModelLink({
  model,
  product,
}: {
  model: string;
  product: string;
}) {
  return (
    <Link
      href={`/request-a-quote?model=${encodeURIComponent(
        model
      )}&product=${encodeURIComponent(product)}`}
      className="font-semibold text-[#ed1c24] underline-offset-4 transition hover:underline"
    >
      {model}
    </Link>
  );
}

export default function HydraulicTorqueWrenchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hydraulic Bolting"
        title="Hydraulic Torque Wrenches"
        text="Square-drive and low-profile cassette hydraulic torque wrench systems for controlled industrial bolting."
      />

      <main className="bg-[#f2f2f2] text-[#292929]">
        {/* SQUARE DRIVE */}
        <section className="border-b border-[#d6d6d6]">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16 lg:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ed1c24]">
                  Square Drive Series
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                  Square Drive Hydraulic Torque Wrenches
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#444444]">
                  Compact hydraulic torque wrenches designed for controlled
                  high-torque bolting across industrial maintenance,
                  construction, power generation, petrochemical, and heavy
                  equipment applications.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {squareDriveFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl border border-[#d6d6d6] bg-white px-4 py-3 text-sm text-[#444444]"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative min-h-[300px] w-full max-w-[540px] md:min-h-[390px]">
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

            <div className="mt-12 overflow-hidden rounded-3xl border border-[#d6d6d6] bg-white">
              <div className="border-b border-[#d6d6d6] px-5 py-5 md:px-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#666666]">
                      Square Drive Models
                    </h3>

                    <p className="mt-2 text-sm text-[#666666]">
                      Select a model to add it to your quote request.
                    </p>
                  </div>

                  <Link
                    href="/request-a-quote"
                    className="text-sm font-semibold text-[#ed1c24]"
                  >
                    View Quote Cart →
                  </Link>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-[#ed1c24] text-white">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Model</th>
                      <th className="px-5 py-4 font-semibold">
                        Min Torque
                      </th>
                      <th className="px-5 py-4 font-semibold">
                        Max Torque
                      </th>
                      <th className="px-5 py-4 font-semibold">
                        Square Drive
                      </th>
                      <th className="px-5 py-4 font-semibold">Weight</th>
                    </tr>
                  </thead>

                  <tbody>
                    {squareDriveModels.map((tool, index) => (
                      <tr
                        key={tool.model}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-[#f4f4f4]"
                        }
                      >
                        <td className="px-5 py-4">
                          <QuoteModelLink
                            model={tool.model}
                            product="Square Drive Hydraulic Torque Wrench"
                          />
                        </td>

                        <td className="px-5 py-4 text-[#444444]">
                          {tool.minTorque} ft-lb
                        </td>

                        <td className="px-5 py-4 text-[#444444]">
                          {tool.maxTorque} ft-lb
                        </td>

                        <td className="px-5 py-4 text-[#444444]">
                          {tool.drive}
                        </td>

                        <td className="px-5 py-4 text-[#444444]">
                          {tool.weight} lb
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CASSETTE */}
        <section className="border-b border-[#d6d6d6] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16 lg:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 flex justify-center lg:order-1">
                <div className="relative min-h-[280px] w-full max-w-[560px] md:min-h-[370px]">
                  <Image
                    src="/ratchet-cassette-hydraulic-torque-wrench.png"
                    alt="ToughTorq ratchet cassette hydraulic torque wrenches"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ed1c24]">
                  Low Profile Series
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                  Ratchet Cassette Hydraulic Torque Wrenches
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#444444]">
                  Low-profile hydraulic torque wrench systems for flange,
                  pipeline, equipment, and other applications where conventional
                  square-drive tools have limited access.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {cassetteFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl border border-[#d6d6d6] bg-[#f7f7f7] px-4 py-3 text-sm text-[#444444]"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-[#d6d6d6] bg-white">
              <div className="border-b border-[#d6d6d6] px-5 py-5 md:px-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#666666]">
                      Ratchet Cassette Models
                    </h3>

                    <p className="mt-2 text-sm text-[#666666]">
                      Select a model to add it to your quote request.
                    </p>
                  </div>

                  <Link
                    href="/request-a-quote"
                    className="text-sm font-semibold text-[#ed1c24]"
                  >
                    View Quote Cart →
                  </Link>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-[#ed1c24] text-white">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Model</th>
                      <th className="px-5 py-4 font-semibold">
                        Min Torque
                      </th>
                      <th className="px-5 py-4 font-semibold">
                        Max Torque
                      </th>
                      <th className="px-5 py-4 font-semibold">Cassette</th>
                      <th className="px-5 py-4 font-semibold">Weight</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cassetteModels.map((tool, index) => (
                      <tr
                        key={tool.model}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-[#f4f4f4]"
                        }
                      >
                        <td className="px-5 py-4">
                          <QuoteModelLink
                            model={tool.model}
                            product="Ratchet Cassette Hydraulic Torque Wrench"
                          />
                        </td>

                        <td className="px-5 py-4 text-[#444444]">
                          {tool.minTorque} ft-lb
                        </td>

                        <td className="px-5 py-4 text-[#444444]">
                          {tool.maxTorque} ft-lb
                        </td>

                        <td className="px-5 py-4 text-[#444444]">
                          {tool.cassette}
                        </td>

                        <td className="px-5 py-4 text-[#444444]">
                          {tool.weight} lb
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ACCESSORIES */}
        <section className="border-b border-[#d6d6d6] bg-[#f2f2f2]">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ed1c24]">
              Hydraulic Bolting Accessories
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#666666] md:text-4xl">
              Complete the system
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                href="/products/pumps-tensioners-rams"
                className="rounded-3xl border border-[#d6d6d6] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-xl font-semibold text-[#666666]">
                  Hydraulic Pumps
                </h3>

                <p className="mt-3 leading-7 text-[#444444]">
                  Battery, electric, pneumatic, and hydraulic power systems.
                </p>

                <p className="mt-5 text-sm font-semibold text-[#ed1c24]">
                  View Hydraulic Equipment →
                </p>
              </Link>

              <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 transition hover:border-[#ed1c24]">
                <h3 className="text-xl font-semibold text-[#666666]">
                  Sockets & Drives
                </h3>

                <p className="mt-3 leading-7 text-[#444444]">
                  Heavy-duty sockets, square drives, hexagonal drives, and
                  cassette accessories.
                </p>
              </div>

              <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 transition hover:border-[#ed1c24]">
                <h3 className="text-xl font-semibold text-[#666666]">
                  Reaction Arms
                </h3>

                <p className="mt-3 leading-7 text-[#444444]">
                  Standard, angled, double-ended, sliding, extension, and custom
                  reaction configurations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOADS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ed1c24]">
                  Technical Resources
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[#666666] md:text-4xl">
                  Cutsheets & operational charts
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-[#444444]">
                  Technical resources for the hydraulic torque wrench line will
                  include product specifications, dimensions, accessories, and
                  model-specific operating information.
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-[#d6d6d6] bg-[#f7f7f7] p-5">
                  <p className="font-semibold text-[#555555]">
                    Square Drive Hydraulic Wrench Cutsheet
                  </p>

                  <p className="mt-2 text-sm text-[#777777]">
                    Download link will be added when the final ToughTorq
                    cutsheet is loaded.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d6d6d6] bg-[#f7f7f7] p-5">
                  <p className="font-semibold text-[#555555]">
                    Ratchet Cassette Hydraulic Wrench Cutsheet
                  </p>

                  <p className="mt-2 text-sm text-[#777777]">
                    Download link will be added when the final ToughTorq
                    cutsheet is loaded.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d6d6d6] bg-[#f7f7f7] p-5">
                  <p className="font-semibold text-[#555555]">
                    Pressure-to-Torque Operational Charts
                  </p>

                  <p className="mt-2 text-sm text-[#777777]">
                    Model-specific pressure and torque charts will be added from
                    validated operating data.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/request-a-quote" className="tt-button-primary">
                Request a Quote
              </Link>

              <Link href="/products" className="tt-button-secondary">
                Back to Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}