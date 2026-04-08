import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const productGroups = [
  {
    title: "Manual Torque Wrenches",
    text: "Manual torque wrenches remain essential for controlled fastening across maintenance, assembly, and quality-driven applications where dependable hand-applied torque matters.",
    bullets: [
      "Supports controlled manual torque application",
      "Fits maintenance, assembly, and field use",
      "Useful across a broad range of fastening work",
    ],
  },
  {
    title: "Digital Torque Wrenches",
    text: "Digital torque tools expand visibility and control by supporting more precise measurement, clearer feedback, and improved repeatability in torque-critical environments.",
    bullets: [
      "Improved feedback and measurement visibility",
      "Supports repeatable torque-critical work",
      "Useful where verification and control matter",
    ],
  },
  {
    title: "Specialty Tooling",
    text: "Specialty tooling helps support applications that require custom fit, unique access, or task-specific solutions beyond standard torque tools and hydraulic systems.",
    bullets: [
      "Supports non-standard or access-limited applications",
      "Expands capability across specialized tasks",
      "Fits a broader industrial tooling direction",
    ],
  },
];

const applications = [
  "General plant maintenance",
  "Assembly and quality-controlled fastening",
  "Inspection and torque verification work",
  "Access-limited industrial applications",
  "Specialized tooling requirements",
  "Broader bolting and industrial service support",
];

const supportCards = [
  {
    title: "Broader Tooling Coverage",
    text: "This category helps extend ToughTorq beyond hydraulic and battery systems into manual, digital, and specialized tooling needs.",
  },
  {
    title: "Focused on Practical Use",
    text: "The emphasis remains on tools that serve real applications with dependable function, controlled output, and credible industrial relevance.",
  },
  {
    title: "Built to Complement the Line",
    text: "Torque wrenches and specialty tooling round out the broader product direction by supporting jobs that require flexibility, accuracy, or non-standard solutions.",
  },
];

export default function TorqueWrenchesSpecialtyToolingPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Torque Wrenches and Specialty Tooling"
        text="Explore manual, digital, and specialty tooling designed to support broader fastening, torque control, and industrial application needs."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              Torque control and specialty tooling for broader field use
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80 md:text-lg">
              This product family expands the ToughTorq lineup into manual,
              digital, and specialty tooling that supports a wider range of
              fastening, verification, and application-specific work.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {productGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600"
              >
                <h3 className="text-2xl font-semibold text-[#666666]">
                  {group.title}
                </h3>
                <p className="mt-4 leading-8 text-white/75">{group.text}</p>
                <div className="mt-6 grid gap-3">
                  {group.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white/80 transition hover:border-red-600"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Application Focus
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                Built for flexible industrial use
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                Manual torque wrenches, digital torque tools, and specialty
                tooling support a broad range of fastening and industrial tasks
                where access, accuracy, control, or task-specific fit matter.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                This category strengthens the wider ToughTorq product direction
                by covering applications that go beyond core hydraulic and
                battery bolting systems.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Common Uses
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                Where this product family fits
              </h2>
              <div className="mt-8 grid gap-3">
                {applications.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white/80 transition hover:border-red-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {supportCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600"
              >
                <h3 className="text-2xl font-semibold text-[#666666]">
                  {card.title}
                </h3>
                <p className="mt-4 leading-8 text-white/75">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-8 text-center transition hover:border-red-600 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600">
              Need Product Guidance?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              Talk with ToughTorq about torque tools and specialty applications
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              If you need help selecting manual torque tools, digital options,
              or specialty equipment for a specific application, ToughTorq can
              review the need and help point you in the right direction.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                Contact ToughTorq
              </Link>
              <Link
                href="/find-a-distributor"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Find a Distributor
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}