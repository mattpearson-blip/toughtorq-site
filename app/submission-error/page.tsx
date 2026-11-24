import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function SubmissionErrorPage() {
  return (
    <>
      <PageHero
        eyebrow="Submission Not Completed"
        title="We could not safely save your request."
        text="Your information was not marked as received. Please try again or contact the ToughTorq team directly."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
          <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 text-center md:p-12">
            <h2 className="text-3xl font-semibold text-[#666666]">
              Please try once more.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#444444]">
              We only show the success page after your request has been stored.
              If this message continues, email office@jamtorque.com and mention
              that the ToughTorq website form could not be submitted.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="tt-button-primary">
                Try Contact Form Again
              </Link>
              <a href="mailto:office@jamtorque.com" className="tt-button-secondary">
                Email the Office
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
