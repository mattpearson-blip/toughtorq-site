import { CardGrid } from "@/components/card-grid";
import { LogoBackground } from "@/components/logo-background";
import {
  categories,
  differentiators,
  industries,
  pillars,
  stats,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <LogoBackground />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex rounded-md border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#666666]">
              Premium Industrial Bolting Manufacturer
            </div>
            <h1 className="max-w-5xl text-4xl font-black uppercase leading-tight text-[#666666] sm:text-5xl md:text-6xl lg:text-7xl">
              Built to Outlast.{" "}
              <span className="text-red-600">Built to Perform.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 md:text-xl">
              ToughTorq is a premium industrial bolting brand focused on
              building tools that outlast and outperform today&apos;s tooling
              marketplace, too often filled with generic, overpriced equipment
              that is built to break and leaves crews with headaches instead of
              solutions. From demanding field applications to precision
              manufacturing, ToughTorq tools are built to fit the needs of the
              end user.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/products"
                className="rounded-xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-bold uppercase text-white hover:opacity-90"
              >
                Explore Products
              </a>
              <a
                href="/contact"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase text-white hover:bg-white/10"
              >
                Request Quote
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {pillars.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85 transition hover:border-red-600/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-white/10 bg-neutral-900/90 p-6 transition hover:border-red-600/60"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#666666]">
                    {stat.label}
                  </div>
                  <div className="mt-3 text-2xl font-black leading-snug text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-red-600/40 bg-neutral-950/90 p-6 transition hover:border-red-600/60">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white">
                Brand Standard
              </div>
              <div className="mt-3 text-2xl font-black uppercase text-[#666666]">
                Premium tools. Serious applications. No generic shortcuts.
              </div>
              <p className="mt-4 max-w-lg text-white/85">
                ToughTorq is built to deliver more precise, more durable, and
                more serviceable tooling for industrial users who expect better
                performance than generic OEM equipment can provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Product Platform
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              A broader bolting lineup built around real-world applications.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              ToughTorq is not limited to one or two core products. The brand is
              being built as a complete industrial bolting platform capable of
              supporting field service teams, manufacturing operations,
              maintenance groups, and end users who need equipment that performs
              under pressure.
            </p>
          </div>
          <div className="mt-10">
            <CardGrid items={categories} />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Where ToughTorq Fits
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Built for industries where failure is expensive.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
              ToughTorq is designed to fit the environments where reliability
              matters most. The brand should speak directly to industrial users
              who operate in maintenance, shutdown, turnaround, production,
              assembly, and field service conditions where a weak tool, poor
              fit, or unreliable output creates downtime and unnecessary cost.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-neutral-950 px-4 py-4 text-sm font-semibold uppercase tracking-wide text-white/85 transition hover:border-red-600/60"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Why Choose ToughTorq
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Built around value that lasts longer than the first sale.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[250px] flex-col border border-white/10 bg-black p-6 transition hover:border-red-600/60"
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
    </>
  );
}