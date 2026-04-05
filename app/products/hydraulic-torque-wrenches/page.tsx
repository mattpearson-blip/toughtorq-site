import { PageHero } from "@/components/page-hero";

const hydraulicFamilies = [
  {
    title: "Low Clearance Cassette Wrenches",
    text: "Built for flange and joint applications where overhead, radial, or surrounding clearance limits the use of a standard square-drive wrench.",
  },
  {
    title: "Square Drive Hydraulic Wrenches",
    text: "A versatile hydraulic torque platform for general bolting work, shutdowns, production maintenance, and heavy industrial service.",
  },
  {
    title: "Lightweight Alloy Construction",
    text: "Engineered to reduce fatigue and improve handling without giving up the rugged feel expected in serious bolting environments.",
  },
  {
    title: "Industrial-Grade Repeatability",
    text: "Designed for torque-critical applications where output consistency, tool durability, and serviceability matter over the long run.",
  },
];

const hydraulicApplications = [
  "Turnarounds and shutdowns",
  "Refining and petrochemical",
  "Power generation",
  "Steel and heavy manufacturing",
  "Wind and renewable energy",
  "General industrial bolting",
];

const hydraulicAdvantages = [
  {
    title: "High-output torque performance",
    text: "Hydraulic torque wrenches remain one of the strongest solutions for large fasteners and torque-critical bolting where dependable force delivery matters.",
  },
  {
    title: "Broad application fit",
    text: "From square-drive models to low-clearance cassette systems, the platform can be positioned around a wide range of joints, access limits, and industrial bolting programs.",
  },
  {
    title: "Serviceable tool platform",
    text: "ToughTorq hydraulic tools should be presented as durable, rebuildable, and supportable rather than disposable or difficult to maintain.",
  },
  {
    title: "Distributor-ready product family",
    text: "The platform is built to support quoting, rental conversations, planned maintenance, and long-term distributor growth across industrial accounts.",
  },
];

const hydraulicFaqs = [
  {
    q: "Where do hydraulic torque wrenches fit best?",
    a: "They are best positioned for higher-output bolting, shutdown work, flange applications, and torque-critical industrial tasks where reliability and repeatability are essential.",
  },
  {
    q: "Why include both square-drive and low-clearance options?",
    a: "Different jobs demand different access solutions. A stronger hydraulic platform gives distributors and end users the flexibility to match the tool to the application rather than forcing one tool style onto every job.",
  },
  {
    q: "How should these be quoted?",
    a: "They should be quoted through the distributor network with the right discussion around access, torque range, pump compatibility, sockets, and application requirements.",
  },
  {
    q: "What makes the ToughTorq hydraulic family different?",
    a: "It should be positioned around durability, industrial fit, long-term serviceability, and a cleaner alternative to generic tooling that is expensive to own and frustrating to support.",
  },
];

export default function HydraulicTorqueWrenchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hydraulic Torque Wrenches"
        title="Hydraulic torque wrench systems built for serious industrial bolting."
        text="ToughTorq hydraulic torque wrenches are positioned for shutdowns, turnarounds, production maintenance, and torque-critical field applications where reliability, repeatability, and long-term durability matter."
      />

      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Hydraulic Platform
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Built for higher-output bolting and torque-critical work.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
              ToughTorq hydraulic torque wrench systems should be positioned as
              a premium industrial solution for applications where larger
              fasteners, tighter joints, and more demanding conditions require
              dependable force delivery and repeatable torque output.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">
              This product family should anchor the brand in the industrial
              bolting market. It needs to feel durable, serviceable, and ready
              for the kinds of applications where generic tooling quickly
              becomes a liability.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-bold uppercase text-white hover:opacity-90"
              >
                Request Hydraulic Tool Quote
              </a>
              <a
                href="/distributors"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase text-white hover:bg-white/10"
              >
                Become a Distributor
              </a>
            </div>
          </div>

          <div className="border border-red-600/30 bg-black p-8 transition hover:border-red-600/60">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#666666]">
              Positioning Snapshot
            </div>
            <div className="mt-6 grid gap-4">
              <div className="border border-white/10 bg-neutral-950 p-5 text-white/85 transition hover:border-red-600/60">
                Premium hydraulic torque solutions for industrial bolting environments.
              </div>
              <div className="border border-white/10 bg-neutral-950 p-5 text-white/85 transition hover:border-red-600/60">
                Built for shutdowns, turnarounds, flange work, and planned maintenance.
              </div>
              <div className="border border-white/10 bg-neutral-950 p-5 text-white/85 transition hover:border-red-600/60">
                Designed to support distributor-led quoting, rentals, and application guidance.
              </div>
              <div className="border border-white/10 bg-neutral-950 p-5 text-white/85 transition hover:border-red-600/60">
                A cleaner alternative to generic built-to-break hydraulic tooling.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Product Families
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              A hydraulic platform built around access, torque range, and industrial fit.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {hydraulicFamilies.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600/60"
              >
                <div className="text-lg font-black uppercase tracking-tight text-[#666666]">
                  {item.title}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/85">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Ideal Applications
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Where hydraulic torque wrenches create the most value.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {hydraulicApplications.map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-black px-5 py-5 text-sm font-semibold uppercase tracking-wide text-white/85 transition hover:border-red-600/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Why Hydraulic
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Built for jobs where failure is expensive.
            </h2>
            <p className="mt-8 text-lg leading-8 text-white/85">
              Hydraulic torque wrench systems should be presented as a
              foundational industrial bolting solution for users who need
              dependable output, proven field performance, and a product family
              that can scale across torque ranges, access conditions, and
              long-term maintenance programs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Why Choose ToughTorq Hydraulic
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Built for long-term industrial ownership, not short-term convenience.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {hydraulicAdvantages.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600/60"
              >
                <div className="text-lg font-black uppercase tracking-tight text-[#666666]">
                  {item.title}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/85">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Support Model
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Built for distributor-led quoting, application fit, and support.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
              Hydraulic torque wrench systems should be quoted and supported
              through the right distributor relationship. That allows the
              customer to discuss access conditions, torque range, pumps,
              sockets, hoses, and application requirements with the right level
              of guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-bold uppercase text-white hover:opacity-90"
              >
                Request Quote
              </a>
              <a
                href="/find-a-distributor"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase text-white hover:bg-white/10"
              >
                Find Distribution Partner
              </a>
            </div>
          </div>

          <div className="border border-white/10 bg-black p-8 transition hover:border-red-600/60">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Typical Fit
            </div>
            <div className="mt-4 space-y-4 text-white/85">
              <p>• Shutdown and turnaround contractors.</p>
              <p>• Plants with recurring bolting programs.</p>
              <p>• Refinery, power, and heavy manufacturing maintenance teams.</p>
              <p>• Distributors supporting torque-critical industrial customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Hydraulic Torque Wrenches FAQ
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Clear answers for distributors and end users.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {hydraulicFaqs.map((item) => (
              <div
                key={item.q}
                className="border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600/60"
              >
                <div className="text-lg font-black uppercase tracking-tight text-[#666666]">
                  {item.q}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/85">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}