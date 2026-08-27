import Link from "next/link";

const pumpGroups = [
  {
    title: "48V Lithium Battery Torque Pump",
    description:
      "Portable cordless hydraulic power for field bolting and remote applications.",
    models: [
      {
        model: "TTQ-BATT-10K-48V",
        type: "Battery",
        pressure: "10,000 PSI",
        application: "Hydraulic torque wrench operation",
      },
    ],
  },
  {
    title: "Electric Torque Pumps",
    description:
      "Electric hydraulic power units for controlled torque wrench operation.",
    models: [
      {
        model: "KLW-2000",
        type: "Electric",
        pressure: "10,000 PSI",
        application: "Hydraulic torque tools",
      },
      {
        model: "KLW-3000",
        type: "Electric",
        pressure: "10,000 PSI",
        application: "Hydraulic torque tools",
      },
    ],
  },
  {
    title: "Pneumatic Torque Pumps",
    description:
      "Air-powered hydraulic pumps suited for industrial bolting environments.",
    models: [
      {
        model: "KAT-3000",
        type: "Pneumatic",
        pressure: "10,000 PSI",
        application: "Hydraulic torque tools",
      },
    ],
  },
  {
    title: "Electric Hydraulic Pumps",
    description:
      "Hydraulic power units for single-acting and double-acting cylinders and tools.",
    models: [
      { model: "KHE-35M", type: "Electric", pressure: "10,000 PSI", application: "Single-acting tools" },
      { model: "KHE-35S", type: "Electric", pressure: "10,000 PSI", application: "Double-acting tools" },
      { model: "KHE-30M", type: "Electric", pressure: "10,000 PSI", application: "Single-acting tools" },
      { model: "KHE-30S", type: "Electric", pressure: "10,000 PSI", application: "Double-acting tools" },
      { model: "KHE-45M", type: "Electric", pressure: "10,000 PSI", application: "Single-acting tools" },
      { model: "KHE-45S", type: "Electric", pressure: "10,000 PSI", application: "Double-acting tools" },
      { model: "KHE-50M", type: "Electric", pressure: "10,000 PSI", application: "Single-acting tools" },
      { model: "KHE-50S", type: "Electric", pressure: "10,000 PSI", application: "Double-acting tools" },
      { model: "KHE-65M", type: "Electric", pressure: "10,000 PSI", application: "Single-acting tools" },
      { model: "KHE-65S", type: "Electric", pressure: "10,000 PSI", application: "Double-acting tools" },
      { model: "KHE-80M", type: "Electric", pressure: "10,000 PSI", application: "Hydraulic tooling" },
    ],
  },
  {
    title: "Manual & Air-Operated Pumps",
    description:
      "Portable hydraulic pumps for maintenance, field service, and cylinder operation.",
    models: [
      { model: "TTM-141", type: "Hand Pump", pressure: "10,000 PSI", application: "Portable hydraulic tools" },
      { model: "TTM-221", type: "Hand Pump", pressure: "10,000 PSI", application: "Portable hydraulic tools" },
      { model: "TT-HFP", type: "Foot Pump", pressure: "10,000 PSI", application: "Portable hydraulic tools" },
      { model: "TT-AFP", type: "Air Foot Pump", pressure: "10,000 PSI", application: "Portable hydraulic tools" },
      { model: "PQM-V", type: "Gas Engine", pressure: "10,000 PSI", application: "Field hydraulic power" },
      { model: "PQM-H", type: "Gas Engine", pressure: "10,000 PSI", application: "Field hydraulic power" },
    ],
  },
  {
    title: "Ultra-High-Pressure Pumps",
    description:
      "Specialized high-pressure systems for bolt tensioners, hydraulic nuts, and bearing applications.",
    models: [
      { model: "KATP-150", type: "Pneumatic", pressure: "21,750 PSI", application: "Bolt tensioning" },
      { model: "KATP-200", type: "Pneumatic", pressure: "29,000 PSI", application: "Bolt tensioning" },
      { model: "KATP-250", type: "Pneumatic", pressure: "36,250 PSI", application: "Bolt tensioning" },
      { model: "KEPW-1500", type: "Electric", pressure: "21,750 PSI", application: "Ultra-high-pressure tools" },
      { model: "KEPW-2000", type: "Electric", pressure: "29,000 PSI", application: "Ultra-high-pressure tools" },
      { model: "KEPW-2500", type: "Electric", pressure: "36,250 PSI", application: "Ultra-high-pressure tools" },
      { model: "KEPW-2900", type: "Electric", pressure: "42,050 PSI", application: "Ultra-high-pressure tools" },
    ],
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

export default function HydraulicPumpsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Hydraulic Power
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Hydraulic Pumps
            <br />
            & Power Units
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Battery, electric, pneumatic, manual, and ultra-high-pressure
            hydraulic power systems for torque tools, cylinders, tensioners,
            hydraulic nuts, pullers, and specialty equipment.
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

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Pump Families
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Select by power source and application
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            {pumpGroups.map((group) => (
              <section
                key={group.title}
                className="overflow-hidden rounded-xl border border-[#dddddd] bg-white"
              >
                <div className="border-b border-[#dddddd] px-5 py-6 md:px-7">
                  <h3 className="text-2xl font-semibold text-[#3f4448]">
                    {group.title}
                  </h3>

                  <p className="mt-2 max-w-3xl leading-7 text-[#555555]">
                    {group.description}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="bg-[#d90f16] text-white">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Model</th>
                        <th className="px-5 py-4 font-semibold">Power Source</th>
                        <th className="px-5 py-4 font-semibold">Max Pressure</th>
                        <th className="px-5 py-4 font-semibold">Application</th>
                      </tr>
                    </thead>

                    <tbody>
                      {group.models.map((pump, index) => (
                        <tr
                          key={pump.model}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
                          }
                        >
                          <td className="border-b border-r border-[#dddddd] px-5 py-4">
                            <QuoteModelLink
                              model={pump.model}
                              product={group.title}
                            />
                          </td>

                          <td className="border-b border-r border-[#dddddd] px-5 py-4 text-[#444444]">
                            {pump.type}
                          </td>

                          <td className="border-b border-r border-[#dddddd] px-5 py-4 text-[#444444]">
                            {pump.pressure}
                          </td>

                          <td className="border-b border-[#dddddd] px-5 py-4 text-[#444444]">
                            {pump.application}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Pump Cutsheets
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Battery Torque Pump Cutsheet",
                "Electric Torque Pump Cutsheet",
                "Pneumatic Torque Pump Cutsheet",
                "Electric Hydraulic Pump Cutsheet",
                "Manual & Air Pump Cutsheet",
                "Ultra-High-Pressure Pump Cutsheet",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#dddddd] bg-white p-4"
                >
                  <p className="font-semibold text-[#444444]">{item}</p>
                  <p className="mt-1 text-sm text-[#777777]">
                    Download coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Pump Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Match the pump to the tool
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Pump selection should account for required operating pressure,
              oil volume, flow rate, number of connected tools, available power
              source, and operating environment.
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
    </main>
  );
}