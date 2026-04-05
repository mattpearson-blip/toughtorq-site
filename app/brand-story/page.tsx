import { PageHero } from "@/components/page-hero";

export default function BrandStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Story"
        title="Built with international roots. Focused on the U.S. market."
        text="ToughTorq is positioned as a premium industrial bolting manufacturer with international presence and a deliberate expansion into the United States through Tough Tools US and a focused network of distribution partners."
      />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="max-w-3xl text-lg leading-8 text-white/85">
              The brand should feel established, disciplined, and built for
              serious industrial work. ToughTorq is designed to communicate
              stronger product value, cleaner manufacturer positioning, and a
              long-term roadmap that gives distributors and end users more
              confidence than a generic equipment site ever could.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">
              The message is simple: deliver premium tools, support strong
              distributor relationships, and build long-term trust with the end
              user.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-white/10 bg-neutral-950 p-8 transition hover:border-red-600/60">
              <div className="text-xl font-black uppercase text-[#666666]">
                Why the positioning works
              </div>
              <ul className="mt-6 space-y-4 text-white/85">
                <li>• Creates a stronger brand story than a generic equipment site.</li>
                <li>• Supports premium pricing without sounding inflated or empty.</li>
                <li>• Leaves room to expand across multiple bolting categories.</li>
                <li>• Gives distributors a cleaner story to take to their customers.</li>
                <li>• Frames ToughTorq as a solutions-focused industrial partner.</li>
              </ul>
            </div>

            <div className="border border-red-600/30 bg-black p-8 transition hover:border-red-600/60">
              <div className="text-xl font-black uppercase text-[#666666]">
                What ToughTorq stands against
              </div>
              <p className="mt-4 leading-8 text-white/85">
                The modern tooling market is crowded with equipment that looks
                acceptable on paper but fails to deliver long-term value in the
                field. ToughTorq stands against generic, built-to-break
                equipment, weak support models, and product strategies that
                leave distributors and end users carrying the cost of poor
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}