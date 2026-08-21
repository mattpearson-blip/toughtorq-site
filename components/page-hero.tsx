type PageHeroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="border-b border-[#d6d6d6] bg-[#f2f2f2]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ed1c24]">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#666666] md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {text ? (
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#333333] md:text-lg">
              {text}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
