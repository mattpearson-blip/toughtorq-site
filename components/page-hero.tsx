type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
          {eyebrow}
        </div>
        <h1 className="mt-3 max-w-5xl text-4xl font-black uppercase tracking-tight text-[#666666] md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-white/85">
          {text}
        </p>
      </div>
    </section>
  );
}