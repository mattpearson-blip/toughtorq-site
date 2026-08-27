import Image from "next/image";
import Link from "next/link";

const batteryModels = [
  {
    model: "BT05-350",
    torque: "74 – 369",
    drive: '3/4"',
    d: "2.36",
    l: "10.63",
    k: "9.65",
    speed: "26",
    weight: "9.5",
  },
  {
    model: "BT10-700",
    torque: "96 – 738",
    drive: '3/4"',
    d: "2.91",
    l: "10.91",
    k: "9.65",
    speed: "18",
    weight: "10.6",
  },
  {
    model: "BT15-1000",
    torque: "133 – 1,106",
    drive: '1"',
    d: "2.99",
    l: "12.48",
    k: "9.65",
    speed: "8",
    weight: "11.5",
  },
  {
    model: "BT20-1500",
    torque: "184 – 1,549",
    drive: '1"',
    d: "2.99",
    l: "12.48",
    k: "9.65",
    speed: "6",
    weight: "12.1",
  },
  {
    model: "BT30-2200",
    torque: "354 – 2,286",
    drive: '1"',
    d: "3.39",
    l: "13.39",
    k: "9.65",
    speed: "3.5",
    weight: "16.5",
  },
  {
    model: "BT40-2900",
    torque: "479 – 2,950",
    drive: '1"',
    d: "3.74",
    l: "13.78",
    k: "9.65",
    speed: "3.2",
    weight: "20.9",
  },
  {
    model: "BT50-3600",
    torque: "627 – 3,688",
    drive: '1-1/2"',
    d: "4.06",
    l: "13.98",
    k: "9.65",
    speed: "2.5",
    weight: "22.0",
  },
  {
    model: "BT60-4400",
    torque: "811 – 4,425",
    drive: '1-1/2"',
    d: "4.33",
    l: "15.75",
    k: "9.65",
    speed: "1.8",
    weight: "26.5",
  },
  {
    model: "BT80-6000",
    torque: "1,401 – 5,900",
    drive: '1-1/2"',
    d: "4.53",
    l: "16.34",
    k: "9.65",
    speed: "1.5",
    weight: "30.9",
  },
];

const features = [
  "Digital torque and angle settings",
  "Quick-charge system under 60 minutes",
  "Torque tracking capability",
  "Digital torque control system",
  "Digital setting display",
  "Brushless motor",
  "Tightening and loosening repeatability under 5%",
  "Heavy-duty transport and storage case",
];

const applications = [
  "Industrial Maintenance",
  "Shutdowns & Turnarounds",
  "Structural Bolting",
  "Power Generation",
  "Oil & Gas",
  "Manufacturing",
  "Mining",
  "Heavy Equipment",
];

function QuoteModelLink({ model }: { model: string }) {
  return (
    <Link
      href={`/request-a-quote?model=${encodeURIComponent(
        model
      )}&product=${encodeURIComponent("Digital Battery Torque Gun")}`}
      className="font-semibold text-[#ed1c24] underline-offset-4 transition hover:underline"
    >
      {model}
    </Link>
  );
}

export default function BatteryTorqueGunsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
              Battery Torque Tools
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
              Digital Battery
              <br />
              Torque Guns
            </h1>

            <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#353535]">
              Portable high-torque tools with digital torque and angle control
              for industrial bolting applications.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-a-quote"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Request a Quote
              </Link>

              <Link
                href="/request-a-quote"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
              >
                View Quote Cart →
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] md:min-h-[440px] lg:min-h-[500px]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(237,28,36,0.05)_0%,rgba(255,255,255,0)_70%)]" />

            <Image
              src="/battery-torque-gun.png"
              alt="ToughTorq digital battery torque gun"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                BT Series
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
                Cordless controlled bolting
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#444444]">
                ToughTorq BT Series battery torque guns combine cordless
                operation with digital torque control for installation,
                maintenance, shutdown, and field bolting applications.
              </p>

              <div className="mt-8 overflow-hidden rounded-xl border border-[#dddddd] bg-white">
                <div className="grid sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div
                      key={feature}
                      className={`flex min-h-[64px] items-center gap-3 px-4 py-3 text-sm text-[#333333] ${
                        index < features.length - 2
                          ? "border-b border-[#e4e4e4]"
                          : ""
                      } ${
                        index % 2 === 0
                          ? "sm:border-r sm:border-[#e4e4e4]"
                          : ""
                      }`}
                    >
                      <span className="text-xl font-bold text-[#ed1c24]">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] rounded-2xl bg-white md:min-h-[390px]">
              <Image
                src="/battery-torque-gun.png"
                alt="ToughTorq battery torque gun dimensions"
                fill
                className="object-contain p-8 opacity-25"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl border border-[#dddddd] bg-white/95 px-6 py-4 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#666666]">
                    Technical Drawing
                  </p>
                  <p className="mt-2 text-sm text-[#777777]">
                    Full dimensional drawing will be added from the catalogue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODEL TABLE */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                BT Series – Battery Torque Gun Models
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="text-sm font-semibold text-[#ed1c24]"
            >
              View Quote Cart →
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#d6d6d6]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-center text-sm">
                <thead className="bg-[#d90f16] text-white">
                  <tr>
                    <th className="px-4 py-4 font-semibold">Model</th>
                    <th className="px-4 py-4 font-semibold">
                      Torque Range
                      <br />
                      (ft-lb)
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      Square Drive
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      D
                      <br />
                      (in.)
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      L
                      <br />
                      (in.)
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      K
                      <br />
                      (in.)
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      Speed
                      <br />
                      (rpm)
                    </th>
                    <th className="px-4 py-4 font-semibold">
                      Weight
                      <br />
                      (lb)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {batteryModels.map((tool, index) => (
                    <tr
                      key={tool.model}
                      className={
                        index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
                      }
                    >
                      <td className="border-b border-r border-[#dddddd] px-4 py-3">
                        <QuoteModelLink model={tool.model} />
                      </td>

                      <td className="border-b border-r border-[#dddddd] px-4 py-3">
                        {tool.torque}
                      </td>

                      <td className="border-b border-r border-[#dddddd] px-4 py-3">
                        {tool.drive}
                      </td>

                      <td className="border-b border-r border-[#dddddd] px-4 py-3">
                        {tool.d}
                      </td>

                      <td className="border-b border-r border-[#dddddd] px-4 py-3">
                        {tool.l}
                      </td>

                      <td className="border-b border-r border-[#dddddd] px-4 py-3">
                        {tool.k}
                      </td>

                      <td className="border-b border-r border-[#dddddd] px-4 py-3">
                        {tool.speed}
                      </td>

                      <td className="border-b border-[#dddddd] px-4 py-3">
                        {tool.weight}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS & DOWNLOADS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Built for Field Bolting
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Applications
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#e1e1e1] bg-[#e1e1e1] sm:grid-cols-4">
              {applications.map((application) => (
                <div
                  key={application}
                  className="flex min-h-[100px] items-center justify-center bg-white p-4 text-center text-sm font-medium text-[#444444]"
                >
                  {application}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              BT Series Downloads
            </h2>

            <div className="mt-6 rounded-xl border border-[#dddddd] bg-[#fafafa] p-5">
              <div className="flex gap-4">
                <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-[#ed1c24] text-xl font-bold text-[#ed1c24]">
                  PDF
                </div>

                <div>
                  <p className="font-semibold text-[#333333]">
                    Digital Battery Torque Gun Cutsheet
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#666666]">
                    Detailed specifications, dimensions, torque ranges, and
                    performance information.
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[#ed1c24]">
                    Download coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:flex-row">
            <p className="text-lg font-semibold text-[#3f4448]">
              Need help choosing the right model?
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