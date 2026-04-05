import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const FORM_ACTION = "https://formsubmit.co/support@toughtorq.com";

export default function FindADistributorPage() {
  return (
    <>
      <PageHero
        eyebrow="Find a Distributor"
        title="Connect with your local ToughTorq source."
        text="We are building distributor coverage now. Submit your location and product needs, and we will route your request to the appropriate contact as distributor territories are finalized."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Territory Request
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                Find support in your area
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
                This page is set up as a simple routed contact form for launch.
                It gives customers and end users a clear path to request local
                support today, even before the full distributor map and routing
                system are completed.
              </p>

              <form
                action={FORM_ACTION}
                method="POST"
                className="mt-10 grid gap-6 md:grid-cols-2"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="ToughTorq Find a Distributor Submission"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://toughtorq.com/thank-you"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_replyto" value="%email%" />
                <input type="hidden" name="form_type" value="find_a_distributor" />
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none md:col-span-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="territory"
                  placeholder="City / State / Territory*"
                  required
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="product_interest"
                  placeholder="Product Interest"
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none md:col-span-2"
                />
                <textarea
                  name="message"
                  placeholder="Tell us what application, tool type, or support you need"
                  required
                  className="h-36 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/35 transition hover:border-red-600 focus:border-red-600 focus:outline-none md:col-span-2"
                />
                <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-7 text-white/55">
                    Launch version. Submissions go directly to support@toughtorq.com.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                  >
                    Submit Territory Request
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Launch Status
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Distributor network in progress
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  ToughTorq is actively building out distributor relationships
                  and regional support. This page gives users a clear action
                  path now while the broader network is finalized.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Product Focus
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Battery and hydraulic bolting tools
                </h3>
                <p className="mt-4 leading-8 text-white/75">
                  Requests can be tied to battery torque guns, hydraulic torque
                  wrenches, and future product families as the site expands.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600">
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  Need Something Else?
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#666666]">
                  Other paths
                </h3>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    General Contact
                  </Link>
                  <Link
                    href="/become-a-distributor"
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    Become a Distributor
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