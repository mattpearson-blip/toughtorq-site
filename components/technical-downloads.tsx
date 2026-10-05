import type { CatalogDownload } from "@/data/catalog";

type TechnicalDownloadsProps = {
  eyebrow?: string;
  title: string;
  downloads: CatalogDownload[];
  fallbackTitles?: string[];
  background?: "white" | "gray";
};

function downloadTypeLabel(type: CatalogDownload["type"]) {
  if (type === "cutsheet") return "Cutsheet";
  if (type === "manual") return "Manual";
  if (type === "drawing") return "Drawing";
  if (type === "brochure") return "Brochure";
  return "Technical Resource";
}

export function TechnicalDownloads({
  eyebrow = "Downloads",
  title,
  downloads,
  fallbackTitles = [],
  background = "white",
}: TechnicalDownloadsProps) {
  const available = downloads.filter(
    (download) => download.status !== "coming-soon"
  );
  const comingSoon = downloads.filter(
    (download) => download.status === "coming-soon"
  );

  return (
    <section
      id="downloads"
      className={`scroll-mt-24 border-b border-[#dedede] ${
        background === "gray" ? "bg-[#f7f7f7]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#3f4448]">
          {title}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {available.map((download) => (
            <a
              key={download.href}
              href={download.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-[#dddddd] bg-[#fafafa] p-5 transition hover:border-[#ed1c24]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                {downloadTypeLabel(download.type)}
              </p>

              <p className="mt-2 font-semibold text-[#3f4448]">
                {download.title}
              </p>

              <p className="mt-5 text-sm font-semibold text-[#ed1c24]">
                View PDF →
              </p>
            </a>
          ))}

          {comingSoon.map((download) => (
            <div
              key={download.title}
              className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#888888]">
                {downloadTypeLabel(download.type)}
              </p>

              <p className="mt-2 font-semibold text-[#3f4448]">
                {download.title}
              </p>

              <p className="mt-2 text-sm text-[#777777]">In preparation</p>
            </div>
          ))}

          {downloads.length === 0 &&
            fallbackTitles.map((fallbackTitle) => (
              <div
                key={fallbackTitle}
                className="rounded-xl border border-[#dddddd] bg-[#fafafa] p-5"
              >
                <p className="font-semibold text-[#3f4448]">
                  {fallbackTitle}
                </p>
                <p className="mt-2 text-sm text-[#777777]">
                  Download publishing in progress
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
