import {
  ProductCard,
  ProductCardItem,
} from "./product-card";

type ProductSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ProductCardItem[];
  columns?: 2 | 3 | 4;
  compactCards?: boolean;
  background?: "white" | "gray";
};

export function ProductSection({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  compactCards = false,
  background = "white",
}: ProductSectionProps) {
  const gridColumns =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className={`border-b border-[#dedede] ${
        background === "gray"
          ? "bg-[#f7f7f7]"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
        {(eyebrow || title || description) && (
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1c24]">
                {eyebrow}
              </p>
            )}

            <h2 className="mt-3 text-3xl font-semibold text-[#3f4448] md:text-4xl">
              {title}
            </h2>

            {description && (
              <p className="mt-4 leading-8 text-[#555555]">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={`mt-8 grid gap-5 ${gridColumns}`}>
          {items.map((item) => (
            <ProductCard
              key={[
                item.category || "",
                item.model || "",
                item.title,
              ].join("-")}
              item={item}
              compact={compactCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
}