import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributors"
        title="ToughTorq distributor network"
        text="Connect with ToughTorq for regional product support or information about distributor opportunities."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 md:p-9">
              <h2 className="text-3xl font-semibold text-[#666666]">
                Find a Distributor
              </h2>

              <p className="mt-4 leading-8 text-[#444444]">
                Submit your location and product needs to connect with the
                appropriate ToughTorq support channel.
              </p>

              <div className="mt-7">
                <Link href="/find-a-distributor" className="tt-button-primary">
                  Find a Distributor
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 md:p-9">
              <h2 className="text-3xl font-semibold text-[#666666]">
                Distributor Opportunities
              </h2>

              <p className="mt-4 leading-8 text-[#444444]">
                Companies interested in representing ToughTorq can submit
                information about their business, territory, and industrial
                markets.
              </p>

              <div className="mt-7">
                <Link
                  href="/become-a-distributor"
                  className="tt-button-secondary"
                >
                  Become a Distributor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}