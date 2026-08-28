import Link from "next/link";

const drivePlatforms = [
  {
    model: "MC89",
    title: "MC89 Battery Valve Actuator",
    power: "Battery",
    maxTorque: "Up to 740 ft-lb",
    description:
      "Battery-powered portable valve actuator for elevated, obstructed, or difficult-to-reach valves.",
    features: [
      "Portable battery operation",
      "Fast field deployment",
      "Electronic torque and power limiting",
      "Designed for difficult valve access",
    ],
  },
  {
    model: "JA73",
    title: "JA73 Battery Valve Actuator",
    power: "Battery",
    maxTorque: "Up to 740 ft-lb",
    description:
      "Portable battery valve actuator platform for difficult valves requiring controlled force and stable positioning.",
    features: [
      "Battery powered",
      "Excellent operating autonomy",
      "Smoke-free operation",
      "Electronic torque and power limiting",
    ],
  },
  {
    model: "HL83",
    title: "HL83 Pneumatic Valve Actuator",
    power: "Pneumatic",
    maxTorque: "Up to 740 ft-lb",
    description:
      "Pneumatic portable valve actuator for high-cycle operation and applications where spark-free operation is required.",
    features: [
      "No heat, spark, or smoke",
      "ATEX-compatible operating concept",
      "High torque and speed",
      "Compact and blockage resistant",
    ],
  },
  {
    model: "PY68",
    title: "PY68 Gas Valve Actuator",
    power: "Gas",
    maxTorque: "Up to 740 ft-lb",
    description:
      "Independent fuel-powered portable actuator designed for remote environments and extended field operation.",
    features: [
      "Independent fuel-powered operation",
      "Extended operating autonomy",
      "Designed for remote locations",
      "No external electrical supply required",
    ],
  },
  {
    model: "H2O KIT",
    title: "H2O Water Network Kit",
    power: "Portable System",
    maxTorque: "Up to 630 ft-lb",
    description:
      "Portable valve operating system specifically configured for underground water-distribution valves.",
    features: [
      "Designed for underground valves",
      "Easy transport and setup",
      "Stable portable operation",
      "Water-network configuration",
    ],
  },
];

const actuatorHeads = [
  {
    title: "Straight Head",
    text: "Straight actuator geometry for direct valve access.",
  },
  {
    title: "Right-Angle Head",
    text: "Right-angle configuration for valves where direct inline access is limited.",
  },
  {
    title: "Banjo Heads",
    text: "Standard-duty and heavy-duty banjo heads for rising-stem valve applications.",
  },
];

const adaptors = [
  {
    title: "Fixed Finger Adaptor",
    text: "Fixed interface for compatible valve handwheel configurations.",
  },
  {
    title: "Self-Centering Spoke Adaptor",
    text: "Adjustable interface for different handwheel spoke patterns.",
  },
  {
    title: "Square Drive Adaptor",
    text: "Socket-driven interface for valves operated through a square-drive connection.",
  },
  {
    title: "Variable Valve Adaptors",
    text: "Configurations for fixed, variable, flat-spoke, and tapered-spoke valve interfaces.",
  },
];

const reactionDevices = [
  {
    title: "Reaction Arm",
    text: "Standard reaction support for controlled portable valve operation.",
  },
  {
    title: "Bipod",
    text: "Stable supported reaction configuration for demanding valve positions.",
  },
  {
    title: "Reaction Finger",
    text: "Compact reaction interface for specific valve and access configurations.",
  },
  {
    title: "Articulated & Custom Reaction",
    text: "Articulated arms and made-to-order mounting flanges for application-specific requirements.",
  },
];

const accessories = [
  "Torque Limiter",
  "Extensions",
  "Air Hose",
  "Counters",
  "Storage Cases",
  "Battery Packs",
  "Universal Joints",
  "Safety Units",
  "Custom Mounting Flanges",
  "Reaction Accessories",
];

const industries = [
  "Water",
  "Oil & Gas",
  "Power Generation",
  "Mining",
  "Pulp & Paper",
  "Petrochemical",
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

export default function ValveActuatorToolsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Portable Valve Actuation
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Portable Valve
            <br />
            Actuator Systems
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Portable, modular valve actuation systems for faster and more
            controlled operation of industrial valves.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Portable%20Valve%20Actuator%20Systems"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Configure a PVA System
            </Link>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              View Quote Cart →
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex min-h-[70px] items-center justify-center bg-white px-4 text-center"
              >
                <p className="text-sm font-semibold text-[#444444]">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVE PLATFORMS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Choose Your Power Supply
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Five portable valve actuation platforms
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Select the drive platform based on the work environment, valve
            location, available utilities, operating frequency, and required
            torque.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {drivePlatforms.map((drive) => (
              <div
                key={drive.model}
                className="overflow-hidden rounded-xl border border-[#dddddd] bg-[#fafafa] transition hover:border-[#ed1c24]"
              >
                <div className="border-b border-[#dddddd] bg-white p-6">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                        {drive.power}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                        {drive.title}
                      </h3>
                    </div>

                    <div className="rounded-lg bg-[#ed1c24] px-4 py-2 text-sm font-bold text-white">
                      {drive.maxTorque}
                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-[#555555]">
                    {drive.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {drive.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-3 rounded-lg border border-[#dddddd] bg-white p-3 text-sm text-[#555555]"
                      >
                        <span className="font-bold text-[#ed1c24]">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <QuoteModelLink
                      model={drive.model}
                      product="Portable Valve Actuator Systems"
                    />

                    <Link
                      href={`/request-a-quote?model=${encodeURIComponent(
                        drive.model
                      )}&product=${encodeURIComponent(
                        "Portable Valve Actuator Systems"
                      )}`}
                      className="text-sm font-semibold text-[#ed1c24]"
                    >
                      Add to Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILD YOUR SYSTEM */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Configure Your System
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Power → Head → Adaptor → Reaction → Options
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-5">
            {[
              ["01", "Power"],
              ["02", "Head"],
              ["03", "Adaptor"],
              ["04", "Reaction"],
              ["05", "Options"],
            ].map(([number, title]) => (
              <div key={title} className="bg-white p-5">
                <p className="text-xs font-bold text-[#ed1c24]">{number}</p>
                <p className="mt-2 text-lg font-semibold text-[#3f4448]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEADS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Step 2
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Actuator Heads
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Choose the head geometry that matches the valve position, stem
            configuration, and available working clearance.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {actuatorHeads.map((head) => (
              <div
                key={head.title}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6"
              >
                <h3 className="text-xl font-semibold text-[#3f4448]">
                  {head.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {head.text}
                </p>

                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(
                    head.title
                  )}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[#ed1c24]"
                >
                  Request Information →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADAPTORS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Step 3
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Valve Adaptors
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Match the portable actuator to the valve handwheel, spokes, stem,
            or square-drive interface.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {adaptors.map((adaptor) => (
              <div
                key={adaptor.title}
                className="flex flex-col rounded-xl border border-[#dddddd] bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-[#3f4448]">
                  {adaptor.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#555555]">
                  {adaptor.text}
                </p>

                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(
                    adaptor.title
                  )}`}
                  className="mt-5 text-sm font-semibold text-[#ed1c24]"
                >
                  Add to Request →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REACTION */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Step 4
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Reaction Management
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Stabilize the actuator using the reaction device best suited to the
            valve configuration and operator position.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reactionDevices.map((reaction) => (
              <div
                key={reaction.title}
                className="flex flex-col rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
              >
                <h3 className="text-lg font-semibold text-[#3f4448]">
                  {reaction.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#555555]">
                  {reaction.text}
                </p>

                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(
                    reaction.title
                  )}`}
                  className="mt-5 text-sm font-semibold text-[#ed1c24]"
                >
                  Add to Request →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Step 5
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Options & Accessories
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Add torque control, reach, transport, power, reaction, or utility
            components to complete the valve actuation package.
          </p>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-5">
            {accessories.map((accessory) => (
              <Link
                key={accessory}
                href={`/request-a-quote?product=${encodeURIComponent(
                  `PVA ${accessory}`
                )}`}
                className="flex min-h-[80px] items-center justify-between gap-3 bg-white p-5 text-sm font-semibold text-[#444444] transition hover:text-[#ed1c24]"
              >
                <span>{accessory}</span>
                <span className="text-[#ed1c24]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Benefits
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Portable valve operation
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Operator Safety
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#3f4448]">
                Reduce manual strain
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Reduce physical effort and limit exposure around difficult or
                repetitive valve operations.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Equipment Protection
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#3f4448]">
                Controlled operation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Controlled torque helps protect valves and surrounding
                equipment during operation.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Productivity
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#3f4448]">
                Operate repetitive valves faster
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#555555]">
                Portable powered operation can improve productivity across
                networks containing many manually operated valves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[#dddddd] bg-white p-6 md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Configure a System
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#3f4448]">
                Need a complete portable valve actuator package?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#666666]">
                Send the valve type, handwheel or stem configuration, required
                torque, access conditions, preferred power source, and expected
                operating environment.
              </p>
            </div>

            <Link
              href="/request-a-quote?product=Portable%20Valve%20Actuator%20System"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              Configure PVA System
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}