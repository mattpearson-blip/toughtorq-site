import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Submission Received"
        title="Thank you."
        text="Your information has been submitted to ToughTorq."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
          <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 text-center md:p-12">
            <h2 className="text-3xl font-semibold text-[#666666]">
              We’ve received your request.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#444444]">
              A ToughTorq contact will review the information and follow up as
              appropriate.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products" className="tt-button-primary">
                View Products
              </Link>

              <Link href="/" className="tt-button-secondary">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}