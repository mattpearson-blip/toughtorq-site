import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const productFamilies = [
  {
    title: "Hydraulic Bolting",
    description:
      "Square-drive hydraulic torque wrenches, cassette wrenches, sockets, and reaction tooling.",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Battery Torque Tools",
    description:
      "Digital battery torque guns designed for portable, repeatable torque application.",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Hydraulic Equipment",
    description:
      "Pumps, bolt tensioners, hydraulic nuts, cylinders, rams, hoses, couplers, and accessories.",
    href: "/products/pumps-tensioners-rams",
  },
  {
    title: "Torque & Specialty Tooling",
    description:
      "Manual and digital torque wrenches, pneumatic tools, valve actuators, pullers, flange tools, and specialty equipment.",
    href: "/products/torque-wrenches-specialty-tooling",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Industrial torque and bolting equipment"
        text="Explore ToughTorq tools by product category."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {productFamilies.map((family) => (
              <Link
                key={family.title}
                href={family.href}
                className="rounded-3xl border border-[#d6d6d6] bg-white p-6 transition hover:border-[#ed1c24] md:p-9"
              >
                <h2 className="text-2xl font-semibold text-[#666666] md:text-3xl">
                  {family.title}
                </h2>

                <p className="mt-4 leading-8 text-[#444444]">
                  {family.description}
                </p>

                <p className="mt-7 text-sm font-semibold text-[#ed1c24]">
                  Explore Products →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}