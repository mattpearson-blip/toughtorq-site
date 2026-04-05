import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const upcomingFeatures = [
  "Distributor pricing access",
  "Marketing and product resources",
  "Cut sheets and product documentation",
  "Territory and lead-routing tools",
  "Future protected distributor content",
];

export default function DistributorLoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributor Login"
        title="Distributor portal coming soon."
        text="This page serves as the placeholder landing page for future distributor access, protected resources, and partner support tools."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Coming Soon
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                Distributor access is being built now
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                ToughTorq is building a dedicated distributor portal for approved
                partners. This launch version keeps the route live and
                intentional today while protected access, account workflows, and
                partner resources are finalized.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black p-6 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Planned Portal Features
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {upcomingFeatures.map((feature) => (
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
                  For Launch
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  A clean placeholder is enough
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  This page does not need real authentication yet. It simply
                  gives distributors a destination and shows that a formal
                  partner portal is part of the platform direction.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Distributor Path
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  New partners start here
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  Prospective partners should use the dedicated distributor
                  application page first. Approved partners can later be given
                  credentials and access to protected content here.
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