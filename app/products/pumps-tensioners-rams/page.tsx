import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const productGroups = [
  {
    title: "Hydraulic Pumps",
    text: "ToughTorq hydraulic pumps are built to support controlled bolting applications with dependable pressure delivery, practical field use, and compatibility across hydraulic tool systems.",
    bullets: [
      "Consistent pressure output for industrial bolting work",
      "Built for field use, shutdowns, and maintenance support",
      "Designed to pair with torque and tensioning equipment",
    ],
  },
  {
    title: "Hydraulic Tensioners",
    text: "Hydraulic tensioning solutions are intended for applications where direct bolt load control, joint consistency, and repeatable performance are critical to the fastening process.",
    bullets: [
      "Supports controlled bolt loading",
      "Designed for critical joint applications",
      "Suitable for repeatable industrial fastening work",
    ],
  },
  {
    title: "Hydraulic Rams",
    text: "Hydraulic rams expand the ToughTorq product direction into force-driven applications where controlled movement, lifting, separation, or support functions are required in industrial environments.",
    bullets: [
      "Supports force and movement applications",
      "Built for demanding industrial environments",
      "Extends the broader hydraulic product family",
    ],
  },
];

const applications = [
  "Shutdown and turnaround support",
  "Flange and bolting operations",
  "Maintenance and industrial service work",
  "Power generation and heavy industry",
  "Pipeline, petrochemical, and process facilities",
  "Projects requiring controlled hydraulic force",
];

const supportCards = [
  {
    title: "Built Around System Compatibility",
    text: "Pumps, tensioners, and rams are part of a broader hydraulic product family that supports practical compatibility across field applications.",
  },
  {
    title: "Focused on Industrial Durability",
    text: "This category is positioned around dependable performance, controlled output, and equipment that fits the reality of industrial environments.",
  },
  {
    title: "Designed to Grow With the Line",
    text: "As the ToughTorq platform expands, this family supports a broader bolting and hydraulic equipment offering for distributors and end users.",
  },
];

export default function PumpsTensionersRamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Pumps, Tensioners, and Rams"
        text="Explore hydraulic support equipment built to expand the ToughTorq product family across bolting, force, and controlled-load applications."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
              Hydraulic support equipment for industrial applications
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80 md:text-lg">
              This product family extends the ToughTorq offering beyond core torque
              tools into hydraulic equipment that supports bolting operations,
              controlled loading, and broader industrial force applications.
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
                Built for practical industrial use
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                Pumps, tensioners, and rams serve a wide range of industrial
                environments where controlled hydraulic performance, dependable
                equipment, and application-focused support are essential.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                This category helps support the broader ToughTorq direction by
                extending the product line into complementary hydraulic equipment
                for distributors, service providers, and industrial users.
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
              Talk with ToughTorq about the right hydraulic support equipment
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              Whether you need support for bolting systems, hydraulic force
              applications, or broader equipment selection, ToughTorq can review
              the application and help point you in the right direction.
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