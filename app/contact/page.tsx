import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const FORM_ACTION = "https://formsubmit.co/support@toughtorq.com";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need."
        text="Submit your information and product needs. A ToughTorq contact will review your request and follow up accordingly."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              General Contact Request
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80 md:text-lg">
              Use this page for product inquiries, application questions, and
              quote requests.
            </p>
          </div>

          <form
            action={FORM_ACTION}
            method="POST"
            className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-neutral-950 p-5 transition hover:border-red-600 md:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="ToughTorq Contact Form Submission"
            />
            <input
              type="hidden"
              name="_next"
              value="https://toughtorq.com/thank-you"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_replyto" value="%email%" />
            <input type="hidden" name="form_type" value="contact" />
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Company*"
                required
                className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none md:col-span-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
              />
              <input
                type="text"
                name="territory"
                placeholder="Location / Territory"
                className="min-h-12 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Tell us what tool, application, or project you need help with"
                required
                className="min-h-40 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none md:col-span-2"
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-white/55">
                Submissions go directly to support@toughtorq.com.
              </p>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                Submit Request
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-white/45">
              First live submission will require inbox confirmation before email forwarding begins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/find-a-distributor"
              className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Next Step
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                Find a Distributor
              </h3>
              <p className="mt-4 leading-8 text-white/75">
                Connect with ToughTorq for local support and product guidance.
              </p>
            </Link>

            <Link
              href="/become-a-distributor"
              className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Partner With Us
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                Become a Distributor
              </h3>
              <p className="mt-4 leading-8 text-white/75">
                Submit your information to explore distributor opportunities.
              </p>
            </Link>

            <Link
              href="/distributor-login"
              className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Portal
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                Distributor Login
              </h3>
              <p className="mt-4 leading-8 text-white/75">
                Access distributor-focused resources and support information.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}