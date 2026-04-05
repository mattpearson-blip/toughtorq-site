import Link from "next/link";

type CardItem = {
  title: string;
  desc: string;
  path: string;
};

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.path}
          className="group flex min-h-[280px] flex-col border border-white/10 bg-neutral-900 p-6 text-left transition hover:border-red-600/60"
        >
          <div className="text-xl font-black uppercase tracking-tight text-[#666666]">
            {item.title}
          </div>
          <p className="mt-4 text-sm leading-7 text-white/85">
            {item.desc}
          </p>
          <div className="mt-auto pt-6 text-sm font-bold uppercase tracking-wide text-red-600 transition group-hover:text-white">
            View Platform
          </div>
        </Link>
      ))}
    </div>
  );
}