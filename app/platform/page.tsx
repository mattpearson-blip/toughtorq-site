import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const productFamilies = [
  {
    eyebrow: "Battery Tools",
    title: "Battery Torque Guns",
    description:
      "Portable, modern torque solutions designed for speed, mobility, and repeatable output across industrial bolting applications.",
    href: "/battery-torque-guns",
    cta: "View Battery Torque Guns",
  },
  {
    eyebrow: "Hydraulic Tools",
    title: "Hydraulic Torque Wrenches",
    description:
      "Industrial-grade hydraulic bolting tools built for controlled output, harsh environments, and critical joint applications.",
    href: "/hydraulic-torque-wrenches",
    cta: "View Hydraulic Torque Wrenches",
  },
];

const productHighlights = [
  {
    title: "Industrial Focus",
    text: "ToughTorq is being built around serious bolting applications where reliability, repeatability, and field usability matter.",
  },
  {
    title: "Launch-Ready Core Line",
    text: "The current product structure centers on battery torque guns and hydraulic torque wrenches, giving the brand a clean initial offering.",
  },
  {
    title: "Built to Expand",
    text: "This product section is structured to grow into a broader industrial tooling platform as additional families are introduced.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Industrial bolting tools built for real work."
        text="Explore the current ToughTorq product lineup and the core tool categories shaping the brand."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              Core Product Families
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80 md:text-lg">
              The site is launching with two foundational product categories
              designed to cover a wide range of industrial bolting needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {productFamilies.map((family) => (
              <div
                key={family.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10"
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
                    className="inline-flex items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
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
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {productHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600"
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
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 text-center transition hover:border-red-600 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600">
              Need Help Choosing?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              Tell us what application you’re working on.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              If you are not sure which tool family fits your project, submit a
              request and ToughTorq can help point you toward the right solution
              for your application.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                Contact ToughTorq
              </Link>
              <Link
                href="/find-a-distributor"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
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