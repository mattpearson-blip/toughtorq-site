import Link from "next/link";

const reactionWasherGroups = [
  {
    title: "Standard Reaction Washers",
    description:
      "Reaction washer systems designed to provide a controlled reaction point directly at the fastener.",
    applications: [
      "Hydraulic torque wrench applications",
      "Restricted-access bolting",
      "Repeatable reaction setup",
      "Industrial maintenance",
    ],
  },
  {
    title: "Specialty Reaction Washers",
    description:
      "Application-specific reaction washer configurations for joints where conventional reaction arms are difficult to use.",
    applications: [
      "Confined bolting locations",
      "Large flange connections",
      "Custom reaction requirements",
      "High-cycle bolting work",
    ],
  },
  {
    title: "Reaction Washer Accessories",
    description:
      "Supporting components and system hardware used with ToughTorq reaction washer applications.",
    applications: [
      "Reaction system setup",
      "Tool positioning",
      "Replacement components",
      "Field maintenance",
    ],
  },
];

const benefits = [
  "Reduces reliance on conventional reaction arms",
  "Creates a reaction point close to the fastener",
  "Useful in restricted-access applications",
  "Supports repeatable tool positioning",
  "Can simplify reaction setup on repetitive bolting work",
  "Available for a range of industrial bolting applications",
];

const relatedProducts = [
  {
    title: "Hydraulic Torque Wrenches",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Battery Torque Guns",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Pneumatic Torque Wrenches",
    href: "/products/pneumatic-torque-wrenches",
  },
  {
    title: "Sockets & Reaction Arms",
    href: "/products/sockets-reaction-arms",
  },
];

export default function ReactionWashersPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Reaction Control
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Reaction Washers
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Controlled reaction solutions for industrial bolting applications
            where conventional reaction arms may be difficult to position.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Reaction%20Washers"
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
            Reaction control systems
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reactionWasherGroups.map((group) => (
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

      {/* BENEFITS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Reaction Management
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Simplify the reaction point
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Reaction washers provide a dedicated reaction interface at the
              fastener, helping reduce the need to position a conventional
              reaction arm against nearby structures.
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

      {/* HOW IT FITS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Bolting System
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Reaction washer system components
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Torque Tool",
              "Reaction Washer",
              "Drive Socket",
              "Fastener",
              "Reaction Interface",
              "Power Source",
              "Hydraulic Hose",
              "Supporting Accessories",
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
            Related bolting tools
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
              Reaction Washer Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Reaction Washer Product Cutsheet",
                "Reaction Washer Application Guide",
                "Reaction Washer Size Reference",
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
              Need help with the reaction setup?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the torque tool, fastener size, available clearance,
              joint configuration, and application details with your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Reaction%20Washers"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Reaction Washer Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}