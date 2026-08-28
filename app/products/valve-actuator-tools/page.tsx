import Link from "next/link";

const valveToolGroups = [
  {
    title: "Portable Valve Actuator Systems",
    description:
      "Portable powered systems for operating industrial valves in the field, plant, and maintenance environments.",
    applications: [
      "Gate valves",
      "Globe valves",
      "Butterfly valves",
      "Large manual valves",
    ],
  },
  {
    title: "Valve Actuator Power Units",
    description:
      "Portable power options used to drive valve actuator systems where manual operation is inefficient or impractical.",
    applications: [
      "Plant maintenance",
      "Utility systems",
      "Pipeline operations",
      "Shutdown and turnaround work",
    ],
  },
  {
    title: "Valve Tool Accessories",
    description:
      "Reaction, drive, connection, and application accessories used to adapt the portable actuator to different valves.",
    applications: [
      "Valve handwheels",
      "Stem interfaces",
      "Custom drive connections",
      "Field service",
    ],
  },
];

const benefits = [
  "Reduces repetitive manual valve operation",
  "Portable for field and plant use",
  "Useful for high-cycle valve applications",
  "Multiple power-source options",
  "Adaptable to different valve configurations",
  "Supports controlled valve operation",
];

const applications = [
  "Water treatment",
  "Power generation",
  "Oil & gas",
  "Chemical processing",
  "Pipeline systems",
  "Manufacturing",
  "Utilities",
  "Plant maintenance",
];

const selectionFactors = [
  "Valve Type",
  "Valve Size",
  "Required Operating Torque",
  "Handwheel or Stem Configuration",
  "Available Power Source",
  "Operating Speed",
  "Access & Clearance",
  "Application Environment",
];

const relatedProducts = [
  {
    title: "Battery Torque Guns",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Hydraulic Pumps",
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

export default function ValveActuatorToolsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Valve Tools
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Portable Valve
            <br />
            Actuator Systems
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Portable powered valve operation systems for industrial, utility,
            pipeline, and maintenance applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Portable%20Valve%20Actuator%20Systems"
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
            Portable valve operation systems
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {valveToolGroups.map((group) => (
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

      {/* BENEFITS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Portable Valve Operation
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Reduce repetitive manual operation
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Portable valve actuator systems can reduce the effort and time
              required to operate large or frequently cycled valves while
              allowing one system to be moved between multiple valve locations.
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

      {/* CONFIGURATIONS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            System Configuration
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Match the system to the valve
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Drive System
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Portable Actuator
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#555555]">
                Provides the powered rotational input used to operate the valve.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Interface
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Valve Connection
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#555555]">
                Connects the actuator to the valve handwheel, stem, or operating
                interface.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Reaction
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                Reaction Support
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#555555]">
                Stabilizes the system and provides a controlled reaction point
                during valve operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTION FACTORS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Selection
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Size the actuator to the valve
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
            Industrial valve operation
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
            Supporting equipment
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
              Valve Tool Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Portable Valve Actuator Cutsheet",
                "Valve Actuator Configuration Guide",
                "Valve Tool Accessory Guide",
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
              Need help configuring a valve system?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the valve type, valve size, operating torque if known,
              handwheel or stem details, available power source, and application
              environment with your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Portable%20Valve%20Actuator%20Systems"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Valve Tool Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}