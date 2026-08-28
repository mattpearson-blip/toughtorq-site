import Link from "next/link";

const digitalModels = [
  "TTDMT-20",
  "TTDMT-30",
  "TTDMT-60",
  "TTDMT-135",
  "TTDMT-135-L",
  "TTDMT-200",
  "TTDMT-340",
  "TTDMT-400",
  "TTDMT-500",
  "TTDMT-850",
  "TTDMT-1000",
];

const features = [
  "Digital torque measurement",
  "Multiple torque ranges",
  "Interchangeable head configurations",
  "Designed for controlled fastening",
  "Suitable for inspection and verification",
  "Portable manual operation",
];

const applications = [
  "Industrial assembly",
  "Maintenance and repair",
  "Quality control",
  "Torque verification",
  "Flange bolting",
  "Equipment installation",
  "Production environments",
  "Field service",
];

const relatedProducts = [
  {
    title: "Battery Torque Guns",
    href: "/products/battery-torque-guns",
  },
  {
    title: "Pneumatic Torque Guns",
    href: "/products/pneumatic-torque-guns",
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

export default function ManualDigitalTorqueWrenchesPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#2b2b2b]">
      {/* HERO */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#ed1c24]">
            Manual Torque Tools
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-[#3f4448] md:text-6xl">
            Manual & Digital
            <br />
            Torque Wrenches
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-[#ed1c24]" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#444444]">
            Manual torque tools for controlled fastening, inspection,
            verification, maintenance, and industrial assembly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-a-quote?product=Manual%20%26%20Digital%20Torque%20Wrenches"
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

      {/* DIGITAL TORQUE WRENCHES */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            DMT Series
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Digital Manual Torque Wrenches
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Digital torque wrenches provide a portable manual solution for
            controlled torque application and torque verification across a
            range of industrial applications.
          </p>

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
            DMT Series Model Range
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#555555]">
            Select a model to add it directly to your quote request.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#dddddd]">
            <div className="grid grid-cols-[1fr_auto] bg-[#d90f16] px-5 py-4 text-sm font-semibold text-white">
              <span>Model</span>
              <span>Quote</span>
            </div>

            <div>
              {digitalModels.map((model, index) => (
                <div
                  key={model}
                  className={`grid grid-cols-[1fr_auto] items-center gap-4 border-b border-[#dddddd] px-5 py-4 last:border-b-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
                  }`}
                >
                  <QuoteModelLink
                    model={model}
                    product="Digital Manual Torque Wrenches"
                  />

                  <Link
                    href={`/request-a-quote?model=${encodeURIComponent(
                      model
                    )}&product=${encodeURIComponent(
                      "Digital Manual Torque Wrenches"
                    )}`}
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

      {/* MANUAL TORQUE */}
      <section className="border-b border-[#dedede] bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Manual Torque
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
                Controlled torque without external power
              </h2>

              <p className="mt-5 leading-8 text-[#555555]">
                Manual torque wrenches are suited for applications where
                portability, controlled fastening, inspection, and repeatable
                torque application are required without hydraulic, pneumatic,
                or battery power.
              </p>
            </div>

            <div className="rounded-xl border border-[#dddddd] bg-white p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                Selection Factors
              </p>

              <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
                {[
                  "Required Torque",
                  "Fastener Size",
                  "Drive Size",
                  "Tool Length",
                  "Available Clearance",
                  "Head Configuration",
                  "Accuracy Requirement",
                  "Application Type",
                ].map((item) => (
                  <div key={item} className="bg-[#fafafa] p-4">
                    <p className="font-medium text-[#444444]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-[#dedede] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
            Torque application and verification
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <div key={application} className="bg-[#fafafa] p-5">
                <p className="font-medium text-[#444444]">{application}</p>
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
              Torque Wrench Downloads
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "DMT Series Product Cutsheet",
                "Digital Torque Wrench Model Guide",
                "Manual Torque Wrench Operating Guide",
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
              Need help selecting a torque wrench?
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              Include the required torque range, fastener size, drive size,
              available clearance, and application details with your request.
            </p>

            <div className="mt-8">
              <Link
                href="/request-a-quote?product=Manual%20%26%20Digital%20Torque%20Wrenches"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ed1c24] px-6 py-3 text-sm font-semibold text-white"
              >
                Request Torque Wrench Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}