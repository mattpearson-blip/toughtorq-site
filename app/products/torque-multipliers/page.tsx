import Link from "next/link";

const multiplierGroups = [
  {
    title: "Z Type Manual Torque Multipliers",
    description:
      "Compact planetary torque multipliers for controlled high-torque fastening where additional mechanical advantage is required.",
    models: [
      "TM10W-4.5",
      "TM20W-12",
      "TM35W-15",
      "TM55W-18.15",
      "TM75W-20",
      "TM100W-26.5",
    ],
  },
  {
    title: "L Type Manual Torque Multipliers",
    description:
      "Offset manual torque multipliers designed for high-torque applications where access and reaction clearance are limited.",
    models: [
      "TM10F-5",
      "TM20F-13.3",
      "TM35F-16",
      "TM55F-21.5",
      "TM75F-24",
      "TM100F-32",
      "TM150F-50",
      "TM200F-72",
    ],
  },
];

const applications = [
  "Industrial flange bolting",
  "Heavy equipment maintenance",
  "Structural bolting",
  "Large fastener installation",
  "Restricted-access bolting",
  "Field maintenance",
  "Equipment assembly",
  "Manual high-torque applications",
];

const relatedProducts = [
  {
    title: "Battery Torque Guns",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Pneumatic Torque Wrenches",
    href: "/products/pneumatic-torque-wrenches",
  },
  {
    title: "Hydraulic Torque Wrenches",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Manual & Digital Torque Wrenches",
    href: "/products/manual-digital-torque-wrenches",
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

export default function TorqueMultipliersPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Mechanical Torque
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Torque Multipliers
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Manual planetary torque multipliers for controlled high-torque
            fastening without hydraulic, pneumatic, or electric power.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Torque%20Multipliers"
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
            Manual torque multiplier systems
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {multiplierGroups.map((group) => (
              <div
                key={group.title}
                className="overflow-hidden rounded-xl border border-[#dddddd] bg-white"
              >
                <div className="border-b border-[#dddddd] p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-[#3f4448]">
                    {group.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#555555]">
                    {group.description}
                  </p>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#777777]">
                    Available Models
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THEY WORK */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Mechanical Advantage
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              High torque without external power
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Torque multipliers use a geared mechanical system to increase the
              torque applied by the operator. This makes them useful where high
              output torque is required but hydraulic, pneumatic, or battery
              power is unavailable or unnecessary.
            </p>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Typical Selection Factors
            </p>

            <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {[
                "Required Output Torque",
                "Input Torque",
                "Fastener Size",
                "Drive Size",
                "Available Clearance",
                "Reaction Point",
                "Tool Weight",
                "Application Type",
              ].map((item) => (
                <div key={item} className="bg-white p-4">
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
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
            Built for industrial bolting
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <div key={application} className="bg-white p-5">
                <div className="flex gap-3">
                  <span className="font-bold text-[#ed1c24]">✓</span>

                  <p className="font-medium text-[#444444]">{application}</p>
                </div>
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
            Other torque solutions
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
              Torque Multiplier Cutsheets
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Z Type Torque Multiplier Cutsheet",
                "L Type Torque Multiplier Cutsheet",
                "Torque Multiplier Selection Guide",
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
              Need help selecting a multiplier?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the required output torque, available input torque,
              fastener size, drive size, and available reaction clearance with
              your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Torque%20Multipliers"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Torque Multiplier Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}