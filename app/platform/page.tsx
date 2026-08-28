import Link from "next/link";

const resourceGroups = [
  {
    title: "Product Cutsheets",
    description:
      "Technical product summaries, model ranges, dimensions, capacities, and selection data.",
    items: [
      "Battery Torque Guns",
      "Pneumatic Torque Guns",
      "Hydraulic Torque Wrenches",
      "Torque Multipliers",
      "Hydraulic Pumps",
      "Bolt Tensioners",
      "Hydraulic Nuts",
      "Hydraulic Cylinders & Rams",
    ],
  },
  {
    title: "Operational Charts",
    description:
      "Pressure-to-torque and operating reference charts for applicable ToughTorq tooling.",
    items: [
      "Square Drive Hydraulic Torque Wrenches",
      "Low Profile Hydraulic Torque Wrenches",
      "Hydraulic System Pressure References",
      "Bolt Tensioning References",
    ],
  },
  {
    title: "Manuals & Guides",
    description:
      "Operating instructions, setup guides, application references, and maintenance information.",
    items: [
      "Torque Tool Operating Guides",
      "Hydraulic Pump Guides",
      "Bolt Tensioner Guides",
      "Hydraulic Cylinder Guides",
      "Reaction & Socket Selection",
      "Valve Tool Guides",
    ],
  },
  {
    title: "Hydraulic References",
    description:
      "Technical information for hydraulic pumps, hoses, fittings, couplers, gauges, and complete systems.",
    items: [
      "Hydraulic Hose Selection",
      "Coupler & Fitting Reference",
      "Pressure Gauge Reference",
      "Pump Selection Guide",
      "Single vs. Double Acting Systems",
      "Ultra-High-Pressure Systems",
    ],
  },
  {
    title: "Bolting References",
    description:
      "Application information for controlled torque, tensioning, reaction, and industrial bolting.",
    items: [
      "Torque Tool Selection",
      "Reaction Arm Selection",
      "Reaction Washer Reference",
      "Torque Multiplier Selection",
      "Bolt Tensioning Selection",
      "Socket Selection",
    ],
  },
  {
    title: "Calculators & Technical Tools",
    description:
      "Reference tools for torque, load, pressure, conversion, and application planning.",
    items: [
      "Torque Conversion",
      "Pressure Conversion",
      "Bolt Load Reference",
      "Torque / Pressure Reference",
      "Hydraulic Force Reference",
      "Application Planning",
    ],
  },
];

const quickLinks = [
  {
    title: "Browse Products",
    href: "/products",
  },
  {
    title: "Request a Quote",
    href: "/request-a-quote",
  },
  {
    title: "Find a Distributor",
    href: "/find-a-distributor",
  },
  {
    title: "Contact ToughTorq",
    href: "/contact",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            ToughTorq Resources
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Technical Resources
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Product cutsheets, operating references, technical guides, charts,
            manuals, and application resources for ToughTorq equipment.
          </p>
        </div>
      </section>

      {/* RESOURCE DIRECTORY */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Resource Library
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Find technical information
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {resourceGroups.map((group) => (
              <section
                key={group.title}
                className="overflow-hidden rounded-xl border border-[#dddddd] bg-white"
              >
                <div className="border-b border-[#dddddd] p-6">
                  <h3 className="text-2xl font-semibold text-[#3f4448]">
                    {group.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#555555]">
                    {group.description}
                  </p>
                </div>

                <div className="grid gap-px bg-[#e5e5e5] sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex min-h-[72px] items-center justify-between gap-4 bg-[#fafafa] px-5 py-4"
                    >
                      <span className="text-sm font-medium text-[#555555]">
                        {item}
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#888888]">
                        Coming Soon
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED RESOURCES */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Technical Support
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Product-specific resources
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Link
              href="/products/hydraulic-torque-wrenches"
              className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 transition hover:border-[#ed1c24]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Hydraulic Torque
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Operational Charts
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#555555]">
                Pressure-to-torque references and technical information for
                hydraulic torque wrench systems.
              </p>

              <p className="mt-6 text-sm font-semibold text-[#ed1c24]">
                View Hydraulic Torque Tools →
              </p>
            </Link>

            <Link
              href="/products/bolt-tensioners"
              className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 transition hover:border-[#ed1c24]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Tensioning
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Bolt Tensioning References
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#555555]">
                Product selection and system information for hydraulic bolt
                tensioning applications.
              </p>

              <p className="mt-6 text-sm font-semibold text-[#ed1c24]">
                View Bolt Tensioners →
              </p>
            </Link>

            <Link
              href="/products/hydraulic-cylinders-rams"
              className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 transition hover:border-[#ed1c24]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Lifting
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Cylinder Selection
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#555555]">
                Capacity, stroke, clearance, acting type, and hydraulic system
                references for cylinders and rams.
              </p>

              <p className="mt-6 text-sm font-semibold text-[#ed1c24]">
                View Cylinders & Rams →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Quick Links
          </p>

          <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex min-h-[78px] items-center justify-between gap-4 bg-white px-5 py-4 font-semibold text-[#444444] transition hover:text-[#ed1c24]"
              >
                <span>{item.title}</span>
                <span className="text-[#ed1c24]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Technical Support
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Need technical information for a specific application?
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#666666]">
                Send us the tool, model, and application details and we can help
                identify the appropriate technical information.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              Request Technical Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}