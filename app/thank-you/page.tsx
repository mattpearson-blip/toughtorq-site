import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Submission Received"
        title="Thank you."
        text="Your request has been submitted successfully. A ToughTorq contact will review it and follow up as needed."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 text-center transition hover:border-red-600 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600">
              Form Submitted
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              We’ve got your information.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              This submission has been sent to the ToughTorq support inbox for
              review. As your workflows evolve, this page can later support more
              advanced routing, CRM confirmation, or territory-based follow-up.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Link
                href="/products"
                className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-sm font-semibold text-white transition hover:border-red-600"
              >
                View Products
              </Link>
              <Link
                href="/find-a-distributor"
                className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Find a Distributor
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Back to Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}