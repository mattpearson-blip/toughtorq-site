import { Suspense } from "react";
import QuoteCart from "@/components/quote-cart";

export default function RequestAQuotePage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            ToughTorq
          </p>

          <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight text-[#3f4448] md:text-6xl">
            Request a Quote
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Build a quote request for ToughTorq products, accessories,
            components, and services.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <Suspense fallback={null}>
            <QuoteCart />
          </Suspense>
        </div>
      </section>
    </main>
  );
}