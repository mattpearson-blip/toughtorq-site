import Link from "next/link";

const flangeToolGroups = [
  {
    title: "Hydraulic Flange Spreaders",
    description:
      "Hydraulic flange spreading tools for controlled separation during gasket replacement, inspection, and maintenance.",
    applications: [
      "Flange separation",
      "Gasket replacement",
      "Valve maintenance",
      "Pipeline service",
    ],
  },
  {
    title: "Mechanical Flange Spreaders",
    description:
      "Portable mechanical spreaders for flange separation where hydraulic power is unnecessary or unavailable.",
    applications: [
      "Field maintenance",
      "Flange servicing",
      "Pipeline work",
      "Shutdown and turnaround work",
    ],
  },
  {
    title: "Mini-Gap Flange Spreaders",
    description:
      "Compact flange spreading tools designed for applications with limited access and minimal flange gap.",
    applications: [
      "Restricted-access flanges",
      "Compact piping systems",
      "Maintenance work",
      "Small flange gaps",
    ],
  },
  {
    title: "Zero-Gap Hydraulic Flange Spreaders",
    description:
      "Hydraulic flange spreading systems designed for applications where there is little or no initial access gap.",
    applications: [
      "Zero-gap flange joints",
      "Large piping systems",
      "Industrial shutdowns",
      "Critical maintenance",
    ],
  },
  {
    title: "Flange Alignment Tools",
    description:
      "Alignment tools for correcting rotational or lateral flange misalignment before bolting.",
    applications: [
      "Pipe flange alignment",
      "Valve installation",
      "Pipeline assembly",
      "Maintenance and repair",
    ],
  },
  {
    title: "Hydraulic Lifting Devices",
    description:
      "Compact hydraulic lifting tools for controlled positioning and separation during industrial maintenance.",
    applications: [
      "Equipment lifting",
      "Component positioning",
      "Flange maintenance",
      "Restricted-access lifting",
    ],
  },
];

const selectionFactors = [
  "Flange Size",
  "Available Access Gap",
  "Required Spreading Force",
  "Hydraulic or Mechanical Operation",
  "Available Clearance",
  "Joint Configuration",
  "Pipe Size",
  "Application Environment",
];

const applications = [
  "Pipeline maintenance",
  "Refineries",
  "Power generation",
  "Chemical processing",
  "Industrial plants",
  "Valve replacement",
  "Gasket replacement",
  "Shutdowns and turnarounds",
];

const relatedProducts = [
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
  {
    title: "Hydraulic Cylinders & Rams",
    href: "/products/hydraulic-cylinders-rams",
  },
];

export default function FlangeToolsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Flange & Alignment
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Flange &
            <br />
            Alignment Tools
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Flange spreaders, alignment tools, hydraulic lifting devices, and
            controlled separation equipment for industrial maintenance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Flange%20%26%20Alignment%20Tools"
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
            Flange maintenance systems
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Select the tool based on flange size, available access, spreading
            force, alignment requirement, and whether hydraulic or mechanical
            operation is preferred.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {flangeToolGroups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#555555]">
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

      {/* SELECTION */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Tool Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Match the tool to the flange
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Flange tool selection should account for available insertion gap,
              required spreading force, flange geometry, available clearance,
              and whether the job requires spreading, alignment, or lifting.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {selectionFactors.map((factor) => (
              <div key={factor} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOL TYPES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Tool Types
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Spreading, alignment & lifting
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Spreading
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Flange Spreaders
              </h3>

              <p className="mt-4 leading-7 text-[#555555]">
                Controlled separation of flange faces for gasket replacement,
                inspection, valve service, and maintenance.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Alignment
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Flange Alignment
              </h3>

              <p className="mt-4 leading-7 text-[#555555]">
                Correct rotational or lateral misalignment before installing
                fasteners and completing the joint.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Positioning
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Hydraulic Lifting
              </h3>

              <p className="mt-4 leading-7 text-[#555555]">
                Compact hydraulic force for lifting and positioning components
                during industrial maintenance work.
              </p>
            </div>
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
            Industrial flange maintenance
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

      {/* SYSTEM SUPPORT */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Hydraulic Systems
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Complete the hydraulic setup
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Flange Tool",
              "Hydraulic Pump",
              "Hydraulic Hose",
              "Quick Couplers",
              "Pressure Gauge",
              "Hydraulic Fittings",
              "Hand Pump",
              "Air Foot Pump",
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
            Complete the maintenance system
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
              Flange Tool Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Hydraulic Flange Spreader Cutsheet",
                "Mechanical Flange Spreader Cutsheet",
                "Zero-Gap Spreader Cutsheet",
                "Flange Alignment Tool Cutsheet",
                "Hydraulic Lifting Device Cutsheet",
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
              Need help selecting a flange tool?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the flange size, available access gap, required spreading
              or alignment movement, available clearance, and application
              details with your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Flange%20%26%20Alignment%20Tools"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Flange Tool Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}