import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const distributorBenefits = [
  {
    title: "Industrial Product Focus",
    text: "ToughTorq is being positioned around serious industrial bolting applications, with an emphasis on practical product lines that fit real field demand.",
  },
  {
    title: "Brand Growth Opportunity",
    text: "Early distributor partners have the opportunity to grow alongside the brand as product families, territory structure, and market coverage expand.",
  },
  {
    title: "Support-Ready Direction",
    text: "The platform is being built to support future pricing access, literature, cut sheets, distributor resources, and lead-routing workflows.",
  },
];

const targetPartners = [
  "Industrial tooling distributors",
  "Bolting and flange equipment sellers",
  "Regional maintenance supply companies",
  "Plant service and shutdown support providers",
  "Rental and specialty tool partners",
  "Territory-based industrial sales groups",
];

export default function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributors"
        title="Built for strong regional partners."
        text="ToughTorq is developing a distributor network focused on industrial bolting products, durable market positioning, and long-term regional growth."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Distributor Program
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                ToughTorq is building its network now
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                We are creating a distributor structure designed for industrial
                markets that value dependable tools, practical product support,
                and clear territory growth.
              </p>

              <div className="mt-10 grid gap-4">
                {distributorBenefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-black p-6 transition hover:border-red-600"
                  >
                    <h3 className="text-xl font-semibold text-[#666666]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-8 text-white/75">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/become-a-distributor"
                  className="inline-flex items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                >
                  Become a Distributor
                </Link>
                <Link
                  href="/distributor-login"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                >
                  Distributor Login
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Ideal Partners
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Who this is built for
                </h3>
                <div className="mt-5 grid gap-3">
                  {targetPartners.map((partner) => (
                    <div
                      key={partner}
                      className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white/80 transition hover:border-red-600"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Regional Opportunity
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Built for long-term market development
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  ToughTorq is focused on building strong distributor
                  relationships in markets where product knowledge, dependable
                  support, and practical industrial solutions matter. The goal
                  is to create lasting regional partnerships that help expand
                  market coverage and strengthen customer confidence in the
                  brand.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Related Pages
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Continue exploring
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/find-a-distributor"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    Find a Distributor
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    General Contact
                  </Link>
                  <Link
                    href="/products"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}