import Link from "next/link";

const reactionArmGroups = [
  {
    title: "Standard Reaction Arms",
    description:
      "Standard reaction arm configurations for controlled torque application with hydraulic, battery, and pneumatic torque tools.",
  },
  {
    title: "Angle Reaction Arms",
    description:
      "45-degree and 90-degree reaction arm configurations for applications with restricted access or unusual reaction points.",
  },
  {
    title: "Double-End Reaction Arms",
    description:
      "Extended reaction solutions designed to provide alternative reaction positions around the fastener.",
  },
  {
    title: "Sliding Reaction Arms",
    description:
      "Adjustable reaction arm designs for applications requiring variable reaction positioning.",
  },
  {
    title: "Extension Reaction Arms",
    description:
      "Extended-reach reaction configurations for recessed or hard-to-access bolting applications.",
  },
  {
    title: "Custom Reaction Arms",
    description:
      "Application-specific reaction solutions for equipment geometry that cannot be handled with a standard arm.",
  },
];

const socketApplications = [
  "Hydraulic torque wrenches",
  "Battery torque guns",
  "Pneumatic torque guns",
  "Torque multipliers",
  "Large industrial fasteners",
  "Flange bolting",
  "Heavy equipment",
  "Custom bolting applications",
];

const selectionFactors = [
  "Fastener size",
  "Drive size",
  "Socket depth",
  "Required torque",
  "Available clearance",
  "Reaction point",
  "Tool model",
  "Application geometry",
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
    title: "Pneumatic Torque Guns",
    href: "/products/pneumatic-torque-guns",
  },
  {
    title: "Reaction Washers",
    href: "/products/reaction-washers",
  },
];

export default function SocketsReactionArmsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Bolting Accessories
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Sockets
            <br />
            & Reaction Arms
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Heavy-duty sockets and reaction solutions for ToughTorq hydraulic,
            battery, pneumatic, and manual torque systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Sockets%20%26%20Reaction%20Arms"
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

      {/* SOCKETS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Torque Wrench Sockets
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Heavy-duty bolting sockets
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Industrial sockets connect the torque tool to the fastener and
              should be matched to the drive size, fastener size, required
              torque, and available working clearance.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Torque%20Wrench%20Sockets"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Socket Pricing
              </Link>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {socketApplications.map((item) => (
              <div key={item} className="bg-white p-5">
                <div className="flex gap-3">
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <p className="font-medium text-[#444444]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REACTION ARM FAMILIES */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Reaction Control
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Reaction Arm Configurations
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Different bolting applications require different reaction
            geometries. ToughTorq reaction solutions can be matched to tool
            position, fastener location, and available reaction structure.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reactionArmGroups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#555555]">
                  {group.description}
                </p>

                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(
                    group.title
                  )}`}
                  className="mt-6 text-sm font-semibold text-[#ed1c24]"
                >
                  Request Information →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTION */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Product Selection
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
                Match the accessory to the application
              </h2>

              <p className="mt-5 leading-8 text-[#555555]">
                Socket and reaction selection should be based on the torque
                tool, fastener, required output torque, surrounding equipment,
                and available reaction geometry.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {selectionFactors.map((item) => (
                <div key={item} className="bg-white p-5">
                  <p className="font-semibold text-[#444444]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM REACTION */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                  Custom Applications
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
                  Need a custom reaction arm?
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
                  For unusual equipment geometry or restricted-access
                  applications, provide the torque tool model, fastener
                  location, available reaction point, and application
                  dimensions.
                </p>
              </div>

              <Link
                href="/request-a-quote?product=Custom%20Reaction%20Arm"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Custom Reaction
              </Link>
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
            Complete the bolting system
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="rounded-xl border border-[#dddddd] bg-white p-5 transition hover:border-[#ed1c24]"
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
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Socket & Reaction Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Torque Wrench Socket Guide",
                "Reaction Arm Product Guide",
                "Reaction Arm Application Reference",
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
              Need help with socket or reaction selection?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the torque tool model, fastener size, required torque,
              drive size, and available reaction geometry with your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Sockets%20%26%20Reaction%20Arms"
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