import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/TOUGHTORQ-logo.png"
            alt="ToughTorq"
            className="h-8 w-auto md:h-10 lg:h-11"
          />
        </Link>

        <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-4 text-xs font-medium uppercase md:order-2 md:w-auto md:text-sm md:normal-case">
          <Link href="/products" className="text-[#666666] transition hover:text-white">
            Products
          </Link>
          <Link href="/platform" className="text-[#666666] transition hover:text-white">
            Platform
          </Link>
          <Link href="/brand-story" className="text-[#666666] transition hover:text-white">
            Brand Story
          </Link>
          <Link href="/distributors" className="text-[#666666] transition hover:text-white">
            Distributors
          </Link>
          <Link href="/contact" className="text-[#666666] transition hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="order-2 hidden items-center gap-2 md:flex md:flex-wrap md:justify-end lg:order-3 lg:flex-nowrap">
          <Link
            href="/find-a-distributor"
            className="rounded-lg border border-red-600 bg-red-600 px-3 py-1.5 text-[11px] font-semibold uppercase text-white hover:opacity-90"
          >
            Find a Distributor
          </Link>

          <Link
            href="/become-a-distributor"
            className="rounded-lg border border-neutral-500 bg-neutral-500 px-3 py-1.5 text-[11px] font-semibold uppercase text-white hover:bg-neutral-400"
          >
            Become a Distributor
          </Link>

          <Link
            href="/distributor-login"
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase text-white hover:bg-white/10"
          >
            Distributor Login
          </Link>
        </div>
      </div>
    </header>
  );
}