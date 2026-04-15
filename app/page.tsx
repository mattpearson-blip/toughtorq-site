import Link from "next/link";

const productCards = [
  {
    eyebrow: "Battery Tools",
    title: "Battery Torque Guns",
    text: "Portable torque solutions designed for mobility, repeatability, and faster field execution across industrial bolting work.",
    href: "/products/battery-torque-guns",
    cta: "Explore Battery Torque Guns",
  },
  {
    eyebrow: "Hydraulic Tools",
    title: "Hydraulic Torque Wrenches",
    text: "Industrial hydraulic bolting tools built for controlled output, demanding environments, and critical joint applications.",
    href: "/products/hydraulic-torque-wrenches",
    cta: "Explore Hydraulic Torque Wrenches",
  },
];

const valueCards = [
  {
    title: "Built for Industrial Use",
    text: "ToughTorq is positioned around real industrial bolting demand, with tools intended for practical field work and serious applications.",
  },
  {
    title: "Designed to Grow",
    text: "The site begins with core product families and a clear distributor structure, with room to expand into a broader tooling platform.",
  },
  {
    title: "Built for Partners",
    text: "The brand direction supports both end users and regional distributors, giving ToughTorq a stronger growth path from the start.",
  },
];

const quickLinks = [
  {
    title: "Products",
    text: "Explore the current ToughTorq lineup.",
    href: "/products",
  },
  {
    title: "Platform",
    text: "See the broader digital direction behind the brand.",
    href: "/platform",
  },
  {
    title: "Brand Story",
    text: "Learn more about the direction behind ToughTorq.",
    href: "/brand-story",
  },
  {
    title: "Distributors",
    text: "Explore the distributor program and partner direction.",
    href: "/distributors",
  },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12 lg:py-32">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.28em] text-red-600">
              ToughTorq
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-[#666666] md:text-6xl lg:text-7xl">
              Industrial bolting tools built for real work.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              ToughTorq is built as a serious industrial bolting brand focused
              on practical product categories, strong distributor support, and a
              cleaner digital foundation for long-term growth.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                View Products
              </Link>
              <Link
                href="/find-a-distributor"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Find a Distributor
              </Link>
              <Link
                href="/become-a-distributor"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Become a Distributor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600">
              Core Product Families
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Built around the essentials first
            </h2>
            <p className="mt-5 text-base leading-8 text-white/80 md:text-lg">
              The current lineup focuses on two foundational categories that fit
              a wide range of industrial bolting applications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {productCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-10"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666]">
                  {card.title}
                </h3>
                <p className="mt-5 leading-8 text-white/78">{card.text}</p>
                <div className="mt-8">
                  <Link
                    href={card.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {valueCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8"
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

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-red-600">
                Distributor Direction
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl">
                Built for regional growth
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                ToughTorq is developing a distributor-focused structure that
                supports stronger market coverage, cleaner lead flow, and a more
                organized path for future partners.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                The site is not only about products. It also supports
                distributor relationships, partner tools, and a stronger
                platform as the brand continues to grow.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/distributors"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                >
                  Distributor Overview
                </Link>
                <Link
                  href="/distributor-login"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                >
                  Distributor Login
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600 md:p-8"
                >
                  <h3 className="text-2xl font-semibold text-[#666666]">
                    {link.title}
                  </h3>
                  <p className="mt-4 leading-8 text-white/75">{link.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 text-center transition hover:border-red-600 md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-red-600">
              Get Started
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#666666] md:text-4xl lg:text-5xl">
              Need help with a project or product fit?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              Whether you know what you need or want help identifying the right
              direction, ToughTorq provides clear paths for general contact,
              distributor support, and partnership inquiries.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-red-600 bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                Contact ToughTorq
              </Link>
              <Link
                href="/find-a-distributor"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Find a Distributor
              </Link>
              <Link
                href="/brand-story"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-600"
              >
                Brand Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}