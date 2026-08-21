import Link from "next/link";

const productFamilies = [
  {
    title: "Battery Torque Guns",
    text: "Portable digital torque tools for controlled industrial bolting applications.",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Hydraulic Torque Wrenches",
    text: "Square-drive and cassette-style hydraulic torque wrench systems.",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Pumps, Tensioners & Rams",
    text: "Hydraulic pumps, bolt tensioning equipment, cylinders, and related accessories.",
    href: "/products/pumps-tensioners-rams",
  },
  {
    title: "Torque Wrenches & Specialty Tooling",
    text: "Manual, digital, pneumatic, valve, reaction, and specialty tooling.",
    href: "/products/torque-wrenches-specialty-tooling",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f2f2f2] text-[#292929]">
      <section className="border-b border-[#d6d6d6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12 lg:py-28">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ed1c24]">
              ToughTorq
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#666666] md:text-6xl lg:text-7xl">
              Industrial bolting and torque tools.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#3f3f3f] md:text-lg">
              Torque tools, hydraulic equipment, bolt tensioning systems, and
              specialty tooling for industrial applications.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="tt-button-primary">
                View Products
              </Link>

              <Link href="/contact" className="tt-button-secondary">
                Contact ToughTorq
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d6d6d6]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ed1c24]">
              Product Categories
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#666666] md:text-4xl">
              Tools for industrial bolting applications
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {productFamilies.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-[#d6d6d6] bg-white p-6 transition hover:border-[#ed1c24] md:p-8"
              >
                <h3 className="text-2xl font-semibold text-[#666666]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#4a4a4a]">{item.text}</p>

                <p className="mt-6 text-sm font-semibold text-[#ed1c24]">
                  View Products →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ed1c24]">
                ToughTorq
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#666666] md:text-4xl">
                Practical industrial tooling
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#444444]">
                ToughTorq supplies torque, bolting, hydraulic, tensioning, and
                specialty tooling for maintenance, construction, manufacturing,
                power generation, oil and gas, mining, and other demanding
                industrial environments.
              </p>
            </div>

            <div className="flex items-center lg:justify-end">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/products" className="tt-button-primary">
                  Browse Products
                </Link>

                <Link href="/find-a-distributor" className="tt-button-secondary">
                  Find a Distributor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}