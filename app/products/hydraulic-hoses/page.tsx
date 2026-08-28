import Link from "next/link";

const hoseGroups = [
  {
    title: "10,000 PSI Hydraulic Hoses",
    description:
      "High-pressure hydraulic hose assemblies for torque wrenches, pumps, cylinders, pullers, and general industrial hydraulic tooling.",
    applications: [
      "Hydraulic torque wrenches",
      "Hydraulic cylinders",
      "Hydraulic pullers",
      "Hydraulic spreaders",
      "General 10,000 PSI tooling",
    ],
  },
  {
    title: "Twin-Line Torque Wrench Hoses",
    description:
      "Dual-line hydraulic hose assemblies for advancing and retracting double-acting hydraulic torque wrench systems.",
    applications: [
      "Square-drive hydraulic torque wrenches",
      "Low-profile cassette torque wrenches",
      "10,000 PSI torque pumps",
      "Field bolting systems",
    ],
  },
  {
    title: "Ultra-High-Pressure Hoses",
    description:
      "Specialized hose assemblies for bolt tensioning, hydraulic nuts, and other ultra-high-pressure hydraulic applications.",
    applications: [
      "Bolt tensioners",
      "Hydraulic tensioning nuts",
      "Bearing assembly hydraulic nuts",
      "Ultra-high-pressure pumps",
    ],
  },
];

const selectionFactors = [
  "Maximum operating pressure",
  "Required hose length",
  "Single-line or twin-line configuration",
  "Coupler type",
  "Tool connection",
  "Pump connection",
  "Application environment",
  "Required safety factor",
];

const relatedProducts = [
  {
    title: "Hydraulic Pumps",
    href: "/products/hydraulic-pumps",
  },
  {
    title: "Hydraulic Fittings & Couplers",
    href: "/products/hydraulic-fittings-couplers",
  },
  {
    title: "Hydraulic Torque Wrenches",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Hydraulic Nuts",
    href: "/products/hydraulic-nuts",
  },
];

export default function HydraulicHosesPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Accessories
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Hoses
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            High-pressure and ultra-high-pressure hose assemblies for ToughTorq
            hydraulic bolting, lifting, tensioning, and maintenance systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Hydraulic%20Hoses"
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

      {/* HOSE FAMILIES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Hose Families
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Select by pressure and application
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {hoseGroups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-2xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#555555]">
                  {group.description}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#777777]">
                    Common Applications
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

                <div className="mt-7">
                  <Link
                    href={`/request-a-quote?product=${encodeURIComponent(
                      group.title
                    )}`}
                    className="text-sm font-semibold text-[#ed1c24]"
                  >
                    Add to Quote Request →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSE SELECTION */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Hose Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Match the hose to the system
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Hydraulic hose selection should match the operating pressure,
              pump, tool, connection type, and application. Ultra-high-pressure
              tensioning systems require different hose assemblies and fittings
              than standard 10,000 PSI hydraulic tooling.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {selectionFactors.map((factor) => (
              <div key={factor} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM TYPES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Hydraulic Systems
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Common hose configurations
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Single Line
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Single-Acting Systems
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Commonly used with single-acting cylinders, pullers, spreaders,
                and other spring- or load-return hydraulic tooling.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Twin Line
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Double-Acting Systems
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Advance and retract lines support hydraulic torque wrenches and
                double-acting cylinders.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Ultra High Pressure
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Tensioning Systems
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Specialized hose assemblies connect ultra-high-pressure pumps
                to bolt tensioners and hydraulic nuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Related Equipment
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Complete the hydraulic system
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

      {/* DOWNLOADS */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Hydraulic Hose Cutsheets
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "10,000 PSI Hydraulic Hose Cutsheet",
                "Twin-Line Torque Wrench Hose Cutsheet",
                "Ultra-High-Pressure Hose Cutsheet",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#dddddd] bg-[#fafafa] p-4"
                >
                  <p className="font-semibold text-[#444444]">{item}</p>
                  <p className="mt-1 text-sm text-[#777777]">
                    Download coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Need a Hose Assembly?
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Tell us what it connects to
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the tool, pump, desired hose length, operating pressure,
              and connection requirements in your quote request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Hydraulic%20Hoses"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request a Hose Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}