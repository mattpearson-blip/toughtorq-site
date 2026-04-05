import { PageHero } from "@/components/page-hero";
import {
  batteryAdvantages,
  batteryApplications,
  batteryFaqs,
  batteryFeatures,
  batteryModels,
  batteryWhyChoose,
} from "@/lib/site-data";

export default function BatteryTorqueGunsPage() {
  return (
    <>
      <PageHero
        eyebrow="Battery Torque Guns"
        title="BT Series battery torque guns built for speed, consistency, and real industrial use."
        text="The BT Series covers approximately 70 to 6,000 ft-lbs and is positioned for crews that need cordless mobility, repeatable torque output, and reduced setup time without giving up the feel of a serious industrial tool."
      />

      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              BT Series Platform
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Faster deployment. Cleaner execution. Premium industrial feel.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
              ToughTorq battery torque guns are designed for crews that need
              professional torque control without hydraulic setup time. This
              family should be positioned as a premium alternative to generic
              cordless torque options that fall short on durability, support, or
              long-term value.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">
              The BT Series is a strong entry point into applications where
              users want clean deployment, trusted battery-platform familiarity,
              and productivity gains in the field. It should feel like a serious
              industrial tool family that fits neatly into maintenance,
              production, and field-service environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-bold uppercase text-white hover:opacity-90"
              >
                Request Battery Tool Quote
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
            <img
              src="/TOUGH-TORQ-BT-GUN.png"
              alt="ToughTorq BT Series battery torque gun"
              className="mx-auto h-auto w-full max-w-xl"
            />
            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#666666]">
                Positioning Snapshot
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {batteryWhyChoose.map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-neutral-950 px-4 py-4 text-sm font-semibold text-white/85 transition hover:border-red-600/60"
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Key Features
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              What makes the BT Series matter.
            </h2>
            <div className="mt-8 space-y-4">
              {batteryFeatures.map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-neutral-950 px-5 py-4 text-sm font-medium text-white/85 transition hover:border-red-600/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Ideal Applications
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Where battery torque guns create the most value.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {batteryApplications.map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-neutral-950 px-5 py-5 text-sm font-semibold uppercase tracking-wide text-white/85 transition hover:border-red-600/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Why Battery Torque Guns
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Where the BT Series creates real productivity value.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              The BT Series should be presented as a practical solution for
              applications where crews want faster deployment, less setup
              burden, and cleaner job execution while still maintaining a
              professional level of torque control. This is where cordless
              performance can become a real operational advantage.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {batteryAdvantages.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-black p-6 transition hover:border-red-600/60"
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

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Model Lineup
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              BT Series coverage from lighter maintenance work to heavier
              industrial tightening.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              The lineup is structured to give distributors and end users a
              clear progression across torque output, tool size, and
              application fit. That makes the BT Series easier to quote, easier
              to position, and easier to grow inside real industrial accounts.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {batteryModels.map((item) => (
              <div
                key={item.model}
                className="border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600/60"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                  {item.model}
                </div>
                <div className="mt-3 text-xl font-black uppercase text-[#666666]">
                  {item.torque}
                </div>
                <div className="mt-4 grid gap-2 text-sm text-white/85">
                  <div>
                    <span className="font-semibold text-[#666666]">Square Drive:</span>{" "}
                    {item.drive}
                  </div>
                  <div>
                    <span className="font-semibold text-[#666666]">D:</span>{" "}
                    {item.diameter}
                  </div>
                  <div>
                    <span className="font-semibold text-[#666666]">L:</span>{" "}
                    {item.length}
                  </div>
                  <div>
                    <span className="font-semibold text-[#666666]">H:</span>{" "}
                    {item.height}
                  </div>
                  <div>
                    <span className="font-semibold text-[#666666]">Speed:</span>{" "}
                    {item.speed}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                Compare Models
              </div>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
                A clean spec table for quoting and product comparison.
              </h2>
            </div>
            <a
              href="/BT-Series-Cut-Sheet.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase text-white hover:bg-white/10"
            >
              Download BT Series Cut Sheet
            </a>
          </div>

          <div className="mt-12 overflow-x-auto border border-white/10 bg-black transition hover:border-red-600/60">
            <table className="min-w-full text-left text-sm text-white/85">
              <thead className="bg-neutral-900 text-xs uppercase tracking-[0.18em] text-[#666666]">
                <tr>
                  <th className="px-4 py-4">Model</th>
                  <th className="px-4 py-4">Torque Range</th>
                  <th className="px-4 py-4 text-center">Square Drive</th>
                  <th className="px-4 py-4">D</th>
                  <th className="px-4 py-4">L</th>
                  <th className="px-4 py-4">H</th>
                  <th className="px-4 py-4">Speed</th>
                </tr>
              </thead>
              <tbody>
                {batteryModels.map((item) => (
                  <tr key={`${item.model}-row`} className="border-t border-white/10">
                    <td className="px-4 py-4 font-bold text-[#666666]">{item.model}</td>
                    <td className="px-4 py-4">{item.torque}</td>
                    <td className="px-4 py-4 text-center">{item.drive}</td>
                    <td className="px-4 py-4">{item.diameter}</td>
                    <td className="px-4 py-4">{item.length}</td>
                    <td className="px-4 py-4">{item.height}</td>
                    <td className="px-4 py-4">{item.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Support Model
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Built for distributor-led quoting, support, and growth.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
              The BT Series should fit cleanly into a distributor-led support
              model. That means quote requests flow through the right local
              distributor, application fit is discussed clearly, and the product
              family is presented as part of a broader industrial bolting system
              rather than as a standalone commodity tool.
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

          <div className="border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600/60">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Typical Fit
            </div>
            <div className="mt-4 space-y-4 text-white/85">
              <p>• Plants and maintenance groups that want cleaner torque deployment.</p>
              <p>• Service teams looking to reduce setup time on appropriate applications.</p>
              <p>• Distributors that want a broader premium cordless offering.</p>
              <p>• Users who need a torque platform that scales from lighter work to higher-output tightening.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Battery Torque Guns FAQ
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Clear answers for distributors and end users.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {batteryFaqs.map((item) => (
              <div
                key={item.q}
                className="border border-white/10 bg-black p-6 transition hover:border-red-600/60"
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