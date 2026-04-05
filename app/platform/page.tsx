import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const platformSections = [
  {
    title: "Distributor Support Direction",
    text: "The ToughTorq platform is being structured to support distributors with cleaner product access, better lead flow, and a stronger digital foundation as the brand grows.",
  },
  {
    title: "Product Resource Access",
    text: "Over time, this platform area can house cut sheets, product literature, technical documents, and other support resources for distributors and end users.",
  },
  {
    title: "Scalable Growth Structure",
    text: "This page gives the site a broader digital story now while leaving room for future portal tools, protected access, and deeper operational workflows.",
  },
];

const futureCapabilities = [
  "Distributor logins and protected content",
  "Product cut sheets and technical documents",
  "Lead routing and territory support",
  "Pricing access for approved partners",
  "Marketing resources and brand assets",
  "Future support and service workflows",
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="A stronger digital foundation for ToughTorq."
        text="The ToughTorq platform is intended to support product visibility, distributor growth, and future partner resources as the brand expands."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              More than a product catalog
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80 md:text-lg">
              ToughTorq is being positioned as more than a simple product site.
              The platform direction is meant to support the brand, its
              distributors, and future customers with a cleaner digital
              experience from day one.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platformSections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600"
              >
                <h3 className="text-2xl font-semibold text-[#666666]">
                  {section.title}
                </h3>
                <p className="mt-4 leading-8 text-white/75">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Platform Vision
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                Built to grow with the brand
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                This section gives ToughTorq a broader strategic presence at
                launch. It helps position the brand as organized, scalable, and
                partner-minded even before more advanced digital systems are
                fully connected.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                For now, this page works as a brand and infrastructure signal.
                Later, it can evolve into a real support layer for distributors,
                documents, technical resources, and protected partner tools.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Future Capabilities
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                What this can become
              </h2>

              <div className="mt-8 grid gap-3">
                {futureCapabilities.map((item) => (
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

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 text-center transition hover:border-red-600 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600">
              Explore Further
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              Continue into products or distributor growth
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              The platform story supports the larger ToughTorq direction. From
              here, visitors can move into product exploration, distributor
              opportunities, or direct contact.
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