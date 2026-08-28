import Link from "next/link";

const heaterGroups = [
  {
    title: "Plate Bearing Heaters",
    description:
      "Compact bearing heating systems for controlled thermal expansion during bearing installation.",
    applications: [
      "Bearing installation",
      "Small component heating",
      "Maintenance shops",
      "Field service",
    ],
  },
  {
    title: "Bearing Induction Heaters",
    description:
      "Induction heating systems for fast, controlled, and repeatable heating of bearings and other interference-fit components.",
    applications: [
      "Bearing installation",
      "Gear heating",
      "Coupling installation",
      "Rotating equipment maintenance",
    ],
  },
];

const inductionModels = [
  "KHG-22",
  "KHG-40",
  "KHG-100",
  "KHG-120",
  "KHG-150",
];

const applications = [
  "Bearing installation",
  "Gear installation",
  "Coupling installation",
  "Rotating equipment maintenance",
  "Motor repair",
  "Pump maintenance",
  "Industrial assembly",
  "Maintenance shops",
];

const selectionFactors = [
  "Bearing Size",
  "Bearing Weight",
  "Required Temperature",
  "Heating Time",
  "Component Type",
  "Available Power",
  "Portability",
  "Application Environment",
];

const relatedProducts = [
  {
    title: "Hydraulic Pullers",
    href: "/products/pullers-nut-splitters",
  },
  {
    title: "Hydraulic Cylinders & Rams",
    href: "/products/hydraulic-cylinders-rams",
  },
  {
    title: "Hydraulic Pumps",
    href: "/products/hydraulic-pumps",
  },
  {
    title: "Hydraulic Nuts",
    href: "/products/hydraulic-nuts",
  },
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

export default function BearingHeatersPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Removal & Maintenance
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Bearing Heaters
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Controlled heating systems for bearing installation, interference-fit
            components, and rotating equipment maintenance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Bearing%20Heaters"
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
            Bearing heating systems
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {heaterGroups.map((group) => (
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

      {/* MODELS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Induction Heater Models
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            KHG Series
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Select a model below to add it directly to your quote request.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#dddddd]">
            <div className="grid grid-cols-[1fr_auto] bg-[#d90f16] px-5 py-4 text-sm font-semibold text-white">
              <span>Model</span>
              <span>Quote</span>
            </div>

            <div>
              {inductionModels.map((model, index) => (
                <div
                  key={model}
                  className={`grid grid-cols-[1fr_auto] items-center gap-4 border-b border-[#dddddd] px-5 py-4 last:border-b-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
                  }`}
                >
                  <QuoteModelLink
                    model={model}
                    product="Bearing Induction Heaters"
                  />

                  <Link
                    href={`/request-a-quote?model=${encodeURIComponent(
                      model
                    )}&product=${encodeURIComponent(
                      "Bearing Induction Heaters"
                    )}`}
                    className="text-sm font-semibold text-[#ed1c24]"
                  >
                    Add →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Controlled Heating
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Expand the component for installation
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Bearing heaters raise the temperature of the component in a
              controlled manner, allowing thermal expansion to increase the
              internal diameter for easier installation onto a shaft.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {[
              "Controlled Heating",
              "Reduced Installation Force",
              "Repeatable Process",
              "Portable Operation",
              "Bearing Installation",
              "Gear Installation",
              "Coupling Installation",
              "Maintenance Applications",
            ].map((item) => (
              <div key={item} className="bg-white p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTION */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Selection
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Match the heater to the component
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {selectionFactors.map((factor) => (
              <div key={factor} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Rotating equipment maintenance
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <div key={application} className="bg-white p-5">
                <p className="font-medium text-[#444444]">{application}</p>
              </div>
            ))}
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
            Complete the maintenance setup
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

      {/* TECHNICAL RESOURCES */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Bearing Heater Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Plate Bearing Heater Cutsheet",
                "KHG Series Induction Heater Cutsheet",
                "Bearing Heater Selection Guide",
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
              Product Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Need help selecting a heater?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the bearing or component dimensions, weight, required
              installation temperature, available power source, and application
              details with your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Bearing%20Heaters"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Bearing Heater Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}