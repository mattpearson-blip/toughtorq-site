import Link from "next/link";

const hydraulicNutGroups = [
  {
    title: "Hydraulic Tensioning Nuts",
    description:
      "Hydraulic nuts for controlled bolt loading and simultaneous tensioning applications.",
    applications: [
      "Flange bolting",
      "Large structural joints",
      "Critical bolted connections",
      "Maintenance and shutdown work",
    ],
  },
  {
    title: "Upper Locking Hydraulic Nuts",
    description:
      "Hydraulic locking nuts designed for controlled-load applications where preload must be maintained mechanically after pressurization.",
    applications: [
      "Heavy equipment",
      "High-load assemblies",
      "Critical bolted joints",
      "Industrial machinery",
    ],
  },
  {
    title: "Bearing Assembly Hydraulic Nuts",
    description:
      "Ultra-high-pressure hydraulic nuts for controlled bearing installation and removal.",
    applications: [
      "Bearing installation",
      "Bearing removal",
      "Shaft assembly",
      "Rotating equipment maintenance",
    ],
  },
];

const relatedProducts = [
  {
    title: "Ultra-High-Pressure Pumps",
    text: "Hydraulic power units for tensioning and hydraulic nut applications.",
    href: "/products/hydraulic-pumps",
  },
  {
    title: "Bolt Tensioners",
    text: "Hydraulic bolt tensioning systems for controlled preload.",
    href: "/products/bolt-tensioners",
  },
  {
    title: "Hydraulic Hoses",
    text: "High-pressure and ultra-high-pressure hose assemblies.",
    href: "/products/hydraulic-hoses",
  },
  {
    title: "Hydraulic Fittings & Couplers",
    text: "High-pressure connectors, couplers, adaptors, gauges, and fittings.",
    href: "/products/hydraulic-fittings-couplers",
  },
];

export default function HydraulicNutsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Controlled Bolt Loading
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Nuts
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Hydraulic tensioning, locking, and bearing assembly nuts for
            controlled loading and heavy industrial applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              Request a Quote
            </Link>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333]"
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
            Hydraulic nut systems
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {hydraulicNutGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-2xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-4 leading-7 text-[#555555]">
                  {group.description}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#777777]">
                    Typical Applications
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
                    Request Pricing →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THEY FIT */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Hydraulic Preload
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
                Controlled axial loading
              </h2>

              <p className="mt-5 leading-8 text-[#555555]">
                Hydraulic nuts apply axial load directly through hydraulic
                pressure rather than relying only on rotational torque. This
                makes them useful for large fasteners, bearing installation,
                controlled preload, and applications where repeatable loading
                is important.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#3f4448]">
                System Components
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Hydraulic Nut",
                  "Ultra-High-Pressure Pump",
                  "High-Pressure Hose",
                  "Quick Couplers",
                  "Pressure Gauge",
                  "Hydraulic Fittings",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[#dddddd] bg-white px-4 py-3 text-sm font-medium text-[#555555]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
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
            Complete the hydraulic system
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-[#dddddd] bg-white p-5 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-lg font-semibold text-[#3f4448]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#555555]">
                  {item.text}
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
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Hydraulic Nut Cutsheets
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Hydraulic Tensioning Nut Cutsheet",
                "Upper Locking Hydraulic Nut Cutsheet",
                "Bearing Assembly Hydraulic Nut Cutsheet",
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
              Need help sizing a hydraulic nut?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Selection depends on thread size, required preload, operating
              pressure, available space, application type, and the associated
              hydraulic power system.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Hydraulic%20Nuts"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Hydraulic Nut Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}