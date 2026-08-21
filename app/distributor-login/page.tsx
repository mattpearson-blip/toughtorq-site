import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function DistributorLoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributor Portal"
        title="Distributor access"
        text="Resources for approved ToughTorq distributor partners."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
          <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 text-center md:p-12">
            <h2 className="text-3xl font-semibold text-[#666666]">
              Partner resources
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#444444]">
              Distributor resources will include product documentation,
              technical materials, pricing information, marketing resources, and
              account support.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="tt-button-primary">
                Contact ToughTorq
              </Link>

              <Link href="/products" className="tt-button-secondary">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}