import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const FORM_ACTION = "https://formsubmit.co/support@toughtorq.com";

export default function BecomeADistributorPage() {
  return (
    <>
      <PageHero
        eyebrow="Become a Distributor"
        title="Apply to represent ToughTorq."
        text="Submit your company information and territory details to explore distributor opportunities with ToughTorq."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-5 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Distributor Interest Form
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                Tell us about your business
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                Share your company information, market focus, and territory
                interests so the ToughTorq team can review your inquiry.
              </p>

              <form
                action={FORM_ACTION}
                method="POST"
                className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="ToughTorq Distributor Application Submission"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://toughtorq.com/thank-you"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_replyto" value="%email%" />
                <input type="hidden" name="form_type" value="become_a_distributor" />
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name*"
                  required
                  className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="primary_contact_name"
                  placeholder="Primary Contact Name*"
                  required
                  className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  required
                  className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                  className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="headquarters_location"
                  placeholder="Headquarters Location"
                  className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="territory_region"
                  placeholder="Territory / Region of Interest*"
                  required
                  className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none md:col-span-2"
                />
                <input
                  type="text"
                  name="current_industries_served"
                  placeholder="Current Industries Served"
                  className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none md:col-span-2"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your company, customer base, and why you are interested in representing ToughTorq"
                  required
                  className="min-h-44 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none md:col-span-2"
                />
                <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-7 text-white/55">
                    Applications go directly to support@toughtorq.com.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Why Partner
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Built for industrial distribution
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  ToughTorq is positioned as a practical, durable, and
                  distributor-friendly bolting brand focused on real industrial
                  demand.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Product Direction
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Core bolting categories first
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  Initial focus includes battery torque guns and hydraulic torque
                  wrenches, with room for expansion into broader bolting and
                  industrial tooling categories.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Quick Links
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Explore more
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
                    href="/contact"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    General Contact
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