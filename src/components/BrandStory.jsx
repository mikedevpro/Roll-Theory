const pillars = [
  {
    title: "Curated Design",
    text: "A premium storefront concept focused on sharp visual identity, clear product presentation, and modern brand feel.",
  },
  {
    title: "Commerce Ready",
    text: "Built as a prototype for connecting a custom website to real e-commerce flows without needing a full rebuild.",
  },
  {
    title: "Responsive UX",
    text: "Designed to feel smooth across desktop and mobile with strong hierarchy, modern spacing, and conversion-minded UI.",
  },
];

export default function BrandStory() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/45 mb-4">
              About the concept
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
              A modern storefront prototype for brands that want to sell from a custom website.
            </h2>
            <p className="mt-6 max-w-2xl text-white/70 leading-7">
              Roll Theory is a portfolio concept designed to show how a branded
              frontend experience can connect cleanly to commerce. Instead of
              relying on a generic template, the experience focuses on identity,
              product storytelling, and a smoother path to purchase.
            </p>
          </div>

          <div className="grid gap-4">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/65 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}