"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const productGroups = [
  {
    title: "Torquing",
    items: [
      {
        title: "Battery Torque Guns",
        href: "/products/battery-torque-guns",
      },
      {
        title: "Pneumatic Torque Guns",
        href: "/products/pneumatic-torque-guns",
      },
      {
        title: "Hydraulic Torque Wrenches",
        href: "/products/hydraulic-torque-wrenches",
      },
      {
        title: "Manual & Digital Torque Wrenches",
        href: "/products/manual-digital-torque-wrenches",
      },
      {
        title: "Torque Multipliers",
        href: "/products/torque-multipliers",
      },
      {
        title: "Reaction Washers",
        href: "/products/reaction-washers",
      },
      {
        title: "Sockets & Reaction Arms",
        href: "/products/sockets-reaction-arms",
      },
    ],
  },

  {
    title: "Hydraulic Pumps & Accessories",
    items: [
      {
        title: "Hydraulic Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Hydraulic Hoses",
        href: "/products/hydraulic-hoses",
      },
      {
        title: "Hydraulic Fittings & Couplers",
        href: "/products/hydraulic-fittings-couplers",
      },
    ],
  },

  {
    title: "Tensioning",
    items: [
      {
        title: "Bolt Tensioners",
        href: "/products/bolt-tensioners",
      },
      {
        title: "Hydraulic Nuts",
        href: "/products/hydraulic-nuts",
      },
      {
        title: "Ultra-High-Pressure Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Ultra-High-Pressure Hoses",
        href: "/products/hydraulic-hoses",
      },
    ],
  },

  {
    title: "Lifting & Positioning",
    items: [
      {
        title: "Hydraulic Cylinders & Rams",
        href: "/products/hydraulic-cylinders-rams",
      },
      {
        title: "Hydraulic Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        title: "Hand & Foot Pumps",
        href: "/products/hydraulic-pumps",
      },
    ],
  },

  {
    title: "Flange & Maintenance",
    items: [
      {
        title: "Flange & Alignment Tools",
        href: "/products/flange-tools",
      },
      {
        title: "Pullers & Nut Splitters",
        href: "/products/pullers-nut-splitters",
      },
      {
        title: "Bearing Heaters",
        href: "/products/bearing-heaters",
      },
    ],
  },

  {
    title: "Portable Valve Actuation",
    items: [
      {
        title: "Portable Valve Actuator Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "Battery PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "Pneumatic PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "Gas PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "Water Network PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "PVA Heads & Adaptors",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "PVA Reaction Devices",
        href: "/products/valve-actuator-tools",
      },
      {
        title: "PVA Accessories",
        href: "/products/valve-actuator-tools",
      },
    ],
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dddddd] bg-white">
      <div className="mx-auto flex min-h-[78px] max-w-7xl items-center justify-between gap-6 px-4 md:px-8 lg:px-12">
        {/* LOGO */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => {
            setMobileOpen(false);
            setProductsOpen(false);
          }}
        >
          <Image
            src="/TOUGHTORQ-logo.png"
            alt="ToughTorq"
            width={210}
            height={60}
            className="h-auto w-[170px] md:w-[190px]"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">
          {/* PRODUCTS MEGA MENU */}
          <div className="group relative">
            <Link
              href="/products"
              className="flex items-center gap-1 py-7 text-sm font-semibold text-[#444444] transition hover:text-[#ed1c24]"
            >
              Products
              <span className="text-[10px]">▼</span>
            </Link>

            <div className="invisible absolute left-1/2 top-full w-[980px] -translate-x-1/2 border border-[#dddddd] bg-white opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-px bg-[#e5e5e5]">
                {productGroups.map((group) => (
                  <div key={group.title} className="bg-white p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                      {group.title}
                    </p>

                    <div className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <Link
                          key={`${group.title}-${item.title}`}
                          href={item.href}
                          className="block text-sm font-medium leading-6 text-[#555555] transition hover:text-[#ed1c24]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-[#dddddd] bg-[#f7f7f7] px-6 py-5">
                <div>
                  <p className="text-sm font-semibold text-[#3f4448]">
                    Browse the full ToughTorq product range
                  </p>

                  <p className="mt-1 text-sm text-[#666666]">
                    Find tooling by torquing, tensioning, lifting, hydraulics,
                    flange work, maintenance, or portable valve actuation.
                  </p>
                </div>

                <Link
                  href="/products"
                  className="text-sm font-semibold text-[#ed1c24]"
                >
                  View All Products →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/platform"
            className="py-7 text-sm font-semibold text-[#444444] transition hover:text-[#ed1c24]"
          >
            Resources
          </Link>

          <Link
            href="/brand-story"
            className="py-7 text-sm font-semibold text-[#444444] transition hover:text-[#ed1c24]"
          >
            About
          </Link>

          <Link
            href="/distributors"
            className="py-7 text-sm font-semibold text-[#444444] transition hover:text-[#ed1c24]"
          >
            Distributors
          </Link>

          <Link
            href="/contact"
            className="py-7 text-sm font-semibold text-[#444444] transition hover:text-[#ed1c24]"
          >
            Contact
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/find-a-distributor"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] bg-white px-4 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
          >
            Find a Distributor
          </Link>

          <Link
            href="/request-a-quote"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#dddddd] bg-white text-[#444444] lg:hidden"
        >
          <span className="text-2xl leading-none">
            {mobileOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="border-t border-[#dddddd] bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
            {/* PRODUCTS */}
            <div className="border-b border-[#eeeeee]">
              <button
                type="button"
                onClick={() => setProductsOpen((current) => !current)}
                className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-[#444444]"
              >
                <span>Products</span>

                <span className="text-[#ed1c24]">
                  {productsOpen ? "−" : "+"}
                </span>
              </button>

              {productsOpen && (
                <div className="pb-5">
                  <Link
                    href="/products"
                    onClick={() => {
                      setMobileOpen(false);
                      setProductsOpen(false);
                    }}
                    className="mb-5 block rounded-lg bg-[#f5f5f5] px-4 py-3 text-sm font-semibold text-[#ed1c24]"
                  >
                    View All Products →
                  </Link>

                  <div className="space-y-6">
                    {productGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#777777]">
                          {group.title}
                        </p>

                        <div className="mt-2 space-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={`${group.title}-${item.title}`}
                              href={item.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setProductsOpen(false);
                              }}
                              className="block rounded-md px-2 py-2 text-sm font-medium text-[#555555] transition hover:bg-[#f7f7f7] hover:text-[#ed1c24]"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* STANDARD NAV LINKS */}
            <Link
              href="/platform"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#eeeeee] py-4 text-base font-semibold text-[#444444]"
            >
              Resources
            </Link>

            <Link
              href="/brand-story"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#eeeeee] py-4 text-base font-semibold text-[#444444]"
            >
              About
            </Link>

            <Link
              href="/distributors"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#eeeeee] py-4 text-base font-semibold text-[#444444]"
            >
              Distributors
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block border-b border-[#eeeeee] py-4 text-base font-semibold text-[#444444]"
            >
              Contact
            </Link>

            {/* MOBILE CTAS */}
            <div className="grid gap-3 py-5 sm:grid-cols-2">
              <Link
                href="/find-a-distributor"
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-5 py-3 text-sm font-semibold text-[#444444]"
              >
                Find a Distributor
              </Link>

              <Link
                href="/request-a-quote"
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-3 text-sm font-semibold text-white"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}