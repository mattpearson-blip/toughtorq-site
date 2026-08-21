import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const storyPoints = [
  {
    title: "Built for Industrial Work",
    text: "ToughTorq is being developed around real industrial bolting needs, with a focus on practical tools, dependable performance, and products that make sense in the field.",
  },
  {
    title: "Positioned for Growth",
    text: "The brand begins with core bolting categories and a clean digital presence, with room to expand into a broader industrial tooling ecosystem over time.",
  },
  {
    title: "Built to Support Partners",
    text: "ToughTorq is shaped not only for end users, but also for the distributors and regional partners who help bring industrial products to market.",
  },
];

const principles = [
  "Practical industrial design",
  "Durable product direction",
  "Distributor-friendly brand structure",
  "Clean digital foundation",
  "Scalable product family growth",
  "Serious market positioning",
];

export default function BrandStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Story"
        title="Built with a clear industrial direction."
        text="ToughTorq is shaped as a durable, practical, and scalable bolting brand built for real field applications and long-term growth."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                The Direction
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                A brand built around real bolting demand
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                ToughTorq is developed with a straightforward goal: build a
                strong industrial brand around product categories that serve
                real field demand. The focus is on practical performance,
                durability, and a product direction that feels credible in the
                environments where these tools are actually used.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                Rather than feeling generic or overbuilt, the brand is meant to
                project substance. ToughTorq is positioned as a serious
                industrial name with room to grow across multiple tool
                families, distributor relationships, and support resources.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Core Principles
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                What drives the brand
              </h2>

              <div className="mt-8 grid gap-3">
                {principles.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white/80 transition hover:border-red-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {storyPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600"
              >
                <h3 className="text-2xl font-semibold text-[#666666]">
                  {point.title}
                </h3>
                <p className="mt-4 leading-8 text-white/75">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 text-center transition hover:border-red-600 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600">
              Explore the Brand
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              See where ToughTorq is headed
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              The brand story supports the larger product, platform, and
              distributor direction. From here, visitors can move into the
              product lineup, partnership opportunities, or direct contact.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                View Products
              </Link>
              <Link
                href="/distributors"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Distributors
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}