import type { Metadata } from "next";
import Link from "next/link";

import { TechnicalDownloads } from "@/components/technical-downloads";

import { reactionWashers } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Reaction Washer Systems",
  description:
    "Technical data, design principles, size range, material, corrosion resistance, dual-socket compatibility, and support information for ToughTorq Reaction Washers.",
};

export default function ReactionWashersPage() {
  const family = reactionWashers;
  const components = family.componentGroups ?? [];

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Reaction Control
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Reaction Washer
            <br />
            Systems
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#technical-data"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
            >
              View Technical Data
            </Link>

            <Link
              href="#system"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444]"
            >
              System Components
            </Link>

            <Link
              href="/find-a-distributor"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444]"
            >
              Find a Distributor
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Reaction-Arm-Free Tightening
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Contain reaction torque at the fastener
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-[#555555]">
            A matched dual socket engages both the fastener and the
            gear-shaped outer profile of the lower washer. Reaction torque is
            contained coaxially at the joint, eliminating the need for an
            external reaction arm while the wedge-locking washer pair helps
            preserve preload under vibration and dynamic loading.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {family.features.map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-[#dddddd] bg-white p-5"
              >
                <span className="font-bold text-[#ed1c24]">✓</span>
                <p className="mt-3 text-sm leading-6 text-[#555555]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="technical-data"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Technical Data
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Published Reaction Washer specifications
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Size Range", "M16–M48 / 5/8–1-3/4 in"],
              ["Material", "1.1191 (C45E)"],
              ["Hardness", "485 ± 25 HV 0.3"],
              ["Coating", "Black zinc flake (flZnnc)"],
              ["Corrosion Resistance", "Minimum 1,000 hours NSS / ISO 9227"],
              ["Bolt Strength", "Through property class 12.9"],
              ["Nut Strength", "Through property class 12"],
              ["Design Principle", "DIN 25201 wedge-locking principles"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#fafafa] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                  {label}
                </p>
                <p className="mt-2 font-semibold leading-6 text-[#3f4448]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-[#666666]">
            Additional nominal sizes, materials, and coatings are available on
            request. The canonical catalog does not invent individual washer
            model numbers where the manufacturer documentation publishes only
            the verified size range.
          </p>
        </div>
      </section>

      <section
        id="system"
        className="scroll-mt-24 border-b border-[#dedede] bg-[#f7f7f7]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            System Components
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Washer, dual socket & tool adaptor
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {components.map((component) => (
              <article
                key={component.id}
                className="rounded-xl border border-[#dddddd] bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-[#3f4448]">
                  {component.displayName}
                </h3>

                {component.description && (
                  <p className="mt-4 text-sm leading-7 text-[#555555]">
                    {component.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Tool Compatibility
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Match the dual socket to the complete bolting system
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Dual sockets can be configured for common electric, pneumatic,
              and hydraulic torque tools. The socket must match the torque-tool
              interface, fastener, and Reaction Washer size as one complete
              coaxial system.
            </p>

            <div className="mt-7 space-y-4">
              {family.compatibility.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-[#555555]"
                >
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Applications
            </p>

            <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
              {family.applications.map((application) => (
                <div key={application} className="bg-[#fafafa] p-5">
                  <p className="font-medium text-[#444444]">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Related Equipment
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Hydraulic Torque Wrenches", "/products/hydraulic-torque-wrenches"],
              ["Battery Torque Guns", "/products/battery-torque-guns"],
              ["Pneumatic Torque Guns", "/products/pneumatic-torque-guns"],
              ["Sockets & Reaction Arms", "/products/sockets-reaction-arms"],
            ].map(([title, href]) => (
              <Link
                key={title}
                href={href}
                className="rounded-xl border border-[#dddddd] bg-white p-5 transition hover:border-[#ed1c24]"
              >
                <p className="font-semibold text-[#3f4448]">{title}</p>
                <p className="mt-5 text-sm font-semibold text-[#ed1c24]">
                  View Products →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TechnicalDownloads
        title="Reaction Washer technical resources"
        downloads={family.downloads}
        fallbackTitles={[
          "Reaction Washer Technical Data",
          "Dual Socket Selection Guide",
          "Reaction Washer Application Guide",
        ]}
        background="white"
      />

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Distribution
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Find a ToughTorq distributor
            </h2>
            <p className="mt-4 leading-7 text-[#555555]">
              Connect with the ToughTorq distribution network for washer,
              socket, and torque-tool matching.
            </p>
            <Link
              href="/find-a-distributor"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] px-5 py-2 text-sm font-semibold text-[#444444]"
            >
              Find a Distributor
            </Link>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Purchase & Application Support
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Commercial support through JAM Torque
            </h2>
            <p className="mt-4 leading-7 text-[#555555]">
              For purchasing, dual-socket matching, tool selection, and
              application support in JAM Torque&apos;s supported market,
              continue to JAMTorque.com.
            </p>
            <a
              href={family.jamMarketplaceUrl ?? "https://jamtorque.com"}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-2 text-sm font-semibold text-white"
            >
              Visit JAM Torque →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
