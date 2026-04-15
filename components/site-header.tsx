"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/platform", label: "Platform" },
  { href: "/brand-story", label: "Brand Story" },
  { href: "/distributors", label: "Distributors" },
  { href: "/contact", label: "Contact" },
];

const actionLinks = [
  {
    href: "/find-a-distributor",
    label: "Find a Distributor",
    className:
      "rounded-lg border border-red-600 bg-red-600 px-4 py-3 text-sm font-semibold uppercase text-white transition hover:opacity-90",
  },
  {
    href: "/become-a-distributor",
    label: "Become a Distributor",
    className:
      "rounded-lg border border-neutral-500 bg-neutral-500 px-4 py-3 text-sm font-semibold uppercase text-white transition hover:bg-neutral-400",
  },
  {
    href: "/distributor-login",
    label: "Distributor Login",
    className:
      "rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold uppercase text-white transition hover:bg-white/10",
  },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/TOUGHTORQ-logo.png"
              alt="ToughTorq"
              className="h-8 w-auto md:h-10 lg:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#666666] transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/find-a-distributor"
              className="rounded-lg border border-red-600 bg-red-600 px-3 py-2 text-[11px] font-semibold uppercase text-white transition hover:opacity-90"
            >
              Find a Distributor
            </Link>

            <Link
              href="/become-a-distributor"
              className="rounded-lg border border-neutral-500 bg-neutral-500 px-3 py-2 text-[11px] font-semibold uppercase text-white transition hover:bg-neutral-400"
            >
              Become a Distributor
            </Link>

            <Link
              href="/distributor-login"
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase text-white transition hover:bg-white/10"
            >
              Distributor Login
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/find-a-distributor"
              className="rounded-lg border border-red-600 bg-red-600 px-3 py-2 text-[11px] font-semibold uppercase text-white transition hover:opacity-90"
            >
              Find
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
            >
              <span className="text-lg leading-none">
                {mobileMenuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 space-y-4 border-t border-white/10 pt-4 md:hidden">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm font-semibold text-white transition hover:border-red-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="grid gap-2">
              {actionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={link.className}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}