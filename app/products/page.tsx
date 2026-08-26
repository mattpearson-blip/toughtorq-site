import { CardGrid } from "@/components/card-grid";
import { PageHero } from "@/components/page-hero";
import { categories, productLines } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A broader bolting lineup built for real industrial applications."
        text="The ToughTorq product platform is designed to give distributors and end users a more precise, more durable, and easily serviceable alternative to generic OEM tool offerings. Each product family is positioned around durability, usability, and long-term support."
      />

      <section className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <CardGrid items={categories} />
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Product Families
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              More than a few tools. A complete industrial bolting platform.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productLines.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="group flex h-full min-h-[260px] flex-col border border-white/10 bg-neutral-950 p-6 text-left transition hover:border-red-600/60"
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