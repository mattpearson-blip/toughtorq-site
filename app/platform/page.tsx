import { PageHero } from "@/components/page-hero";
import { productLines } from "@/lib/site-data";

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="A complete industrial bolting platform."
        text="ToughTorq is being built around a broader system of product families designed to support real industrial applications, long-term distributor growth, and cleaner product positioning."
      />

      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productLines.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="group flex min-h-[280px] flex-col border border-white/10 bg-black p-6 text-left transition hover:border-red-600/60"
              >
                <div className="text-lg font-black uppercase tracking-tight text-[#666666]">
                  {item.title}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/85">
                  {item.text}
                </p>
                <div className="mt-auto pt-6 text-sm font-bold uppercase tracking-wide text-red-600 transition group-hover:text-white">
                  View Platform
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}