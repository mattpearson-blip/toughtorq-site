import Link from "next/link";

const pumpGroups = [
  {
    title: "48V Battery Torque Pump",
    text: "Portable lithium battery hydraulic power for remote bolting and field applications.",
    models: ["TTQ-BATT-10K-48V"],
  },
  {
    title: "Electric Torque Pumps",
    text: "Electric hydraulic power units for controlled torque wrench operation.",
    models: ["KLW-2000", "KLW-3000"],
  },
  {
    title: "Pneumatic Torque Pumps",
    text: "Air-powered hydraulic pumps for industrial environments and multi-wrench operation.",
    models: ["KAT-3000"],
  },
  {
    title: "Electric Hydraulic Pumps",
    text: "Single-acting and double-acting hydraulic power units for cylinders and tooling.",
    models: [
      "KHE-35M",
      "KHE-35S",
      "KHE-30M",
      "KHE-30S",
      "KHE-45M",
      "KHE-45S",
      "KHE-50M",
      "KHE-50S",
      "KHE-65M",
      "KHE-65S",
      "KHE-80M",
    ],
  },
  {
    title: "Hand, Foot & Engine Pumps",
    text: "Portable manual, air-powered, and gasoline hydraulic pumps for field service.",
    models: ["TTM-141", "TTM-221", "TT-HFP", "TT-AFP", "PQM-V", "PQM-H"],
  },
  {
    title: "Ultra-High-Pressure Pumps",
    text: "Specialized hydraulic power for bolt tensioning, hydraulic nuts, and high-pressure applications.",
    models: ["KATP-150", "KATP-200", "KATP-250", "KEPW-1500", "KEPW-2000", "KEPW-2500", "KEPW-2900"],
  },
];

const tensioningGroups = [
  {
    title: "Hydraulic Tensioning Nuts",
    text: "Compact hydraulic nuts for controlled bolt loading and simultaneous tensioning.",
  },
  {
    title: "Spring Return Bolt Tensioners",
    text: "High-pressure tensioners with spring return for repeatable multi-bolt applications.",
  },
  {
    title: "Load Return Bolt Tensioners",
    text: "Bolt tensioning systems designed for fast positioning and controlled loading.",
  },
  {
    title: "Multistage Bolt Tensioners",
    text: "Compact high-force tensioners for applications with limited radial space.",
  },
  {
    title: "Upper Locking Hydraulic Nuts",
    text: "Hydraulic locking nuts for high-temperature and controlled-load applications.",
  },
  {
    title: "Hydraulic Nuts for Bearing Assembly",
    text: "Ultra-high-pressure hydraulic nuts for bearing installation and removal.",
  },
];

const cylinderGroups = [
  "Single-Acting Hydraulic Cylinders",
  "Low-Height Hydraulic Cylinders",
  "Hollow Plunger Cylinders",
  "Pancake / Ultra-Low-Height Cylinders",
  "Lock Nut Hydraulic Cylinders",
  "Double-Acting High-Tonnage Cylinders",
  "Single-Acting High-Tonnage Cylinders",
  "Double-Acting Hydraulic Cylinders",
  "Aluminum Hydraulic Cylinders",
  "Aluminum Hollow Cylinders",
  "Aluminum Lock Nut Cylinders",
  "Ultra-Thin Hydraulic Cylinders",
  "Hydraulic Puller Cylinders",
  "Telescopic Cylinders",
  "Stage-Lift Hydraulic Cylinders",
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

export default function PumpsTensionersRamsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Equipment
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Pumps,
            <br />
            Tensioning & Cylinders
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Hydraulic power units, bolt tensioning systems, cylinders, rams,
            hoses, fittings, and accessories for industrial bolting and lifting
            applications.
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

      {/* HYDRAULIC POWER */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Hydraulic Power
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Pumps & Power Units
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#444444]">
            Battery, electric, pneumatic, manual, and ultra-high-pressure
            hydraulic power systems for torque tools, cylinders, tensioners,
            pullers, and specialty equipment.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {pumpGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-2xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-3 leading-7 text-[#555555]">{group.text}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.models.map((model) => (
                    <QuoteModelLink
                      key={model}
                      model={model}
                      product={group.title}
                    />
                  ))}
                </div>

                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#777777]">
                  Select a model to add it to your quote
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENSIONING */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Controlled Bolt Loading
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Bolt Tensioning Systems
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#444444]">
            High-pressure hydraulic tensioning equipment for controlled bolt
            loading, simultaneous tensioning, and critical flange applications.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tensioningGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {group.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CYLINDERS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Controlled Force
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Hydraulic Cylinders & Rams
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#444444]">
            Hydraulic cylinders for lifting, positioning, pulling, pushing,
            maintenance, construction, and heavy industrial applications.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-3">
            {cylinderGroups.map((group) => (
              <div key={group} className="bg-white p-5">
                <p className="font-semibold text-[#444444]">{group}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Hydraulic Accessories
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Complete the hydraulic system
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Quick Couplers",
              "Oil Manifolds",
              "Pressure Gauges",
              "Gauge Adaptors",
              "Hydraulic Fittings",
              "Hydraulic Hoses",
              "Ultra-High-Pressure Hoses",
              "Controls & Accessories",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
              >
                <p className="font-semibold text-[#444444]">{item}</p>
              </div>
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
              Hydraulic Power Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Hydraulic Pump Cutsheets",
                "Bolt Tensioner Cutsheets",
                "Hydraulic Cylinder Cutsheets",
                "Hydraulic Accessories",
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
              Need help selecting a system?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Hydraulic system selection depends on tool type, required
              pressure, oil volume, operating environment, duty cycle, and the
              number of tools being operated.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Application Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}