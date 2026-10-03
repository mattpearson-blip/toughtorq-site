import type { Metadata } from "next";
import Link from "next/link";

import { portableValveActuation } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Portable Valve Actuator Systems",
  description:
    "Technical overview, power-platform data, component selection, compatibility, applications, and support information for ToughTorq portable valve actuator systems.",
};

const modelOrder = ["mc89", "ja73", "hl83", "py68", "h2o-kit"];

const compatibilityModels = portableValveActuation.models.filter((model) =>
  modelOrder.includes(model.id)
);

const componentGroups = [
  "Actuator Heads",
  "Valve Adaptors",
  "Reaction Management",
  "Options & Accessories",
];

function compatibilityStatus(modelId: string, componentId: string) {
  return portableValveActuation.compatibilityMatrix?.find(
    (entry) => entry.modelId === modelId && entry.componentId === componentId
  );
}

function statusLabel(
  status:
    | "compatible"
    | "conditional"
    | "not-compatible"
    | "needs-verification"
    | undefined
) {
  if (status === "compatible") return "Compatible";
  if (status === "conditional") return "Conditional";
  if (status === "not-compatible") return "Not applicable";
  return "Confirm";
}

function statusClass(
  status:
    | "compatible"
    | "conditional"
    | "not-compatible"
    | "needs-verification"
    | undefined
) {
  if (status === "compatible") {
    return "border-[#b8d9bc] bg-[#f2faf3] text-[#286432]";
  }

  if (status === "conditional") {
    return "border-[#e7d6a0] bg-[#fffaf0] text-[#775d16]";
  }

  if (status === "not-compatible") {
    return "border-[#dddddd] bg-[#f5f5f5] text-[#888888]";
  }

  return "border-[#dddddd] bg-white text-[#666666]";
}

export default function ValveActuatorToolsPage() {
  const family = portableValveActuation;
  const components = family.componentGroups ?? [];

  const matrixComponents = components.filter((component) =>
    [
      "straight-head",
      "right-angle-head",
      "standard-banjo-head",
      "heavy-banjo-head",
      "air-hose",
      "battery-pack",
    ].includes(component.id)
  );

  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Portable Valve Actuation
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Portable Valve
            <br />
            Actuator Systems
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            {family.longDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#technical-data"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Technical Data
            </Link>

            <Link
              href="#compatibility"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Compatibility
            </Link>

            <Link
              href="#downloads"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#777777] bg-white px-6 py-3 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Downloads
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-3 lg:grid-cols-6">
            {[
              "Water",
              "Oil & Gas",
              "Power Generation",
              "Mining",
              "Pulp & Paper",
              "Petrochemical",
            ].map((industry) => (
              <div
                key={industry}
                className="flex min-h-[70px] items-center justify-center bg-white px-4 text-center"
              >
                <p className="text-sm font-semibold text-[#444444]">
                  {industry}
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
            Power Platforms
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Select the drive platform
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Choose the power source around the valve environment, access,
            available utilities, operating frequency, and required torque.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {family.models.map((model) => (
              <article
                key={model.id}
                className="flex h-full flex-col rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
              >
                <div>
                  <p className="text-sm font-bold text-[#ed1c24]">
                    {model.model}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-[#3f4448]">
                    {String(model.specifications.powerSource)}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#555555]">
                    {model.description}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <div className="rounded-lg border border-[#dddddd] bg-white p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#888888]">
                      Maximum System Torque
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[#3f4448]">
                      Up to{" "}
                      {String(model.specifications.maximumSystemTorqueFtLb)}{" "}
                      ft-lb
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#e1c983] bg-[#fffaf0] p-5">
            <p className="font-semibold text-[#65501a]">
              Detailed variant data is being verified before publication.
            </p>

            <p className="mt-2 text-sm leading-7 text-[#6f6033]">
              Weight, free speed, dimensions, battery/runtime, air-consumption,
              and fuel-specific values vary by actuator variant. ToughTorq will
              publish those values only after the exact production variants are
              confirmed, rather than mixing data from different revisions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            System Architecture
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Configure the system in five stages
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-5">
            {[
              ["01", "Power"],
              ["02", "Head"],
              ["03", "Adaptor"],
              ["04", "Reaction"],
              ["05", "Options"],
            ].map(([number, title]) => (
              <div key={number} className="bg-white p-5">
                <p className="text-xs font-bold text-[#ed1c24]">{number}</p>
                <p className="mt-2 text-lg font-semibold text-[#3f4448]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {componentGroups.map((groupName, groupIndex) => {
        const groupItems = components.filter(
          (component) => component.group === groupName
        );

        return (
          <section
            key={groupName}
            className={
              "border-b border-[#dedede] " +
              (groupIndex % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]")
            }
          >
            <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                {groupName}
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
                {groupName === "Actuator Heads"
                  ? "Match the head to valve access"
                  : groupName === "Valve Adaptors"
                  ? "Match the interface to the valve"
                  : groupName === "Reaction Management"
                  ? "Control the reaction force"
                  : "Complete the operating package"}
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {groupItems.map((component) => (
                  <article
                    key={component.id}
                    className="rounded-xl border border-[#dddddd] bg-white p-5"
                  >
                    <h3 className="text-lg font-semibold text-[#3f4448]">
                      {component.displayName}
                    </h3>

                    {component.description && (
                      <p className="mt-3 text-sm leading-7 text-[#555555]">
                        {component.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section
        id="compatibility"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Compatibility
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Published platform compatibility
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-[#555555]">
            Compatibility is not simply yes or no: several head combinations
            are supported only on specific actuator variants or below a defined
            torque limit. “Conditional” means the exact actuator variant and
            torque rating must be checked before configuration.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#dddddd]">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#3f4448] text-white">
                <tr>
                  <th className="px-4 py-4 font-semibold">Component</th>
                  {compatibilityModels.map((model) => (
                    <th
                      key={model.id}
                      className="px-4 py-4 text-center font-semibold"
                    >
                      {model.model}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {matrixComponents.map((component, index) => (
                  <tr
                    key={component.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"}
                  >
                    <td className="border-t border-[#dddddd] px-4 py-4 font-semibold text-[#3f4448]">
                      {component.displayName}
                    </td>

                    {compatibilityModels.map((model) => {
                      const entry = compatibilityStatus(
                        model.id,
                        component.id
                      );

                      return (
                        <td
                          key={component.id + "-" + model.id}
                          className="border-t border-[#dddddd] px-4 py-4 text-center"
                          title={entry?.note}
                        >
                          <span
                            className={
                              "inline-flex rounded-full border px-3 py-1 text-xs font-semibold " +
                              statusClass(entry?.status)
                            }
                          >
                            {statusLabel(entry?.status)}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-[#b8d9bc] bg-[#f2faf3] p-5">
              <p className="font-semibold text-[#286432]">Compatible</p>
              <p className="mt-2 text-sm leading-6 text-[#4f6653]">
                A published configuration exists for the platform.
              </p>
            </div>

            <div className="rounded-xl border border-[#e7d6a0] bg-[#fffaf0] p-5">
              <p className="font-semibold text-[#775d16]">Conditional</p>
              <p className="mt-2 text-sm leading-6 text-[#6f6033]">
                Variant, head rating, or torque limit must be checked.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5">
              <p className="font-semibold text-[#555555]">Confirm</p>
              <p className="mt-2 text-sm leading-6 text-[#666666]">
                ToughTorq has not yet published enough information to approve
                the exact pairing.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[#dddddd] bg-[#fafafa] p-6">
            <h3 className="text-xl font-semibold text-[#3f4448]">
              H2O Water Network Kit
            </h3>

            <p className="mt-3 max-w-4xl text-sm leading-7 text-[#555555]">
              H2O is handled as a configured water-network package rather than
              as a general-purpose actuator/head platform. Its valve key,
              extension, socket, reaction equipment, battery configuration, and
              case should be selected from the dedicated H2O package data.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Benefits
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Portable powered valve operation
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              [
                "Operator Safety",
                "Reduce manual strain",
                "Reduce physical effort and limit operator exposure during difficult or repetitive valve operations.",
              ],
              [
                "Equipment Protection",
                "Controlled operation",
                "Controlled torque helps protect valves and surrounding equipment during powered operation.",
              ],
              [
                "Productivity",
                "Complete repetitive work faster",
                "Portable powered operation can improve productivity across facilities and networks with many manually operated valves.",
              ],
            ].map(([eyebrow, title, text]) => (
              <div
                key={eyebrow}
                className="rounded-xl border border-[#dddddd] bg-white p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                  {eyebrow}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[#3f4448]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#555555]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="downloads"
        className="scroll-mt-24 border-b border-[#dedede] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Downloads
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Portable valve actuation resources
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "PVA System Overview",
              "Power Platform Technical Data",
              "Compatibility & Selection Guide",
              "H2O Water Network Kit",
            ].map((title) => (
              <div
                key={title}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
              >
                <p className="font-semibold text-[#3f4448]">{title}</p>
                <p className="mt-2 text-sm text-[#777777]">
                  Download publishing in progress
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Connect with the ToughTorq distribution network for local product
              availability, system selection, and technical support.
            </p>

            <Link
              href="/find-a-distributor"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[#666666] px-5 py-2 text-sm font-semibold text-[#444444] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              Find a Distributor
            </Link>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Purchase, Rental & Service
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#3f4448]">
              Commercial support through JAM Torque
            </h2>

            <p className="mt-4 leading-7 text-[#555555]">
              For purchasing, rental availability, service, and application
              support in JAM Torque&apos;s supported market, continue to
              JAMTorque.com.
            </p>

            <a
              href={family.jamMarketplaceUrl ?? "https://jamtorque.com"}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ed1c24] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Visit JAM Torque →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
