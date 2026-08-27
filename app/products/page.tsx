import Link from "next/link";

const productCategories = [
  {
    eyebrow: "Hydraulic Bolting",
    title: "Hydraulic Torque Wrenches",
    text: "Square-drive and low-profile cassette hydraulic torque wrench systems.",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    eyebrow: "Cordless Torque",
    title: "Battery Torque Guns",
    text: "Digital cordless torque guns with controlled torque and angle settings.",
    href: "/products/battery-torque-guns",
  },
  {
    eyebrow: "Air Torque",
    title: "Pneumatic Torque Wrenches",
    text: "Air-powered torque tools for continuous-duty industrial bolting.",
    href: "/products/pneumatic-torque-wrenches",
  },
  {
    eyebrow: "Hydraulic Power",
    title: "Hydraulic Pumps",
    text: "Battery, electric, pneumatic, manual, and ultra-high-pressure hydraulic pumps.",
    href: "/products/hydraulic-pumps",
  },
  {
    eyebrow: "Bolt Loading",
    title: "Bolt Tensioners",
    text: "Hydraulic bolt tensioning systems for controlled preload and critical joints.",
    href: "/products/bolt-tensioners",
  },
  {
    eyebrow: "Controlled Load",
    title: "Hydraulic Nuts",
    text: "Hydraulic tensioning, locking, and bearing assembly nuts for controlled-load applications.",
    href: "/products/hydraulic-nuts",
  },
  {
    eyebrow: "Hydraulic Force",
    title: "Hydraulic Cylinders & Rams",
    text: "Single-acting, double-acting, low-height, hollow, lock-nut, aluminum, and high-tonnage cylinders.",
    href: "/products/hydraulic-cylinders-rams",
  },
  {
    eyebrow: "Hydraulic Connections",
    title: "Hydraulic Hoses",
    text: "High-pressure and ultra-high-pressure hydraulic hose assemblies for tooling systems.",
    href: "/products/hydraulic-hoses",
  },
  {
    eyebrow: "Hydraulic Accessories",
    title: "Hydraulic Fittings & Couplers",
    text: "Quick couplers, manifolds, gauges, adaptors, fittings, and hydraulic system accessories.",
    href: "/products/hydraulic-fittings-couplers",
  },
  {
    eyebrow: "Reaction Control",
    title: "Reaction Washers",
    text: "Reaction washer systems designed to provide controlled tool reaction without conventional reaction arms.",
    href: "/products/reaction-washers",
  },
  {
    eyebrow: "Mechanical Torque",
    title: "Torque Multipliers",
    text: "Manual planetary torque multipliers for high-torque applications and restricted-access work.",
    href: "/products/torque-multipliers",
  },
  {
    eyebrow: "Hand Torque",
    title: "Manual & Digital Torque Wrenches",
    text: "Digital and manual torque tools for controlled fastening, inspection, and verification.",
    href: "/products/manual-digital-torque-wrenches",
  },
  {
    eyebrow: "Valve Tools",
    title: "Portable Valve Actuator Systems",
    text: "Portable valve operation systems for industrial, utility, and field applications.",
    href: "/products/valve-actuator-tools",
  },
  {
    eyebrow: "Flange Maintenance",
    title: "Flange Tools",
    text: "Flange spreaders, alignment tools, lifting devices, and zero-gap tooling.",
    href: "/products/flange-tools",
  },
  {
    eyebrow: "Removal Tools",
    title: "Pullers & Nut Splitters",
    text: "Hydraulic and mechanical pulling systems plus nut splitting tools for maintenance work.",
    href: "/products/pullers-nut-splitters",
  },
  {
    eyebrow: "Bearing Maintenance",
    title: "Bearing Heaters",
    text: "Portable induction heating systems for controlled bearing installation.",
    href: "/products/bearing-heaters",
  },
  {
    eyebrow: "Bolting Accessories",
    title: "Sockets & Reaction Arms",
    text: "Heavy-duty sockets, drives, standard reaction arms, and custom reaction configurations.",
    href: "/products/sockets-reaction-arms",
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
            Industrial Torque,
            <br />
            Bolting & Hydraulic Tools
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Explore ToughTorq equipment by product category. Select individual
            tools and models to build a quote request.
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

      {/* PRODUCT DIRECTORY */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Product Directory
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Browse by tool type
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group flex min-h-[230px] flex-col rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                  {category.eyebrow}
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#3f4448]">
                  {category.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#555555]">
                  {category.text}
                </p>

                <p className="mt-6 text-sm font-semibold text-[#ed1c24]">
                  View Products →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="border-t border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:flex-row">
            <div>
              <p className="text-lg font-semibold text-[#3f4448]">
                Know what you need?
              </p>

              <p className="mt-1 text-sm text-[#666666]">
                Select models throughout the site and submit them together in
                one quote request.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              View Quote Cart
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}