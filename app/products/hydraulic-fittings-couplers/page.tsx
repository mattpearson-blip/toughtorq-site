import Link from "next/link";

const accessoryGroups = [
  {
    title: "Hydraulic Quick Couplers",
    description:
      "High-pressure quick-connect couplers for hydraulic torque, lifting, tensioning, and maintenance systems.",
    applications: [
      "Hydraulic torque wrenches",
      "Hydraulic cylinders",
      "Hydraulic pumps",
      "Pullers and spreaders",
    ],
  },
  {
    title: "Oil Manifolds",
    description:
      "Hydraulic manifolds for distributing pump output to multiple tools or hydraulic circuits.",
    applications: [
      "Multi-tool operation",
      "Synchronized lifting",
      "Multiple bolt tensioners",
      "Hydraulic system distribution",
    ],
  },
  {
    title: "Pressure Gauges",
    description:
      "Hydraulic pressure gauges for monitoring system pressure during torque, lifting, and tensioning operations.",
    applications: [
      "Torque pump monitoring",
      "Cylinder operation",
      "Tensioning systems",
      "Hydraulic system setup",
    ],
  },
  {
    title: "Gauge Adaptors",
    description:
      "Gauge adaptors and connection hardware for integrating pressure gauges into hydraulic systems.",
    applications: [
      "Pressure gauge installation",
      "Pump connections",
      "System monitoring",
      "Hydraulic diagnostics",
    ],
  },
  {
    title: "Hydraulic Fittings",
    description:
      "High-pressure hydraulic fittings and adaptors for connecting pumps, hoses, tools, gauges, and manifolds.",
    applications: [
      "Hydraulic tool connections",
      "Pump-to-hose connections",
      "Manifold assemblies",
      "System configuration",
    ],
  },
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
    title: "Hydraulic Torque Wrenches",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Hydraulic Nuts",
    href: "/products/hydraulic-nuts",
  },
];

export default function HydraulicFittingsCouplersPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Pumps & Accessories
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Fittings
            <br />
            & Couplers
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Couplers, manifolds, gauges, adaptors, and fittings for ToughTorq
            hydraulic systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Hydraulic%20Fittings%20%26%20Couplers"
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
            Hydraulic connection components
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accessoryGroups.map((group) => (
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

      {/* SYSTEM OVERVIEW */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Hydraulic System Connections
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Build the complete hydraulic circuit
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Hydraulic fittings and accessories connect the pump, hose, tool,
              gauge, and manifold into one working system. Components should be
              matched to system pressure, connection type, and application.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {[
              "Pump",
              "Pressure Gauge",
              "Gauge Adaptor",
              "Hydraulic Manifold",
              "Hydraulic Hose",
              "Quick Coupler",
              "Hydraulic Fitting",
              "Hydraulic Tool",
            ].map((item) => (
              <div key={item} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESSURE SYSTEMS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            System Compatibility
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Match components to the working pressure
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Standard High Pressure
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                10,000 PSI Systems
              </h3>

              <p className="mt-4 leading-7 text-[#555555]">
                Common for hydraulic torque wrenches, cylinders, pullers,
                spreaders, and general hydraulic tooling.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Ultra High Pressure
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Tensioning Systems
              </h3>

              <p className="mt-4 leading-7 text-[#555555]">
                Ultra-high-pressure tensioning and hydraulic nut systems require
                components specifically rated for the system pressure.
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
            Complete the system
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
              Hydraulic Accessory Cutsheets
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Quick Coupler Cutsheet",
                "Hydraulic Manifold Cutsheet",
                "Pressure Gauge Cutsheet",
                "Gauge Adaptor Cutsheet",
                "Hydraulic Fitting Cutsheet",
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
              Need a Connection?
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Tell us what you are connecting
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the pump, hose, tool, operating pressure, and connection
              requirements in your quote request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Hydraulic%20Fittings%20%26%20Couplers"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Hydraulic Accessories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}