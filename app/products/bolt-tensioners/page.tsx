import Link from "next/link";

const tensionerGroups = [
  {
    title: "Spring Return Hydraulic Bolt Tensioners",
    description:
      "Hydraulic bolt tensioners with spring return for controlled preload and repeatable industrial tensioning applications.",
    models: [
      "TT-ST1",
      "TT-ST2",
      "TT-ST3",
      "TT-ST4",
      "TT-ST5",
      "TT-ST6",
      "TT-ST7",
    ],
  },
  {
    title: "Load Return Hydraulic Bolt Tensioners",
    description:
      "Hydraulic tensioners designed for high-load bolting applications with controlled return under load.",
    models: [
      "TTQT4-LR",
      "TTQT5-LR",
      "TTQT6-LR",
      "TTQT7-LR",
      "TTQT8-LR",
    ],
  },
  {
    title: "Multistage Hydraulic Bolt Tensioners",
    description:
      "Multistage tensioning systems designed to generate high bolt load where radial or dimensional clearance is limited.",
    models: [],
  },
];

const benefits = [
  "Controlled bolt preload",
  "Reduced reliance on torque-friction relationships",
  "Suitable for simultaneous multi-bolt tensioning",
  "Repeatable loading for critical joints",
  "Available for large industrial fasteners",
  "Compatible with ultra-high-pressure hydraulic systems",
];

const applications = [
  "Flange joints",
  "Power generation",
  "Wind turbine bolting",
  "Oil & gas equipment",
  "Pressure vessels",
  "Heavy structural connections",
  "Large rotating equipment",
  "Shutdown and turnaround work",
];

const relatedProducts = [
  {
    title: "Hydraulic Nuts",
    href: "/products/hydraulic-nuts",
  },
  {
    title: "Ultra-High-Pressure Pumps",
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

export default function BoltTensionersPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Tensioning
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Bolt Tensioners
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Hydraulic bolt tensioning systems for controlled preload, critical
            joints, and simultaneous multi-bolt tensioning applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Bolt%20Tensioners"
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
            Hydraulic tensioning systems
          </h2>

          <div className="mt-10 space-y-6">
            {tensionerGroups.map((group) => (
              <section
                key={group.title}
                className="overflow-hidden rounded-xl border border-[#dddddd] bg-white"
              >
                <div className="border-b border-[#dddddd] p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-[#3f4448]">
                    {group.title}
                  </h3>

                  <p className="mt-4 max-w-4xl leading-7 text-[#555555]">
                    {group.description}
                  </p>
                </div>

                <div className="p-6 md:p-8">
                  {group.models.length > 0 ? (
                    <>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#777777]">
                        Available Models
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {group.models.map((model) => (
                          <div
                            key={model}
                            className="flex min-h-[58px] items-center justify-between rounded-lg border border-[#dddddd] bg-[#fafafa] px-4 py-3"
                          >
                            <QuoteModelLink
                              model={model}
                              product={group.title}
                            />

                            <span className="text-[#ed1c24]">→</span>
                          </div>
                        ))}
                      </div>

                      <p className="mt-5 text-xs uppercase tracking-[0.12em] text-[#777777]">
                        Select a model to add it to your quote
                      </p>
                    </>
                  ) : (
                    <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-[#dddddd] bg-[#fafafa] p-5 sm:flex-row sm:items-center">
                      <p className="text-sm text-[#555555]">
                        Contact ToughTorq for available models and sizing.
                      </p>

                      <Link
                        href={`/request-a-quote?product=${encodeURIComponent(
                          group.title
                        )}`}
                        className="text-sm font-semibold text-[#ed1c24]"
                      >
                        Request Information →
                      </Link>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Controlled Preload
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Apply load directly to the bolt
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Hydraulic tensioners stretch the bolt axially using hydraulic
              pressure. The nut can then be positioned while the bolt is under
              load, allowing controlled preload without relying only on applied
              rotational torque.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-[#fafafa] p-5">
                <div className="flex gap-3">
                  <span className="font-bold text-[#ed1c24]">✓</span>

                  <p className="font-medium text-[#444444]">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM COMPONENTS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Complete System
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Bolt tensioning system components
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Bolt Tensioner",
              "Ultra-High-Pressure Pump",
              "Ultra-High-Pressure Hose",
              "Quick Couplers",
              "Pressure Gauge",
              "Hydraulic Fittings",
              "Bridge / Nut Rotator",
              "Application Accessories",
            ].map((item) => (
              <div key={item} className="bg-white p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Critical bolted joints
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <div key={application} className="bg-[#fafafa] p-5">
                <p className="font-medium text-[#444444]">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTION */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Tool Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Size the tensioner to the joint
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Tensioner selection depends on bolt diameter, thread pitch,
              required preload, available stud projection, radial clearance,
              working pressure, and joint geometry.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {[
              "Bolt Diameter",
              "Thread Pitch",
              "Required Bolt Load",
              "Stud Projection",
              "Radial Clearance",
              "Working Pressure",
              "Nut Size",
              "Joint Configuration",
            ].map((item) => (
              <div key={item} className="bg-white p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
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
            Complete the tensioning system
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
              Bolt Tensioner Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Spring Return Tensioner Cutsheet",
                "Load Return Tensioner Cutsheet",
                "Multistage Tensioner Cutsheet",
                "Bolt Tensioner Selection Guide",
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
              Application Support
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Need help sizing a tensioner?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Send the bolt diameter, thread pitch, required preload, stud
              projection, available clearance, and application information.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Bolt%20Tensioners"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Tensioner Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}