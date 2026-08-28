import { AddToQuoteButton } from "./add-to-quote-button";

export type ProductCardItem = {
  title: string;
  description?: string;
  model?: string;
  kind?: string;
  category?: string;
  details?: string;
  badge?: string;
  specs?: {
    label: string;
    value: string;
  }[];
  features?: string[];
};

type ProductCardProps = {
  item: ProductCardItem;
  compact?: boolean;
};

export function ProductCard({
  item,
  compact = false,
}: ProductCardProps) {
  const {
    title,
    description,
    model,
    kind = "Product",
    category,
    details,
    badge,
    specs,
    features,
  } = item;

  return (
    <article
      className={`flex h-full flex-col rounded-xl border border-[#dddddd] bg-white transition hover:border-[#ed1c24] ${
        compact ? "p-5" : "p-6"
      }`}
    >
      {/* HEADER */}
      <div>
        {(badge || model) && (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {badge && (
              <span className="rounded-full bg-[#f3f3f3] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#666666]">
                {badge}
              </span>
            )}

            {model && (
              <span className="text-sm font-bold text-[#ed1c24]">
                {model}
              </span>
            )}
          </div>
        )}

        <h3
          className={`font-semibold text-[#3f4448] ${
            compact ? "text-lg" : "text-xl"
          }`}
        >
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-sm leading-7 text-[#555555]">
            {description}
          </p>
        )}
      </div>

      {/* SPECS */}
      {specs && specs.length > 0 && (
        <div className="mt-5 grid gap-px overflow-hidden rounded-lg border border-[#dddddd] bg-[#dddddd] sm:grid-cols-2">
          {specs.map((spec) => (
            <div
              key={`${title}-${spec.label}`}
              className="bg-[#fafafa] px-4 py-3"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#888888]">
                {spec.label}
              </p>

              <p className="mt-1 text-sm font-semibold text-[#444444]">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* FEATURES */}
      {features && features.length > 0 && (
        <div className="mt-5 space-y-2">
          {features.map((feature) => (
            <div
              key={`${title}-${feature}`}
              className="flex gap-3 text-sm leading-6 text-[#555555]"
            >
              <span className="font-bold text-[#ed1c24]">
                ✓
              </span>

              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      {/* QUOTE BUTTON */}
      <div className="mt-auto pt-6">
        <AddToQuoteButton
          name={title}
          model={model}
          kind={kind}
          category={category}
          details={details || description}
        />
      </div>
    </article>
  );
}