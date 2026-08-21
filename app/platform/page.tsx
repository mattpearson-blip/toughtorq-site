import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const resources = [
  "Product documentation",
  "Cutsheets",
  "Operational charts",
  "Technical specifications",
  "Distributor resources",
  "Application support",
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Product information and support"
        text="Technical information, product documentation, and support resources for ToughTorq equipment."
      />

      <section className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-[#666666]">
                Technical Resources
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-[#444444]">
                Product pages will include specifications, cutsheets,
                dimensional information, operating data, and other technical
                resources as they become available.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {resources.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#d6d6d6] bg-white p-5 text-sm font-semibold text-[#555555]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link href="/products" className="tt-button-primary">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}