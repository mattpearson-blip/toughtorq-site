import Link from "next/link";

const primaryCategories = [
  {
    title: "Torquing",
    text: "Battery, pneumatic, hydraulic, manual, and reaction-controlled torque systems.",
    href: "/products",
  },
  {
    title: "Hydraulic Pumps & Accessories",
    text: "Battery, electric, pneumatic, and manual pumps plus hoses, fittings, couplers, gauges, and manifolds.",
    href: "/products",
  },
  {
    title: "Tensioning",
    text: "Bolt tensioners, hydraulic nuts, ultra-high-pressure pumps, hoses, and supporting equipment.",
    href: "/products",
  },
  {
    title: "Lifting & Positioning",
    text: "Hydraulic cylinders, rams, lifting systems, pumps, and accessories.",
    href: "/products",
  },
  {
    title: "Flange & Alignment",
    text: "Flange spreaders, alignment tools, lifting devices, and controlled separation equipment.",
    href: "/products",
  },
  {
    title: "Removal & Maintenance",
    text: "Pullers, nut splitters, gear pullers, and bearing heating equipment.",
    href: "/products",
  },
  {
    title: "Valve Tools",
    text: "Portable valve actuator systems and supporting valve-operation accessories.",
    href: "/products",
  },
];

const featuredProducts = [
  {
    title: "Battery Torque Guns",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Hydraulic Torque Wrenches",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Hydraulic Pumps",
    href: "/products/hydraulic-pumps",
  },
  {
    title: "Bolt Tensioners",
    href: "/products/bolt-tensioners",
  },
  {
    title: "Hydraulic Cylinders & Rams",
    href: "/products/hydraulic-cylinders-rams",
  },
  {
    title: "Hydraulic Nuts",
    href: "/products/hydraulic-nuts",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            ToughTorq
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl lg:text-7xl">
            Industrial Torque,
            <br />
            Bolting & Hydraulic Tools
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Torque, tensioning, lifting, hydraulic power, flange maintenance,
            valve operation, and specialty industrial tooling.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Products
            </Link>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Categories
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Find tools by application
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {primaryCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group flex min-h-[210px] flex-col rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-2xl font-semibold text-[#3f4448]">
                  {category.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#555555]">
                  {category.text}
                </p>

                <p className="mt-6 text-sm font-semibold text-[#ed1c24]">
                  View Category →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Featured Equipment
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Popular ToughTorq product families
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="flex min-h-[88px] items-center justify-between gap-4 bg-[#fafafa] px-5 py-4 font-semibold text-[#444444] transition hover:bg-white hover:text-[#ed1c24]"
              >
                <span>{product.title}</span>
                <span className="text-[#ed1c24]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-3 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Product Selection
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Application support
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#555555]">
              Send us the application details and we can help identify the
              appropriate tooling and hydraulic system.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-6 inline-flex text-sm font-semibold text-[#ed1c24]"
            >
              Request Support →
            </Link>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Distribution
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Find a distributor
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#555555]">
              Connect with ToughTorq distribution and product support in your
              area.
            </p>

            <Link
              href="/find-a-distributor"
              className="mt-6 inline-flex text-sm font-semibold text-[#ed1c24]"
            >
              Find a Distributor →
            </Link>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              ToughTorq Network
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Become a distributor
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#555555]">
              Learn more about representing ToughTorq products in your market.
            </p>

            <Link
              href="/become-a-distributor"
              className="mt-6 inline-flex text-sm font-semibold text-[#ed1c24]"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                ToughTorq
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Need pricing or product information?
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333]"
              >
                Browse Products
              </Link>

              <Link
                href="/request-a-quote"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}