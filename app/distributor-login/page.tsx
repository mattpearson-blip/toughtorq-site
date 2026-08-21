import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const portalFeatures = [
  "Distributor pricing access",
  "Marketing and product resources",
  "Cut sheets and product documentation",
  "Territory and lead support tools",
  "Centralized partner resources",
];

export default function DistributorLoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributor Login"
        title="Partner access for the ToughTorq network."
        text="The distributor portal is designed to support approved partners with product resources, account access, and ongoing brand support."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Partner Portal
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                Built to support distributor growth
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                ToughTorq is building a distributor-focused access point for
                partners who need cleaner access to product information,
                literature, brand resources, and ongoing support tools.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black p-6 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Partner Resources
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {portalFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-4 text-sm text-white/80 transition hover:border-red-600"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/become-a-distributor"
                  className="inline-flex items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                >
                  Become a Distributor
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                >
                  Contact ToughTorq
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Distributor Access
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Built for approved partners
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  This area is intended for distributor relationships that
                  require organized access to product information, support
                  materials, and ongoing brand resources.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Network Growth
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Supporting stronger regional coverage
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  ToughTorq is focused on building distributor relationships
                  that strengthen market coverage, improve responsiveness, and
                  help support industrial customers with greater consistency.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Quick Links
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Related pages
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/distributors"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    Distributor Overview
                  </Link>
                  <Link
                    href="/find-a-distributor"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    Find a Distributor
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