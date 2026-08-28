import Link from "next/link";

const cylinderGroups = [
  {
    title: "Single-Acting Hydraulic Cylinders",
    description:
      "General-purpose hydraulic cylinders for lifting, pushing, positioning, and maintenance applications.",
    series: "TTRC Series",
  },
  {
    title: "Low-Height Hydraulic Cylinders",
    description:
      "Compact low-profile cylinders designed for applications with limited vertical clearance.",
    series: "RSM / RCS Series",
  },
  {
    title: "Hollow Plunger Cylinders",
    description:
      "Hollow-center hydraulic cylinders for pulling, tensioning, pushing, and applications requiring access through the cylinder center.",
    series: "TTRCH / TTRR Series",
  },
  {
    title: "Pancake & Ultra-Low-Height Cylinders",
    description:
      "Ultra-compact hydraulic cylinders for lifting and positioning where available clearance is extremely limited.",
    series: "TTCLP / TTTC Series",
  },
  {
    title: "Lock Nut Hydraulic Cylinders",
    description:
      "Hydraulic cylinders with mechanical load-holding capability for applications requiring extended load support.",
    series: "TTCLL Series",
  },
  {
    title: "Double-Acting High-Tonnage Cylinders",
    description:
      "Heavy-duty double-acting cylinders for high-capacity lifting, positioning, and industrial applications.",
    series: "High-Tonnage Series",
  },
  {
    title: "Single-Acting High-Tonnage Cylinders",
    description:
      "High-capacity single-acting cylinders for heavy lifting and controlled force applications.",
    series: "TTCLRG Series",
  },
  {
    title: "Double-Acting Hydraulic Cylinders",
    description:
      "Advance-and-retract hydraulic cylinders for applications requiring positive hydraulic control in both directions.",
    series: "TTRR Series",
  },
  {
    title: "Aluminum Hydraulic Cylinders",
    description:
      "Lightweight aluminum cylinders for applications where reduced tool weight and portability are important.",
    series: "TTRAC / TTRAR Series",
  },
  {
    title: "Aluminum Hollow Cylinders",
    description:
      "Lightweight hollow-center hydraulic cylinders for pulling, pushing, and specialty maintenance work.",
    series: "TTRACH Series",
  },
  {
    title: "Aluminum Lock Nut Cylinders",
    description:
      "Lightweight hydraulic cylinders with mechanical load-holding capability.",
    series: "TTRACL Series",
  },
  {
    title: "Ultra-Thin Hydraulic Cylinders",
    description:
      "Very low-profile hydraulic cylinders for tight-clearance lifting and positioning applications.",
    series: "TTRSMB Series",
  },
  {
    title: "Hydraulic Puller Cylinders",
    description:
      "Hydraulic cylinders designed for controlled pulling and component removal applications.",
    series: "TTRCP Series",
  },
  {
    title: "Telescopic Cylinders",
    description:
      "Multi-stage hydraulic cylinders providing extended travel from a compact retracted height.",
    series: "TTRCC Series",
  },
  {
    title: "Stage-Lift Hydraulic Cylinders",
    description:
      "Hydraulic lifting cylinders designed for staged lifting and heavy industrial positioning.",
    series: "TTRLS Series",
  },
];

const applications = [
  "Industrial lifting",
  "Equipment positioning",
  "Heavy machinery maintenance",
  "Construction",
  "Plant shutdowns",
  "Bridge and structural work",
  "Equipment installation",
  "Controlled pushing and pulling",
];

const selectionFactors = [
  "Required Capacity",
  "Stroke Length",
  "Collapsed Height",
  "Extended Height",
  "Single or Double Acting",
  "Available Clearance",
  "Load-Holding Requirement",
  "Application Environment",
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
    title: "Flange & Lifting Tools",
    href: "/products/flange-tools",
  },
];

export default function HydraulicCylindersRamsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Lifting & Positioning
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Cylinders
            <br />
            & Rams
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Hydraulic cylinders and rams for lifting, pushing, pulling,
            positioning, load holding, and heavy industrial maintenance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Hydraulic%20Cylinders%20%26%20Rams"
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

      {/* CYLINDER FAMILIES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Product Families
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Hydraulic cylinder systems
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Select the cylinder type based on capacity, stroke, available
            clearance, load control, weight, and application requirements.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cylinderGroups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                  {group.series}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
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

      {/* HOW TO CHOOSE */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Cylinder Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Match the cylinder to the load
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Hydraulic cylinder selection should account for required lifting
              force, stroke, collapsed height, available space, return type,
              load-holding requirements, and the hydraulic power source.
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

      {/* ACTING TYPES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Cylinder Operation
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Single-acting vs. double-acting
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Single Acting
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Hydraulic advance
              </h3>

              <p className="mt-4 leading-7 text-[#555555]">
                Single-acting cylinders use hydraulic pressure for the working
                stroke and return through a spring, load, or external force.
                They are commonly used for lifting and general maintenance.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Double Acting
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Hydraulic advance & retract
              </h3>

              <p className="mt-4 leading-7 text-[#555555]">
                Double-acting cylinders use hydraulic pressure for both advance
                and retract, providing positive control in applications
                requiring precise positioning or powered return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTY CYLINDERS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Specialty Configurations
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Built around the application
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Low Height",
              "Hollow Plunger",
              "Lock Nut",
              "High Tonnage",
              "Aluminum",
              "Telescopic",
              "Ultra Thin",
              "Stage Lift",
            ].map((item) => (
              <div key={item} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
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
            Industrial lifting & positioning
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

      {/* SYSTEM COMPONENTS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Complete Hydraulic System
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Power the cylinder
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Hydraulic Cylinder",
              "Hydraulic Pump",
              "Hydraulic Hose",
              "Quick Couplers",
              "Pressure Gauge",
              "Hydraulic Fittings",
              "Control Valve",
              "Manifold",
            ].map((item) => (
              <div key={item} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
              </div>
            ))}
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
            Complete the lifting system
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

      {/* TECHNICAL RESOURCES */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Hydraulic Cylinder Cutsheets
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "General Purpose Cylinder Cutsheet",
                "Low-Height Cylinder Cutsheet",
                "Hollow Cylinder Cutsheet",
                "Lock Nut Cylinder Cutsheet",
                "High-Tonnage Cylinder Cutsheet",
                "Aluminum Cylinder Cutsheet",
                "Specialty Cylinder Selection Guide",
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
              Product Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Need help sizing a cylinder?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the required lifting capacity, stroke, available
              clearance, load direction, operating environment, and desired
              power source with your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Hydraulic%20Cylinders%20%26%20Rams"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Cylinder Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}