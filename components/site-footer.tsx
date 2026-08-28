import Image from "next/image";
import Link from "next/link";

const productLinks = [
  {
    title: "Torquing",
    links: [
      {
        label: "Battery Torque Guns",
        href: "/products/battery-torque-guns",
      },
      {
        label: "Pneumatic Torque Guns",
        href: "/products/pneumatic-torque-guns",
      },
      {
        label: "Hydraulic Torque Wrenches",
        href: "/products/hydraulic-torque-wrenches",
      },
      {
        label: "Torque Multipliers",
        href: "/products/torque-multipliers",
      },
      {
        label: "Manual & Digital Torque Wrenches",
        href: "/products/manual-digital-torque-wrenches",
      },
    ],
  },
  {
    title: "Hydraulics",
    links: [
      {
        label: "Hydraulic Pumps",
        href: "/products/hydraulic-pumps",
      },
      {
        label: "Hydraulic Hoses",
        href: "/products/hydraulic-hoses",
      },
      {
        label: "Fittings & Couplers",
        href: "/products/hydraulic-fittings-couplers",
      },
      {
        label: "Hydraulic Cylinders & Rams",
        href: "/products/hydraulic-cylinders-rams",
      },
      {
        label: "Hydraulic Nuts",
        href: "/products/hydraulic-nuts",
      },
    ],
  },
  {
    title: "Tensioning & Maintenance",
    links: [
      {
        label: "Bolt Tensioners",
        href: "/products/bolt-tensioners",
      },
      {
        label: "Reaction Washers",
        href: "/products/reaction-washers",
      },
      {
        label: "Sockets & Reaction Arms",
        href: "/products/sockets-reaction-arms",
      },
      {
        label: "Flange & Alignment Tools",
        href: "/products/flange-tools",
      },
      {
        label: "Pullers & Nut Splitters",
        href: "/products/pullers-nut-splitters",
      },
      {
        label: "Bearing Heaters",
        href: "/products/bearing-heaters",
      },
    ],
  },
  {
    title: "Portable Valve Actuation",
    links: [
      {
        label: "PVA Systems",
        href: "/products/valve-actuator-tools",
      },
      {
        label: "Battery PVA",
        href: "/products/valve-actuator-tools",
      },
      {
        label: "Pneumatic PVA",
        href: "/products/valve-actuator-tools",
      },
      {
        label: "Gas PVA",
        href: "/products/valve-actuator-tools",
      },
      {
        label: "Water Network PVA",
        href: "/products/valve-actuator-tools",
      },
      {
        label: "PVA Heads & Adaptors",
        href: "/products/valve-actuator-tools",
      },
      {
        label: "PVA Accessories",
        href: "/products/valve-actuator-tools",
      },
    ],
  },
];

const companyLinks = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Resources",
    href: "/platform",
  },
  {
    label: "About ToughTorq",
    href: "/brand-story",
  },
  {
    label: "Distributors",
    href: "/distributors",
  },
  {
    label: "Find a Distributor",
    href: "/find-a-distributor",
  },
  {
    label: "Become a Distributor",
    href: "/become-a-distributor",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dddddd] bg-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2.2fr]">
          {/* BRAND COLUMN */}
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/TOUGHTORQ-logo.png"
                alt="ToughTorq"
                width={220}
                height={64}
                className="h-auto w-[190px]"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#666666]">
              Industrial torque, bolting, tensioning, hydraulic, lifting,
              flange maintenance, and portable valve actuation equipment.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/request-a-quote"
                className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-2 text-sm font-semibold text-white"
              >
                Request a Quote
              </Link>

              <Link
                href="/find-a-distributor"
                className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-[#666666] bg-white px-5 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
              >
                Find a Distributor
              </Link>
            </div>
          </div>

          {/* PRODUCT LINKS */}
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {productLinks.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                  {group.title}
                </p>

                <div className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <Link
                      key={`${group.title}-${link.label}`}
                      href={link.href}
                      className="block text-sm leading-6 text-[#555555] transition hover:text-[#ed1c24]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPANY NAV */}
      <div className="border-t border-[#dddddd] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-7 md:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#555555] transition hover:text-[#ed1c24]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/request-a-quote"
              className="text-sm font-semibold text-[#ed1c24]"
            >
              Build a Quote Request →
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#dddddd] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 py-5 text-xs text-[#777777] md:flex-row md:items-center md:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} ToughTorq. All rights reserved.
          </p>

          <p>Industrial Torque, Bolting & Hydraulic Equipment</p>
        </div>
      </div>
    </footer>
  );
}