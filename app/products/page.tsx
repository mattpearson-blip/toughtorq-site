import Link from "next/link";

const productGroups = [
  {
    title: "Torquing",
    description:
      "Powered and manual tools for controlled torque application, reaction, and industrial bolting.",
    items: [
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
        title: "Manual & Digital Torque Wrenches",
        href: "/products/manual-digital-torque-wrenches",
      },
      {
        title: "Torque Multipliers",
        href: "/products/torque-multipliers",
      },
      {
        title: "Reaction Washers",
        href: "/products/reaction-washers",
      },
      {
        title: "Sockets & Reaction Arms",
        href: "/products/sockets-reaction-arms",
      },
    ],
  },

  {
    title: "Hydraulic Pumps & Accessories",
    description:
      "Hydraulic power units and system components used across torque, tensioning, lifting, and specialty applications.",
    items: [
      {
        title: "Battery Hydraulic Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Electric Hydraulic Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Pneumatic Hydraulic Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Manual Hydraulic Pumps",
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
        title: "Gauges & Adaptors",
        href: "/products/hydraulic-fittings-couplers",
      },
      {
        title: "Manifolds",
        href: "/products/hydraulic-fittings-couplers",
      },
    ],
  },

  {
    title: "Tensioning",
    description:
      "Hydraulic systems for controlled bolt preload and critical joint tensioning.",
    items: [
      {
        title: "Bolt Tensioners",
        href: "/products/bolt-tensioners",
      },
      {
        title: "Hydraulic Nuts",
        href: "/products/hydraulic-nuts",
      },
      {
        title: "Ultra-High-Pressure Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Ultra-High-Pressure Hoses",
        href: "/products/hydraulic-hoses",
      },
      {
        title: "High-Pressure Fittings & Couplers",
        href: "/products/hydraulic-fittings-couplers",
      },
    ],
  },

  {
    title: "Lifting & Positioning",
    description:
      "Hydraulic cylinders, rams, and power systems for lifting, pushing, pulling, and positioning.",
    items: [
      {
        title: "Hydraulic Cylinders & Rams",
        href: "/products/hydraulic-cylinders-rams",
      },
      {
        title: "Hydraulic Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Hand & Foot Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Electric Hydraulic Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Gas Engine Pumps",
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
    ],
  },

  {
    title: "Flange & Alignment",
    description:
      "Tools for flange spreading, lifting, alignment, and controlled maintenance work.",
    items: [
      {
        title: "Hydraulic Flange Spreaders",
        href: "/products/flange-tools",
      },
      {
        title: "Mechanical Flange Spreaders",
        href: "/products/flange-tools",
      },
      {
        title: "Mini-Gap Flange Spreaders",
        href: "/products/flange-tools",
      },
      {
        title: "Zero-Gap Flange Spreaders",
        href: "/products/flange-tools",
      },
      {
        title: "Flange Alignment Tools",
        href: "/products/flange-tools",
      },
      {
        title: "Hydraulic Lifting Devices",
        href: "/products/flange-tools",
      },
    ],
  },

  {
    title: "Removal & Maintenance",
    description:
      "Pulling, splitting, and heating tools for disassembly and industrial maintenance.",
    items: [
      {
        title: "Hydraulic Pullers",
        href: "/products/pullers-nut-splitters",
      },
      {
        title: "Mechanical Pullers",
        href: "/products/pullers-nut-splitters",
      },
      {
        title: "Hydraulic Gear Pullers",
        href: "/products/pullers-nut-splitters",
      },
      {
        title: "Nut Splitters",
        href: "/products/pullers-nut-splitters",
      },
      {
        title: "Bearing Heaters",
        href: "/products/bearing-heaters",
      },
    ],
  },

  {
    title: "Portable Valve Actuation",
    description:
      "Dedicated portable valve actuator systems, drive platforms, adaptors, reaction devices, and accessories for industrial valve operation.",
    items: [
      {
        title: "Portable Valve Actuator Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "Battery PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "Pneumatic PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "Gas PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "Water Network PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "PVA Heads & Adaptors",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "PVA Reaction Devices",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "PVA Accessories",
        href: "/products/valve-actuator-tools",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            ToughTorq Products
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Find Tools by
            <br />
            Application
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Start with the type of work you are performing, then select the
            specific ToughTorq tool or system you need.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote"
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

      {/* BROAD PRODUCT CATEGORIES */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Product Categories
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Select the type of work
            </h2>

            <p className="mt-4 leading-8 text-[#555555]">
              Products are organized by application so related tools,
              accessories, and hydraulic systems are easier to find.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {productGroups.map((group) => (
              <section
                key={group.title}
                className="flex flex-col overflow-hidden rounded-xl border border-[#dddddd] bg-white transition hover:border-[#ed1c24]"
              >
                <div className="border-b border-[#dddddd] p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                    Product Group
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold text-[#3f4448]">
                    {group.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-[#555555]">
                    {group.description}
                  </p>
                </div>

                <div className="grid flex-1 gap-px bg-[#e0e0e0] sm:grid-cols-2">
                  {group.items.map((item) => (
                    <Link
                      key={`${group.title}-${item.title}`}
                      href={item.href}
                      className="flex min-h-[76px] items-center justify-between gap-4 bg-[#fafafa] px-5 py-4 text-sm font-semibold text-[#444444] transition hover:bg-white hover:text-[#ed1c24]"
                    >
                      <span>{item.title}</span>

                      <span className="text-[#ed1c24]">→</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* PVA CALLOUT */}
      <section className="border-t border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="grid gap-8 rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Portable Valve Actuation
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
                PVA systems are a dedicated product platform
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-[#555555]">
                Configure portable valve actuator systems by power platform,
                actuator head, valve adaptor, reaction device, and accessories.
              </p>
            </div>

            <Link
              href="/products/valve-actuator-tools"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              Explore PVA Systems
            </Link>
          </div>
        </div>
      </section>

      {/* HELP CTA */}
      <section className="border-t border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-[#dddddd] bg-white p-6 md:flex-row md:items-center">
            <div>
              <p className="text-lg font-semibold text-[#3f4448]">
                Not sure which category your application fits?
              </p>

              <p className="mt-1 text-sm leading-6 text-[#666666]">
                Send us the application details and we can help identify the
                appropriate tooling or system.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Request Application Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}