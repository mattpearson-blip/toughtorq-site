import Link from "next/link";

const torqueTools = [
  {
    title: "Digital Battery Torque Guns",
    text: "Cordless digital torque tools with torque and angle control for industrial bolting.",
    models: [
      "BT05-350",
      "BT10-700",
      "BT15-1000",
      "BT20-1500",
      "BT30-2200",
      "BT40-2900",
      "BT50-3600",
      "BT60-4400",
      "BT80-6000",
    ],
  },
  {
    title: "Pneumatic Torque Wrenches",
    text: "Air-powered torque tools for continuous-duty industrial bolting applications.",
    models: [
      "PT05-350SS",
      "PT10-700SS",
      "PT15-1000SS",
      "PT20-1500SS",
      "PT30-2200SS",
      "PT40-2900SS",
      "PT60-4400SS",
      "PT80-6000SS",
    ],
  },
  {
    title: "Digital Manual Torque Wrenches",
    text: "Digital hand torque wrenches with interchangeable head options and controlled torque measurement.",
    models: [
      "TTDMT-20",
      "TTDMT-30",
      "TTDMT-60",
      "TTDMT-135",
      "TTDMT-135-L",
      "TTDMT-200",
      "TTDMT-340",
      "TTDMT-400",
      "TTDMT-500",
      "TTDMT-850",
      "TTDMT-1000",
    ],
  },
];

const multiplierGroups = [
  {
    title: "Z Type Manual Torque Multipliers",
    text: "Compact planetary gear multipliers for controlled torque output in confined areas.",
    models: [
      "TM10W-4.5",
      "TM20W-12",
      "TM35W-15",
      "TM55W-18.15",
      "TM75W-20",
      "TM100W-26.5",
    ],
  },
  {
    title: "L Type Manual Torque Multipliers",
    text: "Offset manual torque multipliers for applications requiring additional access and reaction clearance.",
    models: [
      "TM10F-5",
      "TM20F-13.3",
      "TM35F-16",
      "TM55F-21.5",
      "TM75F-24",
      "TM100F-32",
      "TM150F-50",
      "TM200F-72",
    ],
  },
];

const specialtyGroups = [
  {
    title: "Portable Valve Actuator Systems",
    text: "Portable systems for repetitive valve operation in industrial, utility, and remote applications.",
  },
  {
    title: "Reaction Washers",
    text: "Controlled-reaction washer systems designed to reduce external reaction-arm requirements.",
  },
  {
    title: "Hydraulic Puller Sets",
    text: "Hydraulic grip, bearing, and crossing puller sets for controlled component removal.",
  },
  {
    title: "Mechanical & Hydraulic Nut Splitters",
    text: "Mechanical and hydraulic nut removal tools for corroded, seized, or damaged fasteners.",
  },
  {
    title: "Flange Tools",
    text: "Hydraulic and mechanical flange spreaders, lifting devices, and alignment tools.",
  },
  {
    title: "Bearing Heaters",
    text: "Portable induction heating systems for controlled bearing installation and maintenance.",
  },
];

function QuoteModelLink({
  model,
  product,
}: {
  model: string;
  product: string;
}) {
  return (
    <Link
      href={`/request-a-quote?model=${encodeURIComponent(
        model
      )}&product=${encodeURIComponent(product)}`}
      className="font-semibold text-[#ed1c24] underline-offset-4 transition hover:underline"
    >
      {model}
    </Link>
  );
}

export default function TorqueWrenchesSpecialtyToolingPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Torque & Specialty Tools
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Torque Wrenches
            <br />
            & Specialty Tooling
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Battery, pneumatic, manual, valve, reaction, flange, pulling, and
            specialty tools for industrial maintenance and bolting work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              Request a Quote
            </Link>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333]"
            >
              View Quote Cart →
            </Link>
          </div>
        </div>
      </section>

      {/* TORQUE TOOLS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Controlled Torque
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Powered & Manual Torque Tools
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {torqueTools.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-2xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {group.text}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                  {group.models.map((model) => (
                    <QuoteModelLink
                      key={model}
                      model={model}
                      product={group.title}
                    />
                  ))}
                </div>

                <p className="mt-5 text-xs uppercase tracking-[0.12em] text-[#777777]">
                  Select a model to add it to your quote
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TORQUE MULTIPLIERS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Mechanical Torque
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Manual Torque Multipliers
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {multiplierGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6"
              >
                <h3 className="text-2xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-3 leading-7 text-[#555555]">
                  {group.text}
                </p>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {group.models.map((model) => (
                    <div
                      key={model}
                      className="rounded-lg border border-[#dddddd] bg-white px-4 py-3"
                    >
                      <QuoteModelLink
                        model={model}
                        product={group.title}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTY */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Specialty Equipment
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Industrial Specialty Tools
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialtyGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#dddddd] bg-white p-6 transition hover:border-[#ed1c24]"
              >
                <h3 className="text-xl font-semibold text-[#3f4448]">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {group.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Additional Tooling
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Supporting Industrial Equipment
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Reaction Washers",
              "Hydraulic Pullers",
              "Nut Splitters",
              "Flange Spreaders",
              "Flange Alignment Tools",
              "Hydraulic Lifting Devices",
              "Mechanical Gear Pullers",
              "Hydraulic Gear Pullers",
              "Bearing Induction Heaters",
              "Valve Actuator Accessories",
              "Reaction Accessories",
              "Custom Tooling",
            ].map((item) => (
              <div key={item} className="bg-white p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Product Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Pneumatic Torque Wrench Cutsheet",
                "Digital Manual Torque Wrench Cutsheet",
                "Manual Torque Multiplier Cutsheet",
                "Portable Valve Actuator Cutsheet",
                "Reaction Washer Technical Data",
                "Flange Tool Cutsheets",
                "Puller & Bearing Tool Cutsheets",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#dddddd] bg-[#fafafa] p-4"
                >
                  <p className="font-semibold text-[#444444]">{item}</p>

                  <p className="mt-1 text-sm text-[#777777]">
                    Download coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Application Support
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Need help selecting a tool?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Tool selection depends on required torque, available access,
              fastener size, power source, operating environment, reaction
              requirements, and application type.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Application Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:flex-row">
            <p className="text-lg font-semibold text-[#3f4448]">
              Need pricing or product information?
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-a-quote"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request a Quote
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333]"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}