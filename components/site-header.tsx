"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/platform", label: "Resources" },
  { href: "/brand-story", label: "About" },
  { href: "/distributors", label: "Distributors" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#d6d6d6] bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/TOUGHTORQ-logo.png"
              alt="ToughTorq"
              className="h-8 w-auto md:h-10 lg:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#555555] transition hover:text-[#ed1c24]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/find-a-distributor"
              className="rounded-xl border border-[#d0d0d0] bg-white px-4 py-2 text-xs font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Find a Distributor
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#ed1c24] bg-[#ed1c24] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d0d0d0] bg-white text-[#444444] md:hidden"
          >
            <span className="text-lg leading-none">
              {mobileMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 border-t border-[#e0e0e0] pt-4 md:hidden">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-[#dddddd] bg-[#f7f7f7] px-4 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/find-a-distributor"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl border border-[#dddddd] bg-white px-4 py-3 text-sm font-semibold text-[#444444]"
              >
                Find a Distributor
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl border border-[#ed1c24] bg-[#ed1c24] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact ToughTorq
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}