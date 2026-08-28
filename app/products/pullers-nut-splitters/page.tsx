import Link from "next/link";

const toolGroups = [
  {
    title: "Hydraulic Puller Sets",
    description:
      "Hydraulic puller systems for controlled removal of bearings, gears, couplings, and other press-fit components.",
    applications: [
      "Bearing removal",
      "Gear removal",
      "Coupling removal",
      "Heavy equipment maintenance",
    ],
  },
  {
    title: "Grip Puller Sets",
    description:
      "Grip-style puller systems for secure engagement and controlled component removal.",
    applications: [
      "Bearing service",
      "Shaft components",
      "Maintenance work",
      "Field repair",
    ],
  },
  {
    title: "Hydraulic Coupler Pullers",
    description:
      "Hydraulic pullers designed for controlled removal of couplings and similar shaft-mounted components.",
    applications: [
      "Coupling removal",
      "Rotating equipment",
      "Plant maintenance",
      "Industrial machinery",
    ],
  },
  {
    title: "Hydraulic Gear Pullers",
    description:
      "Adjustable hydraulic gear pullers for high-force removal of gears, bearings, and mounted components.",
    applications: [
      "Gear removal",
      "Bearing removal",
      "Heavy machinery",
      "Shutdown maintenance",
    ],
  },
  {
    title: "Mechanical Gear Pullers",
    description:
      "Mechanical puller systems for controlled removal without a hydraulic power source.",
    applications: [
      "General maintenance",
      "Gear removal",
      "Bearing removal",
      "Field service",
    ],
  },
  {
    title: "Nut Splitters",
    description:
      "Mechanical and hydraulic nut splitting tools for removing seized, corroded, or damaged nuts without damaging the bolt.",
    applications: [
      "Corroded fasteners",
      "Seized nuts",
      "Flange maintenance",
      "Shutdown and turnaround work",
    ],
  },
];

const nutSplitterTypes = [
  "Mechanical Nut Splitters",
  "Integral Hydraulic Nut Splitters",
  "Separator Hydraulic Nut Splitters",
  "Heavy-Duty Hydraulic Nut Splitters",
];

const selectionFactors = [
  "Component Diameter",
  "Required Pulling Force",
  "Available Clearance",
  "Reach",
  "Spread",
  "Hydraulic or Mechanical Operation",
  "Component Geometry",
  "Application Environment",
];

const relatedProducts = [
  {
    title: "Hydraulic Pumps",
    href: "/products/hydraulic-pumps",
  },
  {
    title: "Hydraulic Hoses",
    href: "/products/hydraulic-hoses",
  },
  {
    title: "Hydraulic Fittings & Couplers",
    href: "/products/hydraulic-fittings-couplers",
  },
  {
    title: "Bearing Heaters",
    href: "/products/bearing-heaters",
  },
];

export default function PullersNutSplittersPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Removal & Maintenance
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Pullers
            <br />
            & Nut Splitters
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Hydraulic and mechanical removal tools for bearings, gears,
            couplings, seized fasteners, and industrial maintenance work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Pullers%20%26%20Nut%20Splitters"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Request a Quote
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

      {/* PRODUCT FAMILIES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Families
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Removal tooling
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#555555]">
                  {group.description}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#777777]">
                    Applications
                  </p>

                  <ul className="mt-3 space-y-2">
                    {group.applications.map((application) => (
                      <li
                        key={application}
                        className="flex gap-3 text-sm text-[#555555]"
                      >
                        <span className="font-bold text-[#ed1c24]">✓</span>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(
                    group.title
                  )}`}
                  className="mt-7 text-sm font-semibold text-[#ed1c24]"
                >
                  Request Information →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUT SPLITTER TYPES */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Nut Removal
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Nut splitter configurations
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            ToughTorq nut splitters provide controlled removal of damaged,
            seized, or corroded nuts while helping preserve the stud or bolt.
          </p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {nutSplitterTypes.map((type) => (
              <div key={type} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTION */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Product Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Match the removal tool to the job
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Puller selection should account for component diameter, required
              pulling force, reach, spread, available clearance, and whether
              hydraulic or mechanical operation is preferred.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {selectionFactors.map((factor) => (
              <div key={factor} className="bg-white p-5">
                <p className="font-semibold text-[#444444]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYDRAULIC SYSTEM */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Hydraulic Pulling Systems
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Complete the hydraulic setup
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Hydraulic Puller",
              "Hydraulic Cylinder",
              "Hydraulic Pump",
              "Hydraulic Hose",
              "Quick Couplers",
              "Pressure Gauge",
              "Hydraulic Fittings",
              "Puller Accessories",
            ].map((item) => (
              <div key={item} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Related Equipment
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Complete the maintenance setup
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="rounded-xl border border-[#dddddd] bg-white p-5 transition hover:border-[#ed1c24]"
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

      {/* TECHNICAL RESOURCES */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Removal Tool Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Hydraulic Puller Cutsheet",
                "Grip Puller Cutsheet",
                "Hydraulic Gear Puller Cutsheet",
                "Mechanical Gear Puller Cutsheet",
                "Nut Splitter Cutsheet",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#dddddd] bg-white p-4"
                >
                  <p className="font-semibold text-[#444444]">{item}</p>

                  <p className="mt-1 text-sm text-[#777777]">
                    Download coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Application Support
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Need help selecting a removal tool?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the component diameter, available clearance, reach,
              spread, estimated force requirement, and application details with
              your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Pullers%20%26%20Nut%20Splitters"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Removal Tool Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}