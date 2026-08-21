import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { QuoteCart } from "@/components/quote-cart";

export default function RequestAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Build your equipment request."
        text="Select ToughTorq models, quantities, and submit your request for pricing."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
          <Suspense fallback={null}>
            <QuoteCart />
          </Suspense>
        </div>
      </section>
    </>
  );
}