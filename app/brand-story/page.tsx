import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function BrandStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About ToughTorq"
        title="Industrial tools designed around the work"
        text="ToughTorq focuses on torque, bolting, hydraulic, tensioning, and specialty tools for demanding industrial applications."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 md:p-9">
              <h2 className="text-3xl font-semibold text-[#666666]">
                Built for industrial applications
              </h2>

              <p className="mt-5 leading-8 text-[#444444]">
                ToughTorq equipment is selected and developed for applications
                where controlled torque, hydraulic force, repeatability, and
                field usability matter.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d6d6d6] bg-white p-6 md:p-9">
              <h2 className="text-3xl font-semibold text-[#666666]">
                A broad tooling range
              </h2>

              <p className="mt-5 leading-8 text-[#444444]">
                The product range covers battery and hydraulic torque tools,
                pumps, tensioning systems, cylinders, flange equipment, pullers,
                reaction tooling, and other specialized industrial equipment.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/products" className="tt-button-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}