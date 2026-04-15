import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const productFamilies = [
  {
    eyebrow: "Battery Tools",
    title: "Battery Torque Guns",
    description:
      "Portable torque solutions designed for speed, mobility, and repeatable output across industrial bolting applications.",
    href: "/products/battery-torque-guns",
    cta: "View Battery Torque Guns",
  },
  {
    eyebrow: "Hydraulic Tools",
    title: "Hydraulic Torque Wrenches",
    description:
      "Industrial-grade hydraulic bolting tools built for controlled output, harsh environments, and critical joint applications.",
    href: "/products/hydraulic-torque-wrenches",
    cta: "View Hydraulic Torque Wrenches",
  },
  {
    eyebrow: "Hydraulic Support",
    title: "Pumps, Tensioners, and Rams",
    description:
      "Hydraulic support equipment built to expand the ToughTorq product family across bolting, controlled load, and industrial force applications.",
    href: "/products/pumps-tensioners-rams",
    cta: "View Pumps, Tensioners, and Rams",
  },
  {
    eyebrow: "Torque Control",
    title: "Torque Wrenches and Specialty Tooling",
    description:
      "Manual, digital, and specialty tooling designed to support broader fastening, torque control, and application-specific industrial needs.",
    href: "/products/torque-wrenches-specialty-tooling",
    cta: "View Torque Wrenches and Specialty Tooling",
  },
];

const productHighlights = [
  {
    title: "Industrial Focus",
    text: "ToughTorq is built around serious bolting applications where reliability, repeatability, and field usability matter.",
  },
  {
    title: "Broader Product Direction",
    text: "The lineup now extends across battery tools, hydraulic wrenches, hydraulic support equipment, and torque control tooling.",
  },
  {
    title: "Built to Expand",
    text: "This product section is structured to grow into a broader industrial tooling platform as additional product families and series are introduced.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Industrial bolting tools built for real work."
        text="Explore the current ToughTorq lineup across torque tools, hydraulic equipment, and specialty industrial tooling."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              Product Families
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80 md:text-lg">
              The ToughTorq product structure is built around practical tool
              categories that support industrial bolting, hydraulic force, and
              broader fastening applications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {productFamilies.map((family) => (
              <div
                key={family.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-10"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  {family.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666]">
                  {family.title}
                </h3>
                <p className="mt-5 leading-8 text-white/78">
                  {family.description}
                </p>
                <div className="mt-8">
                  <Link
                    href={family.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                  >
                    {family.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {productHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8"
              >
                <h3 className="text-2xl font-semibold text-[#666666]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 text-center transition hover:border-red-600 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600">
              Need Help Choosing?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              Tell us what application you’re working on.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              If you are not sure which tool family fits your project, ToughTorq
              can review the application and help point you toward the right
              product path.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                Contact ToughTorq
              </Link>
              <Link
                href="/find-a-distributor"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Find a Distributor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}