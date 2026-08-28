import Link from "next/link";

const pneumaticModels = [
  "PT05-350SS",
  "PT10-700SS",
  "PT15-1000SS",
  "PT20-1500SS",
  "PT30-2200SS",
  "PT40-2900SS",
  "PT60-4400SS",
  "PT80-6000SS",
];

const features = [
  "Continuous-duty pneumatic operation",
  "Controlled torque output",
  "Designed for industrial bolting applications",
  "Suitable for repetitive fastening work",
  "Compact inline tool configuration",
  "Multiple torque ranges available",
];

const applications = [
  "Industrial flange bolting",
  "Power generation maintenance",
  "Oil & gas service",
  "Manufacturing and assembly",
  "Heavy equipment maintenance",
  "Pipeline work",
  "Structural bolting",
  "Shutdown and turnaround work",
];

const relatedProducts = [
  {
    title: "Battery Torque Guns",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Hydraulic Torque Wrenches",
    href: "/products/hydraulic-torque-wrenches",
  },
  {
    title: "Torque Multipliers",
    href: "/products/torque-multipliers",
  },
  {
    title: "Sockets & Reaction Arms",
    href: "/products/sockets-reaction-arms",
  },
];

function QuoteModelLink({
  model,
  product,
}: {
  model: string;
  product: string;
}) {
  return (
    <Link
      href={`/request-a-quote?model=${encodeURIComponent(
        model
      )}&product=${encodeURIComponent(product)}`}
      className="font-semibold text-[#ed1c24] underline-offset-4 transition hover:underline"
    >
      {model}
    </Link>
  );
}

export default function PneumaticTorqueGunsPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Pneumatic Torque Tools
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Pneumatic
            <br />
            Torque Guns
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Air-powered torque guns for repetitive industrial bolting and
            continuous-duty fastening applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Pneumatic%20Torque%20Guns"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Request a Quote
            </Link>

            <Link
              href="/request-a-quote"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#666666] bg-white px-6 py-3 text-sm font-semibold text-[#333333] transition hover:border-[#ed1c24] hover:text-[#ed1c24]"
            >
              View Quote Cart →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            PT Series
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Pneumatic bolting performance
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="bg-white p-5">
                <div className="flex gap-3">
                  <span className="font-bold text-[#ed1c24]">✓</span>
                  <p className="font-medium text-[#444444]">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Available Models
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            PT Series Model Range
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Select a model below to add it directly to your quote request.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#dddddd]">
            <div className="grid grid-cols-[1fr_auto] bg-[#d90f16] px-5 py-4 text-sm font-semibold text-white">
              <span>Model</span>
              <span>Quote</span>
            </div>

            <div>
              {pneumaticModels.map((model, index) => (
                <div
                  key={model}
                  className={`grid grid-cols-[1fr_auto] items-center gap-4 border-b border-[#dddddd] px-5 py-4 last:border-b-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
                  }`}
                >
                  <QuoteModelLink
                    model={model}
                    product="Pneumatic Torque Guns"
                  />

                  <Link
                    href={`/request-a-quote?model=${encodeURIComponent(
                      model
                    )}&product=${encodeURIComponent("Pneumatic Torque Guns")}`}
                    className="text-sm font-semibold text-[#ed1c24]"
                  >
                    Add →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Built for repetitive industrial bolting
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <div key={application} className="bg-white p-5">
                <p className="font-medium text-[#444444]">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AIR SUPPLY */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Air Supply
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              Match the tool to the air system
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Pneumatic torque gun performance depends on proper air supply,
              pressure, hose sizing, regulator setup, lubrication, and the
              torque requirement of the application.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
            {[
              "Available Air Pressure",
              "Air Flow",
              "Hose Size",
              "Regulator Setup",
              "Required Torque",
              "Drive Size",
              "Reaction Point",
              "Duty Cycle",
            ].map((item) => (
              <div key={item} className="bg-[#fafafa] p-5">
                <p className="font-semibold text-[#444444]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Related Equipment
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
            Other torque solutions
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="rounded-xl border border-[#dddddd] bg-white p-5 transition hover:border-[#ed1c24]"
              >
                <p className="font-semibold text-[#3f4448]">
                  {product.title}
                </p>

                <p className="mt-5 text-sm font-semibold text-[#ed1c24]">
                  View Products →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-8 lg:grid-cols-2 lg:px-12">
          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Technical Resources
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Pneumatic Torque Gun Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "PT Series Product Cutsheet",
                "PT Series Model & Torque Reference",
                "Pneumatic Torque Gun Operating Guide",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#dddddd] bg-white p-4"
                >
                  <p className="font-semibold text-[#444444]">{item}</p>

                  <p className="mt-1 text-sm text-[#777777]">
                    Download coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
              Tool Selection
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
              Need help choosing a PT Series tool?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the required torque, fastener size, drive size, available
              reaction point, and air supply information with your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Pneumatic%20Torque%20Guns"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Pneumatic Torque Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}